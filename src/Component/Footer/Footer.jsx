import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
  } from "react-icons/fa";
  

const FooterLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
  ];
  const SomeLinks = [
    {
      title: "Term of service",
      link: "/#",
    },
    {
      title: "F.A.Q",
      link: "/#about",
    },
    {
      title: "Policy",
      link: "/#contact",
    },
    {
      title: "Support",
      link: "/#blog",
    },
  ];

const Footer = () => {
  return (
    <div  className="text-secondary bg-gradient-to-r from-primary/50 to-primary/70">
  <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              {/* <img src={footerLogo} alt="" className="max-w-[50px]" /> */}
              Ecommerce
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-secondary">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-textcolor hover:translate-x-1 duration-300 text-secondary"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-secondary">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {SomeLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-textcolor hover:translate-x-1 duration-300 text-secondary"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-textcolor hover:translate-x-1" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-textcolor hover:translate-x-1" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-textcolor hover:translate-x-1" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        </div>
  )
}

export default Footer

// hover:text-textcolor hover:translate-x-1    // click hover honga