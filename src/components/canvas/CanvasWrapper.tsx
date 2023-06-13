/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Canvas,extend  } from '@react-three/fiber'
import { OrbitControls, Sphere, Plane, SpotLight, MeshReflectorMaterial, Sky } from '@react-three/drei'
import GrassGroundPlane from './GrassGroundPlane'
import * as THREE from 'three'
import ModelFbx from './ModelFbx'

extend({ Plane, MeshReflectorMaterial });

const CanvasWrapper: React.FC = () => {
  const controlsRef = React.useRef<any>(null);

  const lightPosition = [0, 50, 20];
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
      shadowMap

      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 6, 15] }} // Adjust the camera position here
    >


      {/* <ambientLight intensity={0.5} /> */}
      <Sky sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
      <pointLight position={[0, 20, 10]} intensity={1.5} />
      <ambientLight intensity={0.8} />

   {/*    <Cloud
        opacity={0.15}
        speed={0.4} // Rotation speed
        width={10} // Width of the full cloud
        depth={1.5} // Z-dir depth
        segments={22} // Number of particles
        position={[0, 10, 0]}
      /> */}

      <GrassGroundPlane />

      <ModelFbx url="/palm.fbx" pos={[2,-1,0]} scale={0.018} />

      <OrbitControls ref={controlsRef} onChange={handleControlsChange} />
      <SpotLight position={lightPosition} angle={0.3} castShadow />

      {/* Add a small sphere to represent the position of the light */}
      <Sphere args={[1, 16, 16]} position={lightPosition}>
        <meshBasicMaterial color="yellow" />
      </Sphere>

    </Canvas>
  )
}

export default CanvasWrapper
