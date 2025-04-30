"use client";

import React from 'react';
import Link from 'next/link';
import Container from './Container';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white h-[70px] relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-black"></div>
      <Container>
        <div className="flex items-center justify-between h-[70px]">
          <motion.p
            className="text-sm font-[family-name:var(--font-montserrat)] text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            © 2025 Made By Zaye
          </motion.p>
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://www.linkedin.com/in/zayeflowers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CC0101] hover:text-[#a50000] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://github.com/zayeflowers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CC0101] hover:text-[#a50000] transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
