import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = (props) => {
  //change texture in constants
  const [decal] = useTexture([props.imgUrl]);
  return (
    // float makes content float or hover
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh castShadow receiveShadow scale={2.75}>
        <hemisphereLight intensity={2} groundColor='black'/>
        <pointLight intensity={20} position={[2, -1.5, 0]}/>
        
        {/* the ball  */}
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial color="#fff8eb" polygonOffset  polygonOffsetFactor={-5} flatShading/>
        {/* the rotation is to flip the texture horizontally */}
        <Decal map={decal} position={[0,0,1]} rotation={[2* Math.PI,0,6.25]} flatShading/>
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return(
    <Canvas frameloop='demand' gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}/>
        <Ball imgUrl={icon}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas