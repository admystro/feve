import React from "react";
import Hero from "../components/common/Hero";
import CollectionCard from "../components/collections/CollectionCard";
import { collections } from "../data/collections";
import { usePageLoader } from "../hooks/usePageLoader";
import { heroSlides } from "../data/heroSlides";

const Home = () => {
  // Загружаем только первые изображения слайдера
  const currentImages = (heroSlides.summer || []).slice(0, 5);

  usePageLoader(currentImages, "Завантаження головної сторінки...", {
    strategy: 'hero',
    maxImages: 5,
    shouldLoad: true,
    resetOnChange: false,
    pageId: 'home', // ← НОВОЕ: ID для кеширования
    minLoadingTime: 1000 // ← НОВОЕ: Минимум 1 секунда показа лоадера
  });

  return (
    <div className="min-h-screen">
      {/* Hero секция */}
      <Hero />

      {/* Секция коллекций */}
      <section  className="py-8 sm:py-16 lg:py-20 collections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Заголовок секции */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Колекції 2025
            </h2>
            
          </div>

          {/* Сетка коллекций */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {collections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;