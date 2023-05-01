import React from "react";
import { Plane } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const GrassGroundPlane = () => {
    const grassTexture = useTexture("grass.jpg");

    grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping;
    grassTexture.repeat.set(50, 50); // Adjust the repetition of the texture

    return (
        <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <meshStandardMaterial attach="material" map={grassTexture} />
        </Plane>
    );
};

export default GrassGroundPlane