import { Sparkles } from 'lucide-react';

interface WelcomeBannerProps {
  studentName: string;
}

export function WelcomeBanner({ studentName }: WelcomeBannerProps) {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="bg-gradient-to-r from-[#6667AB] to-[#8B87C8] rounded-2xl p-8 text-white shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={24} className="text-[#F5D5E0]" />
            <span className="text-sm opacity-90">{greeting}</span>
          </div>
          <h2 className="text-3xl font-semibold mb-2">Welcome back, {studentName}!</h2>
          <p className="text-white/80">You're making great progress. Keep up the excellent work!</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4">
          <div className="text-sm opacity-90">Overall Progress</div>
          <div className="text-3xl font-bold">28%</div>
        </div>
      </div>
    </div>
  );
}
