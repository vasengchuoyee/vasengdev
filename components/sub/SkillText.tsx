"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import { FiActivity } from "react-icons/fi";

const SkillText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <motion.div
                variants={slideInFromTop}
                className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
            >
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                <h1 className='Welcome-text text-[13px]'>
                    Make your website better with Next.js
                </h1>
            </motion.div>
            <motion.div variants={slideInFromLeft(0.5)}
                className='flex text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
            >
             <FiActivity className="mr-2 text-blue-400" />
                Making website with modern technologies
            </motion.div>
        </div>
    )
}

export default SkillText