import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Link, useNavigate } from "react-router";
// import {
//   Fingerprint,
//   ArrowRight,
//   Mail,
//   Lock,
//   Eye,
//   EyeOff,
//   Loader2,
//   Sparkles,
//   AlertCircle,
// } from "lucide-react";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState(null); // Used to show "Verification Required"

//   const Navigate = useNavigate();

//   const user = useSelector((state) => state.auth.user);
//   const loading = useSelector((state) => state.auth.loading);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { handleLogin } = useAuth();

//   const submitForm = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError(null);
//     const payload = {
//       email,
//       password,
//     };

//     await handleLogin(payload);

//     Navigate("/dashboard");
//   };

//   if (!loading && user) {
//     return <Navigate to="/" replace />;
//   }

//   return (
//     <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-white selection:text-black flex">
//       {/* --- LEFT SIDE: THE BRAND MANIFESTO --- */}
//       <div className="hidden lg:flex w-1/2 bg-white relative flex-col justify-between p-16 overflow-hidden">
//         {/* Animated Grid Overlay for Depth */}
//         <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />

//         <div className="relative z-10 flex items-center gap-2">
//           <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
//             <Sparkles size={20} className="text-white" />
//           </div>
//           <span className="text-2xl font-black tracking-tighter text-black uppercase">
//             Cognify
//           </span>
//         </div>

//         <div className="relative z-10">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <h1 className="text-[80px] leading-[0.85] font-black text-black tracking-tighter">
//               ACCESS
//               <br />
//               <span className="text-black/20 italic text-[70px]">
//                 INTELLIGENCE
//               </span>
//               <br />
//               INSTANTLY.
//             </h1>
//           </motion.div>
//           <p className="mt-8 text-black/60 font-medium max-w-sm">
//             Resume your session. Continue transforming complex data into
//             actionable wisdom.
//           </p>
//         </div>

//         <div className="relative z-10 flex gap-8 text-[10px] font-bold tracking-[0.3em] text-black/40 uppercase">
//           <span>LATENCY: 12ms</span>
//           <span>ENCRYPTION: AES-256</span>
//         </div>
//       </div>

//       {/* --- RIGHT SIDE: THE HANDSHAKE (Login Form) --- */}
//       <main className="w-full lg:w-1/2 flex items-center justify-center p-6 relative">
//         <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size:[32px_32px]"></div>

//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="w-full max-w-100 z-10"
//         >
//           <div className="mb-10 lg:hidden">
//             <span className="text-xl font-black tracking-tighter uppercase">
//               Cognify
//             </span>
//           </div>

//           <div className="mb-10">
//             <h2 className="text-4xl font-bold tracking-tight mb-2 italic">
//               Welcome Back
//             </h2>
//             <p className="text-slate-500 font-medium tracking-tight">
//               Synchronize your identity to enter.
//             </p>
//           </div>

//           <form onSubmit={submitForm} className="space-y-4">
//             {/* EMAIL INPUT */}
//             <div className="group">
//               <div className="flex items-center gap-3 px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus-within:border-white focus-within:bg-white/10 transition-all duration-300">
//                 <Mail
//                   size={18}
//                   className="text-slate-500 group-focus-within:text-white"
//                 />
//                 <input
//                   value={email}
//                   onChange={(event) => setEmail(event.target.value)}
//                   required
//                   type="email"
//                   placeholder="Neural Address (Email)"
//                   className="bg-transparent border-none outline-none w-full font-medium placeholder:text-slate-600"
//                 />
//               </div>
//             </div>

//             {/* PASSWORD INPUT */}
//             <div className="group">
//               <div className="flex items-center gap-3 px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus-within:border-white focus-within:bg-white/10 transition-all duration-300">
//                 <Lock
//                   size={18}
//                   className="text-slate-500 group-focus-within:text-white"
//                 />
//                 <input
//                   value={password}
//                   onChange={(event) => setPassword(event.target.value)}
//                   required
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Secret Key"
//                   className="bg-transparent border-none outline-none w-full font-medium placeholder:text-slate-600"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="text-slate-500 hover:text-white"
//                 >
//                   {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                 </button>
//               </div>
//             </div>

//             {/* Error Message Display */}
//             {error && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl flex items-start gap-3 text-xs font-bold leading-relaxed tracking-tight"
//               >
//                 <AlertCircle size={14} className="shrink-0 mt-0.5" />
//                 <span>{error}</span>
//               </motion.div>
//             )}

//             <button
//               disabled={isSubmitting}
//               className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:invert transition-all active:scale-[0.98] mt-6 disabled:opacity-50"
//             >
//               {isSubmitting ? (
//                 <Loader2 className="animate-spin" size={20} />
//               ) : (
//                 <>
//                   Establish Link
//                   <Fingerprint size={20} />
//                 </>
//               )}
//             </button>
//           </form>

//           <div className="mt-12 pt-8 border-t border-white/5 flex flex-col gap-6">
//             <p className="text-center text-sm text-slate-500 font-medium">
//               Identity missing?{" "}
//               <button className="text-white font-bold hover:underline underline-offset-8 ml-2">
//                 <Link to={"/register"}>Create Neural Core</Link>
//               </button>
//             </p>

//             <div className="grid grid-cols-2 gap-4">
//               <button className="flex items-center justify-center gap-2 py-3.5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
//                 Google Sync
//               </button>
//               <button className="flex items-center justify-center gap-2 py-3.5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
//                 GitHub Auth
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </main>

//       {/* FOOTER DECOR */}
//       <div className="absolute top-8 right-8 hidden lg:flex items-center gap-4 opacity-20 pointer-events-none">
//         <div className="text-right">
//           <p className="text-[8px] font-black uppercase leading-none">Status</p>
//           <p className="text-[10px] font-medium text-emerald-500">
//             SECURE_CHANNEL_READY
//           </p>
//         </div>
//         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//       </div>
//     </div>
//   );
// };

import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";

const Login = () => {
  // Two Way Binding
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  const { handleLogin } = useAuth();

  const navigate = useNavigate();

  const submitForm = async (event) => {
    event.preventDefault();

    // konse data ka use hin
    const payload = {
      email,
      password,
    };

    await handleLogin(payload);
    navigate("/dashboard");
  };

  if (!loading && user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <section className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[85vh] w-full max-w-5xl items-center justify-center">
        <div className="w-full max-w-md rounded-2xl border border-[#31b8c6]/40 bg-zinc-900/70 p-8 shadow-2xl shadow-black/50 backdrop-blur">
          <h1 className="text-3xl font-bold text-[#31b8c6]">Welcome Back</h1>
          <p className="mt-2 text-sm text-zinc-300">
            Sign in with your email and password.
          </p>

          <form onSubmit={submitForm} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-zinc-200"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950/80 px-4 py-3 text-zinc-100 outline-none ring-0 transition focus:border-[#31b8c6] focus:shadow-[0_0_0_3px_rgba(49,184,198,0.25)]"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-zinc-200"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                required
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950/80 px-4 py-3 text-zinc-100 outline-none ring-0 transition focus:border-[#31b8c6] focus:shadow-[0_0_0_3px_rgba(49,184,198,0.25)]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#31b8c6] px-4 py-3 font-semibold text-zinc-950 transition hover:bg-[#45c7d4] focus:outline-none focus:shadow-[0_0_0_3px_rgba(49,184,198,0.35)]"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-300">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#31b8c6] transition hover:text-[#45c7d4]"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Login;
