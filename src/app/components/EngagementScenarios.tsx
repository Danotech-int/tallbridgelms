import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ChevronRight, ChevronLeft, Lightbulb } from 'lucide-react';
import { logo } from '../assets';

interface Choice {
  text: string;
  isCorrect: boolean;
  feedback: string;
}

interface Scenario {
  id: number;
  title: string;
  image: string;
  situation: string;
  question: string;
  choices: Choice[];
  bestPractice: string;
}

const scenarios: Scenario[] = [
  {
    id: 1,
    title: 'The Quiet Student',
    image: 'https://images.unsplash.com/photo-1558424843-0eb88cbdde27?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    situation: 'Wei is 8 years old and has been in your online class for three weeks. He understands the material but rarely speaks up. When you ask him a question directly, he freezes and looks down.',
    question: 'How do you encourage Wei to participate more actively?',
    choices: [
      {
        text: 'Put him on the spot repeatedly until he gets comfortable speaking',
        isCorrect: false,
        feedback: 'Forcing participation can increase anxiety and make the student withdraw further. Public pressure often backfires with shy learners.',
      },
      {
        text: 'Use the chat function to let him type answers first, then gradually transition to verbal responses',
        isCorrect: true,
        feedback: 'Excellent! This builds confidence through a comfortable medium first. Many quiet students thrive when given alternative ways to participate before speaking aloud.',
      },
      {
        text: 'Ignore his silence and focus on more talkative students',
        isCorrect: false,
        feedback: 'Every student needs engagement. Ignoring quiet students signals that their participation doesn\'t matter, which reinforces withdrawal.',
      },
      {
        text: 'Tell his parents he needs to speak more at home',
        isCorrect: false,
        feedback: 'While parent communication matters, this shifts responsibility without addressing the classroom dynamic. The solution must happen in your teaching approach.',
      },
    ],
    bestPractice: 'Build confidence gradually. Start with non-verbal participation (chat, reactions), praise small efforts publicly, and create predictable patterns so the student knows when they\'ll be called on.',
  },
  {
    id: 2,
    title: 'Technical Difficulties',
    image: 'https://images.unsplash.com/photo-1595259307444-a6d6308e3d59?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    situation: 'You\'re 10 minutes into a lesson with Mei, an adult professional preparing for a work presentation. Her video freezes, then disconnects. She rejoins 3 minutes later, visibly frustrated and apologetic.',
    question: 'What\'s the best way to handle this disruption and keep the lesson on track?',
    choices: [
      {
        text: 'Quickly summarize what she missed and continue without acknowledging her frustration',
        isCorrect: false,
        feedback: 'Ignoring her emotional state creates distance. Adult learners need to feel understood, especially when technology fails them.',
      },
      {
        text: 'Spend 10 minutes troubleshooting her internet connection',
        isCorrect: false,
        feedback: 'While helpful, this eats into limited class time. Technical support isn\'t your primary role, and the student loses valuable learning time.',
      },
      {
        text: 'Acknowledge her frustration briefly, reassure her it happens, give a 30-second recap, and move forward with energy',
        isCorrect: true,
        feedback: 'Perfect! You validate her feelings, prevent her from dwelling on it, bring her back up to speed efficiently, and reset the lesson\'s momentum.',
      },
      {
        text: 'Suggest rescheduling the lesson for when her connection is more stable',
        isCorrect: false,
        feedback: 'Minor disruptions are normal in online teaching. Rescheduling should be a last resort, not a first response to a single disconnect.',
      },
    ],
    bestPractice: 'Technical issues are inevitable. Keep a brief "you missed X, now we\'re on Y" format ready. Stay calm and positive—your energy determines whether the disruption derails the lesson or becomes a minor blip.',
  },
  {
    id: 3,
    title: 'The Confident Beginner',
    image: 'https://images.unsplash.com/photo-1628645419925-ca8262621ed1?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    situation: 'Amara is a new teacher, energetic and well-prepared for her first online ESL class with a 10-year-old student. She has a professional setup with a ring light and has practiced her lesson plan multiple times.',
    question: 'What should Amara prioritize in her first few classes to build a strong foundation?',
    choices: [
      {
        text: 'Focus entirely on covering all the material in her lesson plan',
        isCorrect: false,
        feedback: 'Rigid adherence to plans can ignore the student\'s pace and needs. The best teachers adapt in real-time based on student response.',
      },
      {
        text: 'Build rapport first—learn the student\'s interests, establish routines, and make the student feel safe making mistakes',
        isCorrect: true,
        feedback: 'Exactly right! The first few classes set the tone. A student who trusts you will engage more, take risks, and retain more long-term than one who feels rushed through content.',
      },
      {
        text: 'Demonstrate her expertise by using advanced teaching terminology',
        isCorrect: false,
        feedback: 'Students don\'t need to see your credentials—they need to feel understood. Overcomplicating communication creates distance, especially with young learners.',
      },
      {
        text: 'Minimize talking and let the student lead the entire class',
        isCorrect: false,
        feedback: 'Students—especially children—need structure and guidance. A teacher who doesn\'t lead creates confusion, not freedom.',
      },
    ],
    bestPractice: 'The first impression determines retention. Invest in rapport, establish consistent routines, praise effort over perfection, and show genuine interest in your student as a person.',
  },
  {
    id: 4,
    title: 'The Distracted Child',
    image: 'https://images.unsplash.com/photo-1716440258786-a965ba03781f?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    situation: 'Hana is 7 years old and halfway through the lesson, she starts looking away from the screen. Her attention drifts to something off-camera. She\'s no longer responding to your questions.',
    question: 'How do you regain Hana\'s attention without frustrating her or losing lesson momentum?',
    choices: [
      {
        text: 'Raise your voice to get her attention back on you',
        isCorrect: false,
        feedback: 'Raising your voice can startle young children and create a negative association with the lesson. It signals frustration rather than engagement.',
      },
      {
        text: 'Use her name, a sudden gesture, or a fun sound effect, then immediately transition into a high-energy activity',
        isCorrect: true,
        feedback: 'Great choice! Pattern interrupts (name + energy shift) snap attention back. Follow it immediately with something interactive to keep her engaged.',
      },
      {
        text: 'Pause the lesson and wait silently until she looks back at you',
        isCorrect: false,
        feedback: 'Silence can work with older students, but young children may not notice or understand the expectation. The lesson loses momentum and becomes awkward.',
      },
      {
        text: 'End the class early and message her parents about her behavior',
        isCorrect: false,
        feedback: 'Distraction is developmentally normal for 7-year-olds. Ending class punishes natural behavior instead of adapting your teaching approach.',
      },
    ],
    bestPractice: 'Young learners have short attention spans. Plan for this. Vary activities every 5-7 minutes, use movement and props, and make re-engagement playful rather than corrective.',
  },
  {
    id: 5,
    title: 'The Hovering Parent',
    image: 'https://images.unsplash.com/photo-1758687126499-9ff30d1c5762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    situation: 'During your lesson with 9-year-old Tunde, his mother sits next to him, frequently correcting him, answering questions for him, and interjecting with her own questions. Tunde looks uncomfortable and stops trying.',
    question: 'How do you handle parental interference while maintaining professionalism and protecting the learning environment?',
    choices: [
      {
        text: 'Directly tell the parent to leave the room immediately',
        isCorrect: false,
        feedback: 'Direct confrontation during class creates awkwardness and can offend parents. This approach damages the relationship and doesn\'t model professionalism.',
      },
      {
        text: 'Politely acknowledge the parent, then redirect focus to the child: "Tunde, I want to hear YOUR idea first"',
        isCorrect: true,
        feedback: 'Perfect! This gently reinforces that the lesson is for the child while staying respectful to the parent. Most parents will take the hint without confrontation.',
      },
      {
        text: 'Ignore the parent entirely and continue as if they aren\'t there',
        isCorrect: false,
        feedback: 'Ignoring the behavior won\'t stop it. The parent will continue interrupting, and the child remains in an uncomfortable learning environment.',
      },
      {
        text: 'Address only the parent and exclude the child from the conversation',
        isCorrect: false,
        feedback: 'This reinforces the power dynamic you\'re trying to break. The lesson must center the student, not accommodate the parent\'s control.',
      },
    ],
    bestPractice: 'Send a friendly message after class: "I love that you\'re involved! I find students engage most when they can try independently first. Feel free to observe, but let Tunde lead." Set boundaries with warmth.',
  },
  {
    id: 6,
    title: 'Teacher Burnout',
    image: 'https://images.unsplash.com/photo-1620809975674-10b8ff5f8e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    situation: 'You\'ve taught 6 classes today back-to-back. You\'re exhausted. Your next student logs in—an adult learner who booked a conversation class and expects you to be energetic and engaged.',
    question: 'How do you deliver a quality lesson when you\'re running on empty?',
    choices: [
      {
        text: 'Push through with fake enthusiasm and hope the student doesn\'t notice',
        isCorrect: false,
        feedback: 'Students can sense inauthenticity. Forced energy feels hollow and can make the interaction feel transactional rather than genuine.',
      },
      {
        text: 'Be honest: "I\'ve had a full day, so let\'s make this a relaxed conversation." Then let the student lead topics while you actively listen and guide',
        isCorrect: true,
        feedback: 'Excellent! Honesty builds trust. Shifting to a student-led format conserves your energy while still providing value. Adults especially appreciate authenticity.',
      },
      {
        text: 'Cancel the class at the last minute',
        isCorrect: false,
        feedback: 'Last-minute cancellations frustrate students and damage your professional reputation. It should be reserved for genuine emergencies, not fatigue.',
      },
      {
        text: 'Put on a video for the student to watch and step away from the camera',
        isCorrect: false,
        feedback: 'This is neglectful teaching. If a student booked live instruction, passive video watching doesn\'t meet that expectation—they could have done that alone.',
      },
    ],
    bestPractice: 'Prevent burnout by scheduling breaks between classes, setting realistic daily limits, and protecting your energy. When tired, adjust the lesson format rather than the quality. Students value presence over performance.',
  },
];

interface EngagementScenariosProps {
  onComplete: () => void;
  onCorrectAnswer?: () => void;
  onWrongAnswer?: () => void;
}

export function EngagementScenarios({ onComplete, onCorrectAnswer, onWrongAnswer }: EngagementScenariosProps) {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [completedScenarios, setCompletedScenarios] = useState<number[]>([]);

  const scenario = scenarios[currentScenario];
  const isLastScenario = currentScenario === scenarios.length - 1;
  const allCompleted = completedScenarios.length === scenarios.length;

  const handleChoiceSelect = (index: number) => {
    setSelectedChoice(index);
    setShowFeedback(true);

    // Trigger lizard animations
    if (scenario.choices[index].isCorrect) {
      onCorrectAnswer?.();
    } else {
      onWrongAnswer?.();
    }

    if (!completedScenarios.includes(currentScenario)) {
      setCompletedScenarios([...completedScenarios, currentScenario]);
    }
  };

  const handleNext = () => {
    if (isLastScenario) {
      onComplete();
    } else {
      setCurrentScenario(currentScenario + 1);
      setSelectedChoice(null);
      setShowFeedback(false);
    }
  };

  const handlePrevious = () => {
    if (currentScenario > 0) {
      setCurrentScenario(currentScenario - 1);
      setSelectedChoice(null);
      setShowFeedback(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col relative">
      <img
        src={logo}
        alt="Tall Bridge Institute"
        className="absolute top-4 left-4 w-8 h-8 object-contain z-50"
      />
      <style>{`
        .engagement-scenarios {
          --purple-deep: #421869;
          --purple-rich: #721CB8;
          --periwinkle: #6667AB;
          --blush: #F5D5E0;
          --lime: #96D74C;
        }
      `}</style>

      <div className="engagement-scenarios">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-semibold text-gray-900">Engagement Techniques</h1>
                <p className="text-gray-600 mt-2">Real teaching scenarios. Choose how you'd respond.</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">Progress</div>
                <div className="text-2xl font-semibold" style={{ color: '#6667AB' }}>
                  {completedScenarios.length} / {scenarios.length}
                </div>
              </div>
            </div>

            {/* Progress dots */}
            <div className="flex gap-2">
              {scenarios.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 flex-1 rounded-full transition-all ${
                    completedScenarios.includes(index)
                      ? 'bg-[#84CC16]'
                      : index === currentScenario
                      ? 'bg-[#6667AB]'
                      : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-5xl mx-auto px-8 py-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentScenario}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Scenario Header */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Image */}
                    <div className="relative h-64 md:h-auto bg-gray-100">
                      <img
                        src={scenario.image}
                        alt={scenario.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-sm font-medium" style={{ color: '#6667AB' }}>
                          Scenario {scenario.id} of {scenarios.length}
                        </span>
                      </div>
                    </div>

                    {/* Situation */}
                    <div className="p-8">
                      <h2 className="text-2xl font-semibold mb-4 text-gray-900">{scenario.title}</h2>
                      <p className="text-gray-700 leading-relaxed mb-4">{scenario.situation}</p>
                      <div className="bg-[#F5D5E0]/30 border border-[#F5D5E0] rounded-lg p-4">
                        <p className="font-medium text-gray-900">{scenario.question}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Choices */}
                <div className="space-y-3 mb-6">
                  {scenario.choices.map((choice, index) => {
                    const isSelected = selectedChoice === index;
                    const showCorrect = showFeedback && choice.isCorrect;
                    const showIncorrect = showFeedback && isSelected && !choice.isCorrect;

                    return (
                      <motion.button
                        key={index}
                        onClick={() => !showFeedback && handleChoiceSelect(index)}
                        disabled={showFeedback}
                        className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                          showCorrect
                            ? 'bg-green-50 border-green-500'
                            : showIncorrect
                            ? 'bg-red-50 border-red-500'
                            : isSelected
                            ? 'bg-[#6667AB]/10 border-[#6667AB]'
                            : 'bg-white border-gray-200 hover:border-[#6667AB]/50'
                        } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                        whileHover={!showFeedback ? { scale: 1.01 } : {}}
                        whileTap={!showFeedback ? { scale: 0.99 } : {}}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                              showCorrect
                                ? 'bg-green-500 text-white'
                                : showIncorrect
                                ? 'bg-red-500 text-white'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {showCorrect ? <Check size={18} /> : showIncorrect ? <X size={18} /> : String.fromCharCode(65 + index)}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-900 leading-relaxed">{choice.text}</p>
                            {showFeedback && isSelected && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-3 pt-3 border-t border-gray-200"
                              >
                                <p className={`text-sm ${choice.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                                  {choice.feedback}
                                </p>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Best Practice */}
                {showFeedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-[#6667AB] to-[#8B87C8] rounded-2xl p-6 text-white"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <Lightbulb size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Best Practice</h3>
                        <p className="text-white/90 leading-relaxed">{scenario.bestPractice}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="bg-white border-t border-gray-200 px-8 py-6">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentScenario === 0}
              className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <ChevronLeft size={18} />
              Previous
            </button>

            <div className="text-sm text-gray-500">
              Scenario {currentScenario + 1} of {scenarios.length}
            </div>

            <button
              onClick={handleNext}
              disabled={!showFeedback}
              className="px-6 py-2.5 rounded-lg font-medium disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              style={{
                background: showFeedback ? '#6667AB' : '#d1d5db',
                color: showFeedback ? 'white' : '#6b7280',
              }}
            >
              {isLastScenario ? (
                <>
                  Complete Lesson
                  <Check size={18} />
                </>
              ) : (
                <>
                  Next Scenario
                  <ChevronRight size={18} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
