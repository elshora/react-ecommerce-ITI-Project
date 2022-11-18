import React from "react";
import Ads from "../components/Ads";
import ContactData from "../components/ContactData";
import ContactForm from "../components/ContactForm";
import MyHeader from "../components/MyHeader";
import SubTitle from "../components/SubTitle";

export default function ContactUs() {
  return (
    <>
      <MyHeader />
      <SubTitle />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <ContactForm />
          </div>
          <div className="col-lg-6 col-md-12">
            <ContactData />
          </div>
        </div>
      </div>
      <Ads />
    </>
  );
}
