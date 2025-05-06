import React from 'react'
import { motion } from "framer-motion"
function role() {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed=".2"className='role_100'>
        {/* <motion.img initial={{x:100}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} src="burgar.png" alt="" /> */}
        <motion.h1  initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}}> go for vegan say no cruelty</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} > go for vegan say no cruelty</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} > go for vegan say no cruelty</motion.h1>
    </div>
  )
}

export default role