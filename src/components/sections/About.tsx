import { Award, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { label: '审计学大一在读生', color: 'bg-brand-blue' },
    { label: '资深爬宠爱好者', color: 'bg-brand-red' },
    { label: '面包品鉴师', color: 'bg-yellow-400' },
    { label: '大梦想家', color: 'bg-purple-500' },
  ];

  const timeline = [
    {
      year: '2007',
      month: '03月',
      type: 'main' as const,
      title: '出生',
      content: '天空一声巨响，小鱼闪亮登场！',
    },
    {
      year: '2008',
      month: '08月',
      type: 'side' as const,
      title: '学习跆拳道',
      content: '幻想以一打十，实则以黄带结束我的跆拳道生涯',
    },
    {
      year: '2011',
      month: '06月',
      type: 'side' as const,
      title: '学习钢琴',
      content: '学了十年成了识谱达人，最后败给了"忙完这段时间一定捡回来"',
    },
    {
      year: '2012',
      month: '06月',
      type: 'side' as const,
      title: '养小乌龟乐乐',
      content: '爸爸送我的毕业礼物，已经成为我的家人陪了我快十四年了',
    },
    {
      year: '2013',
      month: '06月',
      type: 'side' as const,
      title: '学习国画毛笔字',
      content: '多才多艺！现在写的一手漂亮字得益于此！',
    },
    {
      year: '2013',
      month: '09月',
      type: 'main' as const,
      title: '小学入学',
      content: '在外国语小学打酱油',
    },
    {
      year: '2016',
      month: '03月',
      type: 'side' as const,
      title: '学习爵士舞',
      content: '就学了一年，现在啥都不记得了qaq',
    },
    {
      year: '2018',
      month: '06月',
      type: 'side' as const,
      title: '养小猫咪Amy',
      content: '爸妈想给我找个好朋友，却意外发现爸妈对猫咪过敏，和Amy的缘分只有三个月，却留下了很美好的记忆',
    },
    {
      year: '2019',
      month: '09月',
      type: 'main' as const,
      title: '初中入学',
      content: '在桐柏一中打酱油',
    },
    {
      year: '2020',
      month: '01月',
      type: 'side' as const,
      title: '开始打王者荣耀',
      content: '网课的锅不是我的',
    },
    {
      year: '2021',
      month: '09月',
      type: 'side' as const,
      title: '开始玩光遇',
      content: '遇到了温暖的朋友，却体会到了分离的伤心',
    },
    {
      year: '2022',
      month: '09月',
      type: 'main' as const,
      title: '高中入学',
      content: '遇到了良师益友，从此我不再是一个打酱油的小女孩，开始变得自信有目标',
    },
    {
      year: '2023',
      month: '05月',
      type: 'side' as const,
      title: '爱上爬宠',
      content: '养了几只小蜘蛛，养的小虫子被班主任发现，还吓到她了！我不是故意的',
    },

    {
      year: '2025',
      month: '07月',
      type: 'side' as const,
      title: '养睫角守宫小杰',
      content: '我的第二个宠物，小睫毛！超级可爱',
    },
    {
      year: '2025',
      month: '08月',
      type: 'side' as const,
      title: '开始减肥，爱上跑步和做饭',
      content: '一直在坚持跑步！做饭也变得很好吃！值得表扬的！',
    },
    {
      year: '2025',
      month: '09月',
      type: 'main' as const,
      title: '大学入学',
      content: '升入大学，开始接触财务知识~',
    },
    {
      year: '2025',
      month: '09月',
      type: 'side' as const,
      title: '美食烘焙评鉴家',
      content: '因为减肥成了碳水狂热爱好者，这一年已经不知道斩杀了多少可颂了…',
    },
  ];

  return (
    <div className="flex flex-col items-center gap-16 py-12">
      {/* 上半部分：自我介绍 */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-16 w-full">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            你想了解我是一条 <br />
            <span className="block-highlight-blue">什么样的鱼</span>吗？
          </h2>

          <div className="mt-4 sea-badge">
            <span className="text-2xl wave-emoji">🌊</span>
            <span className="text-brand-blue font-black tracking-widest text-sm uppercase">WELCOME TO MY SEA!</span>
            <span className="text-2xl fish-emoji">🐠</span>
          </div>
          
          <p className="mt-6 text-lg text-gray-600 leading-relaxed text-left indent-8">
            Hi！我是鲁玉晗，你可以叫我小鱼，出生于2007年3月10日，河南郑州人，双鱼座，MBTI是ENTJ指挥官，拥有十分爱我的家人、亲密的朋友、丰富的精神世界，我爱幻想也喜欢不断实践、创新，拥有超强的执行力和责任心！欢迎你来了解我！
          </p>

          <div className="mt-10 space-y-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className={`mt-1 w-6 h-6 rounded-md border-2 border-black flex-shrink-0 ${stat.color} shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`} />
                <div className="text-left">
                  <h4 className="font-bold text-xl">{stat.label}</h4>
                  <p className="text-gray-500 text-sm mt-1">
                    {idx === 0 && "正在探索数字与商业的交汇点，用审计思维审视世界。"}
                    {idx === 1 && "热爱观察和研究各种爬行动物，享受与冷血朋友相处的宁静时光。"}
                    {idx === 2 && "用味蕾记录生活，在面粉与酵母的魔法中寻找幸福感。"}
                    {idx === 3 && "永远相信下一个梦想更值得追逐，梦想是行动的催化剂。"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-float-delayed">
          <div className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full border-4 border-black bg-white p-4 relative shadow-[16px_16px_0px_0px_rgba(26,26,26,0.1)]">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-black">
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20portrait%20of%20a%20girl%20with%20glasses%20and%20bun%20hair%20in%20purple%20hoodie%2C%20vector%20illustration%20style&image_size=square_hd" 
                alt="鲁玉晗的肖像" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          {/* Floating Icons */}
          <div className="absolute top-10 -left-10 p-3 bg-white border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-12 flex items-center gap-2">
              <Award className="text-pink-500" />
              <span className="text-sm font-bold text-pink-500">ENTJ 指挥官</span>
          </div>
          <div className="absolute bottom-10 -right-10 p-3 bg-white border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-12 flex items-center gap-2">
              <CheckCircle className="text-brand-blue" />
              <span className="text-sm font-bold text-brand-blue">双鱼座</span>
          </div>
        </div>
      </div>

      {/* 人生时间线 - 放在最下面 */}
      <div className="w-full max-w-5xl">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-extrabold inline-block relative">
            <span className="bg-pink-500 text-white px-4 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 inline-block">
              地球Online 开放游戏进度
            </span>
          </h3>
        </div>

        <div className="relative">
          {/* 中央时间轴 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-black dashed-line timeline-line" />
          
          {/* 主线/支线标签 */}
          <div className="flex justify-between mb-8 px-4">
            <div className="bg-white border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 timeline-badge-left">
              <span className="font-bold text-lg">🎯 主线任务</span>
            </div>
            <div className="bg-white border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-2 timeline-badge-right">
              <span className="font-bold text-lg">🌟 支线任务</span>
            </div>
          </div>

          {/* 时间线项目 */}
          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className={`flex items-center ${item.type === 'main' ? 'flex-row' : 'flex-row-reverse'} gap-4`}>
                {/* 卡片 */}
                <div className={`w-5/12 ${item.type === 'main' ? 'text-left' : 'text-right'}`}>
                  <div 
                    className={`inline-block w-full bg-white border-2 border-black rounded-xl p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 ${item.type === 'main' ? 'border-l-4 border-l-brand-blue timeline-card-left' : 'border-r-4 border-r-pink-500 timeline-card-right'}`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className={`flex items-center gap-2 mb-1 ${item.type === 'main' ? 'justify-start' : 'justify-end'}`}>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${item.type === 'main' ? 'bg-brand-blue text-white' : 'bg-pink-500 text-white'}`}>
                        {item.type === 'main' ? '主线' : '支线'}
                      </span>
                      <span className="text-sm font-bold text-gray-500">{item.year}.{item.month}</span>
                    </div>
                    <h4 className={`font-bold text-base mb-1 ${item.type === 'main' ? 'text-left' : 'text-right'}`}>{item.title}</h4>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-2 min-h-[40px]">
                      <p className="text-gray-400 text-sm italic">
                        {item.content || '点击此处填写内容...'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 时间节点 */}
                <div className="w-2/12 flex justify-center">
                  <div 
                    className={`w-6 h-6 rounded-full border-4 border-black ${item.type === 'main' ? 'bg-brand-blue' : 'bg-pink-500'} shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] timeline-dot`}
                    style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
                  />
                </div>

                {/* 占位 */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
