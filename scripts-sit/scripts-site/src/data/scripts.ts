// ============================================================
//  SCRIPTS DATA — edit this file to add, remove, or update scripts
// ============================================================
//
//  Each entry in the array becomes one card on the homepage.
//
//  Fields:
//    id          — unique slug (no spaces)
//    game        — game name shown as the card title
//    script      — the full loadstring / code users will copy
//    keyUrl      — your work.ink key link (or "" to hide the key button)
//    description — optional one-liner shown under the game name
//    badge       — optional label like "NEW", "UPDATED", "OP", etc.
//
// ============================================================

export interface Script {
  id: string;
  game: string;
  script: string;
  keyUrl: string;
  description?: string;
  badge?: string;
}

const scripts: Script[] = [
  {
    id: "eclipse",
    game: "Eclipse",
    script: `loadstring(game:HttpGet("https://example.com/eclipse.lua"))()`,
    keyUrl: "https://work.ink/your-eclipse-key-link",
    description: "Full auto-farm & ESP",
    badge: "NEW",
  },
  {
    id: "blox-fruits",
    game: "Blox Fruits",
    script: `loadstring(game:HttpGet("https://example.com/bloxfruits.lua"))()`,
    keyUrl: "https://work.ink/your-bloxfruits-key-link",
    description: "Auto-farm, raid helper & more",
    badge: "OP",
  },
  {
    id: "pet-simulator",
    game: "Pet Simulator X",
    script: `loadstring(game:HttpGet("https://example.com/petsimu.lua"))()`,
    keyUrl: "https://work.ink/your-petsim-key-link",
    description: "Auto-hatch & coin collector",
  },
  {
    id: "doors",
    game: "Doors",
    script: `loadstring(game:HttpGet("https://example.com/doors.lua"))()`,
    keyUrl: "",
    description: "Entity ESP & door skip",
    badge: "FREE",
  },
];

export default scripts;
