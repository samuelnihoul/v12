
import Image from 'next/image'
import im1 from '../public/assets/images/partners/myclimate.png'
import xyzhostels from  '../public/assets/images/partners/xyzhostels.png'
export default function (){


    return(<>
       <h2 style={{textAlign:'center'}}>Our Partners</h2> 
        <div style={{display:'flex',flexDirection:'row', textAlign:'center'}}>
        <Image src={im1}></Image>
        <Image src={xyzhostels}></Image>
        
        </div></>
    )
}