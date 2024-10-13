import React from 'react';
import { Industry_List } from '../assets/assets';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IndustryCards from './IndustryCards';
import "./style.css";

const Industry = () => {
  console.log(Industry_List);   

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides on larger screens
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Below this width
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Below this width
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='w-full max-w-screen-2xl h-auto bg-[#f1f1f1] py-[60px]'>
      <div className='w-11/12 mx-auto'>
      <h2 className="text-[#909496] mb-5 md:ml-12 leading-8 sm:leading-10 text-[30px] sm:text-[50px] font-normal mt-2 text-center sm:text-left">
            Industries
          </h2>
        <Slider className='mx-auto industry-slider' {...settings}>
          {Industry_List.map((item, index) => (
            <IndustryCards
              key={index}
              title={item.name}
              image={item.img}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Industry;
