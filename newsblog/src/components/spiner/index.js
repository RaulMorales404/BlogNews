import React from "react";
import './styles.css'
import { SpinnerDotted } from "spinners-react";
export default function Spiner() {
  return (
    <div className="container-spiner">
      <SpinnerDotted
        size={84}
        thickness={142}
        speed={146}
        color="rgba(238, 0, 72, 1)"
      />
    </div>
  );
}
