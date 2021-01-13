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

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      variants={containerVars}
      initial="init"
      animate="play"
      exit="exit"
      className="toppings container"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              transition={{ type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.3, color: "#F8E112", originX: 0 }}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={buttonvariants} whileHover="hover">
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
