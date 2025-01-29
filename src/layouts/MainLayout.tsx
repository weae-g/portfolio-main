import BurgerMenu from "@/components/BurgerMenu";
import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="main-content">
      <Outlet />
    </div>
  );
};

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="container">
      <div className={`layout ${isMenuOpen ? "menu-open" : ""}`}>
        {!isMenuOpen && (
          <>
            <Sidebar />
            <Profile />
          </>
        )}
        <div className="layout__content">
          <div className="layout__body">
            <MainContent />
          </div>
        </div>
        {!isMenuOpen && (
          <button className="burger-button" onClick={toggleMenu}>
            <FaBars />
          </button>
        )}
        <BurgerMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </div>
    </div>
  );
};

export default MainLayout;
