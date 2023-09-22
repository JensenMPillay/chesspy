"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

function Footer({}: Props): React.JSX.Element {
  return (
    <motion.footer
      className="absolute bottom-2 left-0 flex w-full justify-between md:bottom-4 lg:bottom-6 xl:bottom-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          type: "ease",
          delay: 1.5,
        },
      }}
    >
      <div>By Jensen M.</div>
      <div>&copy; All Rights Reserved | 2023</div>
    </motion.footer>
  );
}

export default Footer;
