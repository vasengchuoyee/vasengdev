"use client"

import React from 'react'
import { motion } from "framer-motion"
import { slideInFromTop } from '@/utils/motion'
import Image from 'next/image'
import { FiActivity } from "react-icons/fi"

const Encryption = () => {
    return (
        <div className='relative flex flex-col lg:flex-row items-center justify-center min-h-screen w-full px-4 md:px-8'>
            {/* Title Section */}
            <motion.div 
                variants={slideInFromTop}
                initial="hidden"
                animate="visible"
                className='absolute top-10 md:top-20 z-[5] w-full max-w-3xl mx-auto text-center'
            >
                <div className='flex items-center justify-center text-2xl md:text-[40px] font-medium text-gray-200 space-x-2'>
                    <FiActivity className="text-blue-400 w-6 h-6 md:w-8 md:h-8" />
                    <span>Performance</span>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                        &
                    </span>
                    <span>Security</span>
                </div>
            </motion.div>

            {/* Lock Animation Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='flex flex-col items-center justify-center z-[20] my-20 md:my-0'
            >
                <div className='flex flex-col items-center group cursor-pointer'>
                    <Image
                        src="/LockTop.png"
                        alt='Lock top'
                        width={50}
                        height={50}
                        className='w-[40px] md:w-[50px] translate-y-5 transition-all duration-200 
                                 group-hover:translate-y-11 group-hover:rotate-12'
                        priority
                    />
                    <Image
                        src="/LockMain.png"
                        alt='Lock main'
                        width={70}
                        height={70}
                        className='z-10 w-[60px] md:w-[70px] transition-transform 
                                 duration-200 group-hover:scale-105'
                        priority
                    />
                </div>
            </motion.div>

            {/* Video Background Section */}
            <div className='w-full absolute inset-0 flex items-center justify-center overflow-hidden'>
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload='auto'
                    className='w-full h-full object-cover max-w-[1000px] opacity-80'
                    src='https://res.cloudinary.com/dvpenhejp/video/upload/v1758354122/v7wdhygjtppzc8xxfmhx.mp4'
                    style={{ 
                        filter: 'brightness(0.7) contrast(1.2)',
                        WebkitFilter: 'brightness(0.7) contrast(1.2)' 
                    }}
                />
            </div>
        </div>
    )
}

export default Encryption