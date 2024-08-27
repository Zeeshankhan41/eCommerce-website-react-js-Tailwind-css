import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Product from './Component/Product/Product'
import TopProduct from './Component/TopProduct'
import Banner from './Component/Banner/Banner'
import Subscribe from './Component/Subscribe/Subscribe'
import Testomonials from './Component/Testomonials/Testomonials'
import Footer from './Component/Footer/Footer'
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar/>
      <Hero/>
     <Product/>
     <TopProduct/>
     <Banner/>
     <Subscribe/>
     <Testomonials/>
     <Footer/>
    </div>
  )
}

export default App


