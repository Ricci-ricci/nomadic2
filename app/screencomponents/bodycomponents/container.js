"use client";
import { motion } from "framer-motion";
export default function Container({ children, classname = "" }) {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
      className={`container mx-auto py-8 md:py-12 flex items-center  justify-center  flex-col ${classname}`}
    >
      {children}
    </motion.div>
  );
}
