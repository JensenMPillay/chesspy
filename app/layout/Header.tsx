"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props): React.JSX.Element {
  const MotionLink = motion(Link);

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.header
      className="flex w-full flex-col items-center"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <MotionLink
        href="/"
        className="flex w-1/2 flex-col items-center justify-center"
        variants={childVariants}
      >
        <Image
          src="/assets/chess_logo_white.webp"
          alt="Chess Logo"
          width={1100}
          height={1100}
          className="w-1/2"
        />
      </MotionLink>
      <motion.h1
        className="m-2 w-full text-center text-lg font-bold md:m-4 md:text-xl lg:m-6 lg:text-2xl xl:m-8 xl:text-3xl"
        variants={childVariants}
      >
        ChessPy
      </motion.h1>
      <motion.h3
        className="m-1 w-full text-center text-sm md:m-2 md:text-base lg:m-3 lg:text-lg xl:m-4 xl:text-xl"
        variants={childVariants}
      >
        Welcome to Chesspy, a chess statistics engine search using Chess.com
        API, Next.js and Python.
      </motion.h3>
    </motion.header>
  );
}

export default Header;
