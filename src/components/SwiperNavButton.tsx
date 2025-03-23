
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="swiper-nav-btns relative text-white flex justify-between gap-2">
            <button className='text-center group flex justify-center items-center border border-solid border-blue-700 w-12 h-12 transition-all duration-500 rounded-full hover:bg-blue-900' onClick={() => swiper.slidePrev()}>
                <svg className="size-6 text-blur-700 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button className='text-center group flex justify-center items-center border border-solid border-blue-700 w-12 h-12 transition-all duration-500 rounded-full hover:bg-blue-900' onClick={() => swiper.slideNext()}>
                <svg className="h-6 w-6 text-blue-700 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
};