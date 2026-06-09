import { useEffect } from 'react';
import { logo } from '../assets';

interface NigerianTeacherLessonProps {
  onComplete: () => void;
}

export function NigerianTeacherLesson({ onComplete }: NigerianTeacherLessonProps) {
  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      const progressBar = document.getElementById('lesson-progress');
      if (progressBar) {
        progressBar.style.width = progress + '%';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative" style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}>
      <img
        src={logo}
        alt="Tall Bridge Institute"
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          width: '32px',
          height: '32px',
          objectFit: 'contain',
          zIndex: 50,
        }}
      />
      <style>{`
        .nigerian-lesson {
          --purple-deep: #421869;
          --purple-rich: #721CB8;
          --purple-mid: #7B337E;
          --periwinkle: #6667AB;
          --blush: #F5D5E0;
          --lime: #96D74C;
          --white: #FAFAF8;
          --text: #1a1a2e;
          --text-muted: #5a5a7a;
        }

        .progress-bar-lesson {
          height: 3px;
          background: var(--purple-rich);
          position: sticky;
          top: 0;
          z-index: 99;
        }

        .progress-fill-lesson {
          height: 100%;
          width: 0%;
          background: var(--lime);
          transition: width 0.1s;
        }

        .lesson-hero {
          background: var(--purple-deep);
          padding: 60px 40px 50px;
          position: relative;
          overflow: hidden;
        }

        .lesson-hero::before {
          content: '';
          position: absolute;
          top: -60px;
          right: -60px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: var(--purple-rich);
          opacity: 0.4;
        }

        .lesson-hero::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: 20%;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: var(--purple-mid);
          opacity: 0.2;
        }

        .lesson-content p {
          margin-bottom: 1.5rem;
          color: var(--text);
          font-weight: 300;
          line-height: 1.8;
        }

        .lesson-content p.bold-line {
          font-weight: 500;
          font-size: 18px;
          color: var(--purple-deep);
        }

        .stanza {
          margin: 2rem 0;
          padding-left: 24px;
          border-left: 2px solid var(--blush);
        }

        .stanza p {
          margin-bottom: 0.4rem;
          color: var(--text-muted);
          font-style: italic;
        }

        .pull-quote {
          background: var(--purple-deep);
          color: var(--white);
          border-radius: 16px;
          padding: 40px 44px;
          margin: 3rem 0;
          position: relative;
          overflow: hidden;
        }

        .pull-quote::before {
          content: '"';
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 120px;
          color: var(--purple-rich);
          position: absolute;
          top: -10px;
          left: 20px;
          line-height: 1;
        }

        .pull-quote p {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(18px, 3vw, 24px);
          line-height: 1.5;
          color: var(--blush);
          position: relative;
          z-index: 1;
          margin: 0;
          font-style: italic;
        }

        .section-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 26px;
          color: var(--purple-deep);
          margin: 3rem 0 1.5rem;
          font-weight: 700;
        }

        .highlight-box {
          background: var(--blush);
          border-radius: 12px;
          padding: 28px 32px;
          margin: 2.5rem 0;
        }

        .highlight-box p {
          color: var(--purple-deep);
          font-weight: 400;
          margin: 0;
          font-size: 16px;
          line-height: 1.75;
        }

        .opportunity-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
          margin: 2rem 0;
        }

        .opp-card {
          background: var(--purple-deep);
          border-radius: 12px;
          padding: 20px;
          color: var(--white);
        }

        .opp-card .opp-icon {
          font-size: 22px;
          margin-bottom: 10px;
        }

        .opp-card p {
          font-size: 14px;
          color: var(--blush);
          margin: 0;
          font-weight: 300;
          line-height: 1.6;
        }

        .opp-card strong {
          display: block;
          font-size: 15px;
          font-weight: 500;
          color: var(--white);
          margin-bottom: 4px;
        }

        .reflection-section {
          background: linear-gradient(135deg, var(--purple-deep), var(--purple-rich));
          border-radius: 20px;
          padding: 48px 44px;
          margin: 3rem 0;
          color: var(--white);
        }

        .reflection-section h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 24px;
          color: var(--blush);
          margin-bottom: 8px;
        }

        .reflection-section .sub {
          font-size: 14px;
          color: var(--periwinkle);
          margin-bottom: 32px;
          font-weight: 300;
        }

        .question {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 20px 24px;
          margin-bottom: 16px;
        }

        .question .q-num {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: var(--lime);
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .question p {
          font-size: 16px;
          color: var(--white);
          margin: 0 0 8px;
          font-weight: 400;
          line-height: 1.5;
        }

        .question .hint {
          font-size: 13px;
          color: var(--blush);
          opacity: 0.7;
          margin: 0;
          font-style: italic;
          font-weight: 300;
        }

        .divider {
          border: none;
          border-top: 1px solid var(--blush);
          margin: 3rem 0;
        }
      `}</style>

      <div className="nigerian-lesson">
        <div className="progress-bar-lesson">
          <div className="progress-fill-lesson" id="lesson-progress" />
        </div>

        <div className="lesson-hero">
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--periwinkle)' }}>
              Module 1 — Meet Yourself · Reading Material
            </div>
            <h1
              className="mb-5"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(32px, 5vw, 52px)',
                color: 'var(--white)',
                lineHeight: 1.15,
                fontWeight: 700,
              }}
            >
              The Nigerian Teacher <em style={{ fontStyle: 'italic', color: 'var(--blush)' }}>Narrative</em>
            </h1>
            <p className="text-base opacity-80" style={{ color: 'var(--blush)', fontWeight: 300, maxWidth: '500px', lineHeight: 1.6 }}>
              Maybe the problem was never teaching. Maybe it was the system around it.
            </p>
            <div
              className="inline-flex items-center gap-2 mt-6 text-sm px-4 py-1.5 rounded-full"
              style={{ color: 'var(--periwinkle)', background: 'rgba(102, 103, 171, 0.15)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              8 min read
            </div>
          </div>
        </div>

        <div className="lesson-content max-w-3xl mx-auto px-10 py-16">
          {/*
            READING MATERIAL IMAGES — add illustrations or photos here to break up the long-form text.
            Suggested placements:
            - After the opening stanza: an image representing the traditional Nigerian classroom
            - After the pull-quote block: an image of a teacher helping a student (warmth/clarity theme)
            - After the opportunity grid cards: an image showing online teaching setup
            - Replace <ImageWithFallback src="..." alt="..." className="w-full rounded-xl my-6" /> where needed
            Import images from /src/imports/ or use Unsplash URLs via the ImageWithFallback component.
          */}
          <p>Growing up in Nigeria, many of us heard the same thing in different ways.</p>

          <div className="stanza">
            <p>"Read your books so you don't end up a teacher."</p>
          </div>

          <p>Sometimes it was said jokingly. Sometimes seriously. Sometimes with pity.</p>

          <p>And slowly, without realizing it, we absorbed the message.</p>

          <p>
            That teaching was the job people settled for when life did not go according to plan. Not the dream. Not the
            ambition. Not the future. Just survival.
          </p>

          <p>
            We saw exhausted teachers in overcrowded classrooms. We saw people who worked hard but still struggled
            financially. We saw teachers trekking home after school because transport money was tight. We saw brilliant
            people become invisible because the system around them did not reward their brilliance.
          </p>

          <p>And because of that, many of us confused two completely different things:</p>

          <div className="stanza">
            <p>The value of teaching…</p>
            <p>and the failure of a broken system.</p>
          </div>

          <div className="pull-quote">
            <p>
              They are not the same thing. A broken system can underpay a valuable skill. But that does not reduce the
              importance of the skill itself.
            </p>
          </div>

          <p className="bold-line">And teaching is important. Always has been.</p>

          <p>
            Think about it. Every doctor was first taught by someone. Every engineer. Every lawyer. Every pilot. Every
            software developer. Every architect. Every successful person you admire today once sat somewhere, confused
            about something — until somebody explained it clearly enough for them to understand.
          </p>

          <p>That moment matters more than we think.</p>

          <div className="highlight-box">
            <p>
              <strong>One human helping another human move from confusion to clarity.</strong> That is teaching. The
              world changes because people understand things. And the people who help others understand things hold more
              power than they realize.
            </p>
          </div>

          <h2 className="section-heading">Something has changed.</h2>

          <p>The internet changed access. Remote work changed geography. Global education changed opportunity.</p>

          <p>
            For the first time in history, somebody sitting in Lagos, Ibadan, Port Harcourt, Enugu, Kaduna, or Abeokuta
            can teach a student thousands of kilometers away — and get paid for knowledge they already carry.
          </p>

          <p>Not because they became somebody else overnight. But because the world became more connected.</p>

          <div className="opportunity-grid">
            <div className="opp-card">
              <div className="opp-icon">💬</div>
              <strong>Clarity</strong>
              <p>Being able to simplify difficult ideas is a global skill worth paying for.</p>
            </div>
            <div className="opp-card">
              <div className="opp-icon">🎯</div>
              <strong>Patience</strong>
              <p>Helping people learn at their pace is rare and deeply valuable.</p>
            </div>
            <div className="opp-card">
              <div className="opp-icon">✨</div>
              <strong>Presence</strong>
              <p>Holding someone's attention while they learn — that is a superpower.</p>
            </div>
          </div>

          <p>
            Many people still underestimate themselves. They think: "I'm just good at English." "I only know how to
            explain things." "I'm not an expert."
          </p>

          <p>But the world pays for clarity. The world pays for patience. The world pays for communication.</p>

          <p>
            And no — you do not need to speak with a foreign accent to teach internationally. You do not need to pretend
            to be somebody you are not. You do not need perfection before you begin.
          </p>

          <div className="pull-quote">
            <p>What students need most is not perfection. It is clarity. Warmth. Patience. Encouragement. Presence.</p>
          </div>

          <hr className="divider" />

          <h2 className="section-heading">This course is not selling fantasy.</h2>

          <p>
            Not everybody becomes rich overnight. Not everybody earns thousands immediately. This is not magic. It is
            skill-building. Confidence-building. Consistency-building.
          </p>

          <p>
            Some people will use this as side income. Some people will build full careers from it. Some people will use
            it to survive difficult seasons. Some will use it to fund bigger dreams.
          </p>

          <p className="bold-line">
            But almost everybody who succeeds starts the same way: they stop underestimating what they already know.
          </p>

          <div className="reflection-section">
            <h2>Pause and reflect.</h2>
            <p className="sub">Before you continue, sit with these questions. Write honestly. There are no right answers.</p>

            <div className="question">
              <div className="q-num">Question 01</div>
              <p>What beliefs did you grow up hearing about teachers?</p>
              <p className="hint">Write honestly. No pressure. No right answer.</p>
            </div>

            <div className="question">
              <div className="q-num">Question 02</div>
              <p>Have you ever helped someone understand something before?</p>
              <p className="hint">Describe the moment. How did it feel?</p>
            </div>

            <div className="question">
              <div className="q-num">Question 03</div>
              <p>What is one thing people naturally come to you for help with?</p>
            </div>

            <div className="question">
              <div className="q-num">Question 04</div>
              <p>What would change in your life if you truly believed your knowledge had value?</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
            <button
              onClick={onComplete}
              className="px-8 py-3 rounded-full font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg"
              style={{
                background: 'var(--lime)',
                color: 'var(--purple-deep)',
              }}
            >
              Mark as Complete →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
