import React from "react";
import MyHeader from "../components/MyHeader";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <>
      <MyHeader />
      <div className="container">
        <RegisterForm />
      </div>
    </>
  );
}
