import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { logo } from '../assets';

interface Module2InteractiveProps {
  onComplete: () => void;
}

const pages = [
  {
    num: 'Module 2 — Your First Credential',
    icon: '🎓',
    tagline: null,
    title: 'What does 120 hours <em>actually</em> teach you?',
    content: (
      <>
        <p>
          This is not busywork. Every unit directly prepares you for something you will face in your first real class —
          whether you are teaching a seven-year-old in Beijing or a professional preparing for IELTS. Walk through each
          section one at a time.
        </p>
        <div className="cert-card">
          <div className="cert-icon">📜</div>
          <div>
            <div className="cert-name">120-Hour TEFL/TESOL Certificate — TeacherRecord</div>
            <div className="cert-tags">
              Internationally recognised · Fully online · Free of charge · Issued instantly on completion · Valid
              permanently · No degree required
            </div>
          </div>
        </div>
        <span className="highlight-pill">8 sections to explore →</span>
      </>
    ),
  },
  {
    num: 'Section 1 of 6',
    icon: '📋',
    tagline: 'Lesson Planning',
    title: 'Build a class that students <em>actually follow</em>',
    content: (
      <>
        <p>
          Most new teachers show up and hope for the best. The result? Students get confused, lose interest, and don't
          come back.
        </p>
        <p>
          <strong>Lesson planning changes that.</strong> You learn how to structure every class from start to finish —
          what you introduce first, how you build momentum, and how you close so students remember what they learned.
        </p>
        <p>A teacher with a plan is a teacher students trust.</p>
      </>
    ),
  },
  {
    num: 'Section 2 of 6',
    icon: '👂',
    tagline: 'Receptive Skills',
    title: 'Teaching listening <em>and</em> reading',
    content: (
      <>
        <p>These are the skills most ESL students struggle with first — children and adults alike.</p>
        <p>
          When a student listens to English, their brain is working twice as hard. Decoding sounds. Processing meaning.
          Formulating responses. All at once.
        </p>
        <p>
          <strong>You need to know how to make that easier.</strong> From choosing the right audio materials to
          building reading exercises that actually stick — for every level and age group.
        </p>
      </>
    ),
  },
  {
    num: 'Section 3 of 6',
    icon: '🗣️',
    tagline: 'Productive Skills',
    title: 'Teaching speaking and writing that <em>opens doors</em>',
    content: (
      <>
        <p>
          A child who could barely say "hello" starts reading aloud with confidence. A professional starts presenting
          in English at work. <strong>That transformation is your doing.</strong>
        </p>
        <p>
          The TEFL teaches you how to build speaking and writing skills progressively — for young learners and adults
          alike — starting where the student is, not where you wish they were.
        </p>
        <p>
          It also teaches you how to correct without deflating. The way you respond to a mistake determines whether a
          student keeps trying — or shuts down.
        </p>
      </>
    ),
  },
  {
    num: 'Section 4 of 6',
    icon: '📖',
    tagline: 'English Grammar',
    title: 'Explaining grammar <em>without losing anyone</em>',
    content: (
      <>
        <p>
          Most fluent English speakers cannot explain why they say what they say. They just know it sounds right. But
          your student — child or adult — needs to understand the rule.
        </p>
        <p>
          <strong>The TEFL teaches you how to explain grammar clearly.</strong> How to use examples. How to show the
          pattern. How to make it feel logical instead of overwhelming.
        </p>
        <p>
          You will leave this section able to explain tenses, articles, and prepositions in ways that actually make
          sense to any learner.
        </p>
      </>
    ),
  },
  {
    num: 'Section 5 of 6',
    icon: '🧘',
    tagline: 'Classroom Survival Tips',
    title: 'Real tactics for when things go <em>quiet or off-track</em>',
    content: (
      <>
        <p>
          Every teacher has been there. The student goes silent. The lesson falls flat. An awkward pause stretches for
          what feels like forever — whether your student is eight or thirty-eight.
        </p>
        <p>
          <strong>Classroom survival tips are your toolkit for those moments.</strong> What to say when no one
          responds. How to pivot when a plan isn't working. How to bring energy back when a student is distracted or
          tired.
        </p>
        <p>
          This section is not glamorous. But it is what separates teachers who last from those who quit after three
          classes.
        </p>
      </>
    ),
  },
  {
    num: 'Section 6 of 6',
    icon: '🧒',
    tagline: 'Teaching Children & Adult Learners',
    title: 'Different students. <em>Different approaches.</em>',
    content: (
      <>
        <p>
          You will teach both children and adults — and they learn very differently. Children need movement, games,
          songs, and energy. A lesson designed for an adult will put a child to sleep.
        </p>
        <p>
          Adults, on the other hand, bring life experience, specific goals, and sometimes a fear of looking foolish.
          They need relevance, respect, and clear progress.
        </p>
        <p>
          <strong>The TEFL prepares you for both.</strong> So you are never caught off guard regardless of who shows up
          on your screen.
        </p>
      </>
    ),
  },
  {
    num: 'How to complete it without falling behind',
    icon: '⏱️',
    tagline: null,
    title: '120 hours. <em>Here is how you do it.</em>',
    content: (
      <>
        <div className="step-list">
          <div className="step-item">
            <div className="step-num">1</div>
            <div className="step-text">
              <strong>Register on TeacherRecord today.</strong> It takes five minutes and costs nothing. Go to
              teacherrecord.com and click TEFL Certificate.
            </div>
          </div>
          <div className="step-item">
            <div className="step-num">2</div>
            <div className="step-text">
              <strong>Block two hours every day.</strong> Morning before work or night after — whichever is quietest
              for you. At two hours a day you finish in under eight weeks.
            </div>
          </div>
          <div className="step-item">
            <div className="step-num">3</div>
            <div className="step-text">
              <strong>Take notes as you go.</strong> The things you learn here will show up directly in your live
              classes. Treat it like job training, not homework.
            </div>
          </div>
          <div className="step-item">
            <div className="step-num">4</div>
            <div className="step-text">
              <strong>Complete every module in order.</strong> The course builds on itself. Skipping ahead is the
              fastest way to feel unprepared when a student tests you.
            </div>
          </div>
          <div className="step-item">
            <div className="step-num">5</div>
            <div className="step-text">
              <strong>Download your certificate the moment you finish.</strong> Save it in multiple places. You will
              need it for every employer application you submit.
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    num: 'Ready to begin',
    icon: '🎯',
    tagline: null,
    title: 'Your credential is waiting',
    content: (
      <>
        <div className="warning-box">
          <p>
            You have 12 months of access once you register — but{' '}
            <strong>do not let that create a false sense of time.</strong> Your target is to complete the TEFL
            certificate within the first two weeks of this cohort. That keeps you on track to be job-ready before we
            finish together.
          </p>
        </div>
        <div className="cta-box">
          <h3>Start your free TEFL course.</h3>
          <p>
            Internationally recognised. Free of charge. Your certificate is issued the moment you finish.
          </p>
          <a
            href="https://teacherrecord.com/tefl-certificate"
            className="cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to TeacherRecord →
          </a>
        </div>
        <p style={{ marginTop: '20px', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
          Once your certificate is downloaded and ready, move to Module 3.
        </p>
      </>
    ),
  },
];

export function Module2Interactive({ onComplete }: Module2InteractiveProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (index: number) => {
    setDirection(index > currentPage ? 1 : -1);
    setCurrentPage(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        background: '#421869',
        color: '#FAFAF8',
        fontFamily: "'DM Sans', 'Inter', sans-serif",
      }}
    >
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
        .module2-interactive {
          --purple-deep: #421869;
          --purple-rich: #721CB8;
          --purple-mid: #7B337E;
          --periwinkle: #6667AB;
          --blush: #F5D5E0;
          --lime: #96D74C;
          --white: #FAFAF8;
        }

        .page-num {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--periwinkle);
          margin-bottom: 12px;
        }

        .page-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--purple-rich);
          border: 2px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          margin: 0 auto 28px;
        }

        .tagline {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--lime);
          margin-bottom: 20px;
        }

        .module2-interactive h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(22px, 4vw, 36px);
          color: var(--white);
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .module2-interactive h2 em {
          color: var(--blush);
          font-style: italic;
        }

        .module2-interactive p {
          font-size: 16px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.75);
          font-weight: 300;
          margin-bottom: 1rem;
        }

        .module2-interactive p strong {
          color: var(--white);
          font-weight: 500;
        }

        .highlight-pill {
          display: inline-block;
          background: var(--lime);
          color: var(--purple-deep);
          font-size: 13px;
          font-weight: 500;
          padding: 8px 20px;
          border-radius: 30px;
          margin-top: 16px;
        }

        .cert-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          padding: 20px 24px;
          margin-top: 20px;
          text-align: left;
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .cert-icon {
          width: 44px;
          height: 44px;
          background: var(--periwinkle);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .cert-name {
          font-size: 14px;
          font-weight: 500;
          color: var(--white);
          margin-bottom: 6px;
        }

        .cert-tags {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.7;
          font-weight: 300;
        }

        .step-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 20px;
          text-align: left;
        }

        .step-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 14px 16px;
        }

        .step-num {
          min-width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--lime);
          color: var(--purple-deep);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 500;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .step-text {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-weight: 300;
        }

        .step-text strong {
          color: var(--white);
          font-weight: 500;
        }

        .warning-box {
          background: rgba(170, 221, 68, 0.1);
          border: 1px solid rgba(170, 221, 68, 0.3);
          border-radius: 14px;
          padding: 20px 24px;
          margin-top: 20px;
          text-align: left;
        }

        .warning-box p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
          margin: 0;
          font-weight: 300;
        }

        .warning-box p strong {
          color: var(--lime);
          font-weight: 500;
        }

        .cta-box {
          background: var(--lime);
          border-radius: 16px;
          padding: 28px 32px;
          margin-top: 20px;
          text-align: center;
        }

        .cta-box h3 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 20px;
          color: var(--purple-deep);
          margin-bottom: 8px;
        }

        .cta-box p {
          font-size: 14px;
          color: var(--purple-rich);
          margin-bottom: 16px;
          font-weight: 400;
        }

        .cta-btn {
          display: inline-block;
          background: var(--purple-deep);
          color: var(--lime);
          padding: 11px 26px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s;
        }

        .dot.active {
          background: var(--lime);
          width: 24px;
          border-radius: 4px;
        }
      `}</style>

      <div className="module2-interactive">
        {/* Stage */}
        <div className="flex-1 overflow-y-auto px-10 py-10">
          <div className="min-h-full flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentPage}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="max-w-2xl w-full text-center py-4"
              >
                <div className="page-num">{pages[currentPage].num}</div>
                <div className="page-icon">{pages[currentPage].icon}</div>
                {pages[currentPage].tagline && <div className="tagline">{pages[currentPage].tagline}</div>}
                <h2 dangerouslySetInnerHTML={{ __html: pages[currentPage].title }} />
                <div className="text-left">{pages[currentPage].content}</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 py-4">
          {pages.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentPage ? 'active' : ''}`}
              onClick={() => goToPage(index)}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between px-10 pb-6">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="px-6 py-2.5 rounded-full text-sm border transition-all disabled:opacity-20 disabled:cursor-not-allowed flex items-center gap-2"
            style={{
              background: 'rgba(255,255,255,0.08)',
              borderColor: 'rgba(255,255,255,0.12)',
              color: '#FAFAF8',
            }}
          >
            <ChevronLeft size={16} />
            Back
          </button>

          <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {currentPage + 1} of {pages.length}
          </span>

          <button
            onClick={handleNext}
            className="px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2"
            style={{
              background: '#96D74C',
              color: '#421869',
            }}
          >
            {currentPage === pages.length - 1 ? (
              <>
                <Check size={16} />
                Complete
              </>
            ) : (
              <>
                Next
                <ChevronRight size={16} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
