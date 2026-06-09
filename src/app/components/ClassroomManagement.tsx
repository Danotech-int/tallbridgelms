import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { logo } from '../assets';

interface ClassroomManagementProps {
  onComplete: () => void;
}

export function ClassroomManagement({ onComplete }: ClassroomManagementProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10;

  const slides = [
    {
      id: 0,
      type: 'center',
      content: (
        <div className="max-w-[600px] w-full">
          <div className="font-['Playfair_Display',serif] text-[clamp(24px,4vw,40px)] font-bold text-white leading-[1.2] mb-3.5">
            Classroom Management<br />in <em className="text-[#F5D5E0] italic">Online Classes.</em>
          </div>
          <div className="text-[15px] text-white/50 font-light leading-[1.7] italic border-l-2 border-[#96D74C] pl-4 mt-4.5">
            "If you cannot hold attention, you cannot hold a classroom."
          </div>
        </div>
      ),
    },
    {
      id: 1,
      type: 'split',
      image: '/src/imports/cm_slide2-1.png',
      content: (
        <div>
          <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6667AB] mb-3.5">Slide 1 — Online classrooms are different</div>
          <div className="font-['Playfair_Display',serif] text-[clamp(16px,2.5vw,22px)] text-white leading-[1.4] my-3.5">
            In a physical classroom, you can walk around, make eye contact, control the environment.
          </div>
          <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3.5">
            <em className="text-[#F5D5E0] not-italic">Online?</em> Your student is one distraction away from mentally leaving class.
          </div>
          <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3.5">You are competing with:</div>
          <div className="flex flex-wrap gap-2 my-3">
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">TikTok</span>
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">games</span>
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">boredom</span>
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">siblings</span>
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">bad internet</span>
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">short attention spans</span>
          </div>
          <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3.5 mt-2.5">
            <strong className="text-white font-medium">Online teaching requires a different kind of classroom management.</strong>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      type: 'split-reverse',
      image: '/src/imports/cm_slide3-1.png',
      content: (
        <div>
          <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6667AB] mb-3.5">Slide 2 — The biggest mistake new teachers make</div>
          <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3.5">Most teachers think:</div>
          <div className="font-['Playfair_Display',serif] text-[clamp(16px,2.5vw,22px)] text-white leading-[1.4] my-3.5">
            "If I explain well enough, students will focus."
          </div>
          <div className="text-[#96D74C] text-[17px] font-medium my-1.5 mb-3.5">Wrong.</div>
          <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3.5">
            <strong className="text-white font-medium">Online attention must be designed.</strong>
          </div>
          <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3.5">Great teachers manage:</div>
          <div className="flex flex-wrap gap-2 my-3">
            <span className="bg-[#96D74C]/[0.12] border border-[#96D74C]/30 rounded-full px-3.5 py-1.5 text-[13px] text-[#96D74C] font-light">energy</span>
            <span className="bg-[#96D74C]/[0.12] border border-[#96D74C]/30 rounded-full px-3.5 py-1.5 text-[13px] text-[#96D74C] font-light">pacing</span>
            <span className="bg-[#96D74C]/[0.12] border border-[#96D74C]/30 rounded-full px-3.5 py-1.5 text-[13px] text-[#96D74C] font-light">curiosity</span>
            <span className="bg-[#96D74C]/[0.12] border border-[#96D74C]/30 rounded-full px-3.5 py-1.5 text-[13px] text-[#96D74C] font-light">interaction</span>
            <span className="bg-[#96D74C]/[0.12] border border-[#96D74C]/30 rounded-full px-3.5 py-1.5 text-[13px] text-[#96D74C] font-light">emotional connection</span>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      type: 'split',
      image: '/src/imports/cm_slide4-1.png',
      content: (
        <div>
          <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6667AB] mb-3.5">Slide 3 — Engagement comes before learning</div>
          <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3.5">
            If a student is bored, anxious, distracted, overwhelmed, or emotionally disconnected —
          </div>
          <div className="font-['Playfair_Display',serif] text-[clamp(16px,2.5vw,22px)] text-white leading-[1.4] my-3.5">
            <em className="text-[#96D74C] italic">learning drops immediately.</em>
          </div>
          <div className="flex flex-col gap-2 my-3">
            <div className="flex items-start gap-2.5 text-[14px] text-white/80 font-light leading-[1.5]">
              <span className="text-[#96D74C] text-[16px] flex-shrink-0 leading-[1.3]">→</span>
              <span>ask questions often</span>
            </div>
            <div className="flex items-start gap-2.5 text-[14px] text-white/80 font-light leading-[1.5]">
              <span className="text-[#96D74C] text-[16px] flex-shrink-0 leading-[1.3]">→</span>
              <span>use humor</span>
            </div>
            <div className="flex items-start gap-2.5 text-[14px] text-white/80 font-light leading-[1.5]">
              <span className="text-[#96D74C] text-[16px] flex-shrink-0 leading-[1.3]">→</span>
              <span>change activities</span>
            </div>
            <div className="flex items-start gap-2.5 text-[14px] text-white/80 font-light leading-[1.5]">
              <span className="text-[#96D74C] text-[16px] flex-shrink-0 leading-[1.3]">→</span>
              <span>call students by name</span>
            </div>
            <div className="flex items-start gap-2.5 text-[14px] text-white/80 font-light leading-[1.5]">
              <span className="text-[#96D74C] text-[16px] flex-shrink-0 leading-[1.3]">→</span>
              <span>make students feel <strong className="text-white font-medium">seen</strong></span>
            </div>
          </div>
          <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3.5">
            <strong className="text-white font-medium">Connection first. Learning second.</strong>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      type: 'split-reverse',
      image: '/src/imports/cm_slide5-1.png',
      content: (
        <div>
          <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6667AB] mb-3.5">Slide 4 — What COVID taught teachers</div>
          <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3.5">
            During COVID, many teachers failed online because they tried to copy physical classrooms directly onto Zoom.
          </div>
          <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3.5">The teachers who succeeded became:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3">
            <div>
              <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#6667AB] mb-2">They stopped</div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2.5 text-[14px] text-white/80 font-light leading-[1.5]">
                  <span className="text-[#e74c3c] text-[16px] flex-shrink-0 leading-[1.3]">✗</span>
                  <span>long lectures</span>
                </div>
                <div className="flex items-start gap-2.5 text-[14px] text-white/80 font-light leading-[1.5]">
                  <span className="text-[#e74c3c] text-[16px] flex-shrink-0 leading-[1.3]">✗</span>
                  <span>one-way teaching</span>
                </div>
                <div className="flex items-start gap-2.5 text-[14px] text-white/80 font-light leading-[1.5]">
                  <span className="text-[#e74c3c] text-[16px] flex-shrink-0 leading-[1.3]">✗</span>
                  <span>passive students</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#6667AB] mb-2">They became</div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2.5 text-[14px] text-white/80 font-light leading-[1.5]">
                  <span className="text-[#96D74C] text-[16px] flex-shrink-0 leading-[1.3]">✓</span>
                  <span>more interactive</span>
                </div>
                <div className="flex items-start gap-2.5 text-[14px] text-white/80 font-light leading-[1.5]">
                  <span className="text-[#96D74C] text-[16px] flex-shrink-0 leading-[1.3]">✓</span>
                  <span>more visual</span>
                </div>
                <div className="flex items-start gap-2.5 text-[14px] text-white/80 font-light leading-[1.5]">
                  <span className="text-[#96D74C] text-[16px] flex-shrink-0 leading-[1.3]">✓</span>
                  <span>more human</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3.5">
            <strong className="text-white font-medium">Online teaching rewards engagement — not long lectures.</strong>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      type: 'split',
      image: '/src/imports/cm_slide6-1.png',
      content: (
        <div>
          <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6667AB] mb-3.5">Slide 5 — Create micro-engagement</div>
          <div className="font-['Playfair_Display',serif] text-[clamp(16px,2.5vw,22px)] text-white leading-[1.4] my-3.5">
            Every few minutes,<br /><em className="text-[#96D74C] italic">something should change.</em>
          </div>
          <div className="flex flex-wrap gap-2 my-3">
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">ask a question</span>
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">use a prop</span>
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">share your screen</span>
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">play a quick game</span>
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">change your tone</span>
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">give praise</span>
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">let the student participate</span>
          </div>
          <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3.5 mt-3">
            <strong className="text-white font-medium">Never let three minutes pass without something happening.</strong>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      type: 'split-reverse',
      image: '/src/imports/cm_slide2-1.png',
      content: (
        <div>
          <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6667AB] mb-3.5">Slide 6 & 7 — Read the room. Reset the energy.</div>
          <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3.5">Signs your student is mentally leaving class:</div>
          <div className="flex flex-wrap gap-2 my-3">
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">short answers</span>
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">looking away</span>
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">delayed responses</span>
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">random silence</span>
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">loss of expression</span>
          </div>
          <div className="text-[15px] leading-[1.8] text-white/70 font-light my-3">
            <strong className="text-white font-medium">Do not keep teaching harder. Reset the energy instead.</strong>
          </div>
          <div className="bg-[#96D74C]/10 border border-[#96D74C]/25 rounded-xl px-4.5 py-3.5 my-3">
            <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#96D74C] mb-1.5">Try these resets</div>
            <p className="text-[13px] text-white/80 leading-[1.65] font-light m-0">
              "Quick question!" · "Guess what happens next?" · "Show me something blue!" · "Would you rather…?" · "Can you teach ME this part?"
            </p>
          </div>
          <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3.5">
            Attention returns through <em className="text-[#F5D5E0] not-italic">participation</em>. Not pressure.
          </div>
        </div>
      ),
    },
    {
      id: 7,
      type: 'split',
      image: '/src/imports/cm_slide8-1.png',
      content: (
        <div>
          <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6667AB] mb-3.5">Slide 8 — Classroom management is emotional management</div>
          <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3.5">A distracted child is not always disrespectful. They may be:</div>
          <div className="flex flex-wrap gap-2 my-3">
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">shy</span>
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">nervous</span>
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">tired</span>
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">hungry</span>
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">overstimulated</span>
            <span className="bg-white/[0.06] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[13px] text-white/80 font-light">afraid of making mistakes</span>
          </div>
          <div className="font-['Playfair_Display',serif] text-[clamp(16px,2.5vw,22px)] text-white leading-[1.4] mt-4">
            Strong teachers redirect<br />with <em className="text-[#96D74C] italic">warmth.</em>
          </div>
          <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3.5">
            <strong className="text-white font-medium">Students learn faster where they feel safe.</strong>
          </div>
        </div>
      ),
    },
    {
      id: 8,
      type: 'split-reverse',
      image: '/src/imports/cm_slide9.png',
      content: (
        <div>
          <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6667AB] mb-3.5">Slide 9 — Use visuals + AI tools</div>
          <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3.5">
            <strong className="text-white font-medium">AI tools can help you create interactive lessons faster.</strong>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3">
            <div className="bg-white/[0.05] border border-white/10 rounded-[10px] p-3">
              <div className="text-[13px] font-medium text-[#96D74C] mb-0.5">Kahoot!</div>
              <div className="text-[11px] text-white/35">kahoot.com</div>
            </div>
            <div className="bg-white/[0.05] border border-white/10 rounded-[10px] p-3">
              <div className="text-[13px] font-medium text-[#96D74C] mb-0.5">Quizizz</div>
              <div className="text-[11px] text-white/35">quizizz.com</div>
            </div>
            <div className="bg-white/[0.05] border border-white/10 rounded-[10px] p-3">
              <div className="text-[13px] font-medium text-[#96D74C] mb-0.5">Canva</div>
              <div className="text-[11px] text-white/35">canva.com</div>
            </div>
            <div className="bg-white/[0.05] border border-white/10 rounded-[10px] p-3">
              <div className="text-[13px] font-medium text-[#96D74C] mb-0.5">ChatGPT</div>
              <div className="text-[11px] text-white/35">chatgpt.com</div>
            </div>
            <div className="bg-white/[0.05] border border-white/10 rounded-[10px] p-3">
              <div className="text-[13px] font-medium text-[#96D74C] mb-0.5">Gamma</div>
              <div className="text-[11px] text-white/35">gamma.app</div>
            </div>
            <div className="bg-white/[0.05] border border-white/10 rounded-[10px] p-3">
              <div className="text-[13px] font-medium text-[#96D74C] mb-0.5">Wordwall</div>
              <div className="text-[11px] text-white/35">wordwall.net</div>
            </div>
          </div>
          <div className="text-[13px] text-white/40 mt-2 leading-[1.8] font-light">
            Technology supports the lesson. Human connection teaches the lesson.
          </div>
        </div>
      ),
    },
    {
      id: 9,
      type: 'split',
      image: '/src/imports/cm_slide2-1.png',
      content: (
        <div>
          <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6667AB] mb-3.5">Slide 10 — Final takeaway + challenge</div>
          <div className="text-[15px] leading-[1.8] text-white/70 font-light mb-3.5">
            Real classroom management is not about controlling students. It is about:
          </div>
          <div className="flex flex-col gap-2 my-3">
            <div className="flex items-start gap-2.5 text-[14px] text-white/80 font-light leading-[1.5]">
              <span className="text-[#96D74C] text-[16px] flex-shrink-0 leading-[1.3]">→</span>
              <span>holding attention</span>
            </div>
            <div className="flex items-start gap-2.5 text-[14px] text-white/80 font-light leading-[1.5]">
              <span className="text-[#96D74C] text-[16px] flex-shrink-0 leading-[1.3]">→</span>
              <span>creating safety</span>
            </div>
            <div className="flex items-start gap-2.5 text-[14px] text-white/80 font-light leading-[1.5]">
              <span className="text-[#96D74C] text-[16px] flex-shrink-0 leading-[1.3]">→</span>
              <span>maintaining curiosity</span>
            </div>
            <div className="flex items-start gap-2.5 text-[14px] text-white/80 font-light leading-[1.5]">
              <span className="text-[#96D74C] text-[16px] flex-shrink-0 leading-[1.3]">→</span>
              <span>making learning feel alive</span>
            </div>
          </div>
          <div className="bg-[#96D74C]/10 border border-[#96D74C]/25 rounded-xl px-4.5 py-3.5 mt-3.5">
            <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#96D74C] mb-1.5">Your mini challenge</div>
            <p className="text-[13px] text-white/80 leading-[1.65] font-light m-0">
              Create ONE engagement activity for an online child learner — a game, a visual challenge, a reward system, or a funny classroom question. Share it in the group.
            </p>
          </div>
          <div className="text-[15px] text-white/50 font-light leading-[1.7] italic border-l-2 border-[#96D74C] pl-4 mt-4.5">
            "Online teaching is not about talking longer. It is about keeping people emotionally present long enough to learn."
          </div>
        </div>
      ),
    },
  ];

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

  const currentSlideData = slides[currentSlide];

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
          <span>Classroom Management</span>
        </div>
        <div className="h-[3px] bg-white/10 rounded overflow-hidden">
          <div
            className="h-full bg-[#96D74C] rounded transition-all duration-500"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex-1 overflow-hidden">
        {currentSlideData.type === 'center' ? (
          <div className="w-full h-full overflow-y-auto flex items-center justify-center p-8">
            <div className="w-full max-w-[600px]">
              {currentSlideData.content}
            </div>
          </div>
        ) : (
          <div className={`w-full h-full flex ${currentSlideData.type === 'split-reverse' ? 'flex-row-reverse' : ''}`}>
            <div className="w-[42%] flex-shrink-0 overflow-hidden relative">
              <ImageWithFallback
                src={currentSlideData.image!}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 overflow-y-auto p-8">
              <div className="min-h-full flex flex-col justify-center">
                {currentSlideData.content}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center gap-2 py-3 flex-shrink-0">
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
