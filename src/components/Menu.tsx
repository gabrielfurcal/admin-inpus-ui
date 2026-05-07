import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../contexts/auth/AuthContext'

const Menu = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  }

  const getInitials = (name?: string) => {
    if (!name) return 'NA';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }

  return (
    <nav className="relative flex w-full flex-nowrap items-center justify-between bg-blue-900 py-2 text-black-400 shadow-dark-mild hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4" data-twe-navbar-ref>
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="ms-2 mr-4">
            <Link className="dark text-xl text-white dark:text-white font-bold" to={"/"}>ADMIN-INPUTS</Link>
          </div>
          {/* Hamburger button for mobile view */}
          <button
            className="block border-0 bg-transparent px-2 text-white hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden" type="button" data-twe-collapse-init data-twe-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
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
                  <Link to={"/"} data-twe-nav-link-ref className="p-0 text-white/90 transition duration-200 hover:text-white/100 hover:ease-in-out focus:text-white/100 focus:font-semibold active:text-white/100 active:font-semibold motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                    Home
                  </Link>
                </li>
                {/* Employees link */}
                <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" data-twe-nav-item-ref>
                  <Link to={"/employees"} data-twe-nav-link-ref className="p-0 text-white/90 transition duration-200 hover:text-white/100 hover:ease-in-out focus:text-white/100 focus:font-semibold active:text-white/100 active:font-semibold motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                    Employees
                  </Link>
                </li>
                {/* Cities link */}
                <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" data-twe-nav-item-ref>
                  <Link to={"/cities"} data-twe-nav-link-ref className="p-0 text-white/90 transition duration-200 hover:text-white/100 hover:ease-in-out focus:text-white/100 focus:font-semibold active:text-white/100 active:font-semibold motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                    Cities
                  </Link>
                </li>
                {/* Status link */}
                <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" data-twe-nav-item-ref>
                  <Link to={"/status"} data-twe-nav-link-ref className="p-0 text-white/90 transition duration-200 hover:text-white/100 hover:ease-in-out focus:text-white/100 focus:font-semibold active:text-white/100 active:font-semibold motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                    Status
                  </Link>
                </li>                
                {/* Trains link */}
                <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" data-twe-nav-item-ref>
                  <Link to={"/trains"} data-twe-nav-link-ref className="p-0 text-white/90 transition duration-200 hover:text-white/100 hover:ease-in-out focus:text-white/100 focus:font-semibold active:text-white/100 active:font-semibold motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                    Trains
                  </Link>
                </li>
                {/* Stations link */}
                <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" data-twe-nav-item-ref>
                  <Link to={"/stations"} data-twe-nav-link-ref className="p-0 text-white/90 transition duration-200 hover:text-white/100 hover:ease-in-out focus:text-white/100 focus:font-semibold active:text-white/100 active:font-semibold motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                    Stations
                  </Link>
                </li>
                {/* Stations link */}
                <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" data-twe-nav-item-ref>
                  <Link to={"/schedules"} data-twe-nav-link-ref className="p-0 text-white/90 transition duration-200 hover:text-white/100 hover:ease-in-out focus:text-white/100 focus:font-semibold active:text-white/100 active:font-semibold motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                    Schedules
                  </Link>
                </li>
                {/* Routes link */}
                <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" data-twe-nav-item-ref>
                  <Link to={"/routes"} data-twe-nav-link-ref className="p-0 text-white/90 transition duration-200 hover:text-white/100 hover:ease-in-out focus:text-white/100 focus:font-semibold active:text-white/100 active:font-semibold motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                    Routes
                  </Link>
                </li>
                {/* Trips link */}
                <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" data-twe-nav-item-ref>
                  <Link to={"/trips"} data-twe-nav-link-ref className="p-0 text-white/90 transition duration-200 hover:text-white/100 hover:ease-in-out focus:text-white/100 focus:font-semibold active:text-white/100 active:font-semibold motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                    Trips
                  </Link>
                </li>
                {/* Weekdays link */}
                <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" data-twe-nav-item-ref>
                  <Link to={"/weekdays"} data-twe-nav-link-ref className="p-0 text-white/90 transition duration-200 hover:text-white/100 hover:ease-in-out focus:text-white/100 focus:font-semibold active:text-white/100 active:font-semibold motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                    Weekdays
                  </Link>
                </li>
                {/* Timezones link */}
                <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" data-twe-nav-item-ref>
                  <Link to={"/timezones"} data-twe-nav-link-ref className="p-0 text-white/90 transition duration-200 hover:text-white/100 hover:ease-in-out focus:text-white/100 focus:font-semibold active:text-white/100 active:font-semibold motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                    Timezones
                  </Link>
                </li>
              </ul>
              <div className="mt-4 flex justify-between items-center border-t border-white/15 pt-4 text-white lg:mt-0 lg:ml-auto lg:border-0 lg:pt-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm font-semibold uppercase text-white ring-1 ring-white/20">
                    {getInitials(user?.name)}
                  </div>
                  <span className="lg:hidden text-white/60">|</span>
                </div>
                <button type="button" onClick={handleLogout} className="text-sm font-medium text-red-200 transition hover:text-red-100">
                  Logout
                </button>
              </div>
          </div>
        </div>
    </nav>
  )
}

export default Menu;