import React from 'react'
import Nav from './assets/compononts/nav'
import Rolar from './assets/compononts/rolar'
import Role from './assets/compononts/role'
import Nextll from './assets/compononts/nextll'
import Burgartemp from './assets/compononts/burgartemp'
import About from './assets/compononts/about'
import Fld_mid from './assets/compononts/fld_mid'
import Clynder from './assets/compononts/clynder'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
   <Nav></Nav>
   <div data-scroll data-scroll-speed="-.9" className='clynder-2322'>
    <Canvas camera={{ fov:50}}>
        <OrbitControls></OrbitControls>
        <ambientLight color={"blue"} intensity={3.5}></ambientLight>
        <Clynder></Clynder>
        <EffectComposer>
        <Bloom
    intensity={0.3} // The bloom intensity.
    // blur kernel size
    luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
     // Enables or disables mipmap blur.
    
  />
        </EffectComposer>
     
    </Canvas>
    </div>
   <Rolar></Rolar>
   {/* <Burgartemp></Burgartemp> */}
   <Role></Role>
   <Fld_mid></Fld_mid>
   <About></About>
   <Nextll></Nextll>
    </>
  )
}

export default App