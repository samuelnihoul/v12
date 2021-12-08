import React from "react";
import '/assets/css/style.css'
import "bootstrap/dist/css/bootstrap.min.css";
export default function App({ Component, pageProps }) {
  return <Component className="App" {...pageProps} />
}