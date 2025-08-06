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
            '/feve/images/products/001/001_1.jpg',
            '/feve/images/products/001/001_2.jpg',
            '/feve/images/products/001/001_3.jpg',
            '/feve/images/products/001/001_4.jpg'
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
            '/feve/images/products/002/milk/002_milk_1.jpg',
            '/feve/images/products/002/milk/002_milk_2.jpg',
            '/feve/images/products/002/milk/002_milk_3.jpg',
            '/feve/images/products/002/milk/002_milk_4.jpg'
          ]
        },
        {
          id: '2-black',
          color: { name: 'Чорний', value: 'black' },
          price: 9200,
          images: [
            '/feve/images/products/002/black/002_black_1.jpg',
            '/feve/images/products/002/black/002_black_2.jpg',
            '/feve/images/products/002/black/002_black_3.jpg',
            '/feve/images/products/002/black/002_black_4.jpg'
          ]
        },
        {
          id: '2-pink',
          color: { name: 'Рожевий', value: 'pink' },
          price: 9200,
          images: [
            '/feve/images/products/002/pink/002_pink_1.jpg',
            '/feve/images/products/002/pink/002_pink_2.jpg',
            '/feve/images/products/002/pink/002_pink_3.jpg',
            '/feve/images/products/002/pink/002_pink_4.jpg'
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
            '/feve/images/products/003/milk/overview/003_milk_set_1.jpg',

          ]
        },
        {
          id: '3-graphite-overview',
          color: { name: 'Графітовий', value: 'graphite' },
          bundleItem: 'overview',
          price: 14600,
          images: [
            '/feve/images/products/003/graphite/overview/003_graphite_set_1.jpg',

          ]
        },
        {
          id: '3-deep-blue-overview',
          color: { name: 'Глибокий синій', value: 'deep-blue' },
          bundleItem: 'overview',
          price: 14600,
          images: [
            '/feve/images/products/003/deep-blue/overview/003_blue_set_1.jpg',

          ]
        },
        // Фото отдельных товаров
        {
          id: '3-milk-oversized-vest',
          color: { name: 'Молочний', value: 'milk' },
          bundleItem: 'oversized-vest',
          price: 6200,
          images: [
            '/feve/images/products/003/milk/vest-oversized/003_milk_vest_1.jpg',

          ]
        },
        {
          id: '3-milk-bermuda',
          color: { name: 'Молочний', value: 'milk' },
          bundleItem: 'bermuda',
          price: 4900,
          images: [
            '/feve/images/products/003/milk/bermuda/003_milk_bermuda_1.jpg',

          ]
        },
        {
          id: '3-milk-slim-vest',
          color: { name: 'Молочний', value: 'milk' },
          bundleItem: 'slim-vest',
          price: 3500,
          images: [
            '/feve/images/products/003/milk/vest-slim/003_milk_slim_1.jpg',

          ]
        },
        {
          id: '3-graphite-oversized-vest',
          color: { name: 'Графітовий', value: 'graphite' },
          bundleItem: 'oversized-vest',
          price: 6200,
          images: [
            '/feve/images/products/003/graphite/vest-oversized/003_graphite_vest_1.jpg',

          ]
        },
        {
          id: '3-graphite-bermuda',
          color: { name: 'Графітовий', value: 'graphite' },
          bundleItem: 'bermuda',
          price: 4900,
          images: [
            '/feve/images/products/003/graphite/bermuda/003_graphite_bermuda_1.jpg',

          ]
        },
        {
          id: '3-graphite-slim-vest',
          color: { name: 'Графітовий', value: 'graphite' },
          bundleItem: 'slim-vest',
          price: 3500,
          images: [
            '/feve/images/products/003/graphite/vest-slim/003_graphite_slim_1.jpg',

          ]
        },
        {
          id: '3-deep-blue-oversized-vest',
          color: { name: 'Глибокий синій', value: 'deep-blue' },
          bundleItem: 'oversized-vest',
          price: 6200,
          images: [
            '/feve/images/products/003/deep-blue/vest-oversized/003_blue_vest_1.jpg',

          ]
        },
        {
          id: '3-deep-blue-bermuda',
          color: { name: 'Глибокий синій', value: 'deep-blue' },
          bundleItem: 'bermuda',
          price: 4900,
          images: [
            '/feve/images/products/003/deep-blue/bermuda/003_blue_bermuda_1.jpg',

          ]
        },
        {
          id: '3-deep-blue-slim-vest',
          color: { name: 'Глибокий синій', value: 'deep-blue' },
          bundleItem: 'slim-vest',
          price: 3500,
          images: [
            '/feve/images/products/003/deep-blue/vest-slim/003_blue_slim_1.jpg',

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
          id: '4-black',
          color: { name: 'Чорний', value: 'black' },
          price: 9800,
          images: [
            '/feve/images/products/004/black/004_black_1.jpg',
            '/feve/images/products/004/black/004_black_2.jpg',
            '/feve/images/products/004/black/004_black_3.jpg',
            '/feve/images/products/004/black/004_black_4.jpg',
            '/feve/images/products/004/black/004_black_5.jpg'
          ]
        },
        {
          id: '4-beige',
          color: { name: 'Бежевий', value: 'beige' },
          price: 9800,
          images: [
            '/feve/images/products/004/beige/004_beige_1.jpg'
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
            '/feve/images/products/005/005_1.jpg',
            '/feve/images/products/005/005_2.jpg',
            '/feve/images/products/005/005_3.jpg'
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
            '/feve/images/products/006/blue/006_blue_1.jpg',
            '/feve/images/products/006/blue/006_blue_2.jpg',
            '/feve/images/products/006/blue/006_blue_3.jpg',
            '/feve/images/products/006/blue/006_blue_4.jpg'
          ]
        },
        {
          id: '6-pink',
          color: { name: 'Рожевий', value: 'pink' },
          price: 4500,
          images: [
            '/feve/images/products/006/pink/006_pink_1.jpg',
            '/feve/images/products/006/pink/006_pink_2.jpg',
            '/feve/images/products/006/pink/006_pink_3.jpg'
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
            '/feve/images/products/007/milk/007_milk_1.jpg',
            '/feve/images/products/007/milk/007_milk_2.jpg',
            '/feve/images/products/007/milk/007_milk_3.jpg'
          ]
        },
        {
          id: '7-black',
          color: { name: 'Чорний', value: 'black' },
          price: 5900,
          images: [
            '/feve/images/products/007/black/007_black_1.jpg',
            '/feve/images/products/007/black/007_black_2.jpg',
            '/feve/images/products/007/black/007_black_3.jpg'
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
            '/feve/images/products/008/008_1.jpg',
            '/feve/images/products/008/008_2.jpg',
            '/feve/images/products/008/008_3.jpg',
            '/feve/images/products/008/008_4.jpg'
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
      basePrice: 4100,
      totalSetPrice: 10000,
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

        {
          id: '9-milk-overview',
          color: { name: 'Молочний', value: 'milk' },
          bundleItem: 'overview',
          price: 10000,
          images: [
            '/feve/images/products/009/milk/overview/009_milk_set_1.jpg'
          ]
        },
        {
          id: '9-sky-blue-overview',
          color: { name: 'Небесно-голубий', value: 'sky-blue' },
          bundleItem: 'overview',
          price: 10000,
          images: [
            '/feve/images/products/009/sky-blue/overview/009_blue_set_1.jpg'
          ]
        },

        {
          id: '9-milk-blazer',
          color: { name: 'Молочний', value: 'milk' },
          bundleItem: 'linen-blazer',
          price: 5900,
          images: [
            '/feve/images/products/009/milk/blazer/009_milk_blazer_1.jpg'
          ]
        },
        {
          id: '9-milk-skirt',
          color: { name: 'Молочний', value: 'milk' },
          bundleItem: 'linen-skirt',
          price: 4100,
          images: [
            '/feve/images/products/009/milk/skirt/009_milk_skirt_1.jpg'
          ]
        },
        {
          id: '9-sky-blue-blazer',
          color: { name: 'Небесно-голубий', value: 'sky-blue' },
          bundleItem: 'linen-blazer',
          price: 5900,
          images: [
            '/feve/images/products/009/sky-blue/blazer/009_blue_blazer_1.jpg'
          ]
        },
        {
          id: '9-sky-blue-skirt',
          color: { name: 'Небесно-голубий', value: 'sky-blue' },
          bundleItem: 'linen-skirt',
          price: 4100,
          images: [
            '/feve/images/products/009/sky-blue/skirt/009_blue_skirt_1.jpg'
          ]
        }
      ],
      defaultVariant: '9-milk-overview', // начинаем с обзорного фото
      collection: 'summer'
    }
  ],

  spring: [
    {
      id: 10,
      name: 'Піджак в поєднанні зі спідницею-шортами',
      type: 'bundle',
      basePrice: 4200,
      totalSetPrice: 11200,
      bundleItems: [
        {
          id: 'blazer',
          name: 'Піджак',
          shortName: 'Піджак',
          price: 7000,
          description: 'Стильний піджак для елегантного образу'
        },
        {
          id: 'skirt-shorts',
          name: 'Спідниця-шорти',
          shortName: 'Спідниця-шорти',
          price: 4200,
          description: 'Універсальна спідниця-шорти'
        }
      ],
      variants: [
        // Обзорные фото всего комплекта
        {
          id: '10-overview',
          color: { name: 'Базовий', value: 'black' },
          bundleItem: 'overview',
          price: 11200,
          images: [
            '/feve/images/products/010/overview/010_set_1.jpg'
          ]
        },
        // Фото отдельных товаров
        {
          id: '10-blazer',
          color: { name: 'Базовий', value: 'black' },
          bundleItem: 'blazer',
          price: 7000,
          images: [
            '/feve/images/products/010/blazer/010_blazer_1.jpg'
          ]
        },
        {
          id: '10-skirt-shorts',
          color: { name: 'Базовий', value: 'black' },
          bundleItem: 'skirt-shorts',
          price: 4200,
          images: [
            '/feve/images/products/010/skirt-shorts/010_skirt_shorts_1.jpg'
          ]
        }
      ],
      defaultVariant: '10-overview',
      collection: 'spring'
    },
    {
      id: 11,
      name: 'Чорний жакет з чіткою лінією плечей і прямі штани',
      type: 'bundle',
      basePrice: 5400, // цена самого дешевого варианта (штани)
      totalSetPrice: 11900, // цена всего комплекта (6500 + 5400)
      bundleItems: [
        {
          id: 'structured-blazer',
          name: 'Жакет з чіткою лінією плечей',
          shortName: 'Жакет',
          price: 6500,
          description: 'Чорний жакет з чіткою лінією плечей'
        },
        {
          id: 'straight-pants',
          name: 'Прямі штани середньої посадки',
          shortName: 'Прямі штани',
          price: 5400,
          description: 'Прямі штани середньої посадки на талії'
        }
      ],
      variants: [
        // Только черные варианты
        {
          id: '11-black-overview',
          color: { name: 'Чорний', value: 'black' },
          bundleItem: 'overview',
          price: 11900,
          images: [
            '/feve/images/products/011/black/overview/011_black_set_1.jpg'
          ]
        },
        {
          id: '11-black-blazer',
          color: { name: 'Чорний', value: 'black' },
          bundleItem: 'structured-blazer',
          price: 6500,
          images: [
            '/feve/images/products/011/black/blazer/011_black_blazer_1.jpg'
          ]
        },
        {
          id: '11-black-pants',
          color: { name: 'Чорний', value: 'black' },
          bundleItem: 'straight-pants',
          price: 5400,
          images: [
            '/feve/images/products/011/black/pants/011_black_pants_1.jpg'
          ]
        }
      ],
      defaultVariant: '11-black-overview',
      collection: 'spring'
    },
    {
      id: 12,
      name: 'Універсальний костюм із жакетом та шортами',
      type: 'simple',
      basePrice: 6400,
      variants: [
        {
          id: '12-universal',
          color: { name: 'Базовий', value: 'basic' },
          price: 6400,
          images: [
            '/feve/images/products/012/012_1.jpg',
            '/feve/images/products/012/012_2.jpg',
            '/feve/images/products/012/012_3.jpg',
            '/feve/images/products/012/012_4.jpg'
          ]
        }
      ],
      defaultVariant: '12-universal',
      collection: 'spring'
    },
    {
      id: 13,
      name: 'Біла сорочка на ґудзиках',
      type: 'simple',
      basePrice: 3600,
      variants: [
        {
          id: '13-white',
          color: { name: 'Білий', value: 'white' },
          price: 3600,
          images: [
            '/feve/images/products/013/013_1.jpg',
            '/feve/images/products/013/013_2.jpg',
            '/feve/images/products/013/013_3.jpg'
          ]
        }
      ],
      defaultVariant: '13-white',
      collection: 'spring'
    },
    {
      id: 14,
      name: 'Костюм з підплічниками',
      type: 'multi-color',
      basePrice: 9800,
      variants: [
        {
          id: '14-beige',
          color: { name: 'Бежевий', value: 'beige' },
          price: 9800,
          images: [
            '/feve/images/products/014/beige/014_beige_1.jpg',
            '/feve/images/products/014/beige/014_beige_2.jpg',
            '/feve/images/products/014/beige/014_beige_3.jpg',
            '/feve/images/products/014/beige/014_beige_4.jpg'
          ]
        },
        {
          id: '14-black',
          color: { name: 'Чорний', value: 'black' },
          price: 9800,
          images: [
            '/feve/images/products/014/black/014_black_1.jpg',
            '/feve/images/products/014/black/014_black_2.jpg',
            '/feve/images/products/014/black/014_black_3.jpg',
            '/feve/images/products/014/black/014_black_4.jpg'
          ]
        }
      ],
      defaultVariant: '14-beige',
      collection: 'spring'
    },
    {
      id: 15,
      name: 'Пальто-жакет оверсайз з додаванням шерсті',
      type: 'multi-color',
      basePrice: 10100,
      variants: [
        {
          id: '15-gray',
          color: { name: 'Сірий', value: 'gray' },
          price: 10100,
          images: [
            '/feve/images/products/015/gray/015_gray_1.jpg',
            '/feve/images/products/015/gray/015_gray_2.jpg',
            '/feve/images/products/015/gray/015_gray_3.jpg',
            '/feve/images/products/015/gray/015_gray_4.jpg'
          ]
        },
        {
          id: '15-deep-gray',
          color: { name: 'Глибокий сірий', value: 'deep-gray' },
          price: 10100,
          images: [
            '/feve/images/products/015/deep-gray/015_deep_gray_1.jpg',
            '/feve/images/products/015/deep-gray/015_deep_gray_2.jpg',
            '/feve/images/products/015/deep-gray/015_deep_gray_3.jpg',
            '/feve/images/products/015/deep-gray/015_deep_gray_4.jpg'
          ]
        }
      ],
      defaultVariant: '15-gray',
      collection: 'spring'
    },
    {
      id: 16,
      name: 'Чорний жилет та класичні брюки у смужку',
      type: 'bundle',
      basePrice: 3500,
      totalSetPrice: 8500,
      bundleItems: [
        {
          id: 'black-vest',
          name: 'Чорний жилет',
          shortName: 'Жилет',
          price: 3500,
          description: 'Стильний чорний жилет'
        },
        {
          id: 'striped-pants',
          name: 'Класичні брюки у смужку',
          shortName: 'Брюки у смужку',
          price: 5000,
          description: 'Класичні брюки у смужку'
        }
      ],
      variants: [
        {
          id: '16-overview',
          color: { name: 'Чорний', value: 'black' },
          bundleItem: 'overview',
          price: 8500,
          images: [
            '/feve/images/products/016/overview/016_set_1.jpg'
          ]
        },
        {
          id: '16-vest',
          color: { name: 'Чорний', value: 'black' },
          bundleItem: 'black-vest',
          price: 3500,
          images: [
            '/feve/images/products/016/vest/016_vest_1.jpg'
          ]
        },
        {
          id: '16-pants',
          color: { name: 'Чорний', value: 'black' },
          bundleItem: 'striped-pants',
          price: 5000,
          images: [
            '/feve/images/products/016/pants/016_pants_1.jpg'
          ]
        }
      ],
      defaultVariant: '16-overview',
      collection: 'spring'
    },
    {
      id: 17,
      name: 'Замшевий бомбер утеплений з акцентними плечима',
      type: 'simple',
      basePrice: 27500,
      variants: [
        {
          id: '17-suede',
          color: { name: 'Замшевий', value: 'suede' },
          price: 27500,
          images: [
            '/feve/images/products/017/017_1.jpg',
            '/feve/images/products/017/017_2.jpg',
            '/feve/images/products/017/017_3.jpg',
            '/feve/images/products/017/017_4.jpg'
          ]
        }
      ],
      defaultVariant: '17-suede',
      collection: 'spring'
    },
    {
      id: 18,
      name: 'Білий жилет та штани в підлогу',
      type: 'bundle',
      basePrice: 3500, // цена самого дешевого варианта (жилет)
      totalSetPrice: 8900, // цена всего комплекта (3500 + 5400)
      bundleItems: [
        {
          id: 'white-vest',
          name: 'Білий жилет',
          shortName: 'Жилет',
          price: 3500,
          description: 'Елегантний білий жилет'
        },
        {
          id: 'floor-pants',
          name: 'Штани в підлогу',
          shortName: 'Штани в підлогу',
          price: 5400,
          description: 'Довгі штани в підлогу'
        }
      ],
      variants: [
        {
          id: '18-overview',
          color: { name: 'Білий', value: 'white' },
          bundleItem: 'overview',
          price: 8900,
          images: [
            '/feve/images/products/018/overview/018_set_1.jpg'
          ]
        },
        {
          id: '18-vest',
          color: { name: 'Білий', value: 'white' },
          bundleItem: 'white-vest',
          price: 3500,
          images: [
            '/feve/images/products/018/vest/018_vest_1.jpg'
          ]
        },
        {
          id: '18-pants',
          color: { name: 'Білий', value: 'white' },
          bundleItem: 'floor-pants',
          price: 5400,
          images: [
            '/feve/images/products/018/pants/018_pants_1.jpg'
          ]
        }
      ],
      defaultVariant: '18-overview',
      collection: 'spring'
    },
    {
      id: 19,
      name: 'Сорочка зі спущеними плечима',
      type: 'simple',
      basePrice: 3600,
      variants: [
        {
          id: '19-sky-blue',
          color: { name: 'Білий', value: 'sky-blue' },
          price: 3600,
          images: [
            '/feve/images/products/019/019_1.jpg',
            '/feve/images/products/019/019_2.jpg',
            '/feve/images/products/019/019_3.jpg'
          ]
        }
      ],
      defaultVariant: '19-sky-blue',
      collection: 'spring'
    },
    {
      id: 20,
      name: 'Сукня-жакет з акцентними плечима',
      type: 'simple',
      basePrice: 6900,
      variants: [
        {
          id: '20-black',
          color: { name: 'Білий', value: 'black' },
          price: 6900,
          images: [
            '/feve/images/products/020/020_1.jpg',
            '/feve/images/products/020/020_2.jpg',
            '/feve/images/products/020/020_3.jpg',
            '/feve/images/products/020/020_4.jpg'
          ]
        }
      ],
      defaultVariant: '20-black',
      collection: 'spring'
    },
    {
      id: 21,
      name: 'Біла сорочка з відкритою спинкою',
      type: 'simple',
      basePrice: 3400,
      variants: [
        {
          id: '21-white',
          color: { name: 'Білий', value: 'white' },
          price: 3400,
          images: [
            '/feve/images/products/021/021_1.jpg',
            '/feve/images/products/021/021_2.jpg',
            '/feve/images/products/021/021_3.jpg'
          ]
        }
      ],
      defaultVariant: '21-white',
      collection: 'spring'
    },
    {
      id: 22,
      name: 'Водонепроникний тренч із утепленням',
      type: 'multi-color',
      basePrice: 6200,
      variants: [
        {
          id: '22-beige',
          color: { name: 'Бежевий', value: 'beige' },
          price: 6200,
          images: [
            '/feve/images/products/022/beige/022_beige_1.jpg',
            '/feve/images/products/022/beige/022_beige_2.jpg',
            '/feve/images/products/022/beige/022_beige_3.jpg',
            '/feve/images/products/022/beige/022_beige_4.jpg'
          ]
        },
        {
          id: '22-black',
          color: { name: 'Чорний', value: 'black' },
          price: 6200,
          images: [
            '/feve/images/products/022/black/022_black_1.jpg',
            '/feve/images/products/022/black/022_black_2.jpg',
            '/feve/images/products/022/black/022_black_3.jpg',
            '/feve/images/products/022/black/022_black_4.jpg'
          ]
        }
      ],
      defaultVariant: '22-beige',
      collection: 'spring'
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