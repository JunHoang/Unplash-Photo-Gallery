import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export default function Image({ index, image, handleRemove }) {
  const [IsHovering, setIsHovering] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  return (
    <div className=" flex w-1/5 p-1 border justify-center">
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
          onClick={() => setShowPreview(true)}
          src={image}
          width="100%"
          height="auto"
        />
      </div>
      <AnimatePresence>
        {showPreview && (
          <motion.section
            exit={{ opacity: 0 }}
            className="fixed w-full h-full flex justify-center items-center top-0 left-0 z-40"
            onClick={() => setShowPreview(false)}
          >
            <div className="bg-white">
              <img src={image} width="600" height="auto" />
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
