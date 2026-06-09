import { useState } from 'react';
import { ChevronDown, ChevronRight, Video, Headphones, Play, FileText, CheckCircle, X, User } from 'lucide-react';
import type { Module, Lesson } from '../App';
import { logo } from '../assets';

interface ModuleSidebarProps {
  modules: Module[];
  selectedLesson: Lesson | null;
  onLessonSelect: (lesson: Lesson) => void;
  isOpen: boolean;
  onToggle: () => void;
  userName: string;
  profilePicture: string | null;
  onProfileOpen: () => void;
}

export function ModuleSidebar({ modules, selectedLesson, onLessonSelect, isOpen, onToggle, userName, profilePicture, onProfileOpen }: ModuleSidebarProps) {
  const [expandedModules, setExpandedModules] = useState<number[]>([0, 1, 2]);

  const toggleModule = (moduleId: number) => {
    setExpandedModules((prev) =>
      prev.includes(moduleId) ? prev.filter((id) => id !== moduleId) : [...prev, moduleId]
    );
  };

  const getLessonIcon = (type: Lesson['type']) => {
    switch (type) {
      case 'video':
        return <Video size={14} />;
      case 'audio':
        return <Headphones size={14} />;
      case 'interactive':
        return <Play size={14} />;
      case 'pdf':
        return <FileText size={14} />;
    }
  };

  return (
    // On mobile: fixed full-height drawer that overlays content (z-40 sits above backdrop z-30)
    // On desktop (md+): inline sidebar in the flex layout, collapses to w-0
    <aside className={`
      fixed inset-y-0 left-0 z-40
      md:relative md:z-auto md:inset-auto
      bg-gradient-to-b from-[#421869] to-[#721CB8] text-white
      transition-all duration-300 overflow-hidden flex-shrink-0
      ${isOpen ? 'w-72 sm:w-80' : 'w-0'}
    `}>
      <div className="w-72 sm:w-80 h-full flex flex-col">
        <div className="p-4 sm:p-6 border-b border-white/10">
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            {/* X button on the LEFT — easy to reach on mobile */}
            <button
              onClick={onToggle}
              className="text-white/70 hover:text-white p-1.5 rounded transition-colors flex-shrink-0"
            >
              <X size={20} />
            </button>
            {/* Logo + title on the RIGHT */}
            <div className="flex items-center gap-2 sm:gap-3">
              <h1 className="text-base sm:text-lg font-semibold leading-tight text-right">Tall Bridge Institute</h1>
              <img
                src={logo}
                alt="Tall Bridge Institute"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain flex-shrink-0"
              />
            </div>
          </div>
          <p className="text-xs sm:text-sm text-white/70 mt-1 pl-1">Your Teaching Journey</p>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-3 space-y-2">
          {modules.map((module) => {
            const isExpanded = expandedModules.includes(module.id);
            const isCompleted = module.completionPercentage === 100;

            return (
              <div key={module.id} className="rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full flex items-start gap-3 p-3 bg-white/5 hover:bg-white/10 transition-all rounded-lg"
                >
                  <div className="flex-shrink-0 pt-0.5">
                    {isExpanded ? (
                      <ChevronDown size={18} className="text-white/70" />
                    ) : (
                      <ChevronRight size={18} className="text-white/70" />
                    )}
                  </div>

                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">Module {module.id + 1}: {module.title}</span>
                      {isCompleted && (
                        <CheckCircle size={14} className="text-[#84CC16] flex-shrink-0" />
                      )}
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#6667AB] rounded-full transition-all"
                          style={{ width: `${module.completionPercentage}%` }}
                        />
                      </div>
                      <span className="text-xs text-white/60 w-10 text-right">
                        {module.completionPercentage}%
                      </span>
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div className="mt-1 ml-6 space-y-1">
                    {module.lessons.map((lesson, lessonIndex) => {
                      const isSelected = selectedLesson?.id === lesson.id;

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => onLessonSelect(lesson)}
                          className={`w-full flex items-start gap-2 p-2.5 rounded-lg transition-all text-left ${
                            isSelected
                              ? 'bg-[#6667AB] text-white'
                              : lesson.completed
                              ? 'bg-white/5 text-white/90 hover:bg-white/10'
                              : 'text-white/70 hover:bg-white/5 hover:text-white/90'
                          }`}
                        >
                          <div className={`flex-shrink-0 mt-0.5 ${isSelected ? 'text-white' : 'text-white/60'}`}>
                            {getLessonIcon(lesson.type)}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-xs flex-1 truncate">Lesson {lessonIndex + 1}: {lesson.title}</span>
                              {lesson.completed && (
                                <CheckCircle size={12} className="text-[#84CC16] flex-shrink-0" />
                              )}
                            </div>
                            <div className="text-[10px] text-white/50 mt-0.5">{lesson.duration}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Profile button at bottom of sidebar ── */}
      <button
        onClick={onProfileOpen}
        className="flex items-center gap-3 px-4 py-3 border-t border-white/10 hover:bg-white/10 transition-colors w-full text-left"
      >
        {profilePicture ? (
          <img
            src={profilePicture}
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-white/20 flex-shrink-0"
          />
        ) : (
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <User size={16} className="text-white/70" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white truncate">
            {userName || 'My Profile'}
          </p>
          <p className="text-xs text-white/50">View profile & settings</p>
        </div>
      </button>

      </div>
    </aside>
  );
}
