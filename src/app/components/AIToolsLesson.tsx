import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { logo } from '../assets';

interface AIToolsLessonProps {
  onComplete: () => void;
}

export function AIToolsLesson({ onComplete }: AIToolsLessonProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 11;

  const goToNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const goToPrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const ToolCard = ({ logo, name, link, isFree, description }: { logo?: string; name: string; link: string; isFree: boolean; description: string }) => (
    <div className="bg-white/[0.05] border border-white/10 rounded-[14px] p-3.5 transition-all hover:border-[#96D74C]/40 hover:bg-white/[0.08]">
      <div className="flex items-center gap-2.5 mb-2">
        {logo && (
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-white/[0.08] flex items-center justify-center flex-shrink-0">
            <ImageWithFallback src={logo} alt={name} className="w-full h-full object-contain rounded-md" />
          </div>
        )}
        <div className="text-[13px] font-medium text-white flex-1">{name}</div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block text-[10px] font-medium tracking-[0.06em] uppercase px-2.5 py-1 rounded-full mb-2 no-underline transition-opacity hover:opacity-75 ${
          isFree
            ? 'bg-[#96D74C]/15 border border-[#96D74C]/35 text-[#96D74C]'
            : 'bg-[#6667AB]/15 border border-[#6667AB]/35 text-[#6667AB]'
        }`}
      >
        {isFree ? 'Free tier → Visit' : 'Paid → Visit'}
      </a>
      <div className="text-[11px] text-white/50 leading-[1.55] font-light">{description}</div>
    </div>
  );

  return (
    <div className="h-full flex flex-col bg-[#421869] text-white overflow-hidden relative">
      <img
        src={logo}
        alt="Tall Bridge Institute"
        className="absolute top-4 left-4 w-8 h-8 object-contain z-50"
      />
      {/* Progress Bar */}
      <div className="px-10 pt-3 flex-shrink-0">
        <div className="flex justify-between text-xs text-white/35 mb-2">
          <span>Slide {currentSlide + 1} of {totalSlides}</span>
        </div>
        <div className="h-[3px] bg-white/10 rounded overflow-hidden">
          <div
            className="h-full bg-[#96D74C] rounded transition-all duration-500"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex-1 overflow-y-auto px-10 py-6">
        <div className="max-w-[700px] w-full mx-auto min-h-full flex items-center">
          <div className="w-full py-4">
          {/* Slide 1: Title */}
          {currentSlide === 0 && (
            <div>
              <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6667AB] mb-3">Module 3</div>
              <div className="font-['Playfair_Display',serif] text-[clamp(24px,4vw,40px)] font-bold text-white leading-[1.2] mb-3">
                AI Tools for<br /><em className="text-[#F5D5E0] italic">ESL Teaching.</em>
              </div>
              <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3">
                You do not need to be a tech expert to use AI. You just need to know which tools do what — and how to drop them into your classes without wasting time.
              </div>
              <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3">
                This module covers the tools real ESL teachers are using right now. Organised by what you actually need them for. Every badge is clickable — tap it to go straight to the website.
              </div>
              <div className="text-[14px] text-white/50 font-light leading-[1.7] italic border-l-2 border-[#96D74C] pl-3.5 mt-4">
                "AI does not replace the teacher. It removes the busywork so the teacher can focus on what only a human can do."
              </div>
            </div>
          )}

          {/* Slide 2: Music & Songs */}
          {currentSlide === 1 && (
            <div>
              <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6667AB] mb-3">Category 1 — Music & Songs</div>
              <div className="font-['Playfair_Display',serif] text-[clamp(16px,2.5vw,22px)] text-white leading-[1.4] my-3">
                Children remember words<br />they <em className="text-[#96D74C] italic">sing.</em>
              </div>
              <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3">
                You do not need to know how to sing or compose. AI generates custom songs for any vocabulary topic in seconds.
              </div>
              <div className="grid grid-cols-2 gap-2.5 my-3.5">
                <ToolCard
                  logo="/src/imports/logo_suno-1.jpeg"
                  name="Suno AI"
                  link="https://suno.com"
                  isFree={true}
                  description="Type a topic or lyrics — Suno generates a full song with vocals and music. Perfect for vocabulary songs, greeting rituals, or phonics."
                />
                <ToolCard
                  logo="/src/imports/logo_udio-1.png"
                  name="Udio"
                  link="https://udio.com"
                  isFree={true}
                  description="Generates full songs from text prompts. Great alternative to Suno or for getting a different musical style."
                />
              </div>
              <div className="bg-[#96D74C]/[0.08] border border-[#96D74C]/20 rounded-xl px-4.5 py-3.5 my-3">
                <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#96D74C] mb-2">Real classroom example</div>
                <p className="text-[13px] text-white/80 leading-[1.7] font-light m-0">
                  Ask ChatGPT to write simple lyrics about colours or animals, paste into Suno to generate the song. Play it in class. <strong className="text-white font-medium">By the third session, students know every word without drilling.</strong>
                </p>
              </div>
            </div>
          )}

          {/* Slide 3: Image Generation */}
          {currentSlide === 2 && (
            <div>
              <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6667AB] mb-3">Category 2 — Image Generation</div>
              <div className="font-['Playfair_Display',serif] text-[clamp(16px,2.5vw,22px)] text-white leading-[1.4] my-3">
                Can't find the right image?<br /><em className="text-[#96D74C] italic">Generate it in seconds.</em>
              </div>
              <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3">
                Mid-class and need to show a student exactly what a word means? AI image generators solve this instantly.
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-3.5">
                <ToolCard
                  logo="/src/imports/logo_chatgpt-1.png"
                  name="ChatGPT"
                  link="https://chatgpt.com"
                  isFree={true}
                  description="Type what you need and get a custom image instantly. No searching. No copyright worries."
                />
                <ToolCard
                  logo="/src/imports/logo_canva-1.jpeg"
                  name="Canva AI"
                  link="https://canva.com"
                  isFree={true}
                  description="Generate images AND design flashcards, slides, and worksheets in the same tool."
                />
                <ToolCard
                  logo="/src/imports/logo_firefly.png"
                  name="Adobe Firefly"
                  link="https://firefly.adobe.com"
                  isFree={true}
                  description="High quality image generation. Great for visual aids, scene illustrations, and story images."
                />
              </div>
            </div>
          )}

          {/* Slide 4: Lesson Planning */}
          {currentSlide === 3 && (
            <div>
              <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6667AB] mb-3">Category 3 — Lesson Planning</div>
              <div className="font-['Playfair_Display',serif] text-[clamp(16px,2.5vw,22px)] text-white leading-[1.4] my-3">
                Build a full lesson plan<br /><em className="text-[#96D74C] italic">in minutes, not hours.</em>
              </div>
              <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3">
                These tools take your topic, your student's level, and their age — and generate a complete lesson plan ready to teach.
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-3.5">
                <ToolCard
                  logo="/src/imports/logo_magicschool-1.jpeg"
                  name="MagicSchool AI"
                  link="https://magicschool.ai"
                  isFree={true}
                  description="Built specifically for teachers. Lesson plans, quizzes, feedback, and parent emails in one place."
                />
                <ToolCard
                  logo="/src/imports/logo_chatgpt-1.png"
                  name="ChatGPT"
                  link="https://chatgpt.com"
                  isFree={true}
                  description="Ask it to plan a 20-minute ESL lesson for a 9-year-old beginner. Full structured plan delivered instantly."
                />
                <ToolCard
                  logo="/src/imports/logo_twee-1.png"
                  name="Twee"
                  link="https://twee.com"
                  isFree={true}
                  description="Built for ESL teachers. Paste a topic and Twee generates comprehension questions, dialogues, and exercises."
                />
              </div>
            </div>
          )}

          {/* Slide 5: Games & Quizzes */}
          {currentSlide === 4 && (
            <div>
              <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6667AB] mb-3">Category 4 — Games & Quizzes</div>
              <div className="font-['Playfair_Display',serif] text-[clamp(16px,2.5vw,22px)] text-white leading-[1.4] my-3">
                Turn any lesson into<br />a <em className="text-[#96D74C] italic">game.</em>
              </div>
              <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3">
                Students who are playing are students who are learning. Build interactive games and quizzes in minutes.
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-3.5">
                <ToolCard
                  logo="/src/imports/logo_kahoot-1.png"
                  name="Kahoot!"
                  link="https://kahoot.com"
                  isFree={true}
                  description="Live quiz games. Students race to answer. Energy spikes immediately."
                />
                <ToolCard
                  logo="/src/imports/logo_quiziz.png"
                  name="Quizizz"
                  link="https://quizizz.com"
                  isFree={true}
                  description="Self-paced quizzes. Great for homework review between sessions."
                />
                <ToolCard
                  logo="/src/imports/logo_wordwall.jpeg"
                  name="Wordwall"
                  link="https://wordwall.net"
                  isFree={true}
                  description="Matching games, anagrams, word searches. Students play on screen during class."
                />
                <ToolCard
                  name="Gamma"
                  link="https://gamma.app"
                  isFree={true}
                  description="AI-generated lesson decks. Type a topic — Gamma builds the slides automatically."
                />
              </div>
            </div>
          )}

          {/* Slide 6: Flashcards */}
          {currentSlide === 5 && (
            <div>
              <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6667AB] mb-3">Category 5 — Flashcards & Vocabulary</div>
              <div className="font-['Playfair_Display',serif] text-[clamp(16px,2.5vw,22px)] text-white leading-[1.4] my-3">
                Vocabulary sticks when<br />students <em className="text-[#96D74C] italic">interact with it.</em>
              </div>
              <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3">
                These tools auto-generate flashcard sets, matching games, and practice activities from any word list.
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-3.5">
                <ToolCard
                  logo="/src/imports/logo_quizlet-1.png"
                  name="Quizlet AI"
                  link="https://quizlet.com"
                  isFree={true}
                  description="Type your word list — Quizlet generates flashcards, matching games, and practice tests automatically."
                />
                <ToolCard
                  logo="/src/imports/logo_anki-1.jpeg"
                  name="Anki"
                  link="https://apps.ankiweb.net"
                  isFree={true}
                  description="Spaced repetition flashcards. Words appear just before students forget them. One of the most proven vocab tools in the world."
                />
                <ToolCard
                  logo="/src/imports/logo_diffit-1.png"
                  name="Diffit"
                  link="https://web.diffit.me"
                  isFree={true}
                  description="Paste any text or link — Diffit generates a reading passage, vocabulary list, and questions at your student's exact level."
                />
              </div>
              <div className="bg-[#96D74C]/[0.08] border border-[#96D74C]/20 rounded-xl px-4.5 py-3.5 my-3">
                <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#96D74C] mb-2">How to use this in class</div>
                <p className="text-[13px] text-white/80 leading-[1.7] font-light m-0">
                  Before each session, send your student a Quizlet link with the week's vocabulary. They practice 5 minutes before class. <strong className="text-white font-medium">By the time you meet, they already know the words.</strong>
                </p>
              </div>
            </div>
          )}

          {/* Slide 7: Student Diagnosis */}
          {currentSlide === 6 && (
            <div>
              <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6667AB] mb-3">Category 6 — Diagnosing Student Needs</div>
              <div className="font-['Playfair_Display',serif] text-[clamp(16px,2.5vw,22px)] text-white leading-[1.4] my-3">
                Know exactly what your<br />student needs — <em className="text-[#96D74C] italic">before they tell you.</em>
              </div>
              <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3">
                These tools help you understand where your student is struggling so you can target your lessons precisely.
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-3.5">
                <ToolCard
                  logo="/src/imports/logo_speechace-1.png"
                  name="Speechace"
                  link="https://speechace.com"
                  isFree={true}
                  description="Analyses your student's spoken English and gives a pronunciation score for every word. Shows exactly which sounds they struggle with."
                />
                <ToolCard
                  logo="/src/imports/logo_curipod.jpeg"
                  name="Curipod"
                  link="https://curipod.com"
                  isFree={true}
                  description="AI interactive lessons with built-in student response tracking. See which questions students got wrong and why."
                />
                <ToolCard
                  logo="/src/imports/logo_chatgpt-1.png"
                  name="ChatGPT"
                  link="https://chatgpt.com"
                  isFree={true}
                  description="Describe your student — age, level, struggles, goals — and ask ChatGPT what to focus on. It gives you a diagnosis and a plan."
                />
              </div>
            </div>
          )}

          {/* Slide 8: Suno Deep Dive */}
          {currentSlide === 7 && (
            <div>
              <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6667AB] mb-3">Tool deep dive — Suno AI</div>
              <div className="font-['Playfair_Display',serif] text-[clamp(16px,2.5vw,22px)] text-white leading-[1.4] my-3">
                Turn your student's voice<br />into an <em className="text-[#96D74C] italic">English lesson.</em>
              </div>
              <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3">
                A powerful technique for students who love to sing — even if they don't know the English words yet.
              </div>
              <div className="flex flex-col gap-2 my-3">
                {[
                  { num: 1, text: 'Ask your student to <strong>sing something they love</strong> in their language and send you a voice note.' },
                  { num: 2, text: 'Use <strong>ChatGPT to translate</strong> the meaning into English — keeping the emotion and rhythm.' },
                  { num: 3, text: 'Paste the English lyrics into <strong>Suno AI</strong> to generate a full song in English with music.' },
                  { num: 4, text: 'Play it in the next class. <strong>They hear their own song — in English.</strong> Engagement goes through the roof.' },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-3 bg-white/[0.04] border border-white/[0.08] rounded-[11px] p-3">
                    <div className="min-w-6 h-6 rounded-full bg-[#96D74C] text-[#421869] flex items-center justify-center text-[11px] font-medium flex-shrink-0">
                      {step.num}
                    </div>
                    <div className="text-[13px] text-white/80 leading-[1.6] font-light" dangerouslySetInnerHTML={{ __html: step.text }} ></div>
                  </div>
                ))}
              </div>
              <div className="bg-[#6667AB]/[0.12] border border-[#6667AB]/30 rounded-xl px-4.5 py-3.5 my-3">
                <p className="text-[13px] text-white/80 leading-[1.7] font-light m-0">
                  Students connect emotionally to something they already love. <strong className="text-white font-medium">Emotional connection accelerates language learning faster than any drill.</strong>
                </p>
              </div>
            </div>
          )}

          {/* Slide 9: Free vs Paid */}
          {currentSlide === 8 && (
            <div>
              <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6667AB] mb-3">Free vs Paid — What you need to know</div>
              <div className="font-['Playfair_Display',serif] text-[clamp(16px,2.5vw,22px)] text-white leading-[1.4] my-3">
                You do not need to<br /><em className="text-[#96D74C] italic">pay for everything.</em>
              </div>
              <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3">
                Most tools in this module have generous free tiers more than enough when you are starting out.
              </div>
              <div className="bg-[#96D74C]/[0.08] border border-[#96D74C]/20 rounded-xl px-4.5 py-3.5 my-3">
                <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#96D74C] mb-2">The rule</div>
                <p className="text-[13px] text-white/80 leading-[1.7] font-light m-0">
                  Use the free version first. If a tool saves you <strong className="text-white font-medium">two or more hours per week</strong> consistently, it is worth paying for. Time is the one thing you cannot get back.
                </p>
              </div>
              <div className="text-[15px] leading-[1.8] text-white/70 font-light mt-3 mb-2">Tools you can use entirely for free:</div>
              <div className="flex flex-wrap gap-2 my-2.5">
                {['ChatGPT (basic)', 'Canva (basic)', 'Kahoot!', 'Wordwall (basic)', 'Quizlet (basic)', 'Anki', 'MagicSchool AI', 'Twee (basic)', 'Suno (basic)', 'Diffit (basic)'].map((tool) => (
                  <span key={tool} className="bg-[#96D74C]/[0.12] border border-[#96D74C]/30 rounded-full px-3 py-1 text-xs text-[#96D74C] font-light">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Slide 10: Integration */}
          {currentSlide === 9 && (
            <div>
              <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6667AB] mb-3">How to integrate AI into your classes</div>
              <div className="font-['Playfair_Display',serif] text-[clamp(16px,2.5vw,22px)] text-white leading-[1.4] my-3">
                Start with <em className="text-[#96D74C] italic">one tool.</em><br />Master it. Then add another.
              </div>
              <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3">
                The biggest mistake teachers make with AI is trying all tools at once. Pick one per week and learn it properly.
              </div>
              <div className="flex flex-col gap-2 my-3">
                {[
                  { num: 1, text: '<strong>Week 1:</strong> Use ChatGPT to plan your next three lessons. Notice how much time you save.' },
                  { num: 2, text: '<strong>Week 2:</strong> Add Wordwall or Kahoot! to one class. Watch what happens to your student\'s energy.' },
                  { num: 3, text: '<strong>Week 3:</strong> Use Quizlet to build a vocabulary set for your student to practice between sessions.' },
                  { num: 4, text: '<strong>Week 4:</strong> Try Suno to generate a vocabulary song. Use it as your class warm-up ritual.' },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-3 bg-white/[0.04] border border-white/[0.08] rounded-[11px] p-3">
                    <div className="min-w-6 h-6 rounded-full bg-[#96D74C] text-[#421869] flex items-center justify-center text-[11px] font-medium flex-shrink-0">
                      {step.num}
                    </div>
                    <div className="text-[13px] text-white/80 leading-[1.6] font-light" dangerouslySetInnerHTML={{ __html: step.text }} ></div>
                  </div>
                ))}
              </div>
              <div className="bg-[#6667AB]/[0.12] border border-[#6667AB]/30 rounded-xl px-4.5 py-3.5 my-3">
                <p className="text-[13px] text-white/80 leading-[1.7] font-light m-0">
                  By Week 4, your lessons will feel completely different. <strong className="text-white font-medium">That is the compounding effect of AI.</strong>
                </p>
              </div>
            </div>
          )}

          {/* Slide 11: Closing */}
          {currentSlide === 10 && (
            <div>
              <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6667AB] mb-3">Remember this</div>
              <div className="font-['Playfair_Display',serif] text-[clamp(16px,2.5vw,22px)] text-white leading-[1.4] my-3">
                Technology supports<br />the lesson. <em className="text-[#96D74C] italic">You teach it.</em>
              </div>
              <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3">
                No AI tool can replace your warmth, your ability to read a student, or your instinct to pivot when something is not working. These tools handle the busywork so you can focus on the human connection.
              </div>
              <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3">
                <strong className="text-white font-medium">Use AI to prepare better. Not to be present less.</strong>
              </div>
              <div className="bg-[#96D74C]/[0.08] border border-[#96D74C]/20 rounded-xl px-4.5 py-3.5 my-4">
                <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#96D74C] mb-2">Your challenge this week</div>
                <p className="text-[13px] text-white/80 leading-[1.7] font-light m-0">
                  Pick one tool from this module you have never used before. Use it in your next class or lesson plan. Share your experience in the group — what worked, what surprised you, what you would do differently.
                </p>
              </div>
              <span className="inline-block bg-[#96D74C] text-[#421869] text-[13px] font-medium px-5 py-2 rounded-full mt-3.5">
                Module 3 complete 🦎
              </span>
            </div>
          )}
        </div>
      </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center gap-2 py-2.5 flex-shrink-0">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              index === currentSlide
                ? 'bg-[#96D74C] w-6'
                : 'bg-white/20 w-2 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between px-10 pb-8 pt-2 flex-shrink-0 relative z-10">
        <button
          onClick={goToPrevious}
          disabled={currentSlide === 0}
          className="bg-white/[0.08] border border-white/[0.12] text-white px-6 py-2.5 rounded-full text-sm transition-all hover:bg-white/[0.14] disabled:opacity-20 disabled:cursor-not-allowed font-['DM_Sans',sans-serif] cursor-pointer"
        >
          ← Back
        </button>
        <span className="text-[13px] text-white/35">
          {currentSlide + 1} / {totalSlides}
        </span>
        <button
          onClick={goToNext}
          className="bg-[#96D74C] text-[#421869] px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:bg-[#c0f050] font-['DM_Sans',sans-serif] cursor-pointer"
        >
          {currentSlide === totalSlides - 1 ? '✓ Complete' : 'Next →'}
        </button>
      </div>
    </div>
  );
}
