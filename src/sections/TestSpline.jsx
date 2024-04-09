import React from "react";
import Spline from "@splinetool/react-spline";

const TestSpline = () => {
  return (
    <div style={{ position: "relative", zIndex: 10 }}>
      <Spline scene="https://prod.spline.design/WOVgfJnMqBxoEila/scene.splinecode" />
    </div>
  );
};

export default TestSpline;
