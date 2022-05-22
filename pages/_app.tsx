import React, { useEffect } from "react";
import '../css/style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import '../public/icofont/icofont.min.css'
import HeaderOne from "../components/Header/HeaderOne";
import FooterOne from "../components/Footer/FooterOne";
import Sound from 'react-sound'
import ReactGA from "react-ga";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize("G-RFBEGZHSQT");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  return (<>
    <Component className="App" {...pageProps} /></>)
}