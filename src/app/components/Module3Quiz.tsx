import { useState } from 'react';

interface Module3QuizProps {
  onComplete: () => void;
  onCorrectAnswer?: () => void;
  onWrongAnswer?: () => void;
}

const CORRECT_ANSWERS = [1, 1, 2, 1, 2, 1, 2];
const TOPICS = [0, 0, 0, 0, 0, 1, 1];
const TOPIC_NAMES = ['AI Tools', 'Responsible AI Use'];

interface Question {
  topic: string;
  question: string;
  options: string[];
  explanation: string;
}

const QUESTIONS: Question[] = [
  {
    topic: 'AI Tools — Music',
    question: 'A student loves singing but has very limited English vocabulary. Which AI tool would you use to turn their favourite song into an English learning experience?',
    options: [
      'Kahoot! — to build a quiz based on the song lyrics',
      'Suno AI — to generate an English version of the song using translated lyrics',
      'Canva — to design a poster of the song lyrics',
      'Speechace — to analyse the student\'s singing pronunciation'
    ],
    explanation: 'Suno AI generates full songs from text prompts. You can use ChatGPT to translate the meaning of the student\'s song into English, then paste those lyrics into Suno to create an English version the student already has an emotional connection to. Emotional connection accelerates language learning faster than any drill.'
  },
  {
    topic: 'AI Tools — Games & Quizzes',
    question: 'You want to make vocabulary review feel like a competition during a live class. Students should be able to see a leaderboard and race to answer in real time. Which tool is best for this?',
    options: [
      'Quizlet — for flashcard practice',
      'Kahoot! — for live competitive quiz games with real-time leaderboards',
      'Canva — for designing a quiz template',
      'ChatGPT — to generate the quiz questions'
    ],
    explanation: 'Kahoot! is built specifically for live, competitive quiz games where students race to answer and see a leaderboard update in real time. It spikes energy immediately and is one of the most effective tools for turning vocabulary review into something students actually want to do.'
  },
  {
    topic: 'AI Tools — Lesson Planning',
    question: 'You need to plan a 20-minute ESL lesson for a 9-year-old beginner on the topic of animals — and you need it done in under five minutes. Which AI tool handles this best?',
    options: [
      'Wordwall — to build an animal word search',
      'Suno AI — to generate an animal vocabulary song',
      'MagicSchool AI or ChatGPT — to generate a complete structured lesson plan instantly',
      'Diffit — to create a reading passage about animals'
    ],
    explanation: 'MagicSchool AI is built specifically for teachers and generates complete lesson plans — including objectives, activities, and timing — from a simple prompt. ChatGPT does the same. Both can produce a full structured plan in under two minutes, leaving you more time to actually prepare and personalize it.'
  },
  {
    topic: 'AI Tools — Pronunciation',
    question: 'You want to identify exactly which English sounds your student struggles with most, so you can target those in future lessons. Which tool gives you this kind of precise pronunciation analysis?',
    options: [
      'Quizizz — it tracks student response accuracy',
      'Speechace — it analyses spoken English and scores pronunciation word by word',
      'Canva — you can create a pronunciation chart for the student',
      'Anki — spaced repetition flashcards help with pronunciation over time'
    ],
    explanation: 'Speechace analyses spoken English and returns a detailed score for every word — showing you exactly which phonemes a student is mispronouncing. This turns guesswork into precision. You know exactly where to spend your teaching time.'
  },
  {
    topic: 'AI Tools — Vocabulary',
    question: 'You want your student to practice this week\'s vocabulary list independently between sessions. Which tool automatically generates flashcards, matching games, and practice tests from a word list you provide?',
    options: [
      'Gamma — it builds presentation slides from your content',
      'Twee — it generates comprehension exercises from a topic',
      'Quizlet AI — it auto-generates flashcards, matching games, and tests from any word list',
      'Curipod — it creates interactive lesson slides with response tracking'
    ],
    explanation: 'Quizlet AI takes any word list and instantly generates multiple study modes — flashcards, matching games, fill-in-the-blank, and timed tests. Sending your student a Quizlet link before class means they arrive having already encountered the vocabulary, making your live session far more productive.'
  },
  {
    topic: 'Responsible AI Use',
    question: 'You use ChatGPT to generate a lesson about a Chinese cultural festival. The content looks detailed and well-written. What should you do before using it in class?',
    options: [
      'Use it immediately — ChatGPT is trained on accurate data',
      'Cross-check the cultural details with at least one non-AI source before using it',
      'Ask ChatGPT to verify its own content',
      'Only use it if the student is a beginner who would not notice any errors'
    ],
    explanation: 'AI can hallucinate — producing content that sounds accurate but is factually or culturally wrong. This is especially dangerous when teaching cultural content to students from that culture. Always verify AI-generated material against a reliable non-AI source before it enters your classroom.'
  },
  {
    topic: 'Responsible AI Use',
    question: 'Which statement best describes the correct relationship between a teacher and AI tools?',
    options: [
      'AI should drive the lesson — the teacher implements what AI suggests',
      'AI replaces the need for lesson planning since it can generate everything on demand',
      'AI is a time-saving assistant for repetitive tasks — the teacher remains in control of content, judgment, and the student relationship',
      'AI should only be used for administrative tasks, never for lesson content'
    ],
    explanation: 'The tool is not the teacher — you are. AI handles repetitive, time-consuming tasks so you can focus on what only a human can do: reading your student, adapting in the moment, building trust, and making learning feel alive. AI prepares the stage. You perform on it.'
  }
];

export function Module3Quiz({ onComplete, onCorrectAnswer, onWrongAnswer }: Module3QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>(new Array(7).fill(false));
  const [topicScore, setTopicScore] = useState([0, 0]);
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
    if (currentQuestion < 6) {
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
    setAnswered(new Array(7).fill(false));
    setTopicScore([0, 0]);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowResult(false);
  };

  const progress = ((currentQuestion + (answered[currentQuestion] ? 1 : 0)) / 7) * 100;

  if (showResult) {
    const pct = Math.round((score / 7) * 100);
    let icon, title, message;

    if (pct >= 86) {
      icon = '🏆';
      title = 'AI-ready teacher.';
      message = 'You know your tools and you know how to use them responsibly. That combination is rare — and it will show in your classes.';
    } else if (pct >= 57) {
      icon = '🌟';
      title = 'Solid foundation.';
      message = 'You have a good grasp of the key tools. Review the ones you missed — knowing exactly what each tool does and when to use it will save you hours every week.';
    } else {
      icon = '📚';
      title = 'Go back and explore.';
      message = 'The AI tools in this module are genuinely transformative when you know how to use them. Revisit the lessons, try the tools yourself, and come back to this quiz.';
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
              {score} / 7 correct
            </div>
            <p className="text-white/70 leading-relaxed mb-4 text-sm font-light">{message}</p>

            {/* Topic Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-4 text-left">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="text-[10px] font-medium uppercase tracking-wider text-[#6667AB] mb-1">AI Tools</div>
                <div className={`text-sm font-light ${topicScore[0] >= 4 ? 'text-[#2ecc71]' : topicScore[0] >= 2 ? 'text-white' : 'text-[#e74c3c]'}`}>
                  {topicScore[0]} / 5 correct
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="text-[10px] font-medium uppercase tracking-wider text-[#6667AB] mb-1">Responsible AI Use</div>
                <div className={`text-sm font-light ${topicScore[1] === 2 ? 'text-[#2ecc71]' : topicScore[1] === 1 ? 'text-white' : 'text-[#e74c3c]'}`}>
                  {topicScore[1]} / 2 correct
                </div>
              </div>
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
          <span>Question {currentQuestion + 1} of 7</span>
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
              Question {currentQuestion + 1} of 7
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
              {currentQuestion < 6 ? 'Next question →' : 'See my results →'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
