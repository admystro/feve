// src/components/common/GlobalLoader.jsx
import React, { useEffect, useState } from "react";
import { useLoading } from "../../contexts/LoadingContext";

const FADE_DURATION_MS = 1000; // Уменьшим время исчезновения для более быстрой реакции

const GlobalLoader = () => {
  const { isLoading } = useLoading();
  const [isReadyToHide, setIsReadyToHide] = useState(false);

  // Когда isLoading становится false, запускаем таймер на скрытие
  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        setIsReadyToHide(true);
      }, FADE_DURATION_MS);
      return () => clearTimeout(timeout);
    } else {
      setIsReadyToHide(false);
    }
  }, [isLoading]);

  // Этот эффект сработает при первой загрузке, чтобы лоадер исчез
  useEffect(() => {
    if (!isLoading) {
      setIsReadyToHide(true);
    }
  }, []);

  // Если лоадер не загружается и готов к скрытию, то ничего не показываем
  if (!isLoading && isReadyToHide) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 bg-black z-[9999] transition-opacity flex flex-col items-center justify-center
      ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{ transitionDuration: `${FADE_DURATION_MS}ms` }}
    >
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
          <path d="M458.33,265l-26.88,80.64-26.88-80.64h-15.61l32.95,95.44h19.08l32.95-95.44h-15.61Z" />
          <polygon points="346.96 232.85 333.55 232.85 324.46 249.03 329.39 249.03 346.96 232.85" />
        </g>
      </svg>
      <p className="text-lg sm:text-xl lg:text-2xl opacity-90 font-light tracking-wider text-white">
        FEMALE VERGES
      </p>
      <div className="w-64 h-1 bg-gray-700 mt-8 rounded-full overflow-hidden">
        {/* Здесь мы добавляем классы для анимации Tailwind */}
        <div className="h-full bg-white loader-bar" />
      </div>
    </div>
  );
};

export default GlobalLoader;