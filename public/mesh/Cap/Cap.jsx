/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useSpring, animated, config } from '@react-spring/three';

export default function Model({ ...props }) {
  const [colorVsCode, colorBlender] = useTexture([
    '/mesh/Cap/Textures/vscode-FlipY.png',
    '/mesh/Cap/Textures/blender-FlipY.png',
  ]);
  const { scale } = useSpring({
    scale: props.active ? 1 : 0,
    config: {
      ...config.wobbly,
    },
    immediate: props.active ? false : true,
  });
  const { scale: scaleReverse } = useSpring({
    scale: !props.active ? 1 : 0,
    config: {
      ...config.wobbly,
    },
    immediate: !props.active ? false : true,
  });
  const group = useRef();
  const mesh = useRef();
  const { nodes, materials } = useGLTF('/mesh/Cap/Cap.gltf');
  useEffect(() => {}, []);
=======

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
=======
import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useSpring, animated, config } from '@react-spring/three';
import { useFrame, TextureLoader } from '@react-three/fiber';
>>>>>>> cf87511 ([MERGE](shader): add cap and texture)

export default function Model({ ...props }) {
  const [colorVsCode, colorBlender] = useTexture([
    '/mesh/Cap/Textures/vscode-FlipY.png',
    '/mesh/Cap/Textures/blender-FlipY.png',
  ]);
  const { scale } = useSpring({
    scale: props.active ? 1 : 0,
    config: {
      ...config.wobbly,
    },
    immediate: props.active ? false : true,
  });
  const { scale: scaleReverse } = useSpring({
    scale: !props.active ? 1 : 0,
    config: {
      ...config.wobbly,
      // duration: !props.active ? 450 : 0,
    },
    immediate: !props.active ? false : true,
  });
  const group = useRef();
  const mesh = useRef();
  console.log(`🚀 ~ mesh`, mesh);
  // useFrame(() => (meshMat.current.material.opacity -= 0.01));
  // useEffect(() => {
  //   meshMat.current.material.opacity = props.active ? 1 : 0;
  //   console.log(`🚀 ~ opacity`, opacity);
  //   meshMat.current.material.transparent = true;
  // }, [props.active]);
  const { nodes, materials } = useGLTF('/mesh/Cap/Cap.gltf');
<<<<<<< HEAD
>>>>>>> 192898c ([MERGE](page-structure): add structure page)
=======
  useEffect(() => {}, []);
>>>>>>> cf87511 ([MERGE](shader): add cap and texture)
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -0.5, 0]}
      rotation={[0.3, -0.5, 0]}
    >
<<<<<<< HEAD
<<<<<<< HEAD
      <animated.mesh
        ref={mesh}
        scale={scale}
        geometry={nodes.CapCaplowpolyFinal.geometry}
        material={materials.Blender}
        material-map={!props.active ? colorVsCode : colorBlender}
      />
      <animated.mesh
        ref={mesh}
        scale={scaleReverse}
        geometry={nodes.CapCaplowpolyFinal.geometry}
        material={materials.Blender}
        material-map={props.active ? colorVsCode : colorBlender}
=======
      <mesh
        geometry={nodes.CapCaplowpolyFinal.geometry}
        material={materials.lambert1}
>>>>>>> 192898c ([MERGE](page-structure): add structure page)
=======
      <animated.mesh
        ref={mesh}
        scale={scale}
        geometry={nodes.CapCaplowpolyFinal.geometry}
        material={materials.Blender}
        material-map={!props.active ? colorVsCode : colorBlender}
      />
      <animated.mesh
        ref={mesh}
        scale={scaleReverse}
        geometry={nodes.CapCaplowpolyFinal.geometry}
        material={materials.Blender}
        material-map={props.active ? colorVsCode : colorBlender}
>>>>>>> cf87511 ([MERGE](shader): add cap and texture)
      />
    </group>
  );
}

useGLTF.preload('/mesh/Cap/Cap.gltf');
