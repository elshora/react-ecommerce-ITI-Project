import React from "react";
import { useLocation } from "react-router-dom";
import "../css/header.css";

export default function MyHeader() {
  let { pathname } = useLocation();
  let title = pathname.replace("/", "");
  return (
    <>
      <header className="head-sec">
        <div className="head-contain text-capitalize">
          <div>
            <h2 className="display-3 fw-bold ">{title}</h2>
            <p className="fs-4">home &gt; {title}</p>
          </div>
        </div>
      </header>
    </>
  );
}
