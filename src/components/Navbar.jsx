import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(true)
    }

    return (
        <nav className="bg-white border-gray-200 border-b fixed top-0 right-0 left-0 z-50 ">
            <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />

                </a>
                <button onClick={handleShow} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className=" flex flex-col  gap-3 items-center justify-center md:flex-row font-normal ">
                        <li>
                            <a href="#" className=" px-3 text-[#b2b2b2]  " aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className=" px-3 text-[#b2b2b2]  " aria-current="page">Availibility</a>
                        </li>
                        <li>
                            <a href="#" className=" px-3 text-[#b2b2b2]  " aria-current="page">Integration</a>
                        </li>
                        <li>
                            <a href="#" className=" px-3 text-[#b2b2b2]  " aria-current="page">Help</a>
                            <FontAwesomeIcon className='text-xs text-[#626262]' icon={faCaretDown} />
                        </li>
                        <li className='flex items-center'>
                            <div className='rounded-full bg-[#cccccc] border-[#b3b3b3] border-[3px] w-10 h-10 flex items-center justify-center'>J</div>
                            <a href="#" className=" px-3 text-[#b2b2b2]  " aria-current="page">Account</a>
                            <FontAwesomeIcon className='text-xs text-[#626262]' icon={faCaretDown} />
                        </li>
                    </ul>
                </div>
            </div>
            {
                show && <>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className='fixed bg-[#ffffff] shadow-2xl top-0 right-0 w-[300px] h-screen md:hidden '>
                        <div className='w-full'>
                            <div className='absolut top-3 right-3 left-0 text-3xl cursor-pointer w-full'>
                                <div className='flex items-center justify-between  w-full px-6 pt-7' onClick={() => setShow(false)}>
                                <div className='rounded-full bg-[#cccccc] border-[#b3b3b3] border-[3px] w-14 h-14 flex items-center justify-center'>J</div>
                                    <FontAwesomeIcon className='text-lg  text-[#626262]' icon={faXmark} />
                                </div>
                            </div>

                            <div className=" w-full  mt-10   fontManrope-regular " id="navbar-default">
                                <ul className="font-medium flex flex-col gap-3 items-cente text-xl p-4 mt- ">
                                    <li>
                                        <a href="#" className=" px-3 text-[#b2b2b2]  " aria-current="page">Home</a>
                                    </li>
                                    <li>
                                        <a href="#" className=" px-3 text-[#b2b2b2]  " aria-current="page">Availibility</a>
                                    </li>
                                    <li>
                                        <a href="#" className=" px-3 text-[#b2b2b2]  " aria-current="page">Integration</a>
                                    </li>
                                    <li>
                                        <a href="#" className=" px-3 text-[#b2b2b2]  " aria-current="page">Help</a>
                                       
                                    </li>
                                    <li className='flex items-center'>
                                        <a href="#" className=" px-3 text-[#b2b2b2]  " aria-current="page">Account</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </motion.div>

                </>
            }
        </nav>

    )
}

export default Navbar