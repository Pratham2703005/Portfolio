import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Popup from '../Popup';
import CoolMode from '../ui/CoolMode';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(null);

  // const [dimensions, setDimensions] = useState({ width: 0, left: 0 });
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
    setActiveItem(location.pathname);
  }, [location]);
  return (
    <>
    {show && <Popup show={show} setShow={setShow} />}
    
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0  transition-all duration-300 select-none ${
        scrolled
          ? 'bg-black bg-opacity-80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      
      style={{zIndex:"19"}}
    >
      

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 " >
            <h1 className="text-4xl font-bold text-white hover:text-gray-300 transition duration-300 ">
              pratham
            </h1>
          </Link>

          <div className="hidden md:block">
              <div ref={navRef} className="relative flex items-center ml-10 space-x-8">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onMouseEnter={() => setActiveItem(item.path)}
                    onMouseLeave={() => setActiveItem(location.pathname)}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className={`uppercase text-sm font-light transition duration-300 ${
                        activeItem === item.path ? 'text-white' : 'text-gray-400'
                      }`}>
                        {item.name}
                      </span>
                      <AnimatePresence>
                        {activeItem === item.path && (
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>

          <div className="flex items-center">
            <CoolMode>
              <button
                onClick={() => setShow(true)}
                className={"p-2 rounded-full text-gray-400 hover:text-white focus:outline-none transition duration-300 ease-in-out"}
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
