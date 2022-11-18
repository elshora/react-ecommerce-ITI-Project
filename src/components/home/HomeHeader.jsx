import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/homeHeader.css";
import NormalBtn from "../dumb/NormalBtn";
export default function HomeHeader() {
  return (
    <>
      <header className="home-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                className="rounded float-left"
                src="./images/chair.png"
                alt=""
                width="100%"
              />
            </div>
            <div className="col-lg-6 my-auto">
              <h2 className="display-2">Rocket single seater</h2>
              <NavLink to="/shop">
                <NormalBtn btnTitle="shop now" />
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
