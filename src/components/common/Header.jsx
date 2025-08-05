import { MessageCircle, Send, Camera, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/images/logo/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Единый список соцсетей
  const socialLinks = [
    {
      name: "Telegram",
      icon: Send,
      url: "https://t.me/username",
      hoverColor: "group-hover:text-blue-600",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/1234567890",
      hoverColor: "group-hover:text-green-600",
    },
    {
      name: "Instagram",
      icon: Camera,
      url: "https://instagram.com/username",
      hoverColor: "group-hover:text-pink-600",
    },
  ];

  return (
    <>
      <header className="w-full text-black fixed top-0 left-0 z-30 invisible ">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4 lg:py-5">
            {/* Логотип слева */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-7 w-auto sm:h-9 lg:h-12 hover:opacity-80 transition-opacity duration-300"
                />
              </Link>
            </div>

            {/* Бургер меню на мобильных */}
            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-black" />
                ) : (
                  <Menu className="h-6 w-6 text-black" />
                )}
              </button>
            </div>

            {/* Горизонтальное меню - планшет и десктоп */}
            {/* Горизонтальное меню - планшет и десктоп */}
            <div className="hidden sm:flex items-center space-x-3 lg:space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a // ← ДОБАВИЛ
                    key={social.name}
                    href={social.url}
                    className="group flex items-center p-2 lg:p-3 hover:bg-gray-200 rounded-lg transition-colors"
                    title={social.name}
                  >
                    <IconComponent
                      className={`h-5 w-5 lg:h-6 lg:w-6 text-black ${social.hoverColor} transition-colors`}
                    />
                    <span className="ml-2 text-xs lg:hidden text-black">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Overlay фон */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Мобильное меню справа */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out sm:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Заголовок меню */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold text-black">
            Зв'язатися з нами
          </h3>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-black" />
          </button>
        </div>

        {/* Список соцсетей */}
        <div className="p-4">
          <div className="flex flex-col space-y-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a // ← И ЗДЕСЬ ДОБАВИЛ
                  key={social.name}
                  href={social.url}
                  className="group flex items-center p-4 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconComponent
                    className={`h-8 w-8 text-black ${social.hoverColor} transition-colors`}
                  />
                  <span className="ml-4 text-lg text-black font-medium">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
