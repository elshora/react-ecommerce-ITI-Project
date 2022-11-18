import React from "react";
import "../../css/home.css";
import NormalBtn from "../dumb/NormalBtn";
export default function HomeTwo() {
  return (
    <section className="home-two py-5">
      <div className="container text-center text-lg-start">
        <div className="row">
          <div className="col-lg-6 col-12">
            <img
              className="float-center"
              src="./images/table.png"
              alt=""
              width="300px"
            />
            <h3 className="fw-bold">Side table</h3>
            <NormalBtn btnTitle="view more" />
          </div>
          <div className="col-lg-6 col-12">
            <img
              className=" float-center"
              src="./images/comp-chair.png"
              alt=""
              width="300px"
            />
            <h3 className="fw-bold">Side table</h3>
            <NormalBtn btnTitle="view more" />
          </div>
        </div>
      </div>
    </section>
  );
}
