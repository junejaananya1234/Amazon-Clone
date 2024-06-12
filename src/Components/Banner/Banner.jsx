import Banner1 from "../../assets/Banner1.jpg"
import Banner2 from "../../assets/Banner2.jpg"
import Banner3 from "../../assets/Banner3.jpg"
import Banner4 from "../../assets/Banner4.jpg"
import Banner5 from "../../assets/Banner5.jpg"
import Banner6 from "../../assets/Banner6.jpg"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = ()=>{
    return(
        <div className='relative'>
         <Carousel 
         autoPlay
         infiniteLoop
         showStatus={false}
         showIndicators={false}
         showThumbs={false}
         interval={3000}
         
         >
           <div>
            <img  loading="lazy" src={Banner1}></img>
           </div>
           <div>
            <img  loading="lazy" src={Banner2}></img>
           </div>
           <div>
            <img  loading="lazy" src={Banner3}></img>
           </div>
           <div>
            <img  loading="lazy" src={Banner4}></img>
           </div>
           <div>
            <img  loading="lazy" src={Banner5}></img>
           </div>
           <div>
            <img  loading="lazy" src={Banner6}></img>
           </div>

         </Carousel>
        </div>
    )
}
export default Banner;