import React from "react";
import GradientsList from "./GradientsList";
import GradientsSelect from "./GradientsSelect";

const Gradients = () => {
  return (
    <div className="container my-4">
      <h1 className="text-center">React Gradients</h1>
      <GradientsSelect />
      <GradientsList />
    </div>
  );
};

// export default Gradients
