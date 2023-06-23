/* eslint-disable */
// @ts-nocheck
import React, { Suspense } from 'react'
import { Canvas, extend  } from '@react-three/fiber'
import { OrbitControls, Plane, MeshReflectorMaterial, Sky } from '@react-three/drei'
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
      camera={{ position: [20, 6, 0] }} // Adjust the camera position here
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sky sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
{/*       <ModelFbx url="/newfile.fbx" pos={[0,-3,0]} scale={0.15} /> */}
      <OrbitControls ref={controlsRef} onChange={handleControlsChange} target={[0, 0, 0]} />
    </Canvas>
  )
}

export default CanvasWrapper
