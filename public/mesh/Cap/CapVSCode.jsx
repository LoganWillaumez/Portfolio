/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useSpring, animated, config } from '@react-spring/three';
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const { scale } = useSpring({
    scale: props.active ? 1 : 0,
    config: config.wobbly,
  });
  const group = useRef();
  const mesh = useRef();
  // useFrame(() => (meshMat.current.material.opacity -= 0.01));
  // useEffect(() => {
  //   meshMat.current.material.opacity = props.active ? 1 : 0;
  //   console.log(`🚀 ~ opacity`, opacity);
  //   meshMat.current.material.transparent = true;
  // }, [props.active]);
  const { nodes, materials } = useGLTF('/mesh/Cap/Cap.gltf');
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -0.5, 0]}
      rotation={[0.3, -0.5, 0]}
    >
      <animated.mesh
        ref={mesh}
        scale={scale}
        geometry={nodes.CapCaplowpolyFinal.geometry}
        material={materials.lambert1}
      />
    </group>
  );
}

useGLTF.preload('/mesh/Cap/Cap.gltf');
