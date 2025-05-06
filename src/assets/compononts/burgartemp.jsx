import React from 'react'
import { motion } from "framer-motion"
function burgartemp() {
  return (
    <div
    className='burger_qq'>
     <a >
     <motion.img  whileHover={{ scale: 1.2, rotate: 90 }}
    whileTap={{
      scale: 2.1,
      rotate: 360,
      borderRadius: "100%"
    }}  src="burgar.png"alt=""/>
     </a>
    </div>
  )
}

export default burgartemp