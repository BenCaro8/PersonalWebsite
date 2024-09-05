
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vColor;

uniform float time;

float inverseLerp(float v, float minValue, float maxValue) {
  return (v - minValue) / (maxValue - minValue);
}

float remap(float v, float inMin, float inMax, float outMin, float outMax) {
  float t = inverseLerp(v, inMin, inMax);
  return mix(outMin, outMax, t);
}

mat3 rotateX(float radians) {
  float s = sin(radians);
  float c = cos(radians);

  return mat3(
    1.0, 0.0, 0.0,
    0.0, c, -s,
    0.0, s, c
  );
}

mat3 rotateY(float radians) {
  float s = sin(radians);
  float c = cos(radians);

  return mat3(
    c, 0.0, s,
    0.0, 1.0, 0.0,
    -s, 0.0, c
  );
}

mat3 rotateZ(float radians) {
  float s = sin(radians);
  float c = cos(radians);

  return mat3(
    c, -s, 0.0,
    s, c, 0.0,
    0.0, 0.0, 1.0
  );
}

float easeOutBounce(float x) {
  const float n1 = 7.5625;
  const float d1 = 2.75;

  if (x < 1.0 / d1) {
    return n1 * x * x;
  } else if (x < 2.0 / d1) {
    x -= 1.5 / d1;
    return n1 * x * x + 0.75;
  } else if (x < 2.5 / d1) {
    x -= 2.25 / d1;
    return n1 * x * x + 0.9375;
  } else {
    x -= 2.625 / d1;
    return n1 * x * x + 0.984375;
  }
}

float easeInBounce(float x) {
  return 1.0 - easeOutBounce(1.0 - x);
}

float easeInOutBounce(float x) {
  return x < 0.5
    ? (1.0 - easeOutBounce(1.0 - 2.0 * x)) / 2.0
    : (1.0 + easeOutBounce(2.0 * x - 1.0)) / 2.0;
}

void main() {	
  vec3 localSpacePosition = position;

  // localSpacePosition = rotateX(time) * localSpacePosition;
  // localSpacePosition = rotateY(time) * localSpacePosition;
  // localSpacePosition = rotateZ(time) * localSpacePosition;

  float t = sin(localSpacePosition.y * 20.0 + time * 20.0);
  t = remap(t, -1.0, 1.0, 0.0, 0.2);
  localSpacePosition += normal * t;

  // localSpacePosition *= easeOutBounce(clamp(time - 2.0, 0.0, 1.0));

  gl_Position = projectionMatrix * modelViewMatrix * vec4(localSpacePosition, 1.0);
  vNormal = (modelMatrix * vec4(normal, 0.0)).xyz;
  vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  vColor = mix(
    vec3(0.0, 0.0, 0.5), 
    vec3(0.1, 0.5, 0.8), 
    smoothstep(0.0, 0.2, t));
}