// import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "../utils";

import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animations";
import styled from "styled-components";



const Section = styled.section`
  position: relative;
  background-color: rgb(0 0 0 / 1);
  z-index: 100;
  padding-top: 80px; /* Equivalent to py-20 in Tailwind */
  padding-bottom: 80px; /* Equivalent to py-20 in Tailwind */
  padding-left: 20px; /* Equivalent to px-5 in Tailwind */
  padding-right: 20px; /* Equivalent to px-5 in Tailwind */

  @media (min-width: 640px) {
    padding-top: 128px; /* Equivalent to sm:py-128 in Tailwind */
    padding-bottom: 128px; /* Equivalent to sm:py-128 in Tailwind */
    padding-left: 40px; /* Equivalent to sm:px-10 in Tailwind */
    padding-right: 40px; /* Equivalent to sm:px-10 in Tailwind */
  }
`;
const ScreenMaxWidth = styled.div`
  max-width: 100%; /* Add your max-width value here */
  margin-left: auto;
  margin-right: auto;
`;
const SectionHeading = styled.h1`
  font-size: 2.5rem; /* Add your font-size value here */
  font-weight: bold; /* Add your font-weight value here */
  margin-top: 0;
  margin-bottom: 1rem; /* Add your margin-bottom value here */
  color: aquamarine;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.25rem; /* Add your margin-top value here */
`;

const ModelContainer = styled.div`
  width: 100%;
  height: 75vh; /* Default height for small screens */
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    height: 90vh; /* Height for medium screens and above */
  }
`;

const ContentWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const Text = styled.p`
  font-size: 0.875rem; /* Equivalent to text-sm in Tailwind */
  font-weight: 300; /* Equivalent to font-light in Tailwind */
  text-align: center;
  margin-bottom: 1.25rem; /* Equivalent to mb-5 in Tailwind */
  color: #fff
`;

const FlexCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColorContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #42424570;
  padding: 1rem; /* Equivalent to px-4 and py-4 in Tailwind */
  border-radius: 9999px; /* Equivalent to rounded-full in Tailwind */
  backdrop-filter: blur(10px); /* Equivalent to backdrop-blur in Tailwind */
`;

const ColorOption = styled.li`
  width: 1.5rem; /* Equivalent to w-6 in Tailwind */
  height: 1.5rem; /* Equivalent to h-6 in Tailwind */
  border-radius: 50%; /* Equivalent to rounded-full in Tailwind */
  margin-right: 0.5rem; /* Equivalent to mx-2 in Tailwind */
  margin-left: 0.5rem;
  cursor: pointer;
  list-style-type: none;
`;

const SizeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem; /* Equivalent to p-1 in Tailwind */
  border-radius: 9999px; /* Equivalent to rounded-full in Tailwind */
  background-color: #42424570;

  backdrop-filter: blur(10px); /* Equivalent to backdrop-blur in Tailwind */
  margin-left: 0.75rem; /* Equivalent to ml-3 in Tailwind */
  gap: 0.25rem; /* Equivalent to gap-1 in Tailwind */
`;

const SizeButton = styled.span`
  width: 2.5rem; /* Equivalent to w-10 in Tailwind */
  height: 2.5rem; /* Equivalent to h-10 in Tailwind */
  font-size: 0.875rem; /* Equivalent to text-sm in Tailwind */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white; /* Equivalent to bg-white in Tailwind */
  color: black; /* Equivalent to text-black in Tailwind */
  border-radius: 9999px; /* Equivalent to rounded-full in Tailwind */
  transition: all 0.3s; /* Equivalent to transition-all in Tailwind */
`;

export default function ReplaceIphone() {

  const [size, setSize] = useState('small');
  const [model, setModel] = useState({
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
    img: yellowImg,
  })

  // Camera control for the modal view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // Modal
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
    if(size === 'large') {
      animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
        transform: 'translateX(-100%)',
        duration: 2
      })
    }

    if(size ==='small') {
      animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
        transform: 'translateX(0)',
        duration: 2
      })
    }
  }, [size])

//   useGSAP(() => {
//     gsap.to('#heading', { y: 0, opacity: 1 })
//   }, []);

  return (
    <Section>
      <ScreenMaxWidth>
        <SectionHeading id="heading">
          Take a closer look.
        </SectionHeading>
        <FlexContainer>
          <ModelContainer>
            <ModelView 
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />  

            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />
            
          </ModelContainer>
          <ContentWrap>
            <Text>{model.title}</Text>
            <FlexCenterContainer>
              <ColorContainer>
                {models.map((item, i) => (
                  <ColorOption key={i} style={{ backgroundColor: item.color[0] }} onClick={() => setModel(item)} />
                ))}
              </ColorContainer>

              <SizeButtonContainer>
                {sizes.map(({ label, value }) => (
                  <SizeButton key={label} style={{ backgroundColor: size === value ? 'white' : 'transparent', color: size === value ? 'black' : 'white'}} onClick={() => setSize(value)}>
                    {label}
                  </SizeButton>
                ))}
              </SizeButtonContainer>
            </FlexCenterContainer>
          </ContentWrap>
        </FlexContainer>
      </ScreenMaxWidth>
    </Section>
  )
}
