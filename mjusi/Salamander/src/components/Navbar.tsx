import { useState, useEffect } from 'react';
import L1 from '../../public/salamander-logo-black-alt.svg';
import { Link } from 'react-router-dom';
import Menu from "../data/Menu";
import Button from "./Button";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className={`fixed shadow-2xl flex justify-between items-center px-8 top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4 text-gray-700' : 'bg-black backdrop-blur-md text-white py-4'
      }`}
    >
      {/* Logo */}
      <div>
        <Link to="/">
          <img src={L1} alt="Salamander Tech Hub Logo" className="h-15" />
        </Link>
      </div>

      {/* Menu Items */}
      <ul className="flex space-x-8 font-extralight">
        {Menu.map((item, index) => (
          <li key={index} className="flex">
            <Link
              to={item.path}
              className="hover:text-[#FFED00] transition-colors duration-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Inquire Button */}
      <Button variant={scrolled ? 'primary' : 'secondary'}>Inquire</Button>
    </section>
  );
};

export default NavBar;
