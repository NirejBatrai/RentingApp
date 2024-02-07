import React from "react";
import Image2 from "../assets/Xadv-750.png";
import Image3 from "../assets/Xmaxx.png";
import khem from "../assets/khem.jpg";
import yasuImage from "../assets/yasuImage.png";
import "./Home.css";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

import AppStoreImg from "../assets/app_store.png";
import PlayStoreImg from "../assets/play_store.png";
import pattern from "../assets/pattern.jpeg";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const skillsData = [
  {
    name: "Best Price",
    icon: (
      <FaCameraRetro className='text-5xl text-primary group-hover:text-black duration-300' />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: (
      <GiNotebook className='text-5xl text-primary group-hover:text-black duration-300' />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "500",
  },
  {
    name: "Experience Drivers",
    icon: (
      <SlNote className='text-5xl text-primary group-hover:text-black duration-500' />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
];

const carList = [
  {
    name: "XADV",
    price: 100,
    image: Image2,
    aosDelay: "0",
  },
  {
    name: "XADV",
    price: 140,
    image: Image2,
    aosDelay: "500",
  },
  {
    name: "XADV",
    price: 100,
    image: Image2,
    aosDelay: "1000",
  },
];

const testimonialData = [
  {
    name: "Khem Khanal",
    image: "khem",
    description: " Im gay n I accept that   ",
    aosDelay: "0",
  },
  {
    name: "Nirmal",
    image: "",
    description: "Good webiste ้นน ย่ย น้ร ",
    aosDelay: "300",
  },
  {
    name: "Yasu",
    image: "yasuImage",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
];

//Footer
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

export default function Home() {
  const imageSpring = useSpring({
    opacity: 1,
    from: { opacity: 0, transform: "translateX(-160px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    transform: "scale(1)",
    delay: 600,
  });

  const textSpring = useSpring({
    opacity: 2,
    from: { opacity: 0, transform: "translateX(160px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    delay: 500,
  });

  const buttonSpring = useSpring({
    from: { opacity: 0, transform: "translateX(-160px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 500 },
  });

  //Appstore
  const bannerImg = {
    backgroundImage: `url(${pattern})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <div className='home-container'>
      <div className='landing-section flex'>
        <animated.img
          src={Image2}
          alt='Xadv motorbike image'
          style={imageSpring}
        />

        <animated.h1 style={textSpring}>Some good shit for you</animated.h1>

        <div className='buttons-container'>
          <animated.button className='button-55' style={buttonSpring}>
            Learn more
          </animated.button>
          <animated.button className='button-55' style={buttonSpring}>
            <Link to='/pricing'>Pick a bike You want</Link>
          </animated.button>
        </div>
      </div>
      <div className='page2-container'>
        <section>
          <div className='dark:bg-gray-200 bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300'>
            <div className='container'>
              <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
                <div data-aos='slide-right' data-aos-duration='1500'>
                  <img
                    src={Image2}
                    alt=''
                    className='sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]'
                  />
                </div>
                <div>
                  <div className='space-y-5 sm:p-16 pb-6'>
                    <h1
                      data-aos='fade-up'
                      className='text-3xl sm:text-4xl font-bold font-serif'
                    >
                      About us
                    </h1>
                    <p data-aos='fade-up' className='leading-8 tracking-wide'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur, magnam! Tenetur odio quo et maxime?
                    </p>
                    <p data-aos='fade-up'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi, tempora.
                    </p>
                    <button
                      data-aos='fade-up'
                      className='button-outline bg-blue-500 text-white font-bold py-2 px-4 rounded'
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='two'>
          <span id='about'></span>
          <div className='dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center'>
            <div className='container'>
              <div className='pb-12'>
                <h1
                  data-aos='fade-up'
                  className='text-3xl font-semibold text-center sm:text-4xl font-serif'
                >
                  Why Choose Us
                </h1>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {skillsData.map((skill) => (
                  <div
                    key={skill.name}
                    data-aos='fade-up'
                    data-aos-delay={skill.aosDelay}
                    className='card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-black rounded-lg'
                  >
                    <div className='grid place-items-center'>{skill.icon}</div>
                    <h1 className='text-2xl font-bold'>{skill.name}</h1>
                    <p>{skill.description}</p>
                    <a
                      href={skill.link}
                      className='inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300'
                    >
                      Learn more
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className='pb-24'>
          <div className='container'>
            <h1
              data-aos='fade-up'
              className='text-3xl sm:text-4xl font-semibold font-serif mb-3'
            >
              Choose what you Perfer
            </h1>
            <p data-aos='fade-up' aos-delay='400' className='text-sm pb-10'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              iure nemo ab?
            </p>

            <div>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
                {carList.map((data) => (
                  <div
                    data-aos='fade-up'
                    data-aos-delay={data.aosDelay}
                    className='space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group'
                  >
                    <div className='w-full h-[120px]'>
                      <img
                        src={data.image}
                        alt=''
                        className='w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700'
                      />
                    </div>
                    <div className='space-y-2'>
                      <h1 className='text-primary font-semibold'>
                        {data.name}
                      </h1>
                      <div className='flex justify-between items-center text-xl font-semibold'>
                        <p>${data.price}/Day</p>
                        <a href='#'>Details</a>
                      </div>
                    </div>
                    <p className='text-xl font-semibold absolute top-0 left-3'>
                      12Km
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className='grid place-items-center mt-8'>
              <button
                data-aos='fade-up'
                className='button-outline bg-black text-white font-bold py-2 px-4 rounded'
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <section className='four'>
          <span id='about'></span>
          <div className='dark:bg-black dark:text-white py-14 sm:pb-24'>
            <div className='container'>
              {/* Header */}
              <div className='space-y-4 pb-12'>
                <p
                  data-aos='fade-up'
                  className='text-3xl font-semibold text-center sm:text-4xl font-serif'
                >
                  What Our Clients Say About Us
                </p>
                <p data-aos='fade-up' className='text-center sm:px-44'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis iure consectetur tempora amet.
                </p>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white'>
                {testimonialData.map((skill) => (
                  <div
                    key={skill.name}
                    data-aos='fade-up'
                    data-aos-delay={skill.aosDelay}
                    className='card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg '
                  >
                    <div className='grid place-items-center '>
                      <img
                        src={yasuImage}
                        alt=''
                        className='rounded-full w-20 h-20'
                      />
                    </div>
                    <div className='text-2xl'>⭐⭐⭐⭐⭐</div>
                    <p>{skill.description}</p>
                    <p className='text-center font-semibold'>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <div
              className=' text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl'
              style={bannerImg}
            >
              <div>
                <div className='space-y-6 max-w-xl mx-auto'>
                  <h1
                    data-aos='fade-up'
                    className='text-2xl text-center sm:text-4xl font-semibold font-serif'
                  >
                    Get Started with our app
                  </h1>
                  <p data-aos='fade-up' className='text-center sm:px-20'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique magnam harum accusantium odit?
                  </p>
                  <div
                    data-aos='fade-up'
                    className='flex flex-wrap justify-center items-center gap-4'
                  >
                    <a href='#'>
                      <img
                        src={PlayStoreImg}
                        alt=''
                        className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                      />
                    </a>
                    <a href='#'>
                      <img
                        src={AppStoreImg}
                        alt=''
                        className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <span id='contact'></span>
          <div
            data-aos='zoom-in'
            className='dark:bg-black dark:text-white py-14'
          >
            <div className='container '>
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6'>
                <div className='col-span-2 space-y-3'>
                  <h1 className='text-4xl sm:text-5xl font-bold text-white'>
                    Let's collaborate on your upcoming Motor rental venture
                  </h1>
                  <p className='text-gray-400'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Exercitationem necessitatibus quasi et vel,{" "}
                  </p>
                </div>
                <div className='sm:grid sm:place-items-center'>
                  <a
                    href='#'
                    className='inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase '
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='bg-gray-700 dark:text-white mt-14 rounded-t-3xl'>
            <div className=' grid md:grid-cols-3 py-5'>
              {/* company Details */}
              <div className=' py-8 px-4 '>
                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif'>
                  Bike Rental
                </h1>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Possimus, voluptate.{" "}
                </p>
                <br />
                <div className='flex items-center gap-3'>
                  <FaLocationArrow />
                  <p>Thailand, Phuket</p>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                  <FaMobileAlt />
                  <p>+66 0813480300</p>
                </div>
                {/* Social Handle */}
                <div className='flex items-center gap-3 mt-6'>
                  <a href='#'>
                    <FaInstagram className='text-3xl hover:text-primary duration-300' />
                  </a>
                  <a href='#'>
                    <FaFacebook className='text-3xl hover:text-primary duration-300' />
                  </a>
                  <a href='#'>
                    <FaLinkedin className='text-3xl hover:text-primary duration-300' />
                  </a>
                </div>
              </div>
              {/* Links */}
              <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 '>
                <div className=''>
                  <div className='py-8 px-4 '>
                    <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                      Important Links
                    </h1>
                    <ul className={`flex flex-col gap-3`}>
                      {FooterLinks.map((link) => (
                        <li className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200'>
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className=''>
                  <div className='py-8 px-4 '>
                    <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                      Links
                    </h1>
                    <ul className='flex flex-col gap-3'>
                      {FooterLinks.map((link) => (
                        <li className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200'>
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className=''>
                  <div className='py-8 px-4 '>
                    <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                      Location
                    </h1>
                    {/* <ul className="list-disc list-inside"> */}
                    <ul className='flex flex-col gap-3'>
                      {FooterLinks.map((link) => (
                        <li className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200'>
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
