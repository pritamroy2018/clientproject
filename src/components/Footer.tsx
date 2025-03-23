import '../App.css'


function Footer() {   
    return (
      <>

      <div className="bg-blue-700 sm:py-20 py-10 lg:px-4 px-4 overflow-hidden">
        <div className="max-w-[85rem] w-full mx-auto">
          <div className="block sm:flex justify-between items-center">
            <h2 className="font-extralight text-white text-3xl md:text-[67px]">Let’s solve <span className="font-bold relative">
                together. 
                <small className="w-full absolute left-0 block">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1418 125"><path d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z" fill="#001fa8" />
                  </svg>
                </small>
              </span>
            </h2>
            <a href="#" className="rounded-3xl font-semibold inline-block text-white border-1 border-white px-7 py-3 hover:bg-blue-900 hover:border-blue-900 max-sm:mt-5">Get in Touch 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 py-10 px-4">
        <div className="sm:max-w-[85rem] w-full mx-auto">
          <div className="block sm:flex gap-7 w-full">
            <div className="sm:w-2/12 w-full">
              <div><img src="images/logo.png" className="h-[40px]" /></div>
            </div>
            <div className="sm:w-4/12 sm:pr-6 w-full max-sm:pt-10">
              <h3 className="text-white text-md font-bold tracking-wider uppercase">Newsroom</h3>
              <p className="text-gray-300 text-xl font-semibold py-6">Get the latest news and updates about Slalom. </p>
              <a href="#" className="text-gray-300 text-md font-semibold">Visit the newsroom 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-13 inline-block font-bold pl-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </div>
            <div className="sm:w-3/12 w-full max-sm:pt-10">
              <h3 className="text-white text-md font-bold tracking-wider uppercase">Our Location</h3>
              <div className="mt-6">
                <a href="#" className="text-gray-300 font-medium text-lg hover:text-white pb-3 block">India</a>
                <a href="#" className="text-gray-300 font-medium text-lg hover:text-white pb-3 block">Australia</a>
                <a href="#" className="text-gray-300 font-medium text-lg hover:text-white pb-3 block">Canada</a>
                <a href="#" className="text-gray-300 font-medium text-lg hover:text-white pb-3 block">Colombia</a>
                <a href="#" className="text-gray-300 font-medium text-lg hover:text-white pb-3 block">Germany</a>
                <a href="#" className="text-gray-300 font-medium text-lg hover:text-white pb-3 block">Ireland</a>
                <a href="#" className="text-gray-300 font-medium text-lg hover:text-white pb-3 block">Japan</a>
              </div>
            </div>
            <div className="sm:w-3/12 w-full max-sm:pt-10">
              <h3 className="text-white text-md font-bold tracking-wider uppercase">Social</h3>
              <div className="mt-6">
                <a href="#" className="text-gray-300 font-medium text-lg hover:text-white pb-3 block">LinkedIn
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-7 inline-block"><path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5  V37z" /><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364  c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274 L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479  C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05" /><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677  c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638  c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001  c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07" /><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12 c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698 c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19 c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z" /></svg>
                </a>
                <a href="#" className="text-gray-300 font-medium text-lg hover:text-white pb-3 block">X (formerly known as Twitter
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="size-7 inline-block"><path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" /></svg>
                </a>
                <a href="#" className="text-gray-300 font-medium text-lg hover:text-white pb-3 block">Instagram
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-7 inline-block"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#fd5" /><stop offset=".328" stopColor="#ff543f" /><stop offset=".348" stopColor="#fc5245" /><stop offset=".504" stopColor="#e64771" /><stop offset=".643" stopColor="#d53e91" /><stop offset=".761" stopColor="#cc39a4" /><stop offset=".841" stopColor="#c837ab" /></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z" /><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#4168c9" /><stop offset=".999" stopColor="#4168c9" stopOpacity={0} /></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z" /><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5  s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z" /><circle cx="31.5" cy="16.5" r="1.5" fill="#fff" /><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12  C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z" /></svg>
                </a>
                <a href="#" className="text-gray-300 font-medium text-lg hover:text-white pb-3 block">Facebook
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-7 inline-block"><linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#2aa4f4" /><stop offset={1} stopColor="#007ad9" /></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z" /><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z" /></svg>
                </a>       
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-800 py-4 px-4">
        <div className="sm:max-w-[85rem] w-full mx-auto">
          <div className="sm:flex block justify-between gap-5">
            <div className="text-gray-300">Copyright 2025 © Domainname.com </div>
            <div className="text-gray-300 flex gap-4"><a href="#" className="hover:text-white">Support</a> <a href="#" className="hover:text-white">Terms &amp; Condition</a> <a href="#" className="hover:text-white">Privacy Policy</a> </div>
          </div>
        </div>
      </div>

      

      

</>

)}


export default Footer