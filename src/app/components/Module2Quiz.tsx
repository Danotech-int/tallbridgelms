import { useState } from 'react';

interface Module2QuizProps {
  onComplete: () => void;
  onCorrectAnswer?: () => void;
  onWrongAnswer?: () => void;
}

const CORRECT_ANSWERS = [1, 1, 1, 1, 1, 2, 2, 1, 2, 1];
const TOPICS = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];
const TOPIC_NAMES = [
  'Classroom Management',
  'Nonverbal Communication',
  'Verbal Communication',
  'Vocal Delivery',
  'Lesson Planning'
];

interface Question {
  topic: string;
  question: string;
  options: string[];
  explanation: string;
}

const QUESTIONS: Question[] = [
  {
    topic: 'Classroom Management',
    question: 'A student goes very quiet mid-class and stops responding. What is the best first response?',
    options: [
      'Continue teaching and hope they re-engage on their own',
      'Ask them a direct question using their name and switch to a more interactive activity',
      'End the class early and reschedule',
      'Raise your voice to regain their attention'
    ],
    explanation: 'Using the student\'s name makes them feel seen, and a direct question forces gentle re-engagement. Switching activity resets the energy without pressure or embarrassment.'
  },
  {
    topic: 'Classroom Management',
    question: 'How often should you change activities during an online class to maintain a child learner\'s attention?',
    options: [
      'Once per class — keep the structure consistent',
      'Every 8 to 10 minutes',
      'Only when the student asks for something different',
      'Every 30 minutes'
    ],
    explanation: 'Children\'s online attention spans drop significantly after 8 to 10 minutes. Changing activities — even slightly — resets focus and signals that something new is coming.'
  },
  {
    topic: 'Nonverbal Communication',
    question: 'During a class, your student starts rubbing their head and repeatedly looking away from the screen. What does this most likely communicate?',
    options: [
      'They are excited about what they are learning',
      'They are confused, overwhelmed, or mentally disengaged',
      'They are ready to move to the next activity',
      'Their internet connection is unstable'
    ],
    explanation: 'Rubbing the head and looking away are classic nonverbal signals of confusion, discomfort, or mental fatigue. A strong teacher reads these cues and pivots — slowing down, simplifying, or switching activities — before the student disengages completely.'
  },
  {
    topic: 'Nonverbal Communication',
    question: 'Which of the following is the most effective way to show warmth and build trust with a student through a screen?',
    options: [
      'Speak loudly so they know you are engaged',
      'Maintain eye contact by looking directly into the camera and smile genuinely',
      'Share your screen so they always have something to look at',
      'Use formal language to appear professional'
    ],
    explanation: 'Looking into the camera creates the sensation of eye contact for the student. Combined with a genuine smile, this communicates warmth, safety, and presence — all of which are essential for a child to feel comfortable learning.'
  },
  {
    topic: 'Verbal Communication',
    question: 'Your student is a beginner with very limited English. How should you adjust your spoken English when teaching them?',
    options: [
      'Speak in slurred or simplified broken English so they can follow more easily',
      'Speak naturally but clearly — with slower pace, deliberate pronunciation, and simple vocabulary',
      'Speak at your normal speed so they are exposed to real English from the start',
      'Avoid speaking too much and rely mainly on written instructions'
    ],
    explanation: 'You should never speak in broken or slurred English — this teaches incorrect patterns. Instead, speak naturally but with deliberate clarity: slow your pace, enunciate carefully, use simple words, and repeat key phrases. You are modelling the language they are learning to speak.'
  },
  {
    topic: 'Verbal Communication',
    question: 'Which question is more likely to generate a full sentence response from a student?',
    options: [
      '"Do you understand?"',
      '"Is this easy or hard?"',
      '"Can you use that word in a sentence for me?"',
      '"Did you get it?"'
    ],
    explanation: '"Do you understand?" and "Did you get it?" almost always produce a yes — even when the student does not understand. Asking them to USE the word in a sentence requires actual application, which reveals true comprehension and produces a full verbal response.'
  },
  {
    topic: 'Vocal Delivery',
    question: 'A teacher speaks every sentence at the same speed, same volume, and same pitch throughout the class. What is the most likely effect on the student?',
    options: [
      'The student feels calm and focused throughout',
      'The student finds it easier to follow because the tone is consistent',
      'The student\'s attention drifts because there is no vocal variation to track',
      'The student learns better because they are not distracted by tone changes'
    ],
    explanation: 'Monotonous delivery gives the brain nothing to hold onto. Without variation in pitch, pace, or stress, the mind disengages and wanders. Vocal variety — rising for excitement, slowing for emphasis, pausing for impact — is what keeps a listener present and attentive.'
  },
  {
    topic: 'Vocal Delivery',
    question: 'Which technique best describes stressing certain words in a sentence to direct a student\'s attention?',
    options: [
      'Articulation',
      'Stress patterns',
      'Pausing',
      'Pacing'
    ],
    explanation: 'Stress patterns refer to deliberately emphasising certain words to signal importance. For example: "Open your book to page FIVE" tells the student exactly where to focus. Stress patterns are a core tool of effective vocal delivery in teaching.'
  },
  {
    topic: 'Lesson Planning',
    question: 'What is the primary purpose of a lesson plan before teaching an online class?',
    options: [
      'To show the employer you are professional',
      'To give you a rigid script to follow word for word',
      'To structure the class so students follow, retain, and progress — while giving you flexibility to adapt',
      'To make sure you cover the maximum amount of content in each session'
    ],
    explanation: 'A lesson plan provides structure and intention — but it is not a rigid script. It guides the flow, ensures progression, and allows the teacher to be present rather than improvising. The plan serves the student, not the teacher\'s ego.'
  },
  {
    topic: 'Lesson Planning',
    question: 'When planning a lesson for a student you have taught before, what is the most important starting point?',
    options: [
      'Review what topics you find most interesting to teach',
      'Review what the student struggled with last session and build from there',
      'Start fresh each time so the student is not reminded of previous mistakes',
      'Follow the textbook in order regardless of the student\'s progress'
    ],
    explanation: 'Great lesson planning is student-centred. Reviewing what the student found difficult in the previous session allows you to address gaps, build confidence, and ensure real progression — rather than simply moving through material.'
  }
];

export function Module2Quiz({ onComplete, onCorrectAnswer, onWrongAnswer }: Module2QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>(new Array(10).fill(false));
  const [topicScore, setTopicScore] = useState([0, 0, 0, 0, 0]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (chosen: number) => {
    if (answered[currentQuestion]) return;

    const newAnswered = [...answered];
    newAnswered[currentQuestion] = true;
    setAnswered(newAnswered);
    setSelectedAnswer(chosen);

    const isCorrect = chosen === CORRECT_ANSWERS[currentQuestion];

    if (isCorrect) {
      setScore(score + 1);
      const newTopicScore = [...topicScore];
      newTopicScore[TOPICS[currentQuestion]]++;
      setTopicScore(newTopicScore);
      onCorrectAnswer?.();
    } else {
      onWrongAnswer?.();
    }

    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < 9) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(new Array(10).fill(false));
    setTopicScore([0, 0, 0, 0, 0]);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowResult(false);
  };

  const progress = ((currentQuestion + (answered[currentQuestion] ? 1 : 0)) / 10) * 100;

  if (showResult) {
    const pct = Math.round((score / 10) * 100);
    let icon, title, message;

    if (pct >= 90) {
      icon = '🏆';
      title = 'Outstanding result.';
      message = 'You have a strong grasp of what it takes to communicate effectively in an online classroom. Your students are in good hands.';
    } else if (pct >= 70) {
      icon = '🌟';
      title = 'Really solid.';
      message = 'You understand the core principles well. Review the questions you missed — there is insight in each explanation that will sharpen you further.';
    } else if (pct >= 50) {
      icon = '💪';
      title = 'Good start.';
      message = 'You have the foundation. Go back through the lessons where you dropped points — verbal communication, vocal delivery, and classroom management will make or break your classes.';
    } else {
      icon = '📚';
      title = 'Keep going.';
      message = 'Do not be discouraged. Review the lessons and come back to the quiz. Every question you missed is a teaching skill you are about to gain.';
    }

    return (
      <div className="min-h-screen bg-[#421869] text-white">
        {/* Progress Bar */}
        <div className="px-10 pt-3.5">
          <div className="flex justify-between text-xs text-white/40 mb-2">
            <span>Completed</span>
            <span>Score: {score}</span>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#96D74C] rounded-full transition-all duration-500" style={{ width: '100%' }} />
          </div>
        </div>

        {/* Result */}
        <div className="flex items-center justify-center py-14">
          <div className="max-w-lg w-full text-center px-6">
            <span className="text-6xl block mb-3.5">{icon}</span>
            <h2 className="font-['Playfair_Display',serif] text-3xl mb-2">
              <span className="text-white">{title.split('.')[0]}</span>
              <em className="text-[#96D74C]"> {title.split('.')[1]}</em>
            </h2>
            <div className="inline-block bg-[#96D74C] text-[#421869] text-2xl font-medium px-7 py-2.5 rounded-full my-3.5">
              {score} / 10 correct
            </div>
            <p className="text-white/70 leading-relaxed mb-4 text-sm font-light">{message}</p>

            {/* Topic Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-4 text-left">
              {TOPIC_NAMES.map((topic, i) => (
                <div
                  key={i}
                  className={`bg-white/5 border border-white/10 rounded-xl p-3 ${
                    i === 4 ? 'col-span-2' : ''
                  }`}
                >
                  <div className="text-[10px] font-medium uppercase tracking-wider text-[#6667AB] mb-1">{topic}</div>
                  <div className="text-sm font-light text-white">{topicScore[i]} / 2 correct</div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 justify-center mt-5">
              <button
                onClick={handleRestart}
                className="bg-white/8 border border-white/15 text-white px-6 py-2.5 rounded-full text-sm hover:bg-white/14 transition-colors"
              >
                Try again
              </button>
              <button
                onClick={onComplete}
                className="bg-[#96D74C] text-[#421869] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#c0f050] transition-colors"
              >
                Continue to next module →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = QUESTIONS[currentQuestion];
  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="min-h-screen bg-[#421869] text-white">
      {/* Progress Bar */}
      <div className="px-10 pt-3.5">
        <div className="flex justify-between text-xs text-white/40 mb-2">
          <span>Question {currentQuestion + 1} of 10</span>
          <span>Score: {score}</span>
        </div>
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-[#96D74C] rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Quiz Content */}
      <div className="flex items-center justify-center py-7">
        <div className="max-w-2xl w-full px-10">
          <div className="mb-3.5 flex items-center gap-2.5 flex-wrap">
            <span className="text-[11px] font-medium uppercase tracking-widest text-[#6667AB]">
              Question {currentQuestion + 1} of 10
            </span>
            <span className="text-[11px] bg-[#6667AB]/20 border border-[#6667AB]/30 text-[#6667AB] px-2.5 py-0.5 rounded-full">
              {question.topic}
            </span>
          </div>

          <h2 className="font-['Playfair_Display',serif] text-2xl leading-snug text-white mb-6 font-bold">
            {question.question}
          </h2>

          <div className="space-y-2.5 mb-3.5">
            {question.options.map((option, i) => {
              const isCorrect = i === CORRECT_ANSWERS[currentQuestion];
              const isWrong = i === selectedAnswer && selectedAnswer !== CORRECT_ANSWERS[currentQuestion];
              const isDisabled = answered[currentQuestion];

              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={isDisabled}
                  className={`w-full text-left bg-white/5 border-[1.5px] rounded-xl px-4.5 py-3.5 transition-all flex items-start gap-3 ${
                    isCorrect && answered[currentQuestion]
                      ? 'bg-[#2ecc71]/15 border-[#2ecc71] text-white'
                      : isWrong
                      ? 'bg-[#e74c3c]/12 border-[#e74c3c] text-white/45'
                      : !isDisabled
                      ? 'border-white/12 hover:bg-white/10 hover:border-white/25 text-white/85'
                      : 'border-white/12 text-white/85'
                  }`}
                >
                  <span
                    className={`min-w-[26px] h-[26px] rounded-full flex items-center justify-center text-xs font-medium mt-0.5 transition-all ${
                      isCorrect && answered[currentQuestion]
                        ? 'bg-[#2ecc71] text-white'
                        : isWrong
                        ? 'bg-[#e74c3c] text-white'
                        : 'bg-white/10'
                    }`}
                  >
                    {letters[i]}
                  </span>
                  <span className="flex-1 text-sm font-light leading-relaxed">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="bg-[#96D74C]/10 border border-[#96D74C]/30 rounded-xl p-5 mb-4 animate-[fadeIn_0.4s_ease]">
              <div className="text-[10px] font-medium uppercase tracking-wider text-[#96D74C] mb-1.5">
                Why this is correct
              </div>
              <p className="text-sm text-white/80 leading-relaxed font-light">{question.explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {showExplanation && (
            <button
              onClick={handleNext}
              className="bg-[#96D74C] text-[#421869] px-7 py-3 rounded-full text-sm font-medium hover:bg-[#c0f050] transition-colors"
            >
              {currentQuestion < 9 ? 'Next question →' : 'See my results →'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
