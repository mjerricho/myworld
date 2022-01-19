import './App.css';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';


function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.01
    mesh.current.rotation.y += 0.01
  })
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'grey'} wireframe />
    </mesh>
  )
}

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
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-2, 0, 0]} />
        <Box position={[0, 0, 0]} />
        <Box position={[2, 0, 0]} />
      </Canvas>
    </div>

  );
}

export default App;
