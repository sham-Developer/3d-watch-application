import { useState } from 'react';
import { CasePanel } from './panels/CasePanel';
import { StrapPanel } from './panels/StrapPanel';
import { DialPanel } from './panels/DialPanel';
import { useWatchStore } from '../../store/watchStore';

type Tab = 'case' | 'strap' | 'dial';

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'case', label: 'Case', icon: '⬡' },
  { id: 'strap', label: 'Strap', icon: '—' },
  { id: 'dial', label: 'Dial', icon: '◎' },
];

export function Sidebar() {
  const [activeTab, setActiveTab] = useState<Tab>('case');
  const { resetConfig } = useWatchStore();

  return (
    <aside className="w-72 h-full bg-zinc-900/90 backdrop-blur-sm border-l border-white/10 flex flex-col">
      {/* Tab bar */}
      <div className="flex border-b border-white/10">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex-1 py-3 text-xs font-medium tracking-wider uppercase transition-colors
              ${activeTab === tab.id
                ? 'text-white border-b-2 border-white'
                : 'text-zinc-500 hover:text-zinc-300'
              }
            `}
          >
            <span className="block text-base mb-0.5">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Panel content */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'case' && <CasePanel />}
        {activeTab === 'strap' && <StrapPanel />}
        {activeTab === 'dial' && <DialPanel />}
      </div>

      {/* Reset button */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={resetConfig}
          className="w-full py-2 text-sm text-zinc-400 border border-white/10 rounded-lg hover:border-white/30 hover:text-white transition-all"
        >
          Reset to Default
        </button>
      </div>
    </aside>
  );
}
