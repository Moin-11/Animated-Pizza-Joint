import React, { useEffect } from "react";
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
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },

  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const childVariants = {
  init: {
    opacity: 0,
  },
  play: {
    opacity: 1,
  },
};
const Order = ({ pizza, setModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setModal(true);
    }, 5000);
  }, [setModal]);
  return (
    <motion.div
      variants={containerVars}
      initial="init"
      animate="play"
      exit="exit"
      className="container order"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div variants={childVariants} key={topping}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
