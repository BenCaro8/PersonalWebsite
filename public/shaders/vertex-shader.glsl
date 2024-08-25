
varying vec2 vUv;

void main() {	
  vec4 localPosition = vec4(position, 1);

  gl_Position = projectionMatrix * modelViewMatrix * localPosition;
  vUv = uv;
}