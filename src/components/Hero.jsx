import React from 'react'
import Section from './Section'
import { curve } from '../assets'
import Button from './Button'
import Typewriter from 'typewriter-effect';
import { core_skills } from '../contstants';


function Hero() {





    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="hero"
        >
            <div className=' container relative'>
                <div className=' relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] 
        md:mb-20 lg:mb-[6rem]'>
                    <h1 className="h1 mb-6">Siphamandla Mdletshe
                    <br />
                        <span className="inline-block relative">
                            <Typewriter
                                options={{
                                    strings: core_skills,
                                    autoStart: true,
                                    loop: true,
                                }} />{" "}
                            <img
                                src={curve}
                                className="absolute top-full left-0 w-full xl:-mt-2"
                                width={624}
                                height={28}
                                alt="Curve"
                            />
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        I have a passion for problem-solving, innovation, and creating high-quality products.
                        Proficient in multiple programming languages and experienced in various
                        software development methodologies, always eager to learn and collaborate
                        on meaningful projects.
                    </p>
                    <Button href="/pricing" white>
                        My Resume
                    </Button>
                </div>
            </div>
        </Section>
    )
}

export default Hero