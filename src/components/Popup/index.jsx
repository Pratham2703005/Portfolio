/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
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

    return show && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className="relative w-3/4 md:w-2/5 max-h-[80vh] bg-[#1c191c] rounded-md z-20 overflow-y-auto">
                <div className='flex justify-between items-center pt-3 pb-2'>
                    <small className='uppercase text-white font-light text-[12px] px-6'>general</small>
                    <FaTimes className='text-white cursor-pointer mr-6' size={15} onClick={() => setShow(false)} />
                </div>
                <p onClick={handleLinkCopy} className="hover:cursor-pointer text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3">
                    <FaLink className='text-white' size={18} /> Copy Link
                </p>
                <Link to={"https://mail.google.com/mail/u/0/?fs=1&to=pk2732004@gmail.com&tf=cm"} target='_blank' onClick={() => setShow(false)}>
                    <p className="hover:cursor-pointer text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3">
                        <FaEnvelope className='text-white' size={18} /> Send Email
                    </p>
                </Link>
                <Link to={"https://github.com/"} target='_blank' onClick={() => setShow(false)}>
                    <p className="hover:cursor-pointer text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3">
                        <FaCode className='text-white' size={18} /> View Source
                    </p>
                </Link>
                <small className='uppercase text-white font-light text-[12px] px-6'>go to</small>
                <Link to={"/"} onClick={() => setShow(false)}>
                    <p className="hover:cursor-pointer text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3">
                        <FaHome className='text-white' size={18} /> Home
                    </p>
                </Link>
                <Link to={"/about"} onClick={() => setShow(false)}>
                    <p className="hover:cursor-pointer text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3">
                        <FaUser className='text-white' size={18} /> About
                    </p>
                </Link>
                <Link to={"/projects"} onClick={() => setShow(false)}>
                    <p className="hover:cursor-pointer text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3">
                        <FaRocket className='text-white' size={18} /> Projects
                    </p>
                </Link>
                <Link to={"/contact"} onClick={() => setShow(false)}>
                    <p className="hover:cursor-pointer text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3">
                        <FaClock className='text-white' size={18} /> Contact
                    </p>
                </Link>
                <Link to={"/stack"} onClick={() => setShow(false)}>
                    <p className="hover:cursor-pointer text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3">
                        <FaLayerGroup className='text-white' size={18} /> Stack
                    </p>
                </Link>
                <Link to={"/achievements"} onClick={() => setShow(false)}>
                    <p className="hover:cursor-pointer text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3">
                        <FaCalendarAlt className='text-white' size={18} /> Achievements
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default Popup;
