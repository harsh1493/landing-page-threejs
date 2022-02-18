import React, {useState, Suspense,useRef,useEffect} from "react";
import * as THREE from 'three'
import { Canvas, useLoader,useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import "./styles.css";
import { Scene } from "three";
import App2 from "./App2";
import Box from "./components/Box";
import TextSection from "./components/TextSection";
// All textures are CC0 textures from: https://cc0textures.com/
const name = (type) => `textures/PavingStones092_1K_${type}.jpg`;
const Sphere=()=>{
  const [isAscending, setisAscending] = useState(true);

  const [
    defaultMap
  ] = useLoader(TextureLoader, [
    'textures/normalMap.png '
  ]);
  const ref = useRef()
  const clock = new THREE.Clock()

  const ballPosition=()=>{
    console.log(ref.current.position);
    if(ref.current.position.y===1){
      return -1
    }
    else if(ref.current.position.y===-1){
      return 1
    }
    else{
      return 0
    }
  }
    useFrame((state,delta)=>{
      const elapsedTime = clock.getElapsedTime()
      ref.current.rotation.y=0.5*elapsedTime
      ref.current.position.y+=0.005*Math.sin(elapsedTime)

      console.log(ref.current.position.y,isAscending);
    
    })
    
  return(
    <mesh ref={ref}>
    {/* Width and height segments for displacementMap */}
    <sphereBufferGeometry args={[2, 100, 100]}/>
    <meshStandardMaterial
      metalness={0.7}
      normalMap={defaultMap}
      roughness={0.2}
      color={new THREE.Color(0x292929)}
    />
  </mesh>

  )
}

function Scenes() {

  return (
    <>
       {/* <ambientLight intensity={0.2} /> */}
      {/* <directionalLight color={0x636ab7} intensity={10} position={[1.5,-1.5,-1.6]} rotation={[-1.5,1.5,1.6]}/> */}
      <pointLight color={0x636ab7} intensity={10} position={[2.5,-2.5,-2.6]}  />
      <pointLight color={0x801717} intensity={10} position={[-2.5,2.5,1.7]}  />
      <Sphere/>
    </>
  );
}

export default function App() {
  return (
    <div className="body"  style={{background:"#202024"}}>
    <div className="canvas z-10">
      <Canvas  className="canvas bg-transparent">
        <Suspense fallback={null}>
          <Scenes />
          <OrbitControls/>
        </Suspense>
      </Canvas>
    </div>
    <div  className="text-white flex flex-row justify-center absol">
       <h1>Feel the sphere</h1>
       
    </div>
    </div>
  );
}
