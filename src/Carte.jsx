import React from "react";
import "./App.css";

function Carte({ gradient, index }) {
  // 🟡 On extrait les couleurs du dégradé
  const matches = gradient.match(/#([a-fA-F0-9]{6})/g);
  const codeCouleur = matches ? matches.join(" - ") : "";

  return (
    <div className="carte" style={{ background: gradient }}>
      <div className="carte-label">Palette {index + 1}</div>
      <div className="carte-code">{codeCouleur}</div>
    </div>
  );
}
export default Carte;

