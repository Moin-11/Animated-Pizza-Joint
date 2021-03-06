import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Base from "./components/base";
import Toppings from "./components/toppings";
import Order from "./components/order";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/modal";

const App = () => {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setModal] = useState(false);
  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Modal showModal={showModal} setModal={setModal} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          setModal(false);
        }}
      >
        <Switch location={location} key={location.key}>
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza} />
          </Route>
          <Route path="/order">
            <Order pizza={pizza} setModal={setModal} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
