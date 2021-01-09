import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import useTFClassify from "../utils/hooks/useTFClassify";

function Image({ index, image, handleRemove, show }) {
  const [IsHovering, setIsHovering] = useState(false);
  const imageRef = useRef();
  const [predict, predictions, setPredictions, isLoading] = useTFClassify();

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <i
        className={`fas fa-times color-tomato absolute right-0 cursor-pointer opacity-25 hover:opacity-100 text-xl ${
          IsHovering ? "" : "hidden"
        }`}
        onClick={() => handleRemove(index)}
      ></i>
      {(predictions.length > 0 || isLoading) && (
        <span className="absolute bg-gray-800 text-white rounded-lg shadow px-2 left-0 ml-6" onClick={()=>setPredictions([])}>
          {isLoading && <p>Waiting results...</p>}
          {predictions.map((prediction) => (
            <div className="flex justify-between">
              <p>{prediction.className}</p>
              <p>{Math.floor(prediction.probability * 100)}%</p>
            </div>
          ))}
        </span>
      )}
      <i
        className={`fas fa-search color-tomato absolute left-0 cursor-pointer opacity-25 hover:opacity-100 text-xl ${
          IsHovering ? "" : "hidden"
        }`}
        onClick={() => predict(imageRef.current)}
      ></i>
      <img
        ref={imageRef}
        onClick={show}
        src={image}
        width="100%"
        height="auto"
        crossOrigin="anonymous"
      />
    </div>
  );
}

Image.propTypes = {
  show: PropTypes.func,
  index: PropTypes.number,
  handleRemove: PropTypes.func,
  image: PropTypes.string,
};

export default Image;
