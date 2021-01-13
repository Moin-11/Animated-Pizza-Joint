import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVars = {
  init: {
    opacity: 0,
    x: "100vw",
  },
  play: {
    opacity: 1,
    x: 0,

    transition: {
      delay: 0.5,
      type: "spring",
    },
  },

  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const nextVariants = {
  init: {
    x: "-100vw",
  },
  play: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: "120",
    },
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
    scale: 1.2,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: Infinity,
    },
  },
};
const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      variants={containerVars}
      initial="init"
      animate="play"
      exit="exit"
      className="base container"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              transition={{ type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.3, color: "#F8E112", originX: 0 }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div variants={nextVariants} className="next">
          <Link to="/toppings">
            <motion.button variants={buttonvariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
