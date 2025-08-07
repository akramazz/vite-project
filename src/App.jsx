import React, { useState, useEffect } from "react";
import "./App.css";
import Carte from "./Carte";

function App() {
  const [background, setBackground] = useState("");

  const gradients = [
    "linear-gradient(to right, #f40076, #df98fa)",
    "linear-gradient(to right, #f06966, #fad6a6)",
    "linear-gradient(to right, #ff0076, #590fb7)",
    "linear-gradient(to right, #9055ff, #13e2da)",
    "linear-gradient(to right, #0b63f6, #003cc5)",
    "linear-gradient(to right, #d6ff7f, #00b3cc)",
    "linear-gradient(to right, #8f8891ff, #1f1e1eff)",
    "linear-gradient(to right, #df98fa, #9055ff)",
    "linear-gradient(to right, #43cea2, #185a9d)",
    "linear-gradient(to right, #8360c3, #2ebf91)",
    "linear-gradient(to right, #f7971e, #ff3c00ff)",
    "linear-gradient(to right, #e96443, #904e95)",
  ];

  useEffect(() => {
    document.body.style.background = background;
  }, [background]);

  return (
    <div className="app-container">
      <h1>Palettes de Couleurs</h1>
      <div className="container">
        {gradients.map((gradient, index) => (
          <Carte
            key={index}
            gradient={gradient}
            index={index}
            onClick={() => setBackground(gradient)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;