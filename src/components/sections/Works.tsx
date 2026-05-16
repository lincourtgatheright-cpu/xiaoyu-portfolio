import { Layout, Smartphone, Palette, Globe, Megaphone, Zap } from 'lucide-react';

const WORKS = [
  {
    title: "网页设计",
    description: "创建响应迅速且引人入胜的网站，将访问者转化为忠实客户。",
    icon: <Layout className="w-8 h-8" />,
    color: "bg-blue-100",
    accent: "bg-brand-blue"
  },
  {
    title: "UI/UX 设计",
    description: "为网页和移动应用设计直观的用户界面和无缝体验。",
    icon: <Smartphone className="w-8 h-8" />,
    color: "bg-red-100",
    accent: "bg-brand-red"
  },
  {
    title: "品牌识别",
    description: "开发统一的视觉形象，包括 Logo、配色方案和品牌指南。",
    icon: <Palette className="w-8 h-8" />,
    color: "bg-yellow-100",
    accent: "bg-yellow-400"
  },
  {
    title: "全栈开发",
    description: "使用现代 Web 技术构建强大的后端和动态前端。",
    icon: <Globe className="w-8 h-8" />,
    color: "bg-gray-100",
    accent: "bg-black"
  }
];

export default function WorksSection() {
  return (
    <div className="py-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold">广泛的 <span className="block-highlight-red">服务领域</span></h2>
        <p className="mt-4 text-gray-600">通过精准的执行和多学科的创意卓越，将您的想法变为现实。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {WORKS.map((work, idx) => (
          <div key={idx} className="thick-card flex flex-col p-6 hover:shadow-[12px_12px_0px_0px_rgba(26,26,26,0.1)] group">
            <div className={`w-16 h-16 rounded-2xl border-2 border-black ${work.color} flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 transition-transform`}>
              {work.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{work.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {work.description}
            </p>
            <div className="mt-auto pt-4 border-t border-black/10 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">0{idx + 1}</span>
              <div className={`w-2 h-2 rounded-full ${work.accent}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 thick-card bg-brand-dark p-12 text-center text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red opacity-20 blur-3xl" />
         <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-blue opacity-20 blur-3xl" />
         
         <h3 className="text-3xl font-bold mb-4">有合作意向？</h3>
         <p className="text-gray-400 mb-8 max-w-lg mx-auto">让我们携手打造在数字世界中脱颖而出的精彩作品。</p>
         <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
           开始聊聊 <Megaphone size={20} />
         </button>
      </div>
    </div>
  );
}
