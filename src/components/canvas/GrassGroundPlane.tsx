/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Plane } from '@react-three/drei'

const GrassGroundPlane: React.FC = () => {

  return (
        <Plane args={[20, 20]} position-y={-1} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <meshBasicMaterial color="greenyellow"/>
        </Plane>
  )
}

export default GrassGroundPlane
