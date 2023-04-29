import React from "react";
import { useGLTF } from "@react-three/drei";

const Tree = ({ position }) => {
    const { nodes, materials } = useGLTF("forest_tree.glb");
    console.log(nodes, materials);
    return (
        <group position={position} scale={[0.1, 0.1, 0.1]}>
            <mesh
                geometry={nodes.Tree_Spruce_small_01.geometry}
                material={materials.AllColors_Material.}
                castShadow
            />
        </group>
    );
};

export default Tree;
