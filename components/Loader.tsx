"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  loading: boolean;
}

export default function Loader({ loading }: LoaderProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          {/* Background Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-red-600/10 blur-[120px]" />

          <div className="relative flex flex-col items-center">
            {/* Animated Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "linear",
              }}
              className="w-20 h-20 rounded-full border-4 border-zinc-800 border-t-red-600"
            />

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-4xl font-black tracking-[8px]"
            >
              HARSH{" "}
              <span className="text-red-600">
                KOHLI
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.4 }}
              className="mt-3 uppercase tracking-[5px] text-sm text-zinc-500"
            >
              Loading Portfolio...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
