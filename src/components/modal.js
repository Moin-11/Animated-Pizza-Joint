import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdropvariants = {
  init: { opacity: 0 },
  play: { opacity: 1 },
};
const modalvariants = {
  init: { y: "-100vh", opacity: 0 },
  play: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Modal = ({ showModal, setModal }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropvariants}
          initial="init"
          animate="play"
          exit="init"
        >
          <motion.div className="modal" variants={modalvariants}>
            <p>Want to make another Pizza?</p>
            <Link to="/">
              <button
                onClick={() => {
                  setModal(false);
                }}
              >
                Start Again
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
