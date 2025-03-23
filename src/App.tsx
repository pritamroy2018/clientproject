// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css';

import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { SwiperNavButtons } from './components/SwiperNavButton';

function App() {
    // const [count, setCount] = useState(0)




    return (
        <>



            <section className="w-full bg-[url(images/banner.png)] py-20 bg-center bg-cover sm:h-dvh h-auto relative max-sm:bg-left">
                <div className="absolute w-full h-full z-0 left-0 top-0 bg-linear-to-r from-transparent to-slate-950/80 max-sm:bg-linear-to-t max-sm:from-blue-900/80" />
                <div className="max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-0">
                    <div className="absolute z-20 w-full h-full top-0 left-0 flex items-center max-sm:relative max-sm:top-10">
                        <div className="max-w-[85rem] w-full mx-auto flex px-0 md:px-6 lg:px-0 justify-end">
                            <div className="sm:w-3xl w-full">
                                <h4 className="uppercase text-sm text-bold text-white py-3 max-sm:hidden"><span className="bg-blue-800 px-5 py-2 inline-block rounded-3xl">Welcome to out company</span></h4>
                                <h1 className="text-3xl sm:text-[66px] font-bold text-white">Discover strategies from our industry experts</h1>
                                <div className="lg:max-w-xl max-w-full">
                                    <p className="text-gray-300 py-4">What’s trending in 2025? Get timely insights and practical strategies from our industry experts—and get ready to lead with confidence through a year of transformation.</p>
                                </div>
                                <div className="flex gap-7 sm:pt-10">
                                    <a href="#" className="py-3 px-5 bg-black/40 text-white rounded-lg hover:bg-black/60 transition-all hover:duration-300 hover:ease-in hover:px-7 max-sm:hidden">
                                        Reach our expert
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 inline-block ml-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                        </svg>
                                    </a>
                                    <a href="#" className="py-3 px-5 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all hover:duration-100 hover:ease-in hover:px-7 inline-block max-sm:mt-7">Start a project
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 inline-block ml-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-[#010728] py-15 lg:py-30 px-4">
                <div className="max-w-[85rem] w-full mx-auto">
                    <div className="max-w-6xl w-full mx-auto">
                        <h2 className="lg:text-[47px] text-2xl text-center text-white font-light poppins leading-snug">Slalom is a fiercely human business and technology consulting company that teams with leaders who expect more. So we <span className="italic text-blue-700">bring more</span>.</h2>
                    </div>
                </div>
            </div>

            <div className="bg-[#010700] pt-15">
                <div className="w-full h-10 hidden md:block" />
                <div className="relative md:mt-5 ">
                    <div className="lg:max-w-[97%] max-w-[85rem] w-full mx-auto md:px-4">
                        <div className="flex justify-end md:border-1 border-blue-700 md:py-20 relative z-10 rounded-tr-3xl">
                            <div className="md:w-1/2 w-full lg:pr-10 lg:pl-10 max-md:px-4">
                                <h2 className="text-white font-medium text-3xl lg:text-[42px] mb-10">2025 Industry Outlooks</h2>
                                <div className="flex flex-rows items-center justify-between mt-7">
                                    <div className="flex md:gap-10 gap-4 items-center">
                                        <img src="https://www.slalom.com/adobe/dynamicmedia/deliver/dm-aid--1b0fac55-d89c-4e33-b164-0cb0525e6e54/financial-thumbnail-teaser.jpg?width=1600&preferwebp=true&quality=85" className="md:w-40 w-25 shrink-0 rounded-lg" />
                                        <a href="#" className="text-white md:text-xl text-md font-semibold hover:text-blue-500">Explore financial services trends
                                        </a>
                                    </div>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-10 inline-block text-white lg:ml-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="flex flex-rows items-center justify-between mt-7">
                                    <div className="flex md:gap-10 gap-4 items-center">
                                        <img src="https://www.slalom.com/adobe/dynamicmedia/deliver/dm-aid--5288df45-0e65-496a-8f29-ae4de75e2e8c/government-thumb.jpg?width=1600&preferwebp=true&quality=85" className="md:w-40 w-25 shrink-0 rounded-lg" />
                                        <a href="#" className="text-white md:text-xl text-md font-semibold hover:text-blue-500">Explore government services trends
                                        </a>
                                    </div>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-10 inline-block text-white lg:ml-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="flex flex-rows items-center justify-between mt-7">
                                    <div className="flex md:gap-10 gap-4 items-center">
                                        <img src="https://www.slalom.com/adobe/dynamicmedia/deliver/dm-aid--a96a6056-768a-4b36-9f38-1c3e8b6c27c4/healthcare-thumb.jpg?width=1600&preferwebp=true&quality=85" className="md:w-40 w-25 shrink-0 rounded-lg" />
                                        <a href="#" className="text-white md:text-xl text-md font-semibold hover:text-blue-500">Explore healthcare trends
                                        </a>
                                    </div>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-10 inline-block text-white lg:ml-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="flex flex-rows items-center justify-between mt-7">
                                    <div className="flex md:gap-10 gap-4 items-center">
                                        <img src="https://www.slalom.com/adobe/dynamicmedia/deliver/dm-aid--6a2e0d5e-ea2b-42b1-be4c-0e2bb42f3e59/life-sciences-thumb.jpg?width=1600&preferwebp=true&quality=85" className="md:w-40 w-25 shrink-0 rounded-lg" />
                                        <a href="#" className="text-white md:text-xl text-md font-semibold hover:text-blue-500">Explore life sciences trends
                                        </a>
                                    </div>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-10 inline-block text-white lg:ml-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="flex flex-rows items-center justify-between mt-7">
                                    <div className="flex md:gap-10 gap-4 items-center">
                                        <img src="https://www.slalom.com/adobe/dynamicmedia/deliver/dm-aid--4b1e09ad-f431-4d04-842f-f03cd8f712a0/media-comms-thumb.jpg?width=1600&preferwebp=true&quality=85" className="md:w-40 w-25 shrink-0 rounded-lg" />
                                        <a href="#" className="text-white md:text-xl text-md font-semibold hover:text-blue-500">Explore media &amp; comms trends
                                        </a>
                                    </div>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-10 inline-block text-white lg:ml-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-left md:absolute relative top-0 md:w-1/2 w-full">
                        <div className="w-full h-full pt-20">
                            <div className="md:pr-30 pr-4">
                                <img src="https://www.slalom.com/adobe/dynamicmedia/deliver/dm-aid--287a6420-39f9-4207-8b12-ba96ceb59316/2025-industry-outlooks-figjam.jpg?width=1600&preferwebp=true&quality=85" className="object-cover w-full md:h-110 h-full rounded-tr-2xl" />
                            </div>
                            <div className="md:p-10 md:pl-20 max-md:py-10 max-md:px-4">
                                <h2 className="text-white lg:text-[44px] text-3xl poppins font-light">Discover strategies from our industry experts</h2>
                                <p className="text-gray-300 py-4 text-lg font-semibold">What’s trending in 2025? Get timely insights and practical strategies from our industry experts—and get ready to lead with confidence through a year of transformation. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







            <div className="bg-black py-15 lg:py-30">
                <div className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-0">
                    <div className="max-w-5xl w-full lg:mb-15 mb-7">
                        <p className="text-blue-700 uppercase lg:text-md max-sm:text-sm font-medium poppins py-3">Service we offer</p>
                        <h2 className="lg:text-[45px] text-3xl text-white font-medium poppins max-sm:pb-7">Navigate The Digital Frontier with our Engineering Excellence</h2>
                    </div>
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
                        <div className="text-left bg-[#212121] lg:p-7 p-5 hover:bg-[#191919] border-b-7 border-transparent hover:border-blue-300 rounded-lg outline-[#312e2e] outline-1">
                            <span className="block"><img src="images/artificial-intelligence.png" className="invert-100 size-10" /></span>
                            <h2 className="text-white text-lg py-4">Mobile App Development</h2>
                            <p className="text-gray-200 poppins text-sm">We build intuitive, responsive mobile apps tailored to meet your specific business needs and enhance user engagement.</p>
                        </div>
                        <div className="text-left bg-[#212121] lg:p-7 p-5 hover:bg-[#191919] border-b-7 border-transparent hover:border-blue-300 rounded-lg outline-[#312e2e] outline-1">
                            <span className="block"><img src="images/artificial-intelligence.png" className="invert-100 size-10" /></span>
                            <h2 className="text-white text-lg py-4">Software Development</h2>
                            <p className="text-gray-200 poppins text-sm">We build intuitive, responsive mobile apps tailored to meet your specific business needs and enhance user engagement.</p>
                        </div>
                        <div className="text-left bg-[#212121] lg:p-7 p-5 hover:bg-[#191919] border-b-7 border-transparent hover:border-blue-300 rounded-lg outline-[#312e2e] outline-1">
                            <span className="block"><img src="images/artificial-intelligence.png" className="invert-100 size-10" /></span>
                            <h2 className="text-white text-lg py-4">Digital Transformation</h2>
                            <p className="text-gray-200 poppins text-sm">We build intuitive, responsive mobile apps tailored to meet your specific business needs and enhance user engagement.</p>
                        </div>
                        <div className="text-left bg-[#212121] lg:p-7 p-5 hover:bg-[#191919] border-b-7 border-transparent hover:border-blue-300 rounded-lg outline-[#312e2e] outline-1">
                            <span className="block"><img src="images/artificial-intelligence.png" className="invert-100 size-10" /></span>
                            <h2 className="text-white text-lg py-4">Ideation and Design Strategy</h2>
                            <p className="text-gray-200 poppins text-sm">We build intuitive, responsive mobile apps tailored to meet your specific business needs and enhance user engagement.</p>
                        </div>
                        <div className="text-left bg-[#212121] lg:p-7 p-5 hover:bg-[#191919] border-b-7 border-transparent hover:border-blue-300 rounded-lg outline-[#312e2e] outline-1">
                            <span className="block"><img src="images/artificial-intelligence.png" className="invert-100 size-10" /></span>
                            <h2 className="text-white text-lg py-4">IT Consulting</h2>
                            <p className="text-gray-200 poppins text-sm">We build intuitive, responsive mobile apps tailored to meet your specific business needs and enhance user engagement.</p>
                        </div>
                        <div className="text-left bg-[#212121] lg:p-7 p-5 hover:bg-[#191919] border-b-7 border-transparent hover:border-blue-300 rounded-lg outline-[#312e2e] outline-1">
                            <span className="block"><img src="images/artificial-intelligence.png" className="invert-100 size-10" /></span>
                            <h2 className="text-white text-lg py-4">DevOps</h2>
                            <p className="text-gray-200 poppins text-sm">We build intuitive, responsive mobile apps tailored to meet your specific business needs and enhance user engagement.</p>
                        </div>
                        <div className="text-left bg-[#212121] lg:p-7 p-5 hover:bg-[#191919] border-b-7 border-transparent hover:border-blue-300 rounded-lg outline-[#312e2e] outline-1">
                            <span className="block"><img src="images/artificial-intelligence.png" className="invert-100 size-10" /></span>
                            <h2 className="text-white text-lg py-4">Cloud Manage Services</h2>
                            <p className="text-gray-200 poppins text-sm">We build intuitive, responsive mobile apps tailored to meet your specific business needs and enhance user engagement.</p>
                        </div>
                        <div className="text-left bg-[#212121] lg:p-7 p-5 hover:bg-[#191919] border-b-7 border-transparent hover:border-blue-300 rounded-lg outline-[#312e2e] outline-1">
                            <span className="block"><img src="images/artificial-intelligence.png" className="invert-100 size-10" /></span>
                            <h2 className="text-white text-lg py-4">Artificial Intelligence</h2>
                            <p className="text-gray-200 poppins text-sm">We build intuitive, responsive mobile apps tailored to meet your specific business needs and enhance user engagement.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black py-15 lg:pb-30">
                <div className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-0">
                    <div className="max-w-5xl w-full">
                        <h2 className="lg:text-[45px] text-3xl text-white font-medium poppins max-sm:pb-7">A Unified Vision That Create to Diverse Industry Demanda</h2>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 text-white gap-4 lg:mt-20 mt-10">
                        <div className="text-center border-1 border-gray-200/20 rounded-lg py-4 hover:border-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline-block group-hover:size-8 transition-all">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <p className="py-4 text-white text-lg">HealthCare</p>
                        </div>
                        <div className="text-center border-1 border-gray-200/20 rounded-lg py-4 hover:border-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline-block group-hover:size-8 transition-all">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <p className="py-4 text-white text-lg">Finance</p>
                        </div>
                        <div className="text-center border-1 border-gray-200/20 rounded-lg py-4 hover:border-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline-block group-hover:size-8 transition-all">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <p className="py-4 text-white text-lg">Restaurant</p>
                        </div>
                        <div className="text-center border-1 border-gray-200/20 rounded-lg py-4 hover:border-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline-block group-hover:size-8 transition-all">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <p className="py-4 text-white text-lg">eCommerce</p>
                        </div>
                        <div className="text-center border-1 border-gray-200/20 rounded-lg py-4 hover:border-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline-block group-hover:size-8 transition-all">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <p className="py-4 text-white text-lg">Electric Vehical (EV)</p>
                        </div>
                        <div className="text-center border-1 border-gray-200/20 rounded-lg py-4 hover:border-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline-block group-hover:size-8 transition-all">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <p className="py-4 text-white text-lg">SaaS</p>
                        </div>
                        <div className="text-center border-1 border-gray-200/20 rounded-lg py-4 hover:border-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline-block group-hover:size-8 transition-all">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <p className="py-4 text-white text-lg">Travel</p>
                        </div>
                        <div className="text-center border-1 border-gray-200/20 rounded-lg py-4 hover:border-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline-block group-hover:size-8 transition-all">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <p className="py-4 text-white text-lg">Entertainment</p>
                        </div>
                        <div className="text-center border-1 border-gray-200/20 rounded-lg py-4 hover:border-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline-block group-hover:size-8 transition-all">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <p className="py-4 text-white text-lg">On-Demand</p>
                        </div>
                        <div className="text-center border-1 border-gray-200/20 rounded-lg py-4 hover:border-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline-block group-hover:size-8 transition-all">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <p className="py-4 text-white text-lg">Social Media</p>
                        </div>
                        <div className="text-center border-1 border-gray-200/20 rounded-lg py-4 hover:border-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline-block group-hover:size-8 transition-all">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <p className="py-4 text-white text-lg">Logistics</p>
                        </div>
                        <div className="text-center border-1 border-gray-200/20 rounded-lg py-4 hover:border-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline-block group-hover:size-8 transition-all">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <p className="py-4 text-white text-lg">Education</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-950 py-15 lg:py-30 px-4">
                <div className="max-w-[85rem] w-full mx-auto">
                    <div className="max-w-5xl w-full">
                        <h2 className="lg:text-[45px] text-3xl text-white text-left font-medium poppins">AI that drives real impact</h2>
                        <p className="text-gray-300 py-3 text-lg">From strategy to implementation, Slalom helps businesses unlock the full potential of AI—driving innovation, efficiency, and measurable results.</p>
                    </div>
                    <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 lg:mt-15 mt-7">
                        <div>
                            <img src="https://www.slalom.com/adobe/dynamicmedia/deliver/dm-aid--2a576a76-c2cc-4572-8768-395a6eddfe97/aws-poy-2024-1920-1080.png?width=1600&preferwebp=true&quality=85" className="rounded-3xl" />
                            <h2 className="text-white font-medium poppins text-3xl pt-5 pb-2">Recognized AI leadership</h2>
                            <p className="text-gray-300 text-base">AWS GenAI Consulting Partner of the Year - Global</p>
                            <a href="#" className="inline-block px-8 py-2 border-1 border-gray-300 rounded-lg text-white my-7 hover:bg-blue-700 hover:border-blue-500">Read more</a>
                        </div>
                        <div>
                            <img src="https://www.slalom.com/adobe/dynamicmedia/deliver/dm-aid--7222c9ea-ec90-4b97-9d31-4beceb116b4a/ai-to-roi-1920x1080.jpg?width=1600&preferwebp=true&quality=85" className="rounded-3xl" />
                            <h2 className="text-white font-medium poppins text-3xl pt-5 pb-2">AI to ROI framework</h2>
                            <p className="text-gray-300 text-base">See how we turn AI ambition into measurable business value</p>
                            <a href="#" className="inline-block px-8 py-2 border-1 border-gray-300 rounded-lg text-white my-7 hover:bg-blue-700 hover:border-blue-500">Read more</a>
                        </div>
                        <div>
                            <img src="https://www.slalom.com/adobe/dynamicmedia/deliver/dm-aid--13daf009-8fb0-486c-909d-db8122e4c5e6/slalom-ai-researchreport-staticheader-2500x1400.png?width=1600&preferwebp=true&quality=85" className="rounded-3xl" />
                            <h2 className="text-white font-medium poppins text-3xl pt-5 pb-2">AI research &amp; insights</h2>
                            <p className="text-gray-300 text-base">Key findings from Slalom’s AI Research Report</p>
                            <a href="#" className="inline-block px-8 py-2 border-1 border-gray-300 rounded-lg text-white my-7 hover:bg-blue-700 hover:border-blue-500">Read more</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-15 lg:py-30 px-4 bg-[url(images/contact-back2.jpg)] bg-center bg-cover bg-no-repeat">
                <div className="mx-auto max-w-[85rem]">
                    <div className="grid lg:grid-cols-2 grid-cols-1">
                        <div className="lg:mb-0 mb-10">
                            <div className="group w-full h-full">
                                <div className="relative h-full">
                                    <img src="https://pagedone.io/asset/uploads/1696488602.png" alt="ContactUs" className="w-full h-full lg:rounded-l-2xl bg-blend-multiply bg-indigo-700 max-sm:rounded-lg object-cover" />
                                    <h2 className="text-white text-3xl font-bold leading-10 absolute top-11 left-11">Contact us</h2>
                                    <div className="absolute bottom-0 w-full lg:p-11 p-5">
                                        <div className="bg-white rounded-lg p-4 block">
                                            <a href="javascript:;" className="flex items-center lg:mb-6 mb-3">
                                                <svg className="size-6" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z" stroke="#126cfc" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <h5 className="text-black text-base font-normal leading-6 ml-5">470-601-1911</h5>
                                            </a>
                                            <a href="https://veilmail.io/irish-geoff" className="flex items-center lg:mb-6 mb-3">
                                                <svg className="size-6" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z" stroke="#126cfc" strokeWidth={2} strokeLinecap="round" />
                                                </svg>
                                                <h5 className="text-black text-base font-normal leading-6 ml-5">info@domainname.com</h5>
                                            </a>
                                            <a href="javascript:;" className="flex items-center">
                                                <svg className="lg:size-6 size-10" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z" stroke="#4F46E5" strokeWidth={2} />
                                                    <path d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z" stroke="#126cfc" strokeWidth={2} />
                                                </svg>
                                                <h5 className="text-black text-base font-normal leading-6 ml-5">654 Sycamore Avenue, Meadowville, WA 76543</h5>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-black/80 p-5 lg:p-11 lg:rounded-r-xl  max-sm:rounded-lg">
                            <h2 className="text-white text-3xl font-semibold leading-10">Consult us now!</h2>
                            <p className="text-gray-200 mb-10">Book a free consultation call with our experts today</p>
                            <input type="text" className="w-full h-12 text-gray-300 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7  border-b-1 border-gray-700 focus:outline-none focus:border-gray-500 pl-1 mb-5" placeholder="Name" />
                            <input type="text" className="w-full h-12 text-gray-300 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7  border-b-1 border-gray-700 focus:outline-none focus:border-gray-500 pl-1 mb-5" placeholder="E-mail ID *" />
                            <input type="text" className="w-full h-12 text-gray-300 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7  border-b-1 border-gray-700 focus:outline-none focus:border-gray-500 pl-1 mb-5" placeholder="Contact number" />
                            <div className="mb-10 mt-5">
                                <h4 className="text-gray-300 text-lg font-normal leading-7 mb-4">Preferred method  of communication</h4>
                                <div className="flex">
                                    <div className="flex items-center mr-11">
                                        <input id="radio-group-1" type="radio" name="radio-group" className="hidden checked:bg-no-repeat checked:bg-center checked:border-blue-500 checked:bg-blue-100" />
                                        <label htmlFor="radio-group-1" className="flex items-center cursor-pointer text-gray-400 text-base font-normal leading-6">
                                            <span className="border border-gray-300 rounded-full mr-2 w-4 h-4  ml-2 " /> Email
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="radio-group-2" type="radio" name="radio-group" className="hidden checked:bg-no-repeat checked:bg-center checked:border-blue-500 checked:bg-blue-100" />
                                        <label htmlFor="radio-group-2" className="flex items-center cursor-pointer text-gray-400 text-base font-normal leading-6">
                                            <span className="border border-gray-300  rounded-full mr-2 w-4 h-4  ml-2 " /> Phone
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <textarea className="w-full h-35 text-gray-300 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7  border-b-1 border-gray-300 focus:outline-none focus:border-gray-500 pl-1 mb-10" placeholder="Type message" defaultValue={""} />
                            <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-lg transition-all duration-700 hover:bg-blue-900 bg-blue-700 shadow-sm cursor-pointer">Send</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black py-15 lg:py-30 px-4">
                <div className="lg:max-w-[85rem] w-full mx-auto overflow-hidden">
                    <div className="mb-10 flex items-center flex-row items-center justify-between max-sm:gap-8">
                        
                        {/* Slider controls */}
                        <div className="flex items-center gap-8 mt-5 max-sm:hidden">
                            <button id="slider-button-left" className="swiper-button-prev group flex justify-center items-center border border-solid border-blue-700 inline-block w-32 h-32 transition-all duration-500 rounded-full hover:bg-blue-900 " data-carousel-prev>
                                
                            </button>
                            <button id="slider-button-right" className="swiper-button-next group flex justify-center items-center border border-solid border-blue-700 w-12 h-12 transition-all duration-500 rounded-full hover:bg-blue-900" data-carousel-next>
                                
                            </button>
                        </div>
                    </div>
                    
                <div className='min-w-[1200px]'>
                    <Swiper modules={[Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={4}
                        breakpoints={{ 768: { slidesPerView: 4 } }}
                        // pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <div className='relative flex justify-between mb-10' slot="container-start">
                            <h2 className="lg:text-[45px] text-3xl text-white text-left font-medium poppins">Our Artificial Intelligence insights</h2>
                            <SwiperNavButtons />
                        </div>
                        <SwiperSlide>
                            <div className="bg-zinc-900 rounded-b-2xl relative lg:mt-12 mt-5">
                                <a href="#">
                                    <div className="absolute w-full h-full top-0 left-0 bg-blue-700 p-5 z-1 transition-all duration-300 rounded-b-2xl opacity-[0] hover:opacity-100">
                                        <p className="uppercase text-md text-gray-200 lg:tracking-[2px] poppins py-3">Customer Story</p>
                                        <h4 className="poppins text-2xl text-[24px] text-white font-normal">Learn how we partnered with LogicMonitor to develop a technical support GenAI chatbot that’s launched an ongoing AI program.</h4>
                                        <div className="py-4 mt-3">
                                            <h5 className="poppins font-semibold text-md">Industry Group</h5>
                                            <p className="text-gray-200 py-1">Technology</p>
                                        </div>
                                        <div className="py-4">
                                            <h5 className="poppins font-semibold text-md">Industry</h5>
                                            <p className="text-gray-200 py-1">Software</p>
                                        </div>
                                        <div className="absolute w-full bottom-0 bg-blue-900 left-0 px-4 py-4 rounded-b-2xl">
                                            <div className="flex justify-between w-full">
                                                <div>
                                                    <p className="text-lg text-white font-bold transition-all hover:px-2">Read story
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 inline-block">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                                        </svg>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-300 text-md">5 min read</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <span className="block sm:h-[370px] h-[350px] w-full"><img src="https://s7d9.scene7.com/is/image/slalom/OTD_CustomerStory_LogicMonitor_thumbnail?fmt=webp-alpha" className="h-full object-cover" /></span>
                                <div className="py-5 px-5 h-65 relative">
                                    <p className="uppercase text-md text-gray-300 lg:tracking-[2px] poppins py-3">Customer Story</p>
                                    <h2 className="text-2xl font-bold text-white">AI-powered upgrade for enhanced support and compliance</h2>
                                    <h3 className="text-gray-400 absolute bottom-5 italic poppins">Solenis</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-zinc-900 rounded-b-2xl relative lg:mt-12 mt-5">
                                <a href="#">
                                    <div className="absolute w-full h-full top-0 left-0 bg-blue-700 p-5 z-1 transition-all duration-300 rounded-b-2xl opacity-[0] hover:opacity-100">
                                        <p className="uppercase text-md text-gray-200 lg:tracking-[2px] poppins py-3">Customer Story</p>
                                        <h4 className="poppins text-2xl text-[24px] text-white font-normal">Learn how we partnered with LogicMonitor to develop a technical support GenAI chatbot that’s launched an ongoing AI program.</h4>
                                        <div className="py-4 mt-3">
                                            <h5 className="poppins font-semibold text-md">Industry Group</h5>
                                            <p className="text-gray-200 py-1">Technology</p>
                                        </div>
                                        <div className="py-4">
                                            <h5 className="poppins font-semibold text-md">Industry</h5>
                                            <p className="text-gray-200 py-1">Software</p>
                                        </div>
                                        <div className="absolute w-full bottom-0 bg-blue-900 left-0 px-4 py-4 rounded-b-2xl">
                                            <div className="flex justify-between w-full">
                                                <div>
                                                    <p className="text-lg text-white font-bold transition-all hover:px-2">Read story
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 inline-block">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                                        </svg>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-300 text-md">5 min read</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <span className="block sm:h-[370px] h-[350px] w-full"><img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-full w-full object-cover" /></span>
                                <div className="py-5 px-5 h-65 relative">
                                    <p className="uppercase text-md text-gray-300 lg:tracking-[2px] poppins py-3">Customer Story</p>
                                    <h2 className="text-2xl font-bold text-white">AI-powered upgrade for enhanced support and compliance</h2>
                                    <h3 className="text-gray-400 absolute bottom-5 italic poppins">Solenis</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-zinc-900 rounded-b-2xl relative lg:mt-12 mt-5">
                                <a href="#">
                                    <div className="absolute w-full h-full top-0 left-0 bg-blue-700 p-5 z-1 transition-all duration-300 rounded-b-2xl opacity-[0] hover:opacity-100">
                                        <p className="uppercase text-md text-gray-200 lg:tracking-[2px] poppins py-3">Customer Story</p>
                                        <h4 className="poppins text-2xl text-[24px] text-white font-normal">Learn how we partnered with LogicMonitor to develop a technical support GenAI chatbot that’s launched an ongoing AI program.</h4>
                                        <div className="py-4 mt-3">
                                            <h5 className="poppins font-semibold text-md">Industry Group</h5>
                                            <p className="text-gray-200 py-1">Technology</p>
                                        </div>
                                        <div className="py-4">
                                            <h5 className="poppins font-semibold text-md">Industry</h5>
                                            <p className="text-gray-200 py-1">Software</p>
                                        </div>
                                        <div className="absolute w-full bottom-0 bg-blue-900 left-0 px-4 py-4 rounded-b-2xl">
                                            <div className="flex justify-between w-full">
                                                <div>
                                                    <p className="text-lg text-white font-bold transition-all hover:px-2">Read story
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 inline-block">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                                        </svg>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-300 text-md">5 min read</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <span className="block sm:h-[370px] h-[350px] w-full"><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-full w-full object-cover " /></span>
                                <div className="py-5 px-5 h-65 relative">
                                    <p className="uppercase text-md text-gray-300 lg:tracking-[2px] poppins py-3">Customer Story</p>
                                    <h2 className="text-2xl font-bold text-white">AI-powered upgrade for enhanced support and compliance</h2>
                                    <h3 className="text-gray-400 absolute bottom-5 italic poppins">Solenis</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-zinc-900 rounded-b-2xl relative lg:mt-12 mt-5">
                                <a href="#">
                                    <div className="absolute w-full h-full top-0 left-0 bg-blue-700 p-5 z-1 transition-all duration-300 rounded-b-2xl opacity-[0] hover:opacity-100">
                                        <p className="uppercase text-md text-gray-200 lg:tracking-[2px] poppins py-3">Customer Story</p>
                                        <h4 className="poppins text-2xl text-[24px] text-white font-normal">Learn how we partnered with LogicMonitor to develop a technical support GenAI chatbot that’s launched an ongoing AI program.</h4>
                                        <div className="py-4 mt-3">
                                            <h5 className="poppins font-semibold text-md">Industry Group</h5>
                                            <p className="text-gray-200 py-1">Technology</p>
                                        </div>
                                        <div className="py-4">
                                            <h5 className="poppins font-semibold text-md">Industry</h5>
                                            <p className="text-gray-200 py-1">Software</p>
                                        </div>
                                        <div className="absolute w-full bottom-0 bg-blue-900 left-0 px-4 py-4 rounded-b-2xl">
                                            <div className="flex justify-between w-full">
                                                <div>
                                                    <p className="text-lg text-white font-bold transition-all hover:px-2">Read story
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 inline-block">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                                        </svg>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-300 text-md">5 min read</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <span className="block sm:h-[370px] h-[350px] w-full"><img src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-full w-full object-cover" /></span>
                                <div className="py-5 px-5 h-65 relative">
                                    <p className="uppercase text-md text-gray-300 lg:tracking-[2px] poppins py-3">Customer Story</p>
                                    <h2 className="text-2xl font-bold text-white">AI-powered upgrade for enhanced support and compliance</h2>
                                    <h3 className="text-gray-400 absolute bottom-5 italic poppins">Solenis</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-zinc-900 rounded-b-2xl relative lg:mt-12 mt-5">
                                <a href="#">
                                    <div className="absolute w-full h-full top-0 left-0 bg-blue-700 p-5 z-1 transition-all duration-300 rounded-b-2xl opacity-[0] hover:opacity-100">
                                        <p className="uppercase text-md text-gray-200 lg:tracking-[2px] poppins py-3">Customer Story</p>
                                        <h4 className="poppins text-2xl text-[24px] text-white font-normal">Learn how we partnered with LogicMonitor to develop a technical support GenAI chatbot that’s launched an ongoing AI program.</h4>
                                        <div className="py-4 mt-3">
                                            <h5 className="poppins font-semibold text-md">Industry Group</h5>
                                            <p className="text-gray-200 py-1">Technology</p>
                                        </div>
                                        <div className="py-4">
                                            <h5 className="poppins font-semibold text-md">Industry</h5>
                                            <p className="text-gray-200 py-1">Software</p>
                                        </div>
                                        <div className="absolute w-full bottom-0 bg-blue-900 left-0 px-4 py-4 rounded-b-2xl">
                                            <div className="flex justify-between w-full">
                                                <div>
                                                    <p className="text-lg text-white font-bold transition-all hover:px-2">Read story
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 inline-block">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                                        </svg>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-300 text-md">5 min read</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <span className="block sm:h-[370px] h-[350px] w-full"><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-full w-full object-cover " /></span>
                                <div className="py-5 px-5 h-65 relative">
                                    <p className="uppercase text-md text-gray-300 lg:tracking-[2px] poppins py-3">Customer Story</p>
                                    <h2 className="text-2xl font-bold text-white">AI-powered upgrade for enhanced support and compliance</h2>
                                    <h3 className="text-gray-400 absolute bottom-5 italic poppins">Solenis</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>

                </div>
            </div>

            <div className="bg-black py-15 lg:pb-30 px-4">
                <div className="lg:max-w-[85rem] w-full mx-auto">
                    <div className="mb-14 flex items-center flex-row items-center justify-between max-sm:gap-8">
                        <h2 className="lg:text-[45px] text-3xl text-white text-left font-medium poppins">What our customers say </h2>
                        {/* Slider controls */}
                        <div className="flex items-center gap-8 mt-5">
                            <button id="slider-button-left" className="swiper-button-prev group flex justify-center items-center border border-solid border-blue-700 inline-block w-32 h-32 transition-all duration-500 rounded-full hover:bg-blue-900 " data-carousel-prev>
                                <svg className="size-6 text-blur-700 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button id="slider-button-right" className="swiper-button-next group flex justify-center items-center border border-solid border-blue-700 w-12 h-12 transition-all duration-500 rounded-full hover:bg-blue-900" data-carousel-next>
                                <svg className="h-6 w-6 text-blue-700 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/*Slider wrapper*/}
                    <div className="lg:flex grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 swiper mySwiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide group bg-zinc-900 border border-solid h-auto border-gray-300/20 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide-active:border-indigo-600">
                                <img src="https://www.slalom.com/adobe/dynamicmedia/deliver/dm-aid--505b9bae-f696-4675-9ccf-3eec668c082f/microsoftteams-image--29-.png?width=1600&preferwebp=true&quality=85" className="h-12" />
                                <p className="text-md text-gray-200 transition-all duration-500 mb-9 pt-3">I very much enjoyed partnering with the Slalom team. The mix of digital expertise, delivery focus, and client-focused culture contributed directly to our accelerated digital journey.</p>
                                <div className="flex items-center gap-5">
                                    <img className="rounded-full object-cover" src="https://pagedone.io/asset/uploads/1696229969.png" alt="avatar" />
                                    <div className="grid gap-1">
                                        <h5 className="text-gray-100 text-lg font-medium transition-all duration-500"> Jane D</h5>
                                        <span className="text-sm leading-6 text-gray-200">CEO </span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide group bg-zinc-900 border border-solid h-auto border-gray-300/20 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide-active:border-indigo-600">
                                <img src="https://www.slalom.com/adobe/dynamicmedia/deliver/dm-aid--505b9bae-f696-4675-9ccf-3eec668c082f/microsoftteams-image--29-.png?width=1600&preferwebp=true&quality=85" className="h-12" />
                                <p className="text-md text-gray-200 transition-all duration-500 mb-9 pt-3"> I was hesitant to try pagedone at first, but I'm so glad I did - it's exceeded all of my expectations. </p>
                                <div className="flex items-center gap-5">
                                    <img className="rounded-full object-cover" src="https://pagedone.io/asset/uploads/1696229994.png" alt="avatar" />
                                    <div className="grid gap-1">
                                        <h5 className="text-gray-100 text-lg font-medium transition-all duration-500"> Harsh P.</h5>
                                        <span className="text-sm leading-6 text-gray-200">Product Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide group bg-zinc-900 border border-solid h-auto border-gray-300/20 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 ">
                                <img src="https://www.slalom.com/adobe/dynamicmedia/deliver/dm-aid--505b9bae-f696-4675-9ccf-3eec668c082f/microsoftteams-image--29-.png?width=1600&preferwebp=true&quality=85" className="h-12" />
                                <p className="text-md text-gray-200 transition-all duration-500 mb-9 pt-3"> Pagedone stands out as the most user-friendly and effective solution I've ever used. </p>
                                <div className="flex items-center gap-5">
                                    <img className="rounded-full object-cover" src="https://pagedone.io/asset/uploads/1696230027.png" alt="avatar" />
                                    <div className="grid gap-1">
                                        <h5 className="text-gray-100 text-lg font-medium transition-all duration-500"> Alex K.</h5>
                                        <span className="text-sm leading-6 text-gray-200">Design Lead</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide group bg-zinc-900 border border-solid h-auto border-gray-300/20 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide-active:border-indigo-600">
                                <img src="https://www.slalom.com/adobe/dynamicmedia/deliver/dm-aid--505b9bae-f696-4675-9ccf-3eec668c082f/microsoftteams-image--29-.png?width=1600&preferwebp=true&quality=85" className="h-12" />
                                <p className="text-md text-gray-200 transition-all duration-500 mb-9 pt-3"> Pagedone is simply the best tool of investment in the market right now. </p>
                                <div className="flex items-center gap-5">
                                    <img className="rounded-full object-cover" src="https://pagedone.io/asset/uploads/1696229969.png" alt="avatar" />
                                    <div className="grid gap-1">
                                        <h5 className="text-gray-100 text-lg font-medium transition-all duration-500"> Jane D</h5>
                                        <span className="text-sm leading-6 text-gray-200">CEO </span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide group bg-zinc-900 border border-solid h-auto border-gray-300/20 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 ">
                                <img src="https://www.slalom.com/adobe/dynamicmedia/deliver/dm-aid--505b9bae-f696-4675-9ccf-3eec668c082f/microsoftteams-image--29-.png?width=1600&preferwebp=true&quality=85" className="h-12" />
                                <p className="text-md text-gray-200 transition-all duration-500 mb-9 pt-3"> I was hesitant to try pagedone at first, but I'm so glad I did - it's exceeded all of my expectations. </p>
                                <div className="flex items-center gap-5">
                                    <img className="rounded-full object-cover" src="https://pagedone.io/asset/uploads/1696229994.png" alt="avatar" />
                                    <div className="grid gap-1">
                                        <h5 className="text-gray-100 text-lg font-medium transition-all duration-500"> Harsh P.</h5>
                                        <span className="text-sm leading-6 text-gray-200">Product Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide group bg-zinc-900 border border-solid h-auto border-gray-300/20 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 ">
                                <img src="https://www.slalom.com/adobe/dynamicmedia/deliver/dm-aid--505b9bae-f696-4675-9ccf-3eec668c082f/microsoftteams-image--29-.png?width=1600&preferwebp=true&quality=85" className="h-12" />
                                <p className="text-md text-gray-200 transition-all duration-500 mb-9 pt-3"> Pagedone stands out as the most user-friendly and effective solution I've ever used. </p>
                                <div className="flex items-center gap-5">
                                    <img className="rounded-full object-cover" src="https://pagedone.io/asset/uploads/1696230027.png" alt="avatar" />
                                    <div className="grid gap-1">
                                        <h5 className="text-gray-100 text-lg font-medium transition-all duration-500"> Alex K.</h5>
                                        <span className="text-sm leading-6 text-gray-200">Design Lead</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black py-10 overflow-hidden px-4 xl:px-0 lg:pb-30">
                <div className="relative">
                    <div className="mx-auto max-w-[85rem] w-full">
                        <div className="md:grid block grid-cols-2 ">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-60 w-40 pb-10" viewBox="0 0 829.692 684.73" xmlnsXlink="http://www.w3.org/1999/xlink" role="img">
                                    <g id="Group_204" data-name="Group 204" transform="translate(-472.5 -182.216)">
                                        <path id="Path_3200-782" data-name="Path 3200" d="M581.722,260.562S595.577,365,574.262,376.728s126.823,12.789,126.823,12.789-33.038-90.588-18.118-118.3Z" transform="translate(211.313 115.611)" fill="#ffb9b9" />
                                        <circle id="Ellipse_512" data-name="Ellipse 512" cx="73.536" cy="73.536" r="73.536" transform="translate(774.386 284.607)" fill="#ffb9b9" />
                                        <path id="Path_3201-783" data-name="Path 3201" d="M809.257,390.045l-12.32,56.1-26.05,118.69-.78,6.5-8.99,75.25-5.98,49.99-4.01,33.58c-24.38,12.53-42.05,21.18-42.05,21.18s-1.52-7.62-3.97-17.37c-17.11,5.13-48.77,13.64-75.6,15.34,9.77,10.89-141.12-266.12-146.91-303.16-4.66-29.81-8.16-55-8.9-60.36-.1-.7-.15-1.06-.15-1.06l112.43-49.68c7.99,18.53,45.3,24.1,45.3,24.1,30.91-2.13,55.14-18.43,55.14-18.43Z" transform="translate(211.313 115.611)" fill="#6c63ff" />
                                        <path id="Path_3203-784" data-name="Path 3203" d="M575.433,154.235l-13.749-5.5s28.749-31.651,68.747-28.9l-11.25-12.385s27.5-11.009,52.5,17.89c13.141,15.191,28.346,33.048,37.825,53.163h14.725l-6.146,13.532,21.509,13.532-22.077-2.431a75.616,75.616,0,0,1,.6,22.445,29.041,29.041,0,0,1-10.634,19h0s-17.052-35.3-17.052-40.8v13.761s-13.749-12.385-13.749-20.642l-7.5,9.633-3.75-15.137-46.248,15.137,7.5-12.385-28.749,4.128,11.25-15.137s-32.5,17.89-33.749,33.027-10.762,29.481-10.762,29.481S539.184,174.877,575.433,154.235Z" transform="translate(211.313 134.35)" fill="#090814" />
                                        <path id="Path_3204-785" data-name="Path 3204" d="M889.187,647.955c-7.49,8.12-26.05,20.35-48.55,33.59-8.37,4.92-17.28,9.99-26.37,15.03-21.69,12.03-44.4,23.95-63.14,33.58-24.38,12.53-42.05,21.18-42.05,21.18s-1.52-7.62-3.97-17.37c-3.28-13.05-8.22-29.92-13.37-37.39-.18-.26-.36-.5-.54-.74-1.5-1.97-3.01-3.12-4.5-3.12l74.42-46.13,32.16-19.94-23.17-55.31-29.06-69.38,17.54-55.81,17.63-56.1h33.04s10.94,23.88,24.93,57.18c2.09,4.98,4.25,10.17,6.45,15.53C869.417,532.755,905.3,630.5,889.187,647.955Z" transform="translate(211.313 115.611)" fill="#6c63ff" />
                                        <path id="Path_3206-786" data-name="Path 3206" d="M556.677,695.915a47.791,47.791,0,0,0-8.1.66c-22.99,3.95-29.77,24.76-31.7,38.7a71.847,71.847,0,0,0-.7,12.86l-20.31-15.62-7.4-5.69c-17.81-6.21-33.68-17.24-47.44-30.25a238.48,238.48,0,0,1-31.95-37.89,334.145,334.145,0,0,1-24.72-42.4,31.184,31.184,0,0,1-.43-26.45l25.15-56.05,36.76-81.92q.4-2.925.89-5.72c7.29-41.8,26.82-60.36,26.82-60.36h14.92l9.98,60.36,12.4,74.99-8.69,28.34-20.08,65.45,19.19,20.84Z" transform="translate(211.313 115.611)" fill="#6c63ff" />
                                        <path id="Path_3208-787" data-name="Path 3208" d="M864.337,765.775v6.07a13.338,13.338,0,0,1-.91,4.87,13.693,13.693,0,0,1-.97,2,13.438,13.438,0,0,1-11.55,6.56H404.357a13.437,13.437,0,0,1-11.55-6.56,13.685,13.685,0,0,1-.97-2,13.339,13.339,0,0,1-.91-4.87v-6.07a13.426,13.426,0,0,1,13.43-13.43H430.1v-2.83a.559.559,0,0,1,.56-.56h13.43a.559.559,0,0,1,.56.56v2.83h8.39v-2.83a.559.559,0,0,1,.56-.56h13.43a.559.559,0,0,1,.56.56v2.83h8.4v-2.83a.559.559,0,0,1,.56-.56h13.43a.559.559,0,0,1,.56.56v2.83h8.39v-2.83a.559.559,0,0,1,.56-.56h13.43a.559.559,0,0,1,.56.56v2.83h8.39v-2.83a.559.559,0,0,1,.56-.56h13.43a.559.559,0,0,1,.56.56v2.83h8.4v-2.83a.559.559,0,0,1,.56-.56h13.43a.559.559,0,0,1,.56.56v2.83h8.39v-2.83a.559.559,0,0,1,.56-.56h105.2a.559.559,0,0,1,.56.56v2.83h8.4v-2.83a.559.559,0,0,1,.56-.56h13.43a.566.566,0,0,1,.56.56v2.83h8.39v-2.83a.559.559,0,0,1,.56-.56h13.43a.559.559,0,0,1,.56.56v2.83h8.39v-2.83a.559.559,0,0,1,.56-.56h13.43a.559.559,0,0,1,.56.56v2.83h8.4v-2.83a.559.559,0,0,1,.56-.56H765.3a.557.557,0,0,1,.55.56v2.83h8.4v-2.83a.559.559,0,0,1,.56-.56h13.43a.559.559,0,0,1,.56.56v2.83h8.39v-2.83a.559.559,0,0,1,.56-.56h13.43a.559.559,0,0,1,.56.56v2.83h39.17a13.426,13.426,0,0,1,13.43,13.43Z" transform="translate(211.313 79.816)" fill="#090814" />
                                        <rect id="Rectangle_742" data-name="Rectangle 742" width={733} height={2} transform="translate(472.5 864.946)" fill="#ccc" />
                                        <path id="Path_3209-788" data-name="Path 3209" d="M828.381,510.145H661.938v-3.431H586.466v3.431H419.337A11.259,11.259,0,0,0,408.079,521.4V749.315a11.259,11.259,0,0,0,11.259,11.259H828.381a11.259,11.259,0,0,0,11.259-11.259V521.4a11.259,11.259,0,0,0-11.259-11.259Z" transform="translate(211.313 79.816)" fill="#090814" />
                                        <circle id="Ellipse_513" data-name="Ellipse 513" cx={25} cy={25} r={25} transform="translate(810.5 644.531)" fill="none" stroke="#d0cde1" strokeMiterlimit={10} strokeWidth={2} />
                                        <circle id="Ellipse_514" data-name="Ellipse 514" cx={25} cy={25} r={25} transform="translate(802.5 653.531)" fill="#f2f2f2" />
                                        <ellipse id="Ellipse_515" data-name="Ellipse 515" cx="44.477" cy="44.477" rx="44.477" ry="44.477" transform="translate(518.309 289.834)" fill="#f2f2f2" />
                                        <path id="Path_3212-789" data-name="Path 3212" d="M281.185,161.578a48.073,48.073,0,0,0-12.13,0A47.3,47.3,0,0,0,230.03,194.49a46.651,46.651,0,0,0-2.049,12.143c-.02.573-.034,1.152-.034,1.732a47.219,47.219,0,0,0,47.172,47.172c1,0,2.008-.034,3-.094a46.654,46.654,0,0,0,6.914-.957,47.178,47.178,0,0,0-3.848-92.909Zm8.7,90.173h-.007a45.356,45.356,0,0,1-11.759,2.338c-.991.067-1.995.1-3,.1A45.88,45.88,0,0,1,229.3,208.366c0-.58.013-1.159.034-1.732a45.824,45.824,0,1,1,60.556,45.117Z" transform="translate(297.101 119.88)" fill="#090814" />
                                        <rect id="Rectangle_745" data-name="Rectangle 745" width="1.348" height="9.434" transform="translate(571.547 285.117)" fill="#090814" />
                                        <rect id="Rectangle_746" data-name="Rectangle 746" width="1.348" height="9.434" transform="translate(541.247 298.226) rotate(-45)" fill="#090814" />
                                        <rect id="Rectangle_747" data-name="Rectangle 747" width="1.348" height="9.434" transform="translate(529.091 328.92) rotate(-90)" fill="#090814" />
                                        <rect id="Rectangle_748" data-name="Rectangle 748" width="1.348" height="9.434" transform="translate(542.199 359.218) rotate(-135)" fill="#090814" />
                                        <rect id="Rectangle_749" data-name="Rectangle 749" width="1.348" height="9.434" transform="translate(596.521 304.896) rotate(-135)" fill="#090814" />
                                        <rect id="Rectangle_750" data-name="Rectangle 750" width="1.348" height="9.434" transform="translate(605.914 328.92) rotate(-90)" fill="#090814" />
                                        <rect id="Rectangle_751" data-name="Rectangle 751" width="1.348" height="9.434" transform="translate(595.57 352.547) rotate(-45)" fill="#090814" />
                                        <rect id="Rectangle_752" data-name="Rectangle 752" width="1.348" height="9.434" transform="translate(571.547 361.94)" fill="#090814" />
                                        <path id="Path_3213-790" data-name="Path 3213" d="M311.476,240.006a3.369,3.369,0,0,0-4.043,0,3.468,3.468,0,0,0-.964,1.132,3.37,3.37,0,1,0,5.007-1.132Zm-2.022,4.717a2.028,2.028,0,0,1-2.022-2.022,2.058,2.058,0,0,1,.357-1.146,2.02,2.02,0,1,1,1.664,3.167Z" transform="translate(262.766 85.545)" fill="#090814" />
                                        <rect id="Rectangle_753" data-name="Rectangle 753" width="12.13" height="12.13" transform="translate(566.154 269.617)" fill="#090814" />
                                        <ellipse id="Ellipse_516" data-name="Ellipse 516" cx="16.173" cy="5.728" rx="16.173" ry="5.728" transform="translate(556.047 260.184)" fill="#090814" />
                                        <rect id="Rectangle_754" data-name="Rectangle 754" width="4.043" height="22.912" transform="translate(570.198 302.637)" fill="#090814" />
                                        <path id="Path_3173-791" data-name="Path 3173" d="M718.414,342.916c-3.279-13.773-2.732-27.339,2.883-40.629a3.113,3.113,0,0,1,3.322-2.882l30.684,2.177a3.113,3.113,0,0,1,2.881,3.322L755.3,345.534a3.113,3.113,0,0,1-3.322,2.882L721.3,346.238A3.113,3.113,0,0,1,718.414,342.916Z" transform="translate(365.104 7.308)" fill="#f2f2f2" />
                                        <path id="Path_3174-792" data-name="Path 3174" d="M723.887,332.291c-2.624-6.787-.946-16.121,1.853-26.12a2.915,2.915,0,0,1,3.111-2.7l26.37,1.871a2.915,2.915,0,0,1,2.7,3.111l-2.565,36.154a2.916,2.916,0,0,1-3.111,2.7l-16.336-1.159a12.986,12.986,0,0,1-12.021-13.857Z" transform="translate(362.854 5.829)" fill="#fff" />
                                        <path id="Path_3175-793" data-name="Path 3175" d="M748.081,340.447l-2.416-.415a8.117,8.117,0,0,0,.633-2.76c.381-5.085.42-10.218.623-15.314a.966.966,0,0,0-1.629-.675l-6.069,5.027c-.947.784.41,2.128,1.35,1.35l4.356-3.608q-.2,5.008-.4,10.016c-.064,1.6.131,3.548-.525,5.055a2.432,2.432,0,0,1-.348.565l-2.675-.46c-.641-.11-1.456.425-1.174,1.174a2.927,2.927,0,0,0,3.975,1.515,3.222,3.222,0,0,0,.4-.212l3.4.584C748.775,342.494,749.292,340.655,748.081,340.447Z" transform="translate(356.917 -0.556)" fill="#6c63ff" />
                                        <path id="Path_3176-794" data-name="Path 3176" d="M998.3,555.384c-3.089-12.972-2.574-25.748,2.715-38.265a2.932,2.932,0,0,1,3.129-2.714l28.9,2.051a2.932,2.932,0,0,1,2.714,3.129l-2.715,38.265a2.932,2.932,0,0,1-3.129,2.714l-28.9-2.051A2.932,2.932,0,0,1,998.3,555.384Z" transform="translate(237.43 -153.484)" fill="#f2f2f2" />
                                        <path id="Path_3177-795" data-name="Path 3177" d="M1003.81,545.614c-2.472-6.392-.891-15.183,1.746-24.6a2.746,2.746,0,0,1,2.93-2.542l24.836,1.762a2.745,2.745,0,0,1,2.542,2.93l-2.416,34.051a2.746,2.746,0,0,1-2.93,2.542l-15.385-1.092A12.231,12.231,0,0,1,1003.81,545.614Z" transform="translate(234.953 -155.114)" fill="#fff" />
                                        <path id="Path_3178-796" data-name="Path 3178" d="M1026.439,546.282a5.058,5.058,0,0,0,.932-.565,5.158,5.158,0,0,0,1.687-5.364c-1.165-4.281-6.286-4.307-9.822-3.792-1.141.166-.656,1.9.478,1.734,2.383-.347,6.123-.628,7.4,1.975a3.419,3.419,0,0,1-.547,3.766,3.327,3.327,0,0,1-2.023.962,5.348,5.348,0,0,0-2.354-.439c-.833.039-1.3,1.251-.454,1.675a5.4,5.4,0,0,0,2.4.567,3.9,3.9,0,0,1,2.2,3.714,4.029,4.029,0,0,1-4.587,3.379l-.022,0c-1.13-.227-1.613,1.505-.478,1.734a5.843,5.843,0,0,0,6.823-4.66q.023-.124.041-.248A5.46,5.46,0,0,0,1026.439,546.282Z" transform="translate(228.537 -162.275)" fill="#6c63ff" />
                                        <path id="Path_3179-797" data-name="Path 3179" d="M944.684,221.736c-3.718-15.615-3.1-30.994,3.268-46.062a3.529,3.529,0,0,1,3.766-3.267l34.786,2.468a3.529,3.529,0,0,1,3.267,3.766L986.5,224.7a3.529,3.529,0,0,1-3.766,3.267L947.951,225.5A3.529,3.529,0,0,1,944.684,221.736Z" transform="translate(291.4 24.716)" fill="#f2f2f2" />
                                        <path id="Path_3180-798" data-name="Path 3180" d="M950.062,209.145c-2.975-7.695-1.073-18.277,2.1-29.613a3.305,3.305,0,0,1,3.527-3.06l29.9,2.121a3.306,3.306,0,0,1,3.06,3.527l-2.909,40.989a3.305,3.305,0,0,1-3.527,3.06l-18.52-1.314A14.723,14.723,0,0,1,950.062,209.145Z" transform="translate(289.678 23.583)" fill="#fff" />
                                        <path id="Path_3181-799" data-name="Path 3181" d="M973.477,193.076a5.385,5.385,0,0,0-6.82,4.5c-.394,3.562,3.437,6.373,6.754,5.405a1.083,1.083,0,0,0-.575-2.087c-2.431.71-5.024-1.916-3.627-4.262a3.2,3.2,0,0,1,3.265-1.6,3.62,3.62,0,0,1,2.412,2.189c1.193,2.688-.225,5.417-2.1,7.371-1.072,1.114-2.329,1.98-3.484,3a5.037,5.037,0,0,0-1.981,3.574,4.326,4.326,0,0,0,2.461,3.738c1.845.949,3.944.647,5.906.331,1.371-.221.789-2.306-.575-2.087-1.717.276-4.287.695-5.375-1.1-.932-1.533.988-2.879,2.033-3.694,2.628-2.049,5.286-4.7,5.681-8.18C977.772,197.325,976.322,194.063,973.477,193.076Z" transform="translate(284.65 19.026)" fill="#6c63ff" />
                                        <path id="Path_3187-800" data-name="Path 3187" d="M524.5,408.774c12.134-3.771,25.124.307,37.325-3.173a25.3,25.3,0,0,0,7.841-3.683,48.73,48.73,0,0,0,5.707-5.079c3.67-3.63,7.656-7.442,13.17-7.4,7.261.055,12.836,5.449,17.676,10.212.684.673,1.738-.38,1.054-1.054-4.447-4.376-9.252-8.993-15.583-10.3a14.38,14.38,0,0,0-8.5.706,22.19,22.19,0,0,0-6.317,4.319c-1.949,1.788-3.747,3.734-5.723,5.494a23.826,23.826,0,0,1-7.02,4.431c-5.593,2.227-11.728,2.5-17.677,2.431-7.468-.081-15.113-.59-22.348,1.658-.913.284-.523,1.722.4,1.437Z" transform="translate(454.666 -86.104)" fill="#3f3d56" />
                                        <path id="Path_3188-801" data-name="Path 3188" d="M686.758,390.171l3.73,6.575,1.8,3.182c.321.565.65,1.127.963,1.7.192.35.611.982.211,1.314a1.943,1.943,0,0,1-1.134.177c-.657,0-1.315-.013-1.973-.02l-3.7-.037-7.645-.077a.745.745,0,0,0,0,1.49c4.438.045,8.879.139,13.317.135a3.184,3.184,0,0,0,2.178-.6,2.072,2.072,0,0,0,.4-2.388,22.678,22.678,0,0,0-1.506-2.763l-1.624-2.864-3.73-6.575a.746.746,0,0,0-1.286.752Z" transform="translate(376.793 -86.666)" fill="#3f3d56" />
                                        <path id="Path_3192-802" data-name="Path 3192" d="M769.144,324.579c5.844-7.922,15.823-11.338,21.842-19.11a19.6,19.6,0,0,0,3.2-5.9,37.747,37.747,0,0,0,1.232-5.79c.625-3.95,1.364-8.159,4.825-10.663,4.558-3.3,10.513-2.49,15.72-1.738a.577.577,0,0,0,.174-1.141c-4.784-.691-9.9-1.368-14.453.722a11.141,11.141,0,0,0-4.982,4.342,17.2,17.2,0,0,0-1.961,5.6c-.4,2.011-.625,4.051-1.051,6.056a18.456,18.456,0,0,1-2.349,5.988c-2.469,3.957-6.176,6.94-9.919,9.63-4.7,3.376-9.7,6.568-13.189,11.291-.44.6.464,1.315.907.715Z" transform="translate(392.166 -20.509)" fill="#3f3d56" />
                                        <path id="Path_3193-803" data-name="Path 3193" d="M884.38,263.394l6.9,3.088,3.339,1.494c.593.266,1.191.523,1.781.8.362.169,1.074.429.948.934-.086.344-.546.62-.809.814-.529.391-1.068.768-1.6,1.153l-3,2.161-6.205,4.466a.745.745,0,0,0,.883,1.2c3.6-2.593,7.236-5.148,10.809-7.78a3.185,3.185,0,0,0,1.4-1.77,2.072,2.072,0,0,0-1.1-2.158,22.688,22.688,0,0,0-2.85-1.334l-3-1.345-6.9-3.088a.746.746,0,0,0-.591,1.368Z" transform="translate(319.761 -11.658)" fill="#3f3d56" />
                                        <path id="Path_3194-804" data-name="Path 3194" d="M989.565,279.124h-49.8a2.075,2.075,0,0,1-.013-4.15h49.808a2.075,2.075,0,1,1,.013,4.15Z" transform="translate(292.714 -3.863)" fill="#6c63ff" />
                                        <path id="Path_3195-805" data-name="Path 3195" d="M822.271,487.041c6.569,8.906,17.787,12.745,24.553,21.482a22.035,22.035,0,0,1,3.6,6.629,42.434,42.434,0,0,1,1.385,6.508c.7,4.441,1.533,9.171,5.424,11.986,5.124,3.707,11.818,2.8,17.671,1.953a.649.649,0,0,1,.2,1.283c-5.378.777-11.132,1.537-16.247-.812a12.523,12.523,0,0,1-5.6-4.881,19.326,19.326,0,0,1-2.2-6.289c-.446-2.26-.7-4.553-1.182-6.807a20.751,20.751,0,0,0-2.64-6.731c-2.776-4.448-6.942-7.8-11.15-10.825-5.282-3.8-10.909-7.383-14.826-12.692-.494-.67.521-1.479,1.019-.8Z" transform="translate(337.438 -122.06)" fill="#3f3d56" />
                                        <path id="Path_3196-806" data-name="Path 3196" d="M937.38,602.648l6.9-3.088,3.339-1.494c.593-.266,1.191-.523,1.781-.8.362-.169,1.074-.429.948-.934-.086-.344-.546-.62-.809-.814-.529-.391-1.068-.768-1.6-1.153l-3-2.161-6.205-4.466a.745.745,0,0,1,.883-1.2c3.6,2.593,7.236,5.148,10.809,7.78a3.184,3.184,0,0,1,1.4,1.77,2.072,2.072,0,0,1-1.1,2.158,22.688,22.688,0,0,1-2.85,1.334l-3,1.345-6.9,3.088a.746.746,0,0,1-.591-1.368Z" transform="translate(271.053 -179.744)" fill="#3f3d56" />
                                        <path id="Path_3197-807" data-name="Path 3197" d="M1033.783,609.422H992.415a1.724,1.724,0,0,1-.015-3.447h41.383a1.724,1.724,0,0,1,.015,3.447Z" transform="translate(239.718 -190.183)" fill="#6c63ff" />
                                        <g id="Group_201" data-name="Group 201" transform="translate(1266.529 182.216)">
                                            <ellipse id="Ellipse_44" data-name="Ellipse 44" cx="15.209" cy="15.209" rx="15.209" ry="15.209" transform="translate(5.804 0.001) rotate(11)" fill="#6c63ff" />
                                            <path id="Path_395-808" data-name="Path 395" d="M5.162,11.567a1.577,1.577,0,0,1-.949-.315L4.2,11.239.622,8.5A1.588,1.588,0,0,1,2.555,5.984L4.87,7.759,10.341.622A1.588,1.588,0,0,1,12.567.328h0l-.034.047.035-.047a1.59,1.59,0,0,1,.294,2.226L6.427,10.946a1.589,1.589,0,0,1-1.263.619Z" transform="translate(12.385 10.9) rotate(11)" fill="#fff" />
                                        </g>
                                        <g id="Group_202" data-name="Group 202" transform="translate(1263.958 345.519)">
                                            <ellipse id="Ellipse_44-2" data-name="Ellipse 44" cx="16.305" cy="16.305" rx="16.305" ry="16.305" transform="translate(6.222 0) rotate(11)" fill="#6c63ff" />
                                            <path id="Path_395-2-809" data-name="Path 395" d="M5.534,12.4a1.691,1.691,0,0,1-1.017-.338L4.5,12.049.667,9.118a1.7,1.7,0,0,1,2.072-2.7l2.482,1.9L11.086.667A1.7,1.7,0,0,1,13.473.351h0L13.437.4l.037-.051a1.7,1.7,0,0,1,.315,2.387l-6.9,9a1.7,1.7,0,0,1-1.354.664Z" transform="translate(13.278 11.685) rotate(11)" fill="#fff" />
                                        </g>
                                        <g id="Group_203" data-name="Group 203" transform="translate(1105.688 289.834)">
                                            <ellipse id="Ellipse_44-3" data-name="Ellipse 44" cx="17.312" cy="17.312" rx="17.312" ry="17.312" transform="translate(6.607 0) rotate(11)" fill="#6c63ff" />
                                            <path id="Path_395-3-810" data-name="Path 395" d="M5.876,13.167a1.8,1.8,0,0,1-1.08-.359l-.019-.015L.708,9.681a1.808,1.808,0,0,1,2.2-2.87L5.544,8.832,11.771.708A1.807,1.807,0,0,1,14.3.373h0l-.039.054.04-.054a1.809,1.809,0,0,1,.334,2.534L7.316,12.46a1.808,1.808,0,0,1-1.438.705Z" transform="translate(14.098 12.407) rotate(11)" fill="#fff" />
                                        </g>
                                    </g>
                                </svg>
                                <h2 className="lg:text-[45px] text-3xl text-white text-left font-normal poppins mb-5">End-to-end services</h2>
                                <p className="text-gray-300 py-4 text-lg">From strategy to digital product building and beyond, we bring the right mix of services to accelerate your vision with holistic, practical solutions. We listen deeply and share our knowledge every step of the way, empowering your teams to continue the momentum after we’re gone. </p>
                                <a href="#" className="inline-block py-4 px-10 rounded-lg border-1 border-blue-400 text-white mt-5 bg-blue-700 hover:bg-blue-900">Explore Services</a>
                            </div>
                        </div>
                    </div>
                    <div className="md:absolute top-0 right-0 h-full md:w-2/5 w-full max-md:pt-20">
                        <img src="https://www.slalom.com/adobe/dynamicmedia/deliver/dm-aid--c9b553da-0dcd-4d39-8ea8-327378c228c4/home-partner-client-still-01e-inline-1300x900.jpg?width=1600&preferwebp=true&quality=85" className="rounded-l-xl w-full h-[80%] object-cover" />
                        <div className="bg-black relative bottom-0 w-full xl:pr-20 py-4">
                            <p className="text-gray-300  text-sm">Nima Niakan of Slalom Northern California and Michael Quick from our customer Hologic meet to discuss a transformational project that advances cervical cancer screening with AI technology enabled by Google Cloud.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black py-10 overflow-hidden lg:pb-30 px-4 xl:px-0">
                <div className="relative">
                    <div className="mx-auto max-w-[85rem] w-full">
                        <div className="md:grid block grid-cols-1 place-items-end gap-20">
                            <div className="md:w-1/2 w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-60 w-40 pb-10" viewBox="0 0 829.692 684.73" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" >
                                    <g id="Group_204" data-name="Group 204" transform="translate(-472.5 -182.216)">
                                        <path id="Path_3200-782" data-name="Path 3200" d="M581.722,260.562S595.577,365,574.262,376.728s126.823,12.789,126.823,12.789-33.038-90.588-18.118-118.3Z" transform="translate(211.313 115.611)" fill="#ffb9b9" />
                                        <circle id="Ellipse_512" data-name="Ellipse 512" cx="73.536" cy="73.536" r="73.536" transform="translate(774.386 284.607)" fill="#ffb9b9" />
                                        <path id="Path_3201-783" data-name="Path 3201" d="M809.257,390.045l-12.32,56.1-26.05,118.69-.78,6.5-8.99,75.25-5.98,49.99-4.01,33.58c-24.38,12.53-42.05,21.18-42.05,21.18s-1.52-7.62-3.97-17.37c-17.11,5.13-48.77,13.64-75.6,15.34,9.77,10.89-141.12-266.12-146.91-303.16-4.66-29.81-8.16-55-8.9-60.36-.1-.7-.15-1.06-.15-1.06l112.43-49.68c7.99,18.53,45.3,24.1,45.3,24.1,30.91-2.13,55.14-18.43,55.14-18.43Z" transform="translate(211.313 115.611)" fill="#6c63ff" />
                                        <path id="Path_3203-784" data-name="Path 3203" d="M575.433,154.235l-13.749-5.5s28.749-31.651,68.747-28.9l-11.25-12.385s27.5-11.009,52.5,17.89c13.141,15.191,28.346,33.048,37.825,53.163h14.725l-6.146,13.532,21.509,13.532-22.077-2.431a75.616,75.616,0,0,1,.6,22.445,29.041,29.041,0,0,1-10.634,19h0s-17.052-35.3-17.052-40.8v13.761s-13.749-12.385-13.749-20.642l-7.5,9.633-3.75-15.137-46.248,15.137,7.5-12.385-28.749,4.128,11.25-15.137s-32.5,17.89-33.749,33.027-10.762,29.481-10.762,29.481S539.184,174.877,575.433,154.235Z" transform="translate(211.313 134.35)" fill="#090814" />
                                        <path id="Path_3204-785" data-name="Path 3204" d="M889.187,647.955c-7.49,8.12-26.05,20.35-48.55,33.59-8.37,4.92-17.28,9.99-26.37,15.03-21.69,12.03-44.4,23.95-63.14,33.58-24.38,12.53-42.05,21.18-42.05,21.18s-1.52-7.62-3.97-17.37c-3.28-13.05-8.22-29.92-13.37-37.39-.18-.26-.36-.5-.54-.74-1.5-1.97-3.01-3.12-4.5-3.12l74.42-46.13,32.16-19.94-23.17-55.31-29.06-69.38,17.54-55.81,17.63-56.1h33.04s10.94,23.88,24.93,57.18c2.09,4.98,4.25,10.17,6.45,15.53C869.417,532.755,905.3,630.5,889.187,647.955Z" transform="translate(211.313 115.611)" fill="#6c63ff" />
                                        <path id="Path_3206-786" data-name="Path 3206" d="M556.677,695.915a47.791,47.791,0,0,0-8.1.66c-22.99,3.95-29.77,24.76-31.7,38.7a71.847,71.847,0,0,0-.7,12.86l-20.31-15.62-7.4-5.69c-17.81-6.21-33.68-17.24-47.44-30.25a238.48,238.48,0,0,1-31.95-37.89,334.145,334.145,0,0,1-24.72-42.4,31.184,31.184,0,0,1-.43-26.45l25.15-56.05,36.76-81.92q.4-2.925.89-5.72c7.29-41.8,26.82-60.36,26.82-60.36h14.92l9.98,60.36,12.4,74.99-8.69,28.34-20.08,65.45,19.19,20.84Z" transform="translate(211.313 115.611)" fill="#6c63ff" />
                                        <path id="Path_3208-787" data-name="Path 3208" d="M864.337,765.775v6.07a13.338,13.338,0,0,1-.91,4.87,13.693,13.693,0,0,1-.97,2,13.438,13.438,0,0,1-11.55,6.56H404.357a13.437,13.437,0,0,1-11.55-6.56,13.685,13.685,0,0,1-.97-2,13.339,13.339,0,0,1-.91-4.87v-6.07a13.426,13.426,0,0,1,13.43-13.43H430.1v-2.83a.559.559,0,0,1,.56-.56h13.43a.559.559,0,0,1,.56.56v2.83h8.39v-2.83a.559.559,0,0,1,.56-.56h13.43a.559.559,0,0,1,.56.56v2.83h8.4v-2.83a.559.559,0,0,1,.56-.56h13.43a.559.559,0,0,1,.56.56v2.83h8.39v-2.83a.559.559,0,0,1,.56-.56h13.43a.559.559,0,0,1,.56.56v2.83h8.39v-2.83a.559.559,0,0,1,.56-.56h13.43a.559.559,0,0,1,.56.56v2.83h8.4v-2.83a.559.559,0,0,1,.56-.56h13.43a.559.559,0,0,1,.56.56v2.83h8.39v-2.83a.559.559,0,0,1,.56-.56h105.2a.559.559,0,0,1,.56.56v2.83h8.4v-2.83a.559.559,0,0,1,.56-.56h13.43a.566.566,0,0,1,.56.56v2.83h8.39v-2.83a.559.559,0,0,1,.56-.56h13.43a.559.559,0,0,1,.56.56v2.83h8.39v-2.83a.559.559,0,0,1,.56-.56h13.43a.559.559,0,0,1,.56.56v2.83h8.4v-2.83a.559.559,0,0,1,.56-.56H765.3a.557.557,0,0,1,.55.56v2.83h8.4v-2.83a.559.559,0,0,1,.56-.56h13.43a.559.559,0,0,1,.56.56v2.83h8.39v-2.83a.559.559,0,0,1,.56-.56h13.43a.559.559,0,0,1,.56.56v2.83h39.17a13.426,13.426,0,0,1,13.43,13.43Z" transform="translate(211.313 79.816)" fill="#090814" />
                                        <rect id="Rectangle_742" data-name="Rectangle 742" width={733} height={2} transform="translate(472.5 864.946)" fill="#ccc" />
                                        <path id="Path_3209-788" data-name="Path 3209" d="M828.381,510.145H661.938v-3.431H586.466v3.431H419.337A11.259,11.259,0,0,0,408.079,521.4V749.315a11.259,11.259,0,0,0,11.259,11.259H828.381a11.259,11.259,0,0,0,11.259-11.259V521.4a11.259,11.259,0,0,0-11.259-11.259Z" transform="translate(211.313 79.816)" fill="#090814" />
                                        <circle id="Ellipse_513" data-name="Ellipse 513" cx={25} cy={25} r={25} transform="translate(810.5 644.531)" fill="none" stroke="#d0cde1" strokeMiterlimit={10} strokeWidth={2} />
                                        <circle id="Ellipse_514" data-name="Ellipse 514" cx={25} cy={25} r={25} transform="translate(802.5 653.531)" fill="#f2f2f2" />
                                        <ellipse id="Ellipse_515" data-name="Ellipse 515" cx="44.477" cy="44.477" rx="44.477" ry="44.477" transform="translate(518.309 289.834)" fill="#f2f2f2" />
                                        <path id="Path_3212-789" data-name="Path 3212" d="M281.185,161.578a48.073,48.073,0,0,0-12.13,0A47.3,47.3,0,0,0,230.03,194.49a46.651,46.651,0,0,0-2.049,12.143c-.02.573-.034,1.152-.034,1.732a47.219,47.219,0,0,0,47.172,47.172c1,0,2.008-.034,3-.094a46.654,46.654,0,0,0,6.914-.957,47.178,47.178,0,0,0-3.848-92.909Zm8.7,90.173h-.007a45.356,45.356,0,0,1-11.759,2.338c-.991.067-1.995.1-3,.1A45.88,45.88,0,0,1,229.3,208.366c0-.58.013-1.159.034-1.732a45.824,45.824,0,1,1,60.556,45.117Z" transform="translate(297.101 119.88)" fill="#090814" />
                                        <rect id="Rectangle_745" data-name="Rectangle 745" width="1.348" height="9.434" transform="translate(571.547 285.117)" fill="#090814" />
                                        <rect id="Rectangle_746" data-name="Rectangle 746" width="1.348" height="9.434" transform="translate(541.247 298.226) rotate(-45)" fill="#090814" />
                                        <rect id="Rectangle_747" data-name="Rectangle 747" width="1.348" height="9.434" transform="translate(529.091 328.92) rotate(-90)" fill="#090814" />
                                        <rect id="Rectangle_748" data-name="Rectangle 748" width="1.348" height="9.434" transform="translate(542.199 359.218) rotate(-135)" fill="#090814" />
                                        <rect id="Rectangle_749" data-name="Rectangle 749" width="1.348" height="9.434" transform="translate(596.521 304.896) rotate(-135)" fill="#090814" />
                                        <rect id="Rectangle_750" data-name="Rectangle 750" width="1.348" height="9.434" transform="translate(605.914 328.92) rotate(-90)" fill="#090814" />
                                        <rect id="Rectangle_751" data-name="Rectangle 751" width="1.348" height="9.434" transform="translate(595.57 352.547) rotate(-45)" fill="#090814" />
                                        <rect id="Rectangle_752" data-name="Rectangle 752" width="1.348" height="9.434" transform="translate(571.547 361.94)" fill="#090814" />
                                        <path id="Path_3213-790" data-name="Path 3213" d="M311.476,240.006a3.369,3.369,0,0,0-4.043,0,3.468,3.468,0,0,0-.964,1.132,3.37,3.37,0,1,0,5.007-1.132Zm-2.022,4.717a2.028,2.028,0,0,1-2.022-2.022,2.058,2.058,0,0,1,.357-1.146,2.02,2.02,0,1,1,1.664,3.167Z" transform="translate(262.766 85.545)" fill="#090814" />
                                        <rect id="Rectangle_753" data-name="Rectangle 753" width="12.13" height="12.13" transform="translate(566.154 269.617)" fill="#090814" />
                                        <ellipse id="Ellipse_516" data-name="Ellipse 516" cx="16.173" cy="5.728" rx="16.173" ry="5.728" transform="translate(556.047 260.184)" fill="#090814" />
                                        <rect id="Rectangle_754" data-name="Rectangle 754" width="4.043" height="22.912" transform="translate(570.198 302.637)" fill="#090814" />
                                        <path id="Path_3173-791" data-name="Path 3173" d="M718.414,342.916c-3.279-13.773-2.732-27.339,2.883-40.629a3.113,3.113,0,0,1,3.322-2.882l30.684,2.177a3.113,3.113,0,0,1,2.881,3.322L755.3,345.534a3.113,3.113,0,0,1-3.322,2.882L721.3,346.238A3.113,3.113,0,0,1,718.414,342.916Z" transform="translate(365.104 7.308)" fill="#f2f2f2" />
                                        <path id="Path_3174-792" data-name="Path 3174" d="M723.887,332.291c-2.624-6.787-.946-16.121,1.853-26.12a2.915,2.915,0,0,1,3.111-2.7l26.37,1.871a2.915,2.915,0,0,1,2.7,3.111l-2.565,36.154a2.916,2.916,0,0,1-3.111,2.7l-16.336-1.159a12.986,12.986,0,0,1-12.021-13.857Z" transform="translate(362.854 5.829)" fill="#fff" />
                                        <path id="Path_3175-793" data-name="Path 3175" d="M748.081,340.447l-2.416-.415a8.117,8.117,0,0,0,.633-2.76c.381-5.085.42-10.218.623-15.314a.966.966,0,0,0-1.629-.675l-6.069,5.027c-.947.784.41,2.128,1.35,1.35l4.356-3.608q-.2,5.008-.4,10.016c-.064,1.6.131,3.548-.525,5.055a2.432,2.432,0,0,1-.348.565l-2.675-.46c-.641-.11-1.456.425-1.174,1.174a2.927,2.927,0,0,0,3.975,1.515,3.222,3.222,0,0,0,.4-.212l3.4.584C748.775,342.494,749.292,340.655,748.081,340.447Z" transform="translate(356.917 -0.556)" fill="#6c63ff" />
                                        <path id="Path_3176-794" data-name="Path 3176" d="M998.3,555.384c-3.089-12.972-2.574-25.748,2.715-38.265a2.932,2.932,0,0,1,3.129-2.714l28.9,2.051a2.932,2.932,0,0,1,2.714,3.129l-2.715,38.265a2.932,2.932,0,0,1-3.129,2.714l-28.9-2.051A2.932,2.932,0,0,1,998.3,555.384Z" transform="translate(237.43 -153.484)" fill="#f2f2f2" />
                                        <path id="Path_3177-795" data-name="Path 3177" d="M1003.81,545.614c-2.472-6.392-.891-15.183,1.746-24.6a2.746,2.746,0,0,1,2.93-2.542l24.836,1.762a2.745,2.745,0,0,1,2.542,2.93l-2.416,34.051a2.746,2.746,0,0,1-2.93,2.542l-15.385-1.092A12.231,12.231,0,0,1,1003.81,545.614Z" transform="translate(234.953 -155.114)" fill="#fff" />
                                        <path id="Path_3178-796" data-name="Path 3178" d="M1026.439,546.282a5.058,5.058,0,0,0,.932-.565,5.158,5.158,0,0,0,1.687-5.364c-1.165-4.281-6.286-4.307-9.822-3.792-1.141.166-.656,1.9.478,1.734,2.383-.347,6.123-.628,7.4,1.975a3.419,3.419,0,0,1-.547,3.766,3.327,3.327,0,0,1-2.023.962,5.348,5.348,0,0,0-2.354-.439c-.833.039-1.3,1.251-.454,1.675a5.4,5.4,0,0,0,2.4.567,3.9,3.9,0,0,1,2.2,3.714,4.029,4.029,0,0,1-4.587,3.379l-.022,0c-1.13-.227-1.613,1.505-.478,1.734a5.843,5.843,0,0,0,6.823-4.66q.023-.124.041-.248A5.46,5.46,0,0,0,1026.439,546.282Z" transform="translate(228.537 -162.275)" fill="#6c63ff" />
                                        <path id="Path_3179-797" data-name="Path 3179" d="M944.684,221.736c-3.718-15.615-3.1-30.994,3.268-46.062a3.529,3.529,0,0,1,3.766-3.267l34.786,2.468a3.529,3.529,0,0,1,3.267,3.766L986.5,224.7a3.529,3.529,0,0,1-3.766,3.267L947.951,225.5A3.529,3.529,0,0,1,944.684,221.736Z" transform="translate(291.4 24.716)" fill="#f2f2f2" />
                                        <path id="Path_3180-798" data-name="Path 3180" d="M950.062,209.145c-2.975-7.695-1.073-18.277,2.1-29.613a3.305,3.305,0,0,1,3.527-3.06l29.9,2.121a3.306,3.306,0,0,1,3.06,3.527l-2.909,40.989a3.305,3.305,0,0,1-3.527,3.06l-18.52-1.314A14.723,14.723,0,0,1,950.062,209.145Z" transform="translate(289.678 23.583)" fill="#fff" />
                                        <path id="Path_3181-799" data-name="Path 3181" d="M973.477,193.076a5.385,5.385,0,0,0-6.82,4.5c-.394,3.562,3.437,6.373,6.754,5.405a1.083,1.083,0,0,0-.575-2.087c-2.431.71-5.024-1.916-3.627-4.262a3.2,3.2,0,0,1,3.265-1.6,3.62,3.62,0,0,1,2.412,2.189c1.193,2.688-.225,5.417-2.1,7.371-1.072,1.114-2.329,1.98-3.484,3a5.037,5.037,0,0,0-1.981,3.574,4.326,4.326,0,0,0,2.461,3.738c1.845.949,3.944.647,5.906.331,1.371-.221.789-2.306-.575-2.087-1.717.276-4.287.695-5.375-1.1-.932-1.533.988-2.879,2.033-3.694,2.628-2.049,5.286-4.7,5.681-8.18C977.772,197.325,976.322,194.063,973.477,193.076Z" transform="translate(284.65 19.026)" fill="#6c63ff" />
                                        <path id="Path_3187-800" data-name="Path 3187" d="M524.5,408.774c12.134-3.771,25.124.307,37.325-3.173a25.3,25.3,0,0,0,7.841-3.683,48.73,48.73,0,0,0,5.707-5.079c3.67-3.63,7.656-7.442,13.17-7.4,7.261.055,12.836,5.449,17.676,10.212.684.673,1.738-.38,1.054-1.054-4.447-4.376-9.252-8.993-15.583-10.3a14.38,14.38,0,0,0-8.5.706,22.19,22.19,0,0,0-6.317,4.319c-1.949,1.788-3.747,3.734-5.723,5.494a23.826,23.826,0,0,1-7.02,4.431c-5.593,2.227-11.728,2.5-17.677,2.431-7.468-.081-15.113-.59-22.348,1.658-.913.284-.523,1.722.4,1.437Z" transform="translate(454.666 -86.104)" fill="#3f3d56" />
                                        <path id="Path_3188-801" data-name="Path 3188" d="M686.758,390.171l3.73,6.575,1.8,3.182c.321.565.65,1.127.963,1.7.192.35.611.982.211,1.314a1.943,1.943,0,0,1-1.134.177c-.657,0-1.315-.013-1.973-.02l-3.7-.037-7.645-.077a.745.745,0,0,0,0,1.49c4.438.045,8.879.139,13.317.135a3.184,3.184,0,0,0,2.178-.6,2.072,2.072,0,0,0,.4-2.388,22.678,22.678,0,0,0-1.506-2.763l-1.624-2.864-3.73-6.575a.746.746,0,0,0-1.286.752Z" transform="translate(376.793 -86.666)" fill="#3f3d56" />
                                        <path id="Path_3192-802" data-name="Path 3192" d="M769.144,324.579c5.844-7.922,15.823-11.338,21.842-19.11a19.6,19.6,0,0,0,3.2-5.9,37.747,37.747,0,0,0,1.232-5.79c.625-3.95,1.364-8.159,4.825-10.663,4.558-3.3,10.513-2.49,15.72-1.738a.577.577,0,0,0,.174-1.141c-4.784-.691-9.9-1.368-14.453.722a11.141,11.141,0,0,0-4.982,4.342,17.2,17.2,0,0,0-1.961,5.6c-.4,2.011-.625,4.051-1.051,6.056a18.456,18.456,0,0,1-2.349,5.988c-2.469,3.957-6.176,6.94-9.919,9.63-4.7,3.376-9.7,6.568-13.189,11.291-.44.6.464,1.315.907.715Z" transform="translate(392.166 -20.509)" fill="#3f3d56" />
                                        <path id="Path_3193-803" data-name="Path 3193" d="M884.38,263.394l6.9,3.088,3.339,1.494c.593.266,1.191.523,1.781.8.362.169,1.074.429.948.934-.086.344-.546.62-.809.814-.529.391-1.068.768-1.6,1.153l-3,2.161-6.205,4.466a.745.745,0,0,0,.883,1.2c3.6-2.593,7.236-5.148,10.809-7.78a3.185,3.185,0,0,0,1.4-1.77,2.072,2.072,0,0,0-1.1-2.158,22.688,22.688,0,0,0-2.85-1.334l-3-1.345-6.9-3.088a.746.746,0,0,0-.591,1.368Z" transform="translate(319.761 -11.658)" fill="#3f3d56" />
                                        <path id="Path_3194-804" data-name="Path 3194" d="M989.565,279.124h-49.8a2.075,2.075,0,0,1-.013-4.15h49.808a2.075,2.075,0,1,1,.013,4.15Z" transform="translate(292.714 -3.863)" fill="#6c63ff" />
                                        <path id="Path_3195-805" data-name="Path 3195" d="M822.271,487.041c6.569,8.906,17.787,12.745,24.553,21.482a22.035,22.035,0,0,1,3.6,6.629,42.434,42.434,0,0,1,1.385,6.508c.7,4.441,1.533,9.171,5.424,11.986,5.124,3.707,11.818,2.8,17.671,1.953a.649.649,0,0,1,.2,1.283c-5.378.777-11.132,1.537-16.247-.812a12.523,12.523,0,0,1-5.6-4.881,19.326,19.326,0,0,1-2.2-6.289c-.446-2.26-.7-4.553-1.182-6.807a20.751,20.751,0,0,0-2.64-6.731c-2.776-4.448-6.942-7.8-11.15-10.825-5.282-3.8-10.909-7.383-14.826-12.692-.494-.67.521-1.479,1.019-.8Z" transform="translate(337.438 -122.06)" fill="#3f3d56" />
                                        <path id="Path_3196-806" data-name="Path 3196" d="M937.38,602.648l6.9-3.088,3.339-1.494c.593-.266,1.191-.523,1.781-.8.362-.169,1.074-.429.948-.934-.086-.344-.546-.62-.809-.814-.529-.391-1.068-.768-1.6-1.153l-3-2.161-6.205-4.466a.745.745,0,0,1,.883-1.2c3.6,2.593,7.236,5.148,10.809,7.78a3.184,3.184,0,0,1,1.4,1.77,2.072,2.072,0,0,1-1.1,2.158,22.688,22.688,0,0,1-2.85,1.334l-3,1.345-6.9,3.088a.746.746,0,0,1-.591-1.368Z" transform="translate(271.053 -179.744)" fill="#3f3d56" />
                                        <path id="Path_3197-807" data-name="Path 3197" d="M1033.783,609.422H992.415a1.724,1.724,0,0,1-.015-3.447h41.383a1.724,1.724,0,0,1,.015,3.447Z" transform="translate(239.718 -190.183)" fill="#6c63ff" />
                                        <g id="Group_201" data-name="Group 201" transform="translate(1266.529 182.216)">
                                            <ellipse id="Ellipse_44" data-name="Ellipse 44" cx="15.209" cy="15.209" rx="15.209" ry="15.209" transform="translate(5.804 0.001) rotate(11)" fill="#6c63ff" />
                                            <path id="Path_395-808" data-name="Path 395" d="M5.162,11.567a1.577,1.577,0,0,1-.949-.315L4.2,11.239.622,8.5A1.588,1.588,0,0,1,2.555,5.984L4.87,7.759,10.341.622A1.588,1.588,0,0,1,12.567.328h0l-.034.047.035-.047a1.59,1.59,0,0,1,.294,2.226L6.427,10.946a1.589,1.589,0,0,1-1.263.619Z" transform="translate(12.385 10.9) rotate(11)" fill="#fff" />
                                        </g>
                                        <g id="Group_202" data-name="Group 202" transform="translate(1263.958 345.519)">
                                            <ellipse id="Ellipse_44-2" data-name="Ellipse 44" cx="16.305" cy="16.305" rx="16.305" ry="16.305" transform="translate(6.222 0) rotate(11)" fill="#6c63ff" />
                                            <path id="Path_395-2-809" data-name="Path 395" d="M5.534,12.4a1.691,1.691,0,0,1-1.017-.338L4.5,12.049.667,9.118a1.7,1.7,0,0,1,2.072-2.7l2.482,1.9L11.086.667A1.7,1.7,0,0,1,13.473.351h0L13.437.4l.037-.051a1.7,1.7,0,0,1,.315,2.387l-6.9,9a1.7,1.7,0,0,1-1.354.664Z" transform="translate(13.278 11.685) rotate(11)" fill="#fff" />
                                        </g>
                                        <g id="Group_203" data-name="Group 203" transform="translate(1105.688 289.834)">
                                            <ellipse id="Ellipse_44-3" data-name="Ellipse 44" cx="17.312" cy="17.312" rx="17.312" ry="17.312" transform="translate(6.607 0) rotate(11)" fill="#6c63ff" />
                                            <path id="Path_395-3-810" data-name="Path 395" d="M5.876,13.167a1.8,1.8,0,0,1-1.08-.359l-.019-.015L.708,9.681a1.808,1.808,0,0,1,2.2-2.87L5.544,8.832,11.771.708A1.807,1.807,0,0,1,14.3.373h0l-.039.054.04-.054a1.809,1.809,0,0,1,.334,2.534L7.316,12.46a1.808,1.808,0,0,1-1.438.705Z" transform="translate(14.098 12.407) rotate(11)" fill="#fff" />
                                        </g>
                                    </g>
                                </svg>
                                <h2 className="lg:text-[45px] text-3xl text-white text-left font-normal poppins mb-5">End-to-end services</h2>
                                <p className="text-gray-300 py-4 text-lg">From strategy to digital product building and beyond, we bring the right mix of services to accelerate your vision with holistic, practical solutions. We listen deeply and share our knowledge every step of the way, empowering your teams to continue the momentum after we’re gone. </p>
                                <a href="#" className="inline-block py-4 px-10 rounded-lg border-1 border-blue-400 text-white mt-5 bg-blue-700 hover:bg-blue-900">Explore Services</a>
                            </div>
                        </div>
                    </div>
                    <div className="md:absolute top-0 left-0 h-full md:w-2/5 w-full max-md:pt-20">
                        <img src="https://www.slalom.com/adobe/dynamicmedia/deliver/dm-aid--6fdf9c79-eb20-4039-a6dc-1aba9aae0a07/home-experience-two-people-talking-inline-1300x900.jpg?width=1600&preferwebp=true&quality=85" className="rounded-r-xl w-full h-[80%] object-cover" />
                        <div className="bg-black relative bottom-0 w-full xl:pl-20 py-4">
                            <p className="text-gray-300  text-sm">Nima Niakan of Slalom Northern California and Michael Quick from our customer Hologic meet to discuss a transformational project that advances cervical cancer screening with AI technology enabled by Google Cloud..</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#000a25] py-15 lg:py-30 px-4">
                <div className="max-w-[85rem] w-full mx-auto">
                    <div className="mb-14 flex  items-center flex-row items-center justify-between max-sm:gap-8">
                        <h2 className="lg:text-[45px] text-3xl text-white text-left font-base poppins">New and <span className="font-light italic">noteworthy</span> </h2>
                        {/* Slider controls */}
                        <div className="flex items-center gap-8 mt-5">
                            <button id="slider-button-left" className="swiper-button-prev group flex justify-center items-center border border-solid border-blue-700 inline-block w-32 h-32 transition-all duration-500 rounded-full hover:bg-blue-900" data-carousel-prev tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-38e5e1aab5c1bc4f">
                                <svg className="size-6 text-blur-700 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button id="slider-button-right" className="swiper-button-next group flex justify-center items-center border border-solid border-blue-700 w-12 h-12 transition-all duration-500 rounded-full hover:bg-blue-900" data-carousel-next tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-38e5e1aab5c1bc4f">
                                <svg className="h-6 w-6 text-blue-700 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="swiper mySwiper-next">
                        <div className="swiper-wrapper text-white">
                            {/* Slides */}
                            <div className="swiper-slide">
                                <div className="bg-[#0f1c41] hover:bg-red-400 rounded-2xl group">
                                    <span className="block sm:h-[320px] h-auto w-full"><img src="https://s7d9.scene7.com/is/image/slalom/Christopher-Burger_Slalom_Headshot_thumbnail?fmt=webp-alpha" className="h-full object-cover rounded-t-2xl" /></span>
                                    <div className="py-5 px-5 h-65 relative">
                                        <p className="uppercase text-md text-gray-300 lg:tracking-[2px] poppins py-3 group-hover:text-gray-800">Customer Story</p>
                                        <h2 className="text-2xl font-bold text-white group-hover:text-gray-800">AI-powered upgrade for enhanced support and compliance</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="bg-[#0f1c41] hover:bg-indigo-400 rounded-2xl group">
                                    <span className="block sm:h-[320px] h-auto w-full"><img src="https://s7d9.scene7.com/is/image/slalom/Christopher-Burger_Slalom_Headshot_thumbnail?fmt=webp-alpha" className="h-full object-cover rounded-t-2xl" /></span>
                                    <div className="py-5 px-5 h-65 relative">
                                        <p className="uppercase text-md text-gray-300 lg:tracking-[2px] poppins py-3 group-hover:text-gray-700">Customer Story</p>
                                        <h2 className="text-2xl font-bold text-white group-hover:text-gray-700">AI-powered upgrade for enhanced support and compliance</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="bg-[#0f1c41] hover:bg-yellow-200 rounded-2xl group">
                                    <span className="block sm:h-[320px] h-auto w-full"><img src="https://s7d9.scene7.com/is/image/slalom/Christopher-Burger_Slalom_Headshot_thumbnail?fmt=webp-alpha" className="h-full object-cover rounded-t-2xl" /></span>
                                    <div className="py-5 px-5 h-65 relative">
                                        <p className="uppercase text-md text-gray-300 lg:tracking-[2px] poppins py-3 group-hover:text-gray-700">Customer Story</p>
                                        <h2 className="text-2xl font-bold text-white group-hover:text-gray-700">Slalom Announces Collaboration with Snowflake to Power AI-Driven Transformation in AI Data Cloud </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="bg-[#0f1c41] hover:bg-sky-400 rounded-2xl group">
                                    <span className="block sm:h-[320px] h-auto w-full"><img src="https://s7d9.scene7.com/is/image/slalom/Christopher-Burger_Slalom_Headshot_thumbnail?fmt=webp-alpha" className="h-full object-cover rounded-t-2xl" /></span>
                                    <div className="py-5 px-5 h-65 relative">
                                        <p className="uppercase text-md text-gray-300 lg:tracking-[2px] poppins py-3 group-hover:text-gray-700">Customer Story</p>
                                        <h2 className="text-2xl font-bold text-white group-hover:text-gray-700">AI-powered upgrade for enhanced support and compliance</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="bg-[#0f1c41] hover:bg-violet-400 rounded-2xl group">
                                    <span className="block sm:h-[320px] h-auto w-full"><img src="https://s7d9.scene7.com/is/image/slalom/Christopher-Burger_Slalom_Headshot_thumbnail?fmt=webp-alpha" className="h-full object-cover rounded-t-2xl" /></span>
                                    <div className="py-5 px-5 h-65 relative">
                                        <p className="uppercase text-md text-gray-300 lg:tracking-[2px] poppins py-3 group-hover:text-gray-700">Customer Story</p>
                                        <h2 className="text-2xl font-bold text-white group-hover:text-gray-700">AI-powered upgrade for enhanced support and compliance</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default App
