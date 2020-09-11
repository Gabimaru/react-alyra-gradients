import React from "react";
const GradientTag = ({ tags }) => {
  return (
    <div className="mt-3">
      <button className="btn btn-sm mr-2 bg-dark text-white" type="button">
        {[tags]}
      </button>
    </div>
  );
};

export default GradientTag;
