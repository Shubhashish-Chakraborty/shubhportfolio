"use client";
import React, { useState, useEffect } from "react";
import CrossIcon from "@/components/ui/CrossIcon";
import DownIcon from "@/components/ui/DownIcon";
import Right from "@/components/ui/Right";
import ProjectsPanel from "@/components/panels/ProjectsPanel";
import Image from "next/image";
import Loader from "@/components/loader/Loader";

import "../scrolls.css";

const Page = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="h-[calc(100%-100px)] text-gray-custom font-fira-code flex ">
            <div className="border-r border-white w-[391px] hidden lg:block">
                <div className="flex flex-row text-white-custom border-b border-white w-full h-[35px] justify-start items-center text-[14px] cursor-pointer">
                    <div className="pl-2 flex justify-center items-center">
                        <DownIcon />
                    </div>
                    <div className="pl-2">projects</div>
                </div>
                <div className="flex flex-col px-[25px] py-[10px] border-b border-white">
                    <div className="flex flex-row py-2 hover:text-white-custom cursor-pointer">
                        <div>
                            <Right />
                        </div>
                        <div className="pl-1">Nextjs</div>
                    </div>
                    <div className="flex flex-row py-2 hover:text-white-custom cursor-pointer">
                        <div>
                            <Right />
                        </div>
                        <div className="pl-1">Reactjs</div>
                    </div>
                    <div className="flex flex-row py-2 hover:text-white-custom cursor-pointer">
                        <div>
                            <Right />
                        </div>
                        <div className="pl-1">Tailwind</div>
                    </div>
                    <div className="flex flex-row py-2 hover:text-white-custom cursor-pointer">
                        <div>
                            <Right />
                        </div>
                        <div className="pl-1">Nodejs</div>
                    </div>
                    <div className="flex flex-row py-2 hover:text-white-custom cursor-pointer">
                        <div>
                            <Right />
                        </div>
                        <div className="pl-1">Expressjs</div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex flex-col">
                <div className="hidden lg:flex flex-row text-white-custom border-b border-white w-full h-[35px] justify-start items-center text-[14px] cursor-pointer">
                    <div className="pl-4">page.tsx</div>
                    <div className="pl-4 pr-2 border-r border-white h-full flex justify-center items-center">
                        <CrossIcon />
                    </div>
                </div>
                {loading ? (
                    <div className="w-full h-full flex items-center justify-center">
                        <Loader />
                    </div>
                ) : (
                    <>
                        <div className="flex-1 overflow-y-auto p-10 flex flex-wrap justify-evenly items-start gap-8 scrollable-div">
                            <ProjectsPanel
                                projectName={"StudyWithShubh"}
                                detail="Nextjs, ExpressJs"
                                image={
                                    <Image
                                        src="/projects/sws.png"
                                        alt="project Box"
                                        width={400}
                                        height={500}
                                        className="rounded-t-2xl border-b border-white"
                                    />
                                }
                                description="studywithshubh is my self-built tech platform showcasing my skills in full-stack development, and teaching."
                                liveSiteLink="https://www.studywithshubh.tech"
                                githubLink="https://github.com/studywithshubh"
                            />

                            <ProjectsPanel
                                projectName={"ConvoRoom"}
                                detail="React.js, WebSocket"
                                image={
                                    <Image
                                        src="/projects/convoroom.png"
                                        alt="project Box"
                                        width={400}
                                        height={500}
                                        className="rounded-t-2xl border-b border-white"
                                    />
                                }
                                description="Convoroom is a real-time chat web app I built for instant communication, users can join rooms and chat live!!." 
                                liveSiteLink="https://convoroom.vercel.app"
                                githubLink="https://github.com/Shubhashish-Chakraborty/convoroom"
                            />

                            <ProjectsPanel
                                projectName={"BCE_CODE"}
                                detail="React.js, Tailwind"
                                image={
                                    <Image
                                        src="/projects/bcecode.png"
                                        alt="Project Box"
                                        width={400}
                                        height={500}
                                        className="rounded-t-2xl border-b border-white"
                                    />
                                }
                                description="I've made this to help my mates to prepare for there practical exam for Computer Engineering Subject in Semester!"
                                liveSiteLink="https://bcecode.vercel.app/"
                                githubLink="https://github.com/Shubhashish-Chakraborty/bce-codes"
                            />
                            <ProjectsPanel
                                projectName={"LetMeRecall"}
                                detail="Next.js, Express.js, OAuth"
                                image={
                                    <Image
                                        src="/projects/letmerecall.png"
                                        alt="Project Box"
                                        width={400}
                                        height={500}
                                        className="rounded-t-2xl border-b border-white"
                                    />
                                }
                                description="A digital second brain for organizing content with secure authentication and cloud storage integration"
                                liveSiteLink="https://letmerecall.vercel.app"
                                githubLink="https://github.com/Shubhashish-Chakraborty/letmerecall"
                            />
                            <ProjectsPanel
                                projectName={"PyFileMaster"}
                                detail="Python, File Handling"
                                image={
                                    <Image
                                        src="/projects/pyfilemaster.png"
                                        alt="Project Box"
                                        width={400}
                                        height={500}
                                        className="rounded-t-2xl border-b border-white"
                                    />
                                }
                                description="PyFileMaster is an open-source Python package that simplifies file handling tasks like reading, writing, and converting between .dat, .csv, and .txt formats with minimal code." 
                                liveSiteLink="https://pypi.org/project/pyfilemaster/"
                                githubLink="https://github.com/Shubhashish-Chakraborty/pyfilemaster"
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Page;
