import { useEffect, useRef, useState } from 'react';
import { logo } from '../assets';

export function CongratulationsPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#96D74C', '#F5D5E0', '#6667AB', '#721CB8', '#ffffff'];
    const pieces: Array<{
      x: number;
      y: number;
      w: number;
      h: number;
      color: string;
      speed: number;
      angle: number;
      spin: number;
      drift: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 120; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 10 + 4,
        h: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 3 + 1,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.15,
        drift: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    let frame = 0;
    let animationId: number;

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (frame < 300) {
        pieces.forEach((p) => {
          p.y += p.speed;
          p.x += p.drift;
          p.angle += p.spin;

          if (p.y > canvas.height) {
            p.y = -20;
            p.x = Math.random() * canvas.width;
          }

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);
          ctx.globalAlpha = p.opacity;
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          ctx.restore();
        });
      }

      frame++;
      if (frame < 400) {
        animationId = requestAnimationFrame(animate);
      } else {
        setShowConfetti(false);
      }
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="h-full overflow-y-auto bg-[#421869] text-white">
      {/* Confetti Canvas */}
      {showConfetti && (
        <canvas
          ref={canvasRef}
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
      )}

      {/* Top Bar */}
      <div className="bg-black/30 px-10 py-3 flex items-center justify-between text-[13px] border-b border-white/8 relative z-10">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Tall Bridge Institute"
            className="w-8 h-8 object-contain"
          />
          <span className="font-medium text-[#96D74C] tracking-wider text-xs uppercase">Tall Bridge Institute</span>
        </div>
        <span className="bg-white/10 text-[#F5D5E0] px-3.5 py-1 rounded-full text-xs">Module Complete 🎉</span>
      </div>

      {/* Hero Section */}
      <div className="flex-shrink-0 py-16 px-10 text-center relative z-10">
        <img
          src="/images/___38_.jpeg"
          alt="Mr Bean thumbs up"
          className="w-[180px] rounded-2xl mx-auto shadow-[0_8px_32px_rgba(0,0,0,0.4)] mb-7"
          style={{ animation: 'popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) both' }}
        />
        <div
          className="text-[11px] font-medium tracking-widest uppercase text-[#96D74C] mb-3.5"
          style={{ animation: 'fadeUp 0.5s ease 0.2s both' }}
        >
          You did it
        </div>
        <h1
          className="font-serif text-[62px] font-bold text-white leading-tight mb-5"
          style={{ animation: 'fadeUp 0.5s ease 0.3s both' }}
        >
          Congratulations,<br /><em className="italic text-[#F5D5E0]">teacher.</em>
        </h1>
        <p
          className="text-[17px] text-white/65 font-light max-w-[520px] mx-auto leading-relaxed"
          style={{ animation: 'fadeUp 0.5s ease 0.4s both' }}
        >
          You have completed the Tall Bridge Institute course. Every module. Every lesson. Every reflection. You showed up — and that is everything. Now it is time for the most exciting part.
        </p>
      </div>

      {/* Stats Row */}
      <div
        className="flex items-center justify-center gap-10 px-10 py-8 border-t border-b border-white/8 relative z-10"
        style={{ animation: 'fadeUp 0.5s ease 0.5s both' }}
      >
        <div className="text-center">
          <div className="font-serif text-4xl font-bold text-[#96D74C]">6</div>
          <div className="text-xs text-white/45 font-light mt-1 tracking-wider">Modules completed</div>
        </div>
        <div className="w-px h-10 bg-white/12"></div>
        <div className="text-center">
          <div className="font-serif text-4xl font-bold text-[#96D74C]">2</div>
          <div className="text-xs text-white/45 font-light mt-1 tracking-wider">Live practice sessions ahead</div>
        </div>
        <div className="w-px h-10 bg-white/12"></div>
        <div className="text-center">
          <div className="font-serif text-4xl font-bold text-[#96D74C]">∞</div>
          <div className="text-xs text-white/45 font-light mt-1 tracking-wider">Classes you are ready for</div>
        </div>
      </div>

      {/* Booking Section */}
      <div
        className="max-w-[720px] mx-auto px-10 py-14 relative z-10"
        style={{ animation: 'fadeUp 0.5s ease 0.6s both' }}
      >
        <div className="text-center mb-8">
          <h2 className="font-serif text-[36px] font-bold text-white mb-3">
            Book your live<br /><em className="italic text-[#F5D5E0]">practice sessions.</em>
          </h2>
          <p className="text-[15px] text-white/60 font-light leading-relaxed max-w-[500px] mx-auto">
            You have two live sessions with your instructor. This is where everything you have learned becomes real. Choose your dates below and show up ready to teach.
          </p>
        </div>

        {/* Expect Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-9">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="w-7 h-7 rounded-full bg-[#96D74C] text-[#421869] flex items-center justify-center text-[13px] font-medium mb-2.5">1</div>
            <div className="text-sm font-medium text-white mb-1">Practice Session One</div>
            <div className="text-[13px] text-white/55 leading-relaxed font-light">Tool practice on ClassIn, Zoom, or VoovMeeting. You will set up, navigate, and run a mock class with your instructor watching.</div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="w-7 h-7 rounded-full bg-[#96D74C] text-[#421869] flex items-center justify-center text-[13px] font-medium mb-2.5">2</div>
            <div className="text-sm font-medium text-white mb-1">Practice Session Two</div>
            <div className="text-[13px] text-white/55 leading-relaxed font-light">Your demo class. You teach a ten-minute lesson to the group. You receive feedback, scoring, and coaching from your instructor.</div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="w-7 h-7 rounded-full bg-[#96D74C] text-[#421869] flex items-center justify-center text-[13px] font-medium mb-2.5">📋</div>
            <div className="text-sm font-medium text-white mb-1">Come prepared</div>
            <div className="text-[13px] text-white/55 leading-relaxed font-light">Have ClassIn installed and your free account set up. Have a lesson topic in mind. Bring your energy — this is your first real classroom.</div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="w-7 h-7 rounded-full bg-[#96D74C] text-[#421869] flex items-center justify-center text-[13px] font-medium mb-2.5">⏱️</div>
            <div className="text-sm font-medium text-white mb-1">Each session is 2 hours</div>
            <div className="text-[13px] text-white/55 leading-relaxed font-light">Sessions are group format. Everyone teaches, everyone observes, everyone receives feedback. Maximum group size is your cohort.</div>
          </div>
        </div>

        {/* Calendly Placeholder */}
        <div className="bg-white rounded-[20px] min-h-[500px] flex flex-col items-center justify-center p-10 text-center mb-6">
          <span className="text-5xl mb-4">📅</span>
          <h3 className="font-serif text-xl font-medium text-[#1a1a2e] mb-2.5">Pick your session dates</h3>
          <p className="text-sm text-[#5a5a7a] leading-relaxed max-w-[380px] mx-auto mb-6 font-light">
            Choose two available dates from the calendar below. You will receive a confirmation and reminder email after booking.
          </p>
          <a
            href="YOUR_CALENDLY_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#421869] text-white px-7 py-3.5 rounded-full text-[15px] font-medium hover:opacity-85 transition-opacity mb-4"
          >
            <span>📅</span>
            <span>Open Booking Calendar</span>
          </a>
          <p className="text-xs text-[#5a5a7a] italic opacity-70">Calendar powered by Calendly · Replace the link above with your Tall Bridge Institute Calendly URL</p>
        </div>

        {/* Note Box */}
        <div className="bg-[#96D74C]/8 border border-[#96D74C]/20 rounded-xl px-5 py-4 mt-6">
          <div className="text-[10px] font-medium tracking-wider uppercase text-[#96D74C] mb-2">📌 Important — Read before booking</div>
          <p className="text-[13px] text-white/75 leading-relaxed font-light">
            You are booking <strong className="text-white font-medium">two sessions total</strong> — not two on the same day. Book Session One first, attend it, then book Session Two. Each session builds on the previous one. If you need to reschedule, please do so at least 24 hours in advance through the booking link.
          </p>
        </div>
      </div>

      {/* Closing */}
      <div className="text-center px-10 py-10 relative z-10 border-t border-white/8">
        <p className="text-[15px] text-white/50 font-light leading-relaxed max-w-[500px] mx-auto mb-5">
          <strong className="text-white font-medium">Liz is proud of you.</strong> You came in knowing how to speak English. You are leaving knowing how to teach it. That is not a small thing. That is a career. Go get it.
        </p>
        <p className="text-[15px] text-white/50 font-light leading-relaxed max-w-[500px] mx-auto mb-7">
          See you in the live sessions. Come ready.
        </p>
        <img
          src="/images/___38_.jpeg"
          alt="Mr Bean thumbs up"
          className="w-[180px] rounded-2xl mx-auto shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        />
        <p className="mt-3.5 text-[13px] text-white/35 italic">We see you. 👍</p>
      </div>

      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(170,221,68,0.4); }
          50% { box-shadow: 0 0 0 20px rgba(170,221,68,0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}