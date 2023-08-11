/* eslint-disable */
// @ts-nocheck
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const Model = (props) => {
  const { nodes, materials } = useGLTF("/vienna.glb");

  props.handleModelLoaded()
/*   const parentGroupRef = useRef();
  const allMeshesAndGroups = useRef([]); // Using a ref to hold the array



  useEffect(() => {
    // Traverse the children to populate the allMeshesAndGroups ref
    if (parentGroupRef.current) {
      parentGroupRef.current.traverse((child) => {
        if (child.isMesh || child.isGroup) {
          allMeshesAndGroups.current.push(child);
        }
      });

      // Now handle the timed visibility changes
      const totalItems = allMeshesAndGroups.current.length;
      const intervalTime = props.timerDuration / totalItems;
      let counter = 0;

      const timer = setInterval(() => {
        if (counter < totalItems) {
          allMeshesAndGroups.current[counter].visible = false;
          counter++;
        } else {
          clearInterval(timer);
          allMeshesAndGroups.current.forEach(mesh => mesh.visible = true); // Restore visibility
        }
      }, intervalTime);

      // Cleanup function
      return () => clearInterval(timer);
    }
  }, []); */



  return (
    <group  {...props} dispose={null}>
      <group
        position={[-0.002, 0.001, 0.001]}
        rotation={[0, -0.128, -Math.PI]}
        scale={16.645}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <group position={[-0.154, 0.032, 0.201]} scale={[0.078, 0.059, 0.072]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735019.geometry}
          material={materials["mat10.068"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735019_1.geometry}
          material={materials["mat20.037"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh017.geometry}
        material={materials["_trees_normal.113"]}
        position={[-0.035, 0.029, -0.173]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-0.007, -0.008, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh018.geometry}
        material={materials["_trees_normal.114"]}
        position={[-0.29, 0.036, 0.105]}
        rotation={[-Math.PI / 2, 0, 3.051]}
        scale={[-0.007, -0.008, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh019.geometry}
        material={materials["_trees_normal.115"]}
        position={[0.167, 0.029, 0.031]}
        rotation={[-Math.PI / 2, 0, -2.233]}
        scale={[-0.007, -0.008, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh020.geometry}
        material={materials["_trees_normal.116"]}
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
          geometry={nodes.mesh2035836735020.geometry}
          material={materials["mat10.069"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735020_1.geometry}
          material={materials["mat20.038"]}
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
          geometry={nodes.mesh2035836735021.geometry}
          material={materials["mat10.070"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735021_1.geometry}
          material={materials["mat20.039"]}
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
          geometry={nodes.mesh2035836735022.geometry}
          material={materials["mat10.071"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735022_1.geometry}
          material={materials["mat20.040"]}
        />
      </group>
      <group
        position={[0.045, 0.032, -0.098]}
        rotation={[0.018, 0.309, -0.052]}
        scale={[0.078, 0.059, 0.072]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735023.geometry}
          material={materials["mat10.072"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735023_1.geometry}
          material={materials["mat20.041"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834018.geometry}
        material={materials["mat20.042"]}
        position={[-0.11, 0.035, -0.02]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837050.geometry}
        material={materials["mat10.073"]}
        position={[-0.014, 0.06, 0.072]}
        rotation={[-0.043, -0.763, -0.072]}
        scale={[0.233, 0.177, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837051.geometry}
        material={materials["mat10.074"]}
        position={[-0.142, 0.06, 0.013]}
        rotation={[-3.109, -0.297, 3.109]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837052.geometry}
        material={materials["mat10.075"]}
        position={[-0.156, 0.06, 0.017]}
        rotation={[-3.109, -0.297, 3.109]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837053.geometry}
        material={materials["mat10.076"]}
        position={[-0.014, 0.06, 0.072]}
        rotation={[-0.043, -0.763, -0.072]}
        scale={[0.233, 0.177, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834019.geometry}
        material={materials["mat20.043"]}
        position={[-0.215, 0.035, -0.023]}
        rotation={[Math.PI, -1.285, Math.PI]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837054.geometry}
        material={materials["mat10.077"]}
        position={[-0.331, 0.06, 0.044]}
        rotation={[-3.105, -0.521, 3.118]}
        scale={[0.233, 0.177, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837055.geometry}
        material={materials["mat10.078"]}
        position={[-0.238, 0.06, -0.077]}
        rotation={[-1.905, 1.538, 1.863]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837056.geometry}
        material={materials["mat10.079"]}
        position={[-0.239, 0.06, -0.063]}
        rotation={[-1.905, 1.538, 1.863]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834020.geometry}
        material={materials["mat20.044"]}
        position={[0.194, 0.035, -0.064]}
        rotation={[0, 0.448, 0]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837057.geometry}
        material={materials["mat10.080"]}
        position={[0.179, 0.06, -0.02]}
        rotation={[-3.099, -0.744, 3.128]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837058.geometry}
        material={materials["mat10.081"]}
        position={[0.169, 0.06, -0.011]}
        rotation={[-3.099, -0.744, 3.128]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837059.geometry}
        material={materials["mat10.082"]}
        position={[0.32, 0.06, -0.023]}
        rotation={[-0.033, -0.316, -0.052]}
        scale={[0.233, 0.177, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834021.geometry}
        material={materials["mat20.045"]}
        position={[0.135, 0.035, -0.16]}
        rotation={[-Math.PI, 1.069, -Math.PI]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837060.geometry}
        material={materials["mat10.083"]}
        position={[0.169, 0.06, -0.288]}
        rotation={[-0.121, 1.307, 0.074]}
        scale={[0.233, 0.177, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837061.geometry}
        material={materials["mat10.084"]}
        position={[0.189, 0.06, -0.138]}
        rotation={[-0.044, -0.772, -0.073]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837062.geometry}
        material={materials["mat10.085"]}
        position={[0.18, 0.06, -0.148]}
        rotation={[-0.044, -0.772, -0.073]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh021.geometry}
        material={materials["_trees_normal.117"]}
        position={[0.385, 0.029, 0.159]}
        rotation={[-Math.PI / 2, 0, 2.072]}
        scale={[-0.01, -0.012, -0.011]}
      />
      <group
        position={[-0.048, 0.052, -0.09]}
        rotation={[-2.939, 0.242, 0.072]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder063_1.geometry}
          material={materials["Brown.063"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder063_2.geometry}
          material={materials["Green.063"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder063_3.geometry}
          material={materials["Coconut.063"]}
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
          geometry={nodes.Cylinder064_1.geometry}
          material={materials["Brown.064"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder064_2.geometry}
          material={materials["Green.064"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder064_3.geometry}
          material={materials["Coconut.064"]}
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
          geometry={nodes.Cylinder065_1.geometry}
          material={materials["Brown.065"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder065_2.geometry}
          material={materials["Green.065"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder065_3.geometry}
          material={materials["Coconut.065"]}
        />
      </group>
      <group
        position={[0.196, 0.066, 0.11]}
        rotation={[-2.46, -1.28, 0.851]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder066_1.geometry}
          material={materials["Brown.066"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder066_2.geometry}
          material={materials["Green.066"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder066_3.geometry}
          material={materials["Coconut.066"]}
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
          geometry={nodes.Cylinder067_1.geometry}
          material={materials["Brown.067"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder067_2.geometry}
          material={materials["Green.067"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder067_3.geometry}
          material={materials["Coconut.067"]}
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
          geometry={nodes.Cylinder068_1.geometry}
          material={materials["Brown.068"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder068_2.geometry}
          material={materials["Green.068"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder068_3.geometry}
          material={materials["Coconut.068"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh022.geometry}
        material={materials["_trees_normal.118"]}
        position={[0.07, 0.029, 0.192]}
        rotation={[-Math.PI / 2, 0, 2.483]}
        scale={[-0.006, -0.007, -0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh023.geometry}
        material={materials["_trees_normal.119"]}
        position={[0.07, 0.029, 0.152]}
        rotation={[-Math.PI / 2, 0, 1.25]}
        scale={[-0.007, -0.008, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh024.geometry}
        material={materials["_trees_normal.120"]}
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
          geometry={nodes.mesh2035836735024.geometry}
          material={materials["mat10.086"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735024_1.geometry}
          material={materials["mat20.046"]}
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
          geometry={nodes.mesh2035836735025.geometry}
          material={materials["mat10.087"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735025_1.geometry}
          material={materials["mat20.047"]}
        />
      </group>
      <group
        position={[-0.087, 0.068, 0.233]}
        rotation={[-2.924, -0.436, 0.215]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder069_1.geometry}
          material={materials["Brown.069"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder069_2.geometry}
          material={materials["Green.069"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder069_3.geometry}
          material={materials["Coconut.069"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh025.geometry}
        material={materials["_trees_normal.121"]}
        position={[-0.035, 0.029, -0.228]}
        rotation={[-Math.PI / 2, 0, -1.77]}
        scale={[-0.01, -0.012, -0.01]}
      />
      <group
        position={[-0.18, 0.032, -0.152]}
        rotation={[0, 0.069, 0]}
        scale={[0.098, 0.094, 0.103]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735026.geometry}
          material={materials["mat10.088"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735026_1.geometry}
          material={materials["mat20.048"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_01_mesh004.geometry}
        material={materials["_trees_normal.122"]}
        position={[0.107, 0.028, -0.034]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.016, 0.017, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_01_mesh005.geometry}
        material={materials["_trees_normal.123"]}
        position={[0.022, 0.028, -0.015]}
        rotation={[Math.PI / 2, 0, -1.038]}
        scale={[0.011, 0.012, 0.015]}
      />
      <group
        position={[-0.15, 0.083, 0.233]}
        rotation={[-2.792, 0.242, 0.072]}
        scale={[0.003, 0.003, 0.002]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder070_1.geometry}
          material={materials["Brown.070"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder070_2.geometry}
          material={materials["Green.070"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder070_3.geometry}
          material={materials["Coconut.070"]}
        />
      </group>
      <group
        position={[-0.088, 0.062, -0.106]}
        rotation={[-2.939, 0.242, 0.072]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder071_1.geometry}
          material={materials["Brown.071"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder071_2.geometry}
          material={materials["Green.071"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder071_3.geometry}
          material={materials["Coconut.071"]}
        />
      </group>
      <group
        position={[0.099, 0.033, -0.141]}
        rotation={[-Math.PI, 0.835, -Math.PI]}
        scale={[0.082, 0.095, 0.115]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735027.geometry}
          material={materials["mat10.089"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735027_1.geometry}
          material={materials["mat20.049"]}
        />
      </group>
      <group
        position={[-0.048, 0.052, -0.133]}
        rotation={[-2.815, 0.914, -0.14]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder072_1.geometry}
          material={materials["Brown.072"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder072_2.geometry}
          material={materials["Green.072"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder072_3.geometry}
          material={materials["Coconut.072"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh026.geometry}
        material={materials["_trees_normal.124"]}
        position={[-0.248, 0.028, 0.105]}
        rotation={[-Math.PI / 2, 0, 2.326]}
        scale={[-0.008, -0.011, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh018.geometry}
        material={materials["_trees_normal.125"]}
        position={[0.31, 0.027, 0.006]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.009, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh019.geometry}
        material={materials["_trees_normal.126"]}
        position={[0.355, 0.027, 0.053]}
        rotation={[Math.PI / 2, 0, 1.571]}
        scale={[0.012, 0.012, 0.013]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh020.geometry}
        material={materials["_trees_normal.127"]}
        position={[0.349, 0.027, 0.008]}
        rotation={[Math.PI / 2, 0, -1.782]}
        scale={[0.009, 0.007, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh021.geometry}
        material={materials["_trees_normal.128"]}
        position={[0.38, 0.027, -0.019]}
        rotation={[Math.PI / 2, 0, 2.991]}
        scale={[0.008, 0.007, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh022.geometry}
        material={materials["_trees_normal.129"]}
        position={[0.391, 0.027, 0.029]}
        rotation={[Math.PI / 2, 0, -0.392]}
        scale={[0.009, 0.007, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh023.geometry}
        material={materials["_trees_normal.130"]}
        position={[0.336, 0.027, -0.047]}
        rotation={[Math.PI / 2, 0, 2.991]}
        scale={[0.01, 0.008, 0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh024.geometry}
        material={materials["_trees_normal.131"]}
        position={[0.38, 0.027, -0.001]}
        rotation={[Math.PI / 2, 0, 2.991]}
        scale={[0.008, 0.007, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh025.geometry}
        material={materials["_trees_normal.132"]}
        position={[0.345, 0.027, 0.025]}
        rotation={[Math.PI / 2, 0, -1.782]}
        scale={[0.009, 0.007, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh026.geometry}
        material={materials["_trees_normal.133"]}
        position={[0.391, 0.027, 0.058]}
        rotation={[Math.PI / 2, 0, -0.392]}
        scale={[0.009, 0.007, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh027.geometry}
        material={materials["_trees_normal.134"]}
        position={[0.367, 0.027, 0.029]}
        rotation={[Math.PI / 2, 0, -0.392]}
        scale={[0.009, 0.007, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh028.geometry}
        material={materials["_trees_normal.135"]}
        position={[0.31, 0.027, 0.036]}
        rotation={[Math.PI / 2, 0, -1.176]}
        scale={[0.008, 0.007, 0.01]}
      />
      <group
        position={[-0.094, 0.052, -0.146]}
        rotation={[-2.93, -0.374, 0.2]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder073_1.geometry}
          material={materials["Brown.073"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder073_2.geometry}
          material={materials["Green.073"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder073_3.geometry}
          material={materials["Coconut.073"]}
        />
      </group>
      <group
        position={[-0.088, 0.062, -0.17]}
        rotation={[-2.443, -1.261, 0.796]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder074_1.geometry}
          material={materials["Brown.074"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder074_2.geometry}
          material={materials["Green.074"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder074_3.geometry}
          material={materials["Coconut.074"]}
        />
      </group>
      <group
        position={[-0.075, 0.046, -0.125]}
        rotation={[-2.944, -0.081, 0.138]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder075_1.geometry}
          material={materials["Brown.075"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder075_2.geometry}
          material={materials["Green.075"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder075_3.geometry}
          material={materials["Coconut.075"]}
        />
      </group>
      <group
        position={[-0.124, 0.052, -0.113]}
        rotation={[-1.035, -1.341, 2.24]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076_1.geometry}
          material={materials["Brown.076"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076_2.geometry}
          material={materials["Green.076"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076_3.geometry}
          material={materials["Coconut.076"]}
        />
      </group>
      <group
        position={[-0.129, 0.062, -0.147]}
        rotation={[-2.762, -1.015, 0.448]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder077_1.geometry}
          material={materials["Brown.077"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder077_2.geometry}
          material={materials["Green.077"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder077_3.geometry}
          material={materials["Coconut.077"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_01_mesh006.geometry}
        material={materials["_trees_normal.136"]}
        position={[0.064, 0.028, 0.046]}
        rotation={[Math.PI / 2, 0, -1.038]}
        scale={[0.009, 0.01, 0.013]}
      />
      <group
        position={[0.045, 0.052, 0.156]}
        rotation={[-2.939, 0.242, 0.072]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder078_1.geometry}
          material={materials["Brown.078"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder078_2.geometry}
          material={materials["Green.078"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder078_3.geometry}
          material={materials["Coconut.078"]}
        />
      </group>
      <group
        position={[-0.005, 0.052, 0.156]}
        rotation={[-2.788, -0.97, 0.417]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder079_1.geometry}
          material={materials["Brown.079"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder079_2.geometry}
          material={materials["Green.079"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder079_3.geometry}
          material={materials["Coconut.079"]}
        />
      </group>
      <group
        position={[-0.003, 0.052, 0.177]}
        rotation={[-1.035, -1.341, 2.24]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder080_1.geometry}
          material={materials["Brown.080"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder080_2.geometry}
          material={materials["Green.080"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder080_3.geometry}
          material={materials["Coconut.080"]}
        />
      </group>
      <group
        position={[0.09, 0.062, 0.147]}
        rotation={[-2.762, -1.015, 0.448]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder081_1.geometry}
          material={materials["Brown.081"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder081_2.geometry}
          material={materials["Green.081"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder081_3.geometry}
          material={materials["Coconut.081"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh027.geometry}
        material={materials["_trees_normal.137"]}
        position={[0.045, 0.029, 0.209]}
        rotation={[-Math.PI / 2, 0, -2.233]}
        scale={[-0.007, -0.008, -0.007]}
      />
      <group
        position={[0.045, 0.032, 0.153]}
        rotation={[0.018, 0.309, -0.052]}
        scale={[0.078, 0.059, 0.072]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735028.geometry}
          material={materials["mat10.090"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735028_1.geometry}
          material={materials["mat20.050"]}
        />
      </group>
      <group
        position={[0.038, 0.032, 0.096]}
        rotation={[Math.PI, -0.303, Math.PI]}
        scale={[0.078, 0.059, 0.072]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735029.geometry}
          material={materials["mat10.091"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735029_1.geometry}
          material={materials["mat20.051"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834022.geometry}
        material={materials["mat20.052"]}
        position={[0.135, 0.035, -0.16]}
        rotation={[-Math.PI, 1.069, -Math.PI]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834023.geometry}
        material={materials["mat20.053"]}
        position={[0.025, 0.036, 0.107]}
        rotation={[0, 0.644, 0]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837063.geometry}
        material={materials["mat10.092"]}
        position={[0.019, 0.061, 0.153]}
        rotation={[-3.088, -0.94, -3.141]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837064.geometry}
        material={materials["mat10.093"]}
        position={[0.011, 0.061, 0.164]}
        rotation={[-3.088, -0.94, -3.141]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837065.geometry}
        material={materials["mat10.094"]}
        position={[0.157, 0.061, 0.123]}
        rotation={[-0.032, -0.12, -0.046]}
        scale={[0.233, 0.177, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh028.geometry}
        material={materials["_trees_normal.138"]}
        position={[0.214, 0.028, 0.031]}
        rotation={[-Math.PI / 2, 0, -0.96]}
        scale={[-0.013, -0.017, -0.009]}
      />
      <group
        position={[0.321, 0.051, -0.021]}
        rotation={[-0.214, -0.4, -3.104]}
        scale={[0.002, 0.001, 0.001]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder082_1.geometry}
          material={materials["Brown.082"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder082_2.geometry}
          material={materials["Green.082"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder082_3.geometry}
          material={materials["Coconut.082"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh029.geometry}
        material={materials["_trees_normal.139"]}
        position={[0.396, 0.029, 0.107]}
        rotation={[-Math.PI / 2, 0, -2.959]}
        scale={[-0.015, -0.016, -0.016]}
      />
      <group
        position={[0.326, 0.066, 0.075]}
        rotation={[-0.273, -0.76, 3.072]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder083_1.geometry}
          material={materials["Brown.083"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder083_2.geometry}
          material={materials["Green.083"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder083_3.geometry}
          material={materials["Coconut.083"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834024.geometry}
        material={materials["mat20.054"]}
        position={[-0.11, 0.035, -0.02]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834025.geometry}
        material={materials["mat20.055"]}
        position={[-0.145, 0.035, -0.188]}
        rotation={[-Math.PI, 1.459, -Math.PI]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837066.geometry}
        material={materials["mat10.095"]}
        position={[-0.065, 0.06, -0.294]}
        rotation={[-0.052, 0.918, -0.001]}
        scale={[0.233, 0.177, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837067.geometry}
        material={materials["mat10.096"]}
        position={[-0.104, 0.06, -0.147]}
        rotation={[-0.079, -1.161, -0.114]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837068.geometry}
        material={materials["mat10.097"]}
        position={[-0.108, 0.06, -0.16]}
        rotation={[-0.079, -1.161, -0.114]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh029.geometry}
        material={materials["_trees_normal.140"]}
        position={[0.38, 0.027, -0.05]}
        rotation={[Math.PI / 2, 0, 2.991]}
        scale={[0.013, 0.013, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh030.geometry}
        material={materials["_trees_normal.141"]}
        position={[0.402, 0.027, -0.03]}
        rotation={[Math.PI / 2, 0, 1.399]}
        scale={[0.008, 0.007, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh031.geometry}
        material={materials["_trees_normal.142"]}
        position={[0.418, 0.027, -0.056]}
        rotation={[Math.PI / 2, 0, 0.449]}
        scale={[0.01, 0.008, 0.013]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834026.geometry}
        material={materials["mat20.056"]}
        position={[-0.16, 0.035, -0.179]}
        rotation={[-Math.PI, 0.291, -Math.PI]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837069.geometry}
        material={materials["mat10.098"]}
        position={[-0.12, 0.06, -0.202]}
        rotation={[-0.031, 0.006, -0.042]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837070.geometry}
        material={materials["mat10.099"]}
        position={[-0.106, 0.06, -0.201]}
        rotation={[-0.031, 0.006, -0.042]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837071.geometry}
        material={materials["mat10.100"]}
        position={[-0.226, 0.06, -0.295]}
        rotation={[-3.078, 1.054, 3.044]}
        scale={[0.233, 0.177, 0.143]}
      />
      <group
        position={[-0.088, 0.062, -0.253]}
        rotation={[-0.24, -0.604, 3.125]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder084_1.geometry}
          material={materials["Brown.084"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder084_2.geometry}
          material={materials["Green.084"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder084_3.geometry}
          material={materials["Coconut.084"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh059.geometry}
        material={materials["_trees_normal.143"]}
        position={[-0.031, 0.028, 0.046]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh060.geometry}
        material={materials["_trees_normal.144"]}
        position={[-0.156, 0.028, 0.046]}
        rotation={[1.413, 0, -1.696]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh061.geometry}
        material={materials["_trees_normal.145"]}
        position={[-0.359, 0.028, -0.084]}
        rotation={[Math.PI / 2, 0, 1.194]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh062.geometry}
        material={materials["_trees_normal.146"]}
        position={[0.268, 0.028, -0.084]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh063.geometry}
        material={materials["_trees_normal.147"]}
        position={[0.268, 0.028, 0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh064.geometry}
        material={materials["_trees_normal.148"]}
        position={[-0.201, 0.028, 0.194]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh065.geometry}
        material={materials["_trees_normal.149"]}
        position={[-0.042, 0.028, -0.004]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.016, 0.014, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh066.geometry}
        material={materials["_trees_normal.150"]}
        position={[0.257, 0.028, -0.004]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.016, 0.014, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh067.geometry}
        material={materials["_trees_normal.151"]}
        position={[0.162, 0.028, -0.121]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.016, 0.014, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh068.geometry}
        material={materials["_trees_normal.152"]}
        position={[-0.005, 0.027, -0.16]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh069.geometry}
        material={materials["_trees_normal.153"]}
        position={[-0.005, 0.027, 0.065]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh070.geometry}
        material={materials["_trees_normal.154"]}
        position={[0.132, 0.027, 0.065]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh071.geometry}
        material={materials["_trees_normal.155"]}
        position={[-0.005, 0.027, 0.065]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh072.geometry}
        material={materials["_trees_normal.156"]}
        position={[0.21, 0.027, 0.147]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <group
        position={[-0.282, 0.032, -0.037]}
        rotation={[0, 1.478, 0]}
        scale={[0.096, 0.065, 0.09]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735030.geometry}
          material={materials["mat10.101"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735030_1.geometry}
          material={materials["mat20.057"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh030.geometry}
        material={materials["_trees_normal.157"]}
        position={[-0.248, 0.028, 0.046]}
        rotation={[-Math.PI / 2, 0, -2.269]}
        scale={[-0.008, -0.011, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh073.geometry}
        material={materials["_trees_normal.158"]}
        position={[-0.098, 0.028, -0.043]}
        rotation={[Math.PI / 2, 0, -2.142]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834027.geometry}
        material={materials["mat20.058"]}
        position={[0.255, 0.035, -0.15]}
        rotation={[Math.PI, -0.502, Math.PI]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837072.geometry}
        material={materials["mat10.102"]}
        position={[0.267, 0.06, -0.195]}
        rotation={[-0.045, 0.798, -0.01]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837073.geometry}
        material={materials["mat10.103"]}
        position={[0.276, 0.06, -0.204]}
        rotation={[-0.045, 0.798, -0.01]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837074.geometry}
        material={materials["mat10.104"]}
        position={[0.126, 0.06, -0.185]}
        rotation={[-3.109, 0.262, 3.091]}
        scale={[0.233, 0.177, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834028.geometry}
        material={materials["mat20.059"]}
        position={[0.242, 0.045, -0.196]}
        rotation={[Math.PI, -0.502, Math.PI]}
        scale={[0.139, 0.215, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837075.geometry}
        material={materials["mat10.105"]}
        position={[0.077, 0.09, -0.254]}
        rotation={[-3.109, 0.262, 3.091]}
        scale={[0.313, 0.318, 0.242]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837076.geometry}
        material={materials["mat10.106"]}
        position={[0.27, 0.09, -0.288]}
        rotation={[-0.045, 0.798, -0.01]}
        scale={[0.244, 0.318, 0.259]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837077.geometry}
        material={materials["mat10.107"]}
        position={[0.257, 0.09, -0.272]}
        rotation={[-0.045, 0.798, -0.01]}
        scale={[0.24, 0.318, 0.224]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_03_mesh010.geometry}
        material={materials["_trees_normal.159"]}
        position={[-0.203, 0.028, -0.063]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.015, 0.016, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_03_mesh011.geometry}
        material={materials["_trees_normal.160"]}
        position={[-0.234, 0.029, -0.055]}
        rotation={[Math.PI / 2, 0, -1.78]}
        scale={[0.013, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_03_mesh012.geometry}
        material={materials["_trees_normal.161"]}
        position={[-0.234, 0.029, -0.096]}
        rotation={[Math.PI / 2, 0, -2.834]}
        scale={[0.013, 0.012, 0.012]}
      />
      <group
        position={[0.307, 0.052, -0.178]}
        rotation={[-0.198, 0.097, -3.001]}
        scale={[0.002, 0.001, 0.001]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder085_1.geometry}
          material={materials["Brown.085"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder085_2.geometry}
          material={materials["Green.085"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder085_3.geometry}
          material={materials["Coconut.085"]}
        />
      </group>
      <group
        position={[0.286, 0.052, -0.14]}
        rotation={[-0.203, 0.243, -2.971]}
        scale={[0.002, 0.001, 0.001]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder086_1.geometry}
          material={materials["Brown.086"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder086_2.geometry}
          material={materials["Green.086"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder086_3.geometry}
          material={materials["Coconut.086"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh074.geometry}
        material={materials["_trees_normal.162"]}
        position={[0.349, 0.028, -0.084]}
        rotation={[Math.PI / 2, 0, -1.84]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_01_mesh007.geometry}
        material={materials["_trees_normal.163"]}
        position={[-0.193, 0.028, 0.097]}
        rotation={[Math.PI / 2, 0, -1.038]}
        scale={[0.009, 0.01, 0.013]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1922369548009.geometry}
        material={materials["mat16.009"]}
        position={[-0.138, 0.025, 0.361]}
        rotation={[0.649, 0.224, 0.162]}
        scale={[0.056, 0.186, 0.055]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1922369548010.geometry}
        material={materials["mat16.010"]}
        position={[-0.227, 0.025, 0.162]}
        rotation={[2.195, 0.758, -2.05]}
        scale={[0.054, 0.162, 0.047]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1922369548011.geometry}
        material={materials["mat16.011"]}
        position={[-0.256, 0.019, 0.135]}
        rotation={[2.502, 0.159, -2.695]}
        scale={[0.054, 0.162, 0.047]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1922369548012.geometry}
        material={materials["mat16.012"]}
        position={[-0.256, 0.017, 0.176]}
        rotation={[1.577, 0.941, -1.249]}
        scale={[0.054, 0.162, 0.047]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1922369548013.geometry}
        material={materials["mat16.013"]}
        position={[-0.24, 0.017, 0.153]}
        rotation={[1.577, 0.941, -1.249]}
        scale={[0.054, 0.162, 0.047]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh075.geometry}
        material={materials["_trees_normal.164"]}
        position={[-0.26, 0.028, 0.151]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.011, 0.011, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1922369548014.geometry}
        material={materials["mat16.014"]}
        position={[0.115, 0.017, 0.176]}
        rotation={[1.577, 0.941, -1.249]}
        scale={[0.054, 0.162, 0.047]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1922369548015.geometry}
        material={materials["mat16.015"]}
        position={[0.128, 0.023, 0.162]}
        rotation={[2.503, -0.155, -2.927]}
        scale={[0.054, 0.162, 0.047]}
      />
      <group
        position={[0.122, 0.052, -0.133]}
        rotation={[-2.815, 0.914, -0.14]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder087_1.geometry}
          material={materials["Brown.087"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder087_2.geometry}
          material={materials["Green.087"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder087_3.geometry}
          material={materials["Coconut.087"]}
        />
      </group>
      <group
        position={[0.122, 0.052, 0.121]}
        rotation={[-2.815, 0.914, -0.14]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder088_1.geometry}
          material={materials["Brown.088"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder088_2.geometry}
          material={materials["Green.088"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder088_3.geometry}
          material={materials["Coconut.088"]}
        />
      </group>
      <group
        position={[0.301, 0.052, 0.121]}
        rotation={[-2.815, 0.914, -0.14]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder089_1.geometry}
          material={materials["Brown.089"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder089_2.geometry}
          material={materials["Green.089"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder089_3.geometry}
          material={materials["Coconut.089"]}
        />
      </group>
      <group
        position={[0.035, 0.032, -0.193]}
        rotation={[0, -1.546, 0]}
        scale={[0.078, 0.059, 0.072]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735031.geometry}
          material={materials["mat10.108"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735031_1.geometry}
          material={materials["mat20.060"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_03_mesh013.geometry}
        material={materials["_trees_normal.165"]}
        position={[0.199, 0.028, -0.101]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.015, 0.016, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_03_mesh014.geometry}
        material={materials["_trees_normal.166"]}
        position={[-0.046, 0.028, -0.042]}
        rotation={[Math.PI / 2, 0, -1.173]}
        scale={[0.011, 0.012, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh076.geometry}
        material={materials["_trees_normal.167"]}
        position={[-0.177, 0.028, 0.179]}
        rotation={[Math.PI / 2, 0, -1.378]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh077.geometry}
        material={materials["_trees_normal.168"]}
        position={[-0.328, 0.028, -0.084]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh078.geometry}
        material={materials["_trees_normal.169"]}
        position={[-0.28, 0.028, -0.007]}
        rotation={[Math.PI / 2, 0, -1.808]}
        scale={[0.018, 0.015, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh079.geometry}
        material={materials["_trees_normal.170"]}
        position={[-0.09, 0.028, 0.18]}
        rotation={[Math.PI / 2, 0, 3.11]}
        scale={[0.018, 0.015, 0.019]}
      />
      <group
        position={[-0.19, 0.052, 0.012]}
        rotation={[-1.035, -1.341, 2.24]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder090_1.geometry}
          material={materials["Brown.090"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder090_2.geometry}
          material={materials["Green.090"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder090_3.geometry}
          material={materials["Coconut.090"]}
        />
      </group>
      <group
        position={[-0.19, 0.052, -0.016]}
        rotation={[-0.2, -0.177, -3.056]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder091_1.geometry}
          material={materials["Brown.091"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder091_2.geometry}
          material={materials["Green.091"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder091_3.geometry}
          material={materials["Coconut.091"]}
        />
      </group>
      <group
        position={[-0.175, 0.052, 0.004]}
        rotation={[-2.924, -0.44, 0.216]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder092_1.geometry}
          material={materials["Brown.092"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder092_2.geometry}
          material={materials["Green.092"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder092_3.geometry}
          material={materials["Coconut.092"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh080.geometry}
        material={materials["_trees_normal.171"]}
        position={[-0.328, 0.027, -0.173]}
        rotation={[1.757, 0, -0.502]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh081.geometry}
        material={materials["_trees_normal.172"]}
        position={[-0.326, 0.028, 0.032]}
        rotation={[1.549, 0, -0.602]}
        scale={[0.012, 0.01, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh082.geometry}
        material={materials["_trees_normal.173"]}
        position={[-0.359, 0.028, 0.061]}
        rotation={[1.549, 0, -0.602]}
        scale={[0.014, 0.012, 0.012]}
      />
      <group
        position={[-0.124, 0.052, 0.144]}
        rotation={[-1.035, -1.341, 2.24]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder093_1.geometry}
          material={materials["Brown.093"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder093_2.geometry}
          material={materials["Green.093"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder093_3.geometry}
          material={materials["Coconut.093"]}
        />
      </group>
      <group
        position={[-0.124, 0.052, 0.098]}
        rotation={[-0.199, 0.127, -2.994]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder094_1.geometry}
          material={materials["Brown.094"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder094_2.geometry}
          material={materials["Green.094"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder094_3.geometry}
          material={materials["Coconut.094"]}
        />
      </group>
      <group
        position={[-0.147, 0.052, 0.108]}
        rotation={[-2.325, 1.299, -0.677]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder095_1.geometry}
          material={materials["Brown.095"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder095_2.geometry}
          material={materials["Green.095"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder095_3.geometry}
          material={materials["Coconut.095"]}
        />
      </group>
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
        position={[-0.294, 0.032, -0.094]}
        rotation={[0, 0.246, 0]}
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
        position={[0.045, 0.032, -0.098]}
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
        position={[0.385, 0.029, 0.159]}
        rotation={[-Math.PI / 2, 0, 2.072]}
        scale={[-0.01, -0.012, -0.011]}
      />
      <group
        position={[-0.048, 0.052, -0.09]}
        rotation={[-2.939, 0.242, 0.072]}
        scale={0.001}
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
        rotation={[-2.46, -1.28, 0.851]}
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
        rotation={[-2.924, -0.436, 0.215]}
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh008.geometry}
        material={materials["_trees_normal.009"]}
        position={[-0.035, 0.029, -0.228]}
        rotation={[-Math.PI / 2, 0, -1.77]}
        scale={[-0.01, -0.012, -0.01]}
      />
      <group
        position={[-0.18, 0.032, -0.152]}
        rotation={[0, 0.069, 0]}
        scale={[0.098, 0.094, 0.103]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735007.geometry}
          material={materials["mat10.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735007_1.geometry}
          material={materials["mat20.011"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_01_mesh.geometry}
        material={materials._trees_normal}
        position={[0.107, 0.028, -0.034]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.016, 0.017, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_01_mesh001.geometry}
        material={materials["_trees_normal.010"]}
        position={[0.022, 0.028, -0.015]}
        rotation={[Math.PI / 2, 0, -1.038]}
        scale={[0.011, 0.012, 0.015]}
      />
      <group
        position={[-0.15, 0.083, 0.233]}
        rotation={[-2.792, 0.242, 0.072]}
        scale={[0.003, 0.003, 0.002]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_1.geometry}
          material={materials["Brown.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_2.geometry}
          material={materials["Green.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_3.geometry}
          material={materials["Coconut.008"]}
        />
      </group>
      <group
        position={[-0.088, 0.062, -0.106]}
        rotation={[-2.939, 0.242, 0.072]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_1.geometry}
          material={materials["Brown.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_2.geometry}
          material={materials["Green.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_3.geometry}
          material={materials["Coconut.009"]}
        />
      </group>
      <group
        position={[0.099, 0.033, -0.141]}
        rotation={[-Math.PI, 0.835, -Math.PI]}
        scale={[0.082, 0.095, 0.115]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735008.geometry}
          material={materials["mat10.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735008_1.geometry}
          material={materials["mat20.012"]}
        />
      </group>
      <group
        position={[-0.048, 0.052, -0.133]}
        rotation={[-2.815, 0.914, -0.14]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_1.geometry}
          material={materials["Brown.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_2.geometry}
          material={materials["Green.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_3.geometry}
          material={materials["Coconut.010"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh009.geometry}
        material={materials["_trees_normal.011"]}
        position={[-0.248, 0.028, 0.105]}
        rotation={[-Math.PI / 2, 0, 2.326]}
        scale={[-0.008, -0.011, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh.geometry}
        material={materials["_trees_normal.012"]}
        position={[0.31, 0.027, 0.006]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.009, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh001.geometry}
        material={materials["_trees_normal.013"]}
        position={[0.355, 0.027, 0.053]}
        rotation={[Math.PI / 2, 0, 1.571]}
        scale={[0.012, 0.012, 0.013]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh002.geometry}
        material={materials["_trees_normal.014"]}
        position={[0.349, 0.027, 0.008]}
        rotation={[Math.PI / 2, 0, -1.782]}
        scale={[0.009, 0.007, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh003.geometry}
        material={materials["_trees_normal.015"]}
        position={[0.38, 0.027, -0.019]}
        rotation={[Math.PI / 2, 0, 2.991]}
        scale={[0.008, 0.007, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh004.geometry}
        material={materials["_trees_normal.016"]}
        position={[0.391, 0.027, 0.029]}
        rotation={[Math.PI / 2, 0, -0.392]}
        scale={[0.009, 0.007, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh005.geometry}
        material={materials["_trees_normal.017"]}
        position={[0.336, 0.027, -0.047]}
        rotation={[Math.PI / 2, 0, 2.991]}
        scale={[0.01, 0.008, 0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh006.geometry}
        material={materials["_trees_normal.018"]}
        position={[0.38, 0.027, -0.001]}
        rotation={[Math.PI / 2, 0, 2.991]}
        scale={[0.008, 0.007, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh007.geometry}
        material={materials["_trees_normal.019"]}
        position={[0.345, 0.027, 0.025]}
        rotation={[Math.PI / 2, 0, -1.782]}
        scale={[0.009, 0.007, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh008.geometry}
        material={materials["_trees_normal.020"]}
        position={[0.391, 0.027, 0.058]}
        rotation={[Math.PI / 2, 0, -0.392]}
        scale={[0.009, 0.007, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh009.geometry}
        material={materials["_trees_normal.021"]}
        position={[0.367, 0.027, 0.029]}
        rotation={[Math.PI / 2, 0, -0.392]}
        scale={[0.009, 0.007, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh010.geometry}
        material={materials["_trees_normal.022"]}
        position={[0.31, 0.027, 0.036]}
        rotation={[Math.PI / 2, 0, -1.176]}
        scale={[0.008, 0.007, 0.01]}
      />
      <group
        position={[-0.094, 0.052, -0.146]}
        rotation={[-2.93, -0.374, 0.2]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_1.geometry}
          material={materials["Brown.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_2.geometry}
          material={materials["Green.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_3.geometry}
          material={materials["Coconut.011"]}
        />
      </group>
      <group
        position={[-0.088, 0.062, -0.17]}
        rotation={[-2.443, -1.261, 0.796]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_1.geometry}
          material={materials["Brown.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_2.geometry}
          material={materials["Green.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_3.geometry}
          material={materials["Coconut.012"]}
        />
      </group>
      <group
        position={[-0.075, 0.046, -0.125]}
        rotation={[-2.944, -0.081, 0.138]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_1.geometry}
          material={materials["Brown.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_2.geometry}
          material={materials["Green.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_3.geometry}
          material={materials["Coconut.013"]}
        />
      </group>
      <group
        position={[-0.124, 0.052, -0.113]}
        rotation={[-1.035, -1.341, 2.24]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_1.geometry}
          material={materials["Brown.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_2.geometry}
          material={materials["Green.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_3.geometry}
          material={materials["Coconut.014"]}
        />
      </group>
      <group
        position={[-0.129, 0.062, -0.147]}
        rotation={[-2.762, -1.015, 0.448]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_1.geometry}
          material={materials["Brown.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_2.geometry}
          material={materials["Green.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_3.geometry}
          material={materials["Coconut.015"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_01_mesh002.geometry}
        material={materials["_trees_normal.023"]}
        position={[0.064, 0.028, 0.046]}
        rotation={[Math.PI / 2, 0, -1.038]}
        scale={[0.009, 0.01, 0.013]}
      />
      <group
        position={[0.045, 0.052, 0.156]}
        rotation={[-2.939, 0.242, 0.072]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_1.geometry}
          material={materials["Brown.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_2.geometry}
          material={materials["Green.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_3.geometry}
          material={materials["Coconut.016"]}
        />
      </group>
      <group
        position={[-0.005, 0.052, 0.156]}
        rotation={[-2.788, -0.97, 0.417]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_1.geometry}
          material={materials["Brown.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_2.geometry}
          material={materials["Green.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_3.geometry}
          material={materials["Coconut.017"]}
        />
      </group>
      <group
        position={[-0.003, 0.052, 0.177]}
        rotation={[-1.035, -1.341, 2.24]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_1.geometry}
          material={materials["Brown.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_2.geometry}
          material={materials["Green.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_3.geometry}
          material={materials["Coconut.018"]}
        />
      </group>
      <group
        position={[0.09, 0.062, 0.147]}
        rotation={[-2.762, -1.015, 0.448]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_1.geometry}
          material={materials["Brown.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_2.geometry}
          material={materials["Green.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_3.geometry}
          material={materials["Coconut.019"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh010.geometry}
        material={materials["_trees_normal.024"]}
        position={[0.045, 0.029, 0.209]}
        rotation={[-Math.PI / 2, 0, -2.233]}
        scale={[-0.007, -0.008, -0.007]}
      />
      <group
        position={[0.045, 0.032, 0.153]}
        rotation={[0.018, 0.309, -0.052]}
        scale={[0.078, 0.059, 0.072]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735009.geometry}
          material={materials["mat10.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735009_1.geometry}
          material={materials["mat20.013"]}
        />
      </group>
      <group
        position={[0.038, 0.032, 0.096]}
        rotation={[Math.PI, -0.303, Math.PI]}
        scale={[0.078, 0.059, 0.072]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735010.geometry}
          material={materials["mat10.023"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735010_1.geometry}
          material={materials["mat20.014"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834004.geometry}
        material={materials["mat20.015"]}
        position={[0.135, 0.035, -0.16]}
        rotation={[-Math.PI, 1.069, -Math.PI]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834005.geometry}
        material={materials["mat20.016"]}
        position={[0.025, 0.036, 0.107]}
        rotation={[0, 0.644, 0]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837014.geometry}
        material={materials["mat10.024"]}
        position={[0.019, 0.061, 0.153]}
        rotation={[-3.088, -0.94, -3.141]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837015.geometry}
        material={materials["mat10.025"]}
        position={[0.011, 0.061, 0.164]}
        rotation={[-3.088, -0.94, -3.141]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837016.geometry}
        material={materials["mat10.026"]}
        position={[0.157, 0.061, 0.123]}
        rotation={[-0.032, -0.12, -0.046]}
        scale={[0.233, 0.177, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh011.geometry}
        material={materials["_trees_normal.025"]}
        position={[0.214, 0.028, 0.031]}
        rotation={[-Math.PI / 2, 0, -0.96]}
        scale={[-0.013, -0.017, -0.009]}
      />
      <group
        position={[0.321, 0.051, -0.021]}
        rotation={[-0.214, -0.4, -3.104]}
        scale={[0.002, 0.001, 0.001]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_1.geometry}
          material={materials["Brown.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_2.geometry}
          material={materials["Green.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_3.geometry}
          material={materials["Coconut.020"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh012.geometry}
        material={materials["_trees_normal.026"]}
        position={[0.396, 0.029, 0.107]}
        rotation={[-Math.PI / 2, 0, -2.959]}
        scale={[-0.015, -0.016, -0.016]}
      />
      <group
        position={[0.326, 0.066, 0.075]}
        rotation={[-0.273, -0.76, 3.072]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021_1.geometry}
          material={materials["Brown.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021_2.geometry}
          material={materials["Green.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021_3.geometry}
          material={materials["Coconut.021"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834006.geometry}
        material={materials["mat20.017"]}
        position={[-0.11, 0.035, -0.02]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834007.geometry}
        material={materials["mat20.018"]}
        position={[-0.145, 0.035, -0.188]}
        rotation={[-Math.PI, 1.459, -Math.PI]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837017.geometry}
        material={materials["mat10.027"]}
        position={[-0.065, 0.06, -0.294]}
        rotation={[-0.052, 0.918, -0.001]}
        scale={[0.233, 0.177, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837018.geometry}
        material={materials["mat10.028"]}
        position={[-0.104, 0.06, -0.147]}
        rotation={[-0.079, -1.161, -0.114]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837019.geometry}
        material={materials["mat10.029"]}
        position={[-0.108, 0.06, -0.16]}
        rotation={[-0.079, -1.161, -0.114]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh011.geometry}
        material={materials["_trees_normal.027"]}
        position={[0.38, 0.027, -0.05]}
        rotation={[Math.PI / 2, 0, 2.991]}
        scale={[0.013, 0.013, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh012.geometry}
        material={materials["_trees_normal.028"]}
        position={[0.402, 0.027, -0.03]}
        rotation={[Math.PI / 2, 0, 1.399]}
        scale={[0.008, 0.007, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh013.geometry}
        material={materials["_trees_normal.029"]}
        position={[0.418, 0.027, -0.056]}
        rotation={[Math.PI / 2, 0, 0.449]}
        scale={[0.01, 0.008, 0.013]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834008.geometry}
        material={materials["mat20.019"]}
        position={[-0.16, 0.035, -0.179]}
        rotation={[-Math.PI, 0.291, -Math.PI]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837020.geometry}
        material={materials["mat10.030"]}
        position={[-0.12, 0.06, -0.202]}
        rotation={[-0.031, 0.006, -0.042]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837021.geometry}
        material={materials["mat10.031"]}
        position={[-0.106, 0.06, -0.201]}
        rotation={[-0.031, 0.006, -0.042]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837022.geometry}
        material={materials["mat10.032"]}
        position={[-0.226, 0.06, -0.295]}
        rotation={[-3.078, 1.054, 3.044]}
        scale={[0.233, 0.177, 0.143]}
      />
      <group
        position={[-0.088, 0.062, -0.253]}
        rotation={[-0.24, -0.604, 3.125]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_1.geometry}
          material={materials["Brown.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_2.geometry}
          material={materials["Green.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_3.geometry}
          material={materials["Coconut.022"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh.geometry}
        material={materials["_trees_normal.030"]}
        position={[-0.031, 0.028, 0.046]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh001.geometry}
        material={materials["_trees_normal.031"]}
        position={[-0.156, 0.028, 0.046]}
        rotation={[1.413, 0, -1.696]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh002.geometry}
        material={materials["_trees_normal.032"]}
        position={[-0.359, 0.028, -0.084]}
        rotation={[Math.PI / 2, 0, 1.194]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh003.geometry}
        material={materials["_trees_normal.033"]}
        position={[0.268, 0.028, -0.084]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh004.geometry}
        material={materials["_trees_normal.034"]}
        position={[0.268, 0.028, 0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh005.geometry}
        material={materials["_trees_normal.035"]}
        position={[-0.201, 0.028, 0.194]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh006.geometry}
        material={materials["_trees_normal.036"]}
        position={[-0.042, 0.028, -0.004]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.016, 0.014, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh007.geometry}
        material={materials["_trees_normal.037"]}
        position={[0.257, 0.028, -0.004]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.016, 0.014, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh008.geometry}
        material={materials["_trees_normal.038"]}
        position={[0.162, 0.028, -0.121]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.016, 0.014, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh009.geometry}
        material={materials["_trees_normal.039"]}
        position={[-0.005, 0.027, -0.16]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh010.geometry}
        material={materials["_trees_normal.040"]}
        position={[-0.005, 0.027, 0.065]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh011.geometry}
        material={materials["_trees_normal.041"]}
        position={[0.132, 0.027, 0.065]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh012.geometry}
        material={materials["_trees_normal.042"]}
        position={[-0.005, 0.027, 0.065]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh013.geometry}
        material={materials["_trees_normal.043"]}
        position={[0.21, 0.027, 0.147]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <group
        position={[-0.282, 0.032, -0.037]}
        rotation={[0, 1.478, 0]}
        scale={[0.096, 0.065, 0.09]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735011.geometry}
          material={materials["mat10.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735011_1.geometry}
          material={materials["mat20.020"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh013.geometry}
        material={materials["_trees_normal.044"]}
        position={[-0.248, 0.028, 0.046]}
        rotation={[-Math.PI / 2, 0, -2.269]}
        scale={[-0.008, -0.011, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh014.geometry}
        material={materials["_trees_normal.045"]}
        position={[-0.098, 0.028, -0.043]}
        rotation={[Math.PI / 2, 0, -2.142]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834009.geometry}
        material={materials["mat20.021"]}
        position={[0.255, 0.035, -0.15]}
        rotation={[Math.PI, -0.502, Math.PI]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837023.geometry}
        material={materials["mat10.034"]}
        position={[0.267, 0.06, -0.195]}
        rotation={[-0.045, 0.798, -0.01]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837024.geometry}
        material={materials["mat10.035"]}
        position={[0.276, 0.06, -0.204]}
        rotation={[-0.045, 0.798, -0.01]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837025.geometry}
        material={materials["mat10.036"]}
        position={[0.126, 0.06, -0.185]}
        rotation={[-3.109, 0.262, 3.091]}
        scale={[0.233, 0.177, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834010.geometry}
        material={materials["mat20.022"]}
        position={[0.242, 0.045, -0.196]}
        rotation={[Math.PI, -0.502, Math.PI]}
        scale={[0.139, 0.215, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837026.geometry}
        material={materials["mat10.037"]}
        position={[0.077, 0.09, -0.254]}
        rotation={[-3.109, 0.262, 3.091]}
        scale={[0.313, 0.318, 0.242]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837027.geometry}
        material={materials["mat10.038"]}
        position={[0.27, 0.09, -0.288]}
        rotation={[-0.045, 0.798, -0.01]}
        scale={[0.244, 0.318, 0.259]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837028.geometry}
        material={materials["mat10.039"]}
        position={[0.257, 0.09, -0.272]}
        rotation={[-0.045, 0.798, -0.01]}
        scale={[0.24, 0.318, 0.224]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_03_mesh.geometry}
        material={materials["_trees_normal.046"]}
        position={[-0.203, 0.028, -0.063]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.015, 0.016, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_03_mesh001.geometry}
        material={materials["_trees_normal.047"]}
        position={[-0.234, 0.029, -0.055]}
        rotation={[Math.PI / 2, 0, -1.78]}
        scale={[0.013, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_03_mesh002.geometry}
        material={materials["_trees_normal.048"]}
        position={[-0.234, 0.029, -0.096]}
        rotation={[Math.PI / 2, 0, -2.834]}
        scale={[0.013, 0.012, 0.012]}
      />
      <group
        position={[0.307, 0.052, -0.178]}
        rotation={[-0.198, 0.097, -3.001]}
        scale={[0.002, 0.001, 0.001]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder023_1.geometry}
          material={materials["Brown.023"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder023_2.geometry}
          material={materials["Green.023"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder023_3.geometry}
          material={materials["Coconut.023"]}
        />
      </group>
      <group
        position={[0.286, 0.052, -0.14]}
        rotation={[-0.203, 0.243, -2.971]}
        scale={[0.002, 0.001, 0.001]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024_1.geometry}
          material={materials["Brown.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024_2.geometry}
          material={materials["Green.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024_3.geometry}
          material={materials["Coconut.024"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh015.geometry}
        material={materials["_trees_normal.049"]}
        position={[0.349, 0.028, -0.084]}
        rotation={[Math.PI / 2, 0, -1.84]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_01_mesh003.geometry}
        material={materials["_trees_normal.050"]}
        position={[-0.193, 0.028, 0.097]}
        rotation={[Math.PI / 2, 0, -1.038]}
        scale={[0.009, 0.01, 0.013]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1922369548001.geometry}
        material={materials["mat16.001"]}
        position={[-0.138, 0.025, 0.361]}
        rotation={[0.649, 0.224, 0.162]}
        scale={[0.056, 0.186, 0.055]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1922369548002.geometry}
        material={materials["mat16.002"]}
        position={[-0.227, 0.025, 0.162]}
        rotation={[2.195, 0.758, -2.05]}
        scale={[0.054, 0.162, 0.047]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1922369548003.geometry}
        material={materials["mat16.003"]}
        position={[-0.256, 0.019, 0.135]}
        rotation={[2.502, 0.159, -2.695]}
        scale={[0.054, 0.162, 0.047]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1922369548004.geometry}
        material={materials["mat16.004"]}
        position={[-0.256, 0.017, 0.176]}
        rotation={[1.577, 0.941, -1.249]}
        scale={[0.054, 0.162, 0.047]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1922369548005.geometry}
        material={materials["mat16.005"]}
        position={[-0.24, 0.017, 0.153]}
        rotation={[1.577, 0.941, -1.249]}
        scale={[0.054, 0.162, 0.047]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh016.geometry}
        material={materials["_trees_normal.051"]}
        position={[-0.26, 0.028, 0.151]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.011, 0.011, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1922369548006.geometry}
        material={materials["mat16.006"]}
        position={[0.115, 0.017, 0.176]}
        rotation={[1.577, 0.941, -1.249]}
        scale={[0.054, 0.162, 0.047]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1922369548007.geometry}
        material={materials["mat16.007"]}
        position={[0.128, 0.023, 0.162]}
        rotation={[2.503, -0.155, -2.927]}
        scale={[0.054, 0.162, 0.047]}
      />
      <group
        position={[0.122, 0.052, -0.133]}
        rotation={[-2.815, 0.914, -0.14]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025_1.geometry}
          material={materials["Brown.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025_2.geometry}
          material={materials["Green.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025_3.geometry}
          material={materials["Coconut.025"]}
        />
      </group>
      <group
        position={[0.122, 0.052, 0.121]}
        rotation={[-2.815, 0.914, -0.14]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026_1.geometry}
          material={materials["Brown.026"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026_2.geometry}
          material={materials["Green.026"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026_3.geometry}
          material={materials["Coconut.026"]}
        />
      </group>
      <group
        position={[0.301, 0.052, 0.121]}
        rotation={[-2.815, 0.914, -0.14]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder027_1.geometry}
          material={materials["Brown.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder027_2.geometry}
          material={materials["Green.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder027_3.geometry}
          material={materials["Coconut.027"]}
        />
      </group>
      <group
        position={[0.035, 0.032, -0.193]}
        rotation={[0, -1.546, 0]}
        scale={[0.078, 0.059, 0.072]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735012.geometry}
          material={materials["mat10.040"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735012_1.geometry}
          material={materials["mat20.023"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_03_mesh003.geometry}
        material={materials["_trees_normal.052"]}
        position={[0.199, 0.028, -0.101]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.015, 0.016, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_03_mesh004.geometry}
        material={materials["_trees_normal.053"]}
        position={[-0.046, 0.028, -0.042]}
        rotation={[Math.PI / 2, 0, -1.173]}
        scale={[0.011, 0.012, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh017.geometry}
        material={materials["_trees_normal.054"]}
        position={[-0.177, 0.028, 0.179]}
        rotation={[Math.PI / 2, 0, -1.378]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh018.geometry}
        material={materials["_trees_normal.055"]}
        position={[-0.328, 0.028, -0.084]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh019.geometry}
        material={materials["_trees_normal.056"]}
        position={[-0.28, 0.028, -0.007]}
        rotation={[Math.PI / 2, 0, -1.808]}
        scale={[0.018, 0.015, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh020.geometry}
        material={materials["_trees_normal.057"]}
        position={[-0.09, 0.028, 0.18]}
        rotation={[Math.PI / 2, 0, 3.11]}
        scale={[0.018, 0.015, 0.019]}
      />
      <group
        position={[-0.19, 0.052, 0.012]}
        rotation={[-1.035, -1.341, 2.24]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028_1.geometry}
          material={materials["Brown.028"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028_2.geometry}
          material={materials["Green.028"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028_3.geometry}
          material={materials["Coconut.028"]}
        />
      </group>
      <group
        position={[-0.19, 0.052, -0.016]}
        rotation={[-0.2, -0.177, -3.056]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder029_1.geometry}
          material={materials["Brown.029"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder029_2.geometry}
          material={materials["Green.029"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder029_3.geometry}
          material={materials["Coconut.029"]}
        />
      </group>
      <group
        position={[-0.175, 0.052, 0.004]}
        rotation={[-2.924, -0.44, 0.216]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder030_1.geometry}
          material={materials["Brown.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder030_2.geometry}
          material={materials["Green.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder030_3.geometry}
          material={materials["Coconut.030"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh021.geometry}
        material={materials["_trees_normal.058"]}
        position={[-0.328, 0.027, -0.173]}
        rotation={[1.757, 0, -0.502]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh022.geometry}
        material={materials["_trees_normal.059"]}
        position={[-0.326, 0.028, 0.032]}
        rotation={[1.549, 0, -0.602]}
        scale={[0.012, 0.01, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh023.geometry}
        material={materials["_trees_normal.060"]}
        position={[-0.359, 0.028, 0.061]}
        rotation={[1.549, 0, -0.602]}
        scale={[0.014, 0.012, 0.012]}
      />
      <group
        position={[-0.124, 0.052, 0.144]}
        rotation={[-1.035, -1.341, 2.24]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031_1.geometry}
          material={materials["Brown.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031_2.geometry}
          material={materials["Green.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031_3.geometry}
          material={materials["Coconut.031"]}
        />
      </group>
      <group
        position={[-0.124, 0.052, 0.098]}
        rotation={[-0.199, 0.127, -2.994]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder032_1.geometry}
          material={materials["Brown.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder032_2.geometry}
          material={materials["Green.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder032_3.geometry}
          material={materials["Coconut.032"]}
        />
      </group>
      <group
        position={[-0.147, 0.052, 0.108]}
        rotation={[-2.325, 1.299, -0.677]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder033_1.geometry}
          material={materials["Brown.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder033_2.geometry}
          material={materials["Green.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder033_3.geometry}
          material={materials["Coconut.033"]}
        />
      </group>
      <group
        position={[0.02, 0.052, -0.09]}
        rotation={[-2.68, -1.116, 0.542]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder034_1.geometry}
          material={materials["Brown.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder034_2.geometry}
          material={materials["Green.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder034_3.geometry}
          material={materials["Coconut.034"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834011.geometry}
        material={materials["mat20.024"]}
        position={[0.128, 0.045, -0.18]}
        rotation={[3.044, -0.251, 2.854]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837029.geometry}
        material={materials["mat10.041"]}
        position={[0.143, 0.074, -0.221]}
        rotation={[-0.228, 0.524, 0.3]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837030.geometry}
        material={materials["mat10.042"]}
        position={[0.154, 0.077, -0.228]}
        rotation={[-0.228, 0.524, 0.3]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837031.geometry}
        material={materials["mat10.043"]}
        position={[0.009, 0.035, -0.244]}
        rotation={[-2.983, 0.472, 2.769]}
        scale={[0.233, 0.177, 0.143]}
      />
      <group
        position={[0.142, 0.052, -0.148]}
        rotation={[-2.815, 0.914, -0.14]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035_1.geometry}
          material={materials["Brown.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035_2.geometry}
          material={materials["Green.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035_3.geometry}
          material={materials["Coconut.035"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh024.geometry}
        material={materials["_trees_normal.061"]}
        position={[0.012, 0.027, -0.182]}
        rotation={[Math.PI / 2, 0, -2.719]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh014.geometry}
        material={materials["_trees_normal.062"]}
        position={[0.018, 0.029, -0.219]}
        rotation={[-Math.PI / 2, 0, -0.37]}
        scale={[-0.006, -0.009, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh025.geometry}
        material={materials["_trees_normal.063"]}
        position={[-0.348, 0.028, 0.102]}
        rotation={[1.564, 0.02, -1.83]}
        scale={[0.014, 0.012, 0.012]}
      />
      <group
        position={[-0.346, 0.032, -0.017]}
        rotation={[0, 0.037, 0]}
        scale={[0.078, 0.059, 0.072]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735013.geometry}
          material={materials["mat10.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735013_1.geometry}
          material={materials["mat20.025"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh026.geometry}
        material={materials["_trees_normal.064"]}
        position={[-0.129, 0.027, 0.065]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh027.geometry}
        material={materials["_trees_normal.065"]}
        position={[-0.129, 0.027, 0.286]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh028.geometry}
        material={materials["_trees_normal.066"]}
        position={[0.134, 0.027, 0.223]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh029.geometry}
        material={materials["_trees_normal.067"]}
        position={[0.161, 0.027, 0.135]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh030.geometry}
        material={materials["_trees_normal.068"]}
        position={[-0.171, 0.027, 0.064]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh031.geometry}
        material={materials["_trees_normal.069"]}
        position={[0.325, 0.027, 0.143]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh032.geometry}
        material={materials["_trees_normal.070"]}
        position={[-0.083, 0.027, 0.27]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh033.geometry}
        material={materials["_trees_normal.071"]}
        position={[-0.358, 0.027, 0.133]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh034.geometry}
        material={materials["_trees_normal.072"]}
        position={[0.156, 0.028, 0.102]}
        rotation={[1.564, 0.02, -1.83]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh035.geometry}
        material={materials["_trees_normal.073"]}
        position={[0.279, 0.028, -0.04]}
        rotation={[1.564, 0.02, -1.83]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh014.geometry}
        material={materials["_trees_normal.074"]}
        position={[-0.283, 0.027, 0.036]}
        rotation={[Math.PI / 2, 0, -1.176]}
        scale={[0.008, 0.007, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh015.geometry}
        material={materials["_trees_normal.075"]}
        position={[-0.195, 0.027, 0.218]}
        rotation={[Math.PI / 2, 0, -1.176]}
        scale={[0.008, 0.007, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834012.geometry}
        material={materials["mat20.026"]}
        position={[-0.35, 0.036, 0.161]}
        rotation={[0, 0.644, 0]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837032.geometry}
        material={materials["mat10.045"]}
        position={[-0.218, 0.061, 0.177]}
        rotation={[-0.032, -0.12, -0.046]}
        scale={[0.233, 0.177, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837033.geometry}
        material={materials["mat10.046"]}
        position={[-0.364, 0.061, 0.218]}
        rotation={[-3.088, -0.94, -3.141]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837034.geometry}
        material={materials["mat10.047"]}
        position={[-0.355, 0.061, 0.207]}
        rotation={[-3.088, -0.94, -3.141]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834013.geometry}
        material={materials["mat20.027"]}
        position={[-0.184, 0.036, 0.123]}
        rotation={[0, -1.42, 0]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837035.geometry}
        material={materials["mat10.048"]}
        position={[-0.222, 0.061, 0.096]}
        rotation={[-3.069, 1.122, 3.034]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837036.geometry}
        material={materials["mat10.049"]}
        position={[-0.227, 0.061, 0.084]}
        rotation={[-3.069, 1.122, 3.034]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837037.geometry}
        material={materials["mat10.050"]}
        position={[-0.26, 0.061, 0.232]}
        rotation={[-3.087, -0.958, -3.139]}
        scale={[0.233, 0.177, 0.143]}
      />
      <group
        position={[-0.154, 0.032, -0.122]}
        rotation={[-Math.PI, 1.309, -Math.PI]}
        scale={[0.078, 0.059, 0.072]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735014.geometry}
          material={materials["mat10.051"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735014_1.geometry}
          material={materials["mat20.028"]}
        />
      </group>
      <group
        position={[-0.087, 0.066, 0.322]}
        rotation={[-2.46, -1.28, 0.851]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder036_1.geometry}
          material={materials["Brown.036"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder036_2.geometry}
          material={materials["Green.036"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder036_3.geometry}
          material={materials["Coconut.036"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh016.geometry}
        material={materials["_trees_normal.076"]}
        position={[0.051, 0.027, -0.07]}
        rotation={[Math.PI / 2, 0, 2.991]}
        scale={[0.008, 0.007, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type0_02_mesh017.geometry}
        material={materials["_trees_normal.077"]}
        position={[0.175, 0.027, -0.028]}
        rotation={[Math.PI / 2, 0, 2.991]}
        scale={[0.008, 0.007, 0.01]}
      />
      <group
        position={[0.069, 0.052, -0.228]}
        rotation={[-0.756, -1.282, 2.528]}
        scale={[0.002, 0.001, 0.001]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder037_1.geometry}
          material={materials["Brown.037"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder037_2.geometry}
          material={materials["Green.037"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder037_3.geometry}
          material={materials["Coconut.037"]}
        />
      </group>
      <group
        position={[0.02, 0.052, -0.263]}
        rotation={[-2.68, -1.116, 0.542]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder038_1.geometry}
          material={materials["Brown.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder038_2.geometry}
          material={materials["Green.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder038_3.geometry}
          material={materials["Coconut.038"]}
        />
      </group>
      <group
        position={[0.004, 0.052, -0.118]}
        rotation={[-0.203, 0.243, -2.971]}
        scale={[0.002, 0.001, 0.001]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder039_1.geometry}
          material={materials["Brown.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder039_2.geometry}
          material={materials["Green.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder039_3.geometry}
          material={materials["Coconut.039"]}
        />
      </group>
      <group
        position={[-0.025, 0.052, 0.118]}
        rotation={[-0.203, 0.243, -2.971]}
        scale={[0.002, 0.001, 0.001]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder040_1.geometry}
          material={materials["Brown.040"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder040_2.geometry}
          material={materials["Green.040"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder040_3.geometry}
          material={materials["Coconut.040"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh036.geometry}
        material={materials["_trees_normal.078"]}
        position={[0.151, 0.028, 0.18]}
        rotation={[Math.PI / 2, 0, 3.11]}
        scale={[0.018, 0.015, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh037.geometry}
        material={materials["_trees_normal.079"]}
        position={[0.184, 0.028, -0.055]}
        rotation={[Math.PI / 2, 0, 3.11]}
        scale={[0.018, 0.015, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh038.geometry}
        material={materials["_trees_normal.080"]}
        position={[0.372, 0.028, -0.121]}
        rotation={[Math.PI / 2, 0, 3.11]}
        scale={[0.018, 0.015, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh039.geometry}
        material={materials["_trees_normal.081"]}
        position={[-0.111, 0.028, -0.185]}
        rotation={[Math.PI / 2, 0, 3.11]}
        scale={[0.018, 0.015, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_03_mesh005.geometry}
        material={materials["_trees_normal.082"]}
        position={[-0.16, 0.029, 0.165]}
        rotation={[Math.PI / 2, 0, -2.834]}
        scale={[0.013, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_03_mesh006.geometry}
        material={materials["_trees_normal.083"]}
        position={[0.103, 0.029, 0.199]}
        rotation={[Math.PI / 2, 0, -2.834]}
        scale={[0.013, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_03_mesh007.geometry}
        material={materials["_trees_normal.084"]}
        position={[0.074, 0.029, 0.236]}
        rotation={[Math.PI / 2, 0, -2.834]}
        scale={[0.017, 0.017, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_01_mesh.geometry}
        material={materials["_trees_normal.085"]}
        position={[-0.016, 0.029, -0.084]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.031, 0.039, 0.035]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_01_mesh001.geometry}
        material={materials["_trees_normal.086"]}
        position={[0.146, 0.029, -0.099]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.031, 0.039, 0.035]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_01_mesh002.geometry}
        material={materials["_trees_normal.087"]}
        position={[0.032, 0.029, -0.148]}
        rotation={[Math.PI / 2, 0, -1.234]}
        scale={[0.031, 0.039, 0.035]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_01_mesh003.geometry}
        material={materials["_trees_normal.088"]}
        position={[0.017, 0.029, 0.089]}
        rotation={[Math.PI / 2, 0, -1.234]}
        scale={[0.026, 0.031, 0.032]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh040.geometry}
        material={materials["_trees_normal.089"]}
        position={[-0.005, 0.027, 0.034]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.009, 0.007, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_01_mesh004.geometry}
        material={materials["_trees_normal.090"]}
        position={[-0.102, 0.029, 0.118]}
        rotation={[Math.PI / 2, 0, -2.181]}
        scale={[0.026, 0.031, 0.032]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh041.geometry}
        material={materials["_trees_normal.091"]}
        position={[-0.157, 0.027, 0.259]}
        rotation={[Math.PI / 2, 0, -2.874]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1922369548008.geometry}
        material={materials["mat16.008"]}
        position={[-0.205, 0.017, -0.029]}
        rotation={[1.577, 0.941, -1.249]}
        scale={[0.054, 0.162, 0.047]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834014.geometry}
        material={materials["mat20.029"]}
        position={[0.258, 0.035, -0.181]}
        rotation={[-Math.PI, 1.459, -Math.PI]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837038.geometry}
        material={materials["mat10.052"]}
        position={[0.295, 0.06, -0.152]}
        rotation={[-0.079, -1.161, -0.114]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837039.geometry}
        material={materials["mat10.053"]}
        position={[0.3, 0.06, -0.14]}
        rotation={[-0.079, -1.161, -0.114]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837040.geometry}
        material={materials["mat10.054"]}
        position={[0.339, 0.06, -0.286]}
        rotation={[-0.052, 0.918, -0.001]}
        scale={[0.233, 0.177, 0.143]}
      />
      <group
        position={[-0.414, 0.032, -0.228]}
        rotation={[0, 0.246, 0]}
        scale={[0.078, 0.059, 0.072]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735015.geometry}
          material={materials["mat10.055"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735015_1.geometry}
          material={materials["mat20.030"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh042.geometry}
        material={materials["_trees_normal.092"]}
        position={[-0.333, 0.028, -0.19]}
        rotation={[1.549, 0, -0.602]}
        scale={[0.012, 0.01, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834015.geometry}
        material={materials["mat20.031"]}
        position={[-0.395, 0.036, -0.198]}
        rotation={[0, 1.302, 0]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837041.geometry}
        material={materials["mat10.056"]}
        position={[-0.371, 0.061, -0.158]}
        rotation={[-0.832, -1.528, -0.874]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837042.geometry}
        material={materials["mat10.057"]}
        position={[-0.371, 0.061, -0.144]}
        rotation={[-0.832, -1.528, -0.874]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837043.geometry}
        material={materials["mat10.058"]}
        position={[-0.281, 0.061, -0.266]}
        rotation={[-0.037, 0.538, -0.023]}
        scale={[0.233, 0.177, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh043.geometry}
        material={materials["_trees_normal.093"]}
        position={[-0.422, 0.027, -0.25]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh044.geometry}
        material={materials["_trees_normal.094"]}
        position={[-0.335, 0.026, -0.131]}
        rotation={[Math.PI / 2, 0, 3.11]}
        scale={[0.018, 0.015, 0.019]}
      />
      <group
        position={[-0.356, 0.062, -0.24]}
        rotation={[-0.24, -0.604, 3.125]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder041_1.geometry}
          material={materials["Brown.041"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder041_2.geometry}
          material={materials["Green.041"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder041_3.geometry}
          material={materials["Coconut.041"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh045.geometry}
        material={materials["_trees_normal.095"]}
        position={[0.099, 0.028, -0.229]}
        rotation={[Math.PI / 2, 0, 3.11]}
        scale={[0.018, 0.015, 0.019]}
      />
      <group
        position={[-0.066, 0.062, -0.082]}
        rotation={[-0.24, -0.604, 3.125]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder042_1.geometry}
          material={materials["Brown.042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder042_2.geometry}
          material={materials["Green.042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder042_3.geometry}
          material={materials["Coconut.042"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh046.geometry}
        material={materials["_trees_normal.096"]}
        position={[-0.205, 0.027, 0.052]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh047.geometry}
        material={materials["_trees_normal.097"]}
        position={[-0.26, 0.028, -0.081]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.011, 0.011, 0.01]}
      />
      <group
        position={[-0.294, 0.032, 0.217]}
        rotation={[0, 0.246, 0]}
        scale={[0.078, 0.059, 0.072]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735016.geometry}
          material={materials["mat10.059"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735016_1.geometry}
          material={materials["mat20.032"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh048.geometry}
        material={materials["_trees_normal.098"]}
        position={[-0.236, 0.027, 0.199]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh049.geometry}
        material={materials["_trees_normal.099"]}
        position={[-0.372, 0.027, 0.006]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_03_mesh008.geometry}
        material={materials["_trees_normal.100"]}
        position={[-0.218, 0.029, -0.181]}
        rotation={[Math.PI / 2, 0, -2.834]}
        scale={[0.013, 0.012, 0.012]}
      />
      <group
        position={[-0.148, 0.052, -0.087]}
        rotation={[-1.035, -1.341, 2.24]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder043_1.geometry}
          material={materials["Brown.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder043_2.geometry}
          material={materials["Green.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder043_3.geometry}
          material={materials["Coconut.043"]}
        />
      </group>
      <group
        position={[-0.049, 0.052, 0.098]}
        rotation={[-0.199, 0.127, -2.994]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder044_1.geometry}
          material={materials["Brown.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder044_2.geometry}
          material={materials["Green.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder044_3.geometry}
          material={materials["Coconut.044"]}
        />
      </group>
      <group
        position={[-0.016, 0.066, 0.242]}
        rotation={[-2.46, -1.28, 0.851]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder045_1.geometry}
          material={materials["Brown.045"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder045_2.geometry}
          material={materials["Green.045"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder045_3.geometry}
          material={materials["Coconut.045"]}
        />
      </group>
      <group
        position={[-0.256, 0.062, -0.139]}
        rotation={[-0.206, 0.297, -2.959]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046_1.geometry}
          material={materials["Brown.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046_2.geometry}
          material={materials["Green.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046_3.geometry}
          material={materials["Coconut.046"]}
        />
      </group>
      <group
        position={[-0.163, 0.052, -0.038]}
        rotation={[-0.433, 1.086, -2.631]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder047_1.geometry}
          material={materials["Brown.047"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder047_2.geometry}
          material={materials["Green.047"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder047_3.geometry}
          material={materials["Coconut.047"]}
        />
      </group>
      <group
        position={[-0.066, 0.052, 0.158]}
        rotation={[-1.614, 1.374, -1.405]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder048_1.geometry}
          material={materials["Brown.048"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder048_2.geometry}
          material={materials["Green.048"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder048_3.geometry}
          material={materials["Coconut.048"]}
        />
      </group>
      <group
        position={[-0.143, 0.052, 0.004]}
        rotation={[-0.414, -1.063, 2.896]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder049_1.geometry}
          material={materials["Brown.049"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder049_2.geometry}
          material={materials["Green.049"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder049_3.geometry}
          material={materials["Coconut.049"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_03_mesh009.geometry}
        material={materials["_trees_normal.101"]}
        position={[-0.36, 0.029, -0.121]}
        rotation={[Math.PI / 2, 0, -2.834]}
        scale={[0.013, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh050.geometry}
        material={materials["_trees_normal.102"]}
        position={[-0.404, 0.028, 0.046]}
        rotation={[1.413, 0, -1.696]}
        scale={[0.014, 0.012, 0.012]}
      />
      <group
        position={[-0.15, 0.083, -0.126]}
        rotation={[-0.569, -0.905, 2.836]}
        scale={[0.003, 0.003, 0.002]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder050_1.geometry}
          material={materials["Brown.050"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder050_2.geometry}
          material={materials["Green.050"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder050_3.geometry}
          material={materials["Coconut.050"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834016.geometry}
        material={materials["mat20.033"]}
        position={[-0.023, 0.035, -0.249]}
        rotation={[-Math.PI, 0.267, -Math.PI]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837044.geometry}
        material={materials["mat10.060"]}
        position={[0.017, 0.06, -0.272]}
        rotation={[-0.031, 0.029, -0.041]}
        scale={[0.15, 0.177, 0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837045.geometry}
        material={materials["mat10.061"]}
        position={[0.031, 0.06, -0.272]}
        rotation={[-0.031, 0.029, -0.041]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837046.geometry}
        material={materials["mat10.062"]}
        position={[-0.091, 0.06, -0.363]}
        rotation={[-3.081, 1.03, 3.047]}
        scale={[0.233, 0.177, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh051.geometry}
        material={materials["_trees_normal.103"]}
        position={[-0.159, 0.027, 0.322]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh052.geometry}
        material={materials["_trees_normal.104"]}
        position={[-0.159, 0.027, 0.278]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <group
        position={[-0.222, 0.066, 0.222]}
        rotation={[-2.46, -1.28, 0.851]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder051_1.geometry}
          material={materials["Brown.051"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder051_2.geometry}
          material={materials["Green.051"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder051_3.geometry}
          material={materials["Coconut.051"]}
        />
      </group>
      <group
        position={[-0.323, 0.066, 0.222]}
        rotation={[-2.46, -1.28, 0.851]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder052_1.geometry}
          material={materials["Brown.052"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder052_2.geometry}
          material={materials["Green.052"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder052_3.geometry}
          material={materials["Coconut.052"]}
        />
      </group>
      <group
        position={[-0.289, 0.066, 0.222]}
        rotation={[-2.46, -1.28, 0.851]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder053_1.geometry}
          material={materials["Brown.053"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder053_2.geometry}
          material={materials["Green.053"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder053_3.geometry}
          material={materials["Coconut.053"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh015.geometry}
        material={materials["_trees_normal.105"]}
        position={[0.28, 0.029, 0.144]}
        rotation={[-Math.PI / 2, 0, 2.072]}
        scale={[-0.01, -0.012, -0.011]}
      />
      <group
        position={[0.177, 0.052, 0.173]}
        rotation={[-0.235, -0.572, 3.135]}
        scale={[0.002, 0.001, 0.001]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder054_1.geometry}
          material={materials["Brown.054"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder054_2.geometry}
          material={materials["Green.054"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder054_3.geometry}
          material={materials["Coconut.054"]}
        />
      </group>
      <group
        position={[0.345, 0.052, 0.173]}
        rotation={[-0.235, -0.572, 3.135]}
        scale={[0.002, 0.001, 0.001]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder055_1.geometry}
          material={materials["Brown.055"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder055_2.geometry}
          material={materials["Green.055"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder055_3.geometry}
          material={materials["Coconut.055"]}
        />
      </group>
      <group
        position={[-0.071, 0.052, 0.05]}
        rotation={[-2.325, 1.299, -0.677]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder056_1.geometry}
          material={materials["Brown.056"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder056_2.geometry}
          material={materials["Green.056"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder056_3.geometry}
          material={materials["Coconut.056"]}
        />
      </group>
      <group
        position={[-0.112, 0.052, -0.031]}
        rotation={[-1.035, -1.341, 2.24]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder057_1.geometry}
          material={materials["Brown.057"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder057_2.geometry}
          material={materials["Green.057"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder057_3.geometry}
          material={materials["Coconut.057"]}
        />
      </group>
      <group
        position={[-0.057, 0.052, 0.177]}
        rotation={[-1.035, -1.341, 2.24]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder058_1.geometry}
          material={materials["Brown.058"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder058_2.geometry}
          material={materials["Green.058"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder058_3.geometry}
          material={materials["Coconut.058"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh053.geometry}
        material={materials["_trees_normal.106"]}
        position={[0.261, 0.027, 0.016]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <group
        position={[0.099, 0.033, -0.257]}
        rotation={[-Math.PI, 0.835, -Math.PI]}
        scale={[0.082, 0.095, 0.115]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735017.geometry}
          material={materials["mat10.063"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735017_1.geometry}
          material={materials["mat20.034"]}
        />
      </group>
      <group
        position={[0.35, 0.052, -0.144]}
        rotation={[-0.198, 0.097, -3.001]}
        scale={[0.002, 0.001, 0.001]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder059_1.geometry}
          material={materials["Brown.059"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder059_2.geometry}
          material={materials["Green.059"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder059_3.geometry}
          material={materials["Coconut.059"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh054.geometry}
        material={materials["_trees_normal.107"]}
        position={[0.387, 0.028, -0.235]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group937971834017.geometry}
        material={materials["mat20.035"]}
        position={[0.393, 0.035, -0.161]}
        rotation={[Math.PI, -0.318, Math.PI]}
        scale={[0.095, 0.12, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837047.geometry}
        material={materials["mat10.064"]}
        position={[0.273, 0.06, -0.219]}
        rotation={[-3.107, 0.445, 3.085]}
        scale={[0.233, 0.177, 0.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837048.geometry}
        material={materials["mat10.065"]}
        position={[0.424, 0.06, -0.211]}
        rotation={[-0.038, 0.615, -0.02]}
        scale={[0.152, 0.177, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1782538837049.geometry}
        material={materials["mat10.066"]}
        position={[0.413, 0.06, -0.203]}
        rotation={[-0.038, 0.615, -0.02]}
        scale={[0.15, 0.177, 0.141]}
      />
      <group
        position={[-0.052, 0.066, 0.296]}
        rotation={[-2.46, -1.28, 0.851]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder060_1.geometry}
          material={materials["Brown.060"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder060_2.geometry}
          material={materials["Green.060"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder060_3.geometry}
          material={materials["Coconut.060"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh055.geometry}
        material={materials["_trees_normal.108"]}
        position={[-0.385, 0.028, 0.085]}
        rotation={[1.564, 0.02, -1.83]}
        scale={[0.014, 0.012, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh056.geometry}
        material={materials["_trees_normal.109"]}
        position={[0.117, 0.027, 0.039]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh057.geometry}
        material={materials["_trees_normal.110"]}
        position={[0.169, 0.028, -0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.016, 0.014, 0.016]}
      />
      <group
        position={[0.196, 0.066, 0.063]}
        rotation={[-0.236, -0.686, -3.102]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder061_1.geometry}
          material={materials["Brown.061"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder061_2.geometry}
          material={materials["Green.061"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder061_3.geometry}
          material={materials["Coconut.061"]}
        />
      </group>
      <group
        position={[-0.091, 0.052, 0.38]}
        rotation={[-1.035, -1.341, 2.24]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder062_1.geometry}
          material={materials["Brown.062"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder062_2.geometry}
          material={materials["Green.062"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder062_3.geometry}
          material={materials["Coconut.062"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type6_04_mesh016.geometry}
        material={materials["_trees_normal.111"]}
        position={[-0.164, 0.036, 0.375]}
        rotation={[-Math.PI / 2, 0, 3.051]}
        scale={[-0.007, -0.008, -0.007]}
      />
      <group
        position={[-0.4, 0.032, -0.025]}
        rotation={[0, -0.115, 0]}
        scale={[0.078, 0.059, 0.072]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735018.geometry}
          material={materials["mat10.067"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh2035836735018_1.geometry}
          material={materials["mat20.036"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Type7_03_mesh058.geometry}
        material={materials["_trees_normal.112"]}
        position={[-0.276, 0.027, -0.052]}
        rotation={[Math.PI / 2, 0, -1.902]}
        scale={[0.01, 0.009, 0.009]}
      />
    </group>
  );
}

useGLTF.preload("/vienna.glb");

export default Model;
