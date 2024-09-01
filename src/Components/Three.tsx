import { FC, useState, useRef, useEffect, useCallback } from 'react';
// import { useAppSelector } from '../store';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const Three: FC = () => {
  const renderer = useRef(new THREE.WebGLRenderer());
  const material = useRef(new THREE.ShaderMaterial());
  const camera = useRef(
    new THREE.PerspectiveCamera(60, 1980.0 / 1080.0, 0.1, 1000.0),
  );
  const canvasContainer = useRef<HTMLDivElement | null>(null);
  // const colors = useAppSelector((state) => state.settings.colors);
  const [divContainer, setDivContainer] = useState<HTMLDivElement | null>(null);
  const div = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      setDivContainer(node);
    }
  }, []);

  useEffect(() => {
    const setRendererSize = () => {
      if (divContainer) {
        const [width, height] = [
          divContainer.getBoundingClientRect().width,
          divContainer.getBoundingClientRect().height,
        ];
        renderer.current.setSize(width, height);
        camera.current.aspect = width / height;
        camera.current.updateProjectionMatrix();
        material.current.uniforms.resolution.value = new THREE.Vector2(
          width,
          height,
        );
      }
    };
    window.addEventListener('resize', setRendererSize, false);
    return () => {
      window.removeEventListener('resize', setRendererSize);
    };
  }, [divContainer]);

  useEffect(() => {
    // === THREE.JS CODE START ===
    const scene = new THREE.Scene();

    const [width, height] = [
      divContainer?.getBoundingClientRect()?.width || 250,
      divContainer?.getBoundingClientRect()?.height || 250,
    ];
    renderer.current.setSize(width, height);
    camera.current.aspect = width / height;
    camera.current.updateProjectionMatrix();
    camera.current.position.set(1, 0, 3);
    // use ref as a mount point of the Three.js scene instead of the document.body
    canvasContainer.current?.appendChild(renderer.current.domElement);

    const controls = new OrbitControls(
      camera.current,
      renderer.current.domElement,
    );
    controls.target.set(0, 0, 0);
    controls.update();

    const cubeLoader = new THREE.CubeTextureLoader();
    const texture = cubeLoader.load([
      './public/textures/Cold_Sunset__Cam_2_Left+X.png',
      './public/textures/Cold_Sunset__Cam_3_Right-X.png',
      './public/textures/Cold_Sunset__Cam_4_Up+Y.png',
      './public/textures/Cold_Sunset__Cam_5_Down-Y.png',
      './public/textures/Cold_Sunset__Cam_0_Front+Z.png',
      './public/textures/Cold_Sunset__Cam_1_Back-Z.png',
    ]);

    scene.background = texture;

    let totalTime = 0.0;

    const shaderSetup = async () => {
      const vsh = await fetch('/public/shaders/vertex-shader.glsl');
      const fsh = await fetch('/public/shaders/fragment-shader.glsl');

      material.current = new THREE.ShaderMaterial({
        uniforms: {
          resolution: {
            value: new THREE.Vector2(
              divContainer?.getBoundingClientRect()?.width || 250,
              divContainer?.getBoundingClientRect()?.height || 250,
            ),
          },
          time: {
            value: 0.0,
          },
          specMap: {
            value: scene.background,
          },
        },
        vertexShader: await vsh.text(),
        fragmentShader: await fsh.text(),
      });

      const loader = new GLTFLoader();
      loader.setPath('./public/textures/');
      loader.load('suzanne.glb', (gltf) => {
        const model = gltf.scene;
        model.traverse((child) => {
          (child as THREE.Mesh).material = material.current;
        });
        scene.add(model);
      });

      // const geometry = new THREE.IcosahedronGeometry(1, 128);

      // const mesh = new THREE.Mesh(geometry, material.current);
      // scene.add(mesh);
    };

    shaderSetup().catch(console.error);

    const step = (timeElapsed: number) => {
      const timeElapsedS = timeElapsed * 0.001;
      totalTime += timeElapsedS;
      if (material?.current?.uniforms?.time) {
        material.current.uniforms.time.value = totalTime;
      }
    };

    let previousRAF: number | null = null;
    const animate = (t: number) => {
      if (previousRAF === null) {
        previousRAF = t;
      }
      step(t - previousRAF);
      requestAnimationFrame((t) => animate(t));
      renderer.current.render(scene, camera.current);
      previousRAF = t;
    };
    animate(0.0);

    return () => {
      if (canvasContainer.current) {
        canvasContainer.current.removeChild(renderer.current.domElement);
      }
    };
  }, [divContainer]);

  return (
    <div className="grow shrink" ref={div}>
      <div className="absolute" ref={canvasContainer} />
    </div>
  );
};

export default Three;
