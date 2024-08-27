import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

// Custom combined arrow component
const ArrowButtons = ({ onPrevClick, onNextClick }) => {
  return (
    <div className="flex space-x-2 absolute right-10  transform -translate-y-1/2 z-10">
      <button
        onClick={onPrevClick}
        className="bg-primary text-white p-2 rounded-full shadow-lg"
      >
        <GrPrevious className="text-white group-hover:text-primary  " />
      </button>
      <button
        onClick={onNextClick}
        className="bg-primary text-secondary p-2 rounded-full shadow-lg"
      >
        <GrNext className="text-white group-hover:text-primary  " />
      </button>
    </div>
  );
};

const Testimonials = () => {
  let sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10 relative">
      <div className="container">
        {/* Header section */}
        <div className="flex items-center justify-center mb-10 max-w-[600px] mx-auto relative">
          {/* Title and description */}
          <div className="text-center w-full">
            <p data-aos="fade-up" className="text-sm text-primary">
              What our customers are saying
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Testimonials
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              asperiores modi Sit asperiores modi
            </p>
          </div>
         
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
             {/* Arrow buttons */}
          <ArrowButtons
            onPrevClick={() => sliderRef.current.slickPrev()}
            onNextClick={() => sliderRef.current.slickNext()}
          />
          <Slider ref={sliderRef} {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/20 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-900">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;



// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const TestimonialData = [
//   {
//     id: 1,
//     name: "Victor",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
//     img: "https://picsum.photos/101/101",
//   },
//   {
//     id: 2,
//     name: "Satya Nadella",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
//     img: "https://picsum.photos/102/102",
//   },
//   {
//     id: 3,
//     name: "Virat Kohli",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
//     img: "https://picsum.photos/104/104",
//   },
//   {
//     id: 5,
//     name: "Sachin Tendulkar",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
//     img: "https://picsum.photos/103/103",
//   },
// ];

// const Testimonials = () => {
//   var settings = {
//     dots: true,
//     arrows: false,
    
//     speed: 500,
//     slidesToScroll: 1,
//   //  autoplay: true,
//    // autoplaySpeed: 2000,
//     cssEase: "linear",
//     pauseOnHover: true,
//     pauseOnFocus: true,
//     responsive: [
//       {
//         breakpoint: 10000,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="py-10 mb-10">
//       <div className="container">
//         {/* header section */}
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <p data-aos="fade-up" className="text-sm text-primary">
//             What our customers are saying
//           </p>
//           <h1 data-aos="fade-up" className="text-3xl font-bold">
//             Testimonials
//           </h1>
//           <p data-aos="fade-up" className="text-xs text-gray-400">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//             asperiores modi Sit asperiores modi
//           </p>
//         </div>

//         {/* Testimonial cards */}
//         <div  data-aos="zoom-in">
//           <Slider   {...settings}>
//             {TestimonialData.map((data) => (
//               <div className="my-6">
//                 <div
//                   key={data.id}
//                   className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
//                 >
//                   <div className="mb-4">
//                     <img
//                       src={data.img}
//                       alt=""
//                       className="rounded-full w-20 h-20"
//                     />
//                   </div>
//                   <div className="flex flex-col items-center gap-4">
//                     <div className="space-y-3">
//                       <p className="text-xs text-gray-500">{data.text}</p>
//                       <h1 className="text-xl font-bold text-black/80 dark:text-light">
//                         {data.name}
//                       </h1>
//                     </div>
//                   </div>
//                   <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
//                     ,,
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;