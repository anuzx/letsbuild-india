"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GrainyBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Scene Setup ──────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x030303);

    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 4);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // ── Image-derived Palette (grayscale tones from analysis) ────
    // Colors extracted: near-black, dark-grey, mid-grey, light-grey, off-white
    const palette = [
      new THREE.Color(0x060606),
      new THREE.Color(0x201f1e),
      new THREE.Color(0x434140),
      new THREE.Color(0x6e6b67),
      new THREE.Color(0x97928c),
      new THREE.Color(0xc5bcb2),
    ];

    // ── Luminance grid from image (20×20 sample, normalised 0-1) ─
    const lumGrid = [
      [0.99, 0.61, 0.56, 0.54, 0.62, 0.47, 0.42, 0.53, 0.55, 0.31, 0.33, 0.07, 0.27, 0.15, 0.12, 0.11, 0.04, 0.0, 0.08, 0.07],
      [0.76, 0.68, 0.63, 0.67, 0.56, 0.56, 0.49, 0.44, 0.46, 0.32, 0.30, 0.20, 0.10, 0.13, 0.07, 0.01, 0.03, 0.29, 0.28, 0.47],
      [0.66, 0.63, 0.65, 0.48, 0.34, 0.63, 0.56, 0.21, 0.10, 0.26, 0.18, 0.05, 0.07, 0.04, 0.06, 0.03, 0.47, 0.41, 0.75, 0.76],
      [0.80, 0.67, 0.65, 0.65, 0.46, 0.65, 0.42, 0.20, 0.16, 0.06, 0.11, 0.09, 0.33, 0.21, 0.45, 0.65, 0.67, 0.89, 0.81, 0.76],
      [0.83, 0.54, 0.80, 0.50, 0.58, 0.09, 0.10, 0.19, 0.14, 0.27, 0.11, 0.40, 0.50, 0.58, 0.73, 0.72, 0.80, 0.78, 0.78, 0.71],
      [0.56, 0.53, 0.33, 0.24, 0.24, 0.14, 0.11, 0.22, 0.10, 0.25, 0.36, 0.58, 0.56, 0.46, 0.73, 0.63, 0.58, 0.71, 0.71, 0.62],
      [0.33, 0.25, 0.28, 0.18, 0.24, 0.14, 0.17, 0.14, 0.59, 0.23, 0.50, 0.52, 0.55, 0.53, 0.67, 0.48, 0.42, 0.55, 0.56, 0.51],
      [0.35, 0.13, 0.10, 0.16, 0.20, 0.20, 0.20, 0.37, 0.40, 0.52, 0.39, 0.42, 0.55, 0.47, 0.47, 0.44, 0.37, 0.42, 0.51, 0.25],
      [0.21, 0.18, 0.22, 0.15, 0.15, 0.17, 0.35, 0.21, 0.31, 0.36, 0.29, 0.39, 0.37, 0.20, 0.42, 0.19, 0.26, 0.34, 0.27, 0.21],
      [0.19, 0.06, 0.12, 0.13, 0.19, 0.11, 0.22, 0.13, 0.26, 0.22, 0.29, 0.19, 0.11, 0.25, 0.23, 0.26, 0.16, 0.11, 0.15, 0.12],
      [0.09, 0.05, 0.07, 0.12, 0.18, 0.09, 0.15, 0.09, 0.08, 0.12, 0.17, 0.17, 0.04, 0.16, 0.09, 0.13, 0.13, 0.13, 0.10, 0.06],
      [0.16, 0.10, 0.15, 0.11, 0.06, 0.07, 0.08, 0.11, 0.13, 0.02, 0.09, 0.04, 0.20, 0.15, 0.06, 0.04, 0.03, 0.02, 0.02, 0.01],
      [0.08, 0.06, 0.13, 0.04, 0.07, 0.02, 0.14, 0.04, 0.18, 0.03, 0.08, 0.08, 0.02, 0.02, 0.03, 0.02, 0.02, 0.02, 0.01, 0.00],
      [0.14, 0.12, 0.12, 0.02, 0.04, 0.12, 0.06, 0.04, 0.05, 0.07, 0.02, 0.04, 0.02, 0.00, 0.03, 0.01, 0.01, 0.01, 0.00, 0.00],
      [0.12, 0.07, 0.04, 0.07, 0.04, 0.04, 0.09, 0.03, 0.02, 0.01, 0.00, 0.01, 0.02, 0.00, 0.02, 0.01, 0.01, 0.01, 0.00, 0.01],
      [0.02, 0.01, 0.01, 0.02, 0.02, 0.01, 0.01, 0.01, 0.00, 0.00, 0.01, 0.01, 0.03, 0.03, 0.05, 0.04, 0.04, 0.03, 0.02, 0.09],
      [0.03, 0.00, 0.00, 0.00, 0.00, 0.01, 0.00, 0.02, 0.01, 0.02, 0.06, 0.06, 0.07, 0.07, 0.03, 0.03, 0.02, 0.03, 0.04, 0.02],
      [0.00, 0.00, 0.00, 0.00, 0.13, 0.04, 0.09, 0.18, 0.11, 0.17, 0.11, 0.02, 0.00, 0.02, 0.05, 0.05, 0.04, 0.56, 0.58, 0.58],
      [0.00, 0.00, 0.00, 0.00, 0.13, 0.04, 0.09, 0.18, 0.11, 0.17, 0.11, 0.05, 0.12, 0.02, 0.07, 0.02, 0.11, 0.58, 0.56, 0.57],
      [0.00, 0.00, 0.04, 0.09, 0.15, 0.24, 0.13, 0.20, 0.08, 0.13, 0.04, 0.05, 0.03, 0.10, 0.01, 0.05, 0.02, 0.59, 0.56, 0.28],
    ];

    // ── Grain Particle Cloud ─────────────────────────────────────
    // Map the luminance grid into a 3-D particle cloud.
    // Bright pixels → higher Z (closer), dark → pushed back.
    const GRID = 20;
    const COUNT = 8000;

    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);

    const rng = () => Math.random();

    for (let i = 0; i < COUNT; i++) {
      const gi = Math.floor(rng() * GRID);
      const gj = Math.floor(rng() * GRID);
      const lum = lumGrid[gi][gj];

      // Spread particles across a wide plane with jitter
      const x = (gj / GRID - 0.5) * 8 + (rng() - 0.5) * 0.45;
      const y = (0.5 - gi / GRID) * 13 + (rng() - 0.5) * 0.7;
      const z = lum * 2.5 - 1.2 + (rng() - 0.5) * 0.4;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Colour: interpolate through palette by luminance
      const palIdx = Math.min(Math.floor(lum * (palette.length - 1)), palette.length - 2);
      const t = (lum * (palette.length - 1)) - palIdx;
      const c1 = palette[palIdx];
      const c2 = palette[palIdx + 1];

      colors[i * 3] = c1.r + (c2.r - c1.r) * t;
      colors[i * 3 + 1] = c1.g + (c2.g - c1.g) * t;
      colors[i * 3 + 2] = c1.b + (c2.b - c1.b) * t;

      sizes[i] = lum * 0.022 + 0.004 + rng() * 0.01;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    // Custom shader for soft, round, grain-like particles
    const mat = new THREE.ShaderMaterial({
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        uniform float uTime;
        void main() {
          vColor = color;
          vec3 pos = position;
          // very subtle drift
          pos.x += sin(uTime * 0.15 + position.y * 0.7) * 0.012;
          pos.y += cos(uTime * 0.12 + position.x * 0.5) * 0.010;
          vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (380.0 / -mvPos.z);
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float alpha = smoothstep(0.5, 0.15, d);
          gl_FragColor = vec4(vColor, alpha * 0.88);
        }
      `,
    });

    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    // ── Subtle diagonal light streak (matches the bright diagonal in image) ──
    const streakGeo = new THREE.PlaneGeometry(12, 0.9);
    const streakMat = new THREE.MeshBasicMaterial({
      color: 0xc5bcb2,
      transparent: true,
      opacity: 0.028,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const streak = new THREE.Mesh(streakGeo, streakMat);
    streak.rotation.z = -Math.PI / 5;
    streak.position.set(-0.5, 2.8, 0.5);
    scene.add(streak);

    // ── Mouse parallax ───────────────────────────────────────────
    let mouseX = 0;
    let mouseY = 0;
    const handleMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse);

    // ── Animation Loop ───────────────────────────────────────────
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      (mat.uniforms.uTime as { value: number }).value = elapsed;

      // Slow parallax drift
      particles.rotation.x += (mouseY * 0.08 - particles.rotation.x) * 0.02;
      particles.rotation.y += (mouseX * 0.08 - particles.rotation.y) * 0.02;

      // Very slow auto-rotate when mouse is away
      particles.rotation.z = Math.sin(elapsed * 0.04) * 0.015;

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize Handler ───────────────────────────────────────────
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // ── Cleanup ──────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      streakGeo.dispose();
      streakMat.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
