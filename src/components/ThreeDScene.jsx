import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ThreeDScene = () => {
    return (
        <Canvas style={{ height: "500px" }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 5]} />
            <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="lightblue" />
            </mesh>
            <OrbitControls />
        </Canvas>
    );
};

export default ThreeDScene;
