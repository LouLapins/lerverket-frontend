import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.5,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const dotVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const DotTransition = {
  duration: 1,
  repeat: Infinity,
  ease: "anticipate",
};

const loaderDot = (
  <motion.span
    className="loader-dot"
    variants={dotVariants}
    transition={DotTransition}
  />
);

export default function Loader() {
  return (
    <div className="loader">
      <motion.div
        className="loader-container"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {loaderDot}
        {loaderDot}
        {loaderDot}
      </motion.div>
    </div>
  );
}
