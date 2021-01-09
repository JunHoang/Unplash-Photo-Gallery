import React, { useState } from "react";
import PropTypes from "prop-types";

function Image({ index, image, handleRemove,show }) {
  const [IsHovering, setIsHovering] = useState(false);

  return (
      <div
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <i
          className={`fas fa-times color-tomato absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${
            IsHovering ? "" : "hidden"
          }`}
          onClick={() => handleRemove(index)}
        ></i>
        <img
          onClick={show}
          src={image}
          width="100%"
          height="auto"
        />
    </div>
  );
};

Image.propTypes = {
  show: PropTypes.func,
  index: PropTypes.number,
  handleRemove: PropTypes.func,
  image: PropTypes.string
}

export default Image;
