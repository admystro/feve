import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Ruler } from "lucide-react";

const ProductCard = ({ product, onContactClick, onSizeChartClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedVariantId, setSelectedVariantId] = useState(product?.defaultVariant);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [touchStartY, setTouchStartY] = useState(null);
  const [swipeDirection, setSwipeDirection] = useState(null); // 'horizontal', 'vertical', null

  const minSwipeDistance = 50;

  if (!product || !product.variants || product.variants.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
        <div className="text-center text-gray-500">Товар не найден</div>
      </div>
    );
  }

  const selectedVariant = product.variants.find(v => v.id === selectedVariantId);
  const activeVariant = selectedVariant || product.variants[0];

  const availableColors = [...new Map(
    product.variants.map(variant => [variant.color.value, variant.color])
  ).values()];

  const getColorStyle = (colorValue) => {
  const colorMap = {
    'sky-blue': '#87CEEB',
    'milk': '#F5F5DC',
    'black': '#000000',
    'pink': '#FFC0CB',
    'beige': '#F5F5DC',
    'ice-satin': '#E6F3FF',
    'midi': '#D2B48C',
    'graphite': '#36454F',
    'deep-blue': '#003366',
    'suede': '#8B4513',
    'basic': '#808080',
    'white': '#FFFFFF',
    'deep-grey': '#4A4A4A',  
    'gray': '#808080',
    'deep-gray': '#404040',
    'blue': '#4169E1'  
  };
  return colorMap[colorValue] || '#CCCCCC';
};

  const variantsForSelectedColor = product.variants.filter(
    variant => variant.color.value === activeVariant.color.value
  );

  const currentImages = activeVariant.images || [];

  const getCurrentDisplayInfo = () => {
    if (product.type === 'bundle') {
      if (activeVariant.bundleItem === 'overview') {
        return {
          name: product.name,
          price: product.totalSetPrice,
          isOverview: true
        };
      } else {
        const bundleItem = product.bundleItems?.find(item => item.id === activeVariant.bundleItem);
        return {
          name: bundleItem ? bundleItem.name : product.name,
          price: activeVariant.price,
          isOverview: false
        };
      }
    }
    return {
      name: product.name,
      price: activeVariant.price,
      isOverview: false
    };
  };

  const displayInfo = getCurrentDisplayInfo();

  useEffect(() => {
    if (product?.defaultVariant) {
      setSelectedVariantId(product.defaultVariant);
    }
  }, [product]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedVariantId]);

  // Универсальные функции навигации
  const getSlideCount = () => {
    if (product.type === 'bundle' && variantsForSelectedColor.length > 1) {
      return variantsForSelectedColor.length;
    }
    return currentImages.length;
  };

  const getCurrentSlideIndex = () => {
    if (product.type === 'bundle' && variantsForSelectedColor.length > 1) {
      return variantsForSelectedColor.findIndex(v => v.id === selectedVariantId);
    }
    return currentImageIndex;
  };

  const goToSlide = (index) => {
    if (product.type === 'bundle' && variantsForSelectedColor.length > 1) {
      if (index >= 0 && index < variantsForSelectedColor.length) {
        setSelectedVariantId(variantsForSelectedColor[index].id);
      }
    } else {
      if (index >= 0 && index < currentImages.length) {
        setCurrentImageIndex(index);
      }
    }
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    const slideCount = getSlideCount();
    const currentIndex = getCurrentSlideIndex();
    const nextIndex = currentIndex === slideCount - 1 ? 0 : currentIndex + 1;
    goToSlide(nextIndex);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    const slideCount = getSlideCount();
    const currentIndex = getCurrentSlideIndex();
    const prevIndex = currentIndex === 0 ? slideCount - 1 : currentIndex - 1;
    goToSlide(prevIndex);
  };

  const goToImage = (index, e) => {
    e.stopPropagation();
    goToSlide(index);
  };

  const handleColorChange = (colorValue) => {
    const newVariant = product.variants.find(v => v.color.value === colorValue);
    if (newVariant) {
      setSelectedVariantId(newVariant.id);
    }
  };

  const shouldShowNavigation = () => {
    return getSlideCount() > 1;
  };

  // Рендер слайдов
  const renderSlides = () => {
    if (product.type === 'bundle' && variantsForSelectedColor.length > 1) {
      // Для bundle показываем первое изображение каждого варианта
      return variantsForSelectedColor.map((variant, idx) => {
        const image = variant.images?.[0];
        return image ? (
          <img
            key={variant.id}
            src={image}
            alt={displayInfo.name}
            className="w-full h-full object-cover flex-shrink-0"
            style={{ width: `${100 / variantsForSelectedColor.length}%` }}
            draggable={false}
          />
        ) : null;
      });
    } else {
      // Для обычных товаров показываем все изображения активного варианта
      return currentImages.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={displayInfo.name}
          className="w-full h-full object-cover flex-shrink-0"
          style={{ width: `${100 / currentImages.length}%` }}
          draggable={false}
        />
      ));
    }
  };

  const getTransform = () => {
    const slideCount = getSlideCount();
    const currentIndex = getCurrentSlideIndex();
    const baseTransform = -currentIndex * (100 / slideCount);
    // Применяем dragOffset только если это горизонтальный свайп
    const dragTransform = (isDragging && swipeDirection === 'horizontal') 
      ? (dragOffset / window.innerWidth) * 100 
      : 0;
    return `translateX(${baseTransform + dragTransform}%)`;
  };

  return (
    <div className="bg-white shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div
        className="relative aspect-[3/4] overflow-hidden group"
        style={{ touchAction: 'pan-y pinch-zoom' }}
        onTouchStart={(e) => {
          const touch = e.targetTouches[0];
          setTouchStart(touch.clientX);
          setTouchStartY(touch.clientY);
          setTouchEnd(null);
          setSwipeDirection(null);
          setIsDragging(false);
        }}
        onTouchMove={(e) => {
          const touch = e.targetTouches[0];
          const touchX = touch.clientX;
          const touchY = touch.clientY;
          
          setTouchEnd(touchX);
          
          if (touchStart !== null && touchStartY !== null && swipeDirection === null) {
            const deltaX = Math.abs(touchX - touchStart);
            const deltaY = Math.abs(touchY - touchStartY);
            
            // Определяем направление свайпа только после небольшого движения
            if (deltaX > 10 || deltaY > 10) {
              if (deltaX > deltaY) {
                setSwipeDirection('horizontal');
                setIsDragging(true);
              } else {
                setSwipeDirection('vertical');
              }
            }
          }
          
          // Применяем dragOffset только для горизонтального свайпа
          if (swipeDirection === 'horizontal' && touchStart !== null) {
            setDragOffset(touchX - touchStart);
          }
        }}
        onTouchEnd={() => {
          // Обрабатываем свайп только если это горизонтальное движение
          if (swipeDirection === 'horizontal' && touchStart !== null && touchEnd !== null) {
            const distance = touchStart - touchEnd;
            const isLeftSwipe = distance > minSwipeDistance;
            const isRightSwipe = distance < -minSwipeDistance;

            if (isLeftSwipe) {
              nextImage();
            } else if (isRightSwipe) {
              prevImage();
            }
          }

          // Сброс всех состояний
          setIsDragging(false);
          setTouchStart(null);
          setTouchStartY(null);
          setTouchEnd(null);
          setDragOffset(0);
          setSwipeDirection(null);
        }}
      >
        <div
          className="flex h-full transition-transform duration-300 ease-in-out"
          style={{
            width: `${getSlideCount() * 100}%`,
            transform: getTransform(),
          }}
        >
          {renderSlides()}
        </div>

        {/* Цвета в левом нижнем углу */}
        <div className="absolute bottom-3 left-3 flex flex-col gap-3">
          {availableColors.map((color) => {
            const isSelected = activeVariant.color.value === color.value;
            return (
              <label key={color.value} className="cursor-pointer relative w-6 h-6">
                <input
                  type="radio"
                  name={`color-${product.id}`}
                  value={color.value}
                  checked={isSelected}
                  onChange={() => handleColorChange(color.value)}
                  className="sr-only"
                />
                <div
                  className={`w-8 h-8 border-2`}
                  style={{
                    borderColor: isSelected ? 'black' : 'white',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div
                    className="w-6 h-6"
                    style={{ backgroundColor: getColorStyle(color.value) }}
                    title={color.name}
                  />
                </div>
              </label>
            );
          })}
        </div>

        {/* Стрелки навигации */}
        {shouldShowNavigation() && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Точки навигации */}
        {shouldShowNavigation() && (
          <div className="absolute bottom-3 right-3 flex space-x-2">
            {Array.from({ length: getSlideCount() }).map((_, index) => (
              <button
                key={index}
                onClick={(e) => goToImage(index, e)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === getCurrentSlideIndex()
                    ? "bg-white scale-125"
                    : "bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Информация о товаре */}
      <div className="p-4 collections">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
            {displayInfo.name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-gray-900">
              {displayInfo.price.toLocaleString()} ₴
            </p>
            {product.type === 'bundle' && displayInfo.isOverview && (
              <span className="text-sm text-black bg-white px-2 py-1">
                Комплект
              </span>
            )}
          </div>
        </div>

        {/* Кнопки */}
        <div className="flex gap-3">
          <button
            onClick={() =>
              onContactClick({
                ...product,
                selectedVariant: activeVariant,
                displayInfo
              })
            }
            className="flex-1 bg-white text-black py-3 px-4 font-medium transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Зв'язатися
          </button>

          <button
            onClick={() =>
              onSizeChartClick({
                ...product,
                selectedVariant: activeVariant,
                displayInfo
              })
            }
            className="bg-white text-black py-3 px-4 font-medium hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center"
          >
            <Ruler className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;