"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { customerStories } from "@/constants/index";
import { FiActivity, FiExternalLink } from "react-icons/fi";

export default function CustomerStories() {
    return (
        <div id='projects' className="px-4 sm:px-8 md:px-4 py-4 sm:py-6 md:py-4 bg-[var(--bg-color)]">
            <div className="flex justify-center items-center">
                <h1 className='flex text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-2'>
                    <FiActivity className="mr-2 text-blue-400" />
                    My Projects
                </h1>
            </div>
            <motion.div
                className="relative overflow-x-auto scrollbar-none"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    className="flex gap-20"
                    drag="x"
                    dragConstraints={{ right: 0, left: -600 }}
                >
                    {customerStories.map((story, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] mt-2 sm:min-w-[350px] border-2 border-blue-400 p-2 ml-8 rounded-xl 
                                     transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-blue-400/20"
                        >
                            <div className="flex items-center gap-4">
                                <Image
                                    src={story.logo}
                                    alt={story.name}
                                    width={400}
                                    height={100}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <h3 className="text-lg font-semibold text-white">
                                    {story.name}
                                </h3>
                                {story.link && (
                                    <a
                                        href={story.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full hover:bg-blue-400/20 transition-colors duration-300"
                                    >
                                        <FiExternalLink className="w-5 h-5 text-blue-400 hover:text-purple-500" />
                                    </a>
                                )}
                            </div>
                            <p className="mt-4 text-white/80">
                                {story.feedback}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}