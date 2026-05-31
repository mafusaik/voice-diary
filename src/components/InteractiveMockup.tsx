import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Wifi, 
  Battery, 
  Signal, 
  Mic, 
  FileText, 
  BarChart3, 
  Settings as SettingsIcon, 
  Search, 
  Heart, 
  Calendar, 
  Flame, 
  Trophy, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Play,
  RotateCcw,
  Check,
  Languages,
  Plus
} from "lucide-react";

interface NoteItem {
  id: string;
  title: string;
  date: string;
  time: string;
  favorite: boolean;
  content?: string;
}

export default function InteractiveMockup() {
  // Mobile app simulator pages
  const [activeScreen, setActiveScreen] = useState<"intro" | "recorder" | "result" | "stats" | "dark-list">("intro");
  const [notes, setNotes] = useState<NoteItem[]>([
    { id: "1", title: "Team Meeting", date: "2026-04-02", time: "12:00", favorite: false, content: "Discussed Q2 roadmap and voice features integration." },
    { id: "2", title: "Project Idea", date: "2026-04-03", time: "12:00", favorite: false, content: "A smart voice journal that turns spoken words into cohesive summaries." },
    { id: "3", title: "Shopping List", date: "2026-04-04", time: "12:00", favorite: true, content: "Organic blue milk, fresh apples, almond flour, espresso beans." },
    { id: "4", title: "Books to Read", date: "2026-04-05", time: "12:00", favorite: false, content: "Sapiens, Atomic Habits, and deep learning for audio engineering." },
    { id: "5", title: "Workout", date: "2026-04-06", time: "12:00", favorite: true, content: "5km morning run, 20 pull-ups, 15 core sets, stretching." },
    { id: "6", title: "Recipe Note", date: "2026-04-10", time: "12:00", favorite: false, content: "Sourdough hydration, sourdough logic, and rosemary salt." },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [simulatedTime, setSimulatedTime] = useState("13:58");
  const [recordingSeconds, setRecordingSeconds] = useState(233); // Starting at 3:53 (233 seconds)
  const [isRecording, setIsRecording] = useState(true);
  const [transcriptionLang, setTranscriptionLang] = useState("English");
  
  // Custom interactive tasks
  const [newNoteTitle, setNewNoteTitle] = useState("Vacation Plans");
  const [newNoteContent, setNewNoteContent] = useState(
    "I've been thinking a lot about my vacation plans for May and I'm currently choosing between Portugal and Georgia. Portugal attracts me with its ocean views, warm climate, beautiful architecture, and the opportunity to visit Lisbon, Porto, and small coastal towns. I want to try local cuisine, travel by train along the coast, and spend a few days near the ocean. On the other hand, Georgia seems like a more affordable and cozy option with amazing mountains, delicious food, and very welcoming people. I would love to visit Tbilisi, Kazbegi, maybe spend a few days near the vineyards. I also need to compare flight prices and weather..."
  );

  // Time updater
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours().toString().padStart(2, "0");
      let minutes = now.getMinutes().toString().padStart(2, "0");
      setSimulatedTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  // Recorder clock
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRecording && activeScreen === "recorder") {
      timer = setInterval(() => {
        setRecordingSeconds((prev) => {
          if (prev <= 0) {
            setIsRecording(false);
            return 240; // 4:00 limit
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRecording, activeScreen]);

  const formatRecordingTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const remainingSeconds = secs % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, favorite: !n.favorite } : n))
    );
  };

  const handleSaveResult = () => {
    const freshNote: NoteItem = {
      id: String(notes.length + 1),
      title: newNoteTitle,
      date: "2026-05-31",
      time: "12:15",
      favorite: false,
      content: newNoteContent,
    };
    setNotes([freshNote, ...notes]);
    setActiveScreen("intro");
  };

  const screensInfo = [
    { id: "intro", label: "1. Notes Dashboard (Light)" },
    { id: "dark-list", label: "2. Dark Theme Favorites" },
    { id: "recorder", label: "3. Live Audio Recorder" },
    { id: "result", label: "4. AI Transformed Memo" },
    { id: "stats", label: "5. Streak & Statistics" },
  ];

  const handleNextScreen = () => {
    const mapping: Record<string, typeof activeScreen> = {
      intro: "dark-list",
      "dark-list": "recorder",
      recorder: "result",
      result: "stats",
      stats: "intro",
    };
    setActiveScreen(mapping[activeScreen]);
  };

  const handlePrevScreen = () => {
    const mapping: Record<string, typeof activeScreen> = {
      intro: "stats",
      "dark-list": "intro",
      recorder: "dark-list",
      result: "recorder",
      stats: "result",
    };
    setActiveScreen(mapping[activeScreen]);
  };

  // Filter notes
  const filteredNotes = notes.filter((n) => {
    const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (n.content && n.content.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFav = !onlyFavorites || n.favorite;
    return matchesSearch && matchesFav;
  });

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-4xl mx-auto py-4">
      {/* Interactive Controls Bar to let web visitors cycle the Phone Viewport */}
      <div className="flex flex-wrap gap-2.5 justify-center items-center px-4 py-2 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800 shadow-lg w-full max-w-2xl">
        <button
          onClick={handlePrevScreen}
          className="p-2 text-slate-400 hover:text-white hover:bg-slate-850 rounded-xl transition-all"
          title="Previous screen"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex flex-wrap gap-1.5 justify-center">
          {screensInfo.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveScreen(s.id as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeScreen === s.id
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/20 scale-102"
                  : "text-slate-450 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              {s.id === "intro" ? "Notes (Light)" : 
               s.id === "dark-list" ? "Notes (Dark)" :
               s.id === "recorder" ? "3:53 Record" :
               s.id === "result" ? "AI Text" : "Stats Calendar"}
            </button>
          ))}
        </div>

        <button
          onClick={handleNextScreen}
          className="p-2 text-slate-400 hover:text-white hover:bg-slate-850 rounded-xl transition-all"
          title="Next screen"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Main Container mapping the Mock Devices and the dynamic active showcase captions */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full">
        
        {/* Left Side: Detail & Captions from actual design (Speak. Transform. Remember) */}
        <div className="md:col-span-5 space-y-5 text-center md:text-left">
          <AnimatePresence mode="wait">
            {activeScreen === "intro" && (
              <motion.div
                key="intro-txt"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="space-y-3.5"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-500/10 text-sky-400 rounded-full font-semibold text-xs border border-sky-500/10">
                  <Languages className="w-3.5 h-3.5" />
                  <span>Support for 10 Languages</span>
                </div>
                <h3 className="text-3xl font-black tracking-tight text-white">
                  Speak. Transform. Remember.
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Avoid typing out endless sentences. Simply speak your mind naturally, and let AI structure the thoughts into elegant, dated memo cards for you instantly. Click individual items inside our interactive simulator to verify the experience!
                </p>
                <div className="flex gap-4 pt-1 justify-center md:justify-start">
                  <div className="text-xs font-semibold text-slate-500">
                    <span className="text-sky-400 font-extrabold pr-1 font-mono">✓</span> Filter by Newest/Oldest
                  </div>
                  <div className="text-xs font-semibold text-slate-500">
                    <span className="text-sky-400 font-extrabold pr-1 font-mono">✓</span> Clean Search Query
                  </div>
                </div>
              </motion.div>
            )}

            {activeScreen === "dark-list" && (
              <motion.div
                key="dark-txt"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="space-y-3.5"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full font-semibold text-xs border border-pink-500/10">
                  <Heart className="w-3.5 h-3.5 fill-pink-500/20" />
                  <span>Dark Mode & Favorites</span>
                </div>
                <h3 className="text-3xl font-black tracking-tight text-white">
                  Sleek Eye-Safe Styling
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Keep tabs on your favorite recordings with an intuitive tap toggle. Read, scan, and archive old memories inside our beautiful charcoal high-contrast dark theme without straining your eyes during midnight reflections.
                </p>
                <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-400">
                  <span className="text-pink-400 font-bold">Pro-tip:</span> Select the favorite heart on "Shopping List" inside the dark phone simulator to toggle status!
                </div>
              </motion.div>
            )}

            {activeScreen === "recorder" && (
              <motion.div
                key="recorder-txt"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="space-y-3.5"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full font-semibold text-xs border border-emerald-500/10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>4:00 Daily Limit</span>
                </div>
                <h3 className="text-3xl font-black tracking-tight text-white">
                  Just Talk. Capture the Moment.
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Experience a beautifully refined waveform clock indicator that visually echoes your voice amplitude logs. Our daily recorder processes up to 4 minutes per day completely free of charge. Try pressing the microphone pause button!
                </p>
                <div className="flex flex-wrap gap-2 pt-1 justify-center md:justify-start">
                  <button
                    onClick={() => setIsRecording(!isRecording)}
                    className="px-4 py-2 bg-slate-800 text-xs font-bold text-slate-200 hover:text-white rounded-xl border border-slate-700 transition-colors flex items-center gap-1"
                  >
                    <Mic className="w-3.5 h-3.5 text-rose-500" />
                    <span>{isRecording ? "Pause Timer" : "Start Waveform"}</span>
                  </button>
                  <button
                    onClick={() => setRecordingSeconds(233)}
                    className="p-2 bg-slate-800 hover:bg-slate-750 text-slate-400 hover:text-white rounded-xl border border-slate-750 transition-colors"
                    title="Reset to 3:53"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {activeScreen === "result" && (
              <motion.div
                key="result-txt"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="space-y-3.5"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full font-semibold text-xs border border-amber-500/10">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Structured Journal</span>
                </div>
                <h3 className="text-3xl font-black tracking-tight text-white">
                  Speech Into Memories
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Witness how disorganized spoke phrases about target plans (like choosing Georgia or Portugal) get combined into neat, beautifully paragraphed transcripts. Modify the title inside the simulator input directly and hit "Save"!
                </p>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400">Edit Simulator Title Target:</label>
                  <input
                    type="text"
                    value={newNoteTitle}
                    onChange={(e) => setNewNoteTitle(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-850 hover:bg-slate-800 text-xs font-semibold text-white rounded-xl border border-slate-750 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>
              </motion.div>
            )}

            {activeScreen === "stats" && (
              <motion.div
                key="stats-txt"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="space-y-3.5"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full font-semibold text-xs border border-violet-500/10">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Interactive Stats</span>
                </div>
                <h3 className="text-3xl font-black tracking-tight text-white">
                  Track Your Thoughts
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Build strong reflective routines with streak tracking indicators. Voice Diary auto-analyzes key keywords you repeat most frequently across your audio notes, delivering smart high-level word clouds so you can explore patterns in your daily mental health.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850">
                    <span className="block text-[10px] uppercase font-bold text-slate-500 font-mono">BEST STREAK</span>
                    <span className="text-lg font-black text-white">5 Days</span>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850">
                    <span className="block text-[10px] uppercase font-bold text-slate-500 font-mono">SUPPORTED LANGS</span>
                    <span className="text-lg font-black text-sky-400">10 Total</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side: Smartphone Device Mockup Shell */}
        <div className="md:col-span-7 flex justify-center items-center">
          
          <div className="relative mx-auto w-full max-w-[315px] h-[640px] bg-slate-950 rounded-[50px] p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.8)] border-4 border-slate-800 flex flex-col transition-all duration-300">
            {/* Speaker bar / notch pill */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-5 w-32 bg-slate-950 rounded-b-2xl z-50 flex items-center justify-center gap-1.5 px-3">
              <div className="w-10 h-0.5 bg-slate-800 rounded-full"></div>
              <div className="w-2 h-2 bg-slate-900 rounded-full border border-slate-800"></div>
            </div>

            {/* Inner viewport container */}
            <div className="w-full h-full rounded-[40px] overflow-hidden flex flex-col relative bg-slate-900 border border-slate-800/40">
              
              {/* Virtual System Status bar */}
              <div className={`px-5 pt-3 pb-1.5 flex justify-between items-center text-[11px] font-bold tracking-tight select-none z-20 ${
                activeScreen === "intro" || activeScreen === "result" ? "bg-slate-100 text-slate-850" : "bg-slate-950 text-slate-400"
              }`}>
                <span>{simulatedTime}</span>
                <div className="flex items-center gap-1.5">
                  <Signal className="w-3 h-3" />
                  <Wifi className="w-3 h-3" />
                  <Battery className="w-3.5 h-3.5 text-emerald-500" />
                </div>
              </div>

              {/* DYNAMIC SCREEN VIEWPORT */}
              <div className="flex-1 overflow-y-auto relative flex flex-col no-scrollbar">
                <AnimatePresence mode="wait">
                  
                  {/* SCREEN 1: Notes Dashboard (Light Theme) */}
                  {activeScreen === "intro" && (
                    <motion.div
                      key="light-dashboard-screen"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1 bg-[#DEE5F0] text-slate-850 p-4 flex flex-col h-full justify-between"
                    >
                      <div className="space-y-4">
                        {/* Title text */}
                        <div className="pt-2">
                          <h4 className="text-3xl font-extrabold tracking-tight text-[#2B3E52] leading-tight">
                            Speak.<br />Transform.<br />Remember.
                          </h4>
                        </div>

                        {/* Search Input */}
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-450" />
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search notes..."
                            className="w-full pl-9 pr-3 py-2 bg-white rounded-full text-xs font-semibold shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
                          />
                        </div>

                        {/* Badges for filter */}
                        <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                          <button 
                            onClick={() => setOnlyFavorites(!onlyFavorites)}
                            className={`px-3 py-1 rounded-full text-[10px] font-extrabold flex items-center gap-1 transition-all ${
                              onlyFavorites ? "bg-[#333E53] text-white" : "bg-white/80 text-slate-600 hover:bg-white"
                            }`}
                          >
                            <Heart className={`w-3 h-3 ${onlyFavorites ? "fill-red-500 stroke-red-500" : ""}`} />
                            Favorites
                          </button>
                          <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-white/85 text-slate-600">↓ Newest</span>
                          <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-white/50 text-slate-500">↑ Oldest</span>
                        </div>

                        {/* List of notes */}
                        <div className="space-y-2 max-h-[290px] overflow-y-auto pr-1">
                          {filteredNotes.map((note) => (
                            <div
                              key={note.id}
                              className="bg-white hover:bg-white/95 rounded-2xl p-3.5 shadow-sm border border-slate-200/40 relative cursor-pointer group"
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h5 className="text-xs font-bold text-[#1E293B] group-hover:text-sky-600 transition-colors">{note.title}</h5>
                                  <span className="text-[9px] text-[#64748B] font-mono tracking-tight mt-0.5 block">{note.date} {note.time}</span>
                                </div>
                                <button
                                  onClick={(e) => toggleFavorite(note.id, e)}
                                  className="p-1 text-slate-300 hover:text-red-500 transition-colors"
                                >
                                  <Heart className={`w-3.5 h-3.5 ${note.favorite ? "fill-red-500 stroke-red-500" : "stroke-slate-400"}`} />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Sim App Menu */}
                      <div className="mt-auto pt-3 border-t border-slate-200/60 flex justify-around items-center text-slate-500 bg-white/70 backdrop-blur-md rounded-2xl py-2 shadow-sm">
                        <button className="text-sky-600 flex flex-col items-center"><Mic className="w-4 h-4 fill-sky-200" /><span className="text-[8px] mt-0.5 font-bold">Mic</span></button>
                        <button className="opacity-50 flex flex-col items-center"><FileText className="w-4 h-4" /><span className="text-[8px] mt-0.5 font-bold">Notes</span></button>
                        <button onClick={() => setActiveScreen("stats")} className="opacity-50 flex flex-col items-center"><BarChart3 className="w-4 h-4" /><span className="text-[8px] mt-0.5 font-bold">Stats</span></button>
                        <button className="opacity-50 flex flex-col items-center"><SettingsIcon className="w-4 h-4" /><span className="text-[8px] mt-0.5 font-bold">Settings</span></button>
                      </div>
                    </motion.div>
                  )}

                  {/* SCREEN 2: Notes Dashboard (Dark Theme) */}
                  {activeScreen === "dark-list" && (
                    <motion.div
                      key="dark-dashboard-screen"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1 bg-[#1A2534] text-slate-100 p-4 flex flex-col h-full justify-between"
                    >
                      <div className="space-y-4">
                        {/* Title text */}
                        <div className="pt-2 flex justify-between items-center">
                          <h4 className="text-lg font-black tracking-tight text-white leading-tight">
                            Voice Diary
                          </h4>
                          <Search className="w-4 h-4 text-slate-450 hover:text-white cursor-pointer" />
                        </div>

                        {/* List of notes */}
                        <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                          {notes.map((note) => (
                            <div
                              key={note.id}
                              className="bg-[#243346] hover:bg-[#2A3C52] rounded-2xl p-3.5 border border-slate-800 relative cursor-pointer group"
                              onClick={(e) => toggleFavorite(note.id, e)}
                            >
                              <div className="flex justify-between items-center">
                                <div>
                                  <h5 className="text-xs font-semibold text-slate-200 group-hover:text-pink-400 transition-colors">{note.title}</h5>
                                  <span className="text-[9px] text-[#A0AEC0] font-mono tracking-tight mt-0.5 block">{note.date} {note.time}</span>
                                </div>
                                <div className="text-slate-500">
                                  <Heart className={`w-3.5 h-3.5 ${note.favorite ? "fill-red-500 stroke-red-500" : "stroke-slate-500"}`} />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Sim App Menu */}
                      <div className="mt-auto pt-3 border-t border-slate-800 flex justify-around items-center text-slate-400 bg-[#16202D] rounded-2xl py-2">
                        <button className="opacity-50 flex flex-col items-center"><Mic className="w-4 h-4" /><span className="text-[8px] mt-0.5">Mic</span></button>
                        <button className="text-pink-500 flex flex-col items-center"><FileText className="w-4 h-4" /><span className="text-[8px] mt-0.5 font-semibold">Notes</span></button>
                        <button onClick={() => setActiveScreen("stats")} className="opacity-50 flex flex-col items-center"><BarChart3 className="w-4 h-4" /><span className="text-[8px] mt-0.5">Stats</span></button>
                        <button className="opacity-50 flex flex-col items-center"><SettingsIcon className="w-4 h-4" /><span className="text-[8px] mt-0.5">Settings</span></button>
                      </div>
                    </motion.div>
                  )}

                  {/* SCREEN 3: Recorder Screen (waveform with "3:53") */}
                  {activeScreen === "recorder" && (
                    <motion.div
                      key="recorder-screen"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1 bg-gradient-to-b from-[#BED2E5] to-[#718DAF] p-5 flex flex-col items-center justify-between h-full"
                    >
                      <div className="w-full text-center pt-4">
                        <span className="text-[10px] tracking-widest font-extrabold uppercase text-[#2B3E52]/70">Journal Session</span>
                        <p className="text-[11px] text-slate-800 font-semibold bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full inline-block mt-1">
                          🎤 Recording Audio ({transcriptionLang})
                        </p>
                      </div>

                      {/* Corrugated Waveform Center */}
                      <div className="relative w-44 h-44 flex items-center justify-center">
                        {/* CSS breathing circles */}
                        <motion.div
                          animate={{ scale: isRecording ? [1, 1.15, 1] : 1 }}
                          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                          className="absolute inset-0 rounded-full border border-sky-200/50 bg-[#DEE5F0]/20"
                        />
                        <motion.div
                          animate={{ scale: isRecording ? [1, 1.08, 1] : 1 }}
                          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut", delay: 0.3 }}
                          className="absolute inset-4 rounded-full border border-white/40 bg-white/10"
                        />
                        
                        <div className="relative z-10 w-32 h-32 rounded-full bg-white/70 backdrop-blur-md flex flex-col items-center justify-center border border-white/80 shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
                          <span className="text-3xl font-black text-[#2B3E52] font-mono tracking-tight">
                            {formatRecordingTime(recordingSeconds)}
                          </span>
                          <span className="text-[9px] text-[#556980] font-bold mt-1 uppercase tracking-wider">Remaining</span>
                        </div>
                      </div>

                      {/* Control controls & Micro bottom tag */}
                      <div className="w-full flex flex-col items-center gap-5">
                        {/* Audio record icon with status */}
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => setIsRecording(!isRecording)}
                            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${
                              isRecording ? "bg-red-500 text-white animate-pulse" : "bg-sky-600 text-white"
                            }`}
                          >
                            <Mic className="w-6 h-6" />
                          </button>
                        </div>
                        
                        <h4 className="text-base font-bold text-slate-900 leading-normal">
                          Just Talk. Capture the Moment.
                        </h4>
                      </div>

                      {/* Bottom Nav bar indicator */}
                      <div className="w-full mt-4 pt-3 border-t border-white/20 flex justify-around items-center text-slate-800 bg-white/40 backdrop-blur-sm rounded-2xl py-2">
                        <button className="text-slate-900 flex flex-col items-center"><Mic className="w-4 h-4" /><span className="text-[8px] mt-0.5 font-bold">Mic</span></button>
                        <button onClick={() => setActiveScreen("intro")} className="opacity-50 flex flex-col items-center"><FileText className="w-4 h-4" /><span className="text-[8px] mt-0.5">Notes</span></button>
                        <button onClick={() => setActiveScreen("stats")} className="opacity-50 flex flex-col items-center"><BarChart3 className="w-4 h-4" /><span className="text-[8px] mt-0.5">Stats</span></button>
                        <button className="opacity-50 flex flex-col items-center"><SettingsIcon className="w-4 h-4" /><span className="text-[8px] mt-0.5">Settings</span></button>
                      </div>
                    </motion.div>
                  )}

                  {/* SCREEN 4: AI Transformed Note Preview */}
                  {activeScreen === "result" && (
                    <motion.div
                      key="result-screen"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1 bg-slate-50 text-slate-850 p-4.5 flex flex-col h-full justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-[10px] text-sky-600 font-extrabold uppercase tracking-wide">Refined by Diary AI</span>
                          <span className="text-[9px] bg-sky-100 text-sky-800 font-semibold px-2 py-0.5 rounded-full">18:23</span>
                        </div>

                        {/* Title text */}
                        <div className="border-b border-slate-200 pb-2">
                          <h4 className="text-lg font-black text-slate-900">{newNoteTitle}</h4>
                        </div>

                        {/* Note Body */}
                        <div className="bg-white rounded-xl p-3 border border-slate-250/60 max-h-[290px] overflow-y-auto shadow-inner">
                          <p className="text-[11px] text-slate-600 leading-relaxed text-left">
                            {newNoteContent}
                          </p>
                        </div>
                      </div>

                      {/* Save & Cancel buttons */}
                      <div className="mt-4 space-y-2">
                        <div className="flex gap-2.5">
                          <button
                            onClick={() => {
                              setActiveScreen("intro");
                            }}
                            className="flex-1 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-[11px] rounded-xl transition-all"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleSaveResult}
                            className="flex-1 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-[11px] rounded-xl transition-all shadow-md flex items-center justify-center gap-1"
                          >
                            <Check className="w-3.5 h-3.5" />
                            Save
                          </button>
                        </div>
                        <div className="text-center">
                          <span className="text-[10px] text-slate-500 font-bold">AI Turns Speech Into Memories.</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* SCREEN 5: Statistics & Streak Screen */}
                  {activeScreen === "stats" && (
                    <motion.div
                      key="stats-screen"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1 bg-[#1A2534] text-slate-100 p-4.5 flex flex-col h-full justify-between"
                    >
                      <div className="space-y-3.5">
                        <div className="text-center pt-2">
                          <span className="text-[10px] font-bold text-sky-400 tracking-wider">JOURNALING HABITS</span>
                          <h4 className="text-lg font-extrabold text-white">Statistics</h4>
                        </div>

                        {/* Calendar mock */}
                        <div className="bg-[#243346] rounded-2xl p-3 border border-slate-800/60">
                          <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 border-b border-slate-800 pb-1.5 mb-2">
                            <span>May 2026</span>
                            <div className="flex gap-2">
                              <span>‹</span>
                              <span>›</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-7 gap-1 text-center text-[9px] font-bold text-slate-500">
                            <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                          </div>
                          <div className="grid grid-cols-7 gap-1 text-center text-[10px] mt-1.5">
                            <span className="opacity-30">27</span><span className="opacity-30">28</span><span className="opacity-30">29</span><span className="opacity-30">30</span>
                            <span className="p-0.5">1</span><span className="p-0.5">2</span><span className="p-0.5">3</span>
                            <span className="p-0.5">4</span><span className="p-0.5">5</span><span className="p-0.5">6</span><span className="p-0.5">7</span><span className="p-0.5">8</span><span className="p-0.5">9</span>
                            {/* Marked recorded day */}
                            <span className="p-0.5 bg-sky-400/20 text-sky-400 rounded-full font-bold">10</span>
                            <span className="p-0.5 bg-sky-400/20 text-sky-400 rounded-full font-bold">11</span>
                            <span className="p-0.5 bg-sky-400/20 text-sky-400 rounded-full font-bold">12</span>
                            <span className="p-0.5">13</span><span className="p-0.5">14</span><span className="p-0.5">15</span><span className="p-0.5">16</span>
                            <span className="p-0.5">17</span><span className="p-0.5">18</span><span className="p-0.5">19</span><span className="p-0.5">20</span><span className="p-0.5">21</span><span className="p-0.5">22</span><span className="p-0.5">23</span>
                          </div>
                        </div>

                        {/* Streak trackers */}
                        <div className="grid grid-cols-2 gap-2.5">
                          <div className="bg-[#243346] p-2.5 rounded-xl border border-slate-800 text-center flex flex-col items-center">
                            <Flame className="w-5 h-5 text-amber-500 fill-amber-500/20" />
                            <span className="text-[9px] text-[#A0AEC0] mt-1">Current streak</span>
                            <span className="text-xs font-black text-white mt-0.5">0 Days</span>
                          </div>
                          <div className="bg-[#243346] p-2.5 rounded-xl border border-slate-800 text-center flex flex-col items-center">
                            <Trophy className="w-5 h-5 text-yellow-500 fill-yellow-500/20" />
                            <span className="text-[9px] text-[#A0AEC0] mt-1">Best streak</span>
                            <span className="text-xs font-black text-white mt-0.5">5 Days</span>
                          </div>
                        </div>

                        {/* Top Words Module */}
                        <div className="bg-[#243346] px-3.5 py-2.5 rounded-xl border border-slate-800 text-left space-y-1.5">
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Top Words</span>
                          <div className="space-y-1 text-[11px]">
                            <div className="flex justify-between">
                              <span className="text-slate-200">1. need</span>
                              <span className="text-sky-400 font-bold font-mono">4</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-200">2. time</span>
                              <span className="text-sky-400 font-bold font-mono">3</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-200">3. with</span>
                              <span className="text-sky-400 font-bold font-mono">3</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-200">4. screen</span>
                              <span className="text-sky-400 font-bold font-mono">2</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Caption indicator */}
                      <span className="text-[10px] text-slate-400 font-bold block text-center mt-3">
                        Track Your Thoughts.
                      </span>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Lower virtual phone Home Bar indicator */}
              <div className="pb-1.5 pt-1 bg-slate-950 flex justify-center">
                <div className="w-20 h-1 bg-slate-700 rounded-full"></div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
