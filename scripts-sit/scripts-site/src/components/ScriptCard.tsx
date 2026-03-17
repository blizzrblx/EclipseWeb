"use client";

import { useState } from "react";
import type { Script } from "@/data/scripts";

const BADGE_COLORS: Record<string, string> = {
  NEW: "badge-new",
  OP: "badge-op",
  FREE: "badge-free",
  UPDATED: "badge-updated",
};

export default function ScriptCard({ script }: { script: Script }) {
  const [scriptCopied, setScriptCopied] = useState(false);
  const [keyCopied, setKeyCopied] = useState(false);

  const copy = async (text: string, type: "script" | "key") => {
    await navigator.clipboard.writeText(text);
    if (type === "script") {
      setScriptCopied(true);
      setTimeout(() => setScriptCopied(false), 2000);
    } else {
      setKeyCopied(true);
      setTimeout(() => setKeyCopied(false), 2000);
    }
  };

  return (
    <div className="script-card">
      <div className="card-header">
        <h2 className="game-title">{script.game}</h2>
        {script.badge && (
          <span className={`badge ${BADGE_COLORS[script.badge] ?? "badge-new"}`}>
            {script.badge}
          </span>
        )}
      </div>

      {script.description && (
        <p className="game-description">{script.description}</p>
      )}

      <div className="card-section">
        <span className="section-label">Get Script</span>
        <div className="code-row">
          <code className="code-block">{script.script}</code>
          <button
            className={`copy-btn ${scriptCopied ? "copied" : ""}`}
            onClick={() => copy(script.script, "script")}
            aria-label="Copy script"
          >
            {scriptCopied ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
            <span>{scriptCopied ? "Copied!" : "Copy"}</span>
          </button>
        </div>
      </div>

      {script.keyUrl && (
        <div className="card-section">
          <span className="section-label">Get Key</span>
          <div className="code-row">
            <code className="code-block key-url">{script.keyUrl}</code>
            <a
              href={script.keyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="copy-btn key-link-btn"
              aria-label="Open key link"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              <span>Open</span>
            </a>
            <button
              className={`copy-btn ${keyCopied ? "copied" : ""}`}
              onClick={() => copy(script.keyUrl, "key")}
              aria-label="Copy key URL"
            >
              {keyCopied ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
              <span>{keyCopied ? "Copied!" : "Copy"}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
