# /public/audio/

Drop self-hosted audio files here (MP3).
Reference them in the app as `/audio/filename.mp3`.

To wire up an audio lesson, replace the placeholder Play button in LessonViewer.tsx
(or inside the relevant component) with:
  <audio controls src="/audio/filename.mp3" className="w-full rounded-lg" />

## Expected files

| Lesson | File |
|--------|------|
| Mod 1 · Reflection Exercise (0-3) | mod1-reflection-exercise.mp3 |
| Mod 2 · Communication — Vocal Delivery & Articulation (1-4) | mod2-vocal-delivery.mp3 |
| Mod 3 · Future of AI in Teaching (2-3) | mod3-future-of-ai.mp3 |
| Mod 6 · Managing My Mind & Social Life (5-2) | mod6-managing-my-mind.mp3 |
