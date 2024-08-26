import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

// Define the prop types
interface NavbarProps {
  brand?: {
    name: string;
    logoSrc: string;
    logoAlt: string;
    href: string;
  };
  navItems: { label: string; href: string }[];
  userMenuItems: { label: string; href: string }[];
  showSearchBar?: boolean;
  userInfo?: {
    name: string;
    email: string;
    avatarSrc: string;
  };
}

export const Navbar: React.FC<NavbarProps> = ({
  brand = { name: 'Brand', logoSrc: '', logoAlt: '', href: '/' },
  navItems,
  userMenuItems,
  showSearchBar = false,
  userInfo = { name: 'User', email: 'user@example.com', avatarSrc: '' },
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const router = useRouter();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Brand Section */}
        <a href={brand.href} className="flex items-center space-x-3 rtl:space-x-reverse">
          {brand.logoSrc && <img src={brand.logoSrc} className="h-8" alt={brand.logoAlt} />}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{brand.name}</span>
        </a>

        {/* User Menu and Hamburger Menu */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* Optional Search Bar */}
          {showSearchBar && (
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <FaSearch />
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          )}

          {/* User Dropdown */}
          <div className="relative pl-4">
            <button
              type="button"
              onClick={toggleDropdown}
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={isDropdownOpen}
            >
              <span className="sr-only">Open user menu</span>
              {userInfo.avatarSrc && (
                <Image
                  className="w-8 h-8 rounded-full"
                  width={32}
                  height={32}
                  src={userInfo.avatarSrc}
                  alt="user photo"
                />
              )}
            </button>

            {isDropdownOpen && (
              <div
                className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700"
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">{userInfo.name}</span>
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{userInfo.email}</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  {userMenuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isNavOpen}
            onClick={toggleNav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`items-center justify-between ${
            isNavOpen ? 'block' : 'hidden'
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:py-0 md:px-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`block py-2 px-3 md:p-0 ${
                    router.pathname === item.href
                      ? 'text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Navbar END */}
      </div>
    </nav>
  );
};
