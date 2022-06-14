import React from 'react'
import { motion } from "framer-motion";

const loaderVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
    exit: {
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  };

export default function Loader() {
    return (
        <motion.div className='loader'
        variants={loaderVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
        </motion.div>
    )
}
