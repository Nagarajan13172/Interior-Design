import { Component, Suspense, useRef } from 'react'
import type { ErrorInfo, ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  OrbitControls,
  Stage,
  useGLTF,
  ContactShadows,
  Html,
  useProgress,
} from '@react-three/drei'
import * as THREE from 'three'
import { AlertTriangle, Loader2, Rotate3d } from 'lucide-react'
import type { InteriorModel } from '../../types'

/* ==========================================================================
 *  Loading state (shown via Suspense while the 3D scene / model loads)
 * ======================================================================== */
function CanvasLoader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="flex w-48 flex-col items-center gap-3 text-center">
        <Loader2 className="h-8 w-8 animate-spin text-brandGold" aria-hidden />
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-gold-gradient transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs font-medium text-white/80">
          Loading 3D scene… {Math.round(progress)}%
        </p>
      </div>
    </Html>
  )
}

/* ==========================================================================
 *  Error boundary — catches 3D load failures and renders a graceful fallback
 * ======================================================================== */
interface EBProps {
  children: ReactNode
  fallback: ReactNode
}
interface EBState {
  hasError: boolean
}

class ModelErrorBoundary extends Component<EBProps, EBState> {
  state: EBState = { hasError: false }

  static getDerivedStateFromError(): EBState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Log for debugging; UI shows the friendly fallback below.
    console.error('3D model failed to load:', error, info)
  }

  render() {
    if (this.state.hasError) return <>{this.props.fallback}</>
    return <>{this.props.children}</>
  }
}

function ModelFallback({ poster }: { poster?: string }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-brandCharcoal">
      {poster && (
        <img
          src={poster}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
      )}
      <div className="relative z-10 max-w-xs px-6 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brandGold/20">
          <AlertTriangle className="h-7 w-7 text-brandGold" aria-hidden />
        </div>
        <p className="mb-1 font-heading text-lg font-semibold text-white">
          3D model unavailable
        </p>
        <p className="text-sm text-white/70">
          The model couldn&apos;t be loaded. Please check the model path or your
          connection and try again.
        </p>
      </div>
    </div>
  )
}

/* ==========================================================================
 *  Local GLB / GLTF model
 * ======================================================================== */
function GLTFModel({ path }: { path: string }) {
  const { scene } = useGLTF(path)
  return <primitive object={scene} />
}

/* ==========================================================================
 *  Procedural room — a built-in, network-free 3D living room.
 *  Slowly auto-rotates; fully orbit/zoom/pan controllable.
 * ======================================================================== */
function ProceduralRoom() {
  const group = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12
    }
  })

  // Brand-aligned material palette
  const wall = '#f4f4f4'
  const floor = '#d8c3a5'
  const sofa = '#2b2b2b'
  const cushion = '#f0a500'
  const wood = '#8a5a2b'
  const rug = '#efe7da'

  return (
    <group ref={group} position={[0, -1, 0]}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color={floor} roughness={0.9} />
      </mesh>

      {/* Back + side walls */}
      <mesh position={[0, 2, -4]} receiveShadow>
        <boxGeometry args={[10, 6, 0.2]} />
        <meshStandardMaterial color={wall} roughness={1} />
      </mesh>
      <mesh position={[-4, 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[8, 6, 0.2]} />
        <meshStandardMaterial color={wall} roughness={1} />
      </mesh>

      {/* Ceiling with a recessed cove panel + warm cove light */}
      <mesh position={[0, 4.9, 0]}>
        <boxGeometry args={[10, 0.2, 8]} />
        <meshStandardMaterial color={wall} />
      </mesh>
      <mesh position={[0, 4.75, -0.5]}>
        <boxGeometry args={[5, 0.1, 4]} />
        <meshStandardMaterial
          color={cushion}
          emissive={cushion}
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Rug */}
      <mesh position={[0, 0.02, 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5, 3.4]} />
        <meshStandardMaterial color={rug} roughness={1} />
      </mesh>

      {/* Sofa — base + back + arms + gold cushions */}
      <group position={[0, 0, -2.4]}>
        <mesh position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[3.4, 0.6, 1.2]} />
          <meshStandardMaterial color={sofa} roughness={0.8} />
        </mesh>
        <mesh position={[0, 1, -0.5]} castShadow>
          <boxGeometry args={[3.4, 1, 0.3]} />
          <meshStandardMaterial color={sofa} roughness={0.8} />
        </mesh>
        <mesh position={[-1.75, 0.85, 0]} castShadow>
          <boxGeometry args={[0.3, 0.9, 1.2]} />
          <meshStandardMaterial color={sofa} roughness={0.8} />
        </mesh>
        <mesh position={[1.75, 0.85, 0]} castShadow>
          <boxGeometry args={[0.3, 0.9, 1.2]} />
          <meshStandardMaterial color={sofa} roughness={0.8} />
        </mesh>
        {/* Gold accent cushions */}
        <mesh position={[-0.9, 0.95, 0]} rotation={[0, 0, 0.15]} castShadow>
          <boxGeometry args={[0.7, 0.7, 0.25]} />
          <meshStandardMaterial color={cushion} roughness={0.6} />
        </mesh>
        <mesh position={[0.9, 0.95, 0]} rotation={[0, 0, -0.15]} castShadow>
          <boxGeometry args={[0.7, 0.7, 0.25]} />
          <meshStandardMaterial color={cushion} roughness={0.6} />
        </mesh>
      </group>

      {/* Coffee table (wood top + legs) */}
      <group position={[0, 0, 0.4]}>
        <mesh position={[0, 0.55, 0]} castShadow>
          <boxGeometry args={[1.8, 0.12, 0.9]} />
          <meshStandardMaterial color={wood} roughness={0.5} metalness={0.1} />
        </mesh>
        {[
          [-0.8, 0.4],
          [0.8, 0.4],
          [-0.8, -0.4],
          [0.8, -0.4],
        ].map(([x, z], i) => (
          <mesh key={i} position={[x, 0.27, z]} castShadow>
            <cylinderGeometry args={[0.05, 0.05, 0.55, 12]} />
            <meshStandardMaterial color="#3a3a3a" metalness={0.6} roughness={0.3} />
          </mesh>
        ))}
      </group>

      {/* TV console + screen on back wall */}
      <mesh position={[0, 0.35, -3.6]} castShadow>
        <boxGeometry args={[3, 0.7, 0.5]} />
        <meshStandardMaterial color={wood} roughness={0.5} />
      </mesh>
      <mesh position={[0, 2.2, -3.85]}>
        <boxGeometry args={[3.2, 1.8, 0.08]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.4} roughness={0.2} />
      </mesh>

      {/* Floor lamp with warm glow */}
      <group position={[3, 0, -2.6]}>
        <mesh position={[0, 1.4, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 2.8, 12]} />
          <meshStandardMaterial color="#c9a24b" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 2.85, 0]}>
          <coneGeometry args={[0.35, 0.5, 20, 1, true]} />
          <meshStandardMaterial
            color={cushion}
            emissive={cushion}
            emissiveIntensity={0.8}
            side={THREE.DoubleSide}
          />
        </mesh>
        <pointLight position={[0, 2.7, 0]} intensity={12} distance={8} color="#ffd27a" />
      </group>

      {/* Plant accent */}
      <group position={[-3.2, 0, -1.8]}>
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.3, 0.22, 0.8, 16]} />
          <meshStandardMaterial color="#cf7500" roughness={0.6} />
        </mesh>
        <mesh position={[0, 1.3, 0]}>
          <sphereGeometry args={[0.6, 16, 16]} />
          <meshStandardMaterial color="#3f6b3f" roughness={1} />
        </mesh>
      </group>
    </group>
  )
}

/* ==========================================================================
 *  Sketchfab external embed
 * ======================================================================== */
function SketchfabEmbed({ model }: { model: InteriorModel }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-3xl bg-brandCharcoal">
      <div className="relative aspect-video w-full flex-1">
        {/* ⚠️ REPLACE the embed src via src/data/models.ts → embedUrl */}
        <iframe
          title={model.name}
          src={model.embedUrl}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      {model.attribution && (
        <p className="bg-black/60 px-4 py-2 text-[11px] leading-snug text-white/60">
          Model:{' '}
          <a
            href={model.attribution.modelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brandGold underline-offset-2 hover:underline"
          >
            {model.name}
          </a>{' '}
          by{' '}
          <a
            href={model.attribution.authorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brandGold underline-offset-2 hover:underline"
          >
            {model.attribution.author}
          </a>{' '}
          · {model.attribution.license} · via Sketchfab
        </p>
      )}
    </div>
  )
}

/* ==========================================================================
 *  Main viewer — switches on model type
 * ======================================================================== */
interface InteriorModelViewerProps {
  model: InteriorModel
  className?: string
}

export default function InteriorModelViewer({
  model,
  className = '',
}: InteriorModelViewerProps) {
  // External Sketchfab embed — no WebGL canvas needed.
  if (model.type === 'sketchfab') {
    return (
      <div className={`h-full w-full ${className}`}>
        <SketchfabEmbed model={model} />
      </div>
    )
  }

  const isLocal = model.type === 'local'

  return (
    <div className={`relative h-full w-full ${className}`}>
      {/* Hint chip */}
      <div className="pointer-events-none absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full glass-dark px-3 py-1.5 text-xs font-medium text-white/80">
        <Rotate3d className="h-3.5 w-3.5 text-brandGold" aria-hidden />
        Drag · Zoom · Pan
      </div>

      <ModelErrorBoundary fallback={<ModelFallback poster={model.poster} />}>
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [6, 3, 6], fov: 45 }}
          className="!h-full !w-full rounded-3xl bg-gradient-to-b from-[#1a1a1a] to-[#000]"
          gl={{ antialias: true, preserveDrawingBuffer: true }}
        >
          {/* Studio-style lighting rig (network-free "environment" lighting) */}
          <hemisphereLight args={['#fff3d6', '#302010', 0.6]} />
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 8, 5]}
            intensity={1.4}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <directionalLight position={[-5, 4, -5]} intensity={0.4} color="#ffd27a" />

          <Suspense fallback={<CanvasLoader />}>
            {isLocal && model.modelPath ? (
              // Local .glb/.gltf gets a Stage for auto-framing + nice shadows.
              // environment={null} → uses our manual lights only (no CDN fetch).
              <Stage environment={null} intensity={0.5} adjustCamera={1.1}>
                <GLTFModel path={model.modelPath} />
              </Stage>
            ) : (
              <>
                <ProceduralRoom />
                <ContactShadows
                  position={[0, -1, 0]}
                  opacity={0.5}
                  scale={14}
                  blur={2.5}
                  far={4}
                />
              </>
            )}
          </Suspense>

          <OrbitControls
            enableDamping
            dampingFactor={0.08}
            enablePan
            minDistance={4}
            maxDistance={14}
            minPolarAngle={0.2}
            maxPolarAngle={Math.PI / 2.05}
            target={[0, 0, 0]}
          />
        </Canvas>
      </ModelErrorBoundary>
    </div>
  )
}
