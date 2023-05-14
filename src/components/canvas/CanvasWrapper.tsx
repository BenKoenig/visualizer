/* eslint-disable */ 
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky, Fog, PerspectiveCamera } from '@react-three/drei'
import GrassGroundPlane from './GrassGroundPlane'
import Model from './Model'

const CanvasWrapper: React.FC = () => {
  
  const controlsRef = React.useRef<OrbitControls | null>(null)

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
          style={{ width: '100%', height: '100%' }}
          camera={{ position: [0, 6, 15] }} // Adjust the camera position here
        >

            {/* <ambientLight intensity={0.5} /> */}
            <pointLight position={[10, 10, 10]} />

 
            <GrassGroundPlane />
            <Model url="/palmtree.gltf" pos={[-4,0,0]} />

            <OrbitControls
              ref={controlsRef}
              onChange={handleControlsChange}
            />
            <perspectiveCamera
              position={[0, 3000, 15]} // Adjust the camera position here
            />
            <fog attach="fog" args={['#ffffff', 10, 50]} />

        </Canvas>
  )
}

export default CanvasWrapper
