import { Video } from 'lucide-react';

interface LiveSession {
  date: string;
  title: string;
  time: string;
}

export function Calendar() {
  const liveSessions: LiveSession[] = [
    { date: 'May 12', title: 'React Hooks Deep Dive', time: '2:00 PM' },
    { date: 'May 15', title: 'Q&A Session', time: '4:00 PM' },
    { date: 'May 19', title: 'Project Review', time: '3:00 PM' },
    { date: 'May 22', title: 'State Management Workshop', time: '2:00 PM' },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="font-semibold text-lg mb-4 text-[#421869]">Upcoming Live Sessions</h3>
      <div className="space-y-3">
        {liveSessions.map((session, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 rounded-xl bg-[#F5D5E0]/30 hover:bg-[#F5D5E0]/50 transition-colors border border-[#F5D5E0]"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#6667AB] flex items-center justify-center">
              <Video size={18} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm mb-1">{session.title}</div>
              <div className="text-xs text-gray-600">
                {session.date} at {session.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-[#6667AB] hover:text-[#5557AB] text-sm font-medium py-2 transition-colors">
        View Full Calendar
      </button>
    </div>
  );
}
