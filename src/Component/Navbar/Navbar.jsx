import React, { useState } from 'react';
import Logo from '../../assets/Image/Logo.png';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";


const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="shadow-md bg-primary/60 duration-200 relative z-40">
      {/* upper Navbar */}
      <div className=" py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 text-secondary">
              <img src={Logo} alt="Logo" className="w-12" />
              E-Commerce
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-primary transition-all duration-200 text-textcolor py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200 ">
                Order
              </span>
              <FaCartShopping className="text-xl text-textcolor drop-shadow-sm cursor-pointer" />
            </button>
            {/* Sidebar toggle button for mobile */}
            <button
              onClick={toggleSidebar}
              className="sm:hidden block text-textcolor text-2xl"
            >
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center bg-primary text-textcolor">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-secondary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2 hover:text-secondary">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}  >
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-pink-400"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[250px] h-full bg-primary text-textcolor transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button                           // hide this btn
          onClick={toggleSidebar}
          className="text-2xl p-4"
        >
          <FaTimes />
        </button>
        <ul className="mt-10">
          {Menu.map((data) => (
            <li key={data.id} className="p-4 border-b border-gray-700">
              <a
                href={data.link}
                className="block hover:text-black duration-200"
                onClick={toggleSidebar}
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="p-4 border-b border-gray-700">
            <a
              href="#"
              className="flex items-center justify-between hover:text-black"
              onClick={toggleSidebar}
            >
              Trending Products
              <FaCaretDown />
            </a>
            <ul className="ml-4 mt-2">
              {DropdownLinks.map((data) => (
                <li key={data.id} className="p-2">
                  <a
                    href={data.link}
                    className="block hover:text-black duration-200"
                   // onClick={toggleSidebar}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


// show-md   // header bold hojyga
// bg-red    bg color
// dark:bg-gray-900 dark:text-white       =use for dark light theme
// py                = padding vertical
// flex  ==item in one row : justify-between =space B/W
// font-bold text-2xl sm:text-3xl flex gap-2     // normal 3xl text laga 
// hidden sm:block                    === small screen pr hide honga
// w-[200px] sm:w-[200px] group-hover:w-[300px]    == normal 200 width clik pr 300 honga
// top-1/2 -translate-y-1/2 right-3        // style icon search
