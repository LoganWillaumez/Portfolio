/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/mesh/Cap/Cap.gltf');
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -0.5, 0]}
      rotation={[0.3, -0.5, 0]}
    >
      <mesh
        geometry={nodes.CapCaplowpolyFinal.geometry}
        material={materials.lambert1}
      />
    </group>
  );
}

useGLTF.preload('/mesh/Cap/Cap.gltf');
