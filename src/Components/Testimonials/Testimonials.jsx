import React from 'react';
import './Testimonials.css'
import { Swiper,SwiperSlide } from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import {Pagination} from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'


const Testimonials = () => {
   const clients=[
       {
           img:profilePic1,
           review:
           "Helloewffwfdscdsvsd"
           
       },
       {
        img:profilePic2,
        review:
        "Helloewffwfdscdsvsd"
       },
       {
        img:profilePic2,
        review:
        "Helloewffwfdscdsvsd"
       },
       {
        img:profilePic2,
        review:
        "Helloewffwfdscdsvsd"
       }

    ]
  return (
    <div>
     <div className="t-wrapper" id='Testimonials'>
         <div className="t-heading">
             <span>Client Always get</span>
             <span>Exceptional Work</span>
             <span>From me...</span>
             <div className="blur t-blur1" style={{background:"var(--purple)"}}></div>
             <div className="blur t-blur2" style={{background:"skyblue"}}></div>
         </div>
<Swiper
modules={[Pagination]}
slidesPerView={1}
pagination={{clickable:true}}>
    
   { clients.map((client,index)=>{
        return(
            <SwiperSlide key={index}>
                <div className="testimonial">
                <img src={client.img} alt=''/>
                <span>{client.review}</span>
                </div>
            </SwiperSlide>
        )
   }
    )}

</Swiper>
     </div>
    </div>
  );
}

export default Testimonials;
