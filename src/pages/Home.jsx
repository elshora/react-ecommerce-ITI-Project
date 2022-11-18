import React from "react";
import HomeHeader from "../components/home/HomeHeader";
import HomeOne from "../components/home/HomeOne";
import HomeTwo from "../components/home/HomeTwo";
import Insta from "../components/home/Insta";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeTwo />
      <HomeOne />
      <Insta />
    </>
  );
}
