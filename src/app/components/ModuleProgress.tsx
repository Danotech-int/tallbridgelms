import { Lock, CheckCircle, Circle, Play } from 'lucide-react';

interface Module {
  id: number;
  title: string;
  description: string;
  duration: string;
  lessons: number;
}

interface ModuleProgressProps {
  completedModules: number[];
  onCompleteModule: (moduleId: number) => void;
}

const modules: Module[] = [
  { id: 0, title: 'Introduction to Web Development', description: 'HTML, CSS, and JavaScript basics', duration: '2 weeks', lessons: 12 },
  { id: 1, title: 'React Fundamentals', description: 'Components, props, and state', duration: '3 weeks', lessons: 15 },
  { id: 2, title: 'Advanced React Patterns', description: 'Hooks, context, and performance', duration: '2 weeks', lessons: 10 },
  { id: 3, title: 'State Management', description: 'Redux and modern alternatives', duration: '2 weeks', lessons: 8 },
  { id: 4, title: 'Testing React Applications', description: 'Jest, React Testing Library', duration: '1 week', lessons: 6 },
  { id: 5, title: 'Next.js & Server Components', description: 'Full-stack React development', duration: '3 weeks', lessons: 14 },
  { id: 6, title: 'Capstone Project', description: 'Build your final portfolio project', duration: '4 weeks', lessons: 5 },
];

export function ModuleProgress({ completedModules, onCompleteModule }: ModuleProgressProps) {
  const getModuleStatus = (moduleId: number) => {
    if (completedModules.includes(moduleId)) return 'completed';
    if (moduleId === 0 || completedModules.includes(moduleId - 1)) return 'unlocked';
    return 'locked';
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-[#421869]">Your Learning Path</h3>
      <div className="space-y-4">
        {modules.map((module, index) => {
          const status = getModuleStatus(module.id);
          const isLocked = status === 'locked';
          const isCompleted = status === 'completed';
          const isUnlocked = status === 'unlocked';

          return (
            <div
              key={module.id}
              className={`bg-white rounded-2xl p-6 shadow-sm transition-all ${
                isLocked ? 'opacity-50' : 'hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                  isCompleted ? 'bg-[#84CC16]' : isUnlocked ? 'bg-[#6667AB]' : 'bg-gray-300'
                }`}>
                  {isCompleted ? (
                    <CheckCircle size={24} className="text-white" />
                  ) : isLocked ? (
                    <Lock size={24} className="text-gray-500" />
                  ) : (
                    <Circle size={24} className="text-white" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-gray-500">Module {index + 1}</span>
                        {isCompleted && (
                          <span className="bg-[#84CC16] text-white text-xs px-2 py-1 rounded-full">
                            Completed
                          </span>
                        )}
                      </div>
                      <h4 className="font-semibold text-lg mb-1">{module.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{module.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{module.duration}</span>
                        <span>•</span>
                        <span>{module.lessons} lessons</span>
                      </div>
                    </div>

                    {!isLocked && !isCompleted && (
                      <button
                        onClick={() => onCompleteModule(module.id)}
                        className="bg-[#6667AB] hover:bg-[#5557AB] text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
                      >
                        <Play size={16} />
                        <span>Continue</span>
                      </button>
                    )}
                  </div>

                  {!isCompleted && !isLocked && (
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Progress</span>
                        <span>65%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#6667AB] rounded-full" style={{ width: '65%' }} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
