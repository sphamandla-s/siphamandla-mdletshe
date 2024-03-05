import React from "react";
import Section from "./Section";
import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
    return (
        <Section id='contact' crosses className="!px-0 !py-10">
            <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="caption text-n-4 lg:block">
                    © {new Date().getFullYear()}. All rights reserved.
                </p>

                <ul className="flex gap-5 flex-wrap">
                    <a
                        href='https://www.linkedin.com/in/siphamandla-mdletshe-644a7323b'
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                    >
                        <FaLinkedin width={16} height={16} />
                    </a>
                    <a
                        href='https://github.com/sphamandla-s'
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                    >
                        <FaGithub width={16} height={16} />
                    </a>
                    <a
                        href='mailto:mdletshespha38@gmail.com'
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                    >
                        <MdEmail width={16} height={16} />
                    </a>
                    <a
                        href='tel:+27761911814'
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                    >
                        <FaPhone width={16} height={16} />
                    </a> 
                </ul>
            </div>
        </Section>
    );
};

export default Footer;