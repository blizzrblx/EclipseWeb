import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScriptHub — Roblox Scripts",
  description: "Premium Roblox scripts with key system. Always updated.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
