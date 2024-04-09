/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: DatSketch (https://sketchfab.com/DatSketch)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/apple-iphone-13-pro-max-4328dea00e47497dbeac73c556121bc9
title: Apple iPhone 13 Pro Max
*/

import React, { useRef, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function Model2({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/scene.gltf");

  let camera = useThree((state) => state.camera);
  console.log(camera);
  useLayoutEffect(() => {
    camera.position.set(-0.1, 0.4, 5);
    materials.Body.color.set("#9BB5CE");
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group scale={100}>
            <mesh
              geometry={nodes.Body_Mic_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Body_Bezel_0.geometry}
              material={materials.Bezel}
            />
            <mesh
              geometry={nodes.Body_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              geometry={nodes.Body_Wallpaper_0.geometry}
              material={materials.Wallpaper}
            />
            <mesh
              geometry={nodes.Body_Camera_Glass_0.geometry}
              material={materials.Camera_Glass}
            />
            <mesh
              geometry={nodes.Body_Lens_0.geometry}
              material={materials.Lens}
            />
            <mesh
              geometry={nodes.Body_Material_0.geometry}
              material={materials.Material}
            />
            <mesh
              geometry={nodes.Camera_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              geometry={nodes.Camera_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              geometry={nodes.Camera_Camera_Frame001_0.geometry}
              material={materials["Camera_Frame.001"]}
            />
            <mesh
              geometry={nodes.Camera_Mic_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Body001_Screen_Glass_0.geometry}
              material={materials.Screen_Glass}
            />
            <mesh
              geometry={nodes.Button_Frame_0.geometry}
              material={materials.Frame}
            />
            <mesh
              geometry={nodes.Circle003_Frame_0.geometry}
              material={materials.Frame}
            />
            <mesh
              geometry={nodes.Apple_Logo_Logo_0.geometry}
              material={materials.Logo}
            />
            <mesh
              geometry={nodes.Camera001_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              geometry={nodes.Camera001_Gray_Glass_0.geometry}
              material={materials.Gray_Glass}
            />
            <mesh
              geometry={nodes.Camera001_Flash_0.geometry}
              material={materials.Flash}
            />
            <mesh
              geometry={nodes.Camera001_Port_0.geometry}
              material={materials.Port}
            />
            <mesh
              geometry={nodes.Camera001_Camera_Frame_0.geometry}
              material={materials.Camera_Frame}
            />
            <mesh
              geometry={nodes.Camera001_Camera_Glass_0.geometry}
              material={materials.Camera_Glass}
            />
            <mesh
              geometry={nodes.Camera001_Lens_0.geometry}
              material={materials.Lens}
            />
            <mesh
              geometry={nodes.Camera001_Black_Glass_0.geometry}
              material={materials.Black_Glass}
            />
            <mesh
              geometry={nodes.Camera003_Material002_0.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              geometry={nodes.Frame_Frame_0.geometry}
              material={materials.Frame}
            />
            <mesh
              geometry={nodes.Frame_Frame2_0.geometry}
              material={materials.Frame2}
            />
            <mesh
              geometry={nodes.Frame_Port_0.geometry}
              material={materials.Port}
            />
            <mesh
              geometry={nodes.Frame_Antenna_0.geometry}
              material={materials.Antenna}
            />
            <mesh
              geometry={nodes.Frame_Mic_0.geometry}
              material={materials.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
