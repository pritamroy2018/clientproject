import '../App.css'
import { useEffect } from 'react';
import $ from "jquery";




function Header() {   
    
  useEffect(() => {
    
    $(".hamburger").click(function() {
      $(".mobile-nav").show();
    });
  
    $(".menu-hide-click").click(function() {
      $(".mobile-nav").hide();
    });  

    
    
    
    $(function () {
      if ($('.accordion-list').length) {
          $('.accordion-list').on('click', '.accordion-title', function (e) {
              e.preventDefault();
              // remove siblings activities
              $(this).closest('.accordion-list-item').siblings().removeClass('open').find('.accordion-desc').slideUp();
              $(this).closest('.accordion-list-item').siblings().find('.fa-solid').addClass('fa-plus').removeClass('fa-minus');

              // add slideToggle into this
              $(this).closest('.accordion-list-item').toggleClass('open').find('.accordion-desc').slideToggle();
              $(this).find('.fa-solid').toggleClass('fa-plus fa-minus');
              
          });
      }
  });
    
  }, []);
  
  
  return (
      <>


  


<header id="navbar" className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-blue-900/50 sm:bg-transparent text-sm sm:py-3 sm:py-0 dark:bg-neutral-800 absolute">
        <nav className="xl:max-w-full w-full mx-auto md:px-6 lg:px-0 m-nav  ">
          <div className="relative sm:flex sm:items-center">
            <div className="flex items-center justify-between max-sm:px-4 lg:px-10 max-sm:py-2 max-sm:w-full top-0 z-20 max-sm:fixed max-sm:bg-blue-900 max-sm:overflow-auto ">
              <a className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white max-sm:z-20 relative max-sm:ml-[55px]" href="index.html" aria-label="Brand"><img src="./images/logo.png" className="w-full h-[50px] max-sm:h-[50px] max-sm:w-[65px]" /></a>
              
              <div className="hamburger is-lg sm:hidden max-sm:z-20 absolute left-[17px]">
                <span className="hamburger-line" />
                <span className="hamburger-line" />
                <span className="hamburger-line" />
              </div>
              <div className="sm:hidden max-sm:z-20 absolute right-[17px]">
                <a href="contact-us.html" className="py-3 px-5 bg-blue-700 text-white text-[15px] uppercase rounded-lg hover:bg-white hover:text-black">Contact Us</a>
              </div>
            </div>
            <div id="hs-navbar-basic-usage" className="hidden relative w-full z-10 top-0 z-1 sm:static bg-blue-900 sm:bg-transparent hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block lg:px-10  overflow-auto" aria-labelledby="hs-navbar-basic-usage-collapse ">
              <div className="flex flex-col gap-y-3 sm:gap-y-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 max-sm:pt-[75px] ">
                <a className="font-medium text-blue-700 focus:outline-none uppercase text-[14px] px-5 pb-4 sm:py-4 md:px-1 md:text-sm sm:px-1 sm:text-sm lg:px-5 lg:pb-4 lg:text-[15px]" href="index.html" aria-current="page">Home</a>
                <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover] [--auto-close:true] [--is-collapse:true] sm:[--is-collapse:false] sm:py-4 pb-4 sm:px-5 pb-0 md:px-1 sm:px-1 sm:text-sm lg:px-5 lg:pb-4 ">
                  <button id="hs-mega-menu" type="button" className="hs-dropdown-toggle sm:p-2 flex items-center w-full text-white text-[14px] font-medium hover:text-gray-300 focus:outline-none focus:text-gray-300   dark:focus:text-neutral-500 uppercase max-sm:px-5 md:px-1 md:text-sm sm:px-1 sm:text-sm lg:text-[15px]" aria-haspopup="menu" aria-expanded="false" aria-label="Mega Menu">
                    Service
                    <svg className="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-2 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </button>
                  <div className="hs-dropdown-menu sm:transition-[opacity,margin] sm:ease-in-out sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-100 w-full hidden z-10 sm:mt-3 top-full start-0 min-w-60 bg-white sm:shadow-md rounded-sm sm:pb-10 sm:px-10 px-5  before:absolute overflow-auto max-sm:h-dvh max-sm:pb-[140px] md:h-dvh lg:h-auto overflow-auto" role="menu" aria-orientation="vertical" aria-labelledby="hs-mega-menu">
                    <div className="block lg:flex gap-10 md:block">
                      <div className="flex lg:w-110 w-full md:w-full">
                        <div className="sm:mt-10 mt-5">
                          <h2 className="sm:text-2xl text-lg">Made to <span className="text-blue-700 font-bold">Scale</span></h2>
                          <img src="images/mega-menu1.jpg" className="w-full my-3 rounded-3xl h-42" />
                          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, </p>
                          <div className="grid sm:grid-cols-2">
                            <div className="mt-10">
                              <h3 className="text-lg uppercase font-semibold pb-3">Software Development</h3>
                              <a className="flex items-center gap-x-3.5 py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                UI/UX
                              </a>
                              <a className="flex items-center  py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                Mobile Development
                              </a>
                              <a className="flex items-center  py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                Web Development
                              </a>
                            </div>
                            <div className="mt-10">
                              <h3 className="text-lg uppercase font-semibold pb-3">Startup Software Development </h3>
                              <a className="flex items-center gap-x-3.5 py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                SaaS Development
                              </a>
                              <a className="flex items-center  py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                Supply Chain Management 
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="sm:grid sm:grid-cols-3 gap-4">
                          <div className="flex flex-col">
                            <div className="mt-10 pb-5 border border-gray-300 border-t-0 border-l-0 border-r-0 border-b-1 sm:min-h-[200px] max-sm:border-none">
                              <h3 className="text-lg uppercase font-semibold pb-3 hover:text-blue-700 focus:outline-none focus:bg-gray-100 "><a href="#">Strategy</a></h3>
                              <p className="flex items-center gap-x-3.5 py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600">
                                Technology Strategy
                              </p>
                              <p className="flex items-center gap-x-3.5 py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600">
                                Data Strategy
                              </p>
                              <p className="flex items-center gap-x-3.5 py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600">
                                Innovation &amp; Emerging Technology Strategy
                              </p>
                            </div>
                            <div className="lg:mt-10 mt-5">
                              <h3 className="text-lg uppercase font-semibold pb-3 hover:text-blue-700 focus:outline-none focus:bg-gray-100 "><a href="#">Artificial Intelligence</a></h3>
                              <p className="flex items-center gap-x-3.5 py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600">
                                Machine Learning
                              </p>
                              <p className="flex items-center gap-x-3.5 py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600">
                                Generative AI
                              </p>
                              <p className="flex items-center gap-x-3.5 py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600">
                                Intelligent Products
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col h-full md:mb-12 lg:mb-0">
                            <div className="mt-10 pb-5 border border-gray-300 border-t-0 border-l-0 border-r-0 border-b-1 sm:min-h-[200px] max-sm:border-none">
                              <h3 className="text-lg uppercase font-semibold pb-3 hover:text-blue-700 focus:outline-none focus:bg-gray-100 "><a href="#">Cloud</a></h3>
                              {/* <p class="text-sm text-gray-500 pb-3">From Slalom</p> */}
                              <p className="flex items-center gap-x-3.5 py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600">
                                Migrations &amp; Modernization
                              </p>
                              <p className="flex items-center gap-x-3.5 py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600">
                                Optimization
                              </p>
                              <p className="flex items-center gap-x-3.5 py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600">
                                Infrastructure
                              </p>
                            </div>
                            <div className="lg:mt-10 mt-5">
                              <h3 className="text-lg uppercase font-semibold pb-3">Experience Strategy and Design</h3>
                              <a className="flex items-center gap-x-3.5 py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                Customer &amp; User experience
                              </a>
                              <a className="flex items-center  py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                Product strategy, design &amp; Innovation
                              </a>
                              <a className="flex items-center  py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                Service Design
                              </a>
                              <a className="flex items-center  py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                Brand Strategy
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="mt-10 pb-5 border border-gray-300 border-t-0 border-l-0 border-r-0 border-b-1 sm:min-h-[200px] max-sm:border-none">
                              <h3 className="text-lg uppercase font-semibold pb-3">Digital Product building</h3>
                              <a className="flex items-center gap-x-3.5 py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-700 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                Product Engineering
                              </a>
                              <a className="flex items-center py-1 px-0 rounded-lg text-lg text-[16px]  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#">
                                Platform Engineering
                              </a>
                              <a className="flex items-center  py-1 px-0 rounded-lg text-lg text-[16px]  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                Data Engineering
                              </a>
                            </div>
                            <div className="lg:mt-10 max-sm:pb-10 max-sm:mt-5">
                              <h3 className="text-lg uppercase font-semibold pb-3">Digital Transformation Services</h3>
                              <a className="flex items-center gap-x-3.5 py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                Strategy &amp; Journey
                              </a>
                              <a className="flex items-center  py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                Digital Applications
                              </a>
                              <a className="flex items-center  py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                AI Automation
                              </a>
                              <a className="flex items-center  py-1 px-0 rounded-lg text-[16px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                Legacy Modernisation
                              </a>
                            </div>
                          </div>                
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="px-5 pb-4 sm:py-4 md:px-1 md:text-sm sm:px-1 sm:text-sm font-medium text-white text-[14px] hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:focus:text-neutral-500 uppercase lg:px-5 lg:pb-4 lg:text-[15px]" href="industries.html">Industries</a>
                <a className="px-5 pb-4 sm:py-4 md:px-1 md:text-sm sm:px-1 sm:text-sm font-medium text-white text-[14px] hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 uppercase lg:px-5 lg:pb-4 lg:text-[15px]" href="who-we-are.html">Who we are</a>
                <a className="px-5 pb-4 sm:py-4 md:px-1 md:text-sm sm:px-1 sm:text-sm font-medium text-white text-[14px] hover:text-gray-400 focus:outline-none focus:text-gray-400  dark:hover:text-neutral-500 dark:focus:text-neutral-500 uppercase lg:px-5 lg:pb-4 lg:text-[15px]" href="career.html">Careers</a>
                <a className="px-5 pb-4 bg-blue-700 sm:py-3 md:px-1 md:text-sm sm:px-1 sm:text-sm font-medium text-white rounded-lg text-[14px]   uppercase lg:px-7 lg:pb-3 lg:text-[15px] max-sm:mx-auto max-sm:inline-block max-sm:mb-6 max-sm:py-3 max-sm:px-8" href="contact-us.html">Contact Us</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="mobile-nav bg-white hidden transition-all">
        <div className='flex justify-between w-full items-center bg-blue-900 py-2 px-4 h-[66px] border-b-1 border-gray-100'>
          <div className='flex gap-5 items-center'>
            <p className='text-3xl inline py-2 pr-3 menu-hide-click text-white'><i className='fa fa-close'></i></p>
            <img className="inline h-[50px] max-sm:h-[50px] max-sm:w-[65px]" src="./images/logo.png"></img>
          </div>
          <div>
            <a href="contact-us.html" className="py-3 px-5 bg-blue-700 text-white text-[15px] uppercase rounded-lg hover:bg-white hover:text-black keychainify-checked">Contact Us</a>
          </div>
        </div>
        <div className='hs-accordion-group'>
            <div className='border-b-1 border-gray-200'>
              <h3 className="text-xl text-[#555] hover:text-black py-5 px-4"><a href="index.html">Home</a></h3>
            </div>

            
            <div className="hs-accordion border-b-1  border-gray-200" id="hs-basic-heading-four">
              <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 px-4 py-5 inline-flex items-center gap-x-3 text-sm w-full text-xl text-[#555] hover:text-black focus:outline-hidden focus:text-gray-500  disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 justify-between" aria-expanded="false" aria-controls="hs-basic-collapse-four">
              Services
                <svg className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>

                <svg className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                </svg>
                
              </button>
              <div id="hs-basic-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-heading-four">
                <div className="px-4 pb-5">
                
                    <div className="mt-4 border-b-1 border-gray-200 pb-3">
                      <h3 className="text-sm uppercase font-semibold pb-1 hover:text-blue-700 focus:outline-none focus:bg-gray-100 "><a href="#">Strategy</a></h3>
                      <p className="flex items-center gap-x-3.5 py-1 px-0 rounded-lg text-[14px] text-semibold  text-gray-600">
                        Technology Strategy
                      </p>
                      <p className="flex items-center gap-x-3.5 py-1 text-[14px] text-semibold  text-gray-600">
                        Data Strategy
                      </p>
                      <p className="flex items-center gap-x-3.5 py-1 text-[14px] text-semibold  text-gray-600">
                        Innovation &amp; Emerging Technology Strategy
                      </p>
                    </div>
                    <div className="mt-4 border-b-1 border-gray-200 pb-3">
                      <h3 className="text-sm uppercase font-semibold pb-1 hover:text-blue-700 focus:outline-none focus:bg-gray-100 "><a href="#">Artificial Intelligence</a></h3>
                      <p className="flex items-center gap-x-3.5 py-1  text-[14px] text-semibold  text-gray-600">
                        Machine Learning
                      </p>
                      <p className="flex items-center gap-x-3.5 py-1  text-[14px] text-semibold  text-gray-600">
                        Generative AI
                      </p>
                      <p className="flex items-center gap-x-3.5 py-1  text-[14px] text-semibold  text-gray-600">
                        Intelligent Products
                      </p>
                    </div>
                    <div className="mt-4 border-b-1 border-gray-200 pb-3">
                      <h3 className="text-sm uppercase font-semibold pb-1">Software Development</h3>
                      <a className="flex items-center  py-1 text-[14px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                        UI/UX
                      </a>
                      <a className="flex items-center  py-1 text-[14px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                        Mobile Development
                      </a>
                      <a className="flex items-center  py-1 text-[14px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                        Web Development
                      </a>
                    </div>
                    <div className="mt-4 border-b-1 border-gray-200 pb-3">
                      <h3 className="text-sm uppercase font-semibold pb-3">Startup Software Development </h3>
                      <a className="flex items-center py-1 text-[14px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                        SaaS Development
                      </a>
                      <a className="flex items-center  py-1 text-[14px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                        Supply Chain Management 
                      </a>
                    </div>
                    <div className="mt-4 border-b-1 border-gray-200 pb-3">
                      <h3 className="text-sm uppercase font-semibold pb-3 hover:text-blue-700 focus:outline-none focus:bg-gray-100 "><a href="#">Cloud</a></h3>
                      {/* <p class="text-sm text-gray-500 pb-3">From Slalom</p> */}
                      <p className="flex items-center py-1 text-[14px] text-semibold  text-gray-600">
                        Migrations &amp; Modernization
                      </p>
                      <p className="flex items-center py-1 px-0 text-[14px] text-semibold  text-gray-600">
                        Optimization
                      </p>
                      <p className="flex items-center py-1 text-[14px] text-semibold  text-gray-600">
                        Infrastructure
                      </p>
                    </div>
                    <div className="mt-4 border-b-1 border-gray-200 pb-3">
                      <h3 className="text-sm uppercase font-semibold pb-3">Experience Strategy and Design</h3>
                      <a className="flex items-center py-1 text-[14px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                        Customer &amp; User experience
                      </a>
                      <a className="flex items-center  py-1 text-[14px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                        Product strategy, design &amp; Innovation
                      </a>
                      <a className="flex items-center  py-1 text-[14px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                        Service Design
                      </a>
                      <a className="flex items-center  py-1 text-[14px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                        Brand Strategy
                      </a>
                    </div>
                    <div className="mt-4 border-b-1 border-gray-200 pb-3">
                      <h3 className="text-sm uppercase font-semibold pb-3">Digital Product building</h3>
                      <a className="flex items-center py-1 text-[14px] text-semibold  text-gray-700 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                        Product Engineering
                      </a>
                      <a className="flex items-center py-1 px-0 text-[14px]  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#">
                        Platform Engineering
                      </a>
                      <a className="flex items-center  py-1 text-[14px]  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                        Data Engineering
                      </a>
                    </div>
                    <div className="mt-4 border-b-1 border-gray-200 pb-3">
                      <h3 className="text-sm uppercase font-semibold pb-3">Digital Transformation Services</h3>
                      <a className="flex items-center py-1 text-[14px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                        Strategy &amp; Journey
                      </a>
                      <a className="flex items-center  py-1 text-[14px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                        Digital Applications
                      </a>
                      <a className="flex items-center  py-1 text-[14px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                        AI Automation
                      </a>
                      <a className="flex items-center  py-1 text-[14px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                        Legacy Modernisation
                      </a>
                    </div>
                    <div className="mt-4">
                      <h2 className="sm:text-2xl text-lg">Made to <span className="text-blue-700 font-bold">Scale</span></h2>
                      <img src="images/mega-menu1.jpg" className="w-full my-3 rounded-3xl h-42" />
                      <p className="text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, </p>
                      <div className="grid sm:grid-cols-2">
                        <div className="mt-10">
                          <h3 className="text-sm uppercase font-semibold pb-3">Software Development</h3>
                          <a className="flex items-center  py-1 text-[14px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                            UI/UX
                          </a>
                          <a className="flex items-center  py-1 text-[14px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                            Mobile Development
                          </a>
                          <a className="flex items-center  py-1 text-[14px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                            Web Development
                          </a>
                        </div>
                        <div className="mt-10">
                          <h3 className="text-sm uppercase font-semibold pb-3">Startup Software Development </h3>
                          <a className="flex items-center  py-1 text-[14px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                            SaaS Development
                          </a>
                          <a className="flex items-center  py-1 text-[14px] text-semibold  text-gray-600 hover:text-blue-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                            Supply Chain Management 
                          </a>
                        </div>
                      </div>
                    </div>
                  
                </div>
              </div>
            </div>

            <div className='border-b-1 border-gray-200'>
              <h3 className="text-xl text-[#555] hover:text-black py-5 px-4"><a href="industries.html">Industries</a></h3>
            </div>
            <div className='border-b-1 border-gray-200'>
              <h3 className="text-xl text-[#555] hover:text-black py-5 px-4"><a href="who-we-are.html">Who We Are</a></h3>
            </div>
            <div className='border-b-1 border-gray-200'>
              <h3 className="text-xl text-[#555] hover:text-black py-5 px-4"><a href="career.html">Careers</a></h3>
            </div>
            <div className='text-center py-5 mt-5'>
              <h3><a href="contact-us.html" className="bg-blue-700 text-white px-10 py-4 rounded-lg uppercase text-base">Contact Us</a></h3>
            </div>
          </div>
      </div>




 
      </>
    )
  }
  
  export default Header