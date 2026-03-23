import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  Loader2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { useSelector } from "react-redux";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { handleRegister } = useAuth();

  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  const submitForm = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(null);

    const payload = {
      username,
      email,
      password,
    };

    try {
      const res = await handleRegister(payload);

      // show verification UI instead of redirect
      if (res?.success || res?.user) {
        setIsSent(true);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  // already logged in
  if (!loading && user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-white selection:text-black overflow-hidden flex">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 bg-white relative flex-col justify-between p-16">
        <div className="relative z-10 flex items-center gap-2">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <Sparkles size={20} className="text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-black uppercase">
            Cognify
          </span>
        </div>

        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[80px] leading-[0.85] font-black text-black tracking-tighter"
          >
            TRANSFORMING
            <br />
            <span className="text-indigo-500 italic">INPUT</span> INTO
            <br />
            INTELLIGENCE
          </motion.h1>
          <p className="mt-8 text-black/60 font-medium max-w-sm">
            The neural interface for high-performance data processing.
          </p>
        </div>

        <div className="relative z-10 text-[10px] font-bold tracking-[0.3em] text-black/40 uppercase">
          Core Version // 2.0.26 // Secure Protocol
        </div>
      </div>

      {/* RIGHT SIDE */}
      <main className="w-full lg:w-1/2 flex items-center justify-center p-6 relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[24px_24px]"></div>

        <AnimatePresence mode="wait">
          {!isSent ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-100 z-10"
            >
              <div className="mb-10 lg:hidden">
                <span className="text-xl font-black tracking-tighter uppercase">
                  Cognify
                </span>
              </div>

              <div className="mb-8">
                <h2 className="text-4xl italic font-bold tracking-tight mb-2">
                  Initialize Core
                </h2>
                <p className="text-slate-500 font-medium">
                  Create your neural identity to begin.
                </p>
              </div>

              <form onSubmit={submitForm} className="space-y-4">
                {/* USERNAME */}
                <div className="group">
                  <div className="flex items-center gap-3 px-5 py-4 bg-white/5 border border-white/10 rounded-2xl">
                    <User size={18} className="text-slate-500" />
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      type="text"
                      placeholder="Username"
                      className="bg-transparent border-none outline-none w-full"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div className="group">
                  <div className="flex items-center gap-3 px-5 py-4 bg-white/5 border border-white/10 rounded-2xl">
                    <Mail size={18} className="text-slate-500" />
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      type="email"
                      placeholder="Email Address"
                      className="bg-transparent border-none outline-none w-full"
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div className="group">
                  <div className="flex items-center gap-3 px-5 py-4 bg-white/5 border border-white/10 rounded-2xl">
                    <Lock size={18} className="text-slate-500" />
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      type="password"
                      placeholder="Password"
                      className="bg-transparent border-none outline-none w-full"
                    />
                  </div>
                </div>

                {/* ERROR */}
                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  disabled={isSubmitting}
                  className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      Begin Integration
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-slate-500 font-medium">
                Already have an identity?{" "}
                <Link to="/login" className="text-white underline ml-2">
                  Synchronize
                </Link>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="sent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center w-full max-w-110 z-10"
            >
              <div className="mb-8 flex justify-center">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <CheckCircle2 size={48} className="text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-4">Verification Sent</h2>
              <p className="text-slate-400 mb-8">
                Check your email to verify your account.
              </p>

              <button
                onClick={() => navigate("/login")}
                className="text-sm underline"
              >
                Go to Login
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Register;
