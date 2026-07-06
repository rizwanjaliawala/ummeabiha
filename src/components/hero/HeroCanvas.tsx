"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Environment } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/* ── Kaaba Model (Procedural) ────────────────────────── */
function KaabaModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef} position={[0, -0.3, 0]}>
        {/* Main Kaaba body */}
        <mesh castShadow>
          <boxGeometry args={[2, 2.4, 2]} />
          <meshStandardMaterial
            color="#111111"
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>

        {/* Gold band (Hizam) */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[2.02, 0.18, 2.02]} />
          <meshStandardMaterial
            color="#D4AF37"
            roughness={0.2}
            metalness={0.8}
            emissive="#D4AF37"
            emissiveIntensity={0.15}
          />
        </mesh>

        {/* Gold trim bottom */}
        <mesh position={[0, -1.15, 0]}>
          <boxGeometry args={[2.02, 0.1, 2.02]} />
          <meshStandardMaterial
            color="#D4AF37"
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Door (Multazam side) */}
        <mesh position={[0, 0, 1.01]}>
          <planeGeometry args={[0.6, 1.0]} />
          <meshStandardMaterial
            color="#B8952E"
            roughness={0.15}
            metalness={0.9}
            emissive="#D4AF37"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Kiswa decorative lines */}
        {[-0.3, 0.3].map((x) => (
          <mesh key={x} position={[x, -0.2, 1.01]}>
            <planeGeometry args={[0.01, 1.8]} />
            <meshStandardMaterial
              color="#D4AF37"
              roughness={0.2}
              metalness={0.8}
              emissive="#D4AF37"
              emissiveIntensity={0.2}
            />
          </mesh>
        ))}

        {/* Subtle ground glow */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
          <circleGeometry args={[2.5, 32]} />
          <meshStandardMaterial
            color="#0D5C4A"
            transparent
            opacity={0.15}
            emissive="#0D5C4A"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* ── Gold Particles ──────────────────────────────────── */
function GoldParticles() {
  const count = 300;
  const ref = useRef<THREE.Points>(null);

  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#D4AF37"
        size={0.04}
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ── Scene ───────────────────────────────────────────── */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1}
        color="#fef3c7"
        castShadow
      />
      <pointLight position={[-3, 3, -3]} intensity={0.5} color="#0D5C4A" />
      <pointLight position={[3, -2, 4]} intensity={0.3} color="#D4AF37" />

      <KaabaModel />
      <GoldParticles />

      <Stars
        radius={50}
        depth={50}
        count={2000}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />

      <Environment preset="night" />
    </>
  );
}

/* ── Loading Fallback ────────────────────────────────── */
function CanvasFallback() {
  return (
    <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
      <div className="h-12 w-12 rounded-full border-2 border-gold/30 border-t-gold animate-spin" />
    </div>
  );
}

/* ── Export ───────────────────────────────────────────── */
export default function HeroCanvas() {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className="absolute inset-0 bg-gradient-hero" />;
  }

  return (
    <div className="absolute inset-0">
      <Suspense fallback={<CanvasFallback />}>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0.5, 6], fov: 45 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          style={{ background: "transparent" }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
