import React from "react";

export default function ImageTap({ item }) {
  let { image } = item;
  return (
    <div className="col-12 col-md-6">
      <img
        src={`../${image}`}
        alt={item.title}
        width="100%"
        className="rounded float-center"
      />
    </div>
  );
}
