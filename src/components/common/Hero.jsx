import React from "react";
import { useNavigate } from "react-router-dom";
import HeroSlider from "./HeroSlider";
import { heroSlides } from "../../data/heroSlides";

const Hero = ({ season = "summer" }) => {
  const navigate = useNavigate();

  const scrollToCollections = () => {
    const collectionsSection = document.getElementById("collections");
    if (collectionsSection) {
      collectionsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const goToCollection = () => {
    navigate(`/collection/${season}`);
  };

  const currentSlides = heroSlides[season] || heroSlides.summer;

  return (
    <section className="relative w-full h-screen sm:h-[70vh] lg:h-[85vh] overflow-hidden">
      <HeroSlider slides={currentSlides} autoplayInterval={5000} randomOrder={true} />

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 max-w-4xl mx-auto">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="200 230 367 135"
          className="max-w-[300px] w-full h-auto drop-shadow-lg mb-6"
        >
          <g fill="white">
            <path d="M523.18,275.08h43.51v-10.09h-35.58c-1.8,0-3.55.63-4.92,1.78l-21.57,17.96c-1.76,1.47-2.77,3.62-2.77,5.91v69.78h64.85v-10.08h-49.09v-33.26h39.35v-10.05h-39.35v-26.39c0-3.08,2.5-5.58,5.58-5.58Z" />
            <polygon points="200.68 360.44 216.45 360.44 216.45 317.1 255.8 317.1 255.8 307.05 216.45 307.05 216.45 275.07 265.54 275.07 265.54 265 200.68 265 200.68 360.44" />
            <path d="M311.97,344.78v-27.67h39.35v-10.05h-55.12v27.73c0,2.29,1.01,4.45,2.77,5.91l21.57,17.96c1.38,1.15,3.13,1.78,4.92,1.78h35.59v-10.08h-43.51c-3.08-.01-5.58-2.51-5.58-5.59Z" />
            <polygon points="296.21 270.37 361.06 270.37 361.06 259.63 296.21 268.94 296.21 270.37" />
            <polygon points="458.33 265 431.45 345.64 404.57 265 388.96 265 421.91 360.44 440.99 360.44 473.95 265 458.33 265" />
            <polygon points="346.96 232.85 333.55 232.85 324.46 249.03 329.39 249.03 346.96 232.85" />
          </g>
        </svg>

        <p className="text-lg sm:text-xl lg:text-2xl opacity-90 font-light tracking-wider">
          FEMALE VERGES
        </p>
        <div className="px-4 mt-10 absolute left-0 w-full" style={{ bottom: '10%' }}>
          
          <div className="relative overflow-hidden opacity-70">
            
            <div className="anim-border absolute top-0 left-0 w-1 h-0 bg-white "></div>
            <h1 className="anim-text pl-4 -translate-x-full text-justify">
              Мета бренду - створювати якісний
              і стильний жіночий одяг з натуральних тканин,
              який підкреслює багатогранність жіночої природи,
              поєднуючи комфорт, стиль та елегантність,
              естетику та функціональність,
              приділяючи увагу деталям та крою.
            </h1>
          </div>
        </div>
        <div className="w-64 h-1 bg-gray-700 mt-8 rounded-full overflow-hidden invisible">
          <div
            className="h-full bg-white transition-all duration-300 ease-out"

          />
        </div>


      </div>
    </section>
  );
};

export default Hero;
