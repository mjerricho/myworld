import './App.css';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Box from './components/Box';
import Loader from './components/Loader';
import Shiba from './components/Shiba';

function App() {
  return (
    <div className='app'>
      <div className='title'>
        <h1>Jerri's World</h1>
        <h3>Welcome! This is my exploration of the 3D world in Three.js and React.js.</h3>
      </div>
      <Canvas>
          <OrbitControls />
          <Stars />
          <ambientLight intensity={1}/>
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={Loader}>
            <Shiba />
          </Suspense>
          <Box position={[-2, 0, 0]} />
          <Box position={[2, 0, 0]} />
      </Canvas>
    </div>

  );
}

export default App;
