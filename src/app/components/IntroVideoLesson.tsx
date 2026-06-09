import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { logo } from '../assets';

interface IntroVideoLessonProps {
  onComplete: () => void;
}

export function IntroVideoLesson({ onComplete }: IntroVideoLessonProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const scrollTop = target.scrollTop;
      const scrollHeight = target.scrollHeight - target.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    const contentArea = document.querySelector('.intro-video-content');
    if (contentArea) {
      contentArea.addEventListener('scroll', handleScroll);
      return () => contentArea.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="h-full overflow-y-auto intro-video-content bg-[#FAFAF8] relative">
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
        <div className="max-w-[720px] mx-auto relative z-10">
          <h1 className="font-serif text-[52px] text-white leading-tight mb-5 font-bold">
            Your introductory <em className="italic text-[#F5D5E0]">video.</em>
          </h1>
          <p className="text-base text-[#F5D5E0] opacity-80 font-light max-w-[500px] leading-relaxed">
            They have never seen you. They have never heard you. This two-minute video is your entire first impression — make it count.
          </p>
          <div className="inline-flex items-center gap-2 mt-6 text-[13px] text-[#6667AB] bg-[#6667AB]/15 px-3.5 py-1.5 rounded-full">
            <Clock size={14} />
            4 min read
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-[680px] mx-auto px-10 py-16">

          <p className="mb-6 text-[#1a1a2e] font-light leading-relaxed">
            Before an employer ever puts you in front of their student, they watch your introductory video. In most cases, that video is the only thing standing between you and the job. There is no cover letter. There is no lengthy interview. Just you, a camera, and however much of yourself you are willing to show in two minutes.
          </p>

          <p className="mb-6 text-[#1a1a2e] font-light leading-relaxed">
            This video was used to win over <strong className="font-medium text-[#421869]">more than fifty parents and employers</strong> across different countries. Watch it. Then read the rest of this lesson.
          </p>

          {/* Video Embed Box */}
          <div className="my-10">
            <h3 className="font-serif text-[22px] text-[#421869] mb-4 text-center">What a winning intro video looks like</h3>
            <div className="bg-black rounded-xl overflow-hidden shadow-2xl aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/2i6W9Yque1Q"
                title="What a winning intro video looks like"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-sm text-[#5a5a7a] text-center mt-4 font-light">
              This is the actual video used to secure teaching contracts with employers across multiple countries. Notice the energy, the clarity, the warmth — and how everything is said in under two minutes.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[#421869] text-white rounded-2xl px-11 py-10 my-10 relative overflow-hidden">
            <div className="absolute top-[-10px] left-5 text-[120px] font-serif text-[#721CB8] leading-none">"</div>
            <p className="font-serif text-[24px] leading-snug text-[#F5D5E0] relative z-10 italic">
              Your introductory video is not a CV read aloud. It is a performance. It is your energy, your warmth, your confidence, and your passion — compressed into two minutes.
            </p>
          </div>

          <h2 className="font-serif text-2xl text-[#421869] mt-10 mb-5 font-bold">What employers and parents are actually watching for</h2>

          <p className="mb-6 text-[#1a1a2e] font-light leading-relaxed">
            When an employer presses play on your video, they are not listening for a list of qualifications. They are asking themselves one question: <strong className="font-medium text-[#421869]">would I trust this person with my child?</strong>
          </p>

          <p className="mb-6 text-[#1a1a2e] font-light leading-relaxed">
            That question is answered within the first fifteen seconds. Your appearance, your energy, how you smile, how you speak — all of that lands before you have even finished your opening sentence.
          </p>

          {/* Checklist */}
          <div className="flex flex-col border border-[#e0ddd8] rounded-2xl overflow-hidden my-6">
            <div className="flex items-start gap-4 p-5 border-b border-[#e0ddd8] bg-white">
              <div className="min-w-[10px] h-[10px] rounded-full bg-[#96D74C] mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="text-[15px] font-medium text-[#421869] mb-1">Your energy</div>
                <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">Are you switched on and genuinely excited? A flat, rehearsed tone will lose an employer immediately. Bring warmth. Bring life. Speak like you actually love what you do.</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 border-b border-[#e0ddd8] bg-[#fafaf8]">
              <div className="min-w-[10px] h-[10px] rounded-full bg-[#96D74C] mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="text-[15px] font-medium text-[#421869] mb-1">Your appearance</div>
                <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">Clean, professional, approachable. You do not need to be in formal attire — but you do need to look like someone a parent would invite into their child's learning space.</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 border-b border-[#e0ddd8] bg-white">
              <div className="min-w-[10px] h-[10px] rounded-full bg-[#96D74C] mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="text-[15px] font-medium text-[#421869] mb-1">Your spoken English</div>
                <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">Clear, confident, natural. Not over-performed. Not robotic. Speak the way you would in a real class — with pacing, warmth, and intention behind every sentence.</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 border-b border-[#e0ddd8] bg-[#fafaf8]">
              <div className="min-w-[10px] h-[10px] rounded-full bg-[#96D74C] mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="text-[15px] font-medium text-[#421869] mb-1">Your commitment to students</div>
                <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">Say something specific about how you teach and what you are committed to delivering. Not vague words like "I am passionate" — but real statements about what a student will experience in your class.</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-white">
              <div className="min-w-[10px] h-[10px] rounded-full bg-[#96D74C] mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="text-[15px] font-medium text-[#421869] mb-1">Your teaching style</div>
                <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">Are you playful and interactive? Do you use games and visuals? Do you focus on conversation or structure? Tell them. Parents want to know their child will enjoy the lessons — not just survive them.</div>
              </div>
            </div>
          </div>

          <hr className="border-none border-t border-[#F5D5E0] my-10" />

          <h2 className="font-serif text-2xl text-[#421869] mt-10 mb-5 font-bold">What to say — and what not to say</h2>

          <div className="bg-[#F5D5E0] rounded-xl px-7 py-6 my-8">
            <p className="text-[#421869] font-normal text-[15px] leading-relaxed">
              <strong className="font-medium">Say:</strong> What makes you good at teaching. Your experience. Your methods. Your energy. Your specific commitment to the learner's success. Why you love it.
            </p>
          </div>

          <div className="bg-[#fff5f5] border border-[#ffcdd2] rounded-xl px-7 py-6 my-8">
            <p className="text-[#7f1d1d] font-normal text-[15px] leading-relaxed">
              <strong className="font-medium">Do not say:</strong> That you are strict. That you expect perfection. That your students must work hard. Chinese parents want a teacher who delivers results — but they also want a teacher their child is excited to learn from. Balance matters. Lead with warmth, follow with capability.
            </p>
          </div>

          <hr className="border-none border-t border-[#F5D5E0] my-10" />

          <h2 className="font-serif text-2xl text-[#421869] mt-10 mb-5 font-bold">The practical checklist</h2>

          <div className="flex flex-col border border-[#e0ddd8] rounded-2xl overflow-hidden my-6">
            <div className="flex items-start gap-4 p-5 border-b border-[#e0ddd8] bg-white">
              <div className="min-w-[10px] h-[10px] rounded-full bg-[#96D74C] mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="text-[15px] font-medium text-[#421869] mb-1">Keep it under two minutes — three minutes maximum</div>
                <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">Employers watch dozens of videos. If yours is four or five minutes long, they will not finish it. Say everything you need to say concisely and stop.</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 border-b border-[#e0ddd8] bg-[#fafaf8]">
              <div className="min-w-[10px] h-[10px] rounded-full bg-[#96D74C] mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="text-[15px] font-medium text-[#421869] mb-1">Use your noise-cancelling headset</div>
                <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">Background noise ruins an otherwise great video. Clear, crisp audio signals professionalism immediately.</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 border-b border-[#e0ddd8] bg-white">
              <div className="min-w-[10px] h-[10px] rounded-full bg-[#96D74C] mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="text-[15px] font-medium text-[#421869] mb-1">Film in a well-lit, clean environment</div>
                <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">Natural light from in front of you is ideal. Your background should look like a place a child would feel comfortable learning in. Coworking spaces work perfectly if your home setup is not ready.</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 border-b border-[#e0ddd8] bg-[#fafaf8]">
              <div className="min-w-[10px] h-[10px] rounded-full bg-[#96D74C] mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="text-[15px] font-medium text-[#421869] mb-1">Smile — genuinely and often</div>
                <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">Chinese parents respond strongly to warmth. A teacher who smiles is a teacher their child will want to come back to. Your smile is doing more work than your words.</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 border-b border-[#e0ddd8] bg-white">
              <div className="min-w-[10px] h-[10px] rounded-full bg-[#96D74C] mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="text-[15px] font-medium text-[#421869] mb-1">Look directly into the camera</div>
                <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">Not at your screen — at the camera. That is eye contact on video. It makes employers feel like you are speaking directly to them.</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-[#fafaf8]">
              <div className="min-w-[10px] h-[10px] rounded-full bg-[#96D74C] mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="text-[15px] font-medium text-[#421869] mb-1">Record multiple takes</div>
                <div className="text-sm text-[#5a5a7a] leading-relaxed font-light">Your first take is almost never your best. Record three to five versions. Watch them back. Pick the one where you sound most natural — not most rehearsed.</div>
              </div>
            </div>
          </div>

          <div className="bg-[#f5f5f0] border border-[#e0ddd8] rounded-2xl px-7 py-6 my-10">
            <p className="text-[15px] text-[#5a5a7a] leading-relaxed">
              Your assignment: <em className="text-[#421869] not-italic font-medium">Record your first practice intro video today.</em> Do not wait for perfect lighting or perfect words. Just turn the camera on and talk. Watch it back. What did you do well? What felt flat? That honest self-assessment is how you arrive at a video that wins employers over.
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
