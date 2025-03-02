"use client";

import { motion } from 'framer-motion';

export default function UnderDevelopment() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-400">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl"
      >
        This page is under development
      </motion.div>
    </div>
  );
}
