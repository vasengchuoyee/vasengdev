
// 'use client';

// import React, { useState } from "react";
// import { MdCheckBoxOutlineBlank } from "react-icons/md";
// import { IoIosList } from "react-icons/io";
// import { IoTriangleOutline } from "react-icons/io5";
// import { motion } from "framer-motion";
// import dynamic from 'next/dynamic';
// import { FiActivity } from "react-icons/fi";
// // import Lottie from "lottie-react";
// // Dynamically import Lottie with no SSR
// const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
// import comanimation from "../../public/lotties/comanimation.json"


// const Phone: React.FC = () => {
//   const [isMounted, setIsMounted] = useState(false);
//   const handleDownload = async () => {
//     try {
//       const pdfUrl = '/vasengcv-result.pdf';
//       const response = await fetch(pdfUrl);
//       if (!response.ok) {
//         throw new Error(`Failed to fetch PDF: ${response.statusText}`);
//       }
//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'vaseng-cv-result.pdf');
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       window.URL.revokeObjectURL(url);
//       console.log('PDF downloaded successfully');
//     } catch (error) {
//       console.error('Download error:', error);
//       alert('Failed to download PDF. Check the console for details.');
//     }
//   };

//   return (
//     <div id='about-me' className="flex flex-col md:flex-row justify-center items-center md:justify-around w-full px-4 py-6 gap-6">
//       {/* Phone Mockup */}
//       <div className="w-full max-w-[20rem] h-auto">
        // <div className="mockup-phone border-primary w-full">
        //   <div className="camera"></div>
        //   <div className="display">
        //     <div className="artboard artboard-demo phone-1 bg-white p-4 h-64 overflow-y-auto">
        //       <p className="text-xs sm:text-sm leading-relaxed mt-60">
        //         <span className="font-bold text-lg sm:text-xl">Hello.!</span>{` My name is VASENG CHOUYEE, born on January 1, 2002, in
        //         Venghin Village, Nambark District, Luangphabang Province, Laos.
        //         During high school, I studied at Nambark secondary School, where
        //         I built a strong academic base and discovered my interest in
        //         technology.`}
        //         <br />
        //         <br />
        //         {`Currently, I am studying a Computer Engineering at
        //         Souphanouvong University’s Faculty of Engineering. I can train
        //         my skills passion for software development.`}
        //         <br />
        //         {`I grew up in a charming village nestled in the countryside, a place I hold dear
        //         because it’s where my parents and loved ones live. Life there is
        //         simple yet fulfilling, surrounded by nature’s beauty rolling
        //         hills, The people are incredibly friendly, always ready with a
        //         warm smile or a helping hand, making it feel like one big
        //         family, my village remains the heart of my story.`}
        //         <br />
        //         <br />
        //         {`As a front-end developer, my goal is to design and develop digital
        //         solutions that have a meaningful impact on society I am
        //         passionate about creating software products that are not only
        //         innovative and user-friendly My focus is on
        //         building intuitive interfaces I am always looking for new ways.`}
        //       </p>
        //       <span className="block text-center font-bold text-xl sm:text-2xl">THANK YOU.!!</span>
        //     </div>
            
        //     <div className="backdrop-blur-md z-50 flex justify-around gap-3 p-2">
        //       <div><IoIosList /></div>
        //       <div><MdCheckBoxOutlineBlank /></div>
        //       <div className="rotate-[-90deg]"><IoTriangleOutline /></div>
        //     </div>
        //   </div>
        // </div>
//       </div>

//       {/* Content Section */}
//       <div className="w-full max-w-[40rem] h-auto flex flex-col items-center">
//         <div className="w-full flex justify-center md:justify-end mt-6 md:mt-0">
//         {isMounted && (
//             <Lottie 
//               animationData={comanimation} 
//               loop={true} 
//               style={{ 
//                 width: '100%', 
//                 maxWidth: 500, 
//                 height: 'auto', 
//                 maxHeight: 500 
//               }} 
//             />
//           )}
//         </div>
//         <div className="text-center flex md:text-left text-sm sm:text-base mt-4">
//           <FiActivity className="mr-2 text-blue-400" />{`If you want to know more about me, you can download my CV by clicking
//           the button below or contact me by clicking the Contact Me button.`}
//         </div>
//         <hr className="mt-4 w-full" />

//         <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 mt-6">
//           <div className="w-full sm:w-[12rem] h-16">
//             <motion.a 
//               className="py-4 button-primary text-center text-white cursor-pointer rounded-lg w-full block"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <button
//                 onClick={() =>
//                   window.open(
//                     "https://api.whatsapp.com/send?phone=2077474616",
//                     "_blank"
//                   )
//                 }
//                 className="w-full"
//               >
//                 Contact Me
//               </button>
//             </motion.a>
//           </div>
//           <div className="w-full sm:w-[12rem] h-16 relative bg-gray-700 rounded-lg flex flex-col items-center justify-center overflow-hidden">
//             <div className="absolute w-[400px] h-[30px] bg-gradient-to-r from-blue-400 to-pink-500 animate-rotate"></div>

//             <div
//               className="absolute inset-[2px] bg-black text-white flex justify-center items-center hover:bg-[radial-gradient(#6A1B9A,#1E88E5)] cursor-pointer rounded-md hover:text-white"
//               onClick={handleDownload}
//             >
//               <button className="relative z-10 text-center">Download CV</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Phone;

'use client';

import React, { useEffect, useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosList } from "react-icons/io";
import { IoTriangleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { FiActivity } from "react-icons/fi";

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import comanimation from "../../public/lotties/comanimation.json";

const Phone: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDownload = async () => {
    try {
      const pdfUrl = '/mycvresult.pdf';
      const response = await fetch(pdfUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch PDF: ${response.statusText}`);
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'vaseng-cv-result.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      console.log('PDF downloaded successfully');
    } catch (error) {
      console.error('Download error:', error);
      alert('Failed to download PDF. Check the console for details.');
    }
  };

  return (
    <div id='about-me' className="flex flex-col md:flex-row justify-center items-center md:justify-around w-full px-4 py-6 gap-6">
      {/* Phone Mockup */}
      <div className="w-full max-w-[20rem] h-auto">
      <div className="mockup-phone border-primary w-full">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1 bg-white p-4 h-64 overflow-y-auto">
              <p className="text-xs sm:text-sm leading-relaxed mt-60">
                <span className="font-bold text-lg sm:text-xl">Hello.!</span>{` My name is VASENG CHOUYEE, born on January 1, 2002, in
                Venghin Village, Nambark District, Luangphabang Province, Laos.
                During high school, I studied at Nambark secondary School, where
                I built a strong academic base and discovered my interest in
                technology.`}
                <br />
                <br />
                {`Currently, I am studying a Computer Engineering at
                Souphanouvong University’s Faculty of Engineering. I can train
                my skills passion for software development.`}
                <br />
                {`I grew up in a charming village nestled in the countryside, a place I hold dear
                because it’s where my parents and loved ones live. Life there is
                simple yet fulfilling, surrounded by nature’s beauty rolling
                hills, The people are incredibly friendly, always ready with a
                warm smile or a helping hand, making it feel like one big
                family, my village remains the heart of my story.`}
                <br />
                <br />
                {`As a front-end developer, my goal is to design and develop digital
                solutions that have a meaningful impact on society I am
                passionate about creating software products that are not only
                innovative and user-friendly My focus is on
                building intuitive interfaces I am always looking for new ways.`}
              </p>
              <span className="block text-center font-bold text-xl sm:text-2xl">THANK YOU.!!</span>
            </div>
            
            <div className="backdrop-blur-md z-50 flex justify-around gap-3 p-2">
              <div><IoIosList /></div>
              <div><MdCheckBoxOutlineBlank /></div>
              <div className="rotate-[-90deg]"><IoTriangleOutline /></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-[40rem] h-auto flex flex-col items-center">
        <div className="w-full flex justify-center md:justify-end mt-6 md:mt-0">
          {isMounted && (
            <Lottie 
              animationData={comanimation} 
              loop={true} 
              style={{ 
                width: '100%', 
                maxWidth: 500, 
                height: 'auto', 
                maxHeight: 500 
              }} 
            />
          )}
        </div>
        
        <div className="text-center flex md:text-left text-sm sm:text-base mt-4">
          <FiActivity className="mr-2 text-blue-400" />
          {`If you want to know more about me, you can download my CV by clicking
          the button below or contact me by clicking the Contact Me button.`}
        </div>
        <hr className="mt-4 w-full" />

        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 mt-6">
          <div className="w-full sm:w-[12rem] h-16">
            <motion.a 
              className="py-4 button-primary text-center text-white cursor-pointer rounded-lg w-full block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.open(
                      "https://api.whatsapp.com/send?phone=2077474616",
                      "_blank"
                    );
                  }
                }}
                className="w-full"
              >
                Contact Me
              </button>
            </motion.a>
          </div>
          
          <div className="w-full sm:w-[12rem] h-16 relative bg-gray-700 rounded-lg flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute w-[400px] h-[30px] bg-gradient-to-r from-blue-400 to-pink-500 animate-rotate"></div>
            <div
              className="download"
              onClick={handleDownload}
            >
              <button className="relative z-10 text-center">Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;