# /public/pdfs/

Drop PDF files here.
Reference them in the app as `/pdfs/filename.pdf`.

To embed a PDF in a lesson, replace the placeholder content in LessonViewer.tsx with:
  <iframe src="/pdfs/filename.pdf" className="w-full h-[700px] rounded-lg border-0" title="Lesson PDF" />

To offer a download link instead:
  <a href="/pdfs/filename.pdf" download>Download PDF</a>

## Expected files

| Lesson | File |
|--------|------|
| Mod 2 · Lesson Planning Guide (1-6) | mod2-lesson-planning-guide.pdf |
| Mod 5 · Setting Up Your Profile (4-2) | mod5-setting-up-your-profile.pdf |
