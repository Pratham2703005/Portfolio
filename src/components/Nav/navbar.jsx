import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Popup from '../Popup';
import CoolMode from '../ui/CoolMode';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [dimensions, setDimensions] = useState({ width: 0, left: 0 });
  const navRef = useRef(null);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Stacks", path: "/stack" },
    { name: "Achievements", path: "/achievements" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    if (navRef.current) {
      const activeItem = navRef.current.querySelector(`a[href="${location.pathname}"]`);
      if (activeItem) {
        const { width, left } = activeItem.getBoundingClientRect();
        const navLeft = navRef.current.getBoundingClientRect().left;
        setDimensions({ width, left: left - navLeft });
      }
    }
  }, [location.pathname]);

  return (
    <>
    {show && <Popup show={show} setShow={setShow} />}
    
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black bg-opacity-80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-5xl font-bold text-white hover:text-gray-300 transition duration-300">
              PI
            </h1>
          </Link>

          <div className="hidden md:block">
            <div ref={navRef} className="relative flex items-center ml-10 space-x-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`relative uppercase text-sm font-light hover:text-white transition duration-300 ${
                    location.pathname === item.path ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <motion.div
                className="absolute bottom-0 h-0.5 left-[-1rem] bg-blue-500"
                initial={false}
                animate={{
                  width: dimensions.width,
                  x: dimensions.left,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>
          </div>

          <div className="flex items-center">
            <CoolMode>
              <button
                onClick={() => setShow(true)}
                className="p-2 rounded-full text-gray-400 hover:text-white focus:outline-none transition duration-300 ease-in-out"
              >
                <img
                  src="/img/command.png"
                  alt="Command"
                  className="w-7 h-7 invert"
                />
              </button>
            </CoolMode>
          </div>
        </div>
      </div>

      
      
    </motion.nav>
    </>
  );
};

export default Navbar;
