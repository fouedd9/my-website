import { useEffect, useRef } from "react";
import { Mesh, Program, Renderer, Triangle } from "ogl";
import "./Prism.css";

type PrismAnimationType = "rotate" | "hover" | "3drotate";

interface PrismOffset {
  x: number;
  y: number;
}

interface PrismProps {
  height?: number;
  baseWidth?: number;
  animationType?: PrismAnimationType;
  glow?: number;
  offset?: PrismOffset;
  noise?: number;
  transparent?: boolean;
  scale?: number;
  hueShift?: number;
  colorFrequency?: number;
  hoverStrength?: number;
  inertia?: number;
  bloom?: number;
  suspendWhenOffscreen?: boolean;
  timeScale?: number;
  className?: string;
}

interface PrismContainerElement extends HTMLDivElement {
  __prismIO?: IntersectionObserver;
}

function Prism({
  height = 3.5,
  baseWidth = 5.5,
  animationType = "rotate",
  glow = 1,
  offset = { x: 0, y: 0 },
  noise = 0.5,
  transparent = true,
  scale = 3.6,
  hueShift = 0,
  colorFrequency = 1,
  hoverStrength = 2,
  inertia = 0.05,
  bloom = 1,
  suspendWhenOffscreen = false,
  timeScale = 0.5,
  className = "",
}: PrismProps) {
  const containerRef = useRef<PrismContainerElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const H = Math.max(0.001, height);
    const BW = Math.max(0.001, baseWidth);
    const BASE_HALF = BW * 0.5;
    const GLOW = Math.max(0, glow);
    const NOISE = Math.max(0, noise);
    const offX = offset.x;
    const offY = offset.y;
    const SATURATION = transparent ? 1.5 : 1;
    const SCALE = Math.max(0.001, scale);
    const HUE_SHIFT = hueShift;
    const COLOR_FREQUENCY = Math.max(0, colorFrequency || 1);
    const BLOOM = Math.max(0, bloom || 1);
    const ROTATION_SPEED_X = 1;
    const ROTATION_SPEED_Y = 1;
    const ROTATION_SPEED_Z = 1;
    const TIME_SCALE = Math.max(0, timeScale || 1);
    const HOVER_STRENGTH = Math.max(0, hoverStrength || 1);
    const INERTIA = Math.max(0, Math.min(1, inertia || 0.12));

    const dpr = Math.min(2, window.devicePixelRatio || 1);

    const renderer = new Renderer({
      dpr,
      alpha: transparent,
      antialias: false,
    });

    const gl = renderer.gl;

    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);
    gl.disable(gl.BLEND);

    Object.assign(gl.canvas.style, {
      position: "absolute",
      inset: "0",
      width: "100%",
      height: "100%",
      display: "block",
    });

    container.appendChild(gl.canvas);

    const vertex = /* glsl */ `
      attribute vec2 position;

      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragment = /* glsl */ `
      precision highp float;

      uniform vec2 iResolution;
      uniform float iTime;

      uniform float uHeight;
      uniform float uBaseHalf;
      uniform mat3 uRot;
      uniform int uUseBaseWobble;
      uniform float uGlow;
      uniform vec2 uOffsetPx;
      uniform float uNoise;
      uniform float uSaturation;
      uniform float uScale;
      uniform float uHueShift;
      uniform float uColorFreq;
      uniform float uBloom;
      uniform float uCenterShift;
      uniform float uInvBaseHalf;
      uniform float uInvHeight;
      uniform float uMinAxis;
      uniform float uPxScale;
      uniform float uTimeScale;

      vec4 tanh4(vec4 x) {
        vec4 e2x = exp(2.0 * x);
        return (e2x - 1.0) / (e2x + 1.0);
      }

      float rand(vec2 co) {
        return fract(
          sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453123
        );
      }

      float sdOctaAnisoInv(vec3 p) {
        vec3 q = vec3(
          abs(p.x) * uInvBaseHalf,
          abs(p.y) * uInvHeight,
          abs(p.z) * uInvBaseHalf
        );

        float m = q.x + q.y + q.z - 1.0;

        return m * uMinAxis * 0.5773502691896258;
      }

      float sdPyramidUpInv(vec3 p) {
        float oct = sdOctaAnisoInv(p);
        float halfSpace = -p.y;

        return max(oct, halfSpace);
      }

      mat3 hueRotation(float a) {
        float c = cos(a);
        float s = sin(a);

        mat3 W = mat3(
          0.299, 0.587, 0.114,
          0.299, 0.587, 0.114,
          0.299, 0.587, 0.114
        );

        mat3 U = mat3(
           0.701, -0.587, -0.114,
          -0.299,  0.413, -0.114,
          -0.300, -0.588,  0.886
        );

        mat3 V = mat3(
           0.168, -0.331,  0.500,
           0.328,  0.035, -0.500,
          -0.497,  0.296,  0.201
        );

        return W + U * c + V * s;
      }

      void main() {
        vec2 f =
          (
            gl_FragCoord.xy -
            0.5 * iResolution.xy -
            uOffsetPx
          ) * uPxScale;

        float z = 5.0;
        float d = 0.0;

        vec3 p;
        vec4 o = vec4(0.0);

        float centerShift = uCenterShift;
        float colorFrequency = uColorFreq;

        mat2 wobble = mat2(1.0);

        if (uUseBaseWobble == 1) {
          float t = iTime * uTimeScale;

          float c0 = cos(t);
          float c1 = cos(t + 33.0);
          float c2 = cos(t + 11.0);

          wobble = mat2(c0, c1, c2, c0);
        }

        const int STEPS = 100;

        for (int i = 0; i < STEPS; i++) {
          p = vec3(f, z);
          p.xz = p.xz * wobble;
          p = uRot * p;

          vec3 q = p;
          q.y += centerShift;

          d = 0.1 + 0.2 * abs(sdPyramidUpInv(q));
          z -= d;

          o += (
            sin(
              (p.y + z) * colorFrequency +
              vec4(0.0, 1.0, 2.0, 3.0)
            ) + 1.0
          ) / d;
        }

        o = tanh4(
          o * o * (uGlow * uBloom) / 1e5
        );

        vec3 color = o.rgb;

        float randomNoise =
          rand(gl_FragCoord.xy + vec2(iTime));

        color +=
          (randomNoise - 0.5) * uNoise;

        color = clamp(color, 0.0, 1.0);

        float luminance = dot(
          color,
          vec3(0.2126, 0.7152, 0.0722)
        );

        color = clamp(
          mix(
            vec3(luminance),
            color,
            uSaturation
          ),
          0.0,
          1.0
        );

        if (abs(uHueShift) > 0.0001) {
          color = clamp(
            hueRotation(uHueShift) * color,
            0.0,
            1.0
          );
        }

        gl_FragColor = vec4(color, o.a);
      }
    `;

    const geometry = new Triangle(gl);

    const resolutionBuffer = new Float32Array(2);
    const offsetBuffer = new Float32Array(2);

    const rotationMatrix = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iResolution: {
          value: resolutionBuffer,
        },
        iTime: {
          value: 0,
        },
        uHeight: {
          value: H,
        },
        uBaseHalf: {
          value: BASE_HALF,
        },
        uUseBaseWobble: {
          value: 1,
        },
        uRot: {
          value: rotationMatrix,
        },
        uGlow: {
          value: GLOW,
        },
        uOffsetPx: {
          value: offsetBuffer,
        },
        uNoise: {
          value: NOISE,
        },
        uSaturation: {
          value: SATURATION,
        },
        uScale: {
          value: SCALE,
        },
        uHueShift: {
          value: HUE_SHIFT,
        },
        uColorFreq: {
          value: COLOR_FREQUENCY,
        },
        uBloom: {
          value: BLOOM,
        },
        uCenterShift: {
          value: H * 0.25,
        },
        uInvBaseHalf: {
          value: 1 / BASE_HALF,
        },
        uInvHeight: {
          value: 1 / H,
        },
        uMinAxis: {
          value: Math.min(BASE_HALF, H),
        },
        uPxScale: {
          value: 1 / ((gl.drawingBufferHeight || 1) * 0.1 * SCALE),
        },
        uTimeScale: {
          value: TIME_SCALE,
        },
      },
    });

    const mesh = new Mesh(gl, {
      geometry,
      program,
    });

    const resize = (): void => {
      const width = container.clientWidth || 1;
      const containerHeight = container.clientHeight || 1;

      renderer.setSize(width, containerHeight);

      resolutionBuffer[0] = gl.drawingBufferWidth;

      resolutionBuffer[1] = gl.drawingBufferHeight;

      offsetBuffer[0] = offX * dpr;
      offsetBuffer[1] = offY * dpr;

      program.uniforms.uPxScale.value =
        1 / ((gl.drawingBufferHeight || 1) * 0.1 * SCALE);
    };

    const resizeObserver = new ResizeObserver(resize);

    resizeObserver.observe(container);
    resize();

    const rotationBuffer = new Float32Array(9);

    const setMatrixFromEuler = (
      yawY: number,
      pitchX: number,
      rollZ: number,
      output: Float32Array,
    ): Float32Array => {
      const cy = Math.cos(yawY);
      const sy = Math.sin(yawY);
      const cx = Math.cos(pitchX);
      const sx = Math.sin(pitchX);
      const cz = Math.cos(rollZ);
      const sz = Math.sin(rollZ);

      const r00 = cy * cz + sy * sx * sz;
      const r01 = -cy * sz + sy * sx * cz;
      const r02 = sy * cx;

      const r10 = cx * sz;
      const r11 = cx * cz;
      const r12 = -sx;

      const r20 = -sy * cz + cy * sx * sz;
      const r21 = sy * sz + cy * sx * cz;
      const r22 = cy * cx;

      output[0] = r00;
      output[1] = r10;
      output[2] = r20;
      output[3] = r01;
      output[4] = r11;
      output[5] = r21;
      output[6] = r02;
      output[7] = r12;
      output[8] = r22;

      return output;
    };

    const noiseIsDisabled = NOISE < 0.000001;

    let animationFrameId = 0;

    const animationStart = performance.now();

    const startAnimation = (): void => {
      if (animationFrameId) return;

      animationFrameId = window.requestAnimationFrame(render);
    };

    const stopAnimation = (): void => {
      if (!animationFrameId) return;

      window.cancelAnimationFrame(animationFrameId);

      animationFrameId = 0;
    };

    const random = (): number => Math.random();

    const rotationX = (0.3 + random() * 0.6) * ROTATION_SPEED_X;

    const rotationY = (0.2 + random() * 0.7) * ROTATION_SPEED_Y;

    const rotationZ = (0.1 + random() * 0.5) * ROTATION_SPEED_Z;

    const phaseX = random() * Math.PI * 2;

    const phaseZ = random() * Math.PI * 2;

    let yaw = 0;
    let pitch = 0;
    let roll = 0;

    let targetYaw = 0;
    let targetPitch = 0;

    const lerp = (start: number, end: number, amount: number): number =>
      start + (end - start) * amount;

    const pointer = {
      x: 0,
      y: 0,
      inside: true,
    };

    const updatePointer = (event: PointerEvent): void => {
      const windowWidth = Math.max(1, window.innerWidth);

      const windowHeight = Math.max(1, window.innerHeight);

      const centerX = windowWidth * 0.5;
      const centerY = windowHeight * 0.5;

      const normalizedX = (event.clientX - centerX) / (windowWidth * 0.5);

      const normalizedY = (event.clientY - centerY) / (windowHeight * 0.5);

      pointer.x = Math.max(-1, Math.min(1, normalizedX));

      pointer.y = Math.max(-1, Math.min(1, normalizedY));

      pointer.inside = true;
    };

    const handlePointerLeave = (): void => {
      pointer.inside = false;
    };

    const handleWindowBlur = (): void => {
      pointer.inside = false;
    };

    let handlePointerMove: ((event: PointerEvent) => void) | null = null;

    if (animationType === "hover") {
      handlePointerMove = (event: PointerEvent): void => {
        updatePointer(event);
        startAnimation();
      };

      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      document.addEventListener("mouseleave", handlePointerLeave);

      window.addEventListener("blur", handleWindowBlur);

      program.uniforms.uUseBaseWobble.value = 0;
    } else if (animationType === "3drotate") {
      program.uniforms.uUseBaseWobble.value = 0;
    } else {
      program.uniforms.uUseBaseWobble.value = 1;
    }

    function render(timestamp: number): void {
      const elapsedTime = (timestamp - animationStart) * 0.001;

      program.uniforms.iTime.value = elapsedTime;

      let continueAnimation = true;

      if (animationType === "hover") {
        const maxPitch = 0.6 * HOVER_STRENGTH;

        const maxYaw = 0.6 * HOVER_STRENGTH;

        targetYaw = (pointer.inside ? -pointer.x : 0) * maxYaw;

        targetPitch = (pointer.inside ? pointer.y : 0) * maxPitch;

        yaw = lerp(yaw, targetYaw, INERTIA);

        pitch = lerp(pitch, targetPitch, INERTIA);

        roll = lerp(roll, 0, 0.1);

        program.uniforms.uRot.value = setMatrixFromEuler(
          yaw,
          pitch,
          roll,
          rotationBuffer,
        );

        if (noiseIsDisabled) {
          const hasSettled =
            Math.abs(yaw - targetYaw) < 0.0001 &&
            Math.abs(pitch - targetPitch) < 0.0001 &&
            Math.abs(roll) < 0.0001;

          if (hasSettled) {
            continueAnimation = false;
          }
        }
      } else if (animationType === "3drotate") {
        const scaledTime = elapsedTime * TIME_SCALE;

        yaw = scaledTime * rotationY;

        pitch = Math.sin(scaledTime * rotationX + phaseX) * 0.6;

        roll = Math.sin(scaledTime * rotationZ + phaseZ) * 0.5;

        program.uniforms.uRot.value = setMatrixFromEuler(
          yaw,
          pitch,
          roll,
          rotationBuffer,
        );

        if (TIME_SCALE < 0.000001) {
          continueAnimation = false;
        }
      } else {
        rotationBuffer.set([1, 0, 0, 0, 1, 0, 0, 0, 1]);

        program.uniforms.uRot.value = rotationBuffer;

        if (TIME_SCALE < 0.000001) {
          continueAnimation = false;
        }
      }

      renderer.render({
        scene: mesh,
      });

      if (continueAnimation) {
        animationFrameId = window.requestAnimationFrame(render);
      } else {
        animationFrameId = 0;
      }
    }

    if (suspendWhenOffscreen) {
      const intersectionObserver = new IntersectionObserver((entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);

        if (isVisible) {
          startAnimation();
        } else {
          stopAnimation();
        }
      });

      intersectionObserver.observe(container);

      container.__prismIO = intersectionObserver;
    }

    startAnimation();

    return () => {
      stopAnimation();
      resizeObserver.disconnect();

      if (animationType === "hover" && handlePointerMove) {
        window.removeEventListener("pointermove", handlePointerMove);

        document.removeEventListener("mouseleave", handlePointerLeave);

        window.removeEventListener("blur", handleWindowBlur);
      }

      container.__prismIO?.disconnect();
      delete container.__prismIO;

      if (gl.canvas.parentElement === container) {
        container.removeChild(gl.canvas);
      }
    };
  }, [
    height,
    baseWidth,
    animationType,
    glow,
    noise,
    offset.x,
    offset.y,
    scale,
    transparent,
    hueShift,
    colorFrequency,
    timeScale,
    hoverStrength,
    inertia,
    bloom,
    suspendWhenOffscreen,
  ]);

  return (
    <div
      ref={containerRef}
      className={`prism-container ${className}`}
      aria-hidden="true"
    />
  );
}

export default Prism;
