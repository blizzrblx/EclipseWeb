import ScriptCard from "@/components/ScriptCard";
import scripts from "@/data/scripts";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="header-glow" />
        <div className="header-content">
          <div className="logo-mark">⬡</div>
          <h1 className="site-title">ScriptHub</h1>
          <p className="site-subtitle">
            Premium Roblox scripts — grab your key, execute, dominate.
          </p>
          <div className="stat-bar">
            <span className="stat">{scripts.length} Scripts</span>
            <span className="divider">·</span>
            <span className="stat">Always Updated</span>
            <span className="divider">·</span>
            <span className="stat">Free to Use</span>
          </div>
        </div>
      </header>

      <section className="scripts-grid">
        {scripts.map((s) => (
          <ScriptCard key={s.id} script={s} />
        ))}
      </section>

      <footer className="site-footer">
        <p>ScriptHub · For educational purposes only</p>
      </footer>
    </main>
  );
}
