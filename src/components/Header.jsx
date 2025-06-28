import Button from './Button';
import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import Hamburger from './Hamburger';
import  { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/images/logo.png';
import { Link } from 'react-router-dom';


function Header() {

    const [hamMenuOpen, setHamMenuOpen] = useState(false);
    const toggleHamMenu = () => {
        setHamMenuOpen(!hamMenuOpen);
    };

    return (
        <div className='fixed w-full shadow-md z-20'>
            <div className='py-2 flex justify-center text-mygreen font-semibold bg-mylime text-center'><p>Clean hands save lives - Wash your hands!</p></div>
            <div className='bg-mylight flex justify-center'>
                <div className='max-w-[1300px] flex justify-between py-4 px-2 w-full'>
                    <Link to="/" className='flex items-center'>
                        <img src={logoImage} alt="" className='w-20' />
                    </Link>
                    <div className='flex items-center gap-3 md:gap-7 justify-center relative'>
                        <nav className='hidden md:block'>
                            <ul className='flex justify-center gap-5 font-light'>
                                <li><a href="/#our-doctors">Our Doctors</a></li>
                                <li><a href="/#how-it-works">How It Works</a></li>
                                <li><Link to="/book">Book a session</Link></li>
                            </ul>
                        </nav>
                        <Link className='flex items-center gap-2 cursor-pointer' to="/get-started">
                            <FaUserCircle className='text-3xl text-mygreen cursor-pointer' />
                            <p>Sign Up</p>
                        </Link>
                        <Button btnText="Plans and Pricing" className="bg-mygreen text-mylight rounded-full hover:bg-mygreen/80 hidden md:block" />
                        <Hamburger isOpen={hamMenuOpen} toggle={toggleHamMenu}/>
                    </div>
                    <AnimatePresence>
              {hamMenuOpen && (
                <motion.div
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: '-100%', opacity: 0 }}
                  transition={{ type: 'tween', duration: 0.5 }}
                  className={`absolute top-full left-0 w-full h-screen bg-my-white md:hidden flex flex-col items-center justify-center gap-8  bg-mylight`
                  }>
                  <ul className='flex flex-col text-lg w-full items-center relative -top-16 font-light'>
                    <li className='hover:cursor-pointer hover:bg-gray-200 w-full h-full text-center' onClick={toggleHamMenu}>
                      <a className="hover:text-light-wood block w-full h-full py-4" href="/#our-doctors">Our Doctors</a>
                    </li>
                    <li className='hover:cursor-pointer hover:bg-gray-200 w-full h-full text-center' onClick={toggleHamMenu}>
                      <a className="hover:text-light-wood block w-full h-full py-4" href='/#how-it-works'>How It works</a>
                    </li>
                    <li className='hover:cursor-pointer hover:bg-gray-200 w-full h-full text-center py-4 ' onClick={toggleHamMenu}>
                    <Link to="/book" className='w-full'>Book a session</Link>
                    </li>
                  </ul>
                  <Button btnText="Plans and Pricing" className="bg-mygreen text-mylight rounded-full hover:bg-mygreen/80 relative -top-16" />
                </motion.div>
              )}
            </AnimatePresence>
                </div>
            </div>   
        </div>
    )
}

export default Header;