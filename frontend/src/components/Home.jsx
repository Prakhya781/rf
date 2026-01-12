import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Counter from "./Counter";
import About from "./About";
import Story from "./Story";
import ExploreFoods from "./ExploreFoods";
import Testimonial from "./Testimonial";
import Team from "./Team";
import BookFood from "./BookFood";
import DownloadApp from "./DownloadApp";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Counter />
      <About />
      <Story />
      <ExploreFoods />
      <Testimonial />
      <Team />
      <BookFood />
      <DownloadApp />
      <Footer />
    </>
  );
};

export default Home;
