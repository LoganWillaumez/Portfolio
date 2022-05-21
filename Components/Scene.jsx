import { Container, Typography } from '@mui/material';
import { Html } from '@react-three/drei';
import {
  ContactShadows,
  Environment,
  Loader,
  MeshReflectorMaterial,
  PresentationControls,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { Desk } from '../public/mesh/Desk/Desk';
import LinearDeterminate from './Loading';
export const Scene = ({ isBegin }) => {
  return (
    // <div className={`scene ${isBegin && 'scene--begin'}`}>
    <div className='scene'>
      <Suspense fallback={<LinearDeterminate />}>
        <Canvas
          dpr={[1, 1.5]}
          shadows
          camera={{ position: [-15, 12, 22], fov: 35 }}
          // camera={{ position: [-15, 18, 18], fov: 35 }}
          gl={{ alpha: false }}
          style={{ height: '100vh', width: '100vw', zIndex: '1' }}
          legacy={true}
        >
          {/* <Html
            prepend
            as='div'
            fullscreen
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: '4rem',
            }}
          >
            <Typography
              sx={{
                fontSize: 'calc(1vw + 1vh + 3vmin)',
                fontWeight: '700',
              }}
            >
              From 3D to web.
            </Typography>
            <Typography
              sx={{
                fontSize: 'calc(1vw + 1vh + 1vmin)',
              }}
            >
              Let's combine the two world together.
            </Typography>
          </Html> */}
          {/* <ambientLight /> */}
          {/* <pointLight
          position={[2, 2, 2]}
          intensity={1.5}
          gl={{ alpha: false }}
        /> */}
          {/* <group position={[0, -1, 0]}>
          <Box position={[0, 0.3, 0]} rotationSpeed={0.002} name={'About me'} />
          <Box
            position={[2, 0.3, -2]}
            color='blue'
            rotationSpeed={0.002}
            name={'Portfolio'}
          />
          <Box
            position={[-2, 0.3, -2]}
            color='red'
            rotationSpeed={0.002}
            name={'Experience'}
          />
        </group> */}
          {/* <PresentationControls
          global={false}
          cursor={true}
          zoom={0.8}
          rotation={[0, -Math.PI / 4, 0]}
          polar={[0, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <Room />
        </PresentationControls> */}

          {/* <Suspense fallback={null}>
          <Model />
        </Suspense> */}
          {/* <ContactShadows position={[0, -0.1, 0]} blur={1} opacity={0.5} /> */}
          <fog attach='fog' args={['#17171b', 30, 40]} />
          <color attach='background' args={['#17171b']} />
          {/* <ambientLight intensity={0.25} /> */}
          {/* <directionalLight
          castShadow
          intensity={2}
          position={[10, 6, 6]}
          shadow-mapSize={[1024, 1024]}
        >
          <orthographicCamera
            attach='shadow-camera'
            left={-20}
            right={20}
            top={20}
            bottom={-20}
          />
        </directionalLight> */}
          <mesh rotation={[0, 1, 0]}>
            {/* <Room /> */}
            <PresentationControls
              global
              zoom={0.8}
              rotation={[0, -Math.PI / 4, 0]}
              polar={[0, 0]}
              azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
              <group dispose={null}>
                <Desk />
              </group>
            </PresentationControls>
          </mesh>
          <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[400, 100]}
              resolution={1024}
              mixBlur={1}
              mixStrength={15}
              depthScale={1}
              minDepthThreshold={0.85}
              color='#020202'
              //   color='#16bl24'
              metalness={0}
              roughness={1}
            />
          </mesh>

          <Environment preset='dawn' />
        </Canvas>
      </Suspense>
    </div>
  );
};
