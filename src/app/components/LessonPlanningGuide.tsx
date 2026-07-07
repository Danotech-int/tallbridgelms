import { useEffect, useRef } from 'react';

interface LessonPlanningGuideProps {
  onComplete: () => void;
}

const HTML_CONTENT = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Module 2, Lesson 4 — Lesson Planning Resources | Tall Bridge Institute</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --purple-deep: #210635; --purple-rich: #420D4B; --purple-mid: #7B337E;
    --periwinkle: #6667AB; --blush: #F5D5E0; --lime: #AADD44;
    --white: #FAFAF8; --text: #1a1a2e; --muted: #5a5a7a;
  }
  body { font-family: 'DM Sans', sans-serif; background: var(--white); color: var(--text); line-height: 1.8; font-size: 17px; font-weight: 300; }
  .course-bar { background: var(--purple-deep); padding: 12px 40px; display: flex; align-items: center; justify-content: space-between; font-size: 13px; position: sticky; top: 0; z-index: 100; }
  .brand { font-weight: 500; color: var(--lime); letter-spacing: 0.08em; font-size: 12px; text-transform: uppercase; }
  .lesson-tag { background: rgba(255,255,255,0.1); color: var(--blush); padding: 4px 14px; border-radius: 20px; font-size: 12px; }
  .progress-bar { height: 3px; background: var(--purple-rich); position: sticky; top: 41px; z-index: 99; }
  .progress-fill { height: 100%; width: 0%; background: var(--lime); transition: width 0.1s; }

  .hero { background: var(--purple-deep); padding: 80px 40px 60px; position: relative; overflow: hidden; }
  .hero::before { content: ''; position: absolute; top: -60px; right: -60px; width: 300px; height: 300px; border-radius: 50%; background: var(--purple-rich); opacity: 0.4; }
  .hero::after { content: ''; position: absolute; bottom: -80px; left: 20%; width: 200px; height: 200px; border-radius: 50%; background: var(--purple-mid); opacity: 0.2; }
  .hero-inner { max-width: 720px; margin: 0 auto; position: relative; z-index: 1; }
  .module-label { font-size: 11px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: var(--periwinkle); margin-bottom: 16px; }
  .hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(32px, 5vw, 52px); color: var(--white); line-height: 1.15; margin-bottom: 20px; font-weight: 700; }
  .hero h1 em { font-style: italic; color: var(--blush); }
  .hero-sub { font-size: 16px; color: var(--blush); opacity: 0.8; font-weight: 300; max-width: 520px; line-height: 1.6; }
  .read-time { display: inline-flex; align-items: center; gap: 6px; margin-top: 24px; font-size: 13px; color: var(--periwinkle); background: rgba(102,103,171,0.15); padding: 6px 14px; border-radius: 20px; }

  .content { max-width: 720px; margin: 0 auto; padding: 60px 40px 80px; }
  .content p { margin-bottom: 1.5rem; color: var(--text); font-weight: 300; }
  .content p strong { font-weight: 500; color: var(--purple-deep); }

  .section-heading { font-family: 'Playfair Display', serif; font-size: 26px; color: var(--purple-deep); margin: 3rem 0 1.5rem; font-weight: 700; }
  .divider { border: none; border-top: 1px solid var(--blush); margin: 3rem 0; }

  .resource-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 2rem 0; }
  .resource-card { border: 0.5px solid #e0ddd8; border-radius: 16px; overflow: hidden; transition: box-shadow 0.2s; text-decoration: none; display: block; background: var(--white); }
  .resource-card:hover { box-shadow: 0 4px 20px rgba(33,6,53,0.1); border-color: var(--periwinkle); }
  .resource-header { background: var(--purple-deep); padding: 16px 20px; display: flex; align-items: center; gap: 12px; }
  .resource-icon { font-size: 22px; flex-shrink: 0; }
  .resource-name { font-size: 14px; font-weight: 500; color: var(--white); line-height: 1.3; }
  .resource-url { font-size: 11px; color: var(--lime); opacity: 0.8; margin-top: 2px; font-weight: 300; }
  .resource-body { padding: 14px 18px; }
  .resource-desc { font-size: 13px; color: var(--muted); line-height: 1.6; font-weight: 300; }
  .resource-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
  .rtag { font-size: 10px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; background: rgba(102,103,171,0.1); border: 1px solid rgba(102,103,171,0.2); color: var(--periwinkle); padding: 2px 8px; border-radius: 20px; }
  .rtag.green { background: rgba(170,221,68,0.1); border-color: rgba(170,221,68,0.25); color: #5a7a00; }

  .highlight-box { background: var(--blush); border-radius: 14px; padding: 24px 28px; margin: 2.5rem 0; }
  .highlight-box p { color: var(--purple-deep); font-weight: 400; margin: 0; font-size: 15px; line-height: 1.75; }
  .highlight-box p strong { font-weight: 500; }

  .note-box { background: rgba(102,103,171,0.08); border: 1px solid rgba(102,103,171,0.2); border-radius: 14px; padding: 20px 24px; margin: 2rem 0; }
  .note-label { font-size: 10px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--periwinkle); margin-bottom: 8px; }
  .note-box p { font-size: 14px; color: var(--text); line-height: 1.7; font-weight: 300; margin: 0; }
  .note-box p strong { color: var(--purple-deep); font-weight: 500; }

  .callout { background: #f5f5f0; border-radius: 16px; padding: 26px 30px; margin: 3rem 0; border: 0.5px solid #e0ddd8; }
  .callout p { font-size: 15px; color: var(--muted); margin: 0; line-height: 1.75; }
  .callout p em { color: var(--purple-deep); font-style: normal; font-weight: 500; }

  .step-list { display: flex; flex-direction: column; gap: 0; margin: 1.5rem 0; border: 0.5px solid #e0ddd8; border-radius: 16px; overflow: hidden; }
  .step-item { display: flex; align-items: flex-start; gap: 16px; padding: 18px 22px; border-bottom: 0.5px solid #e0ddd8; background: var(--white); }
  .step-item:last-child { border-bottom: none; }
  .step-item:nth-child(even) { background: #fafaf8; }
  .step-num { min-width: 28px; height: 28px; border-radius: 50%; background: var(--purple-deep); color: var(--lime); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 500; flex-shrink: 0; margin-top: 2px; }
  .step-body { flex: 1; font-size: 14px; color: var(--text); line-height: 1.65; font-weight: 300; }
  .step-body strong { color: var(--purple-deep); font-weight: 500; }

  .nav-footer { background: var(--purple-deep); padding: 40px; display: flex; align-items: center; justify-content: space-between; }
  .nav-footer .prev { font-size: 14px; color: var(--blush); opacity: 0.6; text-decoration: none; }
  .next-btn { background: var(--lime); color: var(--purple-deep); border: none; padding: 14px 32px; border-radius: 30px; font-size: 15px; font-weight: 500; cursor: pointer; font-family: 'DM Sans', sans-serif; transition: transform 0.2s; }
  .next-btn:hover { transform: translateY(-2px); }

  @media (max-width: 640px) {
    .hero { padding: 60px 24px 40px; }
    .content { padding: 40px 24px 60px; }
    .nav-footer { padding: 24px; flex-direction: column; align-items: flex-start; gap: 16px; }
    .course-bar { padding: 12px 20px; }
    .resource-grid { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>

<div class="course-bar">
  <span class="brand">Tall Bridge Institute</span>
  <span class="lesson-tag">Module 2 · Lesson 4 — Lesson Planning Resources</span>
</div>
<div class="progress-bar"><div class="progress-fill" id="progress"></div></div>

<div class="hero">
  <div class="hero-inner">
    <div class="module-label">Module 2 — Teaching the Teacher · Reading Material</div>
    <h1>Where to find your<br><em>lesson materials.</em></h1>
    <p class="hero-sub">You do not have to create every lesson from scratch. There are excellent free resources built specifically for ESL teachers. This lesson shows you exactly where to find them.</p>
    <div class="read-time">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      8 min read
    </div>
  </div>
</div>

<div class="content">

  <p>Before you sit down to plan your first lesson, you need to know where to look. Great lesson materials already exist — for every level, every age group, every topic. Your job is not to reinvent the wheel. Your job is to find the right resource, understand your student's needs, and adapt what already works.</p>

  <p>Below are the best free resources used by ESL teachers around the world. Bookmark the ones that work for you and return to them every time you plan a class.</p>

  <div class="highlight-box">
    <p><strong>How to use these resources:</strong> First, identify your student's level (beginner, elementary, intermediate, advanced). Then pick a topic or skill (vocabulary, grammar, reading, speaking, pronunciation). Then find a lesson or worksheet that matches. Adapt where needed — add your own questions, change the examples to match your student's interests, simplify or extend the difficulty.</p>
  </div>

  <hr class="divider">

  <h2 class="section-heading">Lesson planning and full lesson resources</h2>
  <p>These platforms give you complete, ready-to-teach lesson plans. Filter by level, topic, and age group.</p>

  <div class="resource-grid">

    <a href="https://www.englishclub.com/teach-english.htm" target="_blank" class="resource-card">
      <div class="resource-header">
        <span class="resource-icon">🌐</span>
        <div>
          <div class="resource-name">English Club</div>
          <div class="resource-url">englishclub.com</div>
        </div>
      </div>
      <div class="resource-body">
        <div class="resource-desc">One of the most comprehensive free ESL teaching hubs. Lesson plans, worksheets, games, pronunciation guides, grammar resources, and a teacher discussion forum — all free.</div>
        <div class="resource-tags"><span class="rtag green">Free</span><span class="rtag">All levels</span><span class="rtag">Grammar</span><span class="rtag">Speaking</span></div>
      </div>
    </a>

    <a href="https://www.tefl.net/esl-lesson-plans/" target="_blank" class="resource-card">
      <div class="resource-header">
        <span class="resource-icon">📋</span>
        <div>
          <div class="resource-name">TEFL.net Lesson Plans</div>
          <div class="resource-url">tefl.net/esl-lesson-plans</div>
        </div>
      </div>
      <div class="resource-body">
        <div class="resource-desc">Ready-to-teach ESL lesson plans organised by topic and level. Includes worksheets, talking point activities, and skill-based exercises written by qualified teachers.</div>
        <div class="resource-tags"><span class="rtag green">Free</span><span class="rtag">All levels</span><span class="rtag">Ready to teach</span></div>
      </div>
    </a>

    <a href="https://www.usingenglish.com/lesson-plans.html" target="_blank" class="resource-card">
      <div class="resource-header">
        <span class="resource-icon">📄</span>
        <div>
          <div class="resource-name">Using English</div>
          <div class="resource-url">usingenglish.com</div>
        </div>
      </div>
      <div class="resource-body">
        <div class="resource-desc">Downloadable PDF lesson plans and handouts for all levels — beginner through advanced. Includes reading, writing, grammar, and listening activities with teacher notes.</div>
        <div class="resource-tags"><span class="rtag green">Free</span><span class="rtag">PDF downloads</span><span class="rtag">All levels</span></div>
      </div>
    </a>

    <a href="https://www.handoutsonline.com/" target="_blank" class="resource-card">
      <div class="resource-header">
        <span class="resource-icon">🖨️</span>
        <div>
          <div class="resource-name">Handouts Online</div>
          <div class="resource-url">handoutsonline.com</div>
        </div>
      </div>
      <div class="resource-body">
        <div class="resource-desc">Over 300 ready-to-use English worksheets for ESL and TEFL teachers. Covers conversation builders, grammar, crosswords, flashcards, and games — all professionally presented.</div>
        <div class="resource-tags"><span class="rtag">Free samples</span><span class="rtag">Worksheets</span><span class="rtag">Games</span></div>
      </div>
    </a>

    <a href="https://www.eslflow.com/pronunciationlessonplans.html" target="_blank" class="resource-card">
      <div class="resource-header">
        <span class="resource-icon">🗣️</span>
        <div>
          <div class="resource-name">ESL Flow</div>
          <div class="resource-url">eslflow.com</div>
        </div>
      </div>
      <div class="resource-body">
        <div class="resource-desc">Excellent for pronunciation, word stress, and reading lesson plans. Has a specific pronunciation section covering word stress patterns, syllables, and phonics — great for ESL teachers.</div>
        <div class="resource-tags"><span class="rtag green">Free</span><span class="rtag">Pronunciation</span><span class="rtag">Reading</span></div>
      </div>
    </a>

    <a href="https://www.esl-galaxy.com/" target="_blank" class="resource-card">
      <div class="resource-header">
        <span class="resource-icon">🌟</span>
        <div>
          <div class="resource-name">ESL Galaxy</div>
          <div class="resource-url">esl-galaxy.com</div>
        </div>
      </div>
      <div class="resource-body">
        <div class="resource-desc">Over 2,300 free printable worksheets for ESL lesson plans. Includes board games, vocabulary activities, grammar exercises, songs, and themed lesson plans.</div>
        <div class="resource-tags"><span class="rtag green">Free</span><span class="rtag">2300+ worksheets</span><span class="rtag">Games</span></div>
      </div>
    </a>

  </div>

  <hr class="divider">

  <h2 class="section-heading">Resources for teaching children</h2>
  <p>If you are teaching young learners — ages 4 to 12 — these platforms are built specifically for that age group.</p>

  <div class="resource-grid">

    <a href="https://www.esl4kids.net/" target="_blank" class="resource-card">
      <div class="resource-header">
        <span class="resource-icon">🧒</span>
        <div>
          <div class="resource-name">The EFL Playhouse</div>
          <div class="resource-url">esl4kids.net</div>
        </div>
      </div>
      <div class="resource-body">
        <div class="resource-desc">Built specifically for teaching English to children. Songs, games, worksheets, flashcards, and lesson plans designed for young learners aged 4 to 12.</div>
        <div class="resource-tags"><span class="rtag green">Free</span><span class="rtag">Ages 4–12</span><span class="rtag">Songs &amp; games</span></div>
      </div>
    </a>

    <a href="https://www.teachchildrenesl.com/" target="_blank" class="resource-card">
      <div class="resource-header">
        <span class="resource-icon">🎨</span>
        <div>
          <div class="resource-name">Teach Children ESL</div>
          <div class="resource-url">teachchildrenesl.com</div>
        </div>
      </div>
      <div class="resource-body">
        <div class="resource-desc">Flashcards, worksheets, and lesson activities designed for young English learners. Covers alphabet, phonics, numbers, colours, animals, and more.</div>
        <div class="resource-tags"><span class="rtag green">Free</span><span class="rtag">Young learners</span><span class="rtag">Flashcards</span></div>
      </div>
    </a>

    <a href="https://www.englishavenue.com/" target="_blank" class="resource-card">
      <div class="resource-header">
        <span class="resource-icon">🏙️</span>
        <div>
          <div class="resource-name">English Avenue</div>
          <div class="resource-url">englishavenue.com</div>
        </div>
      </div>
      <div class="resource-body">
        <div class="resource-desc">An interactive learning platform for children with games, phonics, grammar, and reading activities. Great to share with students for practice between sessions.</div>
        <div class="resource-tags"><span class="rtag green">Free</span><span class="rtag">Interactive</span><span class="rtag">Kids</span></div>
      </div>
    </a>

    <a href="https://breakingnewsenglish.com/" target="_blank" class="resource-card">
      <div class="resource-header">
        <span class="resource-icon">📰</span>
        <div>
          <div class="resource-name">Breaking News English</div>
          <div class="resource-url">breakingnewsenglish.com</div>
        </div>
      </div>
      <div class="resource-body">
        <div class="resource-desc">Current news articles adapted into ESL reading and listening lessons at 7 different levels. Great for older learners and adult professionals who want real-world content.</div>
        <div class="resource-tags"><span class="rtag green">Free</span><span class="rtag">Adults &amp; teens</span><span class="rtag">7 levels</span></div>
      </div>
    </a>

  </div>

  <hr class="divider">

  <h2 class="section-heading">Pronunciation and grammar tools</h2>
  <p>These are specialised resources for two of the areas your students will need most — how to say words correctly, and how to use grammar accurately.</p>

  <div class="resource-grid">

    <a href="https://iteslj.org/links/" target="_blank" class="resource-card">
      <div class="resource-header">
        <span class="resource-icon">🔗</span>
        <div>
          <div class="resource-name">Internet TESL Journal</div>
          <div class="resource-url">iteslj.org/links</div>
        </div>
      </div>
      <div class="resource-body">
        <div class="resource-desc">A comprehensive directory of ESL teaching links organised by skill — grammar, pronunciation, listening, reading, vocabulary, writing, and more. Hundreds of resources in one place.</div>
        <div class="resource-tags"><span class="rtag green">Free</span><span class="rtag">All skills</span><span class="rtag">Directory</span></div>
      </div>
    </a>

    <a href="https://www.eslbrains.com" target="_blank" class="resource-card">
      <div class="resource-header">
        <span class="resource-icon">🧠</span>
        <div>
          <div class="resource-name">ESL Brains</div>
          <div class="resource-url">eslbrains.com</div>
        </div>
      </div>
      <div class="resource-body">
        <div class="resource-desc">Modern, engaging ESL lesson plans for adult and teenage learners. Covers body language, communication skills, and real-world topics with video-based lessons and worksheets.</div>
        <div class="resource-tags"><span class="rtag green">Free tier</span><span class="rtag">Adults &amp; teens</span><span class="rtag">Video-based</span></div>
      </div>
    </a>

    <a href="https://www.englishclub.com/esl-lesson-plans/" target="_blank" class="resource-card">
      <div class="resource-header">
        <span class="resource-icon">🎯</span>
        <div>
          <div class="resource-name">English Club Lesson Plans</div>
          <div class="resource-url">englishclub.com/esl-lesson-plans</div>
        </div>
      </div>
      <div class="resource-body">
        <div class="resource-desc">Ready-made lesson plans with activities and ideas for any class. Includes topic-based lessons, games, warmers, and discussion activities at different levels.</div>
        <div class="resource-tags"><span class="rtag green">Free</span><span class="rtag">All levels</span><span class="rtag">Ready to teach</span></div>
      </div>
    </a>

    <a href="https://www.eslpartyland.com/teach3.htm" target="_blank" class="resource-card">
      <div class="resource-header">
        <span class="resource-icon">🎉</span>
        <div>
          <div class="resource-name">Karin's ESL Party Land</div>
          <div class="resource-url">eslpartyland.com</div>
        </div>
      </div>
      <div class="resource-body">
        <div class="resource-desc">Resources for teaching conversation, grammar, listening, speaking, reading, and writing. Also includes teaching with film, video, music, and the internet.</div>
        <div class="resource-tags"><span class="rtag green">Free</span><span class="rtag">Conversation</span><span class="rtag">Multimedia</span></div>
      </div>
    </a>

  </div>

  <hr class="divider">

  <h2 class="section-heading">How to use these resources well</h2>

  <div class="step-list">
    <div class="step-item">
      <div class="step-num">1</div>
      <div class="step-body"><strong>Know your student's level first.</strong> Beginner, elementary, intermediate, upper-intermediate, or advanced. Every resource on this list is organised by level — start there before anything else.</div>
    </div>
    <div class="step-item">
      <div class="step-num">2</div>
      <div class="step-body"><strong>Match the resource to the goal.</strong> Is this class about speaking? Reading? Grammar? Pronunciation? Pick one focus per session — trying to cover everything in one class leaves students overwhelmed and you scattered.</div>
    </div>
    <div class="step-item">
      <div class="step-num">3</div>
      <div class="step-body"><strong>Personalise before you teach it.</strong> The best teachers never use a resource exactly as found. They swap generic examples for ones relevant to their specific student. If your student loves football — use football vocabulary. If they are preparing for school — use school-based examples.</div>
    </div>
    <div class="step-item">
      <div class="step-num">4</div>
      <div class="step-body"><strong>Use AI to fill the gaps.</strong> If you find a resource that covers 80% of what you need, ask ChatGPT or MagicSchool AI to generate the missing 20%. You do not have to build from scratch or settle for something that almost fits.</div>
    </div>
    <div class="step-item">
      <div class="step-num">5</div>
      <div class="step-body"><strong>Save what works.</strong> Create a simple folder — on Google Drive or Notion — where you keep your best lesson resources organised by level and topic. Every time you find something good, save it. Over time you will build a personal library that makes lesson planning take minutes instead of hours.</div>
    </div>
  </div>

  <div class="note-box">
    <div class="note-label">📌 Remember</div>
    <p>Every resource on this page is free or has a generous free tier. You do not need to spend money on lesson materials when you are starting out. <strong>Build your resource library slowly, test what works with your students, and let your teaching experience guide what you keep coming back to.</strong></p>
  </div>

  <div class="callout">
    <p>Your assignment: <em>Visit at least three of the resources on this page today. Find one lesson or worksheet that matches a beginner student at the elementary level. Save the link. Come to your live session ready to discuss how you would use it in a real class.</em></p>
  </div>

</div>

<div class="nav-footer">
  <a href="#" class="prev">← Back to Lesson 3</a>
  <button class="next-btn" onclick="window.parent.postMessage('lesson-complete', '*')">Mark as Complete →</button>
</div>

<script>
  window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById('progress').style.width = progress + '%';
  });
</script>
</body>
</html>`;

export function LessonPlanningGuide({ onComplete }: LessonPlanningGuideProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (event.data === 'lesson-complete') {
        onComplete();
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [onComplete]);

  return (
    <div className="w-full" style={{ height: '100vh' }}>
      <iframe
        ref={iframeRef}
        srcDoc={HTML_CONTENT}
        title="Module 2 Lesson 4 — Lesson Planning Resources"
        className="w-full h-full border-0 block"
        sandbox="allow-scripts allow-popups allow-same-origin"
      />
    </div>
  );
}
