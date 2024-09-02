import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import Cyl from "./Cyl";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const App = () => {
  let textscrollRef = useRef(null);

  useGSAP(() => {
    gsap.to(textscrollRef.current, {
      transform: "translateX(-25%)",
      duration: 10,
      repeat: -1,
      // delay: 0.3,
      ease: "none",
    });
  });
  return (
    <>
      <div className="w-full h-[85%] bg-transparent ">
        <Canvas camera={{ fov: 35 }}>
          <OrbitControls />
          <ambientLight />
          <Cyl />
          <EffectComposer>
            <Bloom
              mipmapBlur // Enables or disables mipmap blur.
              intensity={11.0} // The bloom intensity.
              luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
              luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
            />
          </EffectComposer>
        </Canvas>
      </div>

      <p
        className="w-[150%] bgtext px-1 h-20 absolute bottom-0  overflow-hidden text-white font-bold text-3xl py-1 bg-transparent"
        ref={textscrollRef}
      >
        GSAP LOCOMOTIVE JS REACT THREEJS DREI GSAP LOCOMOTIVE JS REACT THREEJS
        DREI GSAP LOCOMOTIVE JS REACT THREEJS DREI GSAP
      </p>
    </>
  );
};

export default App;
