import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import Lights from "./Lights";
import { Suspense, useEffect, useRef } from "react";
import Loader from "./Loader";
import IPhone from './IPhone';
import * as THREE from 'three'
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";


export default function ModelView({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) {
  
  return (
    <Canvas id={gsapType} style={{ width: "100%", height: '100%', position: 'absolute', right: index === 2 ? '-100%' : '' }}>
      <group >
        <ambientLight intensity={20} />
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <Lights />
        <OrbitControls 
          makeDefault
          ref={controlRef}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          target={new THREE.Vector3(0, 0 ,0)}
          onEnd={() => setRotationState(controlRef?.current.getAzimuthalAngle())}
        /> 

        <group ref={groupRef} name={`${index === 1} ? 'small' : 'large`} position={[0,0,0]}>
          <Suspense fallback={<Loader />}>
            <IPhone 
              scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
              item={item}
              size={size}
            />
          </Suspense>
        </group>
      </group>
    </Canvas>
  );
}
