"use client"
import { letters } from '@/libs/letters';

const FrontLandingPage = () => {

    const scrollToAboutUs = () => {
        const aboutUsElement = document.getElementById('about-us');
        if (aboutUsElement) {
            window.scrollTo({
                top: aboutUsElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='bg-portada'>
            <div className='flex flex-col'>
                <h1 className={`${letters.primary.className} text-[128px] mt-56 mx-10`}>Healthy Beauty</h1>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className={`${letters.primary.className}  text-[50px] mx-10 text-center`}>Elisa Rodriguez</h2>
                    <button className="animated-button mt-10 " onClick={scrollToAboutUs}>
                        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                        <span className="text">Comenzar</span>
                        <span className="circle"></span>
                        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default FrontLandingPage;
