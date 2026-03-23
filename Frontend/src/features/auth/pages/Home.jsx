import React from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

const Home = () => {
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

        {/* HERO COMMAND BAR (The Perplexity Vibe) */}
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
        </motion.div>
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
        <section className="py-20 border-y border-white/5 bg-white/1">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-12 text-balance">
              Trusted by architects at industry leaders
            </p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
              {["NVIDIA", "OPENAI", "ANTHROPIC", "DEEPMIND", "VERCEL"].map(
                (logo) => (
                  <span
                    key={logo}
                    className="text-xl font-black tracking-tighter"
                  >
                    {logo}
                  </span>
                ),
              )}
            </div>
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
                  <div className="text-5xl font-black tracking-tighter mb-8">
                    $0<span className="text-lg text-white/20">/mo</span>
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
                  <div className="text-5xl font-black tracking-tighter mb-8">
                    $20<span className="text-lg text-black/20">/mo</span>
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
                  <div className="text-5xl font-black tracking-tighter mb-8">
                    $99<span className="text-lg text-white/20">/mo</span>
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
        <section className="py-32 bg-white/1 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <HelpCircle className="text-indigo-500" size={32} />
              <h2 className="text-4xl font-black tracking-tight uppercase">
                Protocol Queries
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How does Cognify differ from other LLMs?",
                  a: "Cognify utilizes a proprietary Neural Pathing engine that prioritizes factual grounding and real-time data synthesis over simple predictive text.",
                },
                {
                  q: "Is my input data used for training?",
                  a: "For Pro and Quantum users, we operate under a Zero-Training Protocol. Your neural inputs never leave your secure context.",
                },
                {
                  q: "Can I integrate Cognify with my existing stack?",
                  a: "Yes. Our Quantum tier provides full REST API access and SDKs for Python, Node, and Rust.",
                },
                {
                  q: "What is a 'Neural Credit'?",
                  a: "A credit represents a unit of compute used to transform complex inputs into intelligence. Basic users get 100 per day.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group border border-white/5 bg-white/5 rounded-3xl p-6 hover:border-white/20 transition-all cursor-pointer"
                >
                  <summary className="list-none flex justify-between items-center text-lg font-bold tracking-tight">
                    {faq.q}
                    <span className="group-open:rotate-180 transition-transform">
                      <ArrowRight size={20} className="rotate-90" />
                    </span>
                  </summary>
                  <p className="mt-4 text-white/40 font-medium leading-relaxed italic">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* --- 8. FINAL BOTTOM CTA --- */}
        <section className="py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-white/2 -skew-y-3" />
          <div className="relative z-10 flex flex-col items-center">
            <MessageSquare size={48} className="mb-8 text-indigo-500" />
            <h2 className="text-4xl font-black uppercase tracking-widest mb-4 italic">
              Still skeptical?
            </h2>
            <p className="text-white/40 mb-10 max-w-sm font-medium">
              Try our free core engine today and feel the intelligence
              transformation yourself.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-2xl hover:invert transition-all">
                Join Discord
              </button>
              <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white hover:text-black transition-all">
                Read Docs
              </button>
            </div>
          </div>
        </section>
      </div>
      {/* --- FOOTER --- */}
      <footer className="p-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Command size={20} />
          <span className="font-black uppercase tracking-tighter">Cognify</span>
        </div>
        <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">
          © 2026 Cognify Labs. All rights reserved.
        </div>
        <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-white/40">
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
          <a href="#">Discord</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
