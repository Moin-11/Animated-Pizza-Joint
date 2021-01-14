import React from "react";

import { motion } from "framer-motion";

const svgvariants = {
  init: { rotate: -180 },
  play: {
    rotate: 0,

    transition: {
      duration: 1,
    },
  },
};

const pathvariants = {
  init: {
    opacity: 0,
    pathLength: 0,
  },
  play: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <header>
      <motion.div
        drag
        dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
        dragElastic={0.7}
        className="logo"
      >
        <motion.svg
          variants={svgvariants}
          initial="init"
          animate="play"
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            variants={pathvariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathvariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </motion.div>
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        className="title"
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;
