import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../contstants";
import Button from "./Button";
import MenuSvg from '../assets/svg/MenuSvg'
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

function Header() {

    const pathname = useLocation();
    const [openNav, setOpenNav] = useState(false);

    const toggleNav = () => {
        openNav ? setOpenNav(false) : setOpenNav(true)
    }


    const handleClick = () => {
        toggleNav()
    }

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNav ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
                }`}
        >
            <div className=" flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className=" block w-[12rem xl:mr-8" href="#hero">
                    <img
                        src={brainwave}
                        width={50}
                        height={20}
                        alt="Siphamandla Mdletshe"
                    />
                </a>
                <nav
                    className={`${openNav ? "flex" : "hidden"
                        } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
                >
                    <ul className=" relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                className={` block relative font-code text-2xl uppercase text-n-1 transition-colors 
                                hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""}  
                                px-6 py-6 md:py-8 lg:-mr-0.25 ${item.url === pathname.hash ?
                                        'z-2 lg:text-n-1' : 'lg:text-n-1/50'} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </ul>
                    <HamburgerMenu />
                </nav>
                {/* <a href="#" className=" button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block">
                    Resume
                </a> */}
                <Button className=' hidden lg:flex' href='#'>
                    Resume
                </Button>

                <Button className=' ml-auto lg:hidden' px='px-3' onClick={handleClick}>
                    <MenuSvg openNavigation={openNav} />
                </Button>
            </div>
        </header>
    );
}

export default Header;
