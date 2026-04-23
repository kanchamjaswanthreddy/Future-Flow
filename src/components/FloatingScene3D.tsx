import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, RoundedBox, Environment, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

/* ── Floating coin torus ─────────────────────────────────── */
function Coin({
  position,
  color,
  speed = 1,
  delay = 0,
}: {
  position: [number, number, number]
  color: string
  speed?: number
  delay?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.4
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3 + delay) * 0.15
  })
  return (
    <Float speed={speed + 0.5} rotationIntensity={0.4} floatIntensity={0.6} floatingRange={[-0.12, 0.12]}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.45, 0.16, 32, 80]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.95}
          roughness={0.05}
          envMapIntensity={1.2}
          clearcoat={1}
          clearcoatRoughness={0.04}
        />
      </mesh>
    </Float>
  )
}

/* ── Floating glossy credit card ────────────────────────── */
function GlossCard({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.08
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.25 + 1) * 0.12
  })
  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8} floatingRange={[-0.18, 0.18]}>
      <RoundedBox ref={meshRef as React.Ref<THREE.Mesh>} args={[2.0, 1.25, 0.07]} radius={0.09} smoothness={4} position={position}>
        <meshPhysicalMaterial
          color="#4353ff"
          metalness={0.2}
          roughness={0.0}
          transmission={0.85}
          thickness={0.1}
          transparent
          opacity={0.55}
          envMapIntensity={1.5}
          clearcoat={1}
          clearcoatRoughness={0}
          reflectivity={1}
        />
      </RoundedBox>
    </Float>
  )
}

/* ── Distorted orb ──────────────────────────────────────── */
function Orb({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={0.8} rotationIntensity={0.2} floatIntensity={1.2} floatingRange={[-0.25, 0.25]}>
      <mesh position={position}>
        <sphereGeometry args={[0.55, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          distort={0.35}
          speed={2}
          roughness={0.0}
          metalness={0.6}
          envMapIntensity={0.8}
          transparent
          opacity={0.72}
        />
      </mesh>
    </Float>
  )
}

/* ── Scene inner ────────────────────────────────────────── */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 6, 4]} intensity={3} color="#10b981" />
      <pointLight position={[-4, -4, 3]} intensity={2} color="#4353ff" />
      <pointLight position={[0, 5, -2]} intensity={1.5} color="#f69c20" />
      <Environment preset="city" />

      {/* Coins */}
      <Coin position={[-2.4, 0.8, 0]}    color="#10b981" speed={1.1} delay={0} />
      <Coin position={[2.6, -0.4, -0.8]} color="#f69c20" speed={0.75} delay={1.2} />
      <Coin position={[0.6, 1.8, -1]}    color="#fb7185" speed={1.4} delay={0.6} />

      {/* Glass card center */}
      <GlossCard position={[0, 0, 0]} />

      {/* Orbs */}
      <Orb position={[-1.4, -1.2, -1.2]} color="#4353ff" />
      <Orb position={[1.8,  1.4, -1.5]}  color="#10b981" />
    </>
  )
}

/* ── Public component ───────────────────────────────────── */
export function FloatingScene3D({ style }: { style?: React.CSSProperties }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 44 }}
      style={{ background: 'transparent', ...style }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
