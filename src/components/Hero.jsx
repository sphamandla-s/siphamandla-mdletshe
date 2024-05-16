import React, { useRef } from 'react'
import Section from './Section'
import { curve, heroBackground, robot, resume } from '../assets'
import Button from './Button'
import Typewriter from 'typewriter-effect';
import { core_skills } from '../constants';
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



function Hero() {



    const parallaxRef = useRef(null);


    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="home"
        >
            <div className='container relative ' ref={parallaxRef}>
                <div className=' relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] 
        md:mb-20 lg:mb-[6rem]'>
                    <h1 className="mb-6 h1">Siphamandla Mdletshe
                        <br />
                        <span className="inline-block relative text-[20px] md:h1">
                            <Typewriter
                                options={{
                                    strings: core_skills,
                                    autoStart: true,
                                    loop: true,
                                }} />{" "}
                            <img
                                src={curve}
                                className="absolute left-0 w-full top-full xl:-mt-2"
                                width={624}
                                height={28}
                                alt="Curve"
                            />
                        </span>
                    </h1>
                    <p className="max-w-3xl mx-auto mb-6 body-1 text-n-2 lg:mb-8">
                        I have a passion for problem-solving, innovation, and creating high-quality products.
                        Proficient in multiple programming languages and experienced in various
                        software development methodologies, always eager to learn and collaborate
                        on meaningful projects.
                    </p>
                    <Button href={resume} download={resume} white>
                        My Resume
                    </Button>
                </div>
                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

                            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                <img
                                    src={robot}
                                    className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                                    width={1024}
                                    height={490}
                                    alt="AI"
                                />
                                {/* <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" /> */}

                                <ScrollParallax isAbsolutelyPositioned>
                                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                                        {/* {heroIcons.map((icon, index) => (
                                            <li className="p-5" key={index}>
                                                <img src={icon} width={24} height={25} alt={icon} className='cursor-pointer ' />
                                            </li>
                                        ))} */}
                                        <li className="p-5" >
                                            <a href='https://www.linkedin.com/in/siphamandla-mdletshe-644a7323b/' target="_blank"> <FaLinkedin width={24} height={25} /></a>
                                        </li>
                                        <li className="p-5" >
                                            <a href='https://github.com/sphamandla-s' target="_blank"> <FaGithub width={24} height={25} /></a>
                                        </li>
                                        <li className="p-5" >
                                            <a href='mailto:mdletshespha38@gmail.com' target="_blank"> <MdEmail width={24} height={25} /></a>
                                        </li>
                                        <li className="p-5" >
                                            <a href=''> <FaPhone width={24} height={25} /></a>
                                        </li>
                                    </ul>
                                </ScrollParallax>

                            </div>
                        </div>
                        <Gradient />

                    </div>
                    <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                        <img
                            src={heroBackground}
                            className="w-full"
                            width={1440}
                            height={1800}
                            alt="hero"
                        />
                    </div>
                    <BackgroundCircles />

                </div>
            </div>
            <BottomLine />
        </Section>
    )
}

export default Hero