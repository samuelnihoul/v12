import react, { useEffect, useState } from "react";
import {getStorage, ref,getDownloadURL} from 'firebase/storage'
import bg from "../public/assets/images/reports.jpeg";
import { getTokenSourceMapRange } from "typescript";
import fb from '../firebase/firebaseConfig'
import { Card, CardMedia } from '@mui/material'

import HeaderOne from '../components/Header/HeaderOne';
import Loader from "../components/Loader/Loader"
const storage=getStorage(fb)
export default function reports() {
  const img = bg;
  const [ppf22,sppf22]=useState('')
 //function callback (url){ppf22=url}
  useEffect(()=> {getDownloadURL(ref(storage,'Permaculture Pal - Feb 2022 Report.pdf')).then((url)=>{sppf22(url)})})
 
  return (<Loader>
    <HeaderOne type={undefined} />
    <div
      style={{
        textAlign: "center",
        color: "white",
        backgroundImage: "/assets/images/reports.jpeg",
        backgroundColor: "#f1e5ac",
        height: "90vh",
        alignItems: 'center',
        paddingTop:'10vh'
      
      }}
    >
    <Card sx={{maxWidth:300}}>
      <CardMedia><img src='/assets/images/reports.jpeg'></img></CardMedia>
      <a href={ppf22} >Permaculture Pal - Feb 2022</a></Card>
      
    </div></Loader>
  );
}
