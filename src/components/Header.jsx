import { useState } from 'react';
import {
  FaBars,
  FaBehanceSquare,
  FaFacebook,
  FaPinterest,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { classNames } from '../utils/function';
import PropTypes from 'prop-types';

const Header = ({ page }) => {
  const [active, setActive] = useState(false);
  return (
    <header className="fixed top-0 w-full flex flex-col bg-black/20 px-[4.37rem] py-[1.81rem] md:flex-row md:justify-between md:items-center gap-8 md:gap-0 z-10">
      <div className="flex justify-between text-[#F8F9FA]">
        <span className="font-bold text-xl uppercase">Runo</span>

        <button onClick={() => setActive(!active)} className="md:hidden">
          <FaBars />
        </button>
      </div>
      <nav
        className={classNames(
          active ? 'flex' : 'hidden',
          'md:flex flex-col md:flex-row items-center md:divide-x divide-[#F8F9FA] gap-3 text-primary-10 bg-black/70 md:bg-transparent py-6 md:py-0'
        )}
      >
        <ul className="flex flex-col md:flex-row items-center gap-3 w-full md:w-max">
          {navLinks.map((item) => (
            <li key={item.name} className="w-full text-center md:w-max">
              <a
                href={item.href}
                className={classNames(
                  page === item.name
                    ? 'border-primary-40 text-white'
                    : 'border-transparent',
                  'block w-full border-b-4 pb-2 hover:border-primary-40'
                )}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className="hidden md:flex items-center gap-3 md:pl-3">
          {socials.map((item, i) => (
            <li key={i}>
              <a href={item.href}>
                <item.icon className="" />
              </a>
            </li>
          ))}
        </ul>
        <div className="pt-3 md:pl-3 md:pt-0">
          <FaSearch />
        </div>
      </nav>
    </header>
  );
};

export default Header;
const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Articles', href: '#' },
  { name: 'Contact Us', href: '#' },
];
const socials = [
  { icon: FaFacebook, href: '#' },
  { icon: FaTwitter, href: '#' },
  { icon: FaYoutube, href: '#' },
  { icon: FaPinterest, href: '#' },
  { icon: FaBehanceSquare, href: '#' },
];

Header.propTypes = {
  page: PropTypes.string,
};
