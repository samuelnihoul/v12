import react from "react";
import {getStorage, ref,getDownloadURL} from 'firebase/storage'
import bg from "../public/assets/images/reports.jpeg";
import { getTokenSourceMapRange } from "typescript";
import fb from '../firebase/firebaseConfig'
const storage=getStorage(fb)
export default function reports() {
  const img = bg;
  var ppf22=''
  getDownloadURL(ref(storage,'Permaculture Pal - Feb 2022 Report.pdf')).then(url=>ppf22=url)
  return (
    <div
      style={{
        textAlign: "center",
        color: "white",
        backgroundImage: "/assets/images/reports.jpeg",
        backgroundColor: "lightgray",
        height: "90vh",
      }}
    >
      <a href={ppf22} >Permaculture Pal - Feb 2022</a>
      
    </div>
  );
}
