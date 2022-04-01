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
  const [ppf22, sppf22] = useState('')
  const [ppm22, sppm22] = useState('')
  const [r3, sr3] = useState('')
  
  useEffect(() => {
    getDownloadURL(ref(storage, 'Permaculture Pal - Feb 2022 Report.pdf')).then((url) => { sppf22(url) })
    getDownloadURL(ref(storage, 'Permaculture Pal - ma 2022 Report.pdf')).then((url) => { sppm22(url) })
  })
 
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
        paddingTop:'10vh',
        paddingLeft:'30vw'
      }}
    >
    <Card sx={{maxWidth:300,margin:10}}>
      <CardMedia><img src='/assets/images/reports.jpeg'></img></CardMedia>
        <a href={ppf22} >Permaculture Pal - Feb 2022</a></Card>
        <Card sx={{maxWidth:300,margin:10}}>
      <CardMedia><img src='/assets/images/reports.jpeg'></img></CardMedia>
      <a href={ppm22} >Permaculture Pal - March 2022</a></Card>
      <Card sx={{maxWidth:300,margin:10}}>
      <CardMedia><img src='/assets/images/reports.jpeg'></img></CardMedia>
        <a href={'https://charmindustrial.com/carbonmsa'} >Charm - Service Agreement</a></Card> 
        <Card sx={{maxWidth:300,margin:10}}>
      <CardMedia><img src='/assets/images/ProjectManagement/jason-blackeye-KUgDg__TMGk-unsplash.jpg'></img></CardMedia>
        <a href={'https://community.inkdrop.app/note/45ed65f64d9bb11c13d62986c89f3ddf/note:qK2gc0QLn'} >Green Elec Affiliate Marketing (GEAM) by harmonia-eko - Methodology</a></Card>
    </div></Loader>
  );
}
