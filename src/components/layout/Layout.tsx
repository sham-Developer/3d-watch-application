import { Header } from './Header';
import { WatchViewer } from '../viewer/WatchViewer';
import { Sidebar } from '../ui/Sidebar';

export function Layout() {
  return (
    <div className="h-screen flex flex-col bg-zinc-950 text-white">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        <main className="flex-1 relative">
          <WatchViewer />
        </main>
        <Sidebar />
      </div>
    </div>
  );
}
