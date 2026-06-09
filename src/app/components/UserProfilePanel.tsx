import { useRef } from 'react';
import { X, Camera, Sun, Moon, BookOpen, CheckCircle, Clock } from 'lucide-react';
import type { Module } from '../App';

interface UserProfilePanelProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  onNameChange: (name: string) => void;
  profilePicture: string | null;
  onProfilePictureChange: (dataUrl: string) => void;
  darkMode: boolean;
  onDarkModeToggle: () => void;
  modules: Module[];
}

export function UserProfilePanel({
  isOpen,
  onClose,
  userName,
  onNameChange,
  profilePicture,
  onProfilePictureChange,
  darkMode,
  onDarkModeToggle,
  modules,
}: UserProfilePanelProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ── Progress calculations ──────────────────────────────────
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const completedLessons = modules.reduce(
    (sum, m) => sum + m.lessons.filter((l) => l.completed).length,
    0
  );
  const remainingLessons = totalLessons - completedLessons;
  const overallPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onProfilePictureChange(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const initials = userName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() || '?';

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Panel */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80 sm:w-96 z-50
          ${darkMode ? 'bg-[#1a1a2e] text-white' : 'bg-white text-[#1a0a2e]'}
          shadow-2xl flex flex-col
          transition-transform duration-300
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
          <span className="font-semibold text-base">My Profile</span>
          <button onClick={onClose} className={`p-1 rounded transition-colors ${darkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}>
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">

          {/* Avatar + name */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-[#6667AB]/30"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#6667AB] to-[#421869] flex items-center justify-center text-white text-2xl font-bold ring-4 ring-[#6667AB]/30">
                  {initials}
                </div>
              )}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-0 right-0 w-8 h-8 bg-[#96D74C] hover:bg-[#84c43a] rounded-full flex items-center justify-center shadow-md transition-colors"
                title="Change photo"
              >
                <Camera size={14} className="text-[#1a0a2e]" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            {/* Editable name */}
            <input
              type="text"
              value={userName}
              onChange={(e) => onNameChange(e.target.value)}
              placeholder="Enter your name"
              className={`text-center text-lg font-semibold w-full bg-transparent border-b-2 pb-1 focus:outline-none transition-colors
                ${darkMode
                  ? 'border-white/20 focus:border-[#96D74C] text-white placeholder-white/40'
                  : 'border-gray-200 focus:border-[#6667AB] text-[#1a0a2e] placeholder-gray-400'
                }`}
            />
            <p className={`text-xs ${darkMode ? 'text-white/50' : 'text-gray-400'}`}>Click your name to edit</p>
          </div>

          {/* Enrolled course */}
          <div className={`rounded-xl p-4 ${darkMode ? 'bg-white/5' : 'bg-[#F5F5FF]'}`}>
            <div className="flex items-center gap-2 mb-1">
              <BookOpen size={15} className="text-[#6667AB]" />
              <span className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-white/50' : 'text-gray-400'}`}>Enrolled Course</span>
            </div>
            <p className={`font-semibold text-sm mt-1 ${darkMode ? 'text-white' : 'text-[#1a0a2e]'}`}>
              Teach the World from Nigeria
            </p>
            <p className={`text-xs mt-0.5 ${darkMode ? 'text-white/50' : 'text-gray-500'}`}>6 Modules · 29 Lessons</p>
          </div>

          {/* Progress */}
          <div className={`rounded-xl p-4 space-y-3 ${darkMode ? 'bg-white/5' : 'bg-[#F5F5FF]'}`}>
            <div className="flex items-center justify-between">
              <span className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-white/50' : 'text-gray-400'}`}>Your Progress</span>
              <span className="text-[#6667AB] font-bold text-sm">{overallPercent}%</span>
            </div>

            {/* Overall progress bar */}
            <div className={`h-2.5 rounded-full overflow-hidden ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`}>
              <div
                className="h-full bg-gradient-to-r from-[#6667AB] to-[#96D74C] rounded-full transition-all duration-500"
                style={{ width: `${overallPercent}%` }}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className={`rounded-lg p-3 text-center ${darkMode ? 'bg-white/5' : 'bg-white'}`}>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <CheckCircle size={13} className="text-[#96D74C]" />
                  <span className={`text-xs ${darkMode ? 'text-white/50' : 'text-gray-400'}`}>Completed</span>
                </div>
                <span className="text-xl font-bold text-[#6667AB]">{completedLessons}</span>
                <p className={`text-[10px] ${darkMode ? 'text-white/40' : 'text-gray-400'}`}>lessons</p>
              </div>
              <div className={`rounded-lg p-3 text-center ${darkMode ? 'bg-white/5' : 'bg-white'}`}>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Clock size={13} className="text-[#6667AB]" />
                  <span className={`text-xs ${darkMode ? 'text-white/50' : 'text-gray-400'}`}>Remaining</span>
                </div>
                <span className="text-xl font-bold text-[#6667AB]">{remainingLessons}</span>
                <p className={`text-[10px] ${darkMode ? 'text-white/40' : 'text-gray-400'}`}>lessons</p>
              </div>
            </div>

            {/* Per-module breakdown */}
            <div className="space-y-2 pt-1">
              {modules.map((mod) => (
                <div key={mod.id}>
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-[11px] truncate pr-2 ${darkMode ? 'text-white/60' : 'text-gray-500'}`}>
                      M{mod.id + 1}: {mod.title}
                    </span>
                    <span className={`text-[11px] font-medium flex-shrink-0 ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
                      {mod.completionPercentage}%
                    </span>
                  </div>
                  <div className={`h-1.5 rounded-full overflow-hidden ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`}>
                    <div
                      className="h-full bg-[#6667AB] rounded-full transition-all duration-500"
                      style={{ width: `${mod.completionPercentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dark mode toggle */}
          <div className={`rounded-xl p-4 flex items-center justify-between ${darkMode ? 'bg-white/5' : 'bg-[#F5F5FF]'}`}>
            <div className="flex items-center gap-3">
              {darkMode ? <Moon size={18} className="text-[#96D74C]" /> : <Sun size={18} className="text-[#6667AB]" />}
              <div>
                <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-[#1a0a2e]'}`}>
                  {darkMode ? 'Dark Mode' : 'Light Mode'}
                </p>
                <p className={`text-xs ${darkMode ? 'text-white/40' : 'text-gray-400'}`}>Toggle appearance</p>
              </div>
            </div>
            <button
              onClick={onDarkModeToggle}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${darkMode ? 'bg-[#6667AB]' : 'bg-gray-300'}`}
            >
              <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
