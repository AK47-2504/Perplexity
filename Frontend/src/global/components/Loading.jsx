import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Command, Cpu, BrainCircuit } from 'lucide-react';

// Generates random data streams (0s, 1s, hex codes)
const generateDataStream = (count) => {
  const chars = '01010101ABCDEF';
  return Array.from({ length: count }, () => 
    Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
  );
};

const Loading = () => {
  const [statusIndex, setStatusIndex] = useState(0);
  const [dataStreams, setDataStreams] = useState(generateDataStream(20));

  const statusMessages = [
    "Initializing Core...",
    "Securing Neural Link...",
    "Quantizing Input Data...",
    "Calibrating Intelligence Field...",
    "Handshake complete. Entering."
  ];

  // Cycle status messages
  useEffect(() => {
    const statusTimer = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusMessages.length);
    }, 1200);
    return () => clearInterval(statusTimer);
  }, []);

  // Regenerate "raw data" streams
  useEffect(() => {
    const dataTimer = setInterval(() => {
      setDataStreams(generateDataStream(20));
    }, 150);
    return () => clearInterval(dataTimer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 font-sans overflow-hidden selection:bg-indigo-500">
      
      {/* 1. THE BRAND HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-8 left-8 flex items-center gap-2.5"
      >
        <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg shadow-white/5">
          <Command size={18} className="text-black" />
        </div>
        <span className="text-xl font-black tracking-tighter uppercase text-white/90">Cognify</span>
      </motion.div>

      {/* 2. THE NEURAL QUANTIZER (Visual Loading) */}
      <div className="relative w-full max-w-lg h-[400px] flex items-center justify-center">
        
        {/* Absolute Background Blur */}
        <div className="absolute inset-0 bg-indigo-600/10 blur-[100px] rounded-full -z-10" />

        {/* The Rain (Raw Input) */}
        <div className="absolute inset-0 mask-image-b mask-linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)">
          {dataStreams.map((stream, i) => (
            <motion.div
              key={i}
              initial={{ y: -50, opacity: 0 }}
              animate={{ 
                y: [0, 400], 
                opacity: [0, 0.4, 0.4, 0] 
              }}
              transition={{ 
                duration: 2 + Math.random() * 2, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 2
              }}
              style={{ left: `${(i / dataStreams.length) * 100}%` }}
              className="absolute text-[8px] font-mono text-white/20 tracking-widest whitespace-nowrap"
            >
              {stream}
            </motion.div>
          ))}
        </div>

        {/* The Intelligence Field (Central Hub) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 0 0px 0px rgba(79, 70, 229, 0)',
              '0 0 40px 10px rgba(79, 70, 229, 0.3)',
              '0 0 0px 0px rgba(79, 70, 229, 0)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-24 h-24 bg-[#0A0A0A] border-4 border-indigo-500 rounded-full flex items-center justify-center group"
        >
          <BrainCircuit className="text-indigo-400 group-hover:scale-110 transition-transform" size={40} />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-8px] border-t-2 border-indigo-400 rounded-full"
          />
        </motion.div>
      </div>

      {/* 3. THE STATUS FOOTER */}
      <div className="mt-12 text-center flex flex-col items-center">
        <div className="flex items-center gap-3 mb-4 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
          <motion.div 
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-emerald-500" 
          />
          <AnimatePresence mode="wait">
            <motion.p
              key={statusIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-[11px] font-bold text-slate-300 uppercase tracking-widest min-w-[200px]"
            >
              {statusMessages[statusIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
        
        <p className="text-xs text-white/30 font-medium max-w-xs text-balance leading-relaxed">
          The Cognify protocol is establishing a secure neural path. Please remain synchronized.
        </p>
      </div>

      {/* 4. TECH DECOR (Corner Details) */}
      <div className="absolute bottom-8 right-8 flex items-center gap-4 text-white/20">
         <div className="text-right">
           <p className="text-[8px] font-black uppercase leading-none">Latency</p>
           <p className="text-[10px] font-bold">4ms</p>
         </div>
         <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center">
            <Cpu size={20} strokeWidth={1} />
         </div>
      </div>
    </div>
  );
};

export default Loading;