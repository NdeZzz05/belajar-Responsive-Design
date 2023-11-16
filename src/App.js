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
// icon & png top destination
import previous from "./assets/iconTopDestination/previous.svg";
import next from "./assets/iconTopDestination/next.svg";
import star from "./assets/iconTopDestination/star.svg";
import rome from "./assets/pngTopDestination/rome.png";
import maldives from "./assets/pngTopDestination/maldives.png";
import uae from "./assets/pngTopDestination/uae.png";
// png travel point
import discounted from "./assets/pngTravelPoint/imgdiscounted.png";
// png key features
import imagemain from "./assets/pngKeyFeatures/imageMain.png";
import imagelocation from "./assets/pngKeyFeatures/location.png";
import imageschedule from "./assets/pngKeyFeatures/schedule.png";
import imagediscount from "./assets/pngKeyFeatures/discount.png";
// png testimonials
import iconwomen from "./assets/pngTestimonials/iconWomen.png";
import starfive from "./assets/pngTestimonials/starFive.png";
import indicator from "./assets/pngTestimonials/indicator.png";
import imageemail from "./assets/pngSubscribe/email.png";
// png footer
import facebook from "./assets/footer/facebook.svg";
import twitter from "./assets/footer/twitter.svg";
import instagram from "./assets/footer/instagram.svg";
import icondropdown from "./assets/footer/dropdown.svg";

export const App = () => {
  const [dataToggle, setDataToggle] = useState(false);
  const [dataLogo, setDataLogo] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [activeMobile, setActiveMobile] = useState("home");
  const [activeDropDown, setActiveDropDown] = useState("");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  const handleItemMobile = (item) => {
    setActiveMobile(item);
    if (item === "more") {
      setActiveMobile(item);
      setDataToggle(!dataToggle);
    }
  };
  const handleItemDropDown = (item) => {
    setActiveDropDown(activeDropDown === item ? "" : item);
  };
  const handleLogo = () => {
    setDataLogo(!dataLogo);
  };

  return (
    <>
      {/* Navigation bar */}
      <nav className="py-4 px-4 lg:px-12">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <img src={logo} alt="" className="order-1 sm:order-2" />
            <img src={toggle} alt="" onClick={handleLogo} className="cursor-pointer order-2 sm:order-1 lg:hidden" />
            <div className="lg:block lg:order-2 sm:hidden hidden">
              <ul className="flex gap-16">
                <li className={`text-grey-0 font-bold text-sm font-circular ${activeItem === "home" ? "opacity-100" : "opacity-50"}`}>
                  <a href="#home" onClick={() => handleItemClick("home")}>
                    Home
                  </a>
                </li>
                <li className={`text-grey-0 font-bold text-sm font-circular ${activeItem === "discover" ? "opacity-100" : "opacity-50"}`}>
                  <a href="#discover" onClick={() => handleItemClick("discover")}>
                    Discover
                  </a>
                </li>
                <li className={`text-grey-0 font-bold text-sm font-circular ${activeItem === "specialDeals" ? "opacity-100" : "opacity-50"}`}>
                  <a href="#specialDeals" onClick={() => handleItemClick("specialDeals")}>
                    Special Deals
                  </a>
                </li>
                <li className={`text-grey-0 font-bold text-sm font-circular ${activeItem === "contact" ? "opacity-100" : "opacity-50"}`}>
                  <a href="#contact" onClick={() => handleItemClick("contact")}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="order-3 hidden sm:block">
              <button className="grow bg-white py-4 px-8 font-bold text-grey-0 rounded-full text-sm border">Login</button>
              <button className="grow bg-ungu-0 py-4 px-8 font-bold text-white rounded-full text-sm hover:bg-purple-700">SignUp</button>
            </div>
          </div>
        </div>
        {dataLogo ? (
          <div className="fixed bottom-0 w-full right-0 left-0 p-2 bg-white border lg:hidden z-50 sm:px-16">
            <ul className="flex justify-between">
              <li>
                <button className="flex justify-center  items-center flex-col gap-1" onClick={() => handleItemMobile("home")}>
                  <img src={home} alt="" className={`w-6 ${activeMobile === "home" ? "opacity-100 text-ungu-0" : "text-grey-0 opacity-50 "}`} />
                  <span className={`text-base font-normal ${activeMobile === "home" ? "opacity-100 text-ungu-0" : "text-grey-0 opacity-50 "}`}>Home</span>
                </button>
              </li>
              <li>
                <button className="flex justify-center items-center flex-col gap-1" onClick={() => handleItemMobile("discover")}>
                  <img src={discover} alt="" className={`w-6 ${activeMobile === "discover" ? "opacity-100 text-ungu-0" : "text-grey-0 opacity-50 "}`} />
                  <span className={`text-base font-normal ${activeMobile === "discover" ? "opacity-100 text-ungu-0" : "text-grey-0 opacity-50 "}`}>Discover</span>
                </button>
              </li>
              <li>
                <button className="flex justify-center items-center flex-col gap-1" onClick={() => handleItemMobile("special")}>
                  <img src={special} alt="" className={`w-6 ${activeMobile === "special" ? "opacity-100 text-ungu-0" : "text-grey-0 opacity-50 "}`} />
                  <span className={`text-base font-normal ${activeMobile === "special" ? "opacity-100 text-ungu-0" : "text-grey-0 opacity-50 "}`}>Special</span>
                </button>
              </li>
              <li>
                <button className="flex justify-center items-center flex-col gap-1" onClick={() => handleItemMobile("contact")}>
                  <img src={contact} alt="" className={`w-6 ${activeMobile === "contact" ? "opacity-100 text-ungu-0" : "text-grey-0 opacity-50 "}`} />
                  <span className={`text-base font-normal ${activeMobile === "contact" ? "opacity-100 text-ungu-0" : "text-grey-0 opacity-50 "}`}>Contact</span>
                </button>
              </li>
              <li className="sm:hidden">
                <button onClick={() => handleItemMobile("more")} className="flex justify-center items-center flex-col gap-1">
                  <img src={more} alt="" className={`w-6 ${activeMobile === "more" ? "opacity-100 text-ungu-0" : "text-grey-0 opacity-50 "}`} />
                  <span className={`text-base font-normal ${activeMobile === "more" ? "opacity-100 text-ungu-0" : "text-grey-0 opacity-50 "}`}>More</span>
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
        <div className="container mx-auto py-4 px-4 lg:px-12 lg:py-16 ">
          <div className="grid grid-cols-12 items-center px-2">
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
        <div className="container mx-auto py-4 px-4 lg:px-12 lg:py-16 overflow-x-hidden ">
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

      {/* Top Destination section */}
      <section>
        <div className="container mx-auto py-4 px-4 lg:px-12 lg:py-16 sm:pt-8">
          <div className="grid grid-cols-12 px-2">
            <div className="col-span-12 flex flex-col gap-4 lg:flex-row lg:justify-between">
              <div className="flex flex-col gap-4">
                <span className="text-pink-0 font-bold text-center leading-tight lg:text-start lg:text-2xl">TOP DESTINATION</span>
                <h1 className="text-grey-0 font-bold text-3xl text-center leading-tight sm:text-[40px] lg:text-start lg:text-5xl">Explore top destination</h1>
              </div>
              <div className="flex justify-between sm:justify-center sm:gap-8">
                <button className="border rounded-full p-6 lg:p-9">
                  <img src={previous} alt="" className="lg:w-6" />
                </button>
                <button className="border rounded-full p-6 bg-ungu-0 lg:p-9">
                  <img src={next} alt="" className="lg:w-6" />
                </button>
              </div>
            </div>
            <div className="col-span-12 sm:mt-16 mt-8 lg:mt-16 flex flex-col gap-8 sm:flex-row sm:w-auto">
              <div className="sm:w-1/3">
                <div className="w-full">
                  <img src={rome} alt="" className="w-full" />
                </div>
                <div className="p-8 flex flex-col gap-2 rounded-b-3xl bg-white drop-shadow-xl">
                  <div className="lg:flex">
                    <span className="text-pink-0 font-bold text-2xl lg:order-2 lg:w-2/3 lg:text-end">$550.16</span>
                    <h2 className="text-grey-0 font-bold text-2xl lg:order-1">Paradise Beach, Bantayan Island</h2>
                  </div>
                  <p className="text-grey-0 opacity-50 text-lg">Rome, Italy</p>
                  <span className="text-oren-0 font-bold flex text-2xl gap-2">
                    4.8
                    <img src={star} alt="" className="" />
                  </span>
                </div>
              </div>
              <div className="sm:w-1/3">
                <div className="w-full">
                  <img src={maldives} alt="" className="w-full" />
                </div>
                <div className="p-8 flex flex-col gap-2 rounded-b-3xl bg-white drop-shadow-xl">
                  <div className="lg:flex">
                    <span className="text-pink-0 font-bold text-2xl lg:order-2 lg:w-2/3 lg:text-end">$20.99</span>
                    <h2 className="text-grey-0 font-bold text-2xl lg:order-1">Ocean with full of Colors</h2>
                  </div>
                  <p className="text-grey-0 opacity-50 text-lg">Maldives</p>
                  <span className="text-oren-0 font-bold flex text-2xl gap-2">
                    4.5
                    <img src={star} alt="" className="" />
                  </span>
                </div>
              </div>
              <div className="sm:w-1/3">
                <div className="w-full">
                  <img src={uae} alt="" className="w-full" />
                </div>
                <div className="p-8 flex flex-col gap-2 rounded-b-3xl bg-white drop-shadow-xl">
                  <div className="lg:flex">
                    <span className="text-pink-0 font-bold text-2xl lg:order-2 lg:w-2/3 lg:text-end">$150.99</span>
                    <h2 className="text-grey-0 font-bold text-2xl lg:order-1">Mountain View, Above the cloud</h2>
                  </div>
                  <p className="text-grey-0 opacity-50 text-lg">United Arab Emeries</p>
                  <span className="text-oren-0 font-bold flex text-2xl gap-2">
                    5.0
                    <img src={star} alt="" className="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Point section*/}
      <section>
        <div className="container mx-auto py-4 px-4 lg:pr-12 lg:pl-0 lg:py-16">
          <div className="grid grid-cols-12 items-center px-2 lg:pr-2 lg:pl-0">
            <div className="col-span-12 lg:col-span-8 pt-8 ">
              <img src={discounted} alt="" className="lg:w-full" />
            </div>
            <div className="col-span-12 lg:col-span-4 mt-8">
              <div className="flex flex-col gap-4 items-center lg:items-start">
                <span className="text-pink-0 font-bold text-center leading-tight lg:text-start lg:text-2xl">TRAVEL POINT</span>
                <h1 className="text-grey-0 font-bold text-3xl text-center leading-tight lg:text-start lg:text-[44px]">We helping you find your dream location</h1>
                <p className="text-center text-grey-0 opacity-50 text-base pt-4 font-inter lg:text-start">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                </p>
              </div>
              <div className="pt-8 flex flex-col gap-4 sm:flex-row sm:grid sm:grid-cols-2">
                <div className="border rounded-3xl p-8">
                  <h1 className="text-oren-0 text-center text-4xl">500+</h1>
                  <p className="font-inter text-center text-lg pt-4">Holiday Package</p>
                </div>
                <div className="border rounded-3xl p-8">
                  <h1 className="text-oren-0 text-center text-4xl">100</h1>
                  <p className="font-inter text-center text-lg pt-4">Luxury Hotel</p>
                </div>
                <div className="border rounded-3xl p-8">
                  <h1 className="text-oren-0 text-center text-4xl">7</h1>
                  <p className="font-inter text-center text-lg pt-4">Premium Airlines</p>
                </div>
                <div className="border rounded-3xl p-8">
                  <h1 className="text-oren-0 text-center text-4xl">2k+</h1>
                  <p className="font-inter text-center text-lg pt-4">Happy Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features section */}
      <section>
        <div className="container mx-auto py-4 px-4 lg:py-16 lg:pl-12 lg:pr-0">
          <div className="grid grid-cols-12 items-center px-2 lg:pr-0">
            <div className="col-span-12 pt-8 lg:col-span-6 lg:order-2 lg:pt-0 lg:pl-8">
              <img src={imagemain} alt="" className="w-full " />
            </div>
            <div className="col-span-12 pt-8 lg:col-span-6 lg:pt-0">
              <div className="flex flex-col gap-4 items-center lg:items-start">
                <span className="text-pink-0 font-bold text-center leading-tight lg:text-2xl">KEY FEATURES</span>
                <h1 className="text-grey-0 font-bold text-3xl text-center leading-tight lg:text-[44px]">We offer best services</h1>
                <p className="text-center text-grey-0 opacity-50 text-base pt-4 font-inter lg:text-start lg:text-lg">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                </p>
              </div>
              <div className="grid gap-2 pt-8">
                <div className="p-8 flex flex-col gap-8 sm:flex-row sm:items-center">
                  <img src={imagelocation} alt="" className="w-1/4 sm:w-20" />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-grey-0 font-bold text-lg text-start">We offer best services</h2>
                    <p className="font-inter text-lg leading-relaxed text-grey-0 opacity-50 text-start">Lorem Ipsum is not simply random text</p>
                  </div>
                </div>
                <div className="p-8 flex flex-col gap-8 border rounded-3xl sm:flex-row sm:items-center">
                  <img src={imageschedule} alt="" className="w-1/4 sm:w-20" />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-grey-0 font-bold text-lg text-start">Schedule your trip</h2>
                    <p className="font-inter text-lg leading-relaxed text-grey-0 opacity-50 text-start">It has roots in a piece of classical</p>
                  </div>
                </div>
                <div className="p-8 flex flex-col gap-8 sm:flex-row sm:items-center">
                  <img src={imagediscount} alt="" className="w-1/4 sm:w-20" />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-grey-0 font-bold text-lg text-start">Get discounted coupons</h2>
                    <p className="font-inter text-lg leading-relaxed text-grey-0 opacity-50 text-start">Lorem Ipsum is not simply random text</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section>
        <div className="container mx-auto py-4 px-4 lg:px-12 lg:py-16">
          <div className="grid grid-cols-12 items-center px-2 py-8">
            <div className="hidden sm:block lg:block">
              <button className="border rounded-full p-6 lg:p-9">
                <img src={previous} alt="" className="w-6" />
              </button>
            </div>
            <div className="col-span-12 flex flex-col sm:col-span-10 items-center sm:px-8">
              <div className=" flex flex-col sm:gap-4">
                <span className="text-pink-0 font-bold text-center leading-tight sm:text-2xl">TESTIMONIALS</span>
                <h1 className="text-grey-0 font-bold text-3xl text-center leading-tight sm:text-[40px]">Trust our clients</h1>
              </div>
              <div className="pt-8 lg:pt-16">
                <img src={iconwomen} alt="" />
              </div>
              <div className=" pt-8 lg:pt-16 flex flex-col items-center gap-2 sm:gap-4">
                <h2 className="text-grey-0 font-bold text-lg sm:text-2xl">
                  <span className="text-oren-0">Mark Smith</span> / Travel Enthusiast
                </h2>
                <img src={starfive} alt="" className="w-3/4 sm:w-1/2" />
              </div>
              <div className=" pt-8 lg:pt-16">
                <p className="font-inter text-base text-grey-0 text-center sm:text-lg lg:text-xl">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
              </div>
              <div className="flex flex-col items-center pt-8 lg:pt-16">
                <img src={indicator} alt="" className="w-3/4" />
              </div>
            </div>
            <div className="hidden sm:block">
              <button className="border rounded-full p-6 bg-ungu-0 lg:p-9">
                <img src={next} alt="" className="w-6" />
              </button>
            </div>
            <div className="col-span-12 pt-8 lg:pt-16 sm:hidden">
              <div className="flex justify-between sm:justify-center sm:gap-8">
                <button className="border rounded-full p-6">
                  <img src={previous} alt="" />
                </button>
                <button className="border rounded-full p-6 bg-ungu-0">
                  <img src={next} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE section */}
      <section>
        <div className="container mx-auto py-4 px-6 lg:px-12 lg:py-16 ">
          <div className=" bg-[#FACD49] rounded-3xl bg-opacity-20 flex flex-col justify-center gap-16 py-16 px-8 sm:py-32 sm:px-16">
            <div className="flex flex-col justify-center items-center gap-4 sm:gap-8">
              <span className="text-pink-0 font-bold text-center leading-tight lg:text-2xl">SUBSCRIBE TO OUR NEWSLETTER</span>
              <h1 className="text-grey-0 font-bold text-3xl text-center leading-tight lg:text-[55px]">Prepare yourself & let’s explore the beauty of the world</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-8 sm:flex-row">
              <div className="relative w-full sm:w-2/3">
                <input placeholder="your email" className="pl-14 pr-4 py-6 rounded-2xl sm:pr-8 sm:pl-20 w-full lg:py-8 lg:text-2xl" />
                <img src={imageemail} alt="" className="absolute left-4 sm:left-7 top-1/2 transform -translate-y-1/2" />
              </div>
              <button className="bg-ungu-0 mx-auto py-6 text-white rounded-2xl sm:px-12 w-full sm:w-1/3 lg:py-8 lg:text-2xl">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <section>
        <div className="container mx-auto pt-6 pb-8 px-10 lg:px-12 lg:py-16">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-8">
              <img src={logo} alt="" className="w-1/2 sm:w-1/4 lg:w-1/6" />
              <p className="text-grey-0 opacity-50 text-base text-start sm:text-xl">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
              <div className="flex gap-4">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-8 sm:flex-row">
              <div className="flex flex-col gap-4 sm:w-1/3 sm:flex-col sm:justify-normal sm:gap-8">
                <div className="flex justify-between">
                  <h2 className="text-grey-0 font-bold text-lg sm:text-2xl">Company</h2>
                  <img src={icondropdown} alt="" className={`sm:hidden ${activeDropDown === "company" ? "rotate-180" : "rotate-0"}`} onClick={() => handleItemDropDown("company")} />
                </div>
                <div className={`flex flex-col gap-2 sm:flex sm:flex-col sm:gap-8 ${activeDropDown === "company" ? "block" : "hidden"} `}>
                  <p className="text-grey-0 opacity-50 text-base sm:text-[18px]">About</p>
                  <p className="text-grey-0 opacity-50 text-base sm:text-[18px]">Career</p>
                  <p className="text-grey-0 opacity-50 text-base sm:text-[18px]">Mobile</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:w-1/3 sm:flex-col sm:justify-normal sm:gap-8">
                <div className="flex justify-between">
                  <h2 className="text-grey-0 font-bold text-lg sm:text-2xl">Contact Us</h2>
                  <img src={icondropdown} alt="" className={`sm:hidden ${activeDropDown === "contact" ? "rotate-180" : "rotate-0"}`} onClick={() => handleItemDropDown("contact")} />
                </div>
                <div className={`flex flex-col gap-2 sm:flex sm:flex-col sm:gap-8 ${activeDropDown === "contact" ? "block" : "hidden"} `}>
                  <p className="text-grey-0 opacity-50 text-base sm:text-[18px]">Why Travlog?</p>
                  <p className="text-grey-0 opacity-50 text-base sm:text-[18px]">Partner with us</p>
                  <p className="text-grey-0 opacity-50 text-base sm:text-[18px]">FAQ’s</p>
                  <p className="text-grey-0 opacity-50 text-base sm:text-[18px]">Blog</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:w-1/3 sm:flex-col sm:justify-normal sm:gap-8">
                <div className="flex justify-between">
                  <h2 className="text-grey-0 font-bold text-lg sm:text-2xl">Meet Us</h2>
                  <img src={icondropdown} alt="" className={`sm:hidden ${activeDropDown === "meet" ? "rotate-180" : "rotate-0"}`} onClick={() => handleItemDropDown("meet")} />
                </div>
                <div className={`flex flex-col gap-2 sm:flex sm:flex-col sm:gap-8 ${activeDropDown === "meet" ? "block" : "hidden"} `}>
                  <p className="text-grey-0 opacity-50 text-base sm:text-[18px]">+00 92 1234 56789</p>
                  <p className="text-grey-0 opacity-50 text-base sm:text-[18px]">info@travlog.com</p>
                  <p className="text-grey-0 opacity-50 text-base sm:text-[18px]">205. R Street, New York BD23200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
