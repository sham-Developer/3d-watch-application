export function Header() {
  return (
    <header className="h-14 flex items-center justify-between px-6 border-b border-white/10 bg-zinc-900/80 backdrop-blur-sm z-10">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full border-2 border-white/40 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white/60" />
        </div>
        <span className="text-sm font-semibold tracking-widest uppercase text-white/90">
          Chrono Studio
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button className="px-4 py-1.5 text-xs text-zinc-400 border border-white/10 rounded-full hover:border-white/30 hover:text-white transition-all">
          Share
        </button>
        <button className="px-4 py-1.5 text-xs text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all">
          Save Config
        </button>
      </div>
    </header>
  );
}
