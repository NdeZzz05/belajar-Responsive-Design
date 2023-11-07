import React, { useState } from "react";
import logo from "./assets/logo.svg";
import toggle from "./assets/toggle.svg";
import home from "./assets/navbar/home.svg";
import discover from "./assets/navbar/discover.svg";
import special from "./assets/navbar/special.svg";
import contact from "./assets/navbar/contact.svg";
import more from "./assets/navbar/more.svg";
import heroImage from "./assets/heroImage2.png";
// icon main
import bag from "./assets/iconMain/bag.svg";
import play from "./assets/iconMain/play.svg";
// logo company
import airbnb from "./assets/logoCompany/airbnb.svg";
import booking from "./assets/logoCompany/booking.svg";
import expedia from "./assets/logoCompany/expedia.svg";
import orbitz from "./assets/logoCompany/orbitz.svg";
import tripadvisor from "./assets/logoCompany/tripadvisor.svg";
// icon service
import guide from "./assets/iconService/guide.png";
import bookingservice from "./assets/iconService/booking.png";
import weather from "./assets/iconService/weather.png";

export const App = () => {
  const [dataToggle, setDataToggle] = useState(false);
  const [dataLogo, setDataLogo] = useState(false);
  const handleMore = () => {
    setDataToggle(!dataToggle);
  };
  const handleLogo = () => {
    setDataLogo(!dataLogo);
  };

  return (
    <>
      {/* Navigation bar */}
      <nav className="py-4 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <img src={logo} alt="" className="order-1 sm:order-2" />
            <img src={toggle} alt="" onClick={handleLogo} className="cursor-pointer order-2 sm:order-1 lg:hidden" />
            <div className="lg:block lg:order-2 sm:hidden hidden">
              <ul className="flex gap-16">
                <li className="text-grey-0 font-bold text-sm font-circular">
                  <a href="#home">Home</a>
                </li>
                <li className="text-grey-0 font-bold text-sm font-circular opacity-50 ">
                  <a href="#discover">Discover</a>
                </li>
                <li className="text-grey-0 font-bold text-sm font-circular opacity-50">
                  <a href="#specialDeals">Special Deals</a>
                </li>
                <li className="text-grey-0 font-bold text-sm font-circular opacity-50">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="order-3 hidden sm:block">
              <button className="grow bg-white py-4 px-8 font-bold text-grey-0 rounded-full text-sm border">Login</button>
              <button className="grow bg-ungu-0 py-4 px-8 font-bold text-white rounded-full text-sm">SignUp</button>
            </div>
          </div>
        </div>
        {dataLogo ? (
          <div className="fixed bottom-0 w-full right-0 left-0 p-2 bg-white border lg:hidden z-50">
            <ul className="flex justify-between">
              <li>
                <button className="flex justify-center  items-center flex-col gap-1">
                  <img src={home} alt="" className="w-6 text-ungu-0" />
                  <span className="text-base font-bold text-ungu-0">Home</span>
                </button>
              </li>
              <li>
                <button className="flex justify-center items-center flex-col gap-1">
                  <img src={discover} alt="" className="w-6 text-grey-0 opacity-50" />
                  <span className="text-base font-normal text-grey-0 opacity-50">Discover</span>
                </button>
              </li>
              <li>
                <button className="flex justify-center items-center flex-col gap-1">
                  <img src={special} alt="" className="w-6 text-grey-0 opacity-50" />
                  <span className="text-base font-normal text-grey-0 opacity-50">Special</span>
                </button>
              </li>
              <li>
                <button className="flex justify-center items-center flex-col gap-1">
                  <img src={contact} alt="" className="w-6 text-grey-0 opacity-50" />
                  <span className="text-base font-normal text-grey-0 opacity-50">Contact</span>
                </button>
              </li>
              <li className="sm:hidden">
                <button onClick={handleMore} className="flex justify-center items-center flex-col gap-1">
                  <img src={more} alt="" className="w-6 text-grey-0 opacity-50" />
                  <span className="text-base font-normal text-grey-0 opacity-50">More</span>
                </button>
              </li>
            </ul>
            {dataToggle ? (
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-4 w-3/4 sm:hidden">
                <button className="grow bg-white py-4 px-8 font-bold text-grey-0 rounded-full text-sm border">Login</button>
                <button className="grow bg-ungu-0 py-4 px-8 font-bold text-white rounded-full text-sm">SignUp</button>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : null}
      </nav>

      {/* Hero section */}
      <section>
        <div className="container mx-auto py-4 px-4 lg:px-8">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 lg:col-span-4 order-2 lg:order1">
              <div>
                <button className="px-8 py-4 bg-white text-pink-0 flex gap-2 text-sm font-bold border border-[#EEEEEE] rounded-full mx-auto drop-shadow-sm-shadow lg:mx-0">
                  Explore the world!
                  <img src={bag} alt="" />
                </button>
                <h1 className="font-bold text-[40px] text-grey-0 md:text-[52px] ld:text-[69px] leading-tight text-center mt-4 mb-6 md:mt-[43px] md:mb-[43px] lg:text-start">
                  Travel <span className="text-pink-0">top destination</span> of the world
                </h1>
                <p className="text-center text-grey-0 opacity-50 text-base md:text-[18px] md:w-3/4 lg:w-full lg:text-start mx-auto font-inter mb-8 md:mb-[43px]">We always make our customer happy by providing as many choices as possible </p>
                <div className="flex flex-col gap-6 md:flex-row md:justify-center lg:justify-start">
                  <button className="py-4 px-8 bg-ungu-0 drop-shadow-lg-shadow text-white rounded-full text-sm font-bold">Get Started</button>
                  <button className="flex gap-2 py-4 px-8 bg-white border border-[#EEEEEE] rounded-full text-sm font-bold justify-center items-center">
                    <img src={play} alt="" className="" />
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8 order-1 lg:order-2">
              <div>
                <img src={heroImage} alt="" className="w-full" />
              </div>
            </div>
            <div className="col-span-12 order-3 py-8">
              <div className="flex justify-center lg:justify-between gap-6 md:gap-7 flex-wrap">
                <div>
                  <img src={airbnb} alt="" className="h-5 md:h-8" />
                </div>
                <div>
                  <img src={booking} alt="" className="h-5 md:h-8" />
                </div>
                <div>
                  <img src={expedia} alt="" className="h-5 md:h-8" />
                </div>
                <div>
                  <img src={orbitz} alt="" className="h-5 md:h-8" />
                </div>
                <div>
                  <img src={tripadvisor} alt="" className="h-5 md:h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sercive section */}
      <section>
        <div className="container mx-auto py-4 px-4 lg:px-8 lg:py-16 overflow-x-hidden">
          <div className="grid grid-cols-12 items-center px-2">
            <div className="lg:col-span-4 col-span-12 flex flex-col gap-4 lg:pr-2">
              <span className="text-pink-0 font-bold leading-tight text-center lg:text-start text-base sm:text-2xl">SERVICES</span>
              <h1 className="font-bold sm:text-5xl text-3xl leading-tight text-grey-0 text-center lg:text-start">Our top value categories for you</h1>
            </div>
            <div className="lg:col-span-8 col-span-12 flex flex-col sm:flex-row gap-5 lg:w-screen md:w-auto sm:mt-16 mt-8 lg:mt-0">
              <div className="flex flex-col justify-center sm:gap-16 gap-8 items-center w-full sm:w-[350px] rounded-[32px] border lg:p-16 sm:p-8 p-6 bg-white drop-shadow-lg">
                <div className="">
                  <img src={guide} alt="" />
                </div>
                <div className="flex flex-col sm:gap-8 gap-2">
                  <h2 className="text-grey-0 font-bold text-lg text-center">Best Tour Guide</h2>
                  <p className="font-inter text-lg leading-relaxed text-grey-0 opacity-50 text-center">What looked like a small patch of purple grass, above five feet.</p>
                </div>
              </div>
              <div className="flex flex-col justify-center sm:gap-16 gap-8 items-center w-full sm:w-[350px] rounded-[32px] border lg:p-16 sm:p-8 p-6  bg-white drop-shadow-lg ">
                <div className="">
                  <img src={bookingservice} alt="" />
                </div>
                <div className="flex flex-col sm:gap-8 gap-2">
                  <h2 className="text-grey-0 font-bold text-lg text-center">Easy Booking</h2>
                  <p className="font-inter text-lg leading-relaxed text-grey-0 opacity-50 text-center">Square, was moving across the sand in their direction.</p>
                </div>
              </div>
              <div className="flex flex-col justify-center sm:gap-16 gap-8  items-center w-full sm:w-[350px] rounded-[32px] border lg:p-16 sm:p-8 p-6 bg-white drop-shadow-lg">
                <div className="">
                  <img src={weather} alt="" />
                </div>
                <div className="flex flex-col sm:gap-8 gap-2">
                  <h2 className="text-grey-0 font-bold text-lg text-center">Weather Forecast</h2>
                  <p className="font-inter text-lg leading-relaxed text-grey-0 opacity-50 text-center">What looked like a small patch of purple grass, above five feet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
