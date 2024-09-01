
uniform samplerCube specMap;
varying vec3 vNormal;
varying vec3 vPosition;

float inverseLerp(float v, float minValue, float maxValue) {
  return (v - minValue) / (maxValue - minValue);
}

float remap(float v, float inMin, float inMax, float outMin, float outMax) {
  float t = inverseLerp(v, inMin, inMax);
  return mix(outMin, outMax, t);
}

vec3 linearTosRGB(vec3 value ) {
  vec3 lt = vec3(lessThanEqual(value.rgb, vec3(0.0031308)));
  
  vec3 v1 = value * 12.92;
  vec3 v2 = pow(value.xyz, vec3(0.41666)) * 1.055 - vec3(0.055);

	return mix(v2, v1, lt);
}

void main() {
  vec3 baseColor = vec3(0.35);
  vec3 lighting = vec3(0.0);
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(cameraPosition - vPosition);

  // Ambient
  vec3 ambient = vec3(0.5);

  // Hemi Light
  vec3 skyColor = vec3(0.04, 0.0, 0.6);
  vec3 groundColor = vec3(0.1, 0.6, 0.29);

  float hemiMix = remap(normal.y, -1.0, 1.0, 0.0, 1.0);
  vec3 hemi = mix(groundColor, skyColor, hemiMix);

  // Diffuse Lighting
  vec3 lightDir = normalize(vec3(0.75, 0.75, 0.75));
  vec3 lightColor = vec3(1.0, 1.0, 0.9);
  float dp = max(0.0, dot(lightDir, normal));

  vec3 diffuse = dp * lightColor;

  // vec3 specular = vec3(0.0);

  // Phong Specular
  vec3 r = normalize(reflect(-lightDir, normal));
  float phong = max(0.0, dot(viewDir, r));
  phong = pow(phong, 32.0);

  vec3 specular = vec3(phong);

  // // IBL Specular
  // vec3 iblCoord = normalize(reflect(-viewDir, normal));
  // vec3 iblSample = textureCube(specMap, iblCoord).xyz;

  // specular += iblSample * 0.5;

  // // Fresnel
  float fresnel = 1.0 - max(0.0, dot(viewDir, normal));
  fresnel = pow(fresnel, 2.0);
  fresnel = step(0.5, fresnel);

  specular = smoothstep(0.5, 0.505, specular);

  lighting = ambient * 0.0 + hemi * (fresnel * 0.5) + diffuse * 0.99;

  vec3 color = baseColor * lighting + specular;

  // color = linearTosRGB(color);
  color = pow(color, vec3(1.0 / 2.2));

  gl_FragColor = vec4(color, 1.0);
}