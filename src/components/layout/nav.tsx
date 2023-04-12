import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Transition } from "@headlessui/react";

import {
  AiOutlineMenu,
  AiOutlineClose
 } from 'react-icons/ai'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <>
  <div>
      <nav className="bg-blue-600">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between p-1">

            <div className="flex-shrink-0">
              <img
                className="h-12 w-12"
                src="/logo.svg"
                alt="Vault-Tec"
                />
            </div> 
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  <a
                    href="#about"
                    className="hover:bg-yellow-400 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>

                  <a
                    href="#services"
                    className="text-white hover:bg-yellow-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                  </a>

                  <a
                    href="#contact"
                    className="text-white hover:bg-yellow-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>

            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-400 focus:outline-none"
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
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-b">
                <a
                  href="#about"
                  className="hover:bg-yellow-400 text-white block px-3 py-2 rounded-lg text-base font-medium"
                >
                  About
                </a>

                <a
                  href="#services"
                  className="text-white hover:bg-yellow-400 block px-3 py-2 rounded-lg text-base font-medium"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-white hover:bg-yellow-400 block px-3 py-2 rounded-lg text-base font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  </>
  )
}

export default Nav;