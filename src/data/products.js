export const products = {
  summer: [
    {
      id: 1,
      name: 'Джинсовий жакет небесно-блакитного кольору',
      type: 'simple', 
      basePrice: 7000,
      variants: [
        {
          id: '1-sky-blue',
          color: { name: 'Небесно-блакитний', value: 'sky-blue' },
          price: 7000,
          images: [
            '/images/products/001/001_1.jpg',
            '/images/products/001/001_2.jpg',
            '/images/products/001/001_3.jpg',
            '/images/products/001/001_4.jpg'
          ]
        }
      ],
      defaultVariant: '1-sky-blue',
      collection: 'summer'
    },
    {
      id: 2,
      name: 'Вишуканий сатиновий костюм',
      type: 'multi-color',
      basePrice: 9200,
      variants: [
        {
          id: '2-milk',
          color: { name: 'Молочний', value: 'milk' },
          price: 9200,
          images: [
            '/images/products/002/milk/002_milk_1.jpg',
            '/images/products/002/milk/002_milk_2.jpg',
            '/images/products/002/milk/002_milk_3.jpg',
            '/images/products/002/milk/002_milk_4.jpg'
          ]
        },
        {
          id: '2-black',
          color: { name: 'Чорний', value: 'black' },
          price: 9200,
          images: [
            '/images/products/002/black/002_black_1.jpg',
            '/images/products/002/black/002_black_2.jpg',
            '/images/products/002/black/002_black_3.jpg',
            '/images/products/002/black/002_black_4.jpg'
          ]
        },
        {
          id: '2-pink',
          color: { name: 'Рожевий', value: 'pink' },
          price: 9200,
          images: [
            '/images/products/002/pink/002_pink_1.jpg',
            '/images/products/002/pink/002_pink_2.jpg',
            '/images/products/002/pink/002_pink_3.jpg',
            '/images/products/002/pink/002_pink_4.jpg'
          ]
        }
      ],
      defaultVariant: '2-milk',
      collection: 'summer'
    },
    {
      id: 3,
      name: 'Молочний костюм з легкої тканини',
      type: 'bundle',
      basePrice: 6200, // цена самого дешевого варианта
      totalSetPrice: 14600, // цена всего комплекта (6200 + 4900 + 3500)
      bundleItems: [
        { 
          id: 'oversized-vest',
          name: 'Оверсайз жилет', 
          shortName: 'Жилет оверсайз',
          price: 6200,
          description: 'Стильний оверсайз жилет з легкої тканини'
        },
        { 
          id: 'bermuda',
          name: 'Бермуди', 
          shortName: 'Бермуди',
          price: 4900,
          description: 'Комфортні бермуди з високою посадкою'
        },
        { 
          id: 'slim-vest',
          name: 'Жилет slim fit', 
          shortName: 'Жилет сліма',
          price: 3500,
          description: 'Приталений жилет для елегантного образу'
        }
      ],
      variants: [
        // Обзорные фото всего комплекта
        {
          id: '3-milk-overview',
          color: { name: 'Молочний', value: 'milk' },
          bundleItem: 'overview', // специальный маркер для обзорного фото
          price: 14600,
          images: [
            '/images/products/003/milk/overview/003_milk_set_1.jpg',
            
          ]
        },
        {
          id: '3-graphite-overview',
          color: { name: 'Графітовий', value: 'graphite' },
          bundleItem: 'overview',
          price: 14600,
          images: [
            '/images/products/003/graphite/overview/003_graphite_set_1.jpg',
           
          ]
        },
        {
          id: '3-deep-blue-overview',
          color: { name: 'Глибокий синій', value: 'deep-blue' },
          bundleItem: 'overview',
          price: 14600,
          images: [
            '/images/products/003/deep-blue/overview/003_blue_set_1.jpg',
           
          ]
        },
        // Фото отдельных товаров
        {
          id: '3-milk-oversized-vest',
          color: { name: 'Молочний', value: 'milk' },
          bundleItem: 'oversized-vest',
          price: 6200,
          images: [
            '/images/products/003/milk/vest-oversized/003_milk_vest_1.jpg',
            
          ]
        },
        {
          id: '3-milk-bermuda',
          color: { name: 'Молочний', value: 'milk' },
          bundleItem: 'bermuda',
          price: 4900,
          images: [
            '/images/products/003/milk/bermuda/003_milk_bermuda_1.jpg',
            
          ]
        },
        {
          id: '3-milk-slim-vest',
          color: { name: 'Молочний', value: 'milk' },
          bundleItem: 'slim-vest',
          price: 3500,
          images: [
            '/images/products/003/milk/vest-slim/003_milk_slim_1.jpg',
            
          ]
        },
        {
          id: '3-graphite-oversized-vest',
          color: { name: 'Графітовий', value: 'graphite' },
          bundleItem: 'oversized-vest',
          price: 6200,
          images: [
            '/images/products/003/graphite/vest-oversized/003_graphite_vest_1.jpg',
            
          ]
        },
        {
          id: '3-graphite-bermuda',
          color: { name: 'Графітовий', value: 'graphite' },
          bundleItem: 'bermuda',
          price: 4900,
          images: [
            '/images/products/003/graphite/bermuda/003_graphite_bermuda_1.jpg',
           
          ]
        },
        {
          id: '3-graphite-slim-vest',
          color: { name: 'Графітовий', value: 'graphite' },
          bundleItem: 'slim-vest',
          price: 3500,
          images: [
            '/images/products/003/graphite/vest-slim/003_graphite_slim_1.jpg',
            
          ]
        },
        {
          id: '3-deep-blue-oversized-vest',
          color: { name: 'Глибокий синій', value: 'deep-blue' },
          bundleItem: 'oversized-vest',
          price: 6200,
          images: [
            '/images/products/003/deep-blue/vest-oversized/003_blue_vest_1.jpg',
            
          ]
        },
        {
          id: '3-deep-blue-bermuda',
          color: { name: 'Глибокий синій', value: 'deep-blue' },
          bundleItem: 'bermuda',
          price: 4900,
          images: [
            '/images/products/003/deep-blue/bermuda/003_blue_bermuda_1.jpg',
           
          ]
        },
        {
          id: '3-deep-blue-slim-vest',
          color: { name: 'Глибокий синій', value: 'deep-blue' },
          bundleItem: 'slim-vest',
          price: 3500,
          images: [
            '/images/products/003/deep-blue/vest-slim/003_blue_slim_1.jpg',
            
          ]
        }
      ],
      defaultVariant: '3-milk-overview', // начинаем с обзорного фото
      collection: 'summer'
    },
    {
      id: 4,
      name: 'Костюм з підплічниками',
      type: 'multi-color',
      basePrice: 9800,
      variants: [
        {
          id: '4-beige',
          color: { name: 'Бежевий', value: 'beige' },
          price: 9800,
          images: [
            '/images/products/004/beige/004_beige_1.jpg',
            '/images/products/004/beige/004_beige_2.jpg',
            '/images/products/004/beige/004_beige_3.jpg',
            '/images/products/004/beige/004_beige_4.jpg'
          ]
        },
        {
          id: '4-black',
          color: { name: 'Чорний', value: 'black' },
          price: 9800,
          images: [
            '/images/products/004/black/004_black_1.jpg',
            '/images/products/004/black/004_black_2.jpg',
            '/images/products/004/black/004_black_3.jpg',
            '/images/products/004/black/004_black_4.jpg',
            '/images/products/004/black/004_black_5.jpg'
          ]
        }
      ],
      defaultVariant: '4-black',
      collection: 'summer'
    },
    {
      id: 5,
      name: 'Шорти айс-сатин',
      type: 'simple',
      basePrice: 3700,
      variants: [
        {
          id: '5-ice-satin',
          color: { name: 'Айс-сатин', value: 'ice-satin' },
          price: 3700,
          images: [
            '/images/products/005/005_1.jpg',
            '/images/products/005/005_2.jpg',
            '/images/products/005/005_3.jpg'
          ]
        }
      ],
      defaultVariant: '5-ice-satin',
      collection: 'summer'
    },
    {
      id: 6,
      name: 'Сукня-кімоно',
      type: 'multi-color',
      basePrice: 4500,
      variants: [
        {
          id: '6-black',
          color: { name: 'Глибокий синій', value: 'deep-blue' },
          price: 4500,
          images: [
            '/images/products/006/blue/006_blue_1.jpg',
            '/images/products/006/blue/006_blue_2.jpg',
            '/images/products/006/blue/006_blue_3.jpg',
            '/images/products/006/blue/006_blue_4.jpg'
          ]
        },
        {
          id: '6-pink',
          color: { name: 'Рожевий', value: 'pink' },
          price: 4500,
          images: [
            '/images/products/006/pink/006_pink_1.jpg',
            '/images/products/006/pink/006_pink_2.jpg',
            '/images/products/006/pink/006_pink_3.jpg'
          ]
        }
      ],
      defaultVariant: '6-black',
      collection: 'summer'
    },
    {
      id: 7,
      name: 'Шовкова спідниця з акцентним мереживом',
      type: 'multi-color',
      basePrice: 5900,
      variants: [
        {
          id: '7-milk',
          color: { name: 'Молочний', value: 'milk' },
          price: 5900,
          images: [
            '/images/products/007/milk/007_milk_1.jpg',
            '/images/products/007/milk/007_milk_2.jpg',
            '/images/products/007/milk/007_milk_3.jpg'
          ]
        },
        {
          id: '7-black',
          color: { name: 'Чорний', value: 'black' },
          price: 5900,
          images: [
            '/images/products/007/black/007_black_1.jpg',
            '/images/products/007/black/007_black_2.jpg',
            '/images/products/007/black/007_black_3.jpg'
          ]
        }
      ],
      defaultVariant: '7-milk',
      collection: 'summer'
    },
    {
      id: 8,
      name: 'Ефектна міді-сукня з вишуканим переплетенням на спині',
      type: 'simple',
      basePrice: 5500,
      variants: [
        {
          id: '8-midi',
          color: { name: 'Міді', value: 'midi' },
          price: 5500,
          images: [
            '/images/products/008/008_1.jpg',
            '/images/products/008/008_2.jpg',
            '/images/products/008/008_3.jpg',
            '/images/products/008/008_4.jpg'
          ]
        }
      ],
      defaultVariant: '8-midi',
      collection: 'summer'
    },
    {
      id: 9,
      name: 'Комплект із натурального льону',
      type: 'bundle',
      basePrice: 4100, // цена самого дешевого варианта
      totalSetPrice: 10000, // цена всего комплекта (5900 + 4100)
      bundleItems: [
        { 
          id: 'linen-blazer',
          name: 'Стриманий лляний піджак', 
          shortName: 'Лляний піджак',
          price: 5900,
          description: 'Стриманий піджак з натурального льону'
        },
        { 
          id: 'linen-skirt',
          name: 'Лляна спідниця з високою посадкою', 
          shortName: 'Лляна спідниця',
          price: 4100,
          description: 'Елегантна спідниця з високою посадкою'
        }
      ],
      variants: [
        // Обзорные фото всего комплекта
        {
          id: '9-milk-overview',
          color: { name: 'Молочний', value: 'milk' },
          bundleItem: 'overview',
          price: 10000,
          images: [
            '/images/products/009/milk/overview/009_milk_set_1.jpg',
            '/images/products/009/milk/overview/009_milk_set_2.jpg'
          ]
        },
        {
          id: '9-sky-blue-overview',
          color: { name: 'Небесно-голубий', value: 'sky-blue' },
          bundleItem: 'overview',
          price: 10000,
          images: [
            '/images/products/009/sky-blue/overview/009_blue_set_1.jpg',
            '/images/products/009/sky-blue/overview/009_blue_set_2.jpg'
          ]
        },
        // Фото отдельных товаров
        {
          id: '9-milk-blazer',
          color: { name: 'Молочний', value: 'milk' },
          bundleItem: 'linen-blazer',
          price: 5900,
          images: [
            '/images/products/009/milk/blazer/009_milk_blazer_1.jpg',
            '/images/products/009/milk/blazer/009_milk_blazer_2.jpg'
          ]
        },
        {
          id: '9-milk-skirt',
          color: { name: 'Молочний', value: 'milk' },
          bundleItem: 'linen-skirt',
          price: 4100,
          images: [
            '/images/products/009/milk/skirt/009_milk_skirt_1.jpg',
            '/images/products/009/milk/skirt/009_milk_skirt_2.jpg'
          ]
        },
        {
          id: '9-sky-blue-blazer',
          color: { name: 'Небесно-голубий', value: 'sky-blue' },
          bundleItem: 'linen-blazer',
          price: 5900,
          images: [
            '/images/products/009/sky-blue/blazer/009_blue_blazer_1.jpg',
            '/images/products/009/sky-blue/blazer/009_blue_blazer_2.jpg'
          ]
        },
        {
          id: '9-sky-blue-skirt',
          color: { name: 'Небесно-голубий', value: 'sky-blue' },
          bundleItem: 'linen-skirt',
          price: 4100,
          images: [
            '/images/products/009/sky-blue/skirt/009_blue_skirt_1.jpg',
            '/images/products/009/sky-blue/skirt/009_blue_skirt_2.jpg'
          ]
        }
      ],
      defaultVariant: '9-milk-overview', // начинаем с обзорного фото
      collection: 'summer'
    }
  ]
};


// export const getProductColors = (product) => {
//   const colors = new Set();
//   product.variants.forEach(variant => {
//     colors.add(JSON.stringify(variant.color));
//   });
//   return Array.from(colors).map(color => JSON.parse(color));
// };

// export const getProductBundleItems = (product) => {
//   if (product.type !== 'bundle') return [];
//   return product.bundleItems;
// };

// export const getVariantByColorAndItem = (product, colorValue, bundleItemId = null) => {
//   return product.variants.find(variant => {
//     const colorMatch = variant.color.value === colorValue;
//     if (product.type === 'bundle') {
//       return colorMatch && variant.bundleItem === bundleItemId;
//     }
//     return colorMatch;
//   });
// };

// export const getCurrentPrice = (product, selectedColor, selectedBundleItem = null) => {
//   const variant = getVariantByColorAndItem(product, selectedColor, selectedBundleItem);
//   return variant ? variant.price : product.basePrice;
// };

// export const getCurrentImages = (product, selectedColor, selectedBundleItem = null) => {
//   const variant = getVariantByColorAndItem(product, selectedColor, selectedBundleItem);
//   return variant ? variant.images : [];
// };