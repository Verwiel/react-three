import React from 'react'
import { Canvas } from "react-three-fiber"
import Cube from './Cube'

function CubeIndex(){
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Cube position={[-1.2, 0, 0]} />
      <Cube position={[1.2, 0, 0]} />
    </Canvas>
  )
}

export default CubeIndex
