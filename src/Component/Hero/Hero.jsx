import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import slider1 from '../../assets/Image/slider1.png'
import slider3 from '../../assets/Image/slider3.png'
import slider2 from '../../assets/Image/slider2.png' 

const ImageList = [
    {
      id: 1,
      img: slider1,
      title: "Upto 50% off on all woman's Wear",
      description:
        "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: slider3,
      title: "30% off on all Man's Wear",
      description:
        "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: slider2,
      title: "70% off on all Products Sale",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  
const Hero = ({handleOrderPopup}) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
      };
    
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[630px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
       {/* background pattern */}
       <div className="h-[700px] w-[750px] bg-primary/60 absolute -right-1/3 -top-30 rounded-2xl rotate-45 -z[8]"></div>
       <div className="container pb-8 sm:pb-0">
         <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                   data-aos-once="true"
                   className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-textcolor py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
  
    </div>
  )
}

export default Hero

             
// grid grid-cols-1 sm:grid-cols-2   // normal sm lagay mobile ma colo-1
