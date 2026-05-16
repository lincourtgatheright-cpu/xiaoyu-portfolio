import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import HomeSection from './components/sections/Home';
import AboutSection from './components/sections/About';
import ArticlesSection from './components/sections/Articles';
import WorksSection from './components/sections/Works';
import HobbiesSection from './components/sections/Hobbies';

export type Tab = 'home' | 'about' | 'articles' | 'works' | 'hobbies';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const renderSection = () => {
    switch (activeTab) {
      case 'home': return <HomeSection />;
      case 'about': return <AboutSection />;
      case 'articles': return <ArticlesSection />;
      case 'works': return <WorksSection />;
      case 'hobbies': return <HobbiesSection />;
      default: return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen pb-20 pt-10 px-4 md:px-8">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="max-w-7xl mx-auto mt-12 md:mt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

