import React from "react";
import Bar from "../components/Bar";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/ListNavbar";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Bar></Bar>
      <Slider />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
