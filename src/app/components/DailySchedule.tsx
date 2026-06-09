import { Clock, BookOpen, Video, FileText } from 'lucide-react';

interface ScheduleItem {
  time: string;
  title: string;
  type: 'lesson' | 'live' | 'assignment';
  duration: string;
}

export function DailySchedule() {
  const schedule: ScheduleItem[] = [
    { time: '9:00 AM', title: 'Watch: Advanced Hooks', type: 'lesson', duration: '45 min' },
    { time: '10:00 AM', title: 'Practice: Custom Hooks', type: 'assignment', duration: '30 min' },
    { time: '2:00 PM', title: 'Live Session: Q&A', type: 'live', duration: '60 min' },
    { time: '4:00 PM', title: 'Quiz: React Patterns', type: 'assignment', duration: '20 min' },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'lesson':
        return <BookOpen size={16} />;
      case 'live':
        return <Video size={16} />;
      case 'assignment':
        return <FileText size={16} />;
      default:
        return <Clock size={16} />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'lesson':
        return 'bg-blue-100 text-blue-600';
      case 'live':
        return 'bg-purple-100 text-purple-600';
      case 'assignment':
        return 'bg-orange-100 text-orange-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg text-[#421869]">Today's Schedule</h3>
        <span className="text-xs text-gray-500">Saturday, May 9</span>
      </div>

      <div className="space-y-3">
        {schedule.map((item, index) => (
          <div key={index} className="flex gap-3">
            <div className="flex-shrink-0 w-20 text-sm text-gray-600 pt-1">
              {item.time}
            </div>
            <div className="flex-1">
              <div className="flex items-start gap-2 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${getColor(item.type)}`}>
                  {getIcon(item.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.duration}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
