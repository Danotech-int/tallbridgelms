import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { logo } from '../assets';

interface ManagingMeMindLessonProps {
  onComplete: () => void;
}

export function ManagingMeMindLesson({ onComplete }: ManagingMeMindLessonProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const scrollTop = target.scrollTop;
      const scrollHeight = target.scrollHeight - target.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    const contentArea = document.querySelector('.managing-mind-content');
    if (contentArea) {
      contentArea.addEventListener('scroll', handleScroll);
      return () => contentArea.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="h-full overflow-y-auto managing-mind-content bg-[#FAFAF8] relative">
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
          <h1 className="font-serif text-[52px] text-white leading-tight mb-5 font-bold">
            Your mind and<br /><em className="italic text-[#F5D5E0]">your people.</em>
          </h1>
          <p className="text-base text-[#F5D5E0] opacity-80 font-light max-w-[500px] leading-relaxed">
            The physical cost of remote teaching is visible. The mental and social cost is quieter — and often more dangerous. This lesson is about protecting both.
          </p>
          <div className="inline-flex items-center gap-2 mt-6 text-[13px] text-[#6667AB] bg-[#6667AB]/15 px-3.5 py-1.5 rounded-full">
            <Clock size={14} />
            12 min read
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-[680px] mx-auto px-10 py-16">
        {/*
          AUDIO EMBED — this lesson is listed as type 'audio' in App.tsx.
          Add a real audio player here above or below the reading content.
          Option A (self-hosted MP3):
            <audio controls src="/audio/managing-my-mind.mp3" className="w-full rounded-lg mb-8" />
          Option B (podcast embed, e.g. Buzzsprout):
            <iframe src="BUZZSPROUT_EMBED_URL" ... className="w-full mb-8" />
          Option C (Spotify episode):
            <iframe src="https://open.spotify.com/embed/episode/YOUR_EPISODE_ID" ... className="w-full mb-8" />

          READING MATERIAL IMAGES — also add mindfulness/social-life visuals:
          - After the loneliness section: a warm image of a teacher connecting with community online
          - After the screen fatigue section: an illustration of a screen-free wind-down ritual
          Use: <img src="/images/mind-community.png" alt="..." className="w-full rounded-xl my-6" />
        */}

        <p className="mb-6 text-[#1a1a2e] font-light leading-relaxed">
          Nobody warns you about the emotional weight of this job. Before you started, you thought about the platform, the certificate, the students, the pay. You thought about how to teach well and how to get hired.
        </p>

        <p className="mb-6 text-[#1a1a2e] font-light leading-relaxed">
          You probably did not think about the Tuesday afternoon when you finish your sixth class of the day and realise you have not spoken to a friend in four days. Or the morning when you wake up completely flat — and you have three classes starting in an hour and a child who needs your full warmth and energy on the other side of the screen.
        </p>

        <p className="mb-6 text-[#1a1a2e] font-light leading-relaxed">
          This is the reality of remote teaching that the income potential does not advertise. <strong className="font-medium text-[#421869]">And it is real, it is common, and it is manageable — if you know what you are dealing with.</strong>
        </p>

        {/* Pull Quote */}
        <div className="bg-[#421869] text-white rounded-2xl px-11 py-10 my-12 relative overflow-hidden">
          <div className="absolute top-[-10px] left-5 text-[120px] font-serif text-[#721CB8] leading-none">"</div>
          <p className="font-serif text-[24px] leading-snug text-[#F5D5E0] relative z-10 italic">
            You are in the business of transferring energy. If yours runs out, you have nothing left to give. Protecting your mental health is not selfishness. It is professionalism.
          </p>
        </div>

        <h2 className="font-serif text-[26px] text-[#421869] mt-12 mb-6 font-bold">The emotional demands nobody talks about</h2>

        <p className="text-[15px] text-[#5a5a7a] mb-6 font-light leading-relaxed">
          Teaching is emotional labour. You are not just presenting information — you are managing another human being's emotional state, confidence, frustration, and engagement, simultaneously with your own.
        </p>

        {/* Scenario */}
        <div className="bg-[#fafaf8] border border-[#e0ddd8] rounded-xl px-7 py-6 my-6">
          <div className="text-[11px] font-medium tracking-wider uppercase text-[#6667AB] mb-2.5">Scenario — a real teaching day</div>
          <div className="text-[15px] text-[#1a1a2e] leading-relaxed font-light">
            You wake up at 6am for a Beijing time class. The student is difficult today — disengaged, giving one-word answers, clearly not in the mood. You spend forty-five minutes carrying the entire session on your own energy. The class ends. You have twenty minutes before your next student. You feel depleted. You smile anyway. You start again. By your fourth class, you are teaching on fumes. But the child on the other side of the screen does not know that. <strong className="text-[#421869] font-medium">They just need their teacher.</strong>
          </div>
        </div>

        <p className="mb-6 text-[#1a1a2e] font-light leading-relaxed">
          This is the hidden cost of being a good teacher. You absorb the difficult days. You manage your own emotions while managing theirs. And you do it alone — without the staffroom, without a colleague to debrief with, without anyone who truly understands what your day looks like.
        </p>

        <p className="mb-6 text-[#1a1a2e] font-light leading-relaxed">
          Over time, without the right practices in place, this becomes burnout.
        </p>

        <hr className="border-none border-t border-[#F5D5E0] my-12" />

        <h2 className="font-serif text-[26px] text-[#421869] mt-12 mb-6 font-bold">Burnout — what it actually looks like</h2>

        <p className="text-[15px] text-[#5a5a7a] mb-6 font-light leading-relaxed">
          Burnout does not arrive suddenly. It creeps in slowly, disguised as tiredness. Here are the signs to watch for:
        </p>

        {/* Burnout Signs */}
        <div className="flex flex-col border border-[#e0ddd8] rounded-2xl overflow-hidden my-8">
          <div className="flex items-start gap-3.5 px-5 py-4 border-b border-[#e0ddd8] bg-white">
            <div className="min-w-[10px] h-[10px] rounded-full bg-[#96D74C] mt-2 flex-shrink-0"></div>
            <div className="flex-1 text-sm text-[#1a1a2e] leading-relaxed font-light">
              <strong className="font-medium text-[#421869]">Dreading classes you used to enjoy.</strong> When teaching stops feeling meaningful and starts feeling like just getting through it — something needs to change.
            </div>
          </div>

          <div className="flex items-start gap-3.5 px-5 py-4 border-b border-[#e0ddd8] bg-[#fafaf8]">
            <div className="min-w-[10px] h-[10px] rounded-full bg-[#96D74C] mt-2 flex-shrink-0"></div>
            <div className="flex-1 text-sm text-[#1a1a2e] leading-relaxed font-light">
              <strong className="font-medium text-[#421869]">Losing patience faster than usual.</strong> A student's repeated mistake that you used to handle gracefully now makes you internally frustrated. Your tolerance has shrunk.
            </div>
          </div>

          <div className="flex items-start gap-3.5 px-5 py-4 border-b border-[#e0ddd8] bg-white">
            <div className="min-w-[10px] h-[10px] rounded-full bg-[#96D74C] mt-2 flex-shrink-0"></div>
            <div className="flex-1 text-sm text-[#1a1a2e] leading-relaxed font-light">
              <strong className="font-medium text-[#421869]">Going through the motions.</strong> Your classes are technically fine but you are not really present. You are doing the job without being in the job.
            </div>
          </div>

          <div className="flex items-start gap-3.5 px-5 py-4 border-b border-[#e0ddd8] bg-[#fafaf8]">
            <div className="min-w-[10px] h-[10px] rounded-full bg-[#96D74C] mt-2 flex-shrink-0"></div>
            <div className="flex-1 text-sm text-[#1a1a2e] leading-relaxed font-light">
              <strong className="font-medium text-[#421869]">Emotional numbness outside of work.</strong> You finish teaching and feel nothing — not relieved, not satisfied, just empty. Like a battery that no longer holds charge.
            </div>
          </div>

          <div className="flex items-start gap-3.5 px-5 py-4 bg-white">
            <div className="min-w-[10px] h-[10px] rounded-full bg-[#96D74C] mt-2 flex-shrink-0"></div>
            <div className="flex-1 text-sm text-[#1a1a2e] leading-relaxed font-light">
              <strong className="font-medium text-[#421869]">Difficulty switching off.</strong> You lie awake thinking about a difficult class, a student's progress, or your schedule. The job follows you into rest.
            </div>
          </div>
        </div>

        <p className="mb-6 text-[#1a1a2e] font-light leading-relaxed">
          If you recognise three or more of these — you are not weak. You are human. And you need to make changes now, before it compounds.
        </p>

        <hr className="border-none border-t border-[#F5D5E0] my-12" />

        <h2 className="font-serif text-[26px] text-[#421869] mt-12 mb-6 font-bold">Protecting your mental health — practical tools</h2>

        {/* Mental Health Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-8">
          <div className="bg-[#fafaf8] border border-[#e0ddd8] rounded-xl p-5">
            <span className="text-4xl block mb-3">✍️</span>
            <div className="text-[15px] font-medium text-[#421869] mb-2">Write it down after hard classes</div>
            <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">
              Not for anyone else. Just for you. Three sentences about what happened, what you felt, and what you will do differently. <strong className="text-[#1a1a2e] font-medium">Writing externalises what you are carrying internally.</strong> It makes it lighter.
            </div>
          </div>

          <div className="bg-[#fafaf8] border border-[#e0ddd8] rounded-xl p-5">
            <span className="text-4xl block mb-3">🔔</span>
            <div className="text-[15px] font-medium text-[#421869] mb-2">Build a between-class ritual</div>
            <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">
              Two minutes between every session — a specific song, three deep breaths, a short walk to the window. Something that tells your nervous system: <strong className="text-[#1a1a2e] font-medium">that class is done. I am resetting.</strong> Without this, every class bleeds into the next.
            </div>
          </div>

          <div className="bg-[#fafaf8] border border-[#e0ddd8] rounded-xl p-5">
            <span className="text-4xl block mb-3">🏆</span>
            <div className="text-[15px] font-medium text-[#421869] mb-2">Celebrate your wins — deliberately</div>
            <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">
              A student finally got a word they had been struggling with. A parent sent feedback. You handled a genuinely difficult moment with grace. <strong className="text-[#1a1a2e] font-medium">These moments are easy to miss when you are rushing.</strong> Notice them. Name them. They are the fuel that keeps this sustainable.
            </div>
          </div>

          <div className="bg-[#fafaf8] border border-[#e0ddd8] rounded-xl p-5">
            <span className="text-4xl block mb-3">⏰</span>
            <div className="text-[15px] font-medium text-[#421869] mb-2">Set a hard stop time — and keep it</div>
            <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">
              Decide when your teaching day ends. Then close the laptop and leave it closed. <strong className="text-[#1a1a2e] font-medium">Without a physical commute to mark the transition, remote work expands to fill every hour.</strong> Your evening belongs to you. Protect it the same way you protect your class schedule.
            </div>
          </div>

          <div className="bg-[#fafaf8] border border-[#e0ddd8] rounded-xl p-5">
            <span className="text-4xl block mb-3">🛑</span>
            <div className="text-[15px] font-medium text-[#421869] mb-2">Take real days off — without guilt</div>
            <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">
              Rest is not laziness. It is maintenance. A car that never stops for fuel eventually stops on the road. <strong className="text-[#1a1a2e] font-medium">Schedule one full day off per week</strong> where you do not check messages, do not plan lessons, do not think about the job. Let yourself actually stop.
            </div>
          </div>

          <div className="bg-[#fafaf8] border border-[#e0ddd8] rounded-xl p-5">
            <span className="text-4xl block mb-3">🧠</span>
            <div className="text-[15px] font-medium text-[#421869] mb-2">Know when to ask for help</div>
            <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">
              If you have been consistently low, anxious, or emotionally exhausted for more than two to three weeks — talk to someone. A friend, a mentor, a therapist. <strong className="text-[#1a1a2e] font-medium">Teaching requires you to show up for others. You cannot do that if no one is showing up for you.</strong>
            </div>
          </div>
        </div>

        <hr className="border-none border-t border-[#F5D5E0] my-12" />

        <h2 className="font-serif text-[26px] text-[#421869] mt-12 mb-6 font-bold">Your social life — the invisible cost</h2>

        <p className="mb-6 text-[#1a1a2e] font-light leading-relaxed">
          This is the thing nobody warns you about. You are indoors for most of your working day. Your schedule is built around Beijing time — which means you are often awake when others sleep and unavailable when others are free. Your "colleagues" are on the other side of a screen in another country.
        </p>

        <p className="mb-6 text-[#1a1a2e] font-light leading-relaxed">
          Slowly, without noticing, your world gets smaller.
        </p>

        {/* Stanza */}
        <div className="my-8 pl-6 border-l-2 border-[#F5D5E0]">
          <p className="mb-2 text-[#5a5a7a] italic text-base">The calls you stop making because you are always tired.</p>
          <p className="mb-2 text-[#5a5a7a] italic text-base">The dinners you miss because of an evening class.</p>
          <p className="mb-2 text-[#5a5a7a] italic text-base">The friendships that quietly fade because you were never available.</p>
          <p className="text-[#5a5a7a] italic text-base">The creeping feeling that nobody really understands what your day looks like.</p>
        </div>

        <p className="mb-6 text-[#1a1a2e] font-light leading-relaxed">
          This is not a personality failing. It is the structural reality of remote work — and ESL teaching in particular. <strong className="font-medium text-[#421869]">You have to fight for your social life deliberately, because the job will not leave space for it automatically.</strong>
        </p>

        {/* Highlight Box */}
        <div className="bg-[#F5D5E0] rounded-xl px-8 py-7 my-10">
          <p className="text-[#421869] font-normal text-[15px] leading-relaxed">
            Human connection is not a luxury for a teacher. It is a professional necessity. <strong className="font-medium">A teacher who feels isolated, unseen, and disconnected cannot bring warmth to a classroom.</strong> You need to be filled up so you can give out.
          </p>
        </div>

        <h2 className="font-serif text-[26px] text-[#421869] mt-12 mb-6 font-bold">How to protect your social life as a remote ESL teacher</h2>

        {/* Social Life Protection */}
        <div className="flex flex-col border border-[#e0ddd8] rounded-2xl overflow-hidden my-8">
          <div className="flex items-start gap-3.5 px-5 py-4 border-b border-[#e0ddd8] bg-white">
            <div className="min-w-[10px] h-[10px] rounded-full bg-[#96D74C] mt-2 flex-shrink-0"></div>
            <div className="flex-1 text-sm text-[#1a1a2e] leading-relaxed font-light">
              <strong className="font-medium text-[#421869]">Join a community of teachers.</strong> Online forums, Facebook groups, WhatsApp communities of ESL teachers. People who understand exactly what your day looks like. The shared experience is grounding — and sometimes a message from someone who just gets it is all you need.
            </div>
          </div>

          <div className="flex items-start gap-3.5 px-5 py-4 border-b border-[#e0ddd8] bg-[#fafaf8]">
            <div className="min-w-[10px] h-[10px] rounded-full bg-[#96D74C] mt-2 flex-shrink-0"></div>
            <div className="flex-1 text-sm text-[#1a1a2e] leading-relaxed font-light">
              <strong className="font-medium text-[#421869]">Block non-teaching social time in your calendar.</strong> Treat it like a booked class. Do not cancel it for a student, do not reschedule it for money, do not let it slip because you are tired. Show up for the people in your life the same way you show up for your students.
            </div>
          </div>

          <div className="flex items-start gap-3.5 px-5 py-4 border-b border-[#e0ddd8] bg-white">
            <div className="min-w-[10px] h-[10px] rounded-full bg-[#96D74C] mt-2 flex-shrink-0"></div>
            <div className="flex-1 text-sm text-[#1a1a2e] leading-relaxed font-light">
              <strong className="font-medium text-[#421869]">Work from outside sometimes.</strong> A coworking space, a café, a library — anywhere with other humans present. You do not need to interact with them. The ambient presence of other people significantly reduces the isolation of remote work. It reminds your nervous system that you are not alone.
            </div>
          </div>

          <div className="flex items-start gap-3.5 px-5 py-4 bg-[#fafaf8]">
            <div className="min-w-[10px] h-[10px] rounded-full bg-[#96D74C] mt-2 flex-shrink-0"></div>
            <div className="flex-1 text-sm text-[#1a1a2e] leading-relaxed font-light">
              <strong className="font-medium text-[#421869]">Be honest about your schedule.</strong> Tell the people you care about when you are available and when you are not. Do not apologise for your hours — just communicate them. Relationships survive unusual schedules. They do not survive unexplained disappearances.
            </div>
          </div>
        </div>

        <div className="bg-[#f5f5f0] border border-[#e0ddd8] rounded-2xl px-8 py-7 my-12">
          <p className="text-[15px] text-[#5a5a7a] leading-relaxed">
            Your assignment: <em className="text-[#421869] not-italic font-medium">Write down three commitments — one for your mental health, one for your social life, and one for your long-term motivation.</em> Not aspirations. Specific, scheduled, real commitments. Put them in your calendar. Hold yourself to them the same way you would hold a student to their learning goals.
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
