import React from "react";
import "../css/ads.css";
export default function Ads() {
  return (
    <>
      <section className="ads">
        <div className="container my-5 py-5">
          <div className="row text-center ">
            <div className="col-lg-4 my-3">
              <h3 className="text-capitalize mb-3">Free Delivery</h3>
              <p className="text-muted px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, excepturi at. Voluptatum distinctio excepturi
                perspiciatis animi!
              </p>
            </div>
            <div className="col-lg-4 my-3">
              <h3 className="text-capitalize mb-3">90 Days return</h3>
              <p className="text-muted px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, excepturi at. Voluptatum distinctio excepturi
                perspiciatis
              </p>
            </div>
            <div className="col-lg-4 my-3">
              <h3 className="text-capitalize mb-3">Secure</h3>
              <p className="text-muted px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, excepturi at. Voluptatum distinctio
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
