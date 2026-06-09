import { useEffect } from 'react';
import { logo } from '../assets';

interface PortfolioLessonProps {
  onComplete: () => void;
}

export function PortfolioLesson({ onComplete }: PortfolioLessonProps) {
  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      const progressBar = document.getElementById('portfolio-progress');
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
        .portfolio-lesson {
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

        .progress-bar-portfolio {
          height: 3px;
          background: var(--purple-rich);
          position: sticky;
          top: 0;
          z-index: 99;
        }

        .progress-fill-portfolio {
          height: 100%;
          width: 0%;
          background: var(--lime);
          transition: width 0.1s;
        }

        .portfolio-hero {
          background: var(--purple-deep);
          padding: 60px 40px 50px;
          position: relative;
          overflow: hidden;
        }

        .portfolio-hero::before {
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

        .portfolio-lesson p {
          margin-bottom: 1.5rem;
          color: var(--text);
          font-weight: 300;
          line-height: 1.8;
        }

        .portfolio-lesson p em {
          color: var(--purple-deep);
          font-style: normal;
          font-weight: 500;
        }

        .section-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 26px;
          color: var(--purple-deep);
          margin: 3rem 0 1.5rem;
          font-weight: 700;
        }

        .cv-example {
          background: #f8f8f6;
          border: 1px solid #e0ddd8;
          border-radius: 16px;
          padding: 32px 36px;
          margin: 2rem 0;
          position: relative;
        }

        .cv-label {
          position: absolute;
          top: -12px;
          left: 24px;
          background: var(--purple-deep);
          color: var(--blush);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 14px;
          border-radius: 20px;
        }

        .cv-name {
          font-size: 20px;
          font-weight: 500;
          color: var(--text);
          margin-bottom: 4px;
        }

        .cv-sub {
          font-size: 13px;
          color: var(--muted);
          margin-bottom: 16px;
          line-height: 1.6;
        }

        .cv-section-title {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
          margin: 16px 0 8px;
          border-bottom: 1px solid #e0ddd8;
          padding-bottom: 4px;
        }

        .cv-item {
          margin-bottom: 12px;
        }

        .cv-item-title {
          font-size: 14px;
          font-weight: 500;
          color: var(--text);
        }

        .cv-item-date {
          font-size: 12px;
          color: var(--muted);
          margin-bottom: 4px;
        }

        .cv-item-bullet {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.6;
          padding-left: 12px;
          position: relative;
        }

        .cv-item-bullet::before {
          content: '•';
          position: absolute;
          left: 0;
        }

        .missing-tag {
          display: inline-block;
          background: #fff0f0;
          border: 1px solid #ffcdd2;
          color: #c62828;
          font-size: 11px;
          font-weight: 500;
          padding: 2px 10px;
          border-radius: 20px;
          margin-left: 8px;
          vertical-align: middle;
        }

        .present-tag {
          display: inline-block;
          background: #f0fff4;
          border: 1px solid #c8e6c9;
          color: #2e7d32;
          font-size: 11px;
          font-weight: 500;
          padding: 2px 10px;
          border-radius: 20px;
          margin-left: 8px;
          vertical-align: middle;
        }

        .checklist {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin: 2rem 0;
          border: 0.5px solid #e0ddd8;
          border-radius: 16px;
          overflow: hidden;
        }

        .check-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 18px 20px;
          border-bottom: 0.5px solid #e0ddd8;
          background: var(--white);
        }

        .check-item:last-child {
          border-bottom: none;
        }

        .check-item:nth-child(even) {
          background: #fafaf8;
        }

        .check-num {
          min-width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--purple-deep);
          color: var(--lime);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 500;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .check-body {
          flex: 1;
        }

        .check-title {
          font-size: 15px;
          font-weight: 500;
          color: var(--purple-deep);
          margin-bottom: 4px;
        }

        .check-desc {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.65;
          font-weight: 300;
        }

        .check-desc em {
          color: var(--text);
          font-style: normal;
          font-weight: 500;
        }

        .check-example {
          background: var(--purple-deep);
          color: var(--blush);
          border-radius: 8px;
          padding: 10px 14px;
          margin-top: 8px;
          font-size: 13px;
          line-height: 1.6;
          font-style: italic;
          font-weight: 300;
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
          font-size: 15px;
          line-height: 1.75;
        }

        .highlight-box p strong {
          font-weight: 500;
        }

        .compare {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin: 2rem 0;
        }

        .compare-box {
          border-radius: 12px;
          padding: 20px;
        }

        .compare-box.before {
          background: #fff5f5;
          border: 1px solid #ffcdd2;
        }

        .compare-box.after {
          background: #f0fff4;
          border: 1px solid #c8e6c9;
        }

        .compare-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .compare-box.before .compare-label {
          color: #c62828;
        }

        .compare-box.after .compare-label {
          color: #2e7d32;
        }

        .compare-text {
          font-size: 13px;
          line-height: 1.7;
          color: var(--text);
          font-weight: 300;
        }

        .callout {
          background: #f5f5f0;
          border-radius: 16px;
          padding: 28px 32px;
          margin: 3rem 0;
          border: 0.5px solid #e0ddd8;
        }

        .callout p {
          font-size: 15px;
          color: var(--muted);
          margin: 0;
          line-height: 1.75;
        }

        .callout p em {
          color: var(--purple-deep);
          font-style: normal;
          font-weight: 500;
        }

        .divider {
          border: none;
          border-top: 1px solid var(--blush);
          margin: 3rem 0;
        }
      `}</style>

      <div className="portfolio-lesson">
        <div className="progress-bar-portfolio">
          <div className="progress-fill-portfolio" id="portfolio-progress" />
        </div>

        <div className="portfolio-hero">
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--periwinkle)' }}>
              Module 2 — Your First Credential · Reading Material
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
              Building your <em style={{ fontStyle: 'italic', color: 'var(--blush)' }}>teaching portfolio.</em>
            </h1>
            <p className="text-base opacity-80 max-w-lg" style={{ color: 'var(--blush)', fontWeight: 300, lineHeight: 1.6 }}>
              Your CV is the first thing an employer sees before they ever hear your voice. Let's make sure it says everything it needs to say.
            </p>
            <div
              className="inline-flex items-center gap-2 mt-6 text-sm px-4 py-1.5 rounded-full"
              style={{ color: 'var(--periwinkle)', background: 'rgba(102, 103, 171, 0.15)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              10 min read
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-10 py-16">
          <p>I want to show you something honest before we get into what a great teaching CV looks like.</p>

          <p>
            Below is the actual CV I used when I was teaching ESL online. It got me jobs. It worked. But looking at it
            now, I can see clearly what was missing — and what those gaps probably cost me in terms of opportunities I
            never even knew I lost.
          </p>

          <p>Use this as your reference point. Not as something to copy, but as something to learn from.</p>

          <h2 className="section-heading">The CV I used — and what it was missing</h2>

          <div className="cv-example">
            <div className="cv-label">Real example — Debby Vanilla</div>
            <div className="cv-name">Deborah Johnson</div>
            <div className="cv-sub">
              Perry Hill Catford London, SE6 4AD · +44 7477 787111 · contactvanillajohnson@gmail.com
              <br />
              Date of Birth: 15/02/1997 · English Ability: Native Speaker
            </div>

            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>What's here:</span>
              <span className="present-tag">✓ Photo</span>
              <span className="present-tag">✓ TEFL certified</span>
              <span className="present-tag">✓ Teaching experience</span>
              <span className="present-tag">✓ Software skills</span>
              <span className="missing-tag">✗ No profile summary</span>
              <span className="missing-tag">✗ No demo video link</span>
              <span className="missing-tag">✗ No teaching numbers</span>
              <span className="missing-tag">✗ Wrong location</span>
            </div>

            <div className="cv-section-title">Education</div>
            <div className="cv-item">
              <div className="cv-item-title">TEFL Certified — February 2024</div>
              <div className="cv-item-title">Lagos State University of Education</div>
              <div className="cv-item-date">September 2012 – October 2016 · ICT/Mathematics Education (NCE)</div>
            </div>

            <div className="cv-section-title">Teaching Experience</div>
            <div className="cv-item">
              <div className="cv-item-title">TEESAS Education Ltd — Tutor and Instructional Designer</div>
              <div className="cv-item-date">March 2021 – January 2024</div>
              <div className="cv-item-bullet">Teaches English Language and Mathematics both online and in person to K12 learners.</div>
              <div className="cv-item-bullet">Prepares learners for examinations into Catholic, British and Unitary Schools.</div>
              <div className="cv-item-bullet">Recorded a minimum of 50 lessons every month.</div>
            </div>
            <div className="cv-item">
              <div className="cv-item-title">PREPCLASS — Home Tutor</div>
              <div className="cv-item-date">June 2017 – September 2023</div>
              <div className="cv-item-bullet">Teaches English Language to K12 learners.</div>
              <div className="cv-item-bullet">Conversant with British/Cambridge curriculum.</div>
            </div>

            <div className="cv-section-title">Skills & Software</div>
            <div className="cv-item-bullet">Microsoft Office · Zoom · Google Classroom · ClassIn</div>
            <div className="cv-item-bullet">Organizational skills · Copywriting · Effective Communication</div>
          </div>

          <p>
            This CV is not bad. But it is not built for an International ESL employer. It was built for a general teaching job.
            There is a difference — and that difference matters more than most people realize.
          </p>

          <div className="pull-quote">
            <p>
              An employer reviewing twenty CVs in ten minutes needs to know within five seconds whether you are worth
              their time. If your CV does not speak their language, you get skipped — and you never even know it
              happened.
            </p>
          </div>

          <hr className="divider" />

          <h2 className="section-heading">What a strong ESL teaching portfolio actually needs</h2>

          <p>
            Here is the complete checklist. Go through every item. Build your CV around this structure. And do not move
            on to applying until every box is ticked.
          </p>

          <div className="checklist">
            {[
              {
                num: 1,
                title: 'A professional profile summary',
                desc: 'This is the first thing the employer reads. Two to three sentences that tell them immediately who you are, what you teach, who you teach it to, and what makes you different. Not a list of adjectives. A real human statement.',
                example: '"Experienced ESL teacher with 6+ years teaching English to K12 learners online and in person. TEFL certified. Specializing in building confidence and fluency in young learners aged 4–12. Conversant with ClassIn, Zoom, and Google Classroom."',
              },
              {
                num: 2,
                title: 'A professional photo',
                desc: 'Clear, well-lit, smiling, professional background. International ESL employers and parents place high value on warmth and approachability. Your photo is doing a job before you say a single word. Do not use a casual selfie. Do not use a group photo cropped. Treat it like a passport photo — but with energy.',
                example: null,
              },
              {
                num: 3,
                title: 'Your TEFL certification — prominently placed',
                desc: 'Do not bury this. It should appear near the top, clearly labelled with the issuing body and date. If you completed the 120-hour TeacherRecord TEFL, state that explicitly. Employers need to verify it — make it easy for them.',
                example: 'TEFL/TESOL Certified — 120 Hours (TeacherRecord, February 2024) · Internationally Recognised',
              },
              {
                num: 4,
                title: 'Teaching numbers that prove experience',
                desc: 'Vague experience descriptions do not impress anyone. Numbers do. How many lessons per month? How many students? How many years? If you recorded 50 lessons a month, say so and do the math — that is 600 lessons a year.',
                example: 'Delivered 600+ recorded online lessons annually. Supported 30+ learners in exam preparation for British and Cambridge school entry.',
              },
              {
                num: 5,
                title: 'Specific age ranges taught',
                desc: '"K12 learners" means nothing to an International ESL employer. They want to know: can you handle a 4-year-old? A teenager preparing for exams? A working adult? Break it down. Age specificity builds trust.',
                example: 'Ages taught: 4–6 (early learners), 7–12 (primary), 13–17 (secondary exam prep), adult professionals',
              },
              {
                num: 6,
                title: 'Your intro/demo video link',
                desc: 'This is non-negotiable for International ESL employers. Your video is your voice, your energy, your face — everything the paper cannot show. Add a clearly labelled link directly on your CV. If you do not have one yet, this is your most urgent task after finishing this lesson.',
                example: 'Introduction Video: [your YouTube or Google Drive link here]',
              },
              {
                num: 7,
                title: 'Platform proficiency — specific tools listed',
                desc: 'Do not just write "Zoom." List every platform you know and indicate your comfort level. International ESL employers use ClassIn, VoovMeetings, Zoom, and Google Classroom. The more platforms you list, the more deployable you are.',
                example: 'ClassIn (advanced) · VoovMeetings · Zoom · Google Classroom · Microsoft Teams',
              },
              {
                num: 8,
                title: 'Your teaching approach — in your own words',
                desc: 'What kind of teacher are you? High energy? Patient? Structured? Story-based? Add one or two sentences that describe how you actually teach — not just what subjects. This is what makes you memorable versus forgettable.',
                example: '"My teaching style is warm, structured, and interactive. I use games, songs, and visual aids to keep young learners engaged, and I prioritise building confidence before correcting mistakes."',
              },
              {
                num: 9,
                title: 'Correct contact details for where you actually are',
                desc: 'If you put a UK address but you are teaching from Nigeria, you will confuse employers — or worse, disqualify yourself from opportunities that are open to Nigerian applicants specifically. Use your current location. Be accurate.',
                example: null,
              },
              {
                num: 10,
                title: 'A curriculum vitae — not a job application form',
                desc: 'Your CV should be clean, one to two pages maximum, professionally formatted, easy to scan. No walls of text. No dense paragraphs. Use clear sections, consistent fonts, and enough white space that someone reading it quickly can find what they need. Design matters. First impressions matter.',
                example: null,
              },
            ].map((item) => (
              <div key={item.num} className="check-item">
                <div className="check-num">{item.num}</div>
                <div className="check-body">
                  <div className="check-title">{item.title}</div>
                  <div className="check-desc" dangerouslySetInnerHTML={{ __html: item.desc.replace(/\. /g, '. ').replace(/ /g, ' ') }} />
                  {item.example && <div className="check-example">{item.example}</div>}
                </div>
              </div>
            ))}
          </div>

          <hr className="divider" />

          <h2 className="section-heading">Before and after — the same experience, written differently</h2>

          <p>Here is how the exact same teaching experience can read very differently depending on how you write it.</p>

          <div className="compare">
            <div className="compare-box before">
              <div className="compare-label">❌ Weak version</div>
              <div className="compare-text">
                Teaches English Language to K12 learners. Helps learners with assignments. Prepares learners for
                examinations.
              </div>
            </div>
            <div className="compare-box after">
              <div className="compare-label">✓ Strong version</div>
              <div className="compare-text">
                Delivered 600+ online English lessons annually to learners aged 4–17. Prepared students for entry into
                British, Catholic, and Cambridge schools. Maintained a structured lesson plan for every class session.
              </div>
            </div>
          </div>

          <div className="compare">
            <div className="compare-box before">
              <div className="compare-label">❌ Weak version</div>
              <div className="compare-text">IT Softwares: Zoom, Google Classroom, ClassIn</div>
            </div>
            <div className="compare-box after">
              <div className="compare-label">✓ Strong version</div>
              <div className="compare-text">
                Teaching Platforms: ClassIn (advanced) · VoovMeetings · Zoom (video, whiteboard, breakout rooms) ·
                Google Classroom (assignments, grading, progress tracking)
              </div>
            </div>
          </div>

          <div className="compare">
            <div className="compare-box before">
              <div className="compare-label">❌ Weak version</div>
              <div className="compare-text">
                [No profile summary — employer has no idea who this person is until they read the whole document]
              </div>
            </div>
            <div className="compare-box after">
              <div className="compare-label">✓ Strong version</div>
              <div className="compare-text">
                TEFL-certified English teacher with 6+ years of experience teaching children aged 4–17 online. Warm,
                structured, and interactive teaching style. Proficient in ClassIn, Zoom, and Google Classroom. Demo
                video available.
              </div>
            </div>
          </div>

          <hr className="divider" />

          <h2 className="section-heading">Beyond the CV — your full teaching portfolio</h2>

          <p>
            A portfolio is not just a CV. When you are ready to go beyond the basics, here is what a complete teaching
            portfolio includes:
          </p>

          <div className="highlight-box">
            <p>
              <strong>1. Your CV</strong> — built using everything in the checklist above.
              <br />
              <br />
              <strong>2. Your intro video</strong> — two minutes, professional, warm, well-lit. This is your most
              important asset.
              <br />
              <br />
              <strong>3. Sample lesson plan</strong> — one structured lesson plan that shows an employer you know how to
              prepare, sequence, and deliver a class.
              <br />
              <br />
              <strong>4. Student testimonials or results</strong> — if you have taught before, even informally, ask for a
              written or video testimonial. Evidence of results is gold.
              <br />
              <br />
              <strong>5. Your certificates</strong> — TEFL, any other teaching certifications, your university degree.
              Have digital copies ready to send.
              <br />
              <br />
              <strong>6. A progress tracker sample</strong> — showing an employer that you track student progress proves
              you are serious about outcomes, not just showing up.
            </p>
          </div>

          <div className="callout">
            <p>
              Your assignment: <em>Write your professional profile summary first.</em> Two to three sentences. Who you
              are, what you teach, who you teach it to. That one paragraph will change how employers see everything else
              on your CV.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-end">
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
