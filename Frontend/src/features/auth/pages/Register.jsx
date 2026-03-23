import React, { useState } from "react";
import { Link } from "react-router";
// import { motion, AnimatePresence } from "framer-motion";

// import {
//   Mail,
//   Lock,
//   User,
//   ArrowRight,
//   Loader2,
//   Sparkles,
//   CheckCircle2,
// } from "lucide-react";

// const Register = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSent, setIsSent] = useState(false); // Controls the "Verify Email" View

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const Navigate = useNavigate();
//   //   const { handleRegister } = useAuth();

//   const submitForm = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     const payload = {
//       username,
//       email,
//       password,
//     };
//     Navigate("/login");
//     // await handleRegister(payload);
//     console.log(payload);
//   };

//   return (
//     <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-white selection:text-black overflow-hidden flex">
//       {/* --- LEFT SIDE: KINETIC TAGLINE (Desktop) --- */}
//       <div className="hidden lg:flex w-1/2 bg-white relative flex-col justify-between p-16">
//         <div className="relative z-10 flex items-center gap-2">
//           <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
//             <Sparkles size={20} className="text-white" />
//           </div>
//           <span className="text-2xl font-black tracking-tighter text-black uppercase">
//             Cognify
//           </span>
//         </div>

//         <div className="relative z-10">
//           <motion.h1
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="text-[80px] leading-[0.85] font-black text-black tracking-tighter"
//           >
//             TRANSFORMING
//             <br />
//             <span className="text-black/20 italic">INPUT</span> INTO
//             <br />
//             INTELLIGENCE
//           </motion.h1>
//           <p className="mt-8 text-black/60 font-medium max-w-sm">
//             The neural interface for high-performance data processing. Start
//             your cognitive journey today.
//           </p>
//         </div>

//         <div className="relative z-10 text-[10px] font-bold tracking-[0.3em] text-black/40 uppercase">
//           Core Version // 2.0.26 // Secure Protocol
//         </div>
//       </div>

//       {/* --- RIGHT SIDE: REGISTRATION ENGINE --- */}
//       <main className="w-full lg:w-1/2 flex items-center justify-center p-6 relative">
//         {/* Subtle Neural Grid Background */}
//         <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)]  bg-size-[24px_24px]"></div>

//         <AnimatePresence mode="wait">
//           {!isSent ? (
//             /* REGISTRATION FORM */
//             <motion.div
//               key="form"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               className="w-full max-w-100 z-10"
//             >
//               <div className="mb-10 lg:hidden">
//                 <span className="text-xl font-black tracking-tighter uppercase">
//                   Cognify
//                 </span>
//               </div>

//               <div className="mb-8">
//                 <h2 className="text-4xl italic font-bold tracking-tight mb-2">
//                   Initialize Core
//                 </h2>
//                 <p className="text-slate-500 font-medium">
//                   Create your neural identity to begin.
//                 </p>
//               </div>

//               <form onSubmit={submitForm} className="space-y-4">
//                 {/* USERNAME */}
//                 <div className="group">
//                   <div className="flex items-center gap-3 px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus-within:border-white focus-within:bg-white/10 transition-all">
//                     <User
//                       size={18}
//                       className="text-slate-500 group-focus-within:text-white"
//                     />
//                     <input
//                       value={username}
//                       onChange={(event) => setUsername(event.target.value)}
//                       required
//                       type="text"
//                       placeholder="Username"
//                       className="bg-transparent border-none outline-none w-full font-medium placeholder:text-slate-600"
//                     />
//                   </div>
//                 </div>

//                 {/* EMAIL */}
//                 <div className="group">
//                   <div className="flex items-center gap-3 px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus-within:border-white focus-within:bg-white/10 transition-all">
//                     <Mail
//                       size={18}
//                       className="text-slate-500 group-focus-within:text-white"
//                     />
//                     <input
//                       value={email}
//                       onChange={(event) => setEmail(event.target.value)}
//                       required
//                       type="email"
//                       placeholder="Email Address"
//                       className="bg-transparent border-none outline-none w-full font-medium placeholder:text-slate-600"
//                     />
//                   </div>
//                 </div>

//                 {/* PASSWORD */}
//                 <div className="group">
//                   <div className="flex items-center gap-3 px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus-within:border-white focus-within:bg-white/10 transition-all">
//                     <Lock
//                       size={18}
//                       className="text-slate-500 group-focus-within:text-white"
//                     />
//                     <input
//                       value={password}
//                       onChange={(event) => setPassword(event.target.value)}
//                       required
//                       type="password"
//                       placeholder="Password"
//                       className="bg-transparent border-none outline-none w-full font-medium placeholder:text-slate-600"
//                     />
//                   </div>
//                 </div>

//                 <button
//                   disabled={isSubmitting}
//                   className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-200 transition-all active:scale-[0.98] mt-6 relative overflow-hidden disabled:opacity-50"
//                 >
//                   {isSubmitting ? (
//                     <Loader2 className="animate-spin" size={20} />
//                   ) : (
//                     <>
//                       Begin Integration
//                       <ArrowRight size={20} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <p className="mt-8 text-center text-sm text-slate-500 font-medium">
//                 Already have an identity?{" "}
//                 <button className="text-white hover:underline underline-offset-4 ml-2">
//                   <Link to={"/"}>Synchronize</Link>
//                 </button>
//               </p>
//             </motion.div>
//           ) : (
//             /* VERIFICATION PENDING VIEW */
//             <motion.div
//               key="sent"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="text-center w-full max-w-110 z-10"
//             >
//               <div className="mb-8 flex justify-center">
//                 <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
//                   <motion.div
//                     animate={{ rotateY: [0, 180, 360] }}
//                     transition={{
//                       duration: 4,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                   >
//                     <CheckCircle2 size={48} className="text-white" />
//                   </motion.div>
//                 </div>
//               </div>
//               <h2 className="text-4xl font-bold tracking-tight mb-4">
//                 Verification Sent
//               </h2>
//               <p className="text-slate-400 text-lg mb-8 leading-relaxed">
//                 A verification link has been dispatched to your neural address.
//                 <span className="text-white block mt-2 font-bold italic underline">
//                   Verification is required
//                 </span>{" "}
//                 before system access is granted.
//               </p>

//               <div className="p-6 bg-white/5 rounded-4xl border border-white/10 space-y-4">
//                 <div className="flex items-center gap-4 text-left">
//                   <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shrink-0">
//                     1
//                   </div>
//                   <p className="text-sm font-medium">
//                     Check your Email inbox for the Cognify link.
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-4 text-left">
//                   <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shrink-0">
//                     2
//                   </div>
//                   <p className="text-sm font-medium">
//                     Click to authenticate your session.
//                   </p>
//                 </div>
//               </div>

//               <button
//                 onClick={() => setIsSent(false)}
//                 className="mt-10 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
//               >
//                 ← Back to Registration
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </main>

//       {/* FOOTER DECOR */}
//       <div className="absolute bottom-8 left-8 hidden lg:block overflow-hidden h-4">
//         <motion.div
//           animate={{ x: [-100, 100] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//           className="text-[8px] font-black uppercase tracking-[1em] text-black/10 whitespace-nowrap"
//         >
//           COGNIFY ENGINE // NEURAL DATA STREAM // VERIFYING IDENTITY // COGNIFY
//           ENGINE // NEURAL DATA STREAM
//         </motion.div>
//       </div>
//     </div>
//   );
// };

const Register = () => {
  // Two way Binding
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <section className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[85vh] w-full max-w-5xl items-center justify-center">
        <div className="w-full max-w-md rounded-2xl border border-[#31b8c6]/40 bg-zinc-900/70 p-8 shadow-2xl shadow-black/50 backdrop-blur">
          <h1 className="text-3xl font-bold text-[#31b8c6]">Create Account</h1>
          <p className="mt-2 text-sm text-zinc-300">
            Register with your username, email, and password.
          </p>

          <form onSubmit={submitForm} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-zinc-200"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Choose a username"
                required
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950/80 px-4 py-3 text-zinc-100 outline-none ring-0 transition focus:border-[#31b8c6] focus:shadow-[0_0_0_3px_rgba(49,184,198,0.25)]"
              />
            </div>

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
                placeholder="Create a password"
                required
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950/80 px-4 py-3 text-zinc-100 outline-none ring-0 transition focus:border-[#31b8c6] focus:shadow-[0_0_0_3px_rgba(49,184,198,0.25)]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#31b8c6] px-4 py-3 font-semibold text-zinc-950 transition hover:bg-[#45c7d4] focus:outline-none focus:shadow-[0_0_0_3px_rgba(49,184,198,0.35)]"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#31b8c6] transition hover:text-[#45c7d4]"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
