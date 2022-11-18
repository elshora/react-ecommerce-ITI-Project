import React from "react";
import "../css/footer.css";
import MyLink from "./dumb/MyLink";
import NormalBtn from "./dumb/NormalBtn";
export default function MyFooter() {
  let links = [
    {
      id: 1,
      title: "home",
    },
    {
      id: 2,
      title: "shop",
    },
    {
      id: 3,
      title: "contact",
    },
    {
      id: 4,
      title: "about",
    },
  ];
  let helpLinks = [
    {
      id: 5,
      title: "Payment Options",
    },
    {
      id: 6,
      title: "Orders",
    },
    {
      id: 7,
      title: "Privacy Policies",
    },
  ];
  return (
    <>
      <footer className="text-center text-lg-start bg-white">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Shopping Smart</h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 text-muted">
                  Pages
                </h6>
                {links.map((link) => (
                  <p className="mb-4" key={link.id}>
                    <MyLink link={link.title} />
                  </p>
                ))}
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 text-muted">Help</h6>
                {helpLinks.map((link) => (
                  <p className="mb-4" key={link.id}>
                    <MyLink link={link.title} />
                  </p>
                ))}
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4 text-muted">
                  newsletter
                </h6>
                <form className="form-inline my-2 my-lg-0">
                  <input
                    type="email"
                    placeholder="Type your Email Address"
                    aria-label="email"
                  />
                  <NormalBtn btnTitle="subscribe" />
                </form>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          <span>© 2022 </span>
          <span className="text-reset fw-bold">Shopping Smart</span>
        </div>
      </footer>
    </>
  );
}
