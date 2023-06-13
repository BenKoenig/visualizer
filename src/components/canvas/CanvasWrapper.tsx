/* eslint-disable */
// @ts-nocheck
import React, { Suspense } from 'react'
import { Canvas,extend,useLoader  } from '@react-three/fiber'
import { OrbitControls, Sphere, Plane, SpotLight, MeshReflectorMaterial, Sky } from '@react-three/drei'
import Terrain from './Terrain'
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
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [2, 2, 1] }} // Adjust the camera position here
    >
      <pointLight intensity={1} position={[0,4,12]}/>
      <Sky sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
      <ModelFbx url="/palm.fbx" pos={[2,-3,0]} scale={0.001} />

      <Suspense fallback={null}>
        <Terrain/>
      </Suspense>
      <OrbitControls ref={controlsRef} onChange={handleControlsChange} />

    </Canvas>
  )
}

export default CanvasWrapper
