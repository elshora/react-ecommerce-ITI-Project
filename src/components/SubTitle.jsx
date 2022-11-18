import React from "react";
import { useLocation } from "react-router-dom";

export default function SubTitle() {
  let loc = useLocation();
  let data = {
    title: "",
    desc: " ",
  };
  switch (loc.pathname) {
    case "/about":
      data = {
        title: "Hello From About",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corrupti autem dicta tempora, natus voluptatibus dolore doloremque labore facere quos? Sit a fuga, blanditiis totam nostrum accusamus voluptatibus porro alias",
      };
      break;
    case "/contact":
      data = {
        title: "Get In touch with us",
        desc: "For More Information About Our products and services, please feal free to drop us an email our staff  always be thher to help you Out. Dot not hesitate",
      };
      break;

    default:
      break;
  }
  return (
    <div className="container text-center py-5 my-5 ">
      <h3 className="fw-bold text-capitalize display-5">{data.title}</h3>
      <p className="text-muted w-75 mx-auto px-lg-5 px-xs-0">{data.desc}</p>
    </div>
  );
}
