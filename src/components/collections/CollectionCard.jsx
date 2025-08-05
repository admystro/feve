import React from 'react';
import { useNavigate } from 'react-router-dom';

const CollectionCard = ({ collection }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(collection.route);
  };

  return (
    <div
      onClick={collection.available ? handleClick : ''}
      className='group relative overflow-hidden cursor-pointer'
    >
      {/* Изображение */}
      <div className="overflow-hidden w-full">
        <img
          src={collection.image}
          alt={collection.title}
          className="w-full h-auto object-contain transition-all duration-300"
        />
      </div>


      {/* Overlay градиент */}
      <div className="absolute inset-0 transition-opacity duration-300 collection.available
           'bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80'
       "></div>

      {/* Контент */}
      <div className="absolute inset-0 flex items-end">
        <div className="text-center relative text-white w-full flex flex-col justify-center">

          {collection.available ? (
            // Доступная коллекция - ЦЕНТРИРОВАННЫЙ ТЕКСТ
            <>
              {/* <h3 className="text-lg sm:text-xl font-bold mb-2 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                
              </h3>
              <p className="text-sm sm:text-base opacity-90 mb-4 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {collection.description}
              </p> */}

              {/* Кнопка-ссылка - ВИДИМАЯ */}
              <div className="coll-btn w-full ">
                <div className="   p-1 inline-block">
                  <span className="text-2xl font-medium text-white">
                    {collection.name}
                  </span>
                </div>
              </div>
            </>
          ) : (
            // Недоступная коллекция - КРАСИВЕЕ COMING SOON
            <>
              <p className="coming-soon mb-7">
                COMING<br/>
                SOON
              </p>
              <div>
                <img src="/images/collections/feve_box.png" alt="feve_box" className='w-full' />
                <div className="coll-btn w-full ">
                  <div className="   p-1 inline-block">
                    <span className="text-2xl font-medium text-white">
                      {collection.name}
                    </span>
                  </div>
                </div>
              </div>
            </>

          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;