import React from "react";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div className="container text-center my-5 py-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-1 my-4">Oops!</h1>
          <h2 className="display-2 fw-bold my-4 text-danger">404 Not Found</h2>
          <div className="lead fs-4 text-muted">
            Sorry, an error has occured, Requested page not found!
          </div>
          <div className="error-actions">
            <NavLink to="/">
              <button className="btn btn-dark my-4 mx-3">Take Me Home</button>
            </NavLink>
            <NavLink to="/contact">
              <button className="btn btn-outline-dark my-4 mx-3">
                Contact Support
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
