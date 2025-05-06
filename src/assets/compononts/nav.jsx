import React from 'react'
import { motion } from "framer-motion"
const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
}
  

function nav() {
  return (
    <div className='akki'>
        <div className='logo11'>
        <motion.img
  whileHover={{ scale: 1.2, rotate: 90 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }} src="public/logo.png" alt="" 
/>
        </div>
        <div className='links121'>
        <img className='img_1231' src="shubh.png" alt="" />
        </div>
<div>
    {['services', 'about us','Insights'].map((item,index)=>(
        <a href='#' className='links_aa'>{item}</a>
    ))}
</div>
    </div>
  )
}

export default nav