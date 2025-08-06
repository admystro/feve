import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { LoadingProvider } from "./contexts/LoadingContext";
import GlobalLoader from "./components/common/GlobalLoader";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Collection from "./pages/Collection";

// Компонент для скролла вверх при смене страницы
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <LoadingProvider>
      <Router basename="/feve">
        <GlobalLoader /> {/* Глобальный лоадер */}
        <ScrollToTop />
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection/:season" element={<Collection />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LoadingProvider>
  );
}

export default App;
