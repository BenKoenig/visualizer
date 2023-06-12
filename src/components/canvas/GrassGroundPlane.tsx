/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Box } from '@react-three/drei'

const GrassGroundPlane: React.FC = () => {

  return (
    <Box args={[20, 1, 20]} position-y={-0.5} receiveShadow>
      <meshBasicMaterial color="greenyellow"/>
    </Box>
  )
}

export default GrassGroundPlane
