import { useState } from 'react';

export default function HomeSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12">
      <div className="max-w-2xl text-center lg:text-left">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
          我是<span className="block-highlight-red">鲁玉晗</span>, <br />
          一只 有梦想的 <span className="block-highlight-blue">鱼</span>
        </h1>
        
        <p className="mt-8 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
          My dream is to have the courage to leave <br />
          when I know what drains me.
        </p>


      </div>

      <div className="relative animate-float">
        <div 
          className="w-[300px] h-[370px] sm:w-[400px] sm:h-[500px] border-4 border-black rounded-[40px] bg-yellow-400 relative overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] cursor-pointer perspective-1000"
          onClick={handleClick}
        >
           <div className={`w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
             {/* 正面 - AI 生成图片 */}
             <div className="absolute inset-0 backface-hidden">
               <img 
                 src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20portrait%20of%20a%20girl%20with%20glasses%20and%20bun%20hair%20in%20purple%20hoodie%2C%20vector%20illustration%20style&image_size=square_hd" 
                 alt="鲁玉晗的肖像" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
             </div>
             
             {/* 背面 - 真实照片 */}
             <div className="absolute inset-0 backface-hidden rotate-y-180">
               <img 
                 src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
                 alt="鲁玉晗的真实照片" 
                 className="w-full h-full object-cover"
               />
             </div>
           </div>
        </div>

        {/* Floating style labels - 分布在肖像周围 */}
        <div className="absolute -top-2 right-8 bg-brand-blue text-white border-2 border-black rounded-lg px-3 py-1 text-[10px] font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-3 pointer-events-none">
           梦想家
        </div>
        <div className="absolute top-16 -left-4 bg-brand-red text-white border-2 border-black rounded-lg px-3 py-1 text-[10px] font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-6 pointer-events-none">
           学生
        </div>
        <div className="absolute bottom-20 -right-4 bg-brand-blue text-white border-2 border-black rounded-lg px-3 py-1 text-[10px] font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-5 pointer-events-none">
           爬宠爱好者
        </div>
        <div className="absolute bottom-10 -left-3 bg-brand-red text-white border-2 border-black rounded-lg px-3 py-1 text-[10px] font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-3 pointer-events-none">
           面包品鉴师
        </div>
        <div className="absolute top-1/3 -right-6 bg-brand-red text-white border-2 border-black rounded-lg px-3 py-1 text-[10px] font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-4 pointer-events-none">
           实干小能手
        </div>
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-blue rounded-full border-2 border-black" />
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-brand-red rounded-full border-2 border-black" />
      </div>
    </div>
  );
}
