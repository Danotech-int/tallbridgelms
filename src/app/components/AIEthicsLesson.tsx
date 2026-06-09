import { useEffect } from 'react';
import { logo } from '../assets';

interface AIEthicsLessonProps {
  onComplete: () => void;
}

export function AIEthicsLesson({ onComplete }: AIEthicsLessonProps) {
  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      const progressBar = document.getElementById('ai-ethics-progress');
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
        .ai-ethics-lesson {
          --purple-deep: #421869;
          --purple-rich: #721CB8;
          --purple-mid: #7B337E;
          --periwinkle: #6667AB;
          --blush: #F5D5E0;
          --lime: #96D74C;
          --white: #FAFAF8;
          --text: #1a1a2e;
          --muted: #5a5a7a;
        }

        .progress-bar-ai-ethics {
          height: 3px;
          background: var(--purple-rich);
          position: sticky;
          top: 0;
          z-index: 99;
        }

        .progress-fill-ai-ethics {
          height: 100%;
          width: 0%;
          background: var(--lime);
          transition: width 0.1s;
        }

        .ai-ethics-hero {
          background: var(--purple-deep);
          padding: 60px 40px 50px;
          position: relative;
          overflow: hidden;
        }

        .ai-ethics-hero::before {
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

        .ai-ethics-hero::after {
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

        .ai-ethics-content p {
          margin-bottom: 1.5rem;
          color: var(--text);
          font-weight: 300;
          line-height: 1.8;
        }

        .ai-ethics-content p strong {
          font-weight: 500;
          color: var(--purple-deep);
        }

        .ai-ethics-content p em {
          color: var(--purple-mid);
          font-style: normal;
          font-weight: 400;
        }

        .section-heading-ai {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 26px;
          color: var(--purple-deep);
          margin: 3rem 0 1.5rem;
          font-weight: 700;
        }

        .divider-ai {
          border: none;
          border-top: 1px solid var(--blush);
          margin: 3rem 0;
        }

        .pull-quote-ai {
          background: var(--purple-deep);
          color: var(--white);
          border-radius: 16px;
          padding: 40px 44px;
          margin: 3rem 0;
          position: relative;
          overflow: hidden;
        }

        .pull-quote-ai::before {
          content: '"';
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 120px;
          color: var(--purple-rich);
          position: absolute;
          top: -10px;
          left: 20px;
          line-height: 1;
        }

        .pull-quote-ai p {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(18px, 3vw, 24px);
          line-height: 1.5;
          color: var(--blush);
          position: relative;
          z-index: 1;
          margin: 0;
          font-style: italic;
        }

        .highlight-box-ai {
          background: var(--blush);
          border-radius: 12px;
          padding: 28px 32px;
          margin: 2.5rem 0;
        }

        .highlight-box-ai p {
          color: var(--purple-deep);
          font-weight: 400;
          margin: 0;
          font-size: 15px;
          line-height: 1.75;
        }

        .highlight-box-ai p strong {
          font-weight: 500;
        }

        .warning-box-ai {
          background: #fff5f0;
          border: 1.5px solid #ffccaa;
          border-radius: 12px;
          padding: 24px 28px;
          margin: 2.5rem 0;
        }

        .warning-label-ai {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #cc5500;
          margin-bottom: 10px;
        }

        .warning-box-ai p {
          color: var(--text);
          font-weight: 300;
          margin: 0;
          font-size: 15px;
          line-height: 1.75;
        }

        .warning-box-ai p strong {
          color: #cc5500;
          font-weight: 500;
        }

        .rule-list-ai {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin: 2rem 0;
          border: 0.5px solid #e0ddd8;
          border-radius: 16px;
          overflow: hidden;
        }

        .rule-item-ai {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 22px;
          border-bottom: 0.5px solid #e0ddd8;
          background: var(--white);
        }

        .rule-item-ai:last-child {
          border-bottom: none;
        }

        .rule-item-ai:nth-child(even) {
          background: #fafaf8;
        }

        .rule-num-ai {
          min-width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--purple-deep);
          color: var(--lime);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 500;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .rule-body-ai {
          flex: 1;
        }

        .rule-title-ai {
          font-size: 15px;
          font-weight: 500;
          color: var(--purple-deep);
          margin-bottom: 5px;
        }

        .rule-desc-ai {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.65;
          font-weight: 300;
        }

        .rule-desc-ai strong {
          color: var(--text);
          font-weight: 500;
        }

        .callout-ai {
          background: #f5f5f0;
          border-radius: 16px;
          padding: 28px 32px;
          margin: 3rem 0;
          border: 0.5px solid #e0ddd8;
        }

        .callout-ai p {
          font-size: 15px;
          color: var(--muted);
          margin: 0;
          line-height: 1.75;
        }

        .callout-ai p em {
          color: var(--purple-deep);
          font-style: normal;
          font-weight: 500;
        }
      `}</style>

      <div className="ai-ethics-lesson">
        <div className="progress-bar-ai-ethics">
          <div className="progress-fill-ai-ethics" id="ai-ethics-progress" />
        </div>

        <div className="ai-ethics-hero">
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--periwinkle)' }}>
              Module 3 — AI Tools · Reading Material
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
              Using AI <em style={{ fontStyle: 'italic', color: 'var(--blush)' }}>responsibly</em><br />as a teacher.
            </h1>
            <p className="text-base opacity-80" style={{ color: 'var(--blush)', fontWeight: 300, maxWidth: '500px', lineHeight: 1.6 }}>
              AI is a powerful tool. But a tool in the wrong hands — or used without thought — can do more harm than good. Here is what every ESL teacher needs to know.
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

        <div className="ai-ethics-content max-w-3xl mx-auto px-10 py-16">
          {/*
            READING MATERIAL IMAGES — add diagrams or illustrations here to support the ethics content.
            Suggested placements:
            - After the privacy section: a simple diagram showing what data AI tools collect vs. what stays private
            - After the academic honesty section: a comparison image (student doing own work vs. AI doing it all)
            - After the bias section: an illustration of diverse students to reinforce inclusive teaching
            Use: <img src="/images/ethics-diagram.png" alt="..." className="w-full rounded-xl my-6" />
            or the ImageWithFallback component from ./figma/ImageWithFallback
          */}
          <p>AI tools have changed what is possible for teachers. You can plan a lesson in minutes. Generate images on the spot. Build quizzes, flashcards, and songs without any technical skill. The possibilities are real and they are exciting.</p>

          <p>But there is something that needs to be said clearly before you go any further.</p>

          <div className="pull-quote-ai">
            <p>The tool is not the teacher. You are the teacher using the tool.</p>
          </div>

          <p>That distinction matters more than most people realise. And if you miss it, AI can quietly undermine the very thing that makes you a great teacher — your judgment, your cultural awareness, your human connection with your student.</p>

          <h2 className="section-heading-ai">AI can be wrong. Confidently wrong.</h2>

          <p>One of the most dangerous things about AI is not that it is wrong — it is that it sounds so certain when it is wrong. This is called <strong>hallucination</strong>. AI tools like ChatGPT can generate lesson content, cultural explanations, or factual information that sounds accurate, reads professionally, and is completely incorrect.</p>

          <p>As an ESL teacher, this matters in very specific ways. AI may give you:</p>

          <div className="warning-box-ai">
            <div className="warning-label-ai">⚠️ Watch out for these</div>
            <p>
              <strong>Cultural inaccuracies</strong> — assumptions about customs, family dynamics, or student expectations that are outdated, stereotyped, or simply wrong.<br /><br />
              <strong>Teaching methodology errors</strong> — suggestions that contradict established ESL pedagogy or that would not work for the age group you are teaching.<br /><br />
              <strong>Factual mistakes</strong> — wrong definitions, incorrect grammar explanations, or made-up statistics presented as real.<br /><br />
              <strong>Inappropriate content</strong> — material that might be culturally insensitive or unsuitable for young learners, generated without any awareness of context.
            </p>
          </div>

          <p>This is not a reason to stop using AI. It is a reason to <strong>never use AI as your only source.</strong></p>

          <hr className="divider-ai" />

          <h2 className="section-heading-ai">Your students are using AI too.</h2>

          <p>Your students — especially older learners and adult professionals — are using AI tools to complete their English practice, write assignments, and translate content. Some are using it responsibly. Some are using it to avoid doing the work entirely.</p>

          <p>As their teacher, you are one of the most important models they have for what responsible AI use looks like. <em>How you use AI teaches them how to use AI.</em> If they see you generating content without questioning it, they will do the same. If they see you cross-checking, thinking critically, and staying curious — that is what they will learn.</p>

          <div className="highlight-box-ai">
            <p><strong>Your job is not just to teach English. It is to teach your students how to think.</strong> In an AI-saturated world, that means teaching them to question information, verify sources, and use tools as helpers — not as authorities.</p>
          </div>

          <hr className="divider-ai" />

          <h2 className="section-heading-ai">The six rules of responsible AI use in your classroom</h2>

          <div className="rule-list-ai">
            <div className="rule-item-ai">
              <div className="rule-num-ai">1</div>
              <div className="rule-body-ai">
                <div className="rule-title-ai">Always verify what AI gives you</div>
                <div className="rule-desc-ai">Before you use any AI-generated content in a lesson — a fact, a cultural reference, an explanation — cross-check it with at least one non-AI source. <strong>A textbook, a credible website, a native speaker, your own knowledge.</strong> AI is your starting point, not your final answer.</div>
              </div>
            </div>

            <div className="rule-item-ai">
              <div className="rule-num-ai">2</div>
              <div className="rule-body-ai">
                <div className="rule-title-ai">Use AI for repetitive tasks, not for thinking</div>
                <div className="rule-desc-ai">AI is brilliant at repetitive, time-consuming tasks — formatting lesson plans, generating word lists, creating quiz templates, drafting email structures. <strong>These are the tasks that drain your time without requiring your expertise.</strong> Your thinking, your lesson design, your student relationships — those stay with you.</div>
              </div>
            </div>

            <div className="rule-item-ai">
              <div className="rule-num-ai">3</div>
              <div className="rule-body-ai">
                <div className="rule-title-ai">Never let AI drive the lesson</div>
                <div className="rule-desc-ai">You decide what your student needs. You decide the pace, the tone, the direction. AI gives you options — <strong>you choose what fits.</strong> A lesson plan generated by AI is a draft. Your professional judgment is the final edit.</div>
              </div>
            </div>

            <div className="rule-item-ai">
              <div className="rule-num-ai">4</div>
              <div className="rule-body-ai">
                <div className="rule-title-ai">Be especially careful with cultural content</div>
                <div className="rule-desc-ai">AI is trained on enormous amounts of internet data — and the internet contains a lot of stereotypes, outdated information, and assumptions. <strong>Always apply your own cultural awareness</strong> before using AI-generated cultural references, examples, or teaching strategies in your classes.</div>
              </div>
            </div>

            <div className="rule-item-ai">
              <div className="rule-num-ai">5</div>
              <div className="rule-body-ai">
                <div className="rule-title-ai">Do not become over-reliant on AI</div>
                <div className="rule-desc-ai">The more you lean on AI for everything, the weaker your own teaching instincts become. Use it strategically — <strong>as a time-saving assistant, not as a crutch.</strong> The day AI is unavailable or gives you bad output, you need to be able to teach without it. And you need to know when it is giving you bad output in the first place.</div>
              </div>
            </div>

            <div className="rule-item-ai">
              <div className="rule-num-ai">6</div>
              <div className="rule-body-ai">
                <div className="rule-title-ai">Be transparent with your students about AI</div>
                <div className="rule-desc-ai">If you use an AI-generated song, image, or activity in class — you do not need to hide it. Acknowledge it. <strong>Show your students that AI is a tool professionals use thoughtfully.</strong> This models the right relationship with technology: curious, critical, and in control.</div>
              </div>
            </div>
          </div>

          <hr className="divider-ai" />

          <h2 className="section-heading-ai">What responsible AI use actually looks like</h2>

          <p>Here is the difference in practice:</p>

          <div className="warning-box-ai">
            <div className="warning-label-ai">❌ What irresponsible AI use looks like</div>
            <p>You ask ChatGPT to write a lesson about a cultural topic. It gives you something. You copy it directly into your class without reading it carefully. One of the cultural references is inaccurate. Your student notices. You lose credibility in that moment.</p>
          </div>

          <div className="highlight-box-ai">
            <p><strong>✓ What responsible AI use looks like</strong><br /><br />
            You ask ChatGPT to draft a lesson about a cultural topic. You read it carefully. You notice one reference that does not feel right. You look it up. You correct it. You add a personal question for your student — "What does your family do to celebrate?" — because AI cannot know that. You arrive to class prepared, accurate, and genuinely curious about your student's experience.</p>
          </div>

          <p>That is the difference. Not whether you use AI — but <em>how consciously you use it.</em></p>

          <hr className="divider-ai" />

          <h2 className="section-heading-ai">A note on your students using AI</h2>

          <p>You will have students who use AI to complete their English assignments. Some will use it to translate entire sentences instead of constructing them. Some will use it to write paragraphs and pass them off as their own work.</p>

          <p>Rather than banning AI — which is nearly impossible to enforce — <strong>design your lessons so that AI cannot replace the student's participation.</strong> Ask questions that require their personal opinion, their family's story, their specific experience. Have them speak, not type. Record voice notes. React in real time.</p>

          <p>AI cannot tell you what your student's favourite memory is. AI cannot perform in a live conversation. Build your lessons around those things.</p>

          <div className="callout-ai">
            <p>Before you move on: <em>What is one habit you will commit to that ensures you are using AI responsibly in your teaching?</em> Write it down. Put it somewhere you will see it before every class. That commitment is what separates a thoughtful teacher from one who has outsourced their judgment to a machine.</p>
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
