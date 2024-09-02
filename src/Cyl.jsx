import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const Cyl = () => {
  let textRef = useRef(null);
  let texture = useTexture("./img2.png");
  //   texture.needsUpdate = true;
  useFrame((state, delta) => {
    textRef.current.rotation.y += delta;
  });

  return (
    <group rotation={[0, 1.2, 0.3]}>
      <mesh ref={textRef}>
        <cylinderGeometry args={[1, 1, 1, 70, 70, true]} />
        <meshStandardMaterial
          side={THREE.DoubleSide}
          transparent
          map={texture}
        />
      </mesh> 
    </group>
  );
};

export default Cyl;
