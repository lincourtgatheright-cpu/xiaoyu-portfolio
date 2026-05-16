import { Music, Camera, Coffee, Mountain, Gamepad, PenTool } from 'lucide-react';

const HOBBIES = [
  { name: '摄影', icon: <Camera size={40} />, color: 'bg-orange-100', text: '通过极简镜头捕捉瞬间。' },
  { name: '徒步', icon: <Mountain size={40} />, color: 'bg-green-100', text: '探索城市周边的宁静小径。' },
  { name: '爵士乐', icon: <Music size={40} />, color: 'bg-blue-100', text: '在城市的灵魂节奏中放松身心。' },
  { name: '精品咖啡', icon: <Coffee size={40} />, color: 'bg-yellow-100', text: '创意突破背后的能量来源。' },
  { name: '游戏', icon: <Gamepad size={40} />, color: 'bg-red-100', text: '在竞技乐趣中放松并充电。' },
  { name: '数字艺术', icon: <PenTool size={40} />, color: 'bg-purple-100', text: '技术与传统素描的交汇点。' },
];

export default function HobbiesSection() {
  return (
    <div className="py-12">
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold mb-4">设计之外的 <span className="block-highlight-blue">生活</span></h2>
        <p className="text-gray-500 max-w-xl">当我不在调整像素时，你会发现我沉浸在这些让我保持创意流动的爱好中。</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {HOBBIES.map((hobby, idx) => (
          <div key={idx} className={`thick-card p-8 ${hobby.color} flex flex-col items-center text-center transition-all hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2`}>
            <div className="w-20 h-20 bg-white border-2 border-black rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {hobby.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{hobby.name}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {hobby.text}
            </p>
          </div>
        ))}
      </div>
      
      {/* Decorative footer element for hobbies */}
      <div className="mt-16 p-8 border-2 border-black border-dashed rounded-3xl flex flex-wrap items-center justify-around gap-8 opacity-60">
        <span className="text-xl font-bold italic tracking-tighter">保持好奇</span>
        <span className="text-xl font-bold italic tracking-tighter">探索更多</span>
        <span className="text-xl font-bold italic tracking-tighter">持续创作</span>
        <span className="text-xl font-bold italic tracking-tighter">拥抱生活</span>
      </div>
    </div>
  );
}
