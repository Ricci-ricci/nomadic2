"use client";
import { motion } from "framer-motion";
export default function Container({ children, classname = "" }) {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className={`container mx-auto px-4 py-8 md:py-12 flex items-center  justify-center max-w-[1920px]  flex-col ${classname}`}
    >
      {children}
    </motion.div>
  );
}
