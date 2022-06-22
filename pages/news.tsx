//Show the latest news about climate change
//Using an external API
//Fix the 'window is not defined error'
import HeaderOne from '../components/Header/HeaderOne';
import FooterOne from '../components/Footer/FooterOne';
export default function News() {

    return (<>
        <HeaderOne type={undefined} />
        <div style={{ textAlign: 'center', padding: '10rem 10rem 10rem 10rem'} }
        className='row-flex'>
            
            
            <img src='https://climatereanalyzer.org/wx_frames/gfs/ds/gfs_nh-sat1_t2anom_1-day.png'>
            </img>
            
         
            
            <img src='https://climatereanalyzer.org/wx_frames/gfs/ds/gfs_nh-sat2_t2anom_1-day.png'>

            </img>
          
            
             
            
            <img src='https://climatereanalyzer.org/wx_frames/gfs/ds/gfs_nh-sat3_t2anom_1-day.png'>

            </img>
            
            
            
   
            
            
            <img src='https://climatereanalyzer.org/wx_frames/gfs/ds/gfs_nh-sat4_t2anom_1-day.png'>
            </img>
            
         
            
            <img src='https://climatereanalyzer.org/wx_frames/gfs/ds/gfs_nh-sat5_t2anom_1-day.png'>

            </img>
            
            
             
            
            <img src='https://climatereanalyzer.org/wx_frames/gfs/ds/gfs_nh-sat6_t2anom_1-day.png'>

            </img>
            
           
            
            
            <img src='https://climatereanalyzer.org/wx_frames/gfs/ds/gfs_nh-sat7_t2anom_1-day.png'>
            </img>
           
         
            
            <img src='https://climatereanalyzer.org/wx_frames/gfs/ds/gfs_nh-sat8_t2anom_1-day.png'>

            </img>
           </div> 
            
        <FooterOne />
    </>


    )
}




