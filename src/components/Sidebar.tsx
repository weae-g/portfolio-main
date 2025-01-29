import { FaHome, FaUser, FaMailBulk, FaBook, FaComment } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="sidebar">
      <Link
        to="/"
        className={`sidebar__item ${
          currentPath === "/" ? "sidebar__item--active" : ""
        }`}>
        <FaHome className="sidebar__icon" />
        <span className="sidebar__text">Home</span>
      </Link>
      <Link
        to="/about"
        className={`sidebar__item ${
          currentPath === "/about" ? "sidebar__item--active" : ""
        }`}>
        <FaUser className="sidebar__icon" />
        <span className="sidebar__text">About</span>
      </Link>
      <Link
        to="/projects"
        className={`sidebar__item ${
          currentPath === "/projects" ? "sidebar__item--active" : ""
        }`}>
        <FaBook className="sidebar__icon" />
        <span className="sidebar__text">Projects</span>
      </Link>
      <Link
        to="/feedback"
        className={`sidebar__item ${
          currentPath === "/feedback" ? "sidebar__item--active" : ""
        }`}>
        <FaComment className="sidebar__icon" />
        <span className="sidebar__text">Feedback</span>
      </Link>
      <Link
        to="/contact"
        className={`sidebar__item ${
          currentPath === "/contact" ? "sidebar__item--active" : ""
        }`}>
        <FaMailBulk className="sidebar__icon" />
        <span className="sidebar__text">Contact</span>
      </Link>
    </div>
  );
};

export default Sidebar;
