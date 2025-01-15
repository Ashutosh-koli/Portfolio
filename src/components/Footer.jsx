import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const FooterSection = ({darkMode,lightBG,darkBG}) => {
  return (
    <footer className={`  text-white py-6 px-3 fixed bottom-0 right-0  w-full overflow-hidden`} style={{backgroundColor :!darkMode ? 'rgb(243 244 246)'  : 'rgb(30 41 59)' }}>
      <div className="container mx-auto flex items-center justify-between flex-row-reverse">
        <div className="flex items-center">
          <motion.a
            href="https://github.com/Ashu-lab252001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mr-4"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{color :!darkMode ? lightBG : darkBG }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://x.com/Ashutoshkoli5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mr-4"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{color :!darkMode ? lightBG : darkBG }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ashutoshkoli25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{color :!darkMode ? lightBG : darkBG }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
        <p className="text-gray-500">© {new Date().getFullYear()} Ashutosh koli. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
