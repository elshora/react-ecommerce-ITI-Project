import {
  faMapLocation,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ContactData() {
  return (
    <>
      <ul className="text-center text-md-center text-lg-start">
        <li className="d-flex flex-lg-row   flex-column py-2">
          <div className="pt-1">
            <FontAwesomeIcon icon={faMapLocation} className="px-3" />
          </div>
          <div>
            <h3 className="display-7 fw-bold">Adress</h3>
            <p>23 Alhekma st. Tanta, Gharbia, Egypt</p>
          </div>
        </li>
        <li className="d-flex flex-lg-row flex-column py-2">
          <div className="pt-1">
            <FontAwesomeIcon icon={faPhone} className="px-3" />
          </div>
          <div>
            <h3 className="display-7 fw-bold">Phone</h3>
            <p>
              Mobile +201021425286
              <br />
              Phone +040332506
            </p>
          </div>
        </li>
        <li className="d-flex flex-lg-row flex-column py-2">
          <div className="pt-1">
            <FontAwesomeIcon icon={faClock} className="px-3" />
          </div>
          <div>
            <h3 className="display-7 fw-bold">Working Time</h3>
            <p>
              Monday-Friday <time>9:00 - 22:00</time>
              <br />
              Saterday-Sunday <time>9:00 - 21:00</time>
            </p>
          </div>
        </li>
      </ul>
    </>
  );
}
