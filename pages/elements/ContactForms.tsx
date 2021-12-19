import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import ContactArchitecture from "../../components/ContactUs/ContactArchitecture";
import ContactThree from "../../components/ContactUs/ContactThree";
import ContactTwo from "../../components/ContactUs/ContactTwo";
import FooterOne from "../../components/Footer/FooterOne";

const ContactForms = () => (
  <Loader>
    <HeaderOne type={undefined} />
    <PageTitleWidget title="Contact Forms" />
    <ContactArchitecture
      title="CONTACT ME"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nisl gravida, interdum nunc quis, faucibus ligula. Nam eu neque nunc. Suspendisse egestas dolor ante, nec tincidunt sem malesuada at." tagline={undefined} classAppend={undefined} children={undefined} />
    <ContactThree />
    <ContactTwo bg="color" title={undefined} classAppend={undefined} children={undefined} />
    <ContactArchitecture title={undefined} tagline={undefined} text={undefined} classAppend={undefined} children={undefined} />
    <FooterOne />
  </Loader>
);

export default ContactForms;
