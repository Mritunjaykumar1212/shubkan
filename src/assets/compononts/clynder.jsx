import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from "three";

function Clynder() {
  let tex = useTexture("./poster.png");
  let cyl = useRef(null);
  const [hovered, setHovered] = useState(false); // State to track hover

  useFrame((state, delta) => {
    if (cyl.current) {
      cyl.current.rotation.y += hovered ? delta * 0.5 : delta * 0.1; // Faster rotation on hover
    }
  });

  return (
    <mesh 
      ref={cyl}
      onPointerOver={() => setHovered(true)}   // Detect hover start
      onPointerOut={() => setHovered(false)}  // Detect hover end
    >
      <cylinderGeometry args={[1,3,3,3.2,3.3,4,3,3,3,50,50,true]} />
      <meshBasicMaterial transparent map={tex} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default Clynder;
