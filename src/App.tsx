import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  FileText, 
  ExternalLink, 
  Sparkles, 
  Globe, 
  Mail, 
  Download,
  Mic,
  Languages,
  ArrowRight,
  Sparkle,
  Copy,
  CheckCircle,
  Moon,
  Sun,
  ChevronDown
} from "lucide-react";
import InteractiveMockup from "./components/InteractiveMockup";
import LegalModal from "./components/LegalModal";
import { translations } from "./data/translations";

// Import the generated app logo asset so Vite lists and compiles it correctly in production
// @ts-ignore
import appLogo from "./assets/images/app_logo_1780295242431.png";

const LANGUAGES = [
  { code: "en-US", name: "English", flag: "🇺🇸" },
  { code: "de-DE", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr-FR", name: "Français", flag: "🇫🇷" },
  { code: "ja-JP", name: "日本語", flag: "🇯🇵" },
  { code: "ru-RU", name: "Русский", flag: "🇷🇺" },
  { code: "pl-PL", name: "Polski", flag: "🇵🇱" },
  { code: "be-BY", name: "Беларуская", flag: "🇧🇾" },
  { code: "it-IT", name: "Italiano", flag: "🇮🇹" },
  { code: "es-ES", name: "Español", flag: "🇪🇸" },
  { code: "uk-UA", name: "Українська", flag: "🇺🇦" },
];

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<string>("en-US");
  const [langDropdownOpen, setLangDropdownOpen] = useState<boolean>(false);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  
  const [activePage, setActivePage] = useState<"home" | "support">("home");
  const [legalOpen, setLegalOpen] = useState<boolean>(false);
  const [legalDefaultTab, setLegalDefaultTab] = useState<"privacy" | "terms">("privacy");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.glazer.audio.journal.voice.diary";
  const supportEmail = "glazer.dev@gmail.com";

  // Check URL routes for query params or hashes to serve Support instantly via URL request
  useEffect(() => {
    // Dynamic tab favicon injection so that it resolves perfectly in GitHub subdirectories and localhost
    let link = document.getElementById("dynamic-favicon") as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.id = "dynamic-favicon";
      link.rel = "icon";
      link.type = "image/png";
      document.head.appendChild(link);
    }
    link.href = appLogo;

    const handleNavigation = () => {
      const params = new URLSearchParams(window.location.search);
      const hash = window.location.hash;

      // Handle language parameter
      const urlLang = params.get("lang") || params.get("locale");
      if (urlLang && LANGUAGES.some(l => l.code === urlLang)) {
        setCurrentLanguage(urlLang);
      }

      // Handle support routing fallback
      if (
        params.get("page") === "support" || 
        hash === "#support" || 
        hash === "#/support" || 
        window.location.pathname.endsWith("/support")
      ) {
        setActivePage("support");
      } else {
        setActivePage("home");
      }
    };

    handleNavigation();
    window.addEventListener("hashchange", handleNavigation);
    window.addEventListener("popstate", handleNavigation);
    return () => {
      window.removeEventListener("hashchange", handleNavigation);
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  const changeLanguage = (code: string) => {
    setCurrentLanguage(code);
    setLangDropdownOpen(false);
    
    // Smoothly apply state URL trigger so users and crawler indexers see paths
    const params = new URLSearchParams(window.location.search);
    params.set("lang", code);
    const newRelativePathQuery = window.location.pathname + "?" + params.toString() + window.location.hash;
    window.history.pushState(null, "", newRelativePathQuery);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3050);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(supportEmail);
    showToast("Email address copied to clipboard! 📋");
  };

  const openLegal = (tab: "privacy" | "terms") => {
    setLegalDefaultTab(tab);
    setLegalOpen(true);
  };

  // Get active translation block
  const t = translations[currentLanguage] || translations["en-US"];

  // Custom light and dark iridescent theme background structures based on user composables
  const darkThemeGradient = {
    bg: "bg-[#1A1C20] lg:bg-radial-gradient",
    bodyGradient: "from-[#1A1C20] via-[#2C3E50] to-[#243B55]",
    glowingSpot1: "bg-[#243B55]/20",
    glowingSpot2: "bg-[#2C3E50]/20",
    cardBg: "bg-[#2C3E50]/15 dark:bg-[#1A1C20]/45 border-slate-800/60",
    textColor: "text-slate-100",
    paragraphColor: "text-slate-400"
  };

  const lightThemeGradient = {
    bg: "bg-[#D8E3FA]",
    bodyGradient: "from-[#D8E3FA] via-[#D0D3E3] to-[#CFDEF3]",
    glowingSpot1: "bg-[#D0D3E3]/40",
    glowingSpot2: "bg-[#B1C6DB]/30",
    cardBg: "bg-white/70 border-white/45",
    textColor: "text-slate-900",
    paragraphColor: "text-slate-650"
  };

  const activeGrad = isDarkTheme ? darkThemeGradient : lightThemeGradient;
  const activeLang = LANGUAGES.find(l => l.code === currentLanguage) || LANGUAGES[0];

  return (
    <div className={`min-h-screen ${isDarkTheme ? "dark" : ""} transition-colors duration-500`}>
      <div className={`min-h-screen ${activeGrad.bg} ${activeGrad.textColor} font-sans selection:bg-slate-400/30 relative overflow-hidden flex flex-col`}>
        
        {/* Iridescent radial glowing spots representing user's background compose modifier */}
        <div className={`absolute top-[-250px] right-[-100px] w-[600px] h-[600px] rounded-full filter blur-[130px] pointer-events-none transition-colors duration-500 ${activeGrad.glowingSpot1}`} />
        <div className={`absolute bottom-[-150px] left-[-200px] w-[500px] h-[500px] rounded-full filter blur-[120px] pointer-events-none transition-colors duration-500 ${activeGrad.glowingSpot2}`} />

        {/* Dynamic global toast notice portal */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -45, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed bottom-6 right-6 z-50 bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-indigo-500/10 text-xs font-bold font-sans"
            >
              <CheckCircle className="w-4.5 h-4.5 text-emerald-500 dark:text-emerald-600" />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MAIN STICKY NAVIGATION BAR */}
        <header className="sticky top-0 z-40 w-full bg-white/40 dark:bg-[#1A1C20]/45 backdrop-blur-md border-b border-white/10 dark:border-slate-800/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            
            {/* Logo and Titles */}
            <div 
              onClick={() => {
                setActivePage("home");
                // Clear state
                const params = new URLSearchParams(window.location.search);
                params.delete("page");
                window.history.pushState(null, "", window.location.pathname + (params.toString() ? "?" + params.toString() : ""));
              }}
              className="flex items-center gap-2.5 cursor-pointer hover:opacity-90 transition-opacity"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-400 via-indigo-500 to-indigo-600 p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full rounded-[10px] bg-white dark:bg-slate-950 flex items-center justify-center overflow-hidden">
                  <img src={appLogo} referrerPolicy="no-referrer" alt="Voice Diary Logo" className="w-[102%] h-[102%] object-cover scale-102" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base tracking-tight select-none">Voice Diary</span>
                <span className="text-[9px] block text-indigo-500 font-extrabold uppercase tracking-widest leading-none">GlazerDev</span>
              </div>
            </div>

            {/* Nav anchors on desktop */}
            {activePage === "home" && (
              <nav className="hidden md:flex items-center gap-6 text-xs font-extrabold">
                <button 
                  onClick={() => document.getElementById("features-section")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:opacity-80 cursor-pointer"
                >
                  {t.navFeatures}
                </button>
                <button 
                  onClick={() => document.getElementById("screenshots-showcase")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:opacity-80 cursor-pointer"
                >
                  {t.navSimulator}
                </button>
                <button 
                  onClick={() => openLegal("privacy")}
                  className="hover:opacity-80 cursor-pointer"
                >
                  {t.navPrivacy}
                </button>
                <button 
                  onClick={() => openLegal("terms")}
                  className="hover:opacity-80 cursor-pointer"
                >
                  {t.navTerms}
                </button>
              </nav>
            )}

            {/* Control buttons & dropmenus in upper right corner */}
            <div className="flex items-center gap-2 sm:gap-3.5">
              
              {/* Dual theme builder toggle (Dark/Light app gradients) */}
              <button
                onClick={() => setIsDarkTheme(!isDarkTheme)}
                className="w-10 h-10 rounded-xl bg-white/20 dark:bg-slate-800/40 border border-white/20 dark:border-slate-700/30 flex items-center justify-center hover:bg-white/30 dark:hover:bg-slate-705 cursor-pointer text-slate-700 dark:text-amber-400 transition-all shadow-sm"
                title={isDarkTheme ? t.lightThemeLabel : t.darkThemeLabel}
              >
                {isDarkTheme ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Language Switch Dropdown (default custom selector) */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="px-3.5 py-2 rounded-xl bg-white/20 dark:bg-slate-800/40 border border-white/20 dark:border-slate-700/30 text-xs font-bold flex items-center gap-1.5 hover:bg-white/30 dark:hover:bg-slate-700/40 transition-all cursor-pointer shadow-sm"
                >
                  <span>{activeLang.flag}</span>
                  <span className="hidden sm:inline">{activeLang.name}</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </button>

                <AnimatePresence>
                  {langDropdownOpen && (
                    <>
                      {/* Invisible backdrop to dismiss dropdown cleanly */}
                      <div className="fixed inset-0 z-40" onClick={() => setLangDropdownOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.96 }}
                        className="absolute right-0 mt-2 w-48 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-2xl p-1.5 z-50 text-xs"
                      >
                        <div className="py-1 px-3.5 text-[9px] font-black uppercase tracking-wider text-slate-400 block border-b border-slate-100 dark:border-slate-800 mb-1.5 pb-1">
                          Select Local Language
                        </div>
                        <div className="max-h-64 overflow-y-auto space-y-0.5">
                          {LANGUAGES.map((lang) => (
                            <button
                              key={lang.code}
                              onClick={() => changeLanguage(lang.code)}
                              className={`w-full text-left px-3 py-2 rounded-xl font-bold flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer ${
                                currentLanguage === lang.code ? "text-indigo-500 bg-slate-50 dark:bg-slate-800" : ""
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span>{lang.flag}</span>
                                <span>{lang.name}</span>
                              </div>
                              {currentLanguage === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Direct Support shortcut tab */}
              <button
                onClick={() => {
                  if (activePage === "support") {
                    setActivePage("home");
                  } else {
                    setActivePage("support");
                  }
                }}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all border outline-none cursor-pointer shadow-sm ${
                  activePage === "support"
                    ? "bg-slate-900 border-slate-950 dark:bg-white text-white dark:text-slate-950"
                    : "bg-white dark:bg-slate-800 dark:border-slate-700 text-slate-800 dark:text-slate-100 border-slate-200"
                }`}
              >
                <span>{t.supportLink}</span>
              </button>

            </div>

          </div>
        </header>

        {/* STANDALONE URL ROUTED SUPPORT VIEWPORT */}
        <AnimatePresence mode="wait">
          {activePage === "support" ? (
            <motion.main 
              key="support-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex-1 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center justify-center text-center gap-8"
            >
              
              {/* Back to landing link top */}
              <button 
                onClick={() => {
                  setActivePage("home");
                  // Unset support hash on click
                  window.location.hash = "";
                }}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-850 hover:opacity-90 rounded-xl text-xs font-bold font-sans flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>←</span>
                <span>Back to Home Page</span>
              </button>

              <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-sky-400 via-indigo-500 to-indigo-600 p-0.5 shadow-xl flex items-center justify-center">
                <div className="w-full h-full rounded-[22px] bg-white dark:bg-slate-950 flex items-center justify-center overflow-hidden">
                  <img src={appLogo} referrerPolicy="no-referrer" alt="Voice Diary Logo" className="w-[102%] h-[102%] object-cover" />
                </div>
              </div>

              <div className="space-y-3 max-w-lg">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Voice Diary Technical Support
                </h1>
                <p className="text-sm opacity-80 leading-relaxed font-semibold">
                  {t.supportDescription}
                </p>
              </div>

              {/* Direct email card with Copy options */}
              <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-white/60 dark:bg-slate-950/40 backdrop-blur-md border border-slate-200/40 dark:border-slate-800/50 shadow-xl flex flex-col gap-4 items-center">
                
                <div className="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-500 dark:text-indigo-400 rounded-2xl w-fit">
                  <Mail className="w-6 h-6" />
                </div>

                <div className="space-y-1 w-full">
                  <span className="text-[10px] opacity-40 font-black uppercase tracking-widest block">Official Support Email</span>
                  <a 
                    href={`mailto:${supportEmail}`}
                    className="text-lg sm:text-xl font-black text-indigo-500 hover:underline block break-all tracking-tight"
                  >
                    {supportEmail}
                  </a>
                </div>

                {/* Quick actions box */}
                <div className="flex flex-col sm:flex-row gap-2.5 w-full mt-2">
                  <button 
                    onClick={copyEmailToClipboard}
                    className="flex-1 px-4 py-2.5 bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-100 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Copy className="w-4.5 h-4.5 opacity-72" />
                    <span>Copy Email Address</span>
                  </button>
                  <a
                    href={`mailto:${supportEmail}?subject=Voice%20Diary%20Support%20Request`}
                    className="flex-1 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 text-center shadow-lg shadow-sky-500/10"
                  >
                    <ExternalLink className="w-4.5 h-4.5" />
                    <span>Send Message</span>
                  </a>
                </div>

              </div>

              <div className="text-xs opacity-50 max-w-md leading-relaxed font-semibold">
                Please specify your project name, device specifications, and preferred language in the mail body. We typically process standard inquiries, translation updates, and data deletion requests within 24 hours.
              </div>

            </motion.main>
          ) : (
            /* CONVENTIONAL HOME LANDING VIEW */
            <motion.main 
              key="home-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 flex flex-col gap-20"
            >
              
              {/* LANDING PAGE LAYOUT CONTAINING TEXT COLUMN & DEVICE SHOWCASE GRID */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                
                {/* Left Column: Direct Localization Marketing Callouts */}
                <div className="lg:col-span-7 flex flex-col gap-6 text-left max-w-2xl">
                  
                  {/* Iridescent badge highlighting language list and details */}
                  <div className="self-start">
                    <span className="px-3.5 py-1.5 rounded-full border border-sky-400/20 bg-sky-500/10 text-sky-600 dark:text-sky-300 text-xs font-black inline-flex items-center gap-1.5 leading-none transition-all">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{t.languagesBadge}</span>
                    </span>
                  </div>

                  {/* Dynamic translated headline */}
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] flex flex-col">
                    <span>{t.headlineStep1}</span>
                    <span>{t.headlineStep2}</span>
                    <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent font-extrabold">{t.headlineStep3}</span>
                  </h1>

                  {/* Dynamic subtitle */}
                  <p className="text-base sm:text-lg opacity-85 leading-relaxed font-semibold">
                    {t.subtitle}
                  </p>

                  {/* Bullet check list in grids */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-2 text-sm">
                    <div className="flex gap-3 items-start">
                      <div className="p-2.5 bg-sky-500/10 text-sky-500 rounded-xl shrink-0 mt-0.5">
                        <Mic className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-extrabold">{t.bullet1Title}</p>
                        <p className="opacity-70 text-xs mt-0.5 leading-relaxed font-semibold">{t.bullet1Text}</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="p-2.5 bg-emerald-500/10 text-emerald-500 rounded-xl shrink-0 mt-0.5">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-extrabold">{t.bullet2Title}</p>
                        <p className="opacity-70 text-xs mt-0.5 leading-relaxed font-semibold">{t.bullet2Text}</p>
                      </div>
                    </div>
                  </div>

                  {/* Flexible subscription test message block */}
                  <div className="p-4 bg-sky-500/5 dark:bg-white/5 rounded-2xl border border-sky-400/10 text-xs opacity-80 leading-relaxed font-semibold">
                    ⭐ {t.trialNotice}
                  </div>

                  {/* Action Badges to Play Store / coming soon to iOS */}
                  <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                    
                    {/* Google Play Store Badge direct link */}
                    <a
                      href={googlePlayUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950 border border-slate-800 dark:border-slate-200 shadow-md hover:scale-101 transition-all"
                    >
                      <svg className="w-6.5 h-6.5" viewBox="0 0 24 24" fill="none">
                        <path d="M3.5293 2.19318C3.41169 2.31682 3.33331 2.50228 3.33331 2.74955V21.2504C3.33331 2.49772 3.41169 2.68318 3.5293 2.80682L3.60157 2.87273L13.1558 12.015L13.1558 11.985L3.60157 2.12682L3.5293 2.19318Z" fill="#1A73E8"/>
                        <path d="M16.3315 8.95591L13.1562 11.985V12.015L16.3323 15.0441L16.421 14.9927L20.1793 12.8532C21.2519 12.2414 21.2519 11.7586 20.1793 11.1468L16.421 9.00727L16.421 9.00727Z" fill="#F4B400"/>
                        <path d="M3.60156 2.87273L13.1558 12L16.3315 8.95591L3.81156 1.83409C3.15042 1.45864 2.61042 1.76773 3.60156 2.87273Z" fill="#EA4335"/>
                        <path d="M3.60156 21.1273C2.61042 22.2323 3.15042 22.5414 3.81156 21.6664L16.3315 15.0441L13.1558 12L3.60156 21.1273Z" fill="#00E676"/>
                      </svg>
                      <div className="text-left">
                        <span className="block text-[8px] uppercase tracking-wider font-extrabold opacity-70">Download for free</span>
                        <span className="block text-sm font-black">{t.getOnPlayStore}</span>
                      </div>
                    </a>

                    {/* iOS App Store static announcement with toast click helper */}
                    <button
                      onClick={() => showToast("iOS release is scheduled for Q4! Sign up via support email to join beta! 🍏")}
                      className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/40 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/30 text-slate-800 dark:text-white shadow-xs hover:scale-101 transition-all cursor-pointer"
                    >
                      <svg className="w-6.5 h-6.5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.1,16.67C20.08,16.74 19.67,18.11 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z" />
                      </svg>
                      <div className="text-left">
                        <span className="block text-[8px] uppercase tracking-wider font-extrabold opacity-70">Compatible version</span>
                        <span className="block text-sm font-black">{t.comingSoonAppStore}</span>
                      </div>
                    </button>

                  </div>

                </div>

                {/* Right Column: Dynamic Screenshot Mock Showcase Grid */}
                <div className="lg:col-span-5 flex justify-center py-4">
                  <InteractiveMockup 
                    currentLanguage={currentLanguage} 
                    translations={translations}
                    isDarkTheme={isDarkTheme}
                  />
                </div>

              </div>

              {/* DYNAMIC METRIC CARDS / BENTO STATS */}
              <section id="features-section" className="py-16 border-t border-slate-200/20 dark:border-slate-800/10 flex flex-col gap-10">
                
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                    {t.featuresHeader}
                  </h2>
                  <p className="text-xs sm:text-sm opacity-70 leading-relaxed font-semibold">
                    {t.featuresSub}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Bento feature 1: Uncompromised Privacy */}
                  <div className={`p-6 sm:p-7 rounded-3xl backdrop-blur-md border ${activeGrad.cardBg} flex flex-col gap-3 hover:scale-[1.01] transition-all`}>
                    <div className="p-2.5 bg-sky-500/10 text-sky-500 rounded-2xl w-fit">
                      <ShieldCheck className="w-5.5 h-5.5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-black tracking-tight">{t.featuresCardPrivacyTitle}</h3>
                      <p className="text-xs opacity-70 leading-relaxed font-semibold">
                        {t.featuresCardPrivacyText}
                      </p>
                    </div>
                  </div>

                  {/* Bento feature 2: Transcriptions summaries and metrics */}
                  <div className={`p-6 sm:p-7 rounded-3xl backdrop-blur-md border ${activeGrad.cardBg} flex flex-col gap-3 hover:scale-[1.01] transition-all`}>
                    <div className="p-2.5 bg-sky-500/10 text-sky-500 rounded-2xl w-fit">
                      <Sparkles className="w-5.5 h-5.5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-black tracking-tight">{t.featuresCardSyncTitle}</h3>
                      <p className="text-xs opacity-70 leading-relaxed font-semibold">
                        {t.featuresCardSyncText}
                      </p>
                    </div>
                  </div>

                  {/* Bento feature 3: Dedicated Support Link */}
                  <div className={`p-6 sm:p-7 rounded-3xl backdrop-blur-md border ${activeGrad.cardBg} flex flex-col gap-3 hover:scale-[1.01] transition-all justify-between`}>
                    <div className="space-y-3">
                      <div className="p-2.5 bg-indigo-500/10 text-indigo-500 rounded-2xl w-fit">
                        <Mail className="w-5.5 h-5.5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-base font-black tracking-tight">Technical Support</h3>
                        <p className="text-xs opacity-70 leading-relaxed font-semibold">
                          Have queries regarding your subscription cancellation, localized translations, or data removals? Reach us directly via email.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setActivePage("support");
                        window.location.hash = "support";
                      }}
                      className="px-4 py-2 bg-indigo-500 text-white hover:bg-indigo-600 text-xs font-bold rounded-xl flex items-center gap-1.5 w-fit mt-3 cursor-pointer shadow-md transition-all self-start"
                    >
                      <span>View Support Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </section>

            </motion.main>
          )}
        </AnimatePresence>

        {/* COMPREHENSIVE LANDING PAGE FOOTER */}
        <footer className="mt-auto bg-white/20 dark:bg-slate-950/40 border-t border-white/10 dark:border-slate-800/20 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-400 via-indigo-500 to-indigo-600 p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full rounded-[9px] bg-sky-100 dark:bg-slate-950 flex items-center justify-center overflow-hidden">
                  <img src={appLogo} referrerPolicy="no-referrer" alt="Voice Diary icon" className="w-[102%] h-[102%] object-cover" />
                </div>
              </div>
              <div className="flex flex-col text-left">
                <p className="text-sm font-black tracking-tight">Voice Diary</p>
                <p className="text-[10px] opacity-60 font-semibold">{t.footerAllRights}</p>
              </div>
            </div>

            {/* Privacy policy and Terms of service interactive modal selectors */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold">
              <button onClick={() => openLegal("privacy")} className="hover:text-indigo-500 cursor-pointer transition-colors">{t.navPrivacy}</button>
              <button onClick={() => openLegal("terms")} className="hover:text-indigo-500 cursor-pointer transition-colors">{t.navTerms}</button>
              <a href={`mailto:${supportEmail}`} className="hover:text-indigo-500 transition-colors flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                <span>{supportEmail}</span>
              </a>
              <span className="opacity-30">|</span>
              <span className="text-[10px] opacity-40 font-semibold">
                Glazer Dev
              </span>
            </div>

          </div>
        </footer>

        {/* Global Modal Frame for full text Legal Documents */}
        <LegalModal
          isOpen={legalOpen}
          onClose={() => setLegalOpen(false)}
          defaultTab={legalDefaultTab}
        />

      </div>
    </div>
  );
}
