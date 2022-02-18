import React from "react";
import {useLoader,useThree} from "react-three-fiber";    
import { TextureLoader } from "three";
import texture from "../images/map.jpg"
const Box = () => {
    const colorMap=useLoader(TextureLoader,texture);    
    const deg2rad = degrees => degrees * (Math.PI / 180);
    useThree(({camera}) => {
      camera.rotation.set(deg2rad(0), 10, 0);
    });
  return (
    <mesh rotation={[90,0,20]} >
        <boxBufferGeometry attach="geometry" args={[3,3,3]}/>
        {/* <meshLambertMaterial attach="material" color="blue"/> */}
        <meshStandardMaterial map={colorMap}/>

    </mesh>
  )
}

export default Box