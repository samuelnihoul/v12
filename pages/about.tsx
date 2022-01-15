import React from "react";
import Loader from "../components/Loader/Loader";
import HeaderOne from "../components/Header/HeaderOne";
import PageTitleAbout from "../components/PageTitle/PageTitleAbout";
import WhoWeAreSeven from "../components/WhoWeAre/WhoWeAreSeven";
//import OurSkillsTwo from "../../components/OurSkills/OurSkillsTwo";
import CounterOne from "../components/Counters/CounterOne";
import OurServicesThree from "../components/OurServices/OurServicesThree";
import OurTeamTwo from "../components/Team/OurTeamTwo";
import TestimonialsOne from "../components/Testimonials/TestimonialsOne";
import ClientsBrand from "../components/ClientsBrand/ClientsBrand";
import FooterOne from "../components/Footer/FooterOne";

const AboutUs = () => (
  <Loader>
    <HeaderOne type={undefined} />
    <PageTitleAbout
      title="About Us"
      tagline="Driving innovation in voluntary carbon offsets since 2021"
    />
    <WhoWeAreSeven />
    
    <CounterOne type="wide" bg={undefined} />
{/*     <OurServicesThree
      title="About Us"
      tagline="Part of your success"
    /> */}
 {/*    <OurTeamTwo title="MEET OUR TEAM" tagline="Together WE ARE STRONGER" children={undefined} /> */}
    <TestimonialsOne
      title="Testimonials"
      tagline="Happy clients" font={undefined} />
    <ClientsBrand children={undefined} classAppend={undefined} />
    <FooterOne />
  </Loader>
);

export default AboutUs;
