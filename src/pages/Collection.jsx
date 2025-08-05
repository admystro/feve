import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/products/ProductCard";
import { products } from "../data/products";
import { collections } from "../data/collections";
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const { season } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSizeChartModalOpen, setIsSizeChartModalOpen] = useState(false);
  const [isContactModalVisible, setIsContactModalVisible] = useState(false);
  const [isSizeChartModalVisible, setIsSizeChartModalVisible] = useState(false);

  // Данные размерных сеток
  const sizeCharts = [
    {
      title: "ВЕРХНІЙ ОДЯГ",
      data: [
        { label: "size", xs: "xs - s", m: "m - l" },
        { label: "обхват грудей", xs: "88 - 92", m: "96 - 100" },
        { label: "обхват талії", xs: "64 - 68", m: "72 - 76" },
        { label: "обхват стегон", xs: "88 - 92", m: "96 - 100" }
      ]
    },
    {
      title: "ДЕТАЛЬНА ТАБЛИЦЯ",
      data: [
        { label: "size", xs: "xs", s: "s", m: "m", l: "l" },
        { label: "обхват грудей", xs: "88", s: "92", m: "96", l: "100" },
        { label: "обхват талії", xs: "64", s: "68", m: "72", l: "76" },
        { label: "обхват стегон", xs: "88", s: "92", m: "96", l: "100" }
      ]
    }
  ];

  const messengerLinks = [
    {
      name: 'Instagram',
      icon: '/assets/icons/instagram.svg',
      href: 'https://instagram.com/your_account',
    },
    {
      name: 'Telegram',
      icon: '/assets/icons/telegram.svg',
      href: 'https://t.me/your_channel_or_username',
    },
    {
      name: 'Whatsapp',
      icon: '/assets/icons/whatsapp.svg',
      href: 'https://wa.me/380XXXXXXXXX',
    },
  ];

  // Обработчики свайпа для touch устройств
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentSlide < sizeCharts.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (diff < 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    }

    setIsDragging(false);
  };

  // Обработчики для мыши (десктоп)
  const handleMouseStart = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleMouseEnd = (e) => {
    if (!isDragging) return;

    const endX = e.clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentSlide < sizeCharts.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (diff < 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    }

    setIsDragging(false);
  };

  // Рендер таблицы размеров
  const renderTable = (chart, index) => {
    const isDetailed = index === 1;

    return (
      <div
        key={index}
        className="w-full flex-shrink-0 px-6"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{chart.title}</h2>
        </div>

        <div className="space-y-6">
          {chart.data.map((row, rowIndex) => (
            <div key={rowIndex} className="flex items-center">
              <div className="text-left font-medium text-gray-700 w-20 flex-shrink-0">
                {row.label}
              </div>

              <div className="flex justify-center items-center flex-1">
                {isDetailed ? (
                  <div className="grid grid-cols-4 gap-8 w-full max-w-xs">
                    <div className="text-center font-medium">{row.xs}</div>
                    <div className="text-center font-medium">{row.s}</div>
                    <div className="text-center font-medium">{row.m}</div>
                    <div className="text-center font-medium">{row.l}</div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-12 w-full max-w-xs">
                    <div className="text-center font-medium">{row.xs}</div>
                    <div className="text-center font-medium">{row.m}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="200 230 367 135"
            className="max-w-[300px] h-auto m-auto drop-shadow-lg mb-4 w-1/2"
          >
            <g fill="black">
              <path d="M523.18,275.08h43.51v-10.09h-35.58c-1.8,0-3.55.63-4.92,1.78l-21.57,17.96c-1.76,1.47-2.77,3.62-2.77,5.91v69.78h64.85v-10.08h-49.09v-33.26h39.35v-10.05h-39.35v-26.39c0-3.08,2.5-5.58,5.58-5.58Z" />
              <polygon points="200.68 360.44 216.45 360.44 216.45 317.1 255.8 317.1 255.8 307.05 216.45 307.05 216.45 275.07 265.54 275.07 265.54 265 200.68 265 200.68 360.44" />
              <path d="M311.97,344.78v-27.67h39.35v-10.05h-55.12v27.73c0,2.29,1.01,4.45,2.77,5.91l21.57,17.96c1.38,1.15,3.13,1.78,4.92,1.78h35.59v-10.08h-43.51c-3.08-.01-5.58-2.51-5.58-5.59Z" />
              <polygon points="296.21 270.37 361.06 270.37 361.06 259.63 296.21 268.94 296.21 270.37" />
              <path d="M458.33,265l-26.88,80.64-26.88-80.64h-15.61l32.95,95.44h19.08l32.95-95.44h-15.61Z" />
              <polygon points="346.96 232.85 333.55 232.85 324.46 249.03 329.39 249.03 346.96 232.85" />
            </g>
          </svg>
          <p className="text-sm sm:text-xl lg:text-2xl opacity-90 font-light tracking-wider text-black">
            FEMALE VERGES
          </p>
        </div>
      </div>
    );
  };

  // Скролл вверх при загрузке страницы
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [season]);

  useEffect(() => {
    const shouldBlockScroll = isContactModalOpen || isSizeChartModalOpen;

    if (shouldBlockScroll) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isContactModalOpen, isSizeChartModalOpen]);

  // Получаем информацию о коллекции
  const collectionInfo = collections.find((col) => col.id === season);

  // Проверяем существование коллекции
  if (!collectionInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Коллекцію не знайдено
          </h1>
          <p className="text-gray-600">Вибрана коллекція не існує</p>
        </div>
      </div>
    );
  }

  // Проверяем доступность коллекции
  if (!collectionInfo.available) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🔒</span>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {collectionInfo.title}
          </h1>
          <div className="bg-gray-100 rounded-full px-6 py-3 inline-block mb-4">
            <span className="text-lg font-semibold text-gray-700">
              Coming Soon
            </span>
          </div>
          <p className="text-gray-600 mb-6">
            Колекція скоро буде доступна. Ми працюємо над створенням чудових
            речей для вас!
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Повернутися назад
          </button>
        </div>
      </div>
    );
  }

  // Получаем товары коллекции
  const collectionProducts = products[season] || [];

  const handleContactClick = (product) => {
    setSelectedProduct(product);
    setIsContactModalOpen(true);
    setTimeout(() => setIsContactModalVisible(true), 10); // Небольшая задержка для анимации
  };

  const handleSizeChartClick = (product) => {
    setSelectedProduct(product);
    setCurrentSlide(0);
    setIsSizeChartModalOpen(true);
    setTimeout(() => setIsSizeChartModalVisible(true), 10);
  };

  // Обновите функцию закрытия:
  const closeModals = () => {
    setIsContactModalVisible(false);
    setIsSizeChartModalVisible(false);

    // Задержка перед полным скрытием для завершения анимации
    setTimeout(() => {
      setIsContactModalOpen(false);
      setIsSizeChartModalOpen(false);
      setSelectedProduct(null);
      setCurrentSlide(0);
    }, 300); // 300ms соответствует длительности анимации
  };

  return (
    <div className="min-h-screen">
      {/* Заголовок коллекции */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto p-4">
          <div className="relative flex items-center justify-center mb-2">
            {/* Кнопка назад — абсолютное позиционирование слева */}
            <button
              onClick={() => navigate(-1)}
              className="absolute left-0 flex items-center text-gray-700 hover:text-gray-900"
              aria-label="Назад"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Заголовок по центру */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              {collectionInfo.name}
            </h1>
          </div>

          {/* Текст с количеством товаров по центру */}
          <div className="text-sm text-center text-gray-500">
            {collectionProducts.length} товарів у коллекції
          </div>
        </div>
      </div>

      {/* Сетка товаров */}
      <div className="max-w-7xl mx-auto px-4 collections sm:px-6 lg:px-8 py-4 sm:py-12">
        {collectionProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {collectionProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onContactClick={handleContactClick}
                onSizeChartClick={handleSizeChartClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Товари скоро з'являться
            </h3>
            <p className="text-gray-600">
              Ми працюємо над наповненням цієї коллекції
            </p>
          </div>
        )}
      </div>

      {isContactModalOpen && (
        <div
          onClick={closeModals}
          className={`fixed inset-0 bg-black bg-opacity-65 z-50 flex items-center justify-center p-6 transition-opacity duration-300 ${isContactModalVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div
            className={`bg-white relative max-w-md w-full transform transition-all duration-300 ${isContactModalVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
          >
            <button
              onClick={closeModals}
              className="absolute -top-8 right-0 text-white text-3xl leading-none"
              aria-label="Закрити"
            >
              &times;
            </button>
            <div className="flex flex-col">
              {messengerLinks.map(({ name, icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <div className="flex items-center w-full">
                    <div className="bg-black p-4">
                      <img src={icon} alt={name} className="w-7 h-7" />
                    </div>
                    <div className="flex justify-center items-center w-full">
                      <p className="text-center text-xl">{name}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="p-4">
              <h3 className="text-center font-semibold">Товар:</h3>
              <p className="text-gray-600 text-center">{selectedProduct?.name}</p>
            </div>
          </div>
        </div>
      )}
      {isSizeChartModalOpen && (
        <div
          onClick={closeModals}
          className={`fixed inset-0 bg-black bg-opacity-65 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isSizeChartModalVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white relative p-6 max-w-2xl w-full max-h-[80vh] transform transition-all duration-300 ${isSizeChartModalVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
          >
            <button
              onClick={closeModals}
              className="absolute -top-8 right-0 text-white text-3xl leading-none"
              aria-label="Закрити"
            >
              &times;
            </button>
            {/* Слайдер контейнер */}
            <div
              ref={sliderRef}
              className="relative overflow-hidden select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseStart}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseEnd}
              onMouseLeave={handleMouseEnd}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
              <div
                className="flex transition-transform duration-300 ease-out py-8"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {sizeCharts.map((chart, index) => renderTable(chart, index))}
              </div>
            </div>

            {/* Индикаторы */}
            <div className="flex justify-center space-x-2 pb-6">
              {sizeCharts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide
                      ? 'bg-gray-800 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;