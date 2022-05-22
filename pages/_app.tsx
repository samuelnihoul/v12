import React, { Component, useEffect } from "react";
import '../css/style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import '../public/icofont/icofont.min.css'
import HeaderOne from "../components/Header/HeaderOne";
import FooterOne from "../components/Footer/FooterOne";
import Sound from 'react-sound'
import ReactGA from "react-ga";
import App from "next/app" ;


export default class MyApp extends App {
  componentDidMount() {
    ReactGA.initialize("G-RFBEGZHSQT");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  // return (<>
  // <Component className="App" {...pageProps} /></>)
  render(){
    return (<>
     <Component className="App" {...this.props} /></>)
  }
}