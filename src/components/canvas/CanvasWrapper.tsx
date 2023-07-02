/* eslint-disable */
// @ts-nocheck
import React, { Suspense, useEffect } from 'react'
import { Canvas, extend, useThree } from '@react-three/fiber'
import { OrbitControls, Plane, MeshReflectorMaterial, Sky } from '@react-three/drei'
import Model from './Model'
import { useControls } from 'leva'

extend({ Plane, MeshReflectorMaterial });

const CanvasScene = () => {
  const { camera: threeCamera } = useThree()
  const { camera, fov } = useControls({
    camera: {
      x: 0,
      y: 0.5,
      z: -0.4
    },
    fov: {
      value: 59,
      min: 1,
      max: 150,
    }
  })

  useEffect(() => {
    threeCamera.position.set(camera.x, camera.y, camera.z)
    threeCamera.fov = fov
    threeCamera.updateProjectionMatrix() // necessary to make the FOV change take effect
  }, [camera, fov, threeCamera])

  return null
}

const CanvasWrapper: React.FC = () => {
  const controlsRef = React.useRef<any>(null);
  const { sky } = useControls({
    sky: {
      x: 3.6,
      y: 3.6,
      z: 3
    }
  })

  const { lighting } = useControls({
    lighting: {
      x: -1,
      y: 15,
      z: 20
    }
  })

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
    <>
      <Canvas
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight />
        <pointLight position={[lighting.x, lighting.y, lighting.z]} />
        <Sky sunPosition={[sky.x, sky.y, sky.z]} inclination={0} azimuth={0.20} />
        <Model />
        <OrbitControls ref={controlsRef} onChange={handleControlsChange} target={[0, 0, 0]} />
        <CanvasScene />
      </Canvas>
    </>
  )
}

export default CanvasWrapper
