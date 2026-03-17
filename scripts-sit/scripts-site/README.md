# ScriptHub — Next.js Script Site

A clean, dark-themed script listing site built with Next.js 14, ready to deploy on Vercel.

---

## 🚀 Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Framework preset: **Next.js** (auto-detected)
4. Hit **Deploy** — done!

---

## ✏️ Adding / Editing Scripts

**All script data lives in one file:**

```
src/data/scripts.ts
```

Each script is an object in the array. Just copy an existing entry and change the values:

```ts
{
  id: "my-game",               // unique slug, no spaces
  game: "My Game",             // displayed as the card title
  script: `loadstring(game:HttpGet("https://yoursite.com/script.lua"))()`,
  keyUrl: "https://work.ink/your-key-link",  // set to "" to hide the key section
  description: "Short description shown under the title",
  badge: "NEW",                // "NEW" | "OP" | "FREE" | "UPDATED" | omit for none
},
```

Save the file → Vercel auto-redeploys within ~30 seconds.

---

## 📁 Project Structure

```
src/
  data/
    scripts.ts          ← ✅ Edit THIS to manage all scripts
  app/
    page.tsx            ← Homepage layout
    layout.tsx          ← HTML shell + metadata
    globals.css         ← All styling
  components/
    ScriptCard.tsx      ← Card component (copy + open buttons)
```

---

## 🛠 Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```
