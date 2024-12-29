import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-full absolute bottom-0 z-10'>
            <div className="flex justify-center gap-4 md:gap-10 h-min px-5 overflow-x-auto w-full md:w-auto mt-5 md:mt-0 md:order-none py-5 bg-[rgb(5,5,6)] backdrop-blur">
                <Link to={"https://mail.google.com/mail/u/0/?fs=1&to=pk2732004@gmail.com&tf=cm"} target='_blank'><p className="text-mid-blue text-sm font-base hover:text-white cursor-pointer h-min">email</p></Link>
                <Link to={"https://www.linkedin.com/in/pratham-israni-a6b672275/"} target='_blank'><p className="text-mid-blue text-sm font-base hover:text-white cursor-pointer h-min">linkedin</p></Link>
                <Link to={"https://github.com/Pratham2703005"} target='_blank'><p className="text-mid-blue text-sm font-base hover:text-white cursor-pointer h-min">github</p></Link>
                <Link to={"https://www.instagram.com/pk2732004/"} target='_blank'><p className="text-mid-blue text-sm font-base hover:text-white cursor-pointer h-min">instagram</p></Link>
                <Link to={"https://leetcode.com/u/Pratham012/"} target='_blank'><p className="text-mid-blue text-sm font-base hover:text-white cursor-pointer h-min">leetcode</p></Link>
                <Link to={"https://x.com/Pratham85477378"} target='_blank'><p className="text-mid-blue text-sm font-base hover:text-white cursor-pointer h-min">twitter</p></Link>
            </div>
        </div>
    )
}

export default Footer
