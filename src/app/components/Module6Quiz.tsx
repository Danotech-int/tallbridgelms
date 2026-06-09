import { useState } from 'react';

interface Module6QuizProps {
  onComplete: () => void;
  onCorrectAnswer?: () => void;
  onWrongAnswer?: () => void;
}

const CORRECT_ANSWERS = [1, 1, 1, 2, 2];
const TOPICS = [0, 0, 1, 2, 3];
const TOPIC_NAMES = ['Physical Health', 'Mental Health', 'Mood & Energy', 'Social Life'];

interface Question {
  topic: string;
  question: string;
  options: string[];
  explanation: string;
}

const QUESTIONS: Question[] = [
  {
    topic: 'Physical Health',
    question: 'As a remote ESL teacher sitting at a desk for several hours a day, what is the single most impactful daily habit for your physical and mental wellbeing?',
    options: [
      'Drinking at least three cups of coffee to maintain energy throughout teaching sessions',
      'Taking a 30-minute walk outside in natural light every day',
      'Watching TV between classes to give your brain a rest',
      'Stretching once per week on your day off'
    ],
    explanation: 'A daily 30-minute walk outside in natural light lowers cortisol, boosts serotonin, improves circulation, clears mental fog, and gives your eyes a much-needed break from screens. It costs nothing, requires no equipment, and has the most consistent positive impact of any single daily habit for remote workers.'
  },
  {
    topic: 'Physical Health',
    question: 'You have been teaching for four hours straight and notice your neck and lower back are aching. What is the most effective immediate response?',
    options: [
      'Take a painkiller and continue teaching',
      'Stand up, do a short stretch routine, and reassess your posture and chair setup',
      'Lie down for thirty minutes between sessions',
      'Drink more water and hope the pain passes'
    ],
    explanation: 'Pain is a signal. Standing up and stretching addresses the root cause — prolonged static posture — immediately. Reassessing your chair height, screen position, and lumbar support prevents the problem from returning. Building a five-minute stretch routine between every session is the long-term solution.'
  },
  {
    topic: 'Mental Health',
    question: 'A teacher notices they have been dreading their classes, losing patience faster than usual, and feeling emotionally flat after sessions they used to enjoy. What do these signs most likely indicate?',
    options: [
      'They need more difficult students to stay challenged',
      'They are in the early stages of burnout and need to make deliberate changes to their routine',
      'They are simply not suited to teaching and should consider another career',
      'They need to take on more classes to increase their income and motivation'
    ],
    explanation: 'Dreading previously enjoyable work, reduced patience, and emotional flatness are classic early burnout signals. Burnout does not arrive suddenly — it creeps in over time. Recognising it early and making changes — building rest rituals, setting hard stop times, protecting social connection — is how you recover before it becomes serious.'
  },
  {
    topic: 'Mood & Energy',
    question: 'You wake up feeling emotionally flat and low on energy. You have a class starting in 40 minutes with a young learner who needs your full presence. What is the most effective quick reset?',
    options: [
      'Cancel the class and reschedule — you cannot teach well when you feel this way',
      'Drink two cups of coffee quickly to boost your energy before starting',
      'Play an energising song, do two minutes of box breathing, and remind yourself of a specific student win',
      'Tell your student how you are feeling so they understand if the class is slower today'
    ],
    explanation: 'Music changes your physiological state faster than almost anything else. Box breathing (in for 4, hold for 4, out for 4) activates your parasympathetic nervous system and brings you back into your body. Recalling a specific win reconnects you to your purpose. Together these three take under five minutes and are genuinely effective — not just motivational talk.'
  },
  {
    topic: 'Social Life',
    question: 'A remote ESL teacher realises they have not socialised meaningfully in two weeks. Their schedule is built around early morning and late evening sessions. What is the most practical solution?',
    options: [
      'Accept that remote teaching means giving up a social life during busy periods',
      'Reduce the number of students they take on so they have more free time',
      'Block specific social time in their calendar and treat it like a booked class — non-negotiable',
      'Join an online gaming community so they can socialise without leaving home'
    ],
    explanation: 'Without deliberate protection, social life disappears into an irregular schedule. Blocking social time in your calendar and treating it with the same respect as a student booking is the only reliable solution. Human connection is not a luxury for a teacher — it is what keeps you emotionally available to give to your students. You cannot pour from an empty cup.'
  }
];

export function Module6Quiz({ onComplete, onCorrectAnswer, onWrongAnswer }: Module6QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>(new Array(5).fill(false));
  const [topicScore, setTopicScore] = useState([0, 0, 0, 0]);
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
    if (currentQuestion < 4) {
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
    setAnswered(new Array(5).fill(false));
    setTopicScore([0, 0, 0, 0]);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowResult(false);
  };

  const progress = ((currentQuestion + (answered[currentQuestion] ? 1 : 0)) / 5) * 100;

  if (showResult) {
    const pct = Math.round((score / 5) * 100);
    let icon, title, message;

    if (pct === 100) {
      icon = '🌿';
      title = 'You are taking care of yourself.';
      message = 'You understand what it takes to sustain this career long term. Your students will feel the difference — a teacher who takes care of themselves shows up fully, every time.';
    } else if (pct >= 60) {
      icon = '💛';
      title = 'Good awareness.';
      message = 'You have a solid foundation. Review the questions you missed — sometimes the most important habits are the ones that feel optional until you really need them.';
    } else {
      icon = '📚';
      title = 'Take this seriously.';
      message = 'This module exists because burnout is real and it ends teaching careers quietly. Go back through both lessons and build at least one new habit this week — physical, mental, or social.';
    }

    const topicTotals = [2, 1, 1, 1];

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
              {score} / 5 correct
            </div>
            <p className="text-white/70 leading-relaxed mb-4 text-sm font-light">{message}</p>

            {/* Topic Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-4 text-left">
              {TOPIC_NAMES.map((topic, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="text-[10px] font-medium uppercase tracking-wider text-[#6667AB] mb-1">{topic}</div>
                  <div className={`text-sm font-light ${topicScore[i] === topicTotals[i] ? 'text-[#2ecc71]' : topicScore[i] > 0 ? 'text-white' : 'text-[#e74c3c]'}`}>
                    {topicScore[i]} / {topicTotals[i]} correct
                  </div>
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
                Complete course →
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
          <span>Question {currentQuestion + 1} of 5</span>
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
              Question {currentQuestion + 1} of 5
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
              {currentQuestion < 4 ? 'Next question →' : 'See my results →'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
