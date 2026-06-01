import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Wifi, 
  Battery, 
  Signal, 
  Mic, 
  FileText, 
  BarChart3, 
  Search, 
  Heart, 
  Calendar, 
  Flame, 
  Trophy, 
  Sparkles, 
  Check, 
  List,
  Sparkle,
  Clock,
  Play
} from "lucide-react";
import { TranslationSchema } from "../data/translations";

interface ScreenshotsShowcaseProps {
  currentLanguage: string;
  translations: Record<string, TranslationSchema>;
  isDarkTheme: boolean;
}

export default function InteractiveMockup({ currentLanguage, translations, isDarkTheme }: ScreenshotsShowcaseProps) {
  const t = translations[currentLanguage] || translations["en-US"];
  const [activeTab, setActiveTab] = useState<number>(0);

  // Define screen names
  const screenTabs = [
    { id: 0, label: "Notes Index (Light)", icon: List },
    { id: 1, label: "Notes Index (Dark)", icon: List },
    { id: 2, label: "Voice Recorder", icon: Mic },
    { id: 3, label: "AI Memo Result", icon: Sparkles },
    { id: 4, label: "Habits & Streaks", icon: BarChart3 },
  ];

  // Helper translations for standard note list
  const getSimulatedNotes = () => [
    { 
      id: "1", 
      title: currentLanguage === "ru-RU" ? "Планы на майские" : currentLanguage === "uk-UA" ? "Плани на травневі" : "Vacation Plans", 
      time: "14:15", 
      duration: "3:53",
      fav: true,
      text: t.subtitle.slice(0, 60) + "..."
    },
    { 
      id: "2", 
      title: currentLanguage === "ru-RU" ? "Идея для проекта" : currentLanguage === "uk-UA" ? "Ідея для проекту" : "Project Idea", 
      time: "11:32", 
      duration: "1:20",
      fav: false,
      text: t.bullet1Text.slice(0, 60) + "..."
    },
    { 
      id: "3", 
      title: currentLanguage === "ru-RU" ? "Список покупок" : currentLanguage === "uk-UA" ? "Список покупок" : "Shopping List", 
      time: "Yesterday", 
      duration: "0:45",
      fav: true,
      text: "Organic blue milk, fresh apples, almond flour..."
    }
  ];

  // Helper for AI summary segments
  const getAISummary = () => {
    if (currentLanguage === "ru-RU" || currentLanguage === "be-BY") {
      return {
        title: "Планы на отпуск 🌲",
        summary: "Обсуждение вариантов поездки в мае. Выбор между Португалией (океан, архитектура, поезда) и Грузией (горы, гостеприимство, доступный бюджет). Необходимо сравнить билеты.",
        actionItems: [
          "Сравнить цены на авиабилеты",
          "Проверить погоду на май в Лиссабоне и Тбилиси",
          "Составить список отелей"
        ]
      };
    }
    if (currentLanguage === "uk-UA") {
      return {
        title: "Плани на відпустку 🌲",
        summary: "Обговорення варіантів поїздки в травні. Вибір між Португалією (океан, архітектура, потяги) та Грузією (гори, гостинність, доступний бюджет). Необхідно порівняти квитки.",
        actionItems: [
          "Порівняти ціни на авіаквитки",
          "Перевірити погоду на травень в Лісабоні та Тбілісі",
          "Скласти список готелів"
        ]
      };
    }
    if (currentLanguage === "de-DE") {
      return {
        title: "Urlaubsplanung 🌲",
        summary: "Diskussion über Reiseoptionen im Mai. Auswahl zwischen Portugal (Ozean, Architektur, Züge) und Georgien (Berge, Gastfreundschaft, günstigeres Budget). Flugpreise müssen verglichen werden.",
        actionItems: [
          "Flugpreise vergleichen",
          "Wetter im Mai für Lissabon und Tiflis prüfen",
          "Liste von Hotels erstellen"
        ]
      };
    }
    if (currentLanguage === "fr-FR") {
      return {
        title: "Projets de vacances 🌲",
        summary: "Discussion sur les options de voyage en mai. Choix entre le Portugal (océan, architecture, trains) et la Géorgie (montagnes, hospitalité, budget plus abordable). Comparer les vols.",
        actionItems: [
          "Comparer le prix des billets d'avion",
          "Vérifier la météo de mai à Lisbonne et Tbilissi",
          "Faire une liste d'hôtels potentiels"
        ]
      };
    }
    if (currentLanguage === "ja-JP") {
      return {
        title: "休暇の旅行計画 🌲",
        summary: "5月の旅行先に関するブレインストーミング。海、美しい建築、電車の旅が魅力のポルトガルと、山、美味しい食事、歓迎的な人々が魅力のジョージアの2つで比較検討中。航空券を調べる必要あり。",
        actionItems: [
          "航空券の価格を比較する",
          "リスボンとトビリシの5月の天気を調べる",
          "宿泊候補ホテルのリストアップ"
        ]
      };
    }
    // Default English
    return {
      title: "Vacation Plans 🌲",
      summary: "Brainstorming trip plans for May. Weighing Portugal (ocean beaches, architecture, train travel) vs Georgia (incredible mountains, hospitality, cozy dining). Need to evaluate flight ticket costs.",
      actionItems: [
        "Compare direct flight ticket options",
        "Check weather conditions in Lisbon & Tbilisi",
        "Create a shortlist of boutique hotels"
      ]
    };
  };

  const notesList = getSimulatedNotes();
  const aiMemo = getAISummary();

  // Define gradients representing actual Kotlin colors
  const lightGradient = "radial-gradient(circle at 50% -20%, #D8E3FA 0%, #D0D3E3 40%, #B1C6DB 80%, #CFDEF3 100%)";
  const darkGradient = "radial-gradient(circle at 50% -20%, #243B55 0%, #2C3E50 40%, #1A1C20 80%, #434343 100%)";

  return (
    <div id="screenshots-showcase" className="flex flex-col items-center gap-6 w-full max-w-lg">
      
      {/* Dynamic Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-1.5 p-1.5 bg-slate-100/80 dark:bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-200/40 dark:border-slate-800/60 w-full">
        {screenTabs.map((tab) => {
          const Icon = tab.icon;
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isSelected 
                  ? "bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Container displaying the Mock Phone Screen */}
      <div className="relative w-full aspect-[9/18] max-w-[290px] rounded-[38px] border-8 border-slate-900 dark:border-slate-800 shadow-2xl bg-black overflow-hidden select-none">
        
        {/* Device Status/Camera Notch */}
        <div className="absolute top-0 inset-x-0 h-6 bg-slate-950 flex justify-center items-center z-30">
          <div className="w-20 h-4 bg-black rounded-b-xl flex items-center justify-between px-3">
            <div className="w-1.5 h-1.5 bg-slate-850 rounded-full" />
            <div className="w-6 h-1 bg-slate-850 rounded-full" />
            <div className="w-1.5 h-1.5 bg-blue-900/40 rounded-full" />
          </div>
        </div>

        {/* Floating Screen Content Wrapper */}
        <div 
          className="w-full h-full pt-6 flex flex-col font-sans text-xs transition-all duration-300 relative"
          style={{
            background: 
              activeTab === 0 ? lightGradient :
              activeTab === 1 ? darkGradient :
              activeTab === 2 ? (isDarkTheme ? darkGradient : lightGradient) :
              activeTab === 3 ? (isDarkTheme ? darkGradient : lightGradient) :
              darkGradient, // habits/streaks usually stunning on dark
            color: (activeTab === 0 || (activeTab === 2 && !isDarkTheme) || (activeTab === 3 && !isDarkTheme)) ? "#1E293B" : "#F8FAFC"
          }}
        >
          {/* Internal Status Bar */}
          <div className="px-4.5 py-1.5 flex justify-between items-center text-[10px] font-bold opacity-80 z-20">
            <span>13:58</span>
            <div className="flex items-center gap-1">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* SCREEN CONTENT CONDITIONAL VIEWPORTS */}
          <div className="flex-1 overflow-y-auto px-4 pb-4 select-none relative z-10">
            
            {/* SCREEN 0 & 1: NOTES LIST (Light or Dark) */}
            {(activeTab === 0 || activeTab === 1) && (
              <motion.div 
                key="notes-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4 pt-1"
              >
                {/* Header inside phone app */}
                <div className="flex justify-between items-center pt-1.5">
                  <div>
                    <h3 className="text-sm font-black tracking-tight">Voice Diary</h3>
                    <p className="text-[9px] opacity-70">Saved Reflections</p>
                  </div>
                  <div className="flex gap-1">
                    <div className="p-1 px-2 rounded-lg bg-black/5 dark:bg-white/10 flex items-center gap-1 text-[9px]">
                      <span>{t.languagesBadge.slice(0, 3)}</span>
                    </div>
                  </div>
                </div>

                {/* Search Bar mockup */}
                <div className="p-1.5 rounded-xl bg-black/5 dark:bg-white/5 flex items-center gap-2 border border-black/5 dark:border-white/5">
                  <Search className="w-3.5 h-3.5 opacity-50" />
                  <span className="opacity-50 text-[9px]">Search voice entries...</span>
                </div>

                {/* Subtitle Badge */}
                <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-400/20 text-[10px] leading-snug">
                  ✨ <span>{t.trialNotice.split(".")[0]}.</span>
                </div>

                {/* List items representation */}
                <div className="space-y-2">
                  {notesList.map((item, id) => (
                    <div 
                      key={id}
                      className="p-3 rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/5 shadow-xs flex flex-col gap-1.5"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-extrabold tracking-tight">{item.title}</span>
                        <div className="flex items-center gap-1 opacity-70 text-[9px] font-mono">
                          <Clock className="w-2.5 h-2.5" />
                          <span>{item.duration}</span>
                        </div>
                      </div>
                      <p className="text-[10px] opacity-70 line-clamp-2 leading-relaxed font-medium">
                        {item.text}
                      </p>
                      <div className="flex justify-between items-center pt-1 text-[9px] opacity-50">
                        <span>{item.time}</span>
                        {item.fav && <Heart className="w-2.5 h-2.5 fill-red-500 text-red-500" />}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* SCREEN 2: LIVE AUDIO RECORDING */}
            {activeTab === 2 && (
              <motion.div 
                key="recording-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-between h-full pt-4 max-h-[360px]"
              >
                <div className="text-center">
                  <h4 className="text-xs font-black tracking-wider uppercase opacity-85">Live Recording</h4>
                  <p className="text-[10px] opacity-65 mt-0.5">{t.bullet1Title}</p>
                </div>

                {/* Active Waveform Simulator */}
                <div className="flex items-center justify-center gap-[3px] h-20 w-full px-4 py-2">
                  {[20, 45, 12, 60, 85, 95, 40, 25, 75, 90, 100, 60, 40, 85, 30, 20, 50, 70, 95, 45, 12].map((height, idx) => (
                    <div 
                      key={idx} 
                      className="w-1 rounded-full bg-gradient-to-t from-sky-400 to-indigo-500 animate-pulse" 
                      style={{ 
                        height: `${height}%`,
                        animationDelay: `${idx * 0.08}s`
                      }} 
                    />
                  ))}
                </div>

                {/* Recording timer & instructions */}
                <div className="text-center space-y-1">
                  <div className="text-2xl font-black font-mono tracking-wider">3:53</div>
                  <div className="p-1 px-2.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-500 text-[10px] font-bold flex items-center justify-center gap-1.5 w-fit mx-auto mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                    <span>REC LIMIT (4:00)</span>
                  </div>
                  <p className="text-[9px] opacity-60 max-w-[180px] mx-auto pt-3">
                    {t.bullet1Text}
                  </p>
                </div>

                {/* Stop button visualizer */}
                <div className="w-14 h-14 rounded-full border-4 border-black/10 dark:border-white/10 flex items-center justify-center cursor-pointer hover:scale-105 transition-all bg-red-500 shadow-md">
                  <div className="w-4 h-4 rounded-xs bg-white" />
                </div>
              </motion.div>
            )}

            {/* SCREEN 3: AI MEMO RESULT */}
            {activeTab === 3 && (
              <motion.div 
                key="ai-result-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-3.5 pt-1.5"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1 bg-sky-500/10 text-sky-500 rounded-lg">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-extrabold text-xs">AI Transformed</span>
                  </div>
                  <span className="text-[10px] font-bold opacity-60">14:15</span>
                </div>

                {/* Styled AI Summary Memo Card */}
                <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-2.5">
                  <div className="space-y-0.5">
                    <p className="text-[9px] opacity-50 uppercase tracking-widest font-black">Generated Title</p>
                    <h4 className="text-xs font-black text-slate-900 dark:text-white">{aiMemo.title}</h4>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[9px] opacity-50 uppercase tracking-widest font-black">AI Summary</p>
                    <p className="text-[10px] leading-relaxed opacity-85 font-semibold text-slate-700 dark:text-slate-350">{aiMemo.summary}</p>
                  </div>

                  <div className="space-y-1.5 pt-1.5 border-t border-black/5 dark:border-white/5">
                    <p className="text-[9px] opacity-50 uppercase tracking-widest font-black">Action Items</p>
                    <div className="space-y-1">
                      {aiMemo.actionItems.map((item, idx) => (
                        <div key={idx} className="flex gap-1.5 items-start text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                          <Check className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-[9px] opacity-55 font-mono">✓ {t.privacyBadge.toUpperCase()}</span>
                </div>
              </motion.div>
            )}

            {/* SCREEN 4: HABITS & STREAKS STATE */}
            {activeTab === 4 && (
              <motion.div 
                key="stats-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-3 pt-1"
              >
                <div className="flex items-center gap-1.5">
                  <div className="p-1 bg-amber-500/20 text-amber-500 rounded-lg">
                    <BarChart3 className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-extrabold text-xs">Analytics & Streaks</span>
                </div>

                {/* Streak Counter widget */}
                <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-500/10 to-red-500/10 border border-amber-500/15 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[9px] text-amber-400 uppercase tracking-wider font-extrabold">Streak Counter</span>
                    <h4 className="text-sm font-black text-amber-500 flex items-center gap-1">
                      <Flame className="w-4.5 h-4.5 fill-current text-amber-500 animate-pulse" />
                      <span>7 Days Active</span>
                    </h4>
                  </div>
                  <div className="p-2 bg-amber-500/10 rounded-xl text-amber-500">
                    <Trophy className="w-4 h-4 fill-current text-amber-400" />
                  </div>
                </div>

                {/* Minimalist calendar tracker grid */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                  <h5 className="text-[9px] font-extrabold opacity-60 uppercase tracking-wider">Weekly Activity View</h5>
                  <div className="grid grid-cols-7 gap-1.5 text-center text-[9px] font-bold">
                    {["M", "T", "W", "T", "F", "S", "S"].map((day, dIdx) => (
                      <span key={dIdx} className="opacity-40">{day}</span>
                    ))}
                    {[24, 25, 26, 27, 28, 29, 30].map((num, nIdx) => (
                      <div 
                        key={nIdx}
                        className={`py-1.5 rounded-lg flex flex-col items-center justify-center relative ${
                          nIdx < 6 ? "bg-amber-500/25 border border-amber-500/30 text-amber-300" : "bg-white/5 text-white/40"
                        }`}
                      >
                        <span>{num}</span>
                        {nIdx < 6 && <span className="absolute bottom-0.5 w-1 h-1 rounded-full bg-amber-400" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metric breakdown card */}
                <div className="p-3 rounded-2xl bg-white/5 border border-white/5 space-y-1 text-[10px]">
                  <div className="flex justify-between items-center opacity-70">
                    <span>Total Recordings</span>
                    <span className="font-extrabold">27 Entries</span>
                  </div>
                  <div className="flex justify-between items-center opacity-70">
                    <span>Total recording voice size</span>
                    <span className="font-extrabold">42.5 minutes</span>
                  </div>
                </div>
              </motion.div>
            )}

          </div>

          {/* Bottom Bar Simulator Menu */}
          <div className="h-11 bg-slate-950/90 border-t border-white/5 flex items-center justify-around px-2 text-slate-500 z-10">
            <button onClick={() => setActiveTab(0)} className={`flex flex-col items-center gap-0.5 ${activeTab === 0 || activeTab === 1 ? "text-sky-400" : "opacity-60"}`}>
              <List className="w-4 h-4" />
              <span className="text-[7.5px] font-black uppercase">Index</span>
            </button>
            <button onClick={() => setActiveTab(2)} className={`flex flex-col items-center gap-0.5 ${activeTab === 2 ? "text-sky-400" : "opacity-60"}`}>
              <Mic className="w-4 h-4" />
              <span className="text-[7.5px] font-black uppercase">Record</span>
            </button>
            <button onClick={() => setActiveTab(3)} className={`flex flex-col items-center gap-0.5 ${activeTab === 3 ? "text-sky-400" : "opacity-60"}`}>
              <Sparkles className="w-4 h-4" />
              <span className="text-[7.5px] font-black uppercase">AI Memo</span>
            </button>
            <button onClick={() => setActiveTab(4)} className={`flex flex-col items-center gap-0.5 ${activeTab === 4 ? "text-sky-400" : "opacity-60"}`}>
              <BarChart3 className="w-4 h-4" />
              <span className="text-[7.5px] font-black uppercase">Stats</span>
            </button>
          </div>

        </div>

      </div>

      {/* Small informative details below mockup phone */}
      <div className="text-center max-w-[280px]">
        <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-relaxed font-semibold">
          ★ {translations[currentLanguage]?.navSimulator || "Screenshots Showcase"}: View the beautiful interfaces and layouts of the live voice diary application.
        </p>
      </div>

    </div>
  );
}
