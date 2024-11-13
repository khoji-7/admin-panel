import React, { useState, useRef, useEffect } from "react";
import ava from "../assets/15.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NavbarComp = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className=" max-w-[1440px] flex flex-row items-center">
            <div className="flex flex-row items-center max-w-[270px] px-6 py-3 relative justify-between">
                <div className="flex flex-row items-center">
                <img src={ava} alt="" className="rounded-[50%]" />
                <p className="ml-4">Jane S.</p>
                </div>

                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    id="dropdownDefaultButton"
                    type="button"
                >
                    <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1l4 4 4-4"
                        />
                    </svg>
                </button>

                {isDropdownOpen && (
                    <div
                        ref={dropdownRef}
                        id="dropdown"
                        className="z-10 bg-gray-400 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-4 left-24"
                    >
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 mt-2" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Earnings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="flex flex-row w-[1168px] justify-between px-6 py-3 ">
               <div>
               <SearchIcon color="primary"/>
               <input type="text" placeholder=" Quick Search" />
               </div>
                <NotificationsIcon color="primary"/>
            </div>
            
        </nav>
    );
};

export default NavbarComp;
