import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
const Header = (props) => {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">Dylan Shoemaker</a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li>
          <Link to="/about"href="#about">About</Link>
          </li>
          <li>
            <Link to="/contact"href="#contact">Contact</Link>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
