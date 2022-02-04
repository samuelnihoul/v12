import React, { useEffect } from "react";
import '../css/style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import '../public/icofont/icofont.min.css'
import HeaderOne from "../components/Header/HeaderOne";
import FooterOne from "../components/Footer/FooterOne";

export default function App({ Component, pageProps }) {
 
  return (<>
  <Component className="App" {...pageProps} /><FooterOne></FooterOne></>)
}