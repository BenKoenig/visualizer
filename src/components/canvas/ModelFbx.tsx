/* eslint-disable */
import React, { useEffect, useMemo } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'; // Import FBXLoader
import { useLoader } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

interface ModelProps {
  url: string; // URL of the FBX model
  pos: [number, number, number]; // Position of the model in 3D space
  scale: number;
}

const ModelFbx: React.FC<ModelProps> = ({ url, pos, scale}) => {
  const fbx = useLoader(FBXLoader, url); // Use FBXLoader instead of GLTFLoader

  const textures = useMemo(() => {
    return fbx.children[0].children.map((material: any) => {
      const baseColorTextureSrc = material.map;
      return useTexture(baseColorTextureSrc);
    });
  }, [fbx]);

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
