/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "nelll",
  photo: "./img/nell.jpeg",       // Place your photo in the img/ folder
  music: "./music/hbd.mp3",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#60a5fa",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Uyyy",
      subtitle: "sesuai reqwesttt -_-"
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "Selamat ulang taunnn!! :D",
    },
    {
      type: "chatbox",
      message:
        "barakallah fii umrik ya nell, Semoga semua yang lagii kamu hadapin perlahan membaik dan semesta ngebales semua ketulusan serta perjuangan kamu dengan banyak kebahagiaan",
      buttonText: "Send",
    },
    {
      type: "ideas",
      lines: [
        "jujur bingung mau ngucapin apa atau gmn",
        "aing tau walaupun keliatan diluarnya kaya happy atau seneng2 aja tpi ttp adaa bagian vulnerable yng ga diliat orang",
        "kaya akhir2 ini yg mngkin sebenernya lagi ga gampang",
        "aing harap sia ttp inget kalo sia itu orang yang kuat, luar biasa, & <strong>spesial</strong>",
        "ngapa jadi sedih2an gini dah blay wkwk, intinya selamt ulang taun yakk<span>:)</span>",
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "‘blue’ is a song about missing friends. A lot of shit happened this year, and I realized that the only thing I really wanted to do was to share it with people who aren’t with me anymore. It’s not even that we’re far away from each other. We just lose track of keeping in touch because we all have our own lives going on.The ‘move on with the seasons’ line still kinda guts me when I read it.",
      author: "keshi",
      count: 1000,
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday!",
      wishText: "doain jga yh semoga aing jga bisa nyusul kesana wkwk, kasi tau tmpat2 yng seru dijepang",
       wishText: "foto legend btw"
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "done yak 😎",
      replayText: "Or click, if you want to watch it again.",
    },
  ],
};
