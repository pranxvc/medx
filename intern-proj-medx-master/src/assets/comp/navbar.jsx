import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase-config";

const navigation = [
  // { name: 'Home', href: '/', current: false },
  { name: "Offers", href: "offers", current: false },
  { name: "About us", href: "/about", current: false },
  { name: "FAQs", href: "/faq", current: false },
  { name: "Contacts", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar({ user }) {
  const navigate = useNavigate();

  const nav = () => {
    navigate("/");
  };

  const users = () => {
    if (user) {
      return (
        <Link
          to="/user"
          className="bg-gray-800 text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
        >
          {"Hi "}
          {user.email}
        </Link>
      );
    } else {
      return (
        <Link
          to="/signin"
          className="bg-gray-800 text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
        >
          {" "}
          Sign in / Register
        </Link>
      );
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-50 drop-shadow-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    onClick={nav}
                    className="block h-11 w-auto lg:hidden"
                    src="https://cdn.discordapp.com/attachments/1037406020449861724/1037797448900419614/20221104_000510_0000.png"
                    alt="Your Company"
                  />
                  <img
                    onClick={nav}
                    className="hidden h-11 w-auto lg:block drop-shadow-lg"
                    src="https://cdn.discordapp.com/attachments/1037406020449861724/1037797448900419614/20221104_000510_0000.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-black hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <butto  n
                  type="button"
                  className="rounded-full bg-gray-900 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* <Link to='/signin' className='bg-gray-800 text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'> { auth.currentUser?.email }</Link> */}
                {/* <Link to='/signin' className='bg-gray-800 text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'> Sign in / Register</Link> */}

                {users()}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium "
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
