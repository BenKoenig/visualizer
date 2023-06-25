/* eslint-disable */
import React, { useEffect, useMemo } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'; // Import FBXLoader
import { useLoader } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface ModelProps {
  url: string; // URL of the FBX model
  pos: [number, number, number]; // Position of the model in 3D space
  scale: number;
}

const ModelFbx: React.FC<ModelProps> = ({ url, pos, scale}) => {
  const fbx = useLoader(FBXLoader, url);

  const getTexturesFromObject = (obj) => {
    let textures = [];

    if (obj.children) {
      obj.children.forEach((child) => {
        if (child.material && child.material.map) {
          textures.push(new THREE.TextureLoader().load(child.material.map));
        }

        // If the child has its own children, recurse on those
        if (child.children && child.children.length > 0) {
          textures = textures.concat(getTexturesFromObject(child));
        }
      });
    }

    return textures;
  }

  const textures = useMemo(() => getTexturesFromObject(fbx), [fbx]);

  return (
    <group position={pos} scale={[scale, scale,scale]}>
      {textures.map((texture, index) => (
        <primitive key={index} object={texture} />
      ))}
      <primitive object={fbx} dispose={null} />
    </group>
  );
};

export default ModelFbx;
