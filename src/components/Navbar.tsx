import { Tab } from '../App';

interface NavbarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const tabs: { id: Tab; label: string }[] = [
    { id: 'home', label: '首页' },
    { id: 'about', label: '关于我' },
    { id: 'articles', label: '和我对话' },
    { id: 'works', label: '我的作品' },
    { id: 'hobbies', label: '我的爱好' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl bg-white border-2 border-black rounded-full px-6 py-2 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center justify-center gap-1 sm:gap-2">
        <div className="hidden sm:flex items-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`nav-pill text-sm ${
                activeTab === tab.id
                  ? 'bg-black text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="sm:hidden flex items-center">
             <button
              onClick={() => onTabChange(activeTab)}
              className="nav-pill text-sm bg-black text-white"
            >
               {tabs.find(t => t.id === activeTab)?.label}
            </button>
        </div>
      </div>

    </nav>
  );
}
