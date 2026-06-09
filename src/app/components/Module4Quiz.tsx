import { useState } from 'react';

interface Module4QuizProps {
  onComplete: () => void;
  onCorrectAnswer?: () => void;
  onWrongAnswer?: () => void;
}

const CORRECT_ANSWERS = [2, 1, 1, 2, 2];
const TOPICS = [0, 0, 1, 2, 2];
const TOPIC_NAMES = ['TEFL Certification', 'Building Your CV', 'Introductory Video'];

interface Question {
  topic: string;
  question: string;
  options: string[];
  explanation: string;
}

const QUESTIONS: Question[] = [
  {
    topic: 'TEFL Certification',
    question: 'The TeacherRecord TEFL certification course is 120 hours long. If you dedicate two hours per day to completing it, approximately how long will it take you to finish?',
    options: [
      'Two weeks',
      'Four weeks',
      'Eight weeks',
      'Six months'
    ],
    explanation: 'At two hours per day, 120 hours takes 60 days — approximately eight weeks. Your target within this cohort is to complete it in the first two weeks by increasing your daily study time. The course is fully online, free, and your certificate is issued the moment you finish.'
  },
  {
    topic: 'TEFL Certification',
    question: 'Which of the following is NOT a reason the TEFL certificate matters to foreign ESL employers?',
    options: [
      'It proves you understand how to structure a lesson',
      'It proves you are a native English speaker',
      'It shows you can manage a classroom effectively',
      'It signals that you are a professional, not just someone who can speak English'
    ],
    explanation: 'The TEFL certificate does not certify that you are a native speaker — it certifies that you are trained to teach. TeacherRecord\'s TEFL requires no degree and no native speaker status. What it proves is your commitment to professional teaching and your knowledge of how to structure and deliver effective lessons. This is recognised by employers worldwide.'
  },
  {
    topic: 'Building Your CV',
    question: 'Which of the following is the most important element missing from a weak ESL teacher CV that lists only job titles and dates?',
    options: [
      'A list of hobbies and personal interests',
      'A professional profile summary, specific numbers, age ranges taught, and a demo video link',
      'A longer work history section with more previous employers listed',
      'A formal cover letter attached separately'
    ],
    explanation: 'A strong ESL CV tells the employer immediately who you are, what you have achieved in numbers, which age groups you have taught, and gives them access to your intro video. Without these, you blend into every other application. Numbers, specificity, and a video link are what make a CV stand out to employers worldwide.'
  },
  {
    topic: 'Your Introductory Video',
    question: 'What is the maximum recommended length for a teacher introductory video sent to Chinese ESL employers?',
    options: [
      'Five minutes — to give the employer a thorough impression',
      'Ten minutes — so you can cover your full teaching methodology',
      'Two to three minutes maximum',
      'Thirty seconds — keep it as brief as possible'
    ],
    explanation: 'Employers review dozens of videos. If yours is longer than three minutes, they will not finish it. Your goal is to communicate your energy, your teaching style, your commitment, and your personality in two minutes — maximum three. Every second must earn its place.'
  },
  {
    topic: 'Your Introductory Video',
    question: 'A teacher records their intro video and says: "I am very strict and I expect my students to work hard and follow instructions at all times." Why is this a poor choice of messaging?',
    options: [
      'Chinese parents do not value discipline in a teacher',
      'It is too honest — teachers should not reveal their teaching style',
      'It prioritises the teacher\'s rules over the child\'s experience — leading with warmth and capability is more effective',
      'The word "strict" is grammatically incorrect in this context'
    ],
    explanation: 'Foreign employers want a teacher who delivers results AND one their child enjoys learning with. Leading with strictness signals rigidity, not warmth. A strong intro video leads with enthusiasm, passion for the subject, and commitment to the learner\'s success — then lets the teaching demonstrate the structure. Warmth first. Capability second. Always.'
  }
];

export function Module4Quiz({ onComplete, onCorrectAnswer, onWrongAnswer }: Module4QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>(new Array(5).fill(false));
  const [topicScore, setTopicScore] = useState([0, 0, 0]);
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
    setTopicScore([0, 0, 0]);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowResult(false);
  };

  const progress = ((currentQuestion + (answered[currentQuestion] ? 1 : 0)) / 5) * 100;

  if (showResult) {
    const pct = Math.round((score / 5) * 100);
    let icon, title, message;

    if (pct === 100) {
      icon = '🏆';
      title = 'Hire-ready teacher.';
      message = 'You know exactly what employers are looking for and how to position yourself to get hired. Your CV, your video, and your certification are all going to do the work they need to do.';
    } else if (pct >= 60) {
      icon = '🌟';
      title = 'Nearly there.';
      message = 'Strong result. Review the questions you missed — the details matter when it comes to getting hired. A stronger CV or a better intro video could be the difference between getting the role and getting overlooked.';
    } else {
      icon = '📚';
      title = 'Review and retry.';
      message = 'Go back through the module lessons — specifically the CV guide and introductory video section. Everything you need to get hired is in those lessons. Come back to this quiz when you are ready.';
    }

    const topicTotals = [2, 1, 2];

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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-4 text-left">
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
