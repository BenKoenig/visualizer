import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import GrassGroundPlane from "./GrassGroundPlane"; // Removed the .jsx extension

const CanvasWrapper: React.FC = () => {
    return (
        <Canvas style={{ width: "100%", height: "100%" }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Stars />
            <GrassGroundPlane />
            <OrbitControls />
        </Canvas>
    );
};

export default CanvasWrapper;