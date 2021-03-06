import {
  ContactShadows,
  Float,
  Loader,
  PresentationControls,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useWindowSize } from 'rooks';
import Cap from '../public/mesh/Cap/Cap';
import { useMediaMatch } from 'rooks';
export const Box = () => {
  const boxRef = useRef();
  useFrame(() => {
    boxRef.current.rotation.x += 0.005;
    boxRef.current.rotation.y += 0.005;
  });
  return (
    <mesh ref={boxRef} receiveShadow position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='gray' />
    </mesh>
  );
};
export const SceneCap = ({ active }) => {
  const isNarrowWidth = useMediaMatch('(orientation: landscape)');
  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 1, 4], fov: 60 }}
        style={{
          height: '100vh',
          width: '100vw',
          zIndex: '1',
        }}
        legacy={true}
      >
        <ambientLight />
        <pointLight position={[2, 2, 2]} intensity={3} />
        {/* <axesHelper args={[10]} /> */}
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[0.1, 0.3]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <PresentationControls cursor={true}>
            <group
              opacity='0.1'
              transparent={true}
              className='blender'
              scale={!isNarrowWidth ? innerWidth / innerHeight : 0.8}
              position={[0, -0.4, 0]}
            >
              <Cap active={active} />
            </group>
          </PresentationControls>
          <ContactShadows
            position={[0, -1.5, 0]}
            blur={2}
            scale={20}
            far={10}
          />
        </Float>
      </Canvas>
      <Loader />
    </>
  );
};
