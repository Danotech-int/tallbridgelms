import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { logo } from '../assets';

interface ManagingMeBodyLessonProps {
  onComplete: () => void;
}

export function ManagingMeBodyLesson({ onComplete }: ManagingMeBodyLessonProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const scrollTop = target.scrollTop;
      const scrollHeight = target.scrollHeight - target.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    const contentArea = document.querySelector('.managing-body-content');
    if (contentArea) {
      contentArea.addEventListener('scroll', handleScroll);
      return () => contentArea.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="h-full overflow-y-auto managing-body-content bg-[#FAFAF8] relative">
      <img
        src={logo}
        alt="Tall Bridge Institute"
        className="absolute top-4 left-4 w-8 h-8 object-contain z-50"
      />
      {/* Progress Bar */}
      <div className="h-0.5 bg-[#721CB8] sticky top-0 z-40">
        <div className="h-full bg-[#96D74C] transition-all duration-100" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#421869] px-10 py-20 relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-60px] w-[300px] h-[300px] rounded-full bg-[#721CB8] opacity-40"></div>
        <div className="absolute bottom-[-80px] left-[20%] w-[200px] h-[200px] rounded-full bg-[#7B337E] opacity-20"></div>
        <div className="max-w-[720px] mx-auto relative z-10">
          <div className="text-[11px] font-medium tracking-widest uppercase text-[#6667AB] mb-4">Managing Me · Lesson 2 — Reading Material</div>
          <h1 className="font-serif text-[52px] text-white leading-tight mb-5 font-bold">
            Your body is your<br /><em className="italic text-[#F5D5E0]">classroom.</em>
          </h1>
          <p className="text-base text-[#F5D5E0] opacity-80 font-light max-w-[500px] leading-relaxed">
            You cannot show up for your students if you are not showing up for yourself first. This lesson is about keeping your physical self well enough to do this job for the long term.
          </p>
          <div className="inline-flex items-center gap-2 mt-6 text-[13px] text-[#6667AB] bg-[#6667AB]/15 px-3.5 py-1.5 rounded-full">
            <Clock size={14} />
            10 min read
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-[680px] mx-auto px-10 py-16">
        {/*
          READING MATERIAL IMAGES — add wellness/body-care visuals here.
          Suggested placements:
          - After the sleep section: an illustration of a restful sleep environment
          - After the movement section: a simple graphic of desk stretches or yoga poses for remote workers
          - After the nutrition section: an image of balanced meal prep / healthy snacks at a desk
          Use: <img src="/images/wellness-sleep.png" alt="..." className="w-full rounded-xl my-6" />
          or the ImageWithFallback component from ./figma/ImageWithFallback
        */}

        <p className="mb-6 text-[#1a1a2e] font-light leading-relaxed">
          Remote teaching is deceptively physical. You sit for hours. You talk constantly. Your eyes are fixed on a screen. Your back is under sustained pressure. Your wrists, your neck, your shoulders — all holding positions they were not designed to hold for that long.
        </p>

        <p className="mb-6 text-[#1a1a2e] font-light leading-relaxed">
          And because you are at home, there is no natural movement built into your day. No commute. No walking between classrooms. No standing in front of a real class. Just you, your chair, and your screen — for as many hours as you decide to teach.
        </p>

        <p className="mb-6 text-[#1a1a2e] font-light leading-relaxed">
          That is a recipe for slow physical decline if you are not intentional about it. <strong className="font-medium text-[#421869]">This lesson gives you the tools to be intentional.</strong>
        </p>

        {/* Pull Quote */}
        <div className="bg-[#421869] text-white rounded-2xl px-11 py-10 my-12 relative overflow-hidden">
          <div className="absolute top-[-10px] left-5 text-[120px] font-serif text-[#721CB8] leading-none">"</div>
          <p className="font-serif text-[24px] leading-snug text-[#F5D5E0] relative z-10 italic">
            Your body is the instrument you teach with. If you neglect it, your performance suffers — and so do your students.
          </p>
        </div>

        <h2 className="font-serif text-[26px] text-[#421869] mt-12 mb-6 font-bold">What remote teaching does to your body</h2>

        <p className="text-[15px] text-[#5a5a7a] mb-6 font-light leading-relaxed">
          Before we talk about solutions, let's be honest about the problem. These are the physical realities of remote teaching that nobody warns you about:
        </p>

        {/* Warning Box */}
        <div className="bg-[#fff8f0] border border-[#ffcc99] rounded-xl px-7 py-6 my-8">
          <div className="text-[11px] font-medium tracking-wider uppercase text-[#cc6600] mb-2.5">⚠️ The silent costs of sitting all day</div>
          <p className="text-[15px] text-[#1a1a2e] font-light leading-relaxed">
            <strong className="text-[#cc6600] font-medium">Lower back pain</strong> — sustained sitting compresses your lumbar spine. Without core engagement or regular movement, this becomes chronic fast.<br /><br />
            <strong className="text-[#cc6600] font-medium">Eye strain and headaches</strong> — staring at a screen for eight-plus hours causes digital eye strain, blurred vision, and tension headaches that can derail your teaching energy.<br /><br />
            <strong className="text-[#cc6600] font-medium">Weight gain</strong> — not from eating badly, but from simply not moving. Your metabolism slows significantly when you are sedentary for most of the day.<br /><br />
            <strong className="text-[#cc6600] font-medium">Poor posture</strong> — hunched shoulders, forward head position, and a caved chest develop gradually and cause long-term neck and upper back problems.<br /><br />
            <strong className="text-[#cc6600] font-medium">Mental fatigue from physical stagnation</strong> — your brain needs blood flow. When your body is still, your thinking becomes sluggish, your mood dips, and your patience shortens.
          </p>
        </div>

        <hr className="border-none border-t border-[#F5D5E0] my-12" />

        <h2 className="font-serif text-[26px] text-[#421869] mt-12 mb-6 font-bold">Movement — the non-negotiable</h2>

        <p className="text-[15px] text-[#5a5a7a] mb-6 font-light leading-relaxed">
          You do not need a gym membership or a personal trainer. You need intentional, consistent movement built into your teaching day. Here is how to do it without disrupting your schedule.
        </p>

        {/* Tip Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-8">
          <div className="bg-[#fafaf8] border border-[#e0ddd8] rounded-xl p-5">
            <span className="text-4xl block mb-3">🚶</span>
            <div className="text-[15px] font-medium text-[#421869] mb-2">Walk every single day — outside</div>
            <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">
              Thirty minutes minimum. Not a treadmill — outside, in natural light. Walking outdoors lowers cortisol, boosts serotonin, clears your mind, and gives your eyes a break from screens. <strong className="text-[#1a1a2e] font-medium">This is the single most powerful habit for remote workers.</strong> Do it before your first class or between your morning and afternoon sessions.
            </div>
          </div>

          <div className="bg-[#fafaf8] border border-[#e0ddd8] rounded-xl p-5">
            <span className="text-4xl block mb-3">🧘</span>
            <div className="text-[15px] font-medium text-[#421869] mb-2">Stretch between every class</div>
            <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">
              Five minutes between sessions is enough. Neck rolls, shoulder circles, a standing forward fold, a hip flexor stretch. Set a timer on your phone. Make it automatic. <strong className="text-[#1a1a2e] font-medium">Over six months, this is the difference between a healthy back and a painful one.</strong>
            </div>
          </div>

          <div className="bg-[#fafaf8] border border-[#e0ddd8] rounded-xl p-5">
            <span className="text-4xl block mb-3">⏱️</span>
            <div className="text-[15px] font-medium text-[#421869] mb-2">Stand up every 30 minutes</div>
            <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">
              Use a timer. Every thirty minutes — even if just for sixty seconds — stand up, move your legs, shift your weight. This alone significantly reduces the cardiovascular risk associated with prolonged sitting.
            </div>
          </div>

          <div className="bg-[#fafaf8] border border-[#e0ddd8] rounded-xl p-5">
            <span className="text-4xl block mb-3">💪</span>
            <div className="text-[15px] font-medium text-[#421869] mb-2">Strength training twice a week</div>
            <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">
              Bodyweight exercises — squats, lunges, push-ups, planks — done twice a week builds the core and back strength that keeps you pain-free in the chair. You do not need equipment. You need twenty minutes and a floor.
            </div>
          </div>

          <div className="bg-[#fafaf8] border border-[#e0ddd8] rounded-xl p-5">
            <span className="text-4xl block mb-3">🏃</span>
            <div className="text-[15px] font-medium text-[#421869] mb-2">Use breaks for movement, not screens</div>
            <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">
              When you finish a class, the temptation is to check your phone or scroll. Resist it. Your break is movement, not more screen time. Walk to the kitchen. Do ten jumping jacks. Shake out your hands. Your next class will thank you.
            </div>
          </div>

          <div className="bg-[#fafaf8] border border-[#e0ddd8] rounded-xl p-5">
            <span className="text-4xl block mb-3">🌙</span>
            <div className="text-[15px] font-medium text-[#421869] mb-2">Protect your sleep above everything</div>
            <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">
              Many ESL teachers work late into the night for Beijing time zones. Chronic sleep deprivation destroys your immune system, your mood, your patience, and your cognitive function. <strong className="text-[#1a1a2e] font-medium">Eight hours is not a luxury. It is the job.</strong> Protect it fiercely.
            </div>
          </div>
        </div>

        <hr className="border-none border-t border-[#F5D5E0] my-12" />

        <h2 className="font-serif text-[26px] text-[#421869] mt-12 mb-6 font-bold">A simple movement routine for teaching days</h2>

        <p className="text-[15px] text-[#5a5a7a] mb-6 font-light leading-relaxed">
          Here is a practical daily structure that fits around a full teaching schedule without adding pressure:
        </p>

        {/* Routine */}
        <div className="flex flex-col border border-[#e0ddd8] rounded-2xl overflow-hidden my-8">
          <div className="flex items-start gap-4 p-5 border-b border-[#e0ddd8] bg-white">
            <div className="min-w-[70px] text-xs font-medium text-[#96D74C] bg-[#421869] px-2.5 py-1 rounded-full text-center flex-shrink-0 mt-0.5">Morning</div>
            <div className="flex-1">
              <div className="text-[15px] font-medium text-[#421869] mb-1">Before your first class — 10 to 15 minutes</div>
              <div className="text-[13px] text-[#5a5a7a] leading-relaxed font-light">Light stretching or yoga. Focus on your spine, hips, and shoulders. This wakes your body up and prepares you mentally for the day. Do not skip this because you feel fine — do it to stay fine.</div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 border-b border-[#e0ddd8] bg-[#fafaf8]">
            <div className="min-w-[70px] text-xs font-medium text-[#96D74C] bg-[#421869] px-2.5 py-1 rounded-full text-center flex-shrink-0 mt-0.5">Midday</div>
            <div className="flex-1">
              <div className="text-[15px] font-medium text-[#421869] mb-1">Between sessions — 30 minute walk</div>
              <div className="text-[13px] text-[#5a5a7a] leading-relaxed font-light">This is your reset. Step outside, leave your phone in your pocket, and just walk. No podcasts. No music if possible. Let your mind decompress. Return refreshed for the afternoon.</div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 border-b border-[#e0ddd8] bg-white">
            <div className="min-w-[70px] text-xs font-medium text-[#96D74C] bg-[#421869] px-2.5 py-1 rounded-full text-center flex-shrink-0 mt-0.5">Between</div>
            <div className="flex-1">
              <div className="text-[15px] font-medium text-[#421869] mb-1">Between every class — 5 minute stretch</div>
              <div className="text-[13px] text-[#5a5a7a] leading-relaxed font-light">Neck, shoulders, lower back, hip flexors. Use a YouTube stretch video if you need guidance. Set it as a phone alarm so you never skip it because you forgot.</div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 border-b border-[#e0ddd8] bg-[#fafaf8]">
            <div className="min-w-[70px] text-xs font-medium text-[#96D74C] bg-[#421869] px-2.5 py-1 rounded-full text-center flex-shrink-0 mt-0.5">Evening</div>
            <div className="flex-1">
              <div className="text-[15px] font-medium text-[#421869] mb-1">After your last class — 20 minutes strength or cardio</div>
              <div className="text-[13px] text-[#5a5a7a] leading-relaxed font-light">Bodyweight circuit, a run, a dance class, whatever you enjoy. This marks the end of your work day physically — transitioning your body out of teaching mode and into recovery mode.</div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-white">
            <div className="min-w-[70px] text-xs font-medium text-[#96D74C] bg-[#421869] px-2.5 py-1 rounded-full text-center flex-shrink-0 mt-0.5">Night</div>
            <div className="flex-1">
              <div className="text-[15px] font-medium text-[#421869] mb-1">Before bed — no screens, wind down</div>
              <div className="text-[13px] text-[#5a5a7a] leading-relaxed font-light">Screen light suppresses melatonin and delays sleep. Thirty minutes before bed: dim the lights, put the phone down, read a book or do gentle breathing. Your sleep quality will improve within a week.</div>
            </div>
          </div>
        </div>

        <div className="bg-[#f5f5f0] border border-[#e0ddd8] rounded-2xl px-8 py-7 my-12">
          <p className="text-[15px] text-[#5a5a7a] leading-relaxed">
            Your assignment this week: <em className="text-[#421869] not-italic font-medium">Pick one habit from this lesson that you do not currently do — and do it every day for seven days.</em> Just one. Movement, food, workspace, or sleep. Small and consistent beats ambitious and abandoned every time.
          </p>
        </div>

        {/* Complete Button */}
        <div className="flex justify-center mt-12 mb-8">
          <button
            onClick={onComplete}
            className="bg-[#96D74C] text-[#421869] px-8 py-3.5 rounded-full text-[15px] font-medium hover:translate-y-[-2px] transition-transform"
          >
            Mark as Complete
          </button>
        </div>

      </div>
    </div>
  );
}
