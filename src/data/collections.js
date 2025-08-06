export const collections = [
  {
    id: 'spring',
    name: 'Spring',
    title: 'Весняна колекція',
    description: 'Легкі образи для оновлення гардеробу',
    image: '/feve/images/collections/spring/collection_spring_001.jpg',
    route: '/collection/spring',
    available: true  // ← Доступна
  },
  {
    id: 'summer',
    name: 'Summer',
    title: 'Літня колекція',
    description: 'Комфортна одяг для спекотних днів',
    image: '/feve/images/collections/summer/collection_summer_001.jpg',
    route: '/collection/summer',
    available: true  // ← Доступна
  },
  {
    id: 'autumn',
    name: 'Autumn',
    title: 'Осіння колекція',
    description: 'Затишні образи для прохолодної погоди',
    image: '/feve/images/collections/autumn/autumn_default.jpg',
    route: '/collection/autumn',
    available: false  // ← Недоступна (для теста)
  },
  {
    id: 'winter',
    name: 'Winter',
    title: 'Зимова колекція',
    description: 'Тепла та стильна одяг для холодних днів',
    image: '/feve/images/collections/winter/winter_default.jpg',
    route: '/collection/winter',
    available: false  // ← Недоступна (для теста)
  }
];