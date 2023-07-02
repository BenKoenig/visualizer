/* eslint-disable */
// @ts-nocheck
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Model = (props) => {
  const { nodes, materials } = useGLTF("/vienna.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.002, 0.001, 0.001]}
        rotation={[0, -0.128, -Math.PI]}
        scale={16.645}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <group position={[-0.154, 0.032, 0.201]} scale={[0.078, 0.059, 0.072]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735.geometry}
          material={materials.mat10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735_1.geometry}
          material={materials.mat20}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh.geometry}
        material={materials["_trees_normal.002"]}
        position={[-0.035, 0.029, -0.173]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-0.007, -0.008, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh002.geometry}
        material={materials["_trees_normal.003"]}
        position={[-0.29, 0.036, 0.105]}
        rotation={[-Math.PI / 2, 0, 3.051]}
        scale={[-0.007, -0.008, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh001.geometry}
        material={materials["_trees_normal.005"]}
        position={[0.167, 0.029, 0.031]}
        rotation={[-Math.PI / 2, 0, -2.233]}
        scale={[-0.007, -0.008, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh003.geometry}
        material={materials["_trees_normal.006"]}
        position={[0.026, 0.029, 0.144]}
        rotation={[-Math.PI / 2, 0, 0.569]}
        scale={[-0.007, -0.008, -0.007]}
      />
      <group
        position={[0.106, 0.032, -0.161]}
        rotation={[Math.PI, -0.303, Math.PI]}
        scale={[0.078, 0.059, 0.072]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735003.geometry}
          material={materials["mat10.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735003_1.geometry}
          material={materials["mat20.003"]}
        />
      </group>
      <group
        position={[-0.154, 0.032, -0.122]}
        rotation={[-Math.PI, 1.309, -Math.PI]}
        scale={[0.078, 0.059, 0.072]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735004.geometry}
          material={materials["mat10.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735004_1.geometry}
          material={materials["mat20.004"]}
        />
      </group>
      <group
        position={[-0.323, 0.032, -0.025]}
        rotation={[0, -0.115, 0]}
        scale={[0.078, 0.059, 0.072]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735005.geometry}
          material={materials["mat10.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735005_1.geometry}
          material={materials["mat20.005"]}
        />
      </group>
      <group
        position={[-0.044, 0.032, -0.09]}
        rotation={[0.018, 0.309, -0.052]}
        scale={[0.078, 0.059, 0.072]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735006.geometry}
          material={materials["mat10.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735006_1.geometry}
          material={materials["mat20.006"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/vienna.glb");

export default Model;