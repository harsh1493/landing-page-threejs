import React, { Suspense,useState, useEffect, useRef } from "react";
import { Canvas, useFrame,useThree } from "react-three-fiber";
import Iphone from "./components/Iphone";
import Landing from "./components/Landing";
import { useHelper,OrbitControls ,PerspectiveCamera ,Plane} from "@react-three/drei";

import { SpotLightHelper } from "three";
const Light = () => {
  const ref = useRef()
//  useHelper(ref, SpotLightHelper, 1)

  return (
    <>
      <ambientLight intensity={0.7} color={"#d3d3d3"}/>
      <spotLight
        //color={"#2416c3"}
        ref={ref}
        intensity={1}
        position={[0,3, 0]}
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        castShadow
      />
    </>
  )
}


export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};


export default function App3() {

  return (
    <div className="bg-white">
      <Landing />
        <Scene/>
    </div>
  );
}

const Scene = () => { 
  return (

    <div className="z-10 "  style={{ height: "100vh" }}>
    <Canvas colorManagement shadowMap className='right-20 float-right ' style={{ width: "30%", height: "100%" }} >
    <PerspectiveCamera near={1} makeDefault position={[0, 0, 6] }/>

      {/* <fog attach="fog" args={["white", 0, 40]} /> */}
     
      <Light />
      
      <Suspense fallback={null}>
        <Iphone />
      </Suspense>
      {/* <Plane
       receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3, 0]}
        args={[1000, 1000]}
      >  <meshStandardMaterial attach="material" color="white" />
      </Plane> */}
     {/* < OrbitControls/> */}
    </Canvas>
  </div>
  );

 }

 