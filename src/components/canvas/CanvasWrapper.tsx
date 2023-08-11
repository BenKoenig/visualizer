/* eslint-disable */
// @ts-nocheck
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, extend, useThree } from '@react-three/fiber'
import { OrbitControls, Plane, MeshReflectorMaterial, Sky } from '@react-three/drei'
import Model from './Model'
import { useControls } from 'leva'
import LoadingScreen from '../loadingScreen/LoadingScreen'

extend({ Plane, MeshReflectorMaterial });

const CanvasScene = () => {


  const { camera: threeCamera } = useThree()
  const { camera, fov } = useControls({
    camera: {
      x: 0,
      y: 0.29,
      z: -0.4
    },
    fov: {
      value: 72,
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
  const [isLoading, setIsLoading] = useState(true);
  // Callback to handle when the model has finished loading
  const handleModelLoaded = () => {
    const minimumLoadTime = 5000; // 5 seconds in milliseconds

    const loadingStartTime = Date.now();
    const elapsedTime = Date.now() - loadingStartTime;

    const remainingTime = elapsedTime > minimumLoadTime ? 0 : minimumLoadTime - elapsedTime;

    setTimeout(() => {
      setIsLoading(false);
    }, remainingTime);
  };
  const { sky } = useControls({
    sky: {
      x: -2.5,
      y: 1,
      z: -1.4
    }
  })

  const { lighting } = useControls({
    lighting: {
      x: 4,
      y: 0.7,
      z: 4
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
      {isLoading && <LoadingScreen/>}
        <Canvas
          style={{ width: '100%', height: '100%' }}
        >
          <ambientLight />
          <pointLight position={[lighting.x, lighting.y, lighting.z]} />
          <Sky sunPosition={[sky.x, sky.y, sky.z]} inclination={0} azimuth={0.20} />
          <Model handleModelLoaded={handleModelLoaded} />
          <OrbitControls ref={controlsRef} onChange={handleControlsChange} target={[0, 0, 0]} />
          <CanvasScene />
        </Canvas>
    </>
  )
}
export default CanvasWrapper
