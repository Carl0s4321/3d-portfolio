import {React, Suspense, useEffect, useState} from 'react'
import { Canvas, events, extend } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({isMobile}) => {
  const computer = useGLTF('./spaceman/scene.gltf')
  return (
    <mesh>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
      {/* <spotLight position={[-20, 50, 10]} angle={0.12} penumbsra={1} intensity={100} castShadow shadow-mapSize={1024}/> */}
      <primitive object={computer.scene} 
        scale={isMobile? 0.4 : 1.75}
        position={isMobile? [0,-2,-0.63]:[0, -3.75, 0]} 
        rotation={[-0.01, -0.2, -0.1]}
        />
    </mesh> 
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);


  // basically changing isMobile
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    
    setIsMobile(mediaQuery.matches);
    // console.log("mediaQuery" , mediaQuery)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }


    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // remove listener when component is unmounted (treated back to desktop instead of mobile)
    // (cause we're using useeffect have to close the event listener)
    return()=>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return(
    <Canvas frameloop='demand' shadows camera={{position: [20,3,5], fov: 25}} gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI/2}/>
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas