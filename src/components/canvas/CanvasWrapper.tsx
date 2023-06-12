/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Canvas,extend } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Plane, Cloud, MeshReflectorMaterial } from '@react-three/drei'
import GrassGroundPlane from './GrassGroundPlane'
import * as THREE from 'three'
import ModelFbx from './ModelFbx'

extend({ Plane, MeshReflectorMaterial });

const CanvasWrapper: React.FC = () => {
  const controlsRef = React.useRef<any>(null);

  const handleControlsChange = () => {
    const controls = controlsRef.current
    if (controls) {
      // Disable zoom
      controls.enableZoom = false
      // Disable pan
      controls.enablePan = false
      // Limit upward rotation
      controls.maxPolarAngle = Math.PI / 2.04 // Adjust the angle here (in radians)
    }
  }

  return (
    <Canvas
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding
      }}
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 6, 15] }} // Adjust the camera position here
    >
      <scene>
        <mesh>
          <boxGeometry args={[100, 100, 100]} />
          <meshBasicMaterial color="skyblue" side={THREE.BackSide} />
        </mesh>
      </scene>

      {/* <ambientLight intensity={0.5} /> */}
      <pointLight position={[0, 20, 10]} intensity={1.5} />

      <Cloud
        opacity={0.15}
        speed={0.4} // Rotation speed
        width={10} // Width of the full cloud
        depth={1.5} // Z-dir depth
        segments={22} // Number of particles
        position={[0, 10, 0]}
      />

      <GrassGroundPlane />
      <group>
        <ModelFbx url="/palm.fbx" pos={[-4,-1,-1]} scale={0.018} />
        <ModelFbx url="/palm.fbx" pos={[2,-1,0]} scale={0.018} />
      </group>

      <OrbitControls ref={controlsRef} onChange={handleControlsChange} />
      <fog attach="fog" args={['#000', 10, 50]} />

    </Canvas>
  )
}

export default CanvasWrapper
