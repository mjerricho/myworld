import { Html, useProgress } from '@react-three/drei'
import React from 'react'

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>{ progress } % loaded</Html>
  )
}

export default Loader