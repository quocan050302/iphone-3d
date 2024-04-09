import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import Quote from "./sections/Quote";
import { GlobalStyle } from "./styles/GlobalStyle";
import ProcessorSection from "./sections/ProcessorSection";
import BatterySection from "./sections/BatterySection";
import ColorSection from "./sections/ColorSection";
import CameraSection from "./sections/CameraSection";
import PricingSection from "./sections/PricingSection";

import { ColorContextProvider } from "./context/ColorContext";
import ReplaceIphone from "./sections/ReplaceIphone";
import { Shapes } from "./sections/Shapes";
import TestSpline from "./sections/TestSpline";

function App() {
  return (
    <>
      <GlobalStyle />
      <Quote />
      <PhoneModel />
      <HeroSection />
      <DesignSection />
      <DisplaySection />
      <ProcessorSection />
      <BatterySection />
      <ColorContextProvider>
        <ColorSection />
        <CameraSection />
        {/* <PricingSection /> */}
      </ColorContextProvider>
      <ReplaceIphone/>
      <TestSpline/>
      {/* <Shapes/> */}
    </>
  );
}

export default App;