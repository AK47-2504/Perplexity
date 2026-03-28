import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Check,
  HelpCircle,
  MessageSquare,
  Sparkles,
  Search,
  Zap,
  Shield,
  Layers,
  Cpu,
  ArrowRight,
  Globe,
  Command,
  Github,
  Twitter,
  Linkedin,
  Terminal,
  Plus,
} from "lucide-react";

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      id: 0,
      q: "Protocol Architecture",
      a: "Cognify runs on a proprietary 'Neural Pathing' engine. Unlike standard LLMs, it treats data as a spatial graph, allowing for 40% higher reasoning accuracy in technical tasks.",
    },
    {
      id: 1,
      q: "Data Sovereignty",
      a: "We employ Zero-Knowledge encryption. Your training data is encrypted at the hardware level. We cannot see it, and we definitely don't train on it.",
    },
    {
      id: 2,
      q: "API Synchronicity",
      a: "Quantum nodes get access to our low-latency gRPC and REST endpoints, allowing you to plug Cognify intelligence directly into your own production apps.",
    },
    {
      id: 3,
      q: "Neural Credits",
      a: "Think of credits as 'compute fuel'. Every complex synthesis consumes credits. Pro and Quantum tiers offer essentially unlimited throughput for standard workflows.",
    },
  ];
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500 selection:text-white overflow-x-hidden font-sans">
      {/* --- 1. NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center bg-linear-to-b from-[#050505] to-transparent">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <Command size={16} className="text-black" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase">
            Cognify
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
          <a href="#features" className="hover:text-white transition-colors">
            Protocol
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            Neural Net
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Nodes
          </a>
        </div>

        <Link to="/login">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-white/20 border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all"
          >
            Enter System
          </motion.button>
        </Link>
      </nav>

      {/* --- 2. HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center">
        {/* The Neural Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-150 bg-indigo-600/20 blur-[180px] rounded-full -z-10 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-8"
        >
          <Sparkles size={12} /> Intelligence v2.0 is live
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-[100px] font-black leading-[0.9] tracking-tighter mb-8"
        >
          TRANSFORMING
          <br />
          <span className="text-white/20 italic">INPUT</span> INTO
          <br />
          INTELLIGENCE.
        </motion.h1>

        {/* HERO COMMAND BAR (The Perplexity Vibe)
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-2xl relative group"
        >
          <div className="absolute inset-0 bg-indigo-500/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
          <div className="relative flex items-center bg-white/5 border border-white/10 p-2 rounded-3xl backdrop-blur-md focus-within:border-white/40 transition-all">
            <div className="p-4">
              <Search className="text-white/40" size={20} />
            </div>
            <input
              type="text"
              placeholder="Ask anything or input raw data..."
              className="bg-transparent border-none outline-none flex-1 text-lg font-medium placeholder:text-white/20"
            />
            <button className="px-6 py-3 bg-white text-black rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-50 transition-colors">
              Synthesize <Zap size={16} />
            </button>
          </div>
        </motion.div> */}
      </section>

      {/* --- 3. BENTO GRID FEATURES --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Feature Block */}
          <div className="md:col-span-8 h-[400px] bg-white/5 border border-white/10 rounded-[40px] p-10 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-30 transition-opacity group-hover:rotate-12 duration-500">
              <Cpu size={240} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <Layers className="text-white" size={24} />
              </div>
              <h3 className="text-4xl font-bold tracking-tight mb-4">
                Multi-Modal
                <br />
                Neural Processing
              </h3>
              <p className="max-w-sm text-white/50 font-medium">
                Process text, code, images, and raw datasets through a single
                cognitive interface.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40">
                Real-time
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40">
                Secure
              </span>
            </div>
          </div>

          {/* Side Small Block */}
          <div className="md:col-span-4 h-[400px] bg-indigo-600 rounded-[40px] p-10 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                <Shield className="text-white" size={24} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/60">
                Privacy Core
              </span>
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight mb-4 leading-none text-white">
                Zero-Knowledge Architecture.
              </h3>
              <p className="text-white/70 font-medium text-sm">
                Your data is yours. Cognify never trains on private inputs.
              </p>
            </div>
          </div>

          {/* Bottom Grid Rows */}
          <div className="md:col-span-4 h-[300px] bg-white border border-black/5 rounded-[40px] p-8 flex flex-col justify-between text-black">
            <Globe size={32} className="text-black/20" />
            <div>
              <h4 className="text-xl font-black uppercase tracking-tighter">
                Global Knowledge
              </h4>
              <p className="text-black/40 text-sm font-bold">
                Access live web sources and technical documentation instantly.
              </p>
            </div>
          </div>

          <div className="md:col-span-8 h-[300px] bg-white/5 border border-white/10 rounded-[40px] p-8 flex items-center justify-between group">
            <div className="max-w-xs">
              <h4 className="text-2xl font-bold tracking-tight mb-2">
                Automated Workflows
              </h4>
              <p className="text-white/40 text-sm font-medium">
                Deploy sub-agents to handle research, coding, and report
                generation while you focus.
              </p>
            </div>
            <motion.div
              whileHover={{ x: 10 }}
              className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/10 cursor-pointer"
            >
              <ArrowRight size={24} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 4. THE CALL TO ACTION --- */}
      <section className="py-40 px-6 text-center">
        <motion.div
          whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">
            READY TO SYNC?
          </h2>
          <Link to="/register">
            <button className="px-12 py-6 bg-white text-black rounded-3xl font-black uppercase tracking-[0.2em] text-sm hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/10">
              Create Neural Core
            </button>
          </Link>
        </motion.div>
      </section>

      <div className="bg-[#050505] text-white font-sans">
        {/* --- 5. SOCIAL PROOF / TRUST BAR --- */}
        <section className="py-24 relative overflow-hidden border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-16">
              Verified Architecture Deployment
            </p>
          </div>

          {/* --- INFINITE SCROLL CONTAINER --- */}
          <div
            className="flex relative w-full overflow-hidden"
            style={{
              // This creates the soft fade on the left and right corners
              maskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            }}
          >
            <motion.div
              className="flex flex-nowrap gap-16 md:gap-28 pr-16 md:pr-28 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 cursor-default"
              animate={{
                x: [0, -1920], // Adjust this number based on your total content width
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20, // Increase for slower, smoother scroll
                  ease: "linear",
                },
              }}
            >
              {/* We map the array twice to ensure the loop is perfectly seamless */}
              {[
                "NVIDIA",
                "OPENAI",
                "ANTHROPIC",
                "DEEPMIND",
                "VERCEL",
                "GROK",
                "KIMIAI",
                "CLAUDE",
                "PERPLEXITY",
                "ADIDAS",
                "NANOAI",
                "KODEX",
                "NVIDIA",
                "OPENAI",
                "ANTHROPIC",
                "DEEPMIND",
                "VERCEL",
                "GROK",
                "KIMIAI",
                "CLAUDE",
                "PERPLEXITY",
                "ADIDAS",
                "NANOAI",
                "KODEX",
              ].map((logo, index) => (
                <span
                  key={index}
                  className="text-2xl md:text-3xl font-black tracking-tighter whitespace-nowrap"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- 6. PRICING SECTION (The "Neural Nodes") --- */}
        <section id="pricing" className="py-32 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 italic">
                CHOOSE YOUR NODE
              </h2>
              <p className="text-white/40 font-medium max-w-xl mx-auto text-lg">
                Scale your intelligence as your data grows. Flexible neural
                credits for every architect.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* TIER 1: CORE */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-[40px] p-10 flex flex-col justify-between hover:border-white/30 transition-all"
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
                    Basic Protocol
                  </span>
                  <h3 className="text-4xl font-bold mt-4 mb-2">Core</h3>
                  <div className="text-5xl font-black tracking-tight mb-8">
                    $0<span className="ml-1 text-lg text-white/50">/month</span>
                  </div>
                  <ul className="space-y-4 mb-10">
                    {[
                      "Standard Neural Speed",
                      "100 Daily Synthesizes",
                      "Web Access Protocol",
                      "Basic Knowledge Graph",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm font-medium text-white/60"
                      >
                        <Check size={16} className="text-indigo-400" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full py-4 rounded-2xl border border-white/10 font-bold hover:bg-white hover:text-black transition-all">
                  Start Integration
                </button>
              </motion.div>

              {/* TIER 2: PRO (The "Featured" one) */}
              <motion.div
                initial={{ scale: 1.05 }}
                className="bg-white border-none rounded-[40px] p-10 flex flex-col justify-between text-black shadow-[0_0_50px_rgba(255,255,255,0.1)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8">
                  <Zap size={40} className="text-black/5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">
                    Enterprise Ready
                  </span>
                  <h3 className="text-4xl font-bold mt-4 mb-2">Pro</h3>
                  <div className="text-5xl font-black tracking-tight mb-8">
                    $20<span className="text-lg text-black/50">/month</span>
                  </div>
                  <ul className="space-y-4 mb-10">
                    {[
                      "Priority Neural Pathing",
                      "Unlimited Synthesizes",
                      "Multi-Modal Inputs (File/Image)",
                      "Private Context Window (128k)",
                      "Early Access to v3.0",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm font-bold"
                      >
                        <Check size={16} className="text-indigo-600" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full py-5 rounded-2xl bg-black text-white font-black uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl">
                  Upgrade Session
                </button>
              </motion.div>

              {/* TIER 3: QUANTUM */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-[40px] p-10 flex flex-col justify-between hover:border-white/30 transition-all"
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
                    Unlimited Power
                  </span>
                  <h3 className="text-4xl font-bold mt-4 mb-2">Quantum</h3>
                  <div className="text-5xl font-black tracking-tight mb-8">
                    $99<span className="text-lg text-white/50">/month</span>
                  </div>
                  <ul className="space-y-4 mb-10">
                    {[
                      "Dedicated Neural Compute",
                      "Custom Agent Deployment",
                      "API Endpoint Access",
                      "SLA Uptime Guarantee",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm font-medium text-white/60"
                      >
                        <Check size={16} className="text-indigo-400" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full py-4 rounded-2xl border border-white/10 font-bold hover:bg-white hover:text-black transition-all">
                  Contact Sales
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- 7. FAQ SECTION --- */}
        {/* FAQ Section */}
        <section id="faq" className="py-40 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {/* LEFT SIDE */}
              <div>
                <h2 className="text-6xl font-black tracking-tighter italic uppercase mb-8">
                  System <br />
                  Manifest.
                </h2>

                <p className="text-white/40 text-lg font-medium max-w-sm">
                  Frequently asked questions decoded for technical minds.
                </p>

                <div className="mt-12 flex flex-col gap-2">
                  {faqs.map((faq) => (
                    <button
                      key={faq.id}
                      onClick={() => setActiveFaq(faq.id)}
                      className={`text-left p-6 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex justify-between items-center ${
                        activeFaq === faq.id
                          ? "bg-white text-black translate-x-4"
                          : "bg-white/5 text-white/40 hover:bg-white/10"
                      }`}
                    >
                      {faq.q}
                      {activeFaq === faq.id && <ArrowRight size={16} />}
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 flex flex-col justify-center min-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFaq}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <Plus className="text-indigo-500" size={40} />

                    <h3 className="text-3xl font-black uppercase italic tracking-tighter">
                      {faqs.find((f) => f.id === activeFaq)?.q}
                    </h3>

                    <p className="text-white/50 text-xl font-medium leading-relaxed italic">
                      "{faqs.find((f) => f.id === activeFaq)?.a}"
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* --- 8. FINAL BOTTOM CTA --- */}

        <section className="py-24 px-6 relative border-t border-white/5 bg-[#050505] overflow-hidden">
          {/* Background: Subtle Radial Noise */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-[0.03] pointer-events-none" />

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-16">
            {/* LEFT SIDE: Typography & Action */}
            <div className="max-w-2xl relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
                  Live Collective
                </span>
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] uppercase mb-8">
                Join the <br />
                <span className="text-white/20 hover:text-indigo-500 transition-colors duration-500 cursor-default">
                  Architects
                </span>
              </h2>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-full overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Enter Discord{" "}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="px-8 py-4 bg-transparent border border-white/10 text-white font-black uppercase tracking-widest text-[10px] rounded-full transition-all"
                >
                  Manifesto
                </motion.button>
              </div>
            </div>

            {/* RIGHT SIDE: Minimal Status Terminal (The "Awwards" Detail) */}
            <div className="w-full lg:max-w-md">
              <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
                {[
                  { label: "Active Nodes", val: "12,402", trend: "+12%" },
                  { label: "Sync Latency", val: "4ms", trend: "Stable" },
                  { label: "Global Shards", val: "42", trend: "Online" },
                  { label: "Neural Load", val: "89%", trend: "High" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                    className="bg-[#080808] p-6 flex flex-col justify-between h-32"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-white/20">
                        {stat.label}
                      </span>
                      <span className="text-[8px] font-bold text-indigo-500">
                        {stat.trend}
                      </span>
                    </div>
                    <span className="text-2xl font-black tracking-tighter tabular-nums">
                      {stat.val}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p className="mt-6 text-[11px] font-medium text-white/30 leading-relaxed max-w-xs italic">
                "The architecture of intelligence is not built in isolation, but
                through collective synchronization."
              </p>
            </div>
          </div>

          {/* Aesthetic Floating Element */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] -z-10 rounded-full translate-x-1/2 -translate-y-1/2" />
        </section>
      </div>
      {/* --- FOOTER --- */}
      <footer className="bg-[#080808] pt-32 pb-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          {/* Brand Section */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Command size={16} className="text-black" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">
                Cognify
              </span>
            </div>

            <p className="text-white/30 font-medium max-w-xs mb-8">
              Building the architecture for the next era of synthetic
              intelligence. High-fidelity inputs, quantum-speed outputs.
            </p>

            <div className="flex gap-4">
              <Twitter
                size={18}
                className="text-white/20 hover:text-white cursor-pointer"
              />
              <Github
                size={18}
                className="text-white/20 hover:text-white cursor-pointer"
              />
              <Linkedin
                size={18}
                className="text-white/20 hover:text-white cursor-pointer"
              />
            </div>
          </div>

          {/* Product */}
          <div>
            <h5 className="text-[15px] font-black uppercase tracking-widest text-indigo-500 mb-6">
              Product
            </h5>
            <ul className="space-y-4 text-s font-bold text-white/40">
              <li className="hover:text-white cursor-pointer transition-colors">
                Neural Engine
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Multi-Modal
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Pricing
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Releases
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-[15px] font-black uppercase tracking-widest text-indigo-500 mb-6">
              Resources
            </h5>
            <ul className="space-y-4 text-s font-bold text-white/40">
              <li className="hover:text-white cursor-pointer transition-colors">
                Documentation
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                API Keys
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                System Status
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Open Source
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-[15px] font-black uppercase tracking-widest text-indigo-500 mb-6">
              Company
            </h5>
            <ul className="space-y-4 text-s  font-bold text-white/40">
              <li className="hover:text-white cursor-pointer transition-colors">
                About Us
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Careers
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Privacy
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Security
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-[15px] font-black uppercase tracking-widest text-indigo-500 mb-6">
              Legal
            </h5>
            <ul className="space-y-4 text-s font-bold text-white/40">
              <li className="hover:text-white cursor-pointer transition-colors">
                Terms
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Ethics
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Compliance
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-white/10">
            © 2026 Cognify Labs // Established SF/LON
          </p>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500/50">
              All Systems Operational
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Home;
