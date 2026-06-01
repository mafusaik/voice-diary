import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Wifi, 
  Battery, 
  Signal, 
  Mic, 
  MicOff,
  FileText, 
  BarChart3, 
  Search, 
  Heart, 
  Calendar, 
  Flame, 
  Trophy, 
  Check, 
  List,
  Clock,
  Settings,
  X,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  ChevronDown
} from "lucide-react";
import { TranslationSchema } from "../data/translations";

interface ScreenshotsShowcaseProps {
  currentLanguage: string;
  translations: Record<string, TranslationSchema>;
  isDarkTheme: boolean;
}

export default function InteractiveMockup({ currentLanguage, translations, isDarkTheme }: ScreenshotsShowcaseProps) {
  const t = translations[currentLanguage] || translations["en-US"];
  // activeTab maps directly to the user's 6 screenshots/tabs:
  // 0: Index (Light) -> Screenshot 2
  // 1: Index (Dark) -> Screenshot 1
  // 2: Note Editor (Light Detail) -> Screenshot 3
  // 3: Voice Recorder (Active Rec) -> Screenshot 4
  // 4: Statistics (Metrics Calendar) -> Screenshot 5
  // 5: Settings -> Screenshot 6
  const [activeTab, setActiveTab] = useState<number>(0);
  const [mockDarkMode, setMockDarkMode] = useState<boolean>(false);
  const [isMockLanguageOpen, setIsMockLanguageOpen] = useState<boolean>(false);
  const [mockLanguage, setMockLanguage] = useState<string>("English 🇺🇸");
  const [isRestored, setIsRestored] = useState<boolean>(false);

  // Define screen tabs with names
  const screenTabs = [
    { id: 0, label: "Index (Light)", icon: List },
    { id: 1, label: "Index (Dark)", icon: List },
    { id: 2, label: "Note Editor", icon: FileText },
    { id: 3, label: "Voice Recorder", icon: Mic },
    { id: 4, label: "Statistics", icon: BarChart3 },
    { id: 5, label: "Settings", icon: Settings },
  ];

  // Notes lists compiled strictly from user screenshots
  const getLightNotes = () => [
    { title: "Bug in the App", time: "2026-05-12 12:00", fav: true },
    { title: "Thoughts Before Sleep", time: "2026-05-11 12:00", fav: true },
    { title: "Lecture Notes", time: "2026-05-10 12:00", fav: true },
    { title: "Goals for 2026", time: "2026-04-12 12:00", fav: true },
    { title: "Vacation Plans", time: "2026-04-11 12:00", fav: true },
    { title: "Pasta Recipe", time: "2026-04-10 12:00", fav: false },
    { title: "Workout", time: "2026-04-06 12:00", fav: true },
    { title: "Books to Read", time: "2026-04-05 12:00", fav: false },
    { title: "Shopping List", time: "2026-04-04 12:00", fav: true },
    { title: "Project Idea", time: "2026-04-03 12:00", fav: false },
  ];

  const getDarkNotes = () => [
    { title: "Bug in the App", time: "2026-05-12 12:00", fav: true },
    { title: "Thoughts Before Sleep", time: "2026-05-11 12:00", fav: true },
    { title: "Lecture Notes", time: "2026-05-10 12:00", fav: true },
    { title: "Goals for 2026", time: "2026-04-12 12:00", fav: true },
    { title: "Vacation Plans", time: "2026-04-11 12:00", fav: true },
    { title: "Pasta Recipe", time: "2026-04-10 12:00", fav: false },
    { title: "Workout", time: "2026-04-06 12:00", fav: true },
    { title: "Books to Read", time: "2026-04-05 12:00", fav: false },
    { title: "Shopping List", time: "2026-04-04 12:00", fav: true },
    { title: "Project Idea", time: "2026-04-03 12:00", fav: false },
    { title: "Team Meeting", time: "2026-04-02 12:00", fav: false },
  ];

  // Specific color constants mimicking Android layouts
  const lightBgStyle = "linear-gradient(180deg, #E5EEF9 0%, #D8E2F2 40%, #CFDAEB 100%)";
  const darkBgStyle = "linear-gradient(180deg, #1A2535 0%, #171F2C 50%, #121822 100%)";
  const isMockDarkActive = activeTab === 1 || (activeTab === 5 && mockDarkMode);

  return (
    <div id="screenshots-showcase" className="flex flex-col items-center gap-6 w-full max-w-lg">
      
      {/* Top Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-1.5 p-1.5 bg-slate-100/80 dark:bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-200/40 dark:border-slate-800/60 w-full shadow-xs">
        {screenTabs.map((tab) => {
          const Icon = tab.icon;
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                isSelected 
                  ? "bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-xs"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Samsung S21 Ultra Device Mockup Frame */}
      <div className="relative w-full aspect-[20/41.5] max-w-[316px] rounded-[36px] border-[7px] border-slate-900/95 dark:border-slate-800/95 shadow-2xl bg-black overflow-hidden select-none">
        
        {/* S21 Ultra Centered Micro Camera Dot */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-slate-950 rounded-full flex items-center justify-center border border-slate-800/60 z-30">
          <div className="w-1 h-1 bg-sky-950 rounded-full" />
        </div>

        {/* Floating Screen Area */}
        <div 
          className="w-full h-full pt-6 pb-2.5 flex flex-col font-sans transition-all duration-300 relative text-slate-800"
          style={{
            background: isMockDarkActive ? darkBgStyle : lightBgStyle,
            color: isMockDarkActive ? "#F1F5F9" : "#1E293B"
          }}
        >
          {/* Status Bar */}
          <div className="px-5 py-1 flex justify-between items-center text-[10px] font-bold opacity-80 z-20">
            <span>
              {activeTab === 0 ? "9:46" : activeTab === 1 ? "9:52" : activeTab === 2 ? "9:52" : activeTab === 3 ? "9:57" : activeTab === 5 ? "8:36" : "9:52"}
            </span>
            <div className="flex items-center gap-1.5">
              <Signal className="w-2.5 h-2.5" />
              <Wifi className="w-2.5 h-2.5" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* SCREEN COMPONENT RENDERS */}
          <div className="flex-grow overflow-y-auto px-4 pb-14 pt-1.5 select-none relative z-10 scrollbar-none">
            <AnimatePresence mode="wait">
              
              {/* SCREEN 0: NOTES LIST (Light Theme, Screenshot 2) */}
              {activeTab === 0 && (
                <motion.div 
                  key="light-index" 
                  initial={{ opacity: 0, y: 5 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0 }}
                  className="space-y-3.5"
                >
                  {/* Search input mock */}
                  <div className="bg-white border border-[#CBD9EE] rounded-[18px] px-3.5 py-2.5 flex items-center justify-between text-slate-800 shadow-3xs">
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-400 text-[11px] font-medium">Search notes...</span>
                    </div>
                    <X className="w-4 h-4 text-slate-400 cursor-pointer" />
                  </div>

                  {/* Horizontal row of tag chips */}
                  <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none text-[8.5px]">
                    <span className="px-2.5 py-1.5 bg-white/60 text-slate-600 border border-slate-200/50 rounded-lg flex items-center gap-1 shrink-0 font-bold shadow-3xs">
                      <Heart className="w-3 h-3 text-slate-400" />
                      Favorites
                    </span>
                    <span className="px-3 py-1.5 bg-[#D1E1FA] text-[#20497F] border border-[#B1CEEE] rounded-lg shrink-0 font-extrabold flex items-center gap-0.5 shadow-3xs">
                      ↓ Newest
                    </span>
                    <span className="px-2.5 py-1.5 bg-white/60 text-slate-600 border border-slate-200/50 rounded-lg shrink-0 font-bold shadow-3xs">
                      ↑ Oldest
                    </span>
                    <span className="px-2.5 py-1.5 bg-white/60 text-slate-600 border border-slate-200/50 rounded-lg shrink-0 font-bold shadow-3xs">
                      Title A-Z
                    </span>
                  </div>

                  {/* Scrollable list items identical to user layout */}
                  <div className="space-y-2.5 pb-2">
                    {getLightNotes().map((note, index) => (
                      <div 
                        key={index}
                        className="bg-gradient-to-r from-[#D7F5FD]/90 to-white border border-sky-100/50 rounded-2xl p-3.5 flex justify-between items-center shadow-4xs hover:opacity-95 transition-opacity cursor-pointer"
                        onClick={() => setActiveTab(2)}
                      >
                        <div className="space-y-1">
                          <h4 className="text-[11.5px] font-extrabold text-slate-950 tracking-tight">{note.title}</h4>
                          <span className="text-[9.5px] text-slate-400 font-bold block">{note.time}</span>
                        </div>
                        {note.fav ? (
                          <Heart className="w-4 h-4 text-[#FF3B30] fill-[#FF3B30] shrink-0" />
                        ) : (
                          <Heart className="w-4 h-4 text-slate-350 shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* SCREEN 1: NOTES LIST (Dark Theme, Screenshot 1) */}
              {activeTab === 1 && (
                <motion.div 
                  key="dark-index" 
                  initial={{ opacity: 0, y: 5 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0 }}
                  className="space-y-3.5"
                >
                  {/* Search input mock (dark mode) */}
                  <div className="bg-[#212E3F]/90 border border-[#2D3E53]/40 rounded-[18px] px-3.5 py-2.5 flex items-center justify-between text-[#F1F5F9] shadow-3xs">
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-[#7E96AE]" />
                      <span className="text-[#7E96AE] text-[11px] font-medium">Search notes...</span>
                    </div>
                    <X className="w-4 h-4 text-[#7E96AE] cursor-pointer" />
                  </div>

                  {/* Horizontal row of tag chips (dark mode) */}
                  <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none text-[8.5px]">
                    <span className="px-2.5 py-1.5 bg-[#212E3F]/40 text-[#7E96AE] border border-slate-700/30 rounded-lg flex items-center gap-1 shrink-0 font-bold shadow-3xs">
                      <Heart className="w-3 h-3 text-[#5D738E]" />
                      Favorites
                    </span>
                    <span className="px-3 py-1.5 bg-[#253E56] text-[#5FCEFF] border border-[#305373] rounded-lg shrink-0 font-extrabold flex items-center gap-0.5 shadow-3xs">
                      ↓ Newest
                    </span>
                    <span className="px-2.5 py-1.5 bg-[#212E3F]/40 text-[#7E96AE] border border-slate-700/30 rounded-lg shrink-0 font-bold shadow-3xs">
                      ↑ Oldest
                    </span>
                    <span className="px-2.5 py-1.5 bg-[#212E3F]/40 text-[#7E96AE] border border-slate-700/30 rounded-lg shrink-0 font-bold shadow-3xs">
                      Title A-Z
                    </span>
                  </div>

                  {/* Dark-themed exact list of notes */}
                  <div className="space-y-2.5 pb-2">
                    {getDarkNotes().map((note, index) => (
                      <div 
                        key={index}
                        className="bg-[#212E3F]/90 border border-[#2D3E53]/40 rounded-2xl p-3.5 flex justify-between items-center shadow-sm hover:opacity-95 transition-opacity cursor-pointer"
                        onClick={() => setActiveTab(2)}
                      >
                        <div className="space-y-1">
                          <h4 className="text-[11.5px] font-bold text-white tracking-tight">{note.title}</h4>
                          <span className="text-[9.5px] text-[#7E96AE] font-semibold block">{note.time}</span>
                        </div>
                        {note.fav ? (
                          <Heart className="w-4 h-4 text-[#FF3C30] fill-[#FF3C30] shrink-0" />
                        ) : (
                          <Heart className="w-4 h-4 text-[#5D738E] shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* SCREEN 2: NOTE DETAIL / EDITOR (Screenshot 3) */}
              {activeTab === 2 && (
                <motion.div 
                  key="note-editor" 
                  initial={{ opacity: 0, scale: 0.98 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0 }}
                  className="space-y-4 pt-1 flex flex-col h-full min-h-[365px]"
                >
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight text-center py-1">Vacation Plans</h3>
                  
                  {/* Main text container mimics content of Screenshot 3 */}
                  <div className="text-[10px] text-slate-700 leading-relaxed font-semibold pr-1 opacity-90 max-h-[220px] overflow-y-auto scrollbar-thin flex-grow">
                    I've been thinking a lot about my vacation plans for May and I'm currently choosing between Portugal and Georgia. Portugal attracts me with its ocean views, warm climate, beautiful architecture, and the opportunity to visit Lisbon, Porto, and small coastal towns. I especially want to try the local cuisine, travel by train along the coast, and spend a few days near the ocean. On the other hand, Georgia seems like a more affordable and cozy option with amazing mountains, delicious food, and very welcoming people. I would love to visit Tbilisi, Kazbegi, maybe spend a few days near the vineyards, and try traditional Georgian dishes and wine. Before making a final decision, I need to compare flight prices, accommodation costs, weather conditions, and transportation options between cities. I also want to plan the trip in advance so I can avoid overpaying for hotels and tickets. Ideally, the vacation should be around 10 to 14 days long, with enough time both for sightseeing and relaxing without rushing from one place to another.
                  </div>

                  {/* Horizontal rounded cancel/save buttons */}
                  <div className="flex gap-2.5 pt-3 mt-auto">
                    <button 
                      onClick={() => setActiveTab(0)}
                      className="bg-[#E4EDFB]/80 border border-white/60 text-slate-800 font-bold py-3.5 px-4 rounded-[24px] text-[11px] flex-1 shadow-3xs font-sans hover:bg-[#D5E2F5] transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={() => setActiveTab(0)}
                      className="bg-[#E4EDFB]/80 border border-white/60 text-slate-800 font-bold py-3.5 px-4 rounded-[24px] text-[11px] flex-1 shadow-3xs font-sans hover:bg-[#D5E2F5] transition-colors cursor-pointer"
                    >
                      Save
                    </button>
                  </div>
                </motion.div>
              )}

              {/* SCREEN 3: ACTIVE VOICE RECORDER (Screenshot 4) */}
              {activeTab === 3 && (
                <motion.div 
                  key="voice-recorder" 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center min-h-[352px] h-full relative"
                >
                  {/* Outer glowing dynamic layout centered */}
                  <div className="flex-grow flex flex-col items-center justify-center">
                    <div className="w-36 h-36 rounded-full border-4 border-[#C8DCFB]/40 flex flex-col items-center justify-center relative shadow-sm">
                      {/* Innermost ambient loop circle */}
                      <div className="w-[130px] h-[130px] rounded-full border-3 border-sky-400/80 shadow-[0_0_15px_rgba(56,189,248,0.25)] absolute inset-1 animate-pulse" />
                      
                      {/* Timer display */}
                      <span className="text-3xl text-slate-800 font-medium font-sans z-10 select-none">2:42</span>
                    </div>
                  </div>

                  {/* Floating Mute Button on bottom right */}
                  <div className="absolute bottom-[10px] right-2 z-20">
                    <button 
                      onClick={() => {}}
                      className="w-13 h-13 rounded-full bg-[#E4EEFC]/95 border border-white/50 flex items-center justify-center shadow-md text-[#FF3B30] hover:bg-[#D4E3FB] cursor-pointer transition-colors"
                    >
                      <MicOff className="w-5.5 h-5.5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* SCREEN 4: STATISTICS (Screenshot 5) */}
              {activeTab === 4 && (
                <motion.div 
                  key="statistics-screeen" 
                  initial={{ opacity: 0, y: 5 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0 }}
                  className="space-y-3 pt-1 pb-1"
                >
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight text-center">Statistics</h3>

                  {/* Calendar view card */}
                  <div className="bg-white/85 border border-[#DEEBFB] rounded-2xl p-3.5 shadow-4xs select-none">
                    <div className="flex items-center justify-between text-[#21354F] font-bold text-[10px] pb-2">
                      <ChevronLeft className="w-3.5 h-3.5 opacity-60 cursor-pointer" />
                      <span className="font-extrabold font-sans">May 2026</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60 cursor-pointer" />
                    </div>

                    {/* Weekday Labels (aligned exactly to Screenshot 5) */}
                    <div className="grid grid-cols-7 text-center text-[7.5px] font-bold text-slate-400 pt-1">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>

                    {/* Grid Days matching May 2026 (Starts on a Friday) */}
                    <div className="grid grid-cols-7 text-center text-[8.5px] font-black text-slate-700 gap-y-2.5 pt-2.5">
                      {/* Empty spaces for Mon-Thu */}
                      <span className="opacity-0"></span>
                      <span className="opacity-0"></span>
                      <span className="opacity-0"></span>
                      <span className="opacity-0"></span>

                      {/* Day 1 - 31 */}
                      <span>1</span><span>2</span><span>3</span>
                      <span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>

                      {/* Active Days with circles & dots */}
                      <div className="flex flex-col items-center justify-center relative">
                        <span className="w-5.5 h-5.5 bg-[#CCEEFA] text-slate-800 rounded-full flex items-center justify-center font-black">10</span>
                        <span className="w-1 h-1 bg-[#1A73E8] rounded-full absolute -bottom-1" />
                      </div>
                      <div className="flex flex-col items-center justify-center relative">
                        <span className="w-5.5 h-5.5 bg-[#CCEEFA] text-slate-800 rounded-full flex items-center justify-center font-black">11</span>
                        <span className="w-1 h-1 bg-[#1A73E8] rounded-full absolute -bottom-1" />
                      </div>
                      <div className="flex flex-col items-center justify-center relative">
                        <span className="w-5.5 h-5.5 bg-[#CCEEFA] text-slate-800 rounded-full flex items-center justify-center font-black">12</span>
                        <span className="w-1 h-1 bg-[#1A73E8] rounded-full absolute -bottom-1" />
                      </div>

                      <span>13</span><span>14</span><span>15</span><span>16</span><span>17</span>
                      <span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span>
                      <span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span><span>31</span>
                    </div>
                  </div>

                  {/* Side-by-Side Streaks Cards */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-[#E9F3FC]/75 border border-white/50 rounded-2xl p-3 flex flex-col justify-center text-left shadow-4xs">
                      <span className="text-slate-800 font-black text-[11.5px] flex items-center gap-1">
                        <Flame className="w-4 h-4 text-orange-500 fill-orange-505" />
                        0 days
                      </span>
                      <span className="text-[9px] text-slate-500 font-bold mt-0.5">Current streak</span>
                    </div>

                    <div className="bg-[#E9F3FC]/75 border border-white/50 rounded-2xl p-3 flex flex-col justify-center text-left shadow-4xs">
                      <span className="text-slate-800 font-black text-[11.5px] flex items-center gap-1">
                        <Trophy className="w-4 h-4 text-amber-500 fill-amber-500" />
                        5 days
                      </span>
                      <span className="text-[9px] text-slate-500 font-bold mt-0.5">Best streak</span>
                    </div>
                  </div>

                  {/* Top Words Card Box */}
                  <div className="bg-white/85 border border-[#DEEBFB] rounded-2xl p-3.5 space-y-2 shadow-4xs select-none">
                    <h4 className="text-[10px] font-black tracking-tight text-slate-900 pb-0.5">Top words</h4>
                    <div className="space-y-1.5 text-[10px] font-semibold text-slate-700">
                      {[
                        { word: "need", count: 4 },
                        { word: "time", count: 3 },
                        { word: "with", count: 3 },
                        { word: "screen", count: 2 },
                        { word: "data", count: 2 },
                        { word: "viewmodel", count: 2 },
                        { word: "tomorrow", count: 2 },
                        { word: "pres...", count: 2 },
                        { word: "logic", count: 2 },
                      ].map((item, id) => (
                        <div key={id} className="flex justify-between items-center opacity-90">
                          <span className="tracking-tight">{id + 1}. {item.word}</span>
                          <span className="w-4 h-4 rounded-full bg-[#D1E0F5] text-slate-700 font-black text-[8px] flex items-center justify-center">
                            {item.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              )}

              {/* SCREEN 5: SETTINGS (Screenshot 6 - New Settings View) */}
              {activeTab === 5 && (
                <motion.div 
                  key="settings-screen" 
                  initial={{ opacity: 0, y: 5 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0 }}
                  className="space-y-4 pt-1 pb-1 relative"
                >
                  <h3 className={`text-base font-extrabold text-center tracking-tight pb-1 ${
                    isMockDarkActive ? "text-white" : "text-[#21354F]"
                  }`}>
                    Settings
                  </h3>

                  {/* Appearance section */}
                  <div>
                    <span className="text-[10px] font-bold text-[#5F738A] uppercase tracking-wider block mb-2">
                      Appearance
                    </span>
                    <div className="flex justify-between items-center py-1">
                      <span className={`text-[12.5px] font-bold ${isMockDarkActive ? "text-slate-200" : "text-[#21354F]"}`}>
                        Dark Mode
                      </span>
                      {/* Interactive Custom Switch */}
                      <button 
                        onClick={() => setMockDarkMode(!mockDarkMode)}
                        className={`w-11 h-6 rounded-full transition-colors relative shadow-3xs cursor-pointer ${
                          mockDarkMode ? "bg-sky-500" : "bg-[#BCCCE1]"
                        }`}
                      >
                        <motion.span 
                          layout
                          className="w-4.5 h-4.5 bg-white rounded-full absolute top-[3.5px]"
                          animate={{ left: mockDarkMode ? "22px" : "3.5px" }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Language section */}
                  <div className="relative">
                    <span className="text-[10px] font-bold text-[#5F738A] uppercase tracking-wider block mb-2">
                      Language
                    </span>
                    
                    {/* Dropdown Input Box */}
                    <div 
                      onClick={() => setIsMockLanguageOpen(!isMockLanguageOpen)}
                      className={`rounded-[16px] px-3.5 py-2.5 flex items-center justify-between shadow-3xs cursor-pointer border transition-all ${
                        isMockDarkActive 
                          ? "bg-[#212E3F]/90 border-[#2D3E53]/40 text-white hover:bg-[#212E3F]/100" 
                          : "bg-white border-[#CBD9EE]/50 text-[#21354F] hover:bg-white/90"
                      }`}
                    >
                      <span className="text-[11.5px] font-bold">{mockLanguage}</span>
                      <ChevronDown className={`w-4 h-4 text-[#5F738A] transition-transform duration-200 ${isMockLanguageOpen ? "rotate-180" : ""}`} />
                    </div>

                    {/* Popover Language List Overlay */}
                    <AnimatePresence>
                      {isMockLanguageOpen && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95, y: -5 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -5 }}
                          className={`absolute z-30 left-0 right-0 mt-1 rounded-[14px] border shadow-lg overflow-hidden py-1 ${
                            isMockDarkActive 
                              ? "bg-[#1E2938] border-slate-700/60 text-slate-200" 
                              : "bg-white border-slate-200/80 text-slate-800"
                          }`}
                        >
                          {[
                            { name: "English 🇺🇸", code: "en-US" },
                            { name: "German 🇩🇪", code: "de-DE" },
                            { name: "French 🇫🇷", code: "fr-FR" },
                            { name: "Japanese 🇯🇵", code: "ja-JP" },
                            { name: "Spanish 🇪🇸", code: "es-ES" }
                          ].map((lang) => (
                            <button
                              key={lang.code}
                              onClick={() => {
                                setMockLanguage(lang.name);
                                setIsMockLanguageOpen(false);
                              }}
                              className={`w-full text-left px-4 py-2 text-[11px] font-bold transition-colors ${
                                mockLanguage === lang.name 
                                  ? "bg-sky-500/10 text-sky-500" 
                                  : isMockDarkActive ? "hover:bg-slate-800" : "hover:bg-slate-50"
                              }`}
                            >
                              {lang.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Subscription section */}
                  <div>
                    <span className="text-[10px] font-bold text-[#5F738A] uppercase tracking-wider block mb-2">
                      Subscription
                    </span>
                    <div className="flex items-center gap-2.5 py-1">
                      <CreditCard className="w-5 h-5 text-[#5F738A] shrink-0" />
                      <span className={`text-[12.5px] font-bold ${isMockDarkActive ? "text-slate-200" : "text-[#21354F]"}`}>
                        No active subscription
                      </span>
                    </div>
                    
                    {/* Restore purchases button */}
                    <button 
                      onClick={() => {
                        setIsRestored(true);
                        setTimeout(() => setIsRestored(false), 2000);
                      }}
                      className={`w-full font-extrabold py-3 px-4 rounded-[20px] text-[11px] tracking-tight shadow-3xs transition-all cursor-pointer text-center mt-3 ${
                        isRestored 
                          ? "bg-emerald-500 text-white border-none"
                          : isMockDarkActive 
                            ? "bg-[#253E56] hover:bg-[#203449] text-[#5FCEFF] border border-[#305373]/30" 
                            : "bg-[#CBD9EE]/85 hover:bg-[#BACDE6]/90 text-[#213F6D] border border-white/50"
                      }`}
                    >
                      {isRestored ? "✓ Purchases restored" : "Restore purchases"}
                    </button>
                  </div>

                  {/* Support Section */}
                  <div className="pt-1">
                    <span className="text-[10px] font-bold text-[#5F738A] uppercase tracking-wider block mb-1">
                      Support
                    </span>
                    <div className="text-[12px] font-bold">
                      <span className="text-slate-500">Support Email: </span>
                      <a href="mailto:glazer.dev@gmail.com" className="text-[#20497F] dark:text-sky-400 hover:underline">
                        glazer.dev@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* DYNAMIC ANDROID FLOATING BOTTOM NAVIGATION PILL */}
          <div className="absolute bottom-2.5 inset-x-0 z-20">
            <div 
              className={`w-[85%] mx-auto rounded-[24px] flex items-center justify-between px-3.5 py-2.5 border backdrop-blur-md transition-all duration-300 shadow-lg ${
                isMockDarkActive 
                  ? "bg-[#1C2A3C]/95 border-slate-700/50 text-[#8EA0B6]" 
                  : "bg-white/70 border-white/60 text-[#5F738A]"
              }`}
            >
              {/* Mic navigation trigger */}
              <button 
                onClick={() => setActiveTab(3)} 
                className={`p-1.5 rounded-xl transition-all relative cursor-pointer ${
                  activeTab === 3 
                    ? (isMockDarkActive ? "bg-slate-700/40 text-[#5FCEFF] border border-slate-600/30" : "bg-[#D5E3F9] font-bold text-[#1A73E8] border border-white") 
                    : "hover:opacity-80"
                }`}
                title="Voice Recorder"
              >
                <Mic className="w-[18px] h-[18px]" />
              </button>

              {/* Index notes list standard trigger */}
              <button 
                onClick={() => {
                  // toggles back to user preferred visual mode
                  if (activeTab === 0 || activeTab === 1 || activeTab === 2) {
                    // switch to opposite index just for cool play toggle
                    setActiveTab(activeTab === 0 ? 1 : 0);
                  } else {
                    setActiveTab(isMockDarkActive ? 1 : 0);
                  }
                }} 
                className={`p-1.5 rounded-xl transition-all relative cursor-pointer ${
                  _isNotesIndexTabActive(activeTab)
                    ? (isMockDarkActive ? "bg-slate-700/40 text-[#5FCEFF] border border-slate-600/30" : "bg-[#D5E3F9] text-[#1A73E8] border border-white") 
                    : "hover:opacity-80"
                }`}
                title="Notes List"
              >
                <FileText className="w-[18px] h-[18px]" />
              </button>

              {/* Habits stats navigation trigger */}
              <button 
                onClick={() => setActiveTab(4)} 
                className={`p-1.5 rounded-xl transition-all relative cursor-pointer ${
                  activeTab === 4 
                    ? (isMockDarkActive ? "bg-slate-700/40 text-[#5FCEFF] border border-slate-600/30" : "bg-[#D5E3F9] text-[#1A73E8] border border-white") 
                    : "hover:opacity-80"
                }`}
                title="Statistics"
              >
                <BarChart3 className="w-[18px] h-[18px]" />
              </button>

              {/* Settings navigation trigger */}
              <button 
                onClick={() => setActiveTab(5)} 
                className={`p-1.5 rounded-xl transition-all relative cursor-pointer ${
                  activeTab === 5 
                    ? (isMockDarkActive ? "bg-slate-700/40 text-[#5FCEFF] border border-slate-600/30" : "bg-[#D5E3F9] text-[#1A73E8] border border-white") 
                    : "hover:opacity-80"
                }`}
                title="Settings"
              >
                <Settings className="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Small informative detail caption below phone */}
      <div className="text-center max-w-[280px]">
        <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-relaxed font-semibold">
          ★ {translations[currentLanguage]?.navSimulator || "Screenshots Showcase"}: Click on bottom navigation symbols or selector tabs to view individual layouts.
        </p>
      </div>

    </div>
  );
}

// Helper to check if notes index tab category is active
function _isNotesIndexTabActive(id: number) {
  return id === 0 || id === 1 || id === 2;
}
