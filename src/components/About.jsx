import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check, loading } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
    PhotoChatMessage,
    Gradient,
    VideoBar,
    VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const About = () => {
    return (
        <Section id="education">
            <div className="container">
                <Heading
                    title="Learning & Development."
                    text="Bridging knowledge and experience while learning and growing through challenges, with a commitment to continuous improvement."
                />

                <div className="relative">
                    <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                            <img
                                className="w-full h-full object-cover md:object-right"
                                width={800}
                                alt="Smartest AI"
                                height={730}
                                src={service1}
                            />
                        </div>

                        <div className="relative z-1 max-w-[17rem] ml-auto">
                            <h4 className="h4 mb-4">Education</h4>
                            <p className="body-2 mb-[3rem] text-n-3">
                                A lifelong pursuit of knowledge and exploration
                            </p>
                            <ul className="body-2">
                                <li
                                    className="flex items-start py-4 border-t border-n-6"
                                >
                                    <img width={24} height={24} src={check} />
                                    <a href="https://www.wethinkcode.co.za/students" target="_blank"
                                        className="ml-4">NQF level 5
                                        Information Technology: Systems Development <br />
                                        <span className=" font-semibold">- WeThinkCode_</span></a>
                                </li>
                                <li
                                    className="flex items-start py-4 border-t border-n-6"
                                >
                                    <img width={24} height={24} src={loading} />
                                    <a href="https://www.unisa.ac.za/sites/corporate/default/Register-to-study-through-Unisa/Undergraduate-&-honours-qualifications/Find-your-qualification-&-choose-your-modules/All-qualifications/Diploma-in-Law-(98750)#:~:text=The%20purpose%20of%20this%20qualification,and%20support%20to%20legal%20professionals."
                                        target="_blank" className="ml-4">Diploma in Law <br />
                                        <span className=" font-semibold"> - University Of South Africa</span></a>
                                </li>
                            </ul>
                        </div>

                        <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
                    </div>

                    <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                        <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    src={service2}
                                    className="h-full w-full object-cover"
                                    width={630}
                                    height={750}
                                    alt="robot"
                                />
                            </div>

                            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                                <h4 className="h4 mb-4">More About Me</h4>
                                <p className="body-2 mb-[3rem] text-n-3">
                                    A dynamic software developer with hands-on experience at
                                    Momentum Metropolitan Holdings, proficient in programming
                                    concepts and technologies such as Node.js, Java, UI development,
                                    Kubernetes, Docker, AWS, and Jenkins, showcasing expertise in Java,
                                    Flutter, and Python. Experienced in Agile and Scrum methodologies,
                                    adept at problem-solving and delivering high-quality products
                                    through collaboration and effective communication, passionate
                                    about leveraging skills to contribute meaningfully to innovative
                                    projects and eager to continue growth in software development.                                </p>
                            </div>

                            {/* <PhotoChatMessage /> */}
                        </div>

                        <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                            <div className="py-12 px-4 xl:px-8">
                                <h4 className="h4 mb-4">Experience</h4>
                                <p className="body-2 mb-[2rem] text-n-3">
                                    Actively building a diverse skillset by putting theory into
                                    practice and shaping my professional journey.
                                </p>

                                <ul className="flex items-center justify-between">

                            
                                    {brainwaveServicesIcons.map((item, index) => (
                                        <li
                                            key={index}
                                            className={`rounded-2xl flex items-center justify-center ${index === 2
                                                ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                                                : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                                                }`}
                                        >
                                            <div
                                                className={
                                                    index === 2
                                                        ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                                                        : ""
                                                }
                                            >
                                                <img src={item} width={24} height={24} alt={item} />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                                <img
                                    src={service3}
                                    className="w-full h-full object-cover"
                                    width={520}
                                    height={400}
                                    alt="Scary robot"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                                    <ul className="body-2">
                                        <li
                                            className="flex items-start py-4 border-t border-n-6"
                                        >
                                            <img width={24} height={24} src={check} />
                                            <a href="https://www.wethinkcode.co.za/students" target="_blank"
                                                className="ml-4">2023/06/01 - Present<br />
                                                <span className=" font-semibold"> Momentum Metropolitan Holdings</span></a>
                                        </li>
                                    </ul>
                                </div>

                                {/* <VideoChatMessage />
                                <VideoBar /> */}
                            </div>
                        </div>
                    </div>

                    <Gradient />
                </div>
            </div>
        </Section>
    );
};

export default About;