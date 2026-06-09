import { Home, BookOpen, Calendar, Trophy, Settings, HelpCircle } from 'lucide-react';

export function Sidebar() {
  const navItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: BookOpen, label: 'My Courses', active: false },
    { icon: Calendar, label: 'Schedule', active: false },
    { icon: Trophy, label: 'Achievements', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-[#421869] to-[#721CB8] text-white flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-semibold">Toll Bridge Education</h1>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                item.active
                  ? 'bg-[#6667AB] text-white'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/10 hover:text-white rounded-lg transition-all">
          <HelpCircle size={20} />
          <span>Help & Support</span>
        </button>
      </div>
    </aside>
  );
}
