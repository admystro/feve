import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Ruler } from "lucide-react";

const ProductCard = ({ product, onContactClick, onSizeChartClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedVariantId, setSelectedVariantId] = useState(product?.defaultVariant);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);


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
      'deep-blue': '#003366'
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

  const nextImage = (e) => {
    e?.stopPropagation();
    if (product.type === 'bundle' && variantsForSelectedColor.length > 1) {
      const currentIndex = variantsForSelectedColor.findIndex(v => v.id === selectedVariantId);
      const nextIndex = currentIndex === variantsForSelectedColor.length - 1 ? 0 : currentIndex + 1;
      setSelectedVariantId(variantsForSelectedColor[nextIndex].id);
    } else {
      setCurrentImageIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    if (product.type === 'bundle' && variantsForSelectedColor.length > 1) {
      const currentIndex = variantsForSelectedColor.findIndex(v => v.id === selectedVariantId);
      const prevIndex = currentIndex === 0 ? variantsForSelectedColor.length - 1 : currentIndex - 1;
      setSelectedVariantId(variantsForSelectedColor[prevIndex].id);
    } else {
      setCurrentImageIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
    }
  };

  const goToImage = (index, e) => {
    e.stopPropagation();
    if (product.type === 'bundle' && variantsForSelectedColor.length > 1) {
      if (index < variantsForSelectedColor.length) {
        setSelectedVariantId(variantsForSelectedColor[index].id);
      }
    } else {
      setCurrentImageIndex(index);
    }
  };

  const handleColorChange = (colorValue) => {
    const newVariant = product.variants.find(v => v.color.value === colorValue);
    if (newVariant) {
      setSelectedVariantId(newVariant.id);
    }
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e) => {
    e.stopPropagation();
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  const getNavigationDotsCount = () => {
    if (product.type === 'bundle' && variantsForSelectedColor.length > 1) {
      return variantsForSelectedColor.length;
    }
    return currentImages.length;
  };

  const getCurrentDotIndex = () => {
    if (product.type === 'bundle' && variantsForSelectedColor.length > 1) {
      return variantsForSelectedColor.findIndex(v => v.id === selectedVariantId);
    }
    return currentImageIndex;
  };

  const shouldShowNavigation = () => {
    if (product.type === 'bundle') {
      return variantsForSelectedColor.length > 1 || currentImages.length > 1;
    }
    return currentImages.length > 1;
  };

  return (
    <div className="bg-white shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div
        className="relative aspect-[3/4] overflow-hidden group touch-pan-x"
        onTouchStart={(e) => {
          setTouchStart(e.targetTouches[0].clientX);
          setIsDragging(true);
        }}
        onTouchMove={(e) => {
          const touchX = e.targetTouches[0].clientX;
          setTouchEnd(touchX);
          if (touchStart !== null) {
            setDragOffset(touchX - touchStart);
          }
        }}
        onTouchEnd={() => {
          setIsDragging(false);
          if (!touchStart || !touchEnd) return;

          const distance = touchStart - touchEnd;
          const isLeftSwipe = distance > minSwipeDistance;
          const isRightSwipe = distance < -minSwipeDistance;

          if (isLeftSwipe) {
            setCurrentImageIndex((prev) =>
              prev === currentImages.length - 1 ? 0 : prev + 1
            );
          } else if (isRightSwipe) {
            setCurrentImageIndex((prev) =>
              prev === 0 ? currentImages.length - 1 : prev - 1
            );
          }

          setTouchStart(null);
          setTouchEnd(null);
          setDragOffset(0);
        }}
      >
        <div
          className="flex h-full transition-transform duration-300 ease-in-out"
          style={{
            width: `${currentImages.length * 100}%`,
            transform: `translateX(calc(-${currentImageIndex * (100 / currentImages.length)}% + ${isDragging ? dragOffset : 0}px))`,
          }}
        >
          {currentImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={displayInfo.name}
              className="w-full h-full object-cover flex-shrink-0"
              style={{ width: `${100 / currentImages.length}%` }}
              draggable={false}
            />
          ))}
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
                  className={`w-8 h-8  border-2`}
                  style={{
                    borderColor: isSelected ? 'black' : 'white',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div
                    className="w-6 h-6 "
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
            {Array.from({ length: getNavigationDotsCount() }).map((_, index) => (
              <button
                key={index}
                onClick={(e) => goToImage(index, e)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === getCurrentDotIndex()
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
            className="flex-1 bg-white text-black py-3 px-4 font-medium  transition-colors duration-300 flex items-center justify-center gap-2"
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
