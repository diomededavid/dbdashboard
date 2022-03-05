import React from "react";
import logo from "../images/db-asterisk-logo-white.svg";


const  NavBar = () => {
  return(
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 sticky top-0 absolute left-0">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
              <a href="#" className="flex">
                  <img src={logo} alt="Digital Blender Logo" width="100"/>
              </a>
              <button data-collapse-toggle="mobile-menu" type="button"
                      className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      aria-controls="mobile-menu-2" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>

              </button>
              <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                  <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                      <li>
                          <a href="https://www.apple.com"
                             className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                             aria-current="page">Home</a>
                      </li>
                      <li>
                          <a href="https://www.apple.com"
                             className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                      </li>
                      <li>
                          <a href="https://www.apple.com"
                             className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                      </li>
                      <li>
                          <a href="https://www.apple.com"
                             className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                      </li>
                      <li>
                          <a href="https://www.apple.com"
                             className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}
export default NavBar;
