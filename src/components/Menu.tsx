import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className="relative flex w-full flex-nowrap items-center justify-between bg-blue-500 py-2 text-black-400 shadow-dark-mild hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4" data-twe-navbar-ref>
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="ms-2">
            <Link className="dark text-xl text-white dark:text-white font-bold" to={"/"}>admin-inputs</Link>
          </div>
          {/* Hamburger button for mobile view */}
          <button
            className="block border-0 bg-transparent px-2 text-white/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden" type="button" data-twe-collapse-init data-twe-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
            {/* Hamburger icon */}
            <span className="dark [&>svg]:w-7 [&>svg]:stroke-white/50 dark:[&>svg]:stroke-neutral-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" />
              </svg>
            </span>
          </button>
          {/* Collapsible navbar container */}
          <div className="bg-white-500 !visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto" id="navbarSupportedContent2" data-twe-collapse-item>
              {/* Left links */}
              <ul className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row" data-twe-navbar-nav-ref>
                {/* Home link */}
                <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" data-twe-nav-item-ref>
                  <Link to={"/"} data-twe-nav-link-ref className="p-0 text-white/80 transition duration-200 hover:text-white/100 hover:ease-in-out focus:text-white/100 focus:font-semibold active:text-white/100 active:font-semibold motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                    Home
                  </Link>
                </li>
                {/* Trains link */}
                <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" data-twe-nav-item-ref>
                  <Link to={"/trains"} data-twe-nav-link-ref className="p-0 text-white/80 transition duration-200 hover:text-white/100 hover:ease-in-out focus:text-white/100 focus:font-semibold active:text-white/100 active:font-semibold motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                    Trains
                  </Link>
                </li>
                {/* Cities link */}
                <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" data-twe-nav-item-ref>
                  <Link to={"/cities"} data-twe-nav-link-ref className="p-0 text-white/80 transition duration-200 hover:text-white/100 hover:ease-in-out focus:text-white/100 focus:font-semibold active:text-white/100 active:font-semibold motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                    Cities
                  </Link>
                </li>
              </ul>
          </div>
        </div>
    </nav>
  )
}

export default Menu;