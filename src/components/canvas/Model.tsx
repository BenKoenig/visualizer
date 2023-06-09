/* eslint-disable */
import React, { useEffect, useMemo } from 'react';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

// Define the prop types for the Model component
interface ModelProps {
  url: string; // URL of the 3D model
  pos: [number, number, number]; // Position of the model in 3D space
}

// Define the Model component as a functional component
const Model: React.FC<ModelProps> = ({ url, pos }) => {
  // Use the GLTFLoader to load the 3D model
  const gltf = useLoader(GLTFLoader, url);

  // Create an array of textures from the loaded GLTF object
  const textures = useMemo(() => {
    return gltf.scene.children[0].children.map((material: any) => {
      // Get the index of the base color texture from the GLTF extensions
      const baseColorTextureIndex = material.userData.gltfExtensions['KHR_materials_pbrSpecularGlossiness']
        .specularGlossinessTexture.index;

      // Get the source URL of the base color texture
      const baseColorTextureSrc = gltf.parser.json.images[baseColorTextureIndex].uri;

      // Use the useTexture hook to load the texture
      return useTexture(baseColorTextureSrc);
    });
  }, [gltf]);

  // Render the 3D model and textures in a group
  return (
    <group position={pos}>
      {/* Render each texture as a primitive object */}
      {textures.map((texture, index) => (
        <primitive key={index} object={texture} />
      ))}
      {/* Render the 3D model as a primitive object */}
      <primitive object={gltf.scene} dispose={null} />
    </group>
  );
};

export default Model;
