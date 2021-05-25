import React, { useState, useEffect } from "react";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);
    // the return function will be invoked when the component is removed from the tree;
    // if you don't remove the eventlistener, it will listen for keydown even the component is cleared.
  }, []);
};

export default function App() {
  useAnyKeyToRender();

  const words = ["ganr", "power"];
  //a new array is declared with each render,
  //js assums words has changed with any keydown  
  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return <h1>Open the console</h1>;
}
