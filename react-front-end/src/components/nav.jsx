import React from "react";
import { ReactComponent as CarSvg } from "./imgs/car.svg";
import './nav.css';

export default function Nav() {

  return (
      <div className="nav">
        <div className="car">
          <CarSvg />
        </div>
        <h1>All  Vehicles</h1>
      </div>
  );
}
