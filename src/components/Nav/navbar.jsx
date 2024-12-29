import { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../Popup';
import CoolMode from '../ui/CoolMode';

const Navbar = () => {
    const [show , setShow] = useState(false);
    return (
        <div className='absolute top-0 z-[50] w-full bg-[rgb(5,5,6)]' >
            {show && <Popup show={show} setShow={setShow}/>}
            <div className="flex my-3 flex-wrap items-center w-full justify-between overflow-hidden">
                <div className="border-b border-mid-blue pl-5 pr-2">
                    <Link to={"/"}>
                        <h1 className="text-5xl font-semibold text-white cursor-pointer m-auto">
                            PI
                        </h1>
                    </Link>
                </div>
                <div className="hidden sm:flex justify-center gap-1 md:gap-10 border-b border-mid-blue h-min px-5 overflow-x-auto w-full md:w-auto mt-5 md:mt-0 order-2 md:order-none ">
                    <Link to={"/about"}><p className="uppercase p-2 border-0 rounded hover:bg-neutral-800 transition ease-in-out text-mid-blue text-sm font-light hover:text-white cursor-pointer h-min">about</p></Link>
                    <Link to={"/projects"}><p className="uppercase p-2 border-0 rounded hover:bg-neutral-800 transition ease-in-out text-mid-blue text-sm font-light hover:text-white cursor-pointer h-min">project</p></Link>
                    <Link to={"/contact"}><p className="uppercase p-2 border-0 rounded hover:bg-neutral-800 transition ease-in-out text-mid-blue text-sm font-light hover:text-white cursor-pointer h-min">Contact</p></Link>
                    <Link to={"/stack"}><p className="uppercase p-2 border-0 rounded hover:bg-neutral-800 transition ease-in-out text-mid-blue text-sm font-light hover:text-white cursor-pointer h-min">stacks</p></Link>
                    <Link to={"/achievements"}><p className="uppercase p-2 border-0 rounded hover:bg-neutral-800 transition ease-in-out text-mid-blue text-sm font-light hover:text-white cursor-pointer h-min">Achievements</p></Link>
                </div>
                <CoolMode>

                <div onClick={()=>setShow(true)}>
                    <img src="/img/command.png" alt="..." width={30} className="invert mr-5 md:mr-10 cursor-pointer m-auto" />
                </div>
                </CoolMode>
            </div>
        </div>
    );
}

export default Navbar;
