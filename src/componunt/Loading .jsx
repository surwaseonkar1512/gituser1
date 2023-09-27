// Loading.js
import React from 'react';
import { motion } from 'framer-motion';

function Loading() {
  return (
    <motion.div
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-2xl font-semibold mb-4">Loading...</h1>
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
    </motion.div>
  );
}

export default Loading;
