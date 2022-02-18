
import * as THREE from 'three'
import React, { useRef,useEffect,useState,Suspense } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame,useLoader } from "@react-three/fiber";
import { useSpring, animated,config } from '@react-spring/three'
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { MeshStandardMaterial } from 'three';
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
export default function Model({ ...props }) {
 //  const position = useMousePosition();
  const group = useRef()
  const { nodes, materials } = useGLTF('/iphone.gltf')

  //adding texture for mobile display
  const texture_1 = useLoader(TextureLoader, 'textures/landing.png');

  //adding animation
  const clock = new THREE.Clock()
  const { position } = useSpring({
    // position: active ? [0, 0, 0] : [7, 0, 0],
    to: {
     position:[0,0,0] 
   },
   from: { position: [5,5,-5]  },
   config: { mass: 2, tension: 500, friction: 150 }
    // config: config.wobbly
   });



  useFrame((state,delta)=>{
    // const elapsedTime = clock.getElapsedTime()
    // group.current.position.y+=0.005*Math.sin(elapsedTime)

    const t = clock.getElapsedTime()
   // group.current.rotation.set(0.1 + Math.cos(t / 4.5) / 5, Math.sin(t / 4) / 4, 0.3 - (1 + Math.sin(t / 4)) / 4)
    group.current.position.y = (1 + Math.sin(t / 2)) / 5
  //  group.current.rotation.y=0.005*(group.current.position.x-position.x)
  })

  return (
    <animated.group ref={group} {...props} dispose={null} scale={[1.5,1.5,1.5]} castShadow  position={position}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[-0.34, 0.19, -0.49]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 0.67, 1]}>
              <mesh  geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
            </group>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material}/>
              <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
              <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
              <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
              <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material}  />
              <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material}/>
              <mesh geometry={nodes.mesh_7.geometry} material={nodes.mesh_7.material} />
              <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material} />
              <mesh geometry={nodes.mesh_9.geometry} material={materials.Bandas_magneticas} />
            </group>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <mesh geometry={nodes.mesh_10.geometry} material={nodes.mesh_10.material} />
            </group>
            <group position={[0, 1, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh geometry={nodes.mesh_11.geometry} material={nodes.mesh_11.material} />
              <mesh geometry={nodes.mesh_12.geometry} material={nodes.mesh_12.material} />
            </group>
            <group position={[0.38, 0.88, -0.06]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.06, 0.06, 0.06]}>
              <mesh geometry={nodes.mesh_13.geometry} material={nodes.mesh_13.material} />
              <mesh geometry={nodes.mesh_14.geometry} material={nodes.mesh_14.material} />
            </group>
            <group position={[0.38, 0.88, -0.05]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.04, 0.04, 0.04]}>
              <mesh geometry={nodes.mesh_15.geometry} material={nodes.mesh_15.material} />
            </group>
            <group position={[0.19, 0.91, -0.05]} rotation={[-Math.PI / 2, -1.39, Math.PI]} scale={[0.03, 0.03, 0.03]}>
              <mesh geometry={nodes.mesh_16.geometry} material={materials.Luz_Led} />
            </group>
            <group position={[0.27, 0.88, -0.05]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.04, 0.04, 0.04]}>
              <mesh geometry={nodes.mesh_17.geometry} material={nodes.mesh_17.material} />
            </group>
            <group position={[0, 0.85, 0.03]} rotation={[Math.PI / 2, 0, 0]} scale={[1.08, 1.03, 1.18]}>
              <mesh geometry={nodes.mesh_18.geometry} material={nodes.mesh_18.material} />
            </group>
            <group position={[0, -0.99, 0]} rotation={[0, Math.PI / 2, 0]} scale={0.01}>
              <mesh geometry={nodes.mesh_19.geometry} material={materials.Metal_Ceramico} />
              <mesh geometry={nodes.mesh_20.geometry} material={materials.Cobre} />
            </group>
            <group position={[0, -0.95, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.03, 1.1, 1.03]}>
              <mesh geometry={nodes.mesh_21.geometry} material={nodes.mesh_21.material} />
            </group>
            <group position={[0.22, -0.99, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh geometry={nodes.mesh_22.geometry} material={nodes.mesh_22.material} />
            </group>
            <group position={[-0.22, -0.99, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.02, 1.1, 1.02]}>
              <mesh geometry={nodes.mesh_23.geometry} material={nodes.mesh_23.material} />
            </group>
            <mesh  position={[0,0,0.05]}>
                  <planeBufferGeometry  attach="geometry" args={[0.86, 1.8]} rotation={[-0.45,0,0]}/>
                  {/* <meshBasicMaterial   attach="material" map={texture_1} />  */}
                  <meshBasicMaterial   attach="material" map={texture_1}   transparent /> 
             </mesh>
          </group>
        </group>
      </group>
    </animated.group>
  )
}

useGLTF.preload('/iphone.gltf')
