/* eslint-disable */ 
import React, { useEffect, useMemo } from 'react';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

interface ModelProps {
  url: string
  pos: [number, number, number]
}

const Model: React.FC<ModelProps> = ({ url, pos }) => {
  const gltf = useLoader(GLTFLoader, url);
  console.log(gltf)

  const textures = useMemo(() => {
    return gltf.scene.children[0].children.map(material => {
      const baseColorTextureIndex = material.userData.gltfExtensions['KHR_materials_pbrSpecularGlossiness']
        .specularGlossinessTexture.index;

      const baseColorTextureSrc = gltf.parser.json.images[baseColorTextureIndex].uri;
      return useTexture(baseColorTextureSrc);
    });
  }, [gltf]);

  return (
    <group position={pos}> 
      {textures.map((texture, index) => (
        <primitive key={index} object={texture} />
      ))}
      <primitive object={gltf.scene} dispose={null} />
    </group>
  );
};

export default Model;