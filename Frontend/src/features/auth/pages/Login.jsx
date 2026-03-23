import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, Navigate } from "react-router";
import {
  Fingerprint,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import { useSelector } from "react-redux";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await handleLogin({ email, password });

      // safer navigation check
      if (res?.success || res?.user) {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  // already logged in → redirect
  if (!loading && user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex">
      {/* LEFT SIDE */}
      {/* --- LEFT SIDE: THE BRAND MANIFESTO --- */}
      <div className="hidden lg:flex w-1/2 bg-white relative flex-col justify-between p-16 overflow-hidden">
        {/* Animated Grid Overlay for Depth */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-2">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <Sparkles size={20} className="text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-black uppercase">
            Cognify
          </span>
        </div>

        {/* Hero Text */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[80px] leading-[0.85] font-black text-black tracking-tighter">
              ACCESS <br />
              <span className="text-indigo-500 italic text-[70px]">
                INTELLIGENCE
              </span>
              <br />
              INSTANTLY.
            </h1>
          </motion.div>

          <p className="mt-8 text-black/60 font-medium max-w-sm">
            Resume your session. Continue transforming complex data into
            actionable wisdom.
          </p>
        </div>

        {/* Footer Info */}
        <div className="relative z-10 flex gap-8 text-[10px] font-bold tracking-[0.3em] text-black/40 uppercase">
          <span>Latency: 12ms</span>
          <span>Encryption: AES-256</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <main className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md"
        >
          <h2 className="text-3xl font-bold  mb-2 italic">Welcome Back</h2>
          <p className="text-gray-400 mb-6"> Synchronize your identity to enter.</p>

          <form onSubmit={submitForm} className="space-y-4">
            {/* EMAIL */}
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
              <Mail size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
                className="bg-transparent outline-none w-full"
              />
            </div>

            {/* PASSWORD */}
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
              <Lock size={18} />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="bg-transparent outline-none w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {/* ERROR */}
            {error && (
              <div className="bg-red-500/10 text-red-500 p-3 rounded-lg flex gap-2 text-sm">
                <AlertCircle size={16} />
                {error}
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black py-3 rounded-xl font-bold flex justify-center items-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  Login <Fingerprint size={18} />
                </>
              )}
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-400 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-white underline">
              Register
            </Link>
          </p>
        </motion.div>
        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col gap-6">
          <p className="text-center text-sm text-slate-500 font-medium">
            Identity missing?
            <Link
              to="/register"
              className="text-white font-bold hover:underline underline-offset-8 ml-2"
            >
              Create Neural Core
            </Link>
          </p>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3.5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Google Sync
            </button>
            <button className="flex items-center justify-center gap-2 py-3.5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              GitHub Auth
            </button>
          </div>
        </div>

        {/* FOOTER DECOR */}
        <div className="absolute top-8 right-8 hidden lg:flex items-center gap-4 opacity-20 pointer-events-none">
          <div className="text-right">
            <p className="text-[8px] font-black uppercase leading-none">
              Status
            </p>
            <p className="text-[10px] font-medium text-emerald-500">
              SECURE_CHANNEL_READY
            </p>
          </div>
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </main>
    </div>
  );
};

export default Login;
