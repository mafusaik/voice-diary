import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Search, ShieldCheck, Scale, FileText, ClipboardCheck, ArrowUpRight } from "lucide-react";
import { privacyPolicy, termsOfService, LegalDoc } from "../data/legalDocs";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab: "privacy" | "terms";
}

export default function LegalModal({ isOpen, onClose, defaultTab }: LegalModalProps) {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">(defaultTab);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const activeDoc: LegalDoc = activeTab === "privacy" ? privacyPolicy : termsOfService;

  const handleCopy = () => {
    let textToCopy = `${activeDoc.title}\nLast Updated: ${activeDoc.lastUpdated}\n\n`;
    activeDoc.sections.forEach(section => {
      textToCopy += `${section.heading}\n`;
      if (Array.isArray(section.content)) {
        section.content.forEach(p => {
          textToCopy += `- ${p}\n`;
        });
      } else {
        textToCopy += `${section.content}\n`;
      }
      textToCopy += `\n`;
    });

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Filter sections by search query
  const filteredSections = activeDoc.sections.filter(sec => {
    const query = searchQuery.toLowerCase();
    const headingMatch = sec.heading.toLowerCase().includes(query);
    const contentMatch = Array.isArray(sec.content) 
      ? sec.content.some(text => text.toLowerCase().includes(query))
      : sec.content.toLowerCase().includes(query);
    return headingMatch || contentMatch;
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          {/* Backdrop wrapper */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0"
          />

          {/* Modal content body */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative bg-white dark:bg-slate-900 rounded-3xl w-full max-w-3xl max-h-[85vh] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden text-slate-850 dark:text-slate-100"
          >
            {/* Header of Modal */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40">
              <div className="flex items-center gap-3">
                {activeTab === "privacy" ? (
                  <div className="p-2 bg-emerald-50 dark:bg-emerald-950/50 rounded-xl text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="p-2 bg-indigo-50 dark:bg-indigo-950/50 rounded-xl text-indigo-600 dark:text-indigo-400">
                    <Scale className="w-5 h-5" />
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                    {activeDoc.title}
                  </h2>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Last updated: {activeDoc.lastUpdated}</p>
                </div>
              </div>
              
              <button 
                id="close-legal-modal"
                onClick={onClose} 
                className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Document selectors & actions tool rail */}
            <div className="px-6 py-3.5 flex flex-wrap gap-4 items-center justify-between bg-white dark:bg-slate-900/80 border-b border-slate-100 dark:border-slate-800">
              <div className="flex bg-slate-100 dark:bg-slate-950 p-1.5 rounded-2xl gap-1">
                <button
                  id="tab-privacy-btn"
                  onClick={() => {
                    setActiveTab("privacy");
                    setSearchQuery("");
                  }}
                  className={`px-4.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeTab === "privacy"
                      ? "bg-white dark:bg-slate-800 shadow-sm text-slate-900 dark:text-white"
                      : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  Privacy Policy
                </button>
                <button
                  id="tab-terms-btn"
                  onClick={() => {
                    setActiveTab("terms");
                    setSearchQuery("");
                  }}
                  className={`px-4.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeTab === "terms"
                      ? "bg-white dark:bg-slate-800 shadow-sm text-slate-900 dark:text-white"
                      : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  }`}
                >
                  <Scale className="w-4 h-4" />
                  Terms of Service
                </button>
              </div>

              {/* Utility actions group (Copy, print description link) */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                {/* Search query box */}
                <div className="relative flex-1 sm:max-w-xs">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search terms..."
                    className="w-full pl-9 pr-4 py-1.5 bg-slate-100 dark:bg-slate-950/60 hover:bg-slate-150/80 dark:hover:bg-slate-950 rounded-xl text-xs font-semibold border-none focus:outline-none focus:ring-1 focus:ring-sky-500/50"
                  />
                </div>

                <button
                  id="copy-legal-text"
                  onClick={handleCopy}
                  className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white rounded-xl transition-colors shrink-0 flex items-center gap-1.5 text-xs font-bold text-nowrap"
                  title="Copy Document to Clipboard"
                >
                  <ClipboardCheck className={`w-4 h-4 ${copied ? "text-emerald-500" : ""}`} />
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Document content container */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {filteredSections.length > 0 ? (
                filteredSections.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                      <span className="text-xs text-sky-500 font-semibold font-mono">0{idx + 1}.</span>
                      {sec.heading}
                    </h3>
                    
                    {Array.isArray(sec.content) ? (
                      <ul className="space-y-2 pl-4 list-disc text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-normal">
                        {sec.content.map((point, pIdx) => (
                          <li key={pIdx} className="marker:text-slate-300 dark:marker:text-slate-700">{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-normal pl-4">
                        {sec.content}
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <div className="py-12 text-center text-slate-400 dark:text-slate-600 flex flex-col items-center justify-center gap-2">
                  <FileText className="w-12 h-12 stroke-1" />
                  <p className="text-sm font-semibold">No clauses matched your filter.</p>
                  <button 
                    id="reset-search"
                    onClick={() => setSearchQuery("")} 
                    className="text-xs text-sky-500 hover:underline mt-1 font-bold"
                  >
                    Clear Filter
                  </button>
                </div>
              )}
            </div>

            {/* Footer of modal */}
            <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 text-center text-[11px] text-slate-400 dark:text-slate-500 font-medium">
              <span>This agreement is formulated to align in full compliance with GDPR and CCPA policies. For custom developer inquiries, reach out at </span>
              <a href="mailto:glazer.dev@gmail.com" className="text-sky-500 hover:underline font-bold">glazer.dev@gmail.com</a>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
