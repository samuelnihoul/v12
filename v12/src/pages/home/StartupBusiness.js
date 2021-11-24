import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../../components/Loader/Loader";
import dataStartup from "../../data/Slider/startup-business-data.json";
import serviceOneImg from "../../assets/images/startup-bg-left.jpg";
import HeaderOne from "../../components/Header/HeaderOne";
import HeroVideo from "../../components/Hero/HeroVideo";
import Welcome from "../../components/WelcomeSection/Welcome";
import OurServices from "../../components/OurServices/OurServices";
import CounterOne from "../../components/Counters/CounterOne";
import OurServicesTwo from "../../components/OurServices/OurServicesTwo";
import TestimonialsTwo from "../../components/Testimonials/TestimonialsTwo";
import BlogSlider from "../../components/Blog/BlogSlider";
import FooterOne from "../../components/Footer/FooterOne";
import Portfolio from "../../components/Portfolio/Portfolio";
import HeadingSection from "../../components/HeadingSection/HeadingSection";

const StartupBusiness = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Loader>
      <HeaderOne />
      <HeroVideo data={dataStartup} />
      <Welcome title="Who We Are" tagline="The way we work is harmonious">
        We are a CO2eq offset marketplace. This is the one stop shop for all planet healers and nature stakeholders (everybody?). Buy and sell offsets with peace: get certified with ease and funded with grace.
      </Welcome>
      <OurServices
        title="What We Do"
        tagline="We develop big ideas that sell."
        serviceImg={serviceOneImg}
      />
      <CounterOne type="wide" />
      <OurServicesTwo title="About Us" tagline="Part of your success" />
      <Portfolio columns="4" layout="wide" filter="true">
        <HeadingSection title="Our Work" />
      </Portfolio>
      <TestimonialsTwo title="Testimonials" tagline="Happy clients" />
      <BlogSlider />
      <FooterOne />
    </Loader>
  );
};

export default StartupBusiness;
