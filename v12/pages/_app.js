import React from "react";
import '../assets/css/style.css'
export default function App({ Component, pageProps }) {
  return <Component className="App" {...pageProps} />
}