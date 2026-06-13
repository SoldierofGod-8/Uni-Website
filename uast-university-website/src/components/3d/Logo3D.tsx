"use client";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { TextureLoader } from "three";
import * as THREE from "three";
import { useEffect, useRef } from "react";

function GlobeLogo() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const texture = useLoader(TextureLoader, `${basePath}/logo.png`);
  const globeRef = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.repeat.set(2.2, 1);
    texture.needsUpdate = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    if (texture.anisotropy) texture.anisotropy = 8;
  }, [texture]);

  useFrame((_, delta) => {
    if (!globeRef.current) return;
    globeRef.current.rotation.y += delta * 0.12;
  });

  return (
    <mesh ref={globeRef} scale={1}>
      <sphereGeometry args={[2.35, 160, 160]} />
      <meshStandardMaterial
        map={texture}
        color="#ffffff"
        emissive="#000000"
        emissiveIntensity={0}
        roughness={0.95}
        metalness={0.02}
      />
    </mesh>
  );
}

function EnergyRings() {
  const ring1 = useRef<THREE.Mesh>(null!);
  const ring2 = useRef<THREE.Mesh>(null!);
  const ring3 = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (ring1.current) {
      ring1.current.rotation.x += delta * 0.08;
      ring1.current.rotation.y += delta * 0.07;
    }
    if (ring2.current) {
      ring2.current.rotation.y -= delta * 0.10;
      ring2.current.rotation.z += delta * 0.06;
    }
    if (ring3.current) {
      ring3.current.rotation.x -= delta * 0.09;
      ring3.current.rotation.z += delta * 0.08;
    }
  });

  const mat = (
    <meshStandardMaterial
      color="#22c55e"
      emissive="#22c55e"
      emissiveIntensity={0.95}
      transparent
      opacity={0.5}
      side={THREE.DoubleSide}
      roughness={0.25}
      metalness={0.05}
    />
  );

  return (
    <group>
      <mesh ref={ring1}>
        <torusGeometry args={[3.05, 0.020, 16, 260]} />
        {mat}
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[3.45, 0.014, 16, 260]} />
        {mat}
      </mesh>
      <mesh ref={ring3}>
        <torusGeometry args={[3.85, 0.010, 16, 260]} />
        {mat}
      </mesh>
    </group>
  );
}

function CameraIntro() {
  const { camera } = useThree();
  const startZ = 16;
  const endZ = 9;
  const duration = 2.4;
  const startTime = useRef<number | null>(null);

  useFrame(({ clock }) => {
    if (startTime.current === null) startTime.current = clock.elapsedTime;
    const t = Math.min((clock.elapsedTime - startTime.current) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 4);
    camera.position.z = startZ + (endZ - startZ) * eased;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Logo3D({ className }: { className?: string }) {
  return (
    <div className={className ?? "w-full h-full"}>
      <Canvas shadows camera={{ position: [0, 0, 16], fov: 50 }} dpr={[1, 2]} className="w-full h-full">
        <ambientLight intensity={0.95} />
        <directionalLight position={[6, 6, 6]} intensity={2.0} castShadow />
        <spotLight position={[-6, 5, 12]} angle={0.35} intensity={1.2} color="#22c55e" />

        <CameraIntro />

        <Float speed={0.35} rotationIntensity={0} floatIntensity={2.0}>
          <group>
            <GlobeLogo />
            <EnergyRings />
          </group>
        </Float>
      </Canvas>
    </div>
  );
}