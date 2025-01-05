/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { FaTimes, FaLink, FaEnvelope, FaCode, FaHome, FaUser, FaRocket, FaClock, FaLayerGroup, FaCalendarAlt, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaX, FaXTwitter } from 'react-icons/fa6';

const Popup = ({ show, setShow }) => {
    const popupRef = useRef(null);
    const handleLinkCopy = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            toast.success('Copied');
        } catch (err) {
            toast.error('Failed');
        } finally {
            setShow(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setShow(false);
            }
        };
        if (show) {
            document.body.style.overflow = 'hidden'; // Disable scroll
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.body.style.overflow = 'auto'; // Enable scroll
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [show]);

    const popupVariants = {
        hidden: { opacity: 0, y: 300 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                type: 'spring', 
                stiffness: 120, 
                damping: 10, 
                delayChildren: 0.15, 
                staggerChildren: 0.05 
            },
        },
        exit: { 
            opacity: 0, 
            y: 300,
            transition: { 
                type: 'spring', 
                stiffness: 80, 
                damping: 12 
            }, 
        },
    };

    const childVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };
    return ( 
        <AnimatePresence>

            {show && (
           <div className="fixed inset-0 flex justify-center items-center z-20">
           <div className="absolute inset-0 bg-black opacity-50 z-30 "/>
           <motion.div
                ref={popupRef}
               className="relative w-3/4 md:w-2/5 max-h-[70vh] bg-[#1c191c] rounded-md popup-scroll select-none"
               initial="hidden"
               animate="visible"
               exit="exit"
               variants={popupVariants}
               style={{zIndex: "31"}}
            >
                <div className="flex justify-between items-center pt-3 pb-2">
                   <small className="uppercase text-white font-light text-[12px] px-6">URL</small>
                   <FaTimes className="text-white  mr-6" size={15} onClick={() => setShow(false)} />
               </div>
                <motion.p
                   onClick={handleLinkCopy}
                   className="hover: text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"
                   variants={childVariants}
               >
                   <FaLink className="text-white" size={18} /> Copy URL
               </motion.p>
                   <small className="uppercase text-white font-light text-[12px] px-6">general</small>
                   
               
               <Link to={"https://mail.google.com/mail/u/0/?fs=1&to=pk2732004@gmail.com&tf=cm"} target="_blank" onClick={() => setShow(false)}>
                   <motion.p
                       className="hover: text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"
                       variants={childVariants}
                   >
                       <FaEnvelope className="text-white" size={18} /> Send Email
                   </motion.p>
               </Link>
               <Link to={"https://github.com/Pratham2703005/Portfolio"} target="_blank" onClick={() => setShow(false)}>
                   <motion.p
                       className="hover: text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"
                       variants={childVariants}
                   >
                       <FaCode className="text-white" size={18} /> View Source
                   </motion.p>
               </Link>
               
                   <small className='uppercase text-white font-light text-[12px] px-6'>go to</small>
                   <Link to={"/"} onClick={() => setShow(false)}>
                       <motion.p  className="hover: text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"
                       variants={childVariants}>
                           <FaHome className='text-white' size={18} /> Home
                       </motion.p>
                   </Link>
                   <Link to={"/about"} onClick={() => setShow(false)}>
                       <motion.p className="hover: text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"
                       variants={childVariants}>
                           <FaUser className='text-white' size={18} /> About
                       </motion.p>
                   </Link>
                   <Link to={"/projects"} onClick={() => setShow(false)}>
                       <motion.p className="hover: text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"
                       variants={childVariants}>
                           <FaRocket className='text-white' size={18} /> Projects
                       </motion.p>
                   </Link>
                   <Link to={"/contact"} onClick={() => setShow(false)}>
                       <motion.p className="hover: text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"
                       variants={childVariants}>
                           <FaClock className='text-white' size={18} /> Contact
                       </motion.p>
                   </Link>
                   <Link to={"/stack"} onClick={() => setShow(false)}>
                       <motion.p className="hover: text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"
                       variants={childVariants}>
                           <FaLayerGroup className='text-white' size={18} /> Stack
                       </motion.p>
                   </Link>
                   <Link to={"/achievements"} onClick={() => setShow(false)}>
                       <motion.p className="hover: text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"
                       variants={childVariants}>
                           <FaCalendarAlt className='text-white' size={18} /> Achievements
                       </motion.p>
                   </Link>
                   <small className="uppercase text-white font-light text-[12px] px-6">Follow</small>

                   <Link to={"https://x.com/Pratham85477378"} target="_blank" onClick={() => setShow(false)}>
                        <motion.p
                            className="hover: text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"
                            variants={childVariants}
                        >
                            <FaXTwitter  className="text-white" size={18} /> X
                        </motion.p>
                    </Link>

                    <Link to={"https://www.instagram.com/pk2732004/"} target="_blank" onClick={() => setShow(false)}>
                        <motion.p
                            className="hover: text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"
                            variants={childVariants}
                        >
                            <FaInstagram className="text-white" size={18} /> Instagram
                        </motion.p>
                    </Link>

                    <Link to={"https://github.com/Pratham2703005"} target="_blank" onClick={() => setShow(false)}>
                        <motion.p
                            className="hover: text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"
                            variants={childVariants}
                        >
                            <FaGithub className="text-white" size={18} /> GitHub
                        </motion.p>
                    </Link>

                    <Link to={"https://www.linkedin.com/in/pratham-israni-a6b672275/"} target="_blank" onClick={() => setShow(false)}>
                        <motion.p
                            className="hover: text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"
                            variants={childVariants}
                        >
                            <FaLinkedin className="text-white" size={18} /> LinkedIn
                        </motion.p>
                    </Link>

               </motion.div>
           </div>
       )}
        </AnimatePresence>
    )
}

export default Popup;
