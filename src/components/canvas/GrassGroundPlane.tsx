import React from 'react'
import { Plane, useTexture } from '@react-three/drei'
import * as THREE from 'three'

const GrassGroundPlane: React.FC = () => {
  const grassTexture = useTexture('grass.jpg')

  grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping
  grassTexture.repeat.set(50, 50)

  return (
        <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <meshStandardMaterial attach="material" map={grassTexture} />
        </Plane>
  )
}

export default GrassGroundPlane
