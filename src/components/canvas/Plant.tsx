/* eslint-disable */ 
import React, { useEffect, useRef } from 'react';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

interface GLTFModelProps {
  url: string;
}

const GLTFModel: React.FC<GLTFModelProps> = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url);
  const modelRef = useRef<GLTF>();
  console.log(gltf)

  useEffect(() => {
    modelRef.current = gltf;
  }, [gltf]);

  const loadTextures = () => {
    const textures = [];

    for (const material of gltf.scene.children[0].children) {
      const baseColorTextureIndex = material.userData.gltfExtensions['KHR_materials_pbrSpecularGlossiness']
        .specularGlossinessTexture.index;

      const baseColorTextureSrc = gltf.parser.json.images[baseColorTextureIndex].uri;
      const loadedTexture = useTexture(baseColorTextureSrc);
      textures.push(loadedTexture);
    }

    return textures;
  };

  const textures = loadTextures();

  return (
    <group>
      {textures.map((texture, index) => (
        <primitive key={index} object={texture} />
      ))}
      {modelRef.current && (
        <primitive object={modelRef.current.scene} dispose={null} />
      )}
    </group>
  );
};

export default GLTFModel;
