import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Smartphone, 
  ShieldCheck, 
  FileText, 
  ExternalLink, 
  Sparkles, 
  CheckCircle, 
  Globe, 
  Mail, 
  Download,
  Mic,
  Heart,
  Volume2,
  Calendar,
  Languages,
  ArrowRight,
  Sparkle
} from "lucide-react";
import InteractiveMockup from "./components/InteractiveMockup";
import LegalModal from "./components/LegalModal";

// Path to the generated app logo asset
const appLogo = "/src/assets/images/app_logo_1780227292474.png";

export default function App() {
  // Sync state between landing page and the interactive mock phone
  const [themeColor, setThemeColor] = useState<"slate-blue" | "ocean" | "charcoal" | "aurora">("slate-blue");
  const [legalOpen, setLegalOpen] = useState<boolean>(false);
  const [legalDefaultTab, setLegalDefaultTab] = useState<"privacy" | "terms">("privacy");
  const [storeToast, setStoreToast] = useState<string | null>(null);

  const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.glazer.audio.journal.voice.diary";

  const triggerStoreDownload = (storeName: string) => {
    setStoreToast(`Redirecting directly to the ${storeName} to view and install Voice Diary. Thank you for your support! 🎯`);
    setTimeout(() => {
      setStoreToast(null);
      // Actual redirection for Google Play Store, friendly alert for others
      if (storeName === "Google Play Store") {
        window.open(googlePlayUrl, "_blank", "noopener,noreferrer");
      }
    }, 2800);
  };

  const openLegal = (tab: "privacy" | "terms") => {
    setLegalDefaultTab(tab);
    setLegalOpen(true);
  };

  // Color theme variables based on Voice Diary's beautiful presentation
  const themeStyles = {
    "slate-blue": {
      bg: "bg-slate-50 dark:bg-[#111A24]",
      accentBg: "bg-sky-50 dark:bg-sky-950/30 text-sky-700 dark:text-sky-300",
      pill: "border-sky-100 bg-sky-50/50 text-sky-700 dark:border-sky-900/30 dark:bg-sky-950/20 dark:text-sky-300",
      heading: "bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent",
      badgeBorder: "hover:border-sky-300 hover:shadow-sky-500/5",
      glow: "bg-sky-500/10",
      button: "bg-sky-600 hover:bg-sky-700 text-white shadow-sky-200 dark:shadow-none hover:shadow-lg focus:ring-sky-500"
    },
    ocean: {
      bg: "bg-slate-50 dark:bg-[#0B1520]",
      accentBg: "bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300",
      pill: "border-teal-100 bg-teal-50/50 text-teal-700 dark:border-teal-900/30 dark:bg-teal-950/20 dark:text-teal-300",
      heading: "bg-gradient-to-r from-teal-600 via-[#4FADBD] to-sky-600 bg-clip-text text-transparent",
      badgeBorder: "hover:border-teal-300 hover:shadow-teal-500/5",
      glow: "bg-teal-500/10",
      button: "bg-teal-600 hover:bg-teal-700 text-white shadow-teal-200 dark:shadow-none hover:shadow-lg focus:ring-teal-500"
    },
    charcoal: {
      bg: "bg-slate-50 dark:bg-[#1A1A1A]",
      accentBg: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300",
      pill: "border-slate-200 bg-slate-100 text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200",
      heading: "bg-gradient-to-r from-slate-700 via-slate-500 to-slate-900 dark:from-white dark:via-slate-300 dark:to-slate-400 bg-clip-text text-transparent",
      badgeBorder: "hover:border-slate-400 hover:shadow-slate-500/5",
      glow: "bg-slate-400/10",
      button: "bg-slate-800 hover:bg-slate-900 dark:bg-white dark:text-slate-900 text-white shadow-sm focus:ring-slate-500"
    },
    aurora: {
      bg: "bg-slate-50 dark:bg-[#121E19]",
      accentBg: "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300",
      pill: "border-emerald-100 bg-emerald-50/50 text-emerald-700 dark:border-emerald-900/30 dark:bg-emerald-950/20 dark:text-emerald-300",
      heading: "bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-500 bg-clip-text text-transparent",
      badgeBorder: "hover:border-emerald-300 hover:shadow-emerald-500/5",
      glow: "bg-emerald-500/10",
      button: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200 dark:shadow-none hover:shadow-lg focus:ring-emerald-500"
    }
  };

  const scheme = themeStyles[themeColor];

  return (
    <div className={`min-h-screen ${scheme.bg} text-slate-900 dark:text-slate-100 font-sans selection:bg-sky-200/40 transition-colors duration-300 relative overflow-hidden`}>
      
      {/* Absolute Decorative Background Glows consistent with Voice Diary's UI design */}
      <div className="absolute top-[-250px] left-[-200px] w-[500px] h-[500px] rounded-full bg-sky-500/10 dark:bg-sky-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[180px] right-[-250px] w-[700px] h-[700px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-[140px] pointer-events-none" />

      {/* Landing Page Sticky Header */}
      <header className="sticky top-0 z-40 w-full bg-white/75 dark:bg-slate-950/75 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-0.5 shadow-sm flex items-center justify-center">
              <div className="w-full h-full rounded-[10px] bg-sky-100 dark:bg-slate-950 flex items-center justify-center">
                <Mic className="w-4.5 h-4.5 text-sky-600 dark:text-sky-400" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">Voice Diary</span>
              <span className="text-[9px] block text-sky-600 dark:text-sky-400 uppercase tracking-widest font-bold">Interactive Showcase</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-500 dark:text-slate-400">
            <button 
              id="header-nav-features"
              onClick={() => {
                document.getElementById("features-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              App Features
            </button>
            <button 
              id="header-nav-play"
              onClick={() => {
                document.getElementById("simulator-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Mock Device Simulator
            </button>
            <button 
              id="header-nav-privacy"
              onClick={() => openLegal("privacy")}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              id="header-nav-terms"
              onClick={() => openLegal("terms")}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <a
              id="google-play-header-download"
              href={googlePlayUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 bg-sky-600 hover:bg-sky-700 text-white dark:bg-white dark:text-slate-950 rounded-xl text-xs font-bold hover:opacity-95 transition-all shadow-sm flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get on Google Play</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20">
        
        {/* Play Store Toast notification indicator */}
        <AnimatePresence>
          {storeToast && (
            <motion.div 
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed bottom-6 left-4 right-4 md:left-auto md:right-8 md:max-w-md z-50 bg-slate-950 dark:bg-white text-white dark:text-slate-950 p-4.5 rounded-2xl shadow-2xl flex gap-3 border border-white/10 dark:border-slate-200/20"
            >
              <div className="p-2 bg-sky-500/10 text-sky-400 dark:text-sky-600 rounded-xl max-h-10">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">Service Redirect</h4>
                <p className="text-xs text-slate-300 dark:text-slate-600 mt-1.5 leading-relaxed font-semibold">{storeToast}</p>
                <div className="flex gap-2.5 mt-2.5">
                  <a href={googlePlayUrl} target="_blank" rel="noreferrer" className="text-[10px] text-sky-400 dark:text-sky-600 hover:underline font-extrabold flex items-center gap-1">
                    <span>Go directly to Google Play</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <button 
                id="close-store-toast"
                onClick={() => setStoreToast(null)} 
                className="text-xs self-start opacity-60 hover:opacity-100 p-1"
                aria-label="Dismiss Notification"
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HERO SECTION WITH DUAL COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center lg:mb-20">
          
          {/* Left Column: Direct App Copy & Setup Details */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left max-w-2xl">
            
            <div className="self-start">
              <span className={`px-3 py-1 rounded-full border text-xs font-extrabold leading-none inline-flex items-center gap-1.5 ${scheme.pill} transition-all duration-300`}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI-Powered Personal Voice Diary</span>
              </span>
            </div>

            {/* Headline tag (Speak. Transform. Remember.) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.08] flex flex-col gap-1">
              <span>Speak.</span>
              <span>Transform.</span>
              <span className={scheme.heading}>Remember.</span>
            </h1>

            {/* Short app descriptions */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Turn your spoken thoughts into beautifully structured journal entries instantly — no typing required. Just press record, speak naturally, and let AI organize your words while preserving your personal tone and meaning.
            </p>

            {/* Structured bullet checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 my-2 text-sm">
              <div className="flex gap-3 items-start">
                <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${scheme.accentBg}`}>
                  <Mic className="w-4.5 h-4.5 text-sky-500" />
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 dark:text-white">Just Talk naturally</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Free users can record up to 4 minutes per day — perfect for quick reflections and thoughts.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${scheme.accentBg}`}>
                  <ShieldCheck className="w-4.5 h-4.5 text-sky-500" />
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 dark:text-white">Strict Privacy Controls</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Secured files. Your data is never sold, shared with advertisers, or used for ads.</p>
                </div>
              </div>
            </div>

            {/* Callout box for trial terms */}
            <div className="p-4 bg-sky-50/40 dark:bg-slate-900/40 rounded-2xl border border-sky-100/30 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
              🌟 <strong>Free 7-Day Trial:</strong> Enjoy unrestricted, unlimited voice transcribing, summaries, and metrics for 7 calendar days. Cancel anytime. Available under flexible monthly or annual billing.
            </div>

            {/* Badges linking to store pages */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              
              {/* Google Play Store Button */}
              <a
                id="play-store-download-badge"
                href={googlePlayUrl}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-850 dark:border-slate-200 ${scheme.badgeBorder}`}
              >
                <svg className="w-6.5 h-6.5" viewBox="0 0 24 24" fill="none">
                  <path d="M3.5293 2.19318C3.41169 2.31682 3.33331 2.50228 3.33331 2.74955V21.2504C3.33331 2.49772 3.41169 2.68318 3.5293 2.80682L3.60157 2.87273L13.1558 12.015L13.1558 11.985L3.60157 2.12682L3.5293 2.19318Z" fill="#1A73E8"/>
                  <path d="M16.3315 8.95591L13.1562 11.985V12.015L16.3323 15.0441L16.421 14.9927L20.1793 12.8532C21.2519 12.2414 21.2519 11.7586 20.1793 11.1468L16.421 9.00727L16.421 9.00727Z" fill="#F4B400"/>
                  <path d="M3.60156 2.87273L13.1558 12L16.3315 8.95591L3.81156 1.83409C3.15042 1.45864 2.61042 1.76773 3.60156 2.87273Z" fill="#EA4335"/>
                  <path d="M3.60156 21.1273C2.61042 22.2323 3.15042 22.5414 3.81156 21.6664L16.3315 15.0441L13.1558 12L3.60156 21.1273Z" fill="#00E676"/>
                </svg>
                <div className="text-left">
                  <span className="block text-[9px] uppercase tracking-widest font-extrabold opacity-65">Get it on</span>
                  <span className="block text-sm font-extrabold">Google Play</span>
                </div>
              </a>

              {/* iOS App Store simulated release request */}
              <button
                id="ios-release-request"
                onClick={() => triggerStoreDownload("iOS App Store")}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl bg-white text-slate-900 border border-slate-250 dark:border-slate-800 dark:bg-slate-900 dark:text-white shadow-xs hover:shadow-md transition-all duration-300 ${scheme.badgeBorder}`}
              >
                <svg className="w-6.5 h-6.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.1,16.67C20.08,16.74 19.67,18.11 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[9px] uppercase tracking-widest font-extrabold opacity-65">Coming soon to</span>
                  <span className="block text-sm font-extrabold">App Store</span>
                </div>
              </button>

            </div>

            {/* Quick status details */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-450 mt-4.5 font-semibold">
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-sky-500" />
                <span>10 Languages Supported</span>
              </span>
              <span className="opacity-40">•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Secure encrypted AI pipeline</span>
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Smartphone preview Simulator (from screenshot details) */}
          <div id="simulator-section" className="lg:col-span-5 flex justify-center py-6 relative">
            
            {/* Soft decorative background radial light matching active palette */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full filter blur-[50px] opacity-25 pointer-events-none transition-colors duration-500 ${scheme.glow}`} />

            <div className="relative">
              <InteractiveMockup />
              
              {/* Simulator feedback prompt */}
              <div className="absolute -left-10 bottom-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 rounded-2xl shadow-xl max-w-[155px] text-[10px] hidden sm:block">
                <p className="font-extrabold flex items-center gap-1 text-slate-900 dark:text-white uppercase tracking-wider text-[9px]">
                  <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                  Live Simulator
                </p>
                <p className="text-slate-400 mt-1 leading-relaxed font-semibold">Click buttons inside the phone to preview pages from our official Play screenshots!</p>
              </div>
            </div>

          </div>

        </div>

        {/* BENTO GRID MODULES */}
        <section id="features-section" className="py-16 border-t border-slate-200/50 dark:border-slate-900/40 flex flex-col gap-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Simple Journaling. No unnecessary clutter.
            </h2>
            <p className="text-sm text-slate-500 dark:text-[#A0AEC0] leading-relaxed font-medium">
              No endless mood trackers. No complicated templates. Just open Voice Diary, speak your core reflections, and save your memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6.5">
            
            {/* Bento Card 1: Interactive Screen Selector */}
            <div className="p-6.5 rounded-3xl bg-white dark:bg-slate-950/60 border border-slate-200/50 dark:border-slate-900/60 shadow-xs flex flex-col gap-3.5 hover:border-slate-300 dark:hover:border-slate-800 transition-all">
              <div className="p-2.5 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-2xl w-fit">
                <Volume2 className="w-5 h-5 text-sky-500" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">Select Accent Preset</h3>
                <p className="text-xs text-slate-505 dark:text-slate-400 leading-relaxed font-medium">
                  Dynamically adjust the landing page color scheme to align with your mood. Try selecting your active choice below:
                </p>
              </div>
              <div className="mt-auto pt-3.5 flex gap-2">
                {(["slate-blue", "ocean", "charcoal", "aurora"] as const).map(color => (
                  <button 
                    key={color}
                    id={`accent-preset-${color}`}
                    onClick={() => setThemeColor(color)}
                    className={`w-7 h-7 rounded-full border-2 transition-all ${
                      themeColor === color ? "border-slate-950 dark:border-white scale-110" : "border-transparent"
                    }`}
                    style={{
                      backgroundColor: 
                        color === "slate-blue" ? "#0EA5E9" : 
                        color === "ocean" ? "#0D9488" : 
                        color === "charcoal" ? "#475569" : "#10B981"
                    }}
                    title={`Activate ${color} palette`}
                  />
                ))}
              </div>
            </div>

            {/* Bento Card 2: Legal Integrity & Strict Compliance */}
            <div className="p-6.5 rounded-3xl bg-white dark:bg-slate-950/60 border border-slate-200/50 dark:border-slate-900/60 shadow-xs flex flex-col gap-3.5 hover:border-slate-300 dark:hover:border-slate-800 transition-all">
              <div className="p-2.5 bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 rounded-2xl w-fit">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-extrabold text-[#1E293B] dark:text-white tracking-tight">Legal Soundness</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  Read complete legal documentation covering active voice file processing, subscription billing, and standard data privacy safeguards:
                </p>
              </div>
              <div className="mt-auto pt-2 flex gap-2 w-full">
                <button
                  id="privacy-bento-anchor"
                  onClick={() => openLegal("privacy")}
                  className="flex-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-850 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-850 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Privacy Policy</span>
                </button>
                <button
                  id="terms-bento-anchor"
                  onClick={() => openLegal("terms")}
                  className="flex-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-850 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-850 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-sky-500" />
                  <span>Terms of Service</span>
                </button>
              </div>
            </div>

            {/* Bento Card 3: Multi-Language & Analytics Info */}
            <div className="p-6.5 rounded-3xl bg-white dark:bg-slate-950/60 border border-slate-200/50 dark:border-slate-900/60 shadow-xs flex flex-col gap-3.5 hover:border-slate-300 dark:hover:border-slate-800 transition-all">
              <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-2xl w-fit">
                <Globe className="w-5 h-5 text-indigo-500" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">10 Languages Support</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  Voice Diary offers immediate, lag-free audio-to-text processing for French, Spanish, German, Japanese, and 6 more worldwide languages. 100% compliant with standard international locale systems.
                </p>
              </div>
              <div className="mt-auto pt-3.5 flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-extrabold font-mono">
                <span>✓ TRANSCRIBES VOICE SEAMLESSLY</span>
              </div>
            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-900/30 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 p-0.5 flex items-center justify-center text-white font-extrabold text-xs">
              V
            </div>
            <div>
              <p className="font-display text-sm font-extrabold tracking-tight">Voice Diary</p>
              <p className="text-[10px] text-slate-405 leading-none">© 2026 Glazier Audio Journal. All rights reserved.</p>
            </div>
          </div>

          {/* Legal references to Terms and Privacy as requested by the user */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold text-slate-400 dark:text-slate-500">
            <button id="footer-privacy-trigger" onClick={() => openLegal("privacy")} className="hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer">Privacy Policy</button>
            <button id="footer-terms-trigger" onClick={() => openLegal("terms")} className="hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer">Terms of Service</button>
            <a href="mailto:mafusaik@gmail.com" className="hover:text-slate-700 dark:hover:text-white transition-colors flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              <span>mafusaik@gmail.com</span>
            </a>
            <span className="opacity-30">|</span>
            <span className="text-[10px] font-normal select-none">
              Built by Google AI Studio Build
            </span>
          </div>

        </div>
      </footer>

      {/* Legal Modal Layer */}
      <LegalModal
        isOpen={legalOpen}
        onClose={() => setLegalOpen(false)}
        defaultTab={legalDefaultTab}
      />

    </div>
  );
}
