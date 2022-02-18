import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas,useThree } from "react-three-fiber";
const AnimatedSphere = () => {

    return (
        <Sphere args={[1, 100, 200]} scale={2} >
            <MeshDistortMaterial
                color="#8352FD"
                attatch="material"
                distort={0.3}
                speed={1.5}
                roughness={0} 
            />
        </Sphere>
    )
}

export default AnimatedSphere