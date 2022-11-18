import React from "react";

export default function NormalBtn({ btnTitle }) {
  return (
    <button className="py-1 px-0  btn border-bottom fs-5 text-capitalize bg-transparent">
      {btnTitle}
    </button>
  );
}
