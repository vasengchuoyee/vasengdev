import React from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
            <div className='w-full flex flex-col items-center justify-center m-auto'>
                <div className='w-full max-w-7xl mx-auto px-4'>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-8 py-8'>
                        {/* Community Section */}
                        <div className='space-y-4'>
                            <h3 className='font-bold text-lg text-gray-100'>
                                Community
                            </h3>
                            <div className='flex flex-col space-y-2'>
                                <a href="#" className='flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition-colors'>
                                    <FaYoutube className="w-5 h-5 text-red-500" />
                                    <span>Youtube</span>
                                </a>
                                <a href="#" className='flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition-colors'>
                                    <FaGithub className="w-5 h-5" />
                                    <span>Github</span>
                                </a>
                                <a href="#" className='flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition-colors'>
                                    <FaDiscord className="w-5 h-5 text-indigo-400" />
                                    <span>Discord</span>
                                </a>
                            </div>
                        </div>

                        {/* Social Media Section */}
                        <div className='space-y-4'>
                            <h3 className='font-bold text-lg text-gray-100'>
                                Social Media
                            </h3>
                            <div className='flex flex-col space-y-2'>
                                <a href="#" className='flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition-colors'>
                                    <FaInstagram className="w-5 h-5 text-pink-500" />
                                    <span>Instagram</span>
                                </a>
                                <a href="#" className='flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition-colors'>
                                    <FaTwitter className="w-5 h-5 text-blue-400" />
                                    <span>Twitter</span>
                                </a>
                                <a href="#" className='flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition-colors'>
                                    <FaLinkedin className="w-5 h-5 text-blue-600" />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>

                        {/* About Section */}
                        <div className='col-span-2 md:col-span-1 space-y-4'>
                            <h3 className='font-bold text-lg text-gray-100'>
                                About
                            </h3>
                            <div className='flex flex-col space-y-2'>
                                <a href="#" className='text-gray-300 hover:text-gray-100 transition-colors'>
                                    Join Dev team
                                </a>
                                <a href="#" className='text-gray-300 hover:text-gray-100 transition-colors'>
                                    Learning about me
                                </a>
                                <a href="mailto:vasengchouyee@gmail.com" className='text-gray-300 hover:text-gray-100 transition-colors'>
                                    vasengchouyee@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-full mt-[20px] mb-[20px] overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 blur-xl'></div>
                    <div className='relative bg-[#0300145e] backdrop-blur-sm border-t border-[#7042f88b] p-4'>
                        <div className='flex flex-col md:flex-row items-center justify-center gap-2 text-center'>
                            <span className='text-[15px] text-gray-300 font-light'>
                                &copy; {new Date().getFullYear()}
                            </span>
                            <span className='text-lg bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text font-medium'>
                                vaseng.dev
                            </span>
                            <span className='text-[15px] text-gray-300 font-light'>
                                Built with
                                <span className='mx-1 text-blue-400 hover:text-blue-300 transition-colors'>
                                    Next.js
                                </span>
                                &
                                <span className='mx-1 text-purple-400 hover:text-purple-300 transition-colors'>
                                    TailwindCSS
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                </div>
                


            </div>


        </div>
    )
}

export default Footer