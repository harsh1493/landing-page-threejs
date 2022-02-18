
import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera, OrthographicCamera,OrbitControls } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/phone.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[534.95, 81.76, 98.89]} rotation={[0, 0.19, 0]}>
        <mesh
          geometry={nodes.Cube_copy.geometry}
          material={nodes.Cube_copy.material}
          position={[131.47, 104.28, -18.58]}
          rotation={[-0.19, -0.06, 0]}
          scale={[1, 1.03, 1]}
        />
        <mesh
          geometry={nodes.Cube_copy_1.geometry}
          material={nodes.Cube_copy_1.material}
          position={[-131.73, 105.1, -20.29]}
          rotation={[-0.28, -0.01, 0]}
          scale={[1.01, 1.04, 0.75]}
        />
        <mesh
          geometry={nodes.Cube_copy_2.geometry}
          material={nodes.Cube_copy_2.material}
          position={[-131.81, 136.32, -27.17]}
          rotation={[-0.28, -0.01, 0]}
          scale={[1.01, 1.04, 0.75]}
        />
        <mesh
          geometry={nodes.Rectangle_2.geometry}
          material={nodes.Rectangle_2.material}
          position={[-0.05, -2.54, -13.25]}
          rotation={[-0.19, -0.01, 0]}
          scale={[1.28, 1.28, 1.28]}
        />
        <mesh
          geometry={nodes['X_-_2'].geometry}
          material={nodes['X_-_2'].material}
          position={[-0.3, 2.81, 14.62]}
          rotation={[-0.19, -0.01, 0]}
          scale={[1.28, 1.28, 1.28]}
        />
      </group>
      <directionalLight
        intensity={0.8}
        decay={2}
        color="#e65858"
        position={[91.65, 5512.31, 0]}
        rotation={[-Math.PI / 2, 0.02, 0]}
      />
      <pointLight intensity={4} decay={2} distance={10000} color="#f44646" position={[453.48, 617.76, 2099.05]} />

      <OrbitControls />
    </group>
  )
}

useGLTF.preload('/phone.gltf')
