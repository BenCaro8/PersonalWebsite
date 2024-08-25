
varying vec2 vUv;

uniform sampler2D diffuse;

void main() {
  vec3 color = vec3(0.0);

  float value1 = step(0.5, vUv.x);
  float value2 = mix(0.0, 1.0, vUv.x);
  float value3 = smoothstep(0.0, 1.0, vUv.x);

  float line1 = smoothstep(0.0, 0.005, abs(vUv.y - 0.333));
  float line2 = smoothstep(0.0, 0.005, abs(vUv.y - 0.666));

  color = vec3(line1);

  vec3 red = vec3(1.0, 0.0, 0.0);
  vec3 blue = vec3(0.0, 0.0, 1.0);
  vec3 white = vec3(1.0, 1.0, 1.0);

  if  (vUv.y > 0.666) {
    color = mix(red, blue, value1);
  } else if (vUv.y < 0.666 && vUv.y > 0.333) {
    color = mix(red, blue, value2);
  } else if (vUv.y < 0.333) {
    color = mix(red, blue, value3);
  }

  color = mix(white, color, line1);
  color = mix(white, color, line2);

  
  gl_FragColor = vec4(color, 1.0);
}