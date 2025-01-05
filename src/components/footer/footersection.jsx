import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
    return (
        <div className='w-full absolute bottom-0 z-10 select-none'>
            <div className="flex justify-center gap-4 md:gap-10 h-min px-5 overflow-x-auto w-full md:w-auto mt-5 md:mt-0 md:order-none py-5 bg-[rgb(5,5,6)] backdrop-blur">
                
                {/* Show Text for larger screens, Show Icons for smaller screens */}
                <Link to={"https://mail.google.com/mail/u/0/?fs=1&to=pk2732004@gmail.com&tf=cm"} target='_blank'>
                    <p className="hidden sm:inline text-mid-blue text-sm font-base hover:text-white  h-min">email</p>
                    <FaEnvelope className="sm:hidden text-mid-blue text-xl hover:text-white  h-min" />
                </Link>
                
                <Link to={"https://www.linkedin.com/in/pratham-israni-a6b672275/"} target='_blank'>
                    <p className="hidden sm:inline text-mid-blue text-sm font-base hover:text-white  h-min">linkedin</p>
                    <FaLinkedin className="sm:hidden text-mid-blue text-xl hover:text-white  h-min" />
                </Link>
                
                <Link to={"https://github.com/Pratham2703005"} target='_blank'>
                    <p className="hidden sm:inline text-mid-blue text-sm font-base hover:text-white  h-min">github</p>
                    <FaGithub className="sm:hidden text-mid-blue text-xl hover:text-white  h-min" />
                </Link>
                
                <Link to={"https://www.instagram.com/pk2732004/"} target='_blank'>
                    <p className="hidden sm:inline text-mid-blue text-sm font-base hover:text-white  h-min">instagram</p>
                    <FaInstagram className="sm:hidden text-mid-blue text-xl hover:text-white  h-min" />
                </Link>
                
                <Link to={"https://leetcode.com/u/Pratham012/"} target='_blank'>
                    <p className="hidden sm:inline text-mid-blue text-sm font-base hover:text-white  h-min">leetcode</p>
                    <SiLeetcode className="sm:hidden text-mid-blue text-xl hover:text-white  h-min" />
                </Link>
                
                <Link to={"https://x.com/Pratham85477378"} target='_blank'>
                    <p className="hidden sm:inline text-mid-blue text-sm font-base hover:text-white  h-min">X</p>
                    <FaXTwitter  className="sm:hidden text-mid-blue text-xl hover:text-white  h-min" />
                </Link>
            </div>
        </div>
    )
}

export default Footer
