'use client'
import { Socials } from '../../constants/index'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { FaWhatsapp, FaCopy } from 'react-icons/fa'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isCertModalOpen, setCertModalOpen] = useState(false)
    const [isCoffeeModalOpen, setCoffeeModalOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        amount: '',
        message: ''
    })

    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            alert('Copied to clipboard!')
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const message = `Name: ${formData.name}%0AAmount: ${formData.amount}%0AMessage: ${formData.message}`
        window.open(`https://wa.me/02077474616?text=${message}`, '_blank')
    }

    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10'>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto'>
                <a href='#about-me' className='h-auto w-auto flex flex-row items-center'>
                    <Image
                        src="/smilevue.png"
                        alt='logo'
                        width={40}
                        height={40}
                        className='cursor-pointer hover:animate-slowspin box-border rounded-[50px] border'
                    />
                    {/* <span className='font-bold italic ml-[8px] hidden md:block text-gray-300'>
                        SMILE NEXT
                    </span> */}
                    <h1 className="dancing-script text-2xl ml-[8px] hidden md:block text-gray-300">smile_nextjs</h1>
                </a>

                {/* Hamburger Menu Button - Visible on mobile only */}
                <button 
                    className='md:hidden z-50'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className='w-6 h-5 flex flex-col justify-between'>
                        <span className={`h-0.5 w-full bg-gray-300 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`h-0.5 w-full bg-gray-300 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`h-0.5 w-full bg-gray-300 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </button>

                {/* Desktop Navigation */}
                <div className='hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20'>
                    <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                        <a href='#about-me' className='cursor-pointer hover:text-blue-500 relative group'>
                            About me
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        <a href='#skills' className='cursor-pointer hover:text-blue-500 relative group'>
                            Skills
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        <a href='#projects' className='cursor-pointer hover:text-blue-500 relative group'>
                            Projects
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        {/* <button 
                            onClick={() => setCertModalOpen(true)}
                            className='cursor-pointer hover:text-blue-500 relative group'
                        >
                            Certifications
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </button>
                        <button 
                            onClick={() => setCoffeeModalOpen(true)}
                            className='cursor-pointer hover:text-blue-500 relative group'
                        >
                            Buy me coffee
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </button> */}
                    </div>
                </div>

                {/* Certifications Modal */}
                {/* {isCertModalOpen && (
                    <div className="fixed inset-0 z-50 mt-60 flex items-center justify-center">
                        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity" onClick={() => setCertModalOpen(false)}></div>
                        <div className="relative z-50 w-full max-w-2xl mx-4">
                            <div className="relative bg-[#030014] border border-[#7042f861] rounded-xl p-6 w-full 
                                        transform transition-all shadow-xl
                                        animate-[modal-pop_0.3s_ease-out]">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-bold text-gray-200">My Certifications</h2>
                                    <button onClick={() => setCertModalOpen(false)} 
                                            className="text-gray-400 hover:text-gray-200 transition-colors">
                                        <IoClose size={24} />
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    <iframe 
                                        src="/mycvresult.pdf" 
                                        className="w-full h-[60vh] rounded-lg"
                                    ></iframe>
                                    <p className="text-gray-300">
                                        These certifications represent my journey in web development and continuous learning.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )} */}

                {/* Buy me coffee Modal */}
                {/* {isCoffeeModalOpen && (
                    <div className="fixed inset-0 z-50 mt-60 flex items-center justify-center">
                        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity" onClick={() => setCoffeeModalOpen(false)}></div>
                        <div className="relative z-50 w-full max-w-2xl mx-4">
                            <div className="relative bg-[#030014] border border-[#7042f861] rounded-xl p-6 w-full
                                        transform transition-all shadow-xl
                                        animate-[modal-pop_0.3s_ease-out]">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-bold text-gray-200">Support My Work</h2>
                                    <button onClick={() => setCoffeeModalOpen(false)} 
                                            className="text-gray-400 hover:text-gray-200 transition-colors">
                                        <IoClose size={24} />
                                    </button>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* QR Code and Bank Info */}
                                    {/* <div className="space-y-4">
                                        <Image 
                                            src="/qr-code.png" 
                                            alt="QR Code" 
                                            width={200} 
                                            height={200}
                                            className="mx-auto"
                                        />
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between p-2 bg-[#1a1a1a] rounded">
                                                <span className="text-gray-300">Bank: ABA</span>
                                                <button 
                                                    onClick={() => handleCopy('000787878')}
                                                    className="text-blue-400 hover:text-blue-300"
                                                >
                                                    <FaCopy size={20} />
                                                </button>
                                            </div>
                                            <div className="flex items-center justify-between p-2 bg-[#1a1a1a] rounded">
                                                <span className="text-gray-300">Account: 000787878</span>
                                                <button 
                                                    onClick={() => handleCopy('000787878')}
                                                    className="text-blue-400 hover:text-blue-300"
                                                >
                                                    <FaCopy size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </div> */}

                                    {/* Contact Form */}
                                    {/* <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-gray-300 mb-2">Name</label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                className="w-full p-2 bg-[#1a1a1a] border border-[#7042f861] rounded text-gray-200"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-300 mb-2">Amount</label>
                                            <input
                                                type="number"
                                                value={formData.amount}
                                                onChange={(e) => setFormData({...formData, amount: e.target.value})}
                                                className="w-full p-2 bg-[#1a1a1a] border border-[#7042f861] rounded text-gray-200"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-300 mb-2">Message</label>
                                            <textarea
                                                value={formData.message}
                                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                                className="w-full p-2 bg-[#1a1a1a] border border-[#7042f861] rounded text-gray-200 h-24"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors"
                                        >
                                            <FaWhatsapp size={20} />
                                            Send via WhatsApp
                                        </button>
                                    </form> */}
                                {/* </div>
                            </div>
                        </div>
                    </div>
                )} */} 

                {/* Mobile Navigation */}
                <div className={`md:hidden fixed top-[65px] left-0 w-full bg-[#030014] transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                }`}>
                    <div className='flex flex-col items-center py-4 text-gray-200'>
                        <a 
                            href='#about-me' 
                            className='py-2 cursor-pointer hover:text-blue-500'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About me
                        </a>
                        <a 
                            href='#skills' 
                            className='py-2 cursor-pointer hover:text-blue-500'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Skills
                        </a>
                        <a 
                            href='#projects' 
                            className='py-2 cursor-pointer hover:text-blue-500'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </a>
                        <button 
                            className='py-2 cursor-pointer hover:text-blue-500'
                            onClick={() => {
                                setIsMenuOpen(false);
                                setCertModalOpen(true);
                            }}
                        >
                            Certifications
                        </button>
                        <button 
                            className='py-2 cursor-pointer hover:text-blue-500'
                            onClick={() => {
                                setIsMenuOpen(false);
                                setCoffeeModalOpen(true);
                            }}
                        >
                            Buy me coffee
                        </button>
                    </div>
                </div>

                {/* Social Icons - Hidden on mobile */}
                <div className='hidden md:flex flex-row gap-5'>
                    {Socials.map((social) => (
                        <a
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={social.name}
                        >
                            <Image
                                src={social.src}
                                alt={social.name}
                                width={24}
                                height={24}
                                className="cursor-pointer"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar
