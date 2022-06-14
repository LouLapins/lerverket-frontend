import React from 'react'
import { motion } from "framer-motion";

const pageVariants = {
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

export default function PageAnimation(props: any) {
    return (
        <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
        {props.children}
        </motion.div>
    )
}
