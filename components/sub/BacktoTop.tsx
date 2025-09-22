
'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation, easeOut, easeInOut } from 'framer-motion';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const BackToTop: React.FC = () => {
    const [showButton, setShowButton] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Animation 
    const buttonVariants = {
        hidden: {
            opacity: 0,
            scale: 0.3,
            y: 40,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
        },
    } as const;

    const chevronVariants = {
        initial: { y: 0 },
        hover: {
            y: [-2, 2],
        },
    } as const;

    const buttonTransition = {
        duration: 0.3,
        ease: easeOut
    };

    const chevronTransition = {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: easeInOut
    };

    return (
        <motion.div
            className="fixed bottom-10 right-10 z-50"
            initial={{ opacity: 0, scale: 0.3, y: 40 }}
            animate={showButton ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.3, y: 40 }}
            transition={buttonTransition}
        >
            <motion.button
                onClick={scrollToTop}
                className="group getback"
            >
                <motion.div
                    animate={{ y: [-2, 2] }}
                    transition={chevronTransition}
                >
                    <MdKeyboardDoubleArrowUp className="h-6 w-6 text-white" />
                </motion.div>
            </motion.button>
        </motion.div>
    );
};

export default BackToTop;