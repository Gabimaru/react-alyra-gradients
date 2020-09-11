import React from "react";
import Gradient from "./Gradient/Gradient";

const GradientsList = (props) => {
  console.log(props);
  const { list } = props;
  return (
    <ul className="row list-unstyled">
      {list.map((el) => {
        const { name, start, end } = el;
        return (
          <Gradient key={name} colorStart={start} colorEnd={end} name={name} />
        );
      })}
    </ul>
  );
};

export default GradientsList;
