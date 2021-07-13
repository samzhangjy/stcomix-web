import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, useRouteMatch, withRouter } from "react-router-dom";

function Nav(props) {
  const [isOpen, setIsOpen] = useState(false);
  const active =
      "hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium",
    inactive =
      "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium";
  const mobAct =
      "hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium",
    mobInact =
      "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium";
  const links = [
    {
      name: "首页",
      url: "/",
    },
    {
      name: "漫画",
      url: "/comic",
    },
    {
      name: "博客",
      url: "/blog",
    },
  ];
  return (
    <div className="shadow-lg">
      <nav
        className="bg-gray-800 shadow-2xl"
        style={{ position: "fixed", width: "100%", zIndex: "100" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/">
                  <img
                    className="h-8 w-8"
                    src="/icons/android-chrome-192x192.png"
                    alt="Workflow"
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {links.map((value, index) => {
                    return (
                      <Link
                        to={value.url}
                        className={
                          props.location.pathname === value.url
                            ? active
                            : inactive
                        }
                        key={index}
                      >
                        {value.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {links.map((value, index) => {
                  return (
                    <Link
                      to={value.url}
                      className={
                        props.location.pathname === value.url
                          ? mobAct
                          : mobInact
                      }
                      key={index}
                    >
                      {value.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default withRouter(Nav);
