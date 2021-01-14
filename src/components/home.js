import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import Loader from "./loader";
const containervariants = {
  init: {
    opacity: 0,
  },
  play: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const buttonvariants = {
  visible: {
    x: [-2, 2, -5, 7.5, -1, 2],
    transition: {
      delay: 2,
    },
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: Infinity,
    },
  },
};

const Home = () => {
  return (
    <motion.div
      variants={containervariants}
      initial="init"
      animate="play"
      exit="exit"
      className="home container"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button
          variants={buttonvariants}
          animate="visible"
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>

      <Loader />
    </motion.div>
  );
};

export default Home;
