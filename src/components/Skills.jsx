import React from 'react'
import Section from './Section'
import { devops_stack, skills, stack } from '../constants'
import { asctro, check, sipha } from '../assets'
import Button from './Button'
import { LeftCurve, RightCurve } from "./design/Collaboration";


function Skills() {
    return (
        <Section id='skills'>
            <div className="container lg:flex">
                <div className="max-w-[25rem]">
                    <h2 className="h2 mb-4 md:mb-8">
                        What I Can Do? <br />
                        Making the Impossible, Possible
                    </h2>
                    <ul className=' max-w-[22rem] mb-10 md:mb-14'>
                        {skills.map((skill) => (
                            <li key={skill.id} className=' mb-3 py-3' >
                                <div className=' flex items-center' >
                                    <img src={check} width={24} height={24} alt='check' />
                                    <h6 className=' body-2 ml-5'>
                                        {skill.title}
                                    </h6>
                                </div>
                                <p className="body-2 mt-3 text-n-4">{skill.description}</p>
                            </li>

                        ))}
                    </ul>
                    <Button>Hire Me Now</Button>
                </div>
                <div className=' lg:ml-auto xl:w-[38rem]'>
                    <p className="body-2 m-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto text-center">
                        Some of my tools of trade
                    </p>
                    <div className=' flex flex-col gap-20'>
                        <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                                    <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">

                                        <img
                                            src={sipha}
                                            width={48}
                                            height={48}
                                            alt="brainwave"
                                        />
                                    </div>
                                </div>
                            </div>
                            <ul>
                                {stack.map((app, index) => (
                                    <li
                                        key={app.id}
                                        className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45
                                            }`}
                                    >
                                        <div
                                            className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45
                                                }`}
                                        >
                                            <img
                                                className="m-auto"
                                                width={app.width}
                                                height={app.height}
                                                alt={app.title}
                                                src={app.icon}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <LeftCurve />
                            <RightCurve />
                        </div>
                        <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                                    <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">

                                        <img
                                            src={asctro}
                                            width={48}
                                            height={48}
                                            alt="brainwave"
                                        />
                                    </div>
                                </div>
                            </div>
                            <ul>
                                {devops_stack.map((app, index) => (
                                    <li
                                        key={app.id}
                                        className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45
                                            }`}
                                    >
                                        <div
                                            className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45
                                                }`}
                                        >
                                            <img
                                                className="m-auto"
                                                width={app.width}
                                                height={app.height}
                                                alt={app.title}
                                                src={app.icon}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <LeftCurve />
                            <RightCurve />
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    )
}

export default Skills