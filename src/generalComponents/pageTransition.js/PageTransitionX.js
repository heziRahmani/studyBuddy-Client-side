import React from "react";
import { motion } from "framer-motion"; //helps with page transitions
export default function PageTransitionX({ children }) {
  const animations = {
    initial: { opasity: 0, scale: 0 },
    animate: { opasity: 1, scale: 1 },
    exit: { opasity: 0, scale: 0 },
  };
  return (
    <motion.div
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  );
}
