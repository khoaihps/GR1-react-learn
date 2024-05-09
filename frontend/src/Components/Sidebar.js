import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-950">
                <ul class="space-y-2 font-medium">
                    <li>
                        <Link to="/data-table" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path xmlns="http://www.w3.org/2000/svg" d="M3 9.5H21M3 14.5H21M8 4.5V19.5M6.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V7.7C21 6.5799 21 6.01984 20.782 5.59202C20.5903 5.21569 20.2843 4.90973 19.908 4.71799C19.4802 4.5 18.9201 4.5 17.8 4.5H6.2C5.0799 4.5 4.51984 4.5 4.09202 4.71799C3.71569 4.90973 3.40973 5.21569 3.21799 5.59202C3 6.01984 3 6.57989 3 7.7V16.3C3 17.4201 3 17.9802 3.21799 18.408C3.40973 18.7843 3.71569 19.0903 4.09202 19.282C4.51984 19.5 5.07989 19.5 6.2 19.5Z" stroke="#000000" stroke-width="2"/>
                            </svg>
                            <span className="ms-3">Data Table</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/image-grid" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M22 13.4375C22 17.2087 22 19.0944 20.8284 20.2659C19.6569 21.4375 17.7712 21.4375 14 21.4375H10C6.22876 21.4375 4.34315 21.4375 3.17157 20.2659C2 19.0944 2 17.2087 2 13.4375C2 9.66626 2 7.78065 3.17157 6.60907C4.34315 5.4375 6.22876 5.4375 10 5.4375H14C17.7712 5.4375 19.6569 5.4375 20.8284 6.60907C21.4921 7.27271 21.7798 8.16545 21.9045 9.50024" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M3.98779 6C4.10022 5.06898 4.33494 4.42559 4.82498 3.93726C5.76553 3 7.27932 3 10.3069 3H13.5181C16.5457 3 18.0595 3 19 3.93726C19.4901 4.42559 19.7248 5.06898 19.8372 6" stroke="#1C274C" stroke-width="1.5"/>
                                <circle cx="17.5" cy="9.9375" r="1.5" stroke="#1C274C" stroke-width="1.5"/>
                                <path d="M2 13.9376L3.75159 12.405C4.66286 11.6077 6.03628 11.6534 6.89249 12.5096L11.1822 16.7993C11.8694 17.4866 12.9512 17.5803 13.7464 17.0214L14.0446 16.8119C15.1888 16.0077 16.7369 16.1009 17.7765 17.0365L21 19.9376" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            <span className="ms-3">Image Grid</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/maze" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M26,28l0,-7c0,-0.552 -0.448,-1 -1,-1l-3,0l0,-5.038l-2,-0l0,5.038l-6,0c0,0 0,-12 0,-12c-0,0 1,0 1,0c0.552,-0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-2,0c-0.552,0 -1,0.448 -1,1l0,7l-5,0c-0.552,0 -1,0.448 -1,1l0,4l-2,0l0,-15l4,0l0,6c0,0 -1,0 -1,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l2,0c0.552,0 1,-0.448 1,-1l0,-7l8,-0c0,-0 0,3 0,3c0,0.552 0.448,1 1,1l5,0l-0,2l-7,0c-0.552,0 -1,0.448 -1,1l0,6c0,0.552 0.448,1 1,1c0.552,-0 1,-0.448 1,-1l0,-5c-0,0 6,0 6,0c0,0 0,5 0,5l0.012,0.152l0.049,0.192l0.084,0.175l0.115,0.153l0.142,0.129l0.164,0.1l0.184,0.068l0.148,0.026l0.153,0.004l0.151,-0.019l0.187,-0.059l0.17,-0.092l0.148,-0.122l0.122,-0.148l0.092,-0.17l0.059,-0.187l0.019,-0.151l0.001,-0.051l0,-10c0,-0.552 -0.448,-1 -1,-1l-5,-0c0,0 0,-3 0,-3c0,-0.552 -0.448,-1 -1,-1l-16,-0c-0.552,-0 -1,0.448 -1,1l0,26c0,0.552 0.448,1 1,1l26,-0c0.552,0 1,-0.448 1,-1l0,-26c0,-0.552 -0.448,-1 -1,-1l-5.484,-0c-0.552,-0 -1,0.448 -1,1c-0,0.552 0.448,1 1,1l4.484,-0c0,0 0,24 0,24l-2,-0Zm-14,-12c0,-0 -4,-0 -4,-0l-0,8l9,-0l-0,2l-10,-0c-0.552,0 -1,-0.448 -1,-1l0,-4l-2,-0l0,7l16,-0l0,-3c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1l0,3l2,-0l0,-6l-11,-0c-0.552,0 -1,-0.448 -1,-1l0,-5Z"/>
                            </svg>
                            <span className="ms-3">Maze</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/map" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M12 6H12.01M9 20L3 17V4L5 5M9 20L15 17M9 20V14M15 17L21 20V7L19 6M15 17V14M15 6.2C15 7.96731 13.5 9.4 12 11C10.5 9.4 9 7.96731 9 6.2C9 4.43269 10.3431 3 12 3C13.6569 3 15 4.43269 15 6.2Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span className="ms-3">Map</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/barchart" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M3 14.6C3 14.0399 3 13.7599 3.10899 13.546C3.20487 13.3578 3.35785 13.2049 3.54601 13.109C3.75992 13 4.03995 13 4.6 13H5.4C5.96005 13 6.24008 13 6.45399 13.109C6.64215 13.2049 6.79513 13.3578 6.89101 13.546C7 13.7599 7 14.0399 7 14.6V19.4C7 19.9601 7 20.2401 6.89101 20.454C6.79513 20.6422 6.64215 20.7951 6.45399 20.891C6.24008 21 5.96005 21 5.4 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V14.6Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 4.6C10 4.03995 10 3.75992 10.109 3.54601C10.2049 3.35785 10.3578 3.20487 10.546 3.10899C10.7599 3 11.0399 3 11.6 3H12.4C12.9601 3 13.2401 3 13.454 3.10899C13.6422 3.20487 13.7951 3.35785 13.891 3.54601C14 3.75992 14 4.03995 14 4.6V19.4C14 19.9601 14 20.2401 13.891 20.454C13.7951 20.6422 13.6422 20.7951 13.454 20.891C13.2401 21 12.9601 21 12.4 21H11.6C11.0399 21 10.7599 21 10.546 20.891C10.3578 20.7951 10.2049 20.6422 10.109 20.454C10 20.2401 10 19.9601 10 19.4V4.6Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17 10.6C17 10.0399 17 9.75992 17.109 9.54601C17.2049 9.35785 17.3578 9.20487 17.546 9.10899C17.7599 9 18.0399 9 18.6 9H19.4C19.9601 9 20.2401 9 20.454 9.10899C20.6422 9.20487 20.7951 9.35785 20.891 9.54601C21 9.75992 21 10.0399 21 10.6V19.4C21 19.9601 21 20.2401 20.891 20.454C20.7951 20.6422 20.6422 20.7951 20.454 20.891C20.2401 21 19.9601 21 19.4 21H18.6C18.0399 21 17.7599 21 17.546 20.891C17.3578 20.7951 17.2049 20.6422 17.109 20.454C17 20.2401 17 19.9601 17 19.4V10.6Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span className="ms-3">Bar Chart</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar