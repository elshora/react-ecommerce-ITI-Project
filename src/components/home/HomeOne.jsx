import React from "react";
import "../../css/home.css";
import NormalBtn from "../dumb/NormalBtn";
export default function HomeOne() {
  return (
    <>
      <section className="home-one py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                className="rounded float-left"
                src="./images/sofa.png"
                alt=""
                width="100%"
              />
            </div>
            <div className="col-lg-6 my-auto text-center">
              <p className="fs-5">New Arrivals</p>
              <h2 className="display-5 fw-bold">Asgaard sofa</h2>
              <NormalBtn btnTitle="view more" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
