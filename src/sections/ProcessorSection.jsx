import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import a15 from "../assets/Images/A15-Bionic.jpg";
import gsap from "gsap";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--dark);
  color: var(--white);
  overflow: hidden;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: var(--fontBig);
  font-family: var(--fontL);
  z-index: 1;

  background-image: linear-gradient(90deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxl);
  }
`;

const glow = keyframes`
0%{
    box-shadow: 1px 1px 10px var(--white);
}
50%{
    box-shadow: 2px 2px 25px var(--white);
}
100%{
    box-shadow: 1px 1px 10px var(--white);
}
`;

const Processor = styled.div`
  width: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${glow} 3s ease infinite;
  padding: 0.5rem;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 48em) {
    display: none;
  }
`;

const Text = styled.div`
  font-size: var(--fontxs);
  color: var(--greyLight);
  width: 30%;
  height: 40vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    margin: 0.2rem 0;
    padding-left: 2rem;
  }

  @media screen and (max-width: 64em) {
    width: 50%;
  }
  @media screen and (max-width: 48em) {
    width: 100%;
    font-size: var(--fontxxs);
    span {
      width: 40%;
      padding-left: 1rem;
    }

    & > *:last-child {
      align-self: flex-end;
      padding-left: 0;
      padding-right: 1rem;
      text-align: right;
    }
  }
`;

const HoverReveal = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 101;
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
  border-radius: 0.25rem; /* Equivalent to rounded-lg in Tailwind */
  opacity: 1;
  pointer-events: none;
  transition-property: opacity, transform, background-color;
  transition-duration: 300ms;
  /* transform: translate3d(0) !important */
  &:hover {
    opacity: 1;
  }
`;

const ProcessorSection = () => {
  const revealRef = useRef(null);
  const component = useRef(null);
  const itemsRef = useRef(null);
  // const [currentItem, setCurrentItem] = useState(null);
  const [hovering, setHovering] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Animate list items with a stagger
    const items = itemsRef.current;
    if (items) {
      gsap.from(items, {
        opacity: 0,
        y: 20,
        duration: 1.3,
        ease: "elastic.out(1,0.3)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: items,
          start: "top bottom-=100px",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      });
    }
  }, [itemsRef]);

  useEffect(() => {
    // Mouse move event listener
    const handleMouseMove = (e) => {
      const mousePos = { x: e.clientX, y: e.clientY + window.scrollY };
      // Calculate speed and direction
      const speed = Math.sqrt(Math.pow(mousePos.x - lastMousePos.current.x, 2));

      // Animate the image holder
      const maxY = window.scrollY + window.innerHeight - 350;
      const maxX = window.innerWidth - 250;

      gsap.to(revealRef.current, {
        x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
        y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
        rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1), // Apply rotation based on speed and direction
        ease: "back.out(2)",
        duration: 1.3,
      });
      gsap.to(revealRef.current, {
        opacity: hovering ? 1 : 0,
        visibility: "visible",
        ease: "power3.out",
        duration: 0.4,
      });

      lastMousePos.current = mousePos;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hovering]);

  const onMouseEnter = () => {
    // setCurrentItem(index);
    setHovering(true);
  };

  const onMouseLeave = () => {
    setHovering(false);
  };

  useEffect(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <Section ref={component}>
      <Title>Fastest Processor</Title>
      <Processor id="chip" onMouseLeave={onMouseLeave}>
        <img
          src={a15}
          alt="A15 processor"
          onMouseEnter={onMouseEnter}
          ref={itemsRef}
        />
      </Processor>
      <Text>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit numquam quae nisi, dolore cum voluptatem cumque quo sit,
          consequuntur necessitatibus iste fuga assumenda deserunt aut omnis,
          quaerat aliquid optio veniam.
        </span>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit numquam quae nisi, dolore cum voluptatem cumque quo sit,
          consequuntur necessitatibus iste fuga assumenda deserunt aut.
        </span>
      </Text>
      <HoverReveal
        style={{
          backgroundImage: `url(${a15})`,
        }}
        ref={revealRef}
      ></HoverReveal>
    </Section>
  );
};

export default ProcessorSection;
