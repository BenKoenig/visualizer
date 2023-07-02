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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834.geometry}
        material={materials["mat20.007"]}
        position={[-0.11, 0.035, -0.02]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837006.geometry}
        material={materials["mat10.022"]}
        position={[-0.014, 0.06, 0.072]}
        rotation={[-0.043, -0.763, -0.072]}
        scale={[0.233, 0.177, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837001.geometry}
        material={materials["mat10.007"]}
        position={[-0.142, 0.06, 0.013]}
        rotation={[-3.109, -0.297, 3.109]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837002.geometry}
        material={materials["mat10.008"]}
        position={[-0.156, 0.06, 0.017]}
        rotation={[-3.109, -0.297, 3.109]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837003.geometry}
        material={materials["mat10.009"]}
        position={[-0.014, 0.06, 0.072]}
        rotation={[-0.043, -0.763, -0.072]}
        scale={[0.233, 0.177, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834001.geometry}
        material={materials["mat20.008"]}
        position={[-0.215, 0.035, -0.023]}
        rotation={[Math.PI, -1.285, Math.PI]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837004.geometry}
        material={materials["mat10.010"]}
        position={[-0.331, 0.06, 0.044]}
        rotation={[-3.105, -0.521, 3.118]}
        scale={[0.233, 0.177, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837005.geometry}
        material={materials["mat10.011"]}
        position={[-0.238, 0.06, -0.077]}
        rotation={[-1.905, 1.538, 1.863]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837007.geometry}
        material={materials["mat10.012"]}
        position={[-0.239, 0.06, -0.063]}
        rotation={[-1.905, 1.538, 1.863]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834002.geometry}
        material={materials["mat20.009"]}
        position={[0.194, 0.035, -0.064]}
        rotation={[0, 0.448, 0]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837008.geometry}
        material={materials["mat10.013"]}
        position={[0.179, 0.06, -0.02]}
        rotation={[-3.099, -0.744, 3.128]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837009.geometry}
        material={materials["mat10.014"]}
        position={[0.169, 0.06, -0.011]}
        rotation={[-3.099, -0.744, 3.128]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837010.geometry}
        material={materials["mat10.015"]}
        position={[0.32, 0.06, -0.023]}
        rotation={[-0.033, -0.316, -0.052]}
        scale={[0.233, 0.177, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834003.geometry}
        material={materials["mat20.010"]}
        position={[0.135, 0.035, -0.16]}
        rotation={[-Math.PI, 1.069, -Math.PI]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837011.geometry}
        material={materials["mat10.016"]}
        position={[0.169, 0.06, -0.288]}
        rotation={[-0.121, 1.307, 0.074]}
        scale={[0.233, 0.177, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837012.geometry}
        material={materials["mat10.017"]}
        position={[0.189, 0.06, -0.138]}
        rotation={[-0.044, -0.772, -0.073]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837013.geometry}
        material={materials["mat10.018"]}
        position={[0.18, 0.06, -0.148]}
        rotation={[-0.044, -0.772, -0.073]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh004.geometry}
        material={materials["_trees_normal.007"]}
        position={[0.364, 0.029, 0.146]}
        rotation={[-Math.PI / 2, 0, 2.072]}
        scale={[-0.007, -0.008, -0.007]}
      />
      <group
        position={[0.035, 0.052, -0.023]}
        rotation={[-2.939, 0.242, 0.072]}
        scale={[0.002, 0.001, 0.001]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["Brown.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["Green.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_3.geometry}
          material={materials["Coconut.001"]}
        />
      </group>
      <group
        position={[0.259, 0.052, 0.11]}
        rotation={[-2.897, 0.629, -0.024]}
        scale={[0.002, 0.001, 0.001]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials["Brown.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_2.geometry}
          material={materials["Green.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_3.geometry}
          material={materials["Coconut.002"]}
        />
      </group>
      <group
        position={[0.307, 0.052, -0.117]}
        rotation={[-0.756, -1.282, 2.528]}
        scale={[0.002, 0.001, 0.001]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials["Brown.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={materials["Green.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_3.geometry}
          material={materials["Coconut.003"]}
        />
      </group>
      <group
        position={[0.196, 0.066, 0.11]}
        rotation={[-2.196, -1.327, 1.053]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={materials["Brown.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_2.geometry}
          material={materials["Green.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_3.geometry}
          material={materials["Coconut.004"]}
        />
      </group>
      <group
        position={[0.208, 0.052, 0.173]}
        rotation={[-0.235, -0.572, 3.135]}
        scale={[0.002, 0.001, 0.001]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_1.geometry}
          material={materials["Brown.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_2.geometry}
          material={materials["Green.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_3.geometry}
          material={materials["Coconut.005"]}
        />
      </group>
      <group
        position={[0.243, 0.052, 0.144]}
        rotation={[-2.579, -1.195, 0.652]}
        scale={[0.002, 0.001, 0.001]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_1.geometry}
          material={materials["Brown.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_2.geometry}
          material={materials["Green.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_3.geometry}
          material={materials["Coconut.006"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh005.geometry}
        material={materials["_trees_normal.001"]}
        position={[0.07, 0.029, 0.192]}
        rotation={[-Math.PI / 2, 0, 2.483]}
        scale={[-0.006, -0.007, -0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh006.geometry}
        material={materials["_trees_normal.004"]}
        position={[0.07, 0.029, 0.152]}
        rotation={[-Math.PI / 2, 0, 1.25]}
        scale={[-0.007, -0.008, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh007.geometry}
        material={materials["_trees_normal.008"]}
        position={[0.026, 0.029, 0.192]}
        rotation={[-Math.PI / 2, 0, 1.519]}
        scale={[-0.01, -0.011, -0.01]}
      />
      <group
        position={[-0.277, 0.033, -0.002]}
        rotation={[-Math.PI, 0.964, -Math.PI]}
        scale={[0.11, 0.091, 0.108]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735001.geometry}
          material={materials["mat10.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735001_1.geometry}
          material={materials["mat20.001"]}
        />
      </group>
      <group
        position={[-0.319, 0.032, -0.028]}
        rotation={[0, 1.039, 0]}
        scale={[0.078, 0.059, 0.072]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735002.geometry}
          material={materials["mat10.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735002_1.geometry}
          material={materials["mat20.002"]}
        />
      </group>
      <group
        position={[-0.087, 0.068, 0.233]}
        rotation={[-2.939, 0.242, 0.072]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_1.geometry}
          material={materials["Brown.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_2.geometry}
          material={materials["Green.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_3.geometry}
          material={materials["Coconut.007"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/vienna.glb");

export default Model;