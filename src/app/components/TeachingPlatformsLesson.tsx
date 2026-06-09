import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { logo } from '../assets';

interface TeachingPlatformsLessonProps {
  onComplete: () => void;
}

export function TeachingPlatformsLesson({ onComplete }: TeachingPlatformsLessonProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSlides = 8;

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide || index < 0 || index >= totalSlides) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 450);
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const progress = ((currentSlide + 1) / totalSlides) * 100;

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
        <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-[#96D74C] rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* Slides Container */}
      <div className="flex-1 overflow-y-auto">
        <div className="min-h-full flex items-center justify-center p-7">
          <div className="w-full max-w-[680px]">

            {/* Slide 1: Title */}
            {currentSlide === 0 && (
              <div className="animate-fadeIn">
                <h1 className="font-serif text-[42px] font-bold leading-tight mb-3.5">
                  Your teaching<br /><em className="text-[#F5D5E0]">platforms.</em>
                </h1>
                <p className="text-[15px] leading-relaxed text-white/72 font-light mb-3.5">
                  Your employer will put you on a platform. Your job is to already know how to use it before you show up. This lesson covers the three platforms you will encounter most as an ESL teacher — ClassIn, Zoom, and VoovMeetings.
                </p>
                <p className="text-[15px] leading-relaxed text-white/72 font-light mb-3.5">
                  Each platform has its own interface, its own tools, and its own quirks. We cover what you need to know — and link you to the best YouTube tutorials so you can practice on your own time.
                </p>
                <blockquote className="text-sm text-white/50 font-light leading-relaxed italic border-l-2 border-[#96D74C] pl-3.5 mt-4">
                  "The teacher who knows their tools walks into every class with confidence. The teacher who doesn't is spending half their mental energy on the wrong thing."
                </blockquote>
              </div>
            )}

            {/* Slide 2: ClassIn Intro */}
            {currentSlide === 1 && (
              <div className="animate-fadeIn">
                <div className="text-[11px] font-medium tracking-widest uppercase text-[#6667AB] mb-3.5">Platform 1 of 3</div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center flex-shrink-0">
                    <img src="/images/Classin.jpg" alt="ClassIn" className="w-full h-full object-contain rounded-xl" />
                  </div>
                  <div>
                    <h2 className="font-serif text-[34px] font-bold leading-tight">
                      Class<em className="text-[#F5D5E0]">In</em>
                    </h2>
                    <p className="text-xs text-white/45 font-light mt-1">The most widely used platform by Chinese ESL employers</p>
                  </div>
                </div>
                <p className="text-[15px] leading-relaxed text-white/72 font-light mb-3.5">
                  ClassIn is built specifically for education. Unlike Zoom or VoovMeetings which are general video call tools, ClassIn was designed from the ground up for teachers and students. It is the platform you will use most with Chinese employers.
                </p>
                <p className="text-[15px] leading-relaxed text-white/72 font-light mb-3.5">
                  <strong className="text-white font-medium">Why employers love it:</strong> it replicates a real classroom experience — complete with a virtual whiteboard, student management tools, homework assignment, and progress tracking all in one place.
                </p>
                <div className="bg-[#96D74C]/8 border border-[#96D74C]/20 rounded-xl px-4 py-3.5 my-3.5">
                  <p className="text-[13px] text-white/80 leading-relaxed font-light">
                    <strong className="text-white font-medium">Free vs Paid — what you need to know:</strong><br /><br />
                    ClassIn has a free version and a paid version. The free version is limited but enough for you to learn the platform and practice all the tools before you have an employer.<br /><br />
                    <strong className="text-white font-medium">Create your free account now and start practising.</strong> Once you land an employer, they pay for the premium version and simply share the login details with you. You schedule and run all your classes from their account. You do not pay for anything.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 my-3">
                  <span className="bg-[#96D74C]/12 border border-[#96D74C]/30 text-[#96D74C] rounded-full px-3 py-1 text-xs font-light">Virtual whiteboard</span>
                  <span className="bg-[#96D74C]/12 border border-[#96D74C]/30 text-[#96D74C] rounded-full px-3 py-1 text-xs font-light">Interactive tools</span>
                  <span className="bg-[#96D74C]/12 border border-[#96D74C]/30 text-[#96D74C] rounded-full px-3 py-1 text-xs font-light">Screen sharing</span>
                  <span className="bg-[#96D74C]/12 border border-[#96D74C]/30 text-[#96D74C] rounded-full px-3 py-1 text-xs font-light">Student management</span>
                  <span className="bg-[#96D74C]/12 border border-[#96D74C]/30 text-[#96D74C] rounded-full px-3 py-1 text-xs font-light">Homework assignment</span>
                  <span className="bg-[#96D74C]/12 border border-[#96D74C]/30 text-[#96D74C] rounded-full px-3 py-1 text-xs font-light">Class recording</span>
                </div>
              </div>
            )}

            {/* Slide 3: ClassIn How to Use */}
            {currentSlide === 2 && (
              <div className="animate-fadeIn">
                <div className="text-[11px] font-medium tracking-widest uppercase text-[#6667AB] mb-3.5">Platform 1 — ClassIn · How to use it</div>
                <div className="flex flex-col gap-2 my-3.5">
                  <div className="flex items-start gap-2.5 text-sm text-white/80 font-light leading-relaxed">
                    <span className="text-[#96D74C] text-base flex-shrink-0 leading-tight mt-0.5">→</span>
                    <span><strong className="text-white font-medium">Before getting an employer:</strong> Register for free at classin.com. Download the desktop app. Create a test classroom, add a contact as a student, and run a full practice session. Get comfortable before it counts.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-white/80 font-light leading-relaxed">
                    <span className="text-[#96D74C] text-base flex-shrink-0 leading-tight mt-0.5">→</span>
                    <span><strong className="text-white font-medium">Once you have an employer:</strong> They share a username and password with you. Log in, access the class schedule, and teach from their account. No payment required from you.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-white/80 font-light leading-relaxed">
                    <span className="text-[#96D74C] text-base flex-shrink-0 leading-tight mt-0.5">→</span>
                    <span><strong className="text-white font-medium">Creating a class:</strong> Click "Create Classroom," add the class name and schedule. ClassIn automatically converts your time to Beijing time for your students.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-white/80 font-light leading-relaxed">
                    <span className="text-[#96D74C] text-base flex-shrink-0 leading-tight mt-0.5">→</span>
                    <span><strong className="text-white font-medium">In the classroom:</strong> Use the whiteboard, authorize students to use tools, and use the browser to play YouTube videos directly in class.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-white/80 font-light leading-relaxed">
                    <span className="text-[#96D74C] text-base flex-shrink-0 leading-tight mt-0.5">→</span>
                    <span><strong className="text-white font-medium">Onstage vs Downstage:</strong> Put students onstage when they are participating, downstage when listening. This keeps your classroom focused and manageable.</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-[11px] font-medium tracking-wider uppercase text-[#6667AB] mb-2.5">Watch these tutorials</div>
                  <div className="flex flex-col gap-2">
                    <a href="https://www.youtube.com/watch?v=TF0EF75Db2s" target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 hover:border-red-500/40 hover:bg-red-500/6 transition-colors">
                      <div className="w-8 h-8 bg-[#ff0000] rounded-lg flex items-center justify-center flex-shrink-0 text-sm">▶</div>
                      <div className="flex-1">
                        <div className="text-[13px] font-medium text-white leading-snug">ClassIn 6.0 — Complete Tutorial for Teachers</div>
                        <div className="text-[11px] text-white/40 mt-0.5">Full step-by-step walkthrough · YouTube</div>
                      </div>
                      <span className="text-sm text-white/30">→</span>
                    </a>
                    <a href="https://www.youtube.com/watch?v=FP3GG6ZAJCc" target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 hover:border-red-500/40 hover:bg-red-500/6 transition-colors">
                      <div className="w-8 h-8 bg-[#ff0000] rounded-lg flex items-center justify-center flex-shrink-0 text-sm">▶</div>
                      <div className="flex-1">
                        <div className="text-[13px] font-medium text-white leading-snug">Teaching English Online Using ClassIn</div>
                        <div className="text-[11px] text-white/40 mt-0.5">ESL-specific ClassIn tutorial · YouTube</div>
                      </div>
                      <span className="text-sm text-white/30">→</span>
                    </a>
                    <a href="https://www.youtube.com/watch?v=t2smgu_7SI4" target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 hover:border-red-500/40 hover:bg-red-500/6 transition-colors">
                      <div className="w-8 h-8 bg-[#ff0000] rounded-lg flex items-center justify-center flex-shrink-0 text-sm">▶</div>
                      <div className="flex-1">
                        <div className="text-[13px] font-medium text-white leading-snug">ClassIn Tutorial — Classroom Management Tools</div>
                        <div className="text-[11px] text-white/40 mt-0.5">Interactive tools deep dive · YouTube</div>
                      </div>
                      <span className="text-sm text-white/30">→</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 4: Zoom Intro */}
            {currentSlide === 3 && (
              <div className="animate-fadeIn">
                <div className="text-[11px] font-medium tracking-widest uppercase text-[#6667AB] mb-3.5">Platform 2 of 3</div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center flex-shrink-0">
                    <img src="/images/Zoom.jpeg" alt="Zoom" className="w-full h-full object-contain rounded-xl" />
                  </div>
                  <div>
                    <h2 className="font-serif text-[34px] font-bold leading-tight">
                      <em className="text-[#F5D5E0]">Zoom</em>
                    </h2>
                    <p className="text-xs text-white/45 font-light mt-1">The universal platform — widely recognised across all employers</p>
                  </div>
                </div>
                <p className="text-[15px] leading-relaxed text-white/72 font-light mb-3.5">
                  Zoom needs no introduction. It is the most recognised video platform in the world, and many ESL employers — especially those working with adult professionals or international students — use it as their default classroom.
                </p>
                <p className="text-[15px] leading-relaxed text-white/72 font-light mb-3.5">
                  <strong className="text-white font-medium">You almost certainly already know Zoom.</strong> But knowing how to use it as a teacher is different from knowing how to use it for a meeting. There are specific features — breakout rooms, annotation, polls, virtual backgrounds — that transform Zoom into a proper teaching environment.
                </p>
                <div className="flex flex-wrap gap-2 my-3">
                  <span className="bg-[#96D74C]/12 border border-[#96D74C]/30 text-[#96D74C] rounded-full px-3 py-1 text-xs font-light">Screen sharing</span>
                  <span className="bg-[#96D74C]/12 border border-[#96D74C]/30 text-[#96D74C] rounded-full px-3 py-1 text-xs font-light">Breakout rooms</span>
                  <span className="bg-[#96D74C]/12 border border-[#96D74C]/30 text-[#96D74C] rounded-full px-3 py-1 text-xs font-light">Annotation tools</span>
                  <span className="bg-[#96D74C]/12 border border-[#96D74C]/30 text-[#96D74C] rounded-full px-3 py-1 text-xs font-light">Polls</span>
                  <span className="bg-[#96D74C]/12 border border-[#96D74C]/30 text-[#96D74C] rounded-full px-3 py-1 text-xs font-light">Virtual backgrounds</span>
                  <span className="bg-[#96D74C]/12 border border-[#96D74C]/30 text-[#96D74C] rounded-full px-3 py-1 text-xs font-light">Class recording</span>
                </div>
              </div>
            )}

            {/* Slide 5: Zoom How to Use */}
            {currentSlide === 4 && (
              <div className="animate-fadeIn">
                <div className="text-[11px] font-medium tracking-widest uppercase text-[#6667AB] mb-3.5">Platform 2 — Zoom · How to use it for teaching</div>
                <div className="flex flex-col gap-2 my-3.5">
                  <div className="flex items-start gap-2.5 text-sm text-white/80 font-light leading-relaxed">
                    <span className="text-[#96D74C] text-base flex-shrink-0 leading-tight mt-0.5">→</span>
                    <span><strong className="text-white font-medium">Set a professional background:</strong> A clean, blurred, or virtual background keeps the focus on you. Students should not be looking at your room — they should be looking at your face.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-white/80 font-light leading-relaxed">
                    <span className="text-[#96D74C] text-base flex-shrink-0 leading-tight mt-0.5">→</span>
                    <span><strong className="text-white font-medium">Use screen share to show materials:</strong> Share your screen to display flashcards, videos, worksheets, or Canva slides mid-class without switching windows.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-white/80 font-light leading-relaxed">
                    <span className="text-[#96D74C] text-base flex-shrink-0 leading-tight mt-0.5">→</span>
                    <span><strong className="text-white font-medium">Use annotation tools:</strong> Both you and your student can draw and write directly on the shared screen. Use this for vocabulary games, fill-in-the-gap exercises, or diagram labelling.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-white/80 font-light leading-relaxed">
                    <span className="text-[#96D74C] text-base flex-shrink-0 leading-tight mt-0.5">→</span>
                    <span><strong className="text-white font-medium">Record your classes:</strong> Always record with the student's permission. Recordings help students review lessons and help you improve your teaching.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-white/80 font-light leading-relaxed">
                    <span className="text-[#96D74C] text-base flex-shrink-0 leading-tight mt-0.5">→</span>
                    <span><strong className="text-white font-medium">Manage your audio:</strong> Mute yourself when the student is speaking. Background noise from your side is distracting — your noise-cancelling headset solves most of this.</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-[11px] font-medium tracking-wider uppercase text-[#6667AB] mb-2.5">Watch these tutorials</div>
                  <div className="flex flex-col gap-2">
                    <a href="https://www.youtube.com/watch?v=SqI3dRRu0Zc" target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 hover:border-red-500/40 hover:bg-red-500/6 transition-colors">
                      <div className="w-8 h-8 bg-[#ff0000] rounded-lg flex items-center justify-center flex-shrink-0 text-sm">▶</div>
                      <div className="flex-1">
                        <div className="text-[13px] font-medium text-white leading-snug">How I Teach ESL Lessons on Zoom</div>
                        <div className="text-[11px] text-white/40 mt-0.5">ESL-specific Zoom teaching tutorial · YouTube</div>
                      </div>
                      <span className="text-sm text-white/30">→</span>
                    </a>
                    <a href="https://www.youtube.com/watch?v=kBrTtSEP8go" target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 hover:border-red-500/40 hover:bg-red-500/6 transition-colors">
                      <div className="w-8 h-8 bg-[#ff0000] rounded-lg flex items-center justify-center flex-shrink-0 text-sm">▶</div>
                      <div className="flex-1">
                        <div className="text-[13px] font-medium text-white leading-snug">How to Teach Online with Zoom — Tips and Ideas</div>
                        <div className="text-[11px] text-white/40 mt-0.5">Practical tips for online English teachers · YouTube</div>
                      </div>
                      <span className="text-sm text-white/30">→</span>
                    </a>
                    <a href="https://www.youtube.com/watch?v=Z2UoOTg8J2I" target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 hover:border-red-500/40 hover:bg-red-500/6 transition-colors">
                      <div className="w-8 h-8 bg-[#ff0000] rounded-lg flex items-center justify-center flex-shrink-0 text-sm">▶</div>
                      <div className="flex-1">
                        <div className="text-[13px] font-medium text-white leading-snug">How to Teach Online with Zoom — A Guide for Teachers</div>
                        <div className="text-[11px] text-white/40 mt-0.5">Step-by-step teacher guide · YouTube</div>
                      </div>
                      <span className="text-sm text-white/30">→</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 6: VoovMeeting Intro */}
            {currentSlide === 5 && (
              <div className="animate-fadeIn">
                <div className="text-[11px] font-medium tracking-widest uppercase text-[#6667AB] mb-3.5">Platform 3 of 3</div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center flex-shrink-0">
                    <img src="/images/Voov.jpeg" alt="VoovMeeting" className="w-full h-full object-contain rounded-xl" />
                  </div>
                  <div>
                    <h2 className="font-serif text-[34px] font-bold leading-tight">
                      VooV<em className="text-[#F5D5E0]">Meeting</em>
                    </h2>
                    <p className="text-xs text-white/45 font-light mt-1">Tencent's platform — popular with corporate and institutional Chinese employers</p>
                  </div>
                </div>
                <p className="text-[15px] leading-relaxed text-white/72 font-light mb-3.5">
                  VoovMeeting — also known as Tencent Meeting — is built by Tencent, one of China's largest technology companies. It is widely used by Chinese companies, universities, and institutions for their online classes and meetings.
                </p>
                <p className="text-[15px] leading-relaxed text-white/72 font-light mb-3.5">
                  <strong className="text-white font-medium">If your employer is connected to the corporate world or a Chinese institution, this is likely what they will put you on.</strong> It is clean, stable, and completely free. Think of it as China's version of Zoom.
                </p>
                <div className="flex flex-wrap gap-2 my-3">
                  <span className="bg-[#96D74C]/12 border border-[#96D74C]/30 text-[#96D74C] rounded-full px-3 py-1 text-xs font-light">Video conferencing</span>
                  <span className="bg-[#96D74C]/12 border border-[#96D74C]/30 text-[#96D74C] rounded-full px-3 py-1 text-xs font-light">Screen sharing</span>
                  <span className="bg-[#96D74C]/12 border border-[#96D74C]/30 text-[#96D74C] rounded-full px-3 py-1 text-xs font-light">Chat</span>
                  <span className="bg-[#96D74C]/12 border border-[#96D74C]/30 text-[#96D74C] rounded-full px-3 py-1 text-xs font-light">Recording</span>
                  <span className="bg-[#96D74C]/12 border border-[#96D74C]/30 text-[#96D74C] rounded-full px-3 py-1 text-xs font-light">Whiteboard</span>
                  <span className="bg-[#96D74C]/12 border border-[#96D74C]/30 text-[#96D74C] rounded-full px-3 py-1 text-xs font-light">Free plan</span>
                </div>
              </div>
            )}

            {/* Slide 7: VoovMeeting How to Use */}
            {currentSlide === 6 && (
              <div className="animate-fadeIn">
                <div className="text-[11px] font-medium tracking-widest uppercase text-[#6667AB] mb-3.5">Platform 3 — VoovMeeting · How to use it</div>
                <div className="flex flex-col gap-2 my-3.5">
                  <div className="flex items-start gap-2.5 text-sm text-white/80 font-light leading-relaxed">
                    <span className="text-[#96D74C] text-base flex-shrink-0 leading-tight mt-0.5">→</span>
                    <span><strong className="text-white font-medium">Download the app:</strong> Go to voovmeeting.com and download the desktop client. It is free and works on Windows and Mac. Students can join from mobile.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-white/80 font-light leading-relaxed">
                    <span className="text-[#96D74C] text-base flex-shrink-0 leading-tight mt-0.5">→</span>
                    <span><strong className="text-white font-medium">Set up your Personal Meeting Room:</strong> VoovMeeting gives you a permanent meeting room link. Share this with your student once and they can join every class with the same link.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-white/80 font-light leading-relaxed">
                    <span className="text-[#96D74C] text-base flex-shrink-0 leading-tight mt-0.5">→</span>
                    <span><strong className="text-white font-medium">Enable the waiting room:</strong> Especially important when teaching young learners. This means you control exactly when your student enters the class.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-white/80 font-light leading-relaxed">
                    <span className="text-[#96D74C] text-base flex-shrink-0 leading-tight mt-0.5">→</span>
                    <span><strong className="text-white font-medium">Screen share and whiteboard:</strong> Work exactly like Zoom. Share your screen to show materials. Use the whiteboard for interactive exercises.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-white/80 font-light leading-relaxed">
                    <span className="text-[#96D74C] text-base flex-shrink-0 leading-tight mt-0.5">→</span>
                    <span><strong className="text-white font-medium">Recording:</strong> VoovMeeting allows you to record sessions locally. Always ask for permission first — especially with child learners.</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-[11px] font-medium tracking-wider uppercase text-[#6667AB] mb-2.5">Watch these tutorials</div>
                  <div className="flex flex-col gap-2">
                    <a href="https://www.youtube.com/watch?v=q9-0JAXvwJ0" target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 hover:border-red-500/40 hover:bg-red-500/6 transition-colors">
                      <div className="w-8 h-8 bg-[#ff0000] rounded-lg flex items-center justify-center flex-shrink-0 text-sm">▶</div>
                      <div className="flex-1">
                        <div className="text-[13px] font-medium text-white leading-snug">How to Use VOOV for Online Teaching — Full Beginner Guide</div>
                        <div className="text-[11px] text-white/40 mt-0.5">Complete setup and teaching walkthrough · YouTube</div>
                      </div>
                      <span className="text-sm text-white/30">→</span>
                    </a>
                    <a href="https://www.youtube.com/watch?v=kHVTauLkyss" target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 hover:border-red-500/40 hover:bg-red-500/6 transition-colors">
                      <div className="w-8 h-8 bg-[#ff0000] rounded-lg flex items-center justify-center flex-shrink-0 text-sm">▶</div>
                      <div className="flex-1">
                        <div className="text-[13px] font-medium text-white leading-snug">VooV (Tencent Meeting) Tutorial for ESL Teachers</div>
                        <div className="text-[11px] text-white/40 mt-0.5">ESL-specific guide for teaching in China · YouTube</div>
                      </div>
                      <span className="text-sm text-white/30">→</span>
                    </a>
                    <a href="https://www.youtube.com/watch?v=wZKl1-87s9w" target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 hover:border-red-500/40 hover:bg-red-500/6 transition-colors">
                      <div className="w-8 h-8 bg-[#ff0000] rounded-lg flex items-center justify-center flex-shrink-0 text-sm">▶</div>
                      <div className="flex-1">
                        <div className="text-[13px] font-medium text-white leading-snug">ClassIn + VooV Meeting: How does it work together?</div>
                        <div className="text-[11px] text-white/40 mt-0.5">Using both platforms as an ESL teacher · YouTube</div>
                      </div>
                      <span className="text-sm text-white/30">→</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 8: Closing */}
            {currentSlide === 7 && (
              <div className="animate-fadeIn">
                <div className="text-[11px] font-medium tracking-widest uppercase text-[#6667AB] mb-3.5">Before you move on</div>
                <h2 className="font-serif text-[26px] leading-snug mb-3.5">
                  Install all three.<br /><em className="text-[#96D74C]">Practice before you need them.</em>
                </h2>
                <p className="text-[15px] leading-relaxed text-white/72 font-light mb-3.5">
                  Do not wait until an employer asks you to use a platform before you learn it. Install all three now, create an account on each, and run a test session with a friend or family member.
                </p>
                <div className="bg-[#96D74C]/8 border border-[#96D74C]/20 rounded-xl px-4 py-3.5 my-3.5">
                  <p className="text-[13px] text-white/80 leading-relaxed font-light">
                    <strong className="text-white font-medium">Your assignment:</strong> Watch at least one tutorial video per platform this week. Then create a test class on ClassIn, schedule a mock meeting on Zoom, and set up your Personal Meeting Room on VoovMeeting. Screenshots as proof — bring them to your live session.
                  </p>
                </div>
                <p className="text-[15px] leading-relaxed text-white/72 font-light mt-3">
                  Remember: different employers use different platforms. The more you know, the more deployable you are — and the more confident you will feel on your very first class.
                </p>
                <button
                  onClick={onComplete}
                  className="inline-block bg-[#96D74C] text-[#421869] text-[13px] font-medium px-5 py-2 rounded-full mt-4 hover:bg-[#c0f050] transition-colors cursor-pointer"
                >
                  Lesson complete 🦎
                </button>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex items-center justify-center gap-2 py-3 flex-shrink-0">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              index === currentSlide
                ? 'w-6 bg-[#96D74C]'
                : 'w-2 bg-white/20 hover:bg-white/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between px-10 pb-5 flex-shrink-0">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-white/8 border border-white/12 text-white px-6 py-2.5 rounded-full text-sm hover:bg-white/14 transition-colors disabled:opacity-20 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <ChevronLeft size={16} />
          Back
        </button>
        <span className="text-[13px] text-white/35">{currentSlide + 1} / {totalSlides}</span>
        <button
          onClick={currentSlide === totalSlides - 1 ? onComplete : nextSlide}
          className="bg-[#96D74C] border border-[#96D74C] text-[#421869] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#c0f050] transition-colors flex items-center gap-2"
        >
          {currentSlide === totalSlides - 1 ? '✓ Complete' : 'Next'}
          {currentSlide !== totalSlides - 1 && <ChevronRight size={16} />}
        </button>
      </div>
    </div>
  );
}
