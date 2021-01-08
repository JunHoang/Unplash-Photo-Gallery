import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  return (
    <div className="flex h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -600 }}
        animate={{
          scale: 1.5,
          opacity: 1,
          y: 0,
          transition: { duration: 2 },
          rotate: 360,
        }}
        className="m-auto text-4xl"
      >
        Welcome Home!
      </motion.h1>
    </div>
  );
}
