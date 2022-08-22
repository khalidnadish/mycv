import React from 'react'
import {title,experts,l1,l2,l3,l4,l5} from "../helper/en"
import { Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Q from "../assets/prevWorker/alguthi.png";
import S from "../assets/prevWorker/alsuraia.png";
import SB from "../assets/prevWorker/weeklyNews.png";

function LiveCalender() {
  return (
    <>
      <Typography variant="h2" textAlign="left" pl={2} mt={2}>
        LiveCalender
      </Typography>
<div className='swiper_div'>
  
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
         
        modules={[Navigation,Pagination]}
        pagination={true}
        navigation={true}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        <SwiperSlide className='SwiperSlide_div'>
          {" "}
          <X1 />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <X2 />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <X3 />
        </SwiperSlide>
        <SwiperSlide>
          <X4 />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <X5 />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}

export default LiveCalender

const X1=()=>{
  return(
    <>
    <div className='div_worker'>
    <img src={Q} alt="" className="img_worker" />
    </div>
    <Typography
      variant="h6"
        textAlign="left"
        // color="primary.main"
        pl={2}
        mt={2}
      >
        <li>1998-2005</li>
      </Typography>
      <Typography variant="body1" textAlign="left" ml={5}>
        {l1}
      </Typography>

    
    </>
  )
}

const X2=()=>{
  return(
    <>
    <div className='div_worker'>
    <img src={S} alt="" className="img_worker" />
    </div>
   <Typography
        variant="h6"
        textAlign="left"
        // color="primary.main"
        pl={2}
        mt={2}
      >
        <li>2006-2008</li>
      </Typography>
      <Typography variant="body1" textAlign="left" ml={5}>
        {l2}
      </Typography>

    
    </>
  )
}
const X3=()=>{
  return(
    <>
    
    <Typography
       variant="h6"
        textAlign="left"
        // color="primary.main"
        pl={2}
        mt={2}
      >
        <li>2009-2010</li>
      </Typography>
      <Typography variant="body1" textAlign="left" ml={5}>
        {l3}
      </Typography>

    
    </>
  )
}
const X4=()=>{
  return(
    <>
    <div className='div_worker'>
    <img src={SB} alt="" className="img_worker" />
    </div>
    <Typography
       variant="h6"
        textAlign="left"
        // color="primary.main"
        pl={2}
        mt={2}
      >
        <li>2011-2014</li>
      </Typography>
      <Typography variant="body1" textAlign="left" ml={5}>
        {l4}
      </Typography>

    
    </>
  )
}

const X5=()=>{
  return(
    <>
    <Typography
        variant="h6"
        textAlign="left"
        // color="primary.main"
        pl={2}
        mt={2}
      >
        <li>2015-till Now </li>
      </Typography>
      <Typography variant="body1" textAlign="left" ml={5}>
        {l5}
      </Typography>

    
    </>
  )
}