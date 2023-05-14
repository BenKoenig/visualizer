/* eslint-disable */ 
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import GrassGroundPlane from './GrassGroundPlane'
import Plant from './Plant'

const CanvasWrapper: React.FC = () => {
  return (
        <Canvas style={{ width: '100%', height: '100%' }}>
          {/* eslint-disable-next-line react/no-unknown-property */}
            <ambientLight intensity={0.5} />
          {/* eslint-disable-next-line react/no-unknown-property */}
            <pointLight position={[10, 10, 10]} />
            {/* <Stars /> */}
            <GrassGroundPlane />
            <Plant url="/plant/potted_plant_01_4k.gltf"/>
            <OrbitControls />
        </Canvas>
  )
}

export default CanvasWrapper
