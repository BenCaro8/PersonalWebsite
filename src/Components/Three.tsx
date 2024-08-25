import { FC, useState, useRef, useEffect, useCallback } from 'react';
// import { useAppSelector } from '../store';
import * as THREE from 'three';

const Projects: FC = () => {
  const renderer = useRef(new THREE.WebGLRenderer());
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
    const camera = new THREE.OrthographicCamera(0, 1, 1, 0, 0.1, 1000);
    camera.position.set(0, 0, 1);
    renderer.current.setSize(
      divContainer?.getBoundingClientRect()?.width || 250,
      divContainer?.getBoundingClientRect()?.height || 250,
    );
    // use ref as a mount point of the Three.js scene instead of the document.body
    canvasContainer.current?.appendChild(renderer.current.domElement);

    const shaderSetup = async () => {
      const vsh = await fetch('/public/shaders/vertex-shader.glsl');
      const fsh = await fetch('/public/shaders/fragment-shader.glsl');

      const loader = new THREE.TextureLoader();
      const pic = loader.load('/public/self.png');
      pic.wrapS = THREE.MirroredRepeatWrapping;
      pic.wrapT = THREE.MirroredRepeatWrapping;
      pic.magFilter = THREE.LinearFilter;

      const material = new THREE.ShaderMaterial({
        uniforms: {
          diffuse: { value: pic },
        },
        vertexShader: await vsh.text(),
        fragmentShader: await fsh.text(),
      });

      const geometry = new THREE.PlaneGeometry(1, 1);

      const plane = new THREE.Mesh(geometry, material);
      plane.position.set(0.5, 0.5, 0);
      scene.add(plane);
    };

    shaderSetup().catch(console.error);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.current.render(scene, camera);
    };
    animate();

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

export default Projects;
