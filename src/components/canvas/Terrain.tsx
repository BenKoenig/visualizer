/* eslint-disable */
// @ts-nocheck
import React from 'react';
import { Plane } from '@react-three/drei'
import * as THREE from "three"
import {useLoader} from "@react-three/fiber"
const Terrain: React.FC<ModelProps> = ({ url, pos, scale}) => {
  const elevation = useLoader(THREE.TextureLoader, "newmap.png" )
  const normals = useLoader(THREE.TextureLoader, "newnormalMap.png" )
  const colors = useLoader(THREE.TextureLoader, "newColorMap.png" )
  return(
    <>
      <Plane
        rotation={[-Math.PI / 2,0,0]}
        position={[0,-3,0]}
        args={[20, 20, 1024, 1024]}
      >
        <meshStandardMaterial
          attach="material"
          color="white"
          metalness={0.2}
          map={colors}
          displacementMap={elevation}
          normalMap={normals}
        />

      </Plane>
    </>
  )
};

export default Terrain
