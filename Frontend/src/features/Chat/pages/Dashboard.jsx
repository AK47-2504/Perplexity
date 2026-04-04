import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useChat } from "../hooks/useChat";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings,
  User,
  SunMoon,
  PanelLeftClose,
  PanelLeftOpen,
  SendHorizontal,
  Plus,
  Command,
  Search,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const Dashboard = () => {
  const chat = useChat();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    chat.initializeSocketConn();
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeChat, setActiveChat] = useState(0);

  const prevChats = [
    "Neural Pathing Analysis",
    "React Component Optimization",
    "Market Synthesis v2",
    "Zero-Knowledge Protocol",
    "React Component Optimization",
    "Market Synthesis v2",
    "Zero-Knowledge Protocol",
    "React Component Optimization",
    "Market Synthesis v2",
    "Zero-Knowledge Protocol",
    "React Component Optimization",
    "Market Synthesis v2",
    "Zero-Knowledge Protocol",
    "React Component Optimization",
    "Market Synthesis v2",
    "Zero-Knowledge Protocol",
    "React Component Optimization",
    "Market Synthesis v2",
    "Zero-Knowledge Protocol",
  ];

  const NeuralBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-[#030303]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#111,transparent)] opacity-50" />
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -100, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-indigo-900/50 blur-[100px] rounded-full"
      />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
    </div>
  );

  return (
    <div className="flex h-screen w-full bg-[#050505] text-white font-sans overflow-hidden relative">
      {/* --- SIDEBAR --- */}
      {/* On mobile, we use absolute positioning so it overlays the chat */}
      <motion.aside
        initial={false}
        animate={{
          width: isSidebarOpen ? 280 : window.innerWidth < 768 ? 0 : 64,
          x: window.innerWidth < 768 && !isSidebarOpen ? -280 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`h-full bg-[#080808] border-r border-white/5 flex flex-col z-40 md:relative absolute inset-y-0 left-0 overflow-hidden`}
      >
        <NeuralBackground />

        {/* Sidebar Header */}
        <div
          className={`p-6 flex items-center ${isSidebarOpen ? "justify-between" : "justify-center"}`}
        >
          {isSidebarOpen && (
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-7 h-7 bg-white text-black rounded-lg flex items-center justify-center shrink-0">
                <Command size={16} />
              </div>
              <span className="font-black uppercase tracking-tighter text-sm">
                Cognify
              </span>
            </div>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white/30 hover:text-white p-1"
          >
            {isSidebarOpen ? (
              <PanelLeftClose size={20} />
            ) : (
              <PanelLeftOpen size={20} />
            )}
          </button>
        </div>

        <div className="px-3 mb-6">
          <button
            className={`w-full h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all ${!isSidebarOpen && "aspect-square p-0"}`}
          >
            <Plus size={18} className="text-indigo-500 shrink-0" />
            {isSidebarOpen && (
              <span className="text-[12px] font-black uppercase tracking-[0.2em]">
                New Sync
              </span>
            )}
          </button>
        </div>

        {/* Chat History List - Hidden Scrollbar */}
        <div className="flex-1 overflow-y-auto px-3 space-y-1 scrollbar-hide">
          {isSidebarOpen &&
            prevChats.map((chat, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveChat(i);
                  if (window.innerWidth < 768) setIsSidebarOpen(false);
                }}
                className={`w-full p-3 rounded-xl flex items-center transition-all ${activeChat === i ? "bg-white/5 text-white" : "text-white/30 hover:text-white"}`}
              >
                <span className="text-[15px] font-bold truncate tracking-tight">
                  {chat}
                </span>
              </button>
            ))}
        </div>

        <div className="p-3 mt-auto border-t border-white/5 space-y-1">
          <NeuralBackground />
          {[
            { icon: <SunMoon size={18} />, label: "Theme" },
            { icon: <User size={18} />, label: "Account" },
            { icon: <Settings size={18} />, label: "Settings" },
          ].map((item, i) => (
            <button
              key={i}
              className={`w-full p-3 rounded-xl flex items-center gap-3 text-white hover:bg-white/10 hover:text-white/80 transition-all ${!isSidebarOpen && "justify-center"}`}
            >
              <div className="shrink-0">{item.icon}</div>
              {isSidebarOpen && (
                <span className="text-[12px] font-black uppercase tracking-wider">
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </div>
      </motion.aside>

      {/* --- MAIN INTERFACE --- */}
      <main className="flex-1 flex flex-col min-w-0 h-full relative z-10">
        {/* Top Navigation Bar */}
        <header className="h-20 border-b border-white/5 px-4 md:px-8 flex items-center justify-between backdrop-blur-md shrink-0">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            {!isSidebarOpen && (
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden text-white/40"
              >
                <PanelLeftOpen size={20} />
              </button>
            )}
            <div className="truncate">
              <h2 className="text-xs min-w-25 font-black uppercase tracking-wider text-white/80 truncate">
                {prevChats[activeChat]}
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[12px] font-bold text-white/20 uppercase tracking-[0.2em]">
                  Live
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-5">
            <button className="px-3 md:px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-black uppercase tracking-wider text-[8px] md:text-[11px] rounded-full flex items-center gap-2 transition-all shadow-lg">
              <span className="hidden sm:inline">Upgrade Plan</span>{" "}
              <ArrowUpRight size={12} />
            </button>
            <button className="p-3 hover:bg-white/15 rounded-full transition-colors text-white/40">
              <Search size={18} />
            </button>
          </div>
        </header>

        {/* Scrollable Chat Feed - Hidden Scrollbar */}
        <div className="flex-1 overflow-y-auto scroll-smooth px-4 md:px-6 py-8 scrollbar-hide">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* User Chat */}
            <div className="flex flex-col items-end gap-3">
              <div className="bg-indigo-600/10 border border-indigo-500/20 px-5 py-3 rounded-2xl rounded-tr-none max-w-[90%] md:max-w-[80%]">
                <p className="text-sm leading-relaxed">
                  How does the multi-modal sync work?
                </p>
              </div>
              <span className="text-[8px] font-black text-white/10 uppercase tracking-wider">
                User // 14:02
              </span>
            </div>

            {/* AI Response */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
                  <Command size={12} className="text-black" />
                </div>
                <span className="text-[13px] font-black uppercase tracking-wider text-indigo-400">
                  Cognify AI
                </span>
              </div>
              <div className="max-w-full md:max-w-[90%] bg-white/2 border border-white/5 p-5 rounded-2xl">
                <p className="text-sm text-white/80 leading-relaxed font-medium">
                  The architecture uses a spatial graphsync. It tokens text via
                  semantic weight while extracting visual features through
                  edge-detection tensors.
                </p>
              </div>
            </div>

            <div className="h-20" />
          </div>
        </div>

        {/* Floating Input Area */}
 

        <div className="p-8">
          <div className="max-w-3xl mx-auto relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-indigo-600/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />

            <div className="relative bg-[#080808] border border-white/10 rounded-3xl p-2 flex items-end backdrop-blur-xl focus-within:border-white/30 transition-all">
              <textarea
                rows="1"
                placeholder="Message Cognify..."
                className="w-full bg-transparent border-none outline-none px-6 py-4 text-sm font-medium placeholder:text-white/20 resize-none max-h-60"
              />
              <div className="flex items-center gap-2 p-2">
                <button className="p-3 text-white/20 hover:text-white transition-colors">
                  <Sparkles size={20} />
                </button>
                <button className="p-3 bg-white text-black rounded-2xl hover:bg-indigo-500 hover:text-white transition-all shadow-xl">
                  <SendHorizontal size={20} />
                </button>
              </div>
            </div>
            <p className="text-center text-[9px] font-bold text-white/10 uppercase tracking-widest mt-4">
              Neural Credits remaining: 84 // Reset in 4h
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
