/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { FaTimes, FaLink, FaEnvelope, FaCode, FaHome, FaUser, FaRocket, FaClock, FaLayerGroup, FaCalendarAlt } from 'react-icons/fa';

const Popup = ({ show, setShow }) => {
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
        if (show) {
            document.body.style.overflow = 'hidden'; // Disable scroll
        } else {
            document.body.style.overflow = 'auto'; // Enable scroll
        }

        // Cleanup function
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
                staggerChildren: 0.15 
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
           <div className="absolute inset-0 bg-black opacity-50 z-30"/>
           <motion.div
               className="relative w-3/4 md:w-2/5 max-h-[80vh] bg-[#1c191c] rounded-md  overflow-y-auto"
               initial="hidden"
               animate="visible"
               exit="exit"
               variants={popupVariants}
               style={{zIndex: "31"}}
           >
               <div className="flex justify-between items-center pt-3 pb-2">
                   <small className="uppercase text-white font-light text-[12px] px-6">general</small>
                   <FaTimes className="text-white  mr-6" size={15} onClick={() => setShow(false)} />
               </div>
               <motion.p
                   onClick={handleLinkCopy}
                   className="hover: text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"
                   variants={childVariants}
               >
                   <FaLink className="text-white" size={18} /> Copy Link
               </motion.p>
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
               </motion.div>
           </div>
       )}
        </AnimatePresence>
    )
}

export default Popup;
