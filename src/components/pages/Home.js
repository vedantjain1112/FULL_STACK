import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Search from "../Search";
import Featured from "../Featured";
import CategorySearch from "../CategorySearch";
import Footer from "../Footer";
import Footer2 from "../Footer2";
import Carousel from "../Carousel";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    //eslint-disable-next-line
  }, []);

  const slides = [
    {
      image:
        "https://bagallery.com/cdn/shop/collections/chanel-perfume-banner-1024x384.jpg?v=1674110826&width=2048",
      caption: "Slide 1",
    },
    {
      image:
        "https://lvoso.files.wordpress.com/2013/05/louis_vuitton_outlet_banner1.jpg",
      caption: "Slide 2",
    },
    {
      image:
        "https://www.dubaidutyfree.com/file/general/GUCCI_TOP_BANNER_2.jpg",
      caption: "Slide 3",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/58e9b976e58c6214d4b74edc/1588646877386-993LXU0L0I470KZK4PX1/Banner-with+logo.jpg?format=2500w",
      caption: "Slide 4",
    },
    {
      image:
        "https://www.boat-lifestyle.com/cdn/shop/articles/Banner_2_1280x.png?v=1653120525",
      caption: "Slide 5",
    },
    {
      image:
        "https://globalprimenews.com/wp-content/uploads/2022/02/Alexa-4th-anniversary-deals-777x437.jpg",
      caption: "Slide 6",
    },
    {
      image:
        "https://images.vexels.com/content/126443/preview/macbook-pro-touch-bar-banner-fedf81.png",
      caption: "Slide 7",
    },
    {
      image:
        "https://cdn.tgdd.vn/Files/2021/10/19/1391493/cach-tai-hinh-nen-macbook-pro-14-inch-va-macbook-pro-16-inch_1280x720-800-resize.jpg",
      caption: "Slide 8",
    },
    {
      image:
        "https://static.lenovo.com/cap/Slim-7-Carbon-landing/images/v2/banner01-bg.jpg",
      caption: "Slide 9",
    },
    {
      image:
        "https://couponswala.com/blog/wp-content/uploads/2023/01/paradyes-hair-colour-1.jpg",
      caption: "Slide 10",
    },
  ];

  return (
    <>
      <Navbar />
      <Search />
      <Carousel slides={slides} />
      <Featured />
      <CategorySearch />
      <Footer />
      <Footer2 />
    </>
  );
};

export default Home;
