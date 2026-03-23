```FINAL BOTTOM CTA DESIGN 1
<section className="py-40 px-6 relative overflow-hidden">
       {/* Background Decor: Animated Beam */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent blur-sm" />

       <div className="relative z-10 max-w-5xl mx-auto">
         <div className="bg-white/[0.02] border border-white/10 rounded-[50px] p-12 md:p-24 backdrop-blur-3xl relative overflow-hidden group">
           {/* Decorative Grid Background */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />

           <div className="flex flex-col items-center text-center relative z-20">
             <div className="mb-8 relative">
               <motion.div
                 animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="absolute inset-0 bg-indigo-500 blur-2xl rounded-full"
               />
               <div className="relative w-20 h-20 bg-[#050505] border border-white/20 rounded-3xl flex items-center justify-center shadow-2xl">
                 <MessageSquare size={32} className="text-white" />
               </div>
             </div>

             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic">
               Enter the <span className="text-indigo-500">Collective.</span>
             </h2>

             <p className="text-white/40 mb-12 max-w-md font-medium text-lg leading-relaxed">
               Join 50k+ architects building the future of synthetic
               intelligence. Access early builds and hardware-level
               documentation.
             </p>

             <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
               <motion.button
                 whileHover={{ y: -5, scale: 1.02 }}
                 className="px-10 py-5 bg-indigo-600 text-white font-black uppercase tracking-[0.2em] text-[11px] rounded-2xl flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(79,70,229,0.3)] hover:bg-indigo-500 transition-all"
               >
                 Join Discord Community <ArrowRight size={16} />
               </motion.button>

               <motion.button
                 whileHover={{ y: -5, scale: 1.02 }}
                 className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-[0.2em] text-[11px] rounded-2xl flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all"
               >
                 Developer Manifest
               </motion.button>
             </div>

             {/* Stats Row */}
             <div className="mt-16 pt-16 border-t border-white/5 w-full grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { label: "Active Nodes", val: "12.4k" },
                 { label: "Daily Syncs", val: "1.2M" },
                 { label: "Neural Uptime", val: "99.9%" },
                 { label: "Global Shards", val: "42" },
               ].map((stat, i) => (
                 <div key={i} className="flex flex-col items-center">
                   <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">
                     {stat.label}
                   </span>
                   <span className="text-2xl font-black tracking-tighter">
                     {stat.val}
                   </span>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>
     </section>
```

```FINAL BOTTOM CTA DESIGN 2
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

```
