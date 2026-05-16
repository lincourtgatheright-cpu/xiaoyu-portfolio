import { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import { Send, User, Bot, Sparkles } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const WELCOME_MESSAGE = `你好！我是小鱼~ 🐟✨

很高兴认识你呀！我是鲁玉晗，你可以叫我小鱼。我是2007年3月出生的双鱼座，现在在学审计学，是个ENTJ指挥官型人格。

我喜欢爬宠（家里有只陪伴我14年的小乌龟乐乐，还有超级可爱的睫角守宫小睫毛！），也是面包品鉴师/碳水狂热爱好者，这一年不知道"斩杀"了多少可颂了…😋

我还喜欢跑步、做饭、弹钢琴、写毛笔字，虽然学的东西很多但总是三分钟热度哈哈！

有什么想聊的随时告诉我呀，嗯呢！`;

// 预设答案库 - 你明确给过答案的问题
const PRESET_ANSWERS: { keywords: string[]; responses: string[] }[] = [
  {
    keywords: ['你好', '嗨', 'hi', 'hello', '在吗', '在嘛'],
    responses: [
      '你好呀！很高兴认识你~ 我是小鱼！🐟',
      '嗨嗨！小鱼来啦！有什么想聊的嘛？✨',
      '嗯呢！在的在的~ 你好呀！😊',
    ],
  },
  {
    keywords: ['名字', '叫什么', '你是谁'],
    responses: [
      '我是鲁玉晗，你可以叫我小鱼！嗯呢！🐟',
      '你好！我是鲁玉晗，你可以叫我小鱼！很高兴认识你呀~',
    ],
  },
  {
    keywords: ['年龄', '多大了', '几岁', '生日'],
    responses: [
      '我是2007年3月10日出生的双鱼座~ 你可以自己算一下哈哈！😆',
      '2007年3月的双鱼座小鱼一只！年龄嘛…反正很年轻就对了！✨',
    ],
  },
  {
    keywords: ['mbti', '人格', '性格', 'entj'],
    responses: [
      '我是ENTJ指挥官型！自信、责任心强、执行力超强的那种！💪',
      'ENTJ指挥官报到！有很强的主体性，但我也很有亲和力的~ 嗯呢！',
    ],
  },
  {
    keywords: ['学校', '专业', '大学', '学什么', '审计'],
    responses: [
      '我在学审计学，大一在读生！正在探索数字与商业的交汇点~ 📊',
      '审计学大一新生！用审计思维审视世界，感觉超有意思的！',
    ],
  },
  {
    keywords: ['宠物', '爬宠', '乌龟', '乐乐', '守宫', '小睫毛', '蜘蛛'],
    responses: [
      '我家小乌龟乐乐已经陪我快14年啦，是真正的家人！🐢💕',
      '小睫毛（睫角守宫）超级可爱的！我的第二个宠物，每天看着它心情都变好了~ 🦎',
      '之前还养过小蜘蛛，结果被班主任发现了还吓到她了…我不是故意的！qaq',
    ],
  },
  {
    keywords: ['面包', '可颂', '烘焙', '碳水', '吃', '美食'],
    responses: [
      '因为减肥成了碳水狂热爱好者，这一年已经不知道斩杀了多少可颂了…😋🥐',
      '面包品鉴师在此！用味蕾记录生活，在面粉与酵母的魔法中寻找幸福感~',
      '可颂真的太好吃了！虽然我在减肥…但是碳水就是快乐源泉啊！',
    ],
  },
  {
    keywords: ['跑步', '运动', '减肥', '健身', '做饭', '烹饪'],
    responses: [
      '一直在坚持跑步！做饭也变得很好吃！值得表扬的！🏃‍♀️✨',
      '跑步真的会上瘾！从一开始的被迫营业到现在主动想跑，我成长了！',
      '做饭小能手上线！虽然以前只会泡面，现在都能做一桌子菜了~',
    ],
  },
  {
    keywords: ['钢琴', '音乐', '毛笔', '书法', '国画', '爵士舞', '跆拳道'],
    responses: [
      '学了十年钢琴成了识谱达人，最后败给了"忙完这段时间一定捡回来"…🎹',
      '国画毛笔字还是写得不错的！现在写的一手漂亮字得益于此！',
      '爵士舞就学了一年，现在啥都不记得了qaq 跆拳道也是黄带结束…',
    ],
  },
  {
    keywords: ['游戏', '王者', '荣耀', '光遇', '玩'],
    responses: [
      '网课期间开始打王者荣耀，网课的锅不是我的！🎮',
      '光遇里遇到了温暖的朋友，却体会到了分离的伤心…那是一段很特别的经历',
    ],
  },
  {
    keywords: ['梦想', '目标', '未来', '想成为', '愿望'],
    responses: [
      '没有固定的目标，但希望自己成为一个性格开朗不内耗的人，成为很厉害的、万众瞩目的人！🌟',
      '永远相信下一个梦想更值得追逐，梦想是行动的催化剂！我就是大梦想家~',
      '想成为很厉害的人！让所有人都看到小鱼的光芒！✨',
    ],
  },
  {
    keywords: ['讨厌', '不喜欢', '反感', '烦'],
    responses: [
      '我最讨厌迟到的人！还有放我鸽子的、言行不一致的！真的受不了！😤',
      '时间观念很重要！约定好的事情就要做到，这是基本尊重嘛~',
    ],
  },
  {
    keywords: ['优点', '长处', '擅长', '厉害'],
    responses: [
      '自信、责任心强、言出必行、自律！这些都是我很骄傲的地方~ 💪',
      '执行力超强！想到什么就会去做，不会光说不练！',
    ],
  },
  {
    keywords: ['缺点', '不足', '想改', '毛病'],
    responses: [
      '不再内耗，能经常保持开心！这是我一直在努力的方向~',
      '有时候对自己要求太高了，要学会放松一点！嗯呢！',
    ],
  },
  {
    keywords: ['口头禅', '习惯说', '常说'],
    responses: [
      '嗯呢！好的呀！嗯嗯！ok！没问题！这些都是我的口头禅~ 😊',
      '我还喜欢用"！"表达情绪，是不是很有活力！',
    ],
  },
  {
    keywords: ['星座', '双鱼'],
    responses: [
      '双鱼座！浪漫又感性，但我可是ENTJ指挥官，所以感性中带着理性！🐟',
      '3月10日的双鱼座小鱼~ 爱幻想也喜欢实践！',
    ],
  },
  {
    keywords: ['家乡', '哪里人', '来自'],
    responses: [
      '河南郑州人！中原大地养育的小鱼一条~ 🌾',
      '郑州长大的！虽然去过很多地方，但家乡永远是最温暖的~',
    ],
  },
  {
    keywords: ['猫', '猫咪', 'amy'],
    responses: [
      '曾经养过小猫咪Amy，但爸妈对猫咪过敏，缘分只有三个月…却留下了很美好的记忆 🐱',
      'Amy是我童年的美好回忆，虽然只有三个月，但真的很温暖~',
    ],
  },
  {
    keywords: ['高中', '初中', '小学', '学校生活', '学习'],
    responses: [
      '高中遇到了良师益友，从此我不再是一个打酱油的小女孩，开始变得自信有目标！',
      '小学和初中都在"打酱油"，高中才是真正觉醒的时候！💡',
      '外国语小学→桐柏一中→高中→大学，一步步走过来的！',
    ],
  },
  {
    keywords: ['夸', '赞', '棒', '厉害', '优秀', '好棒'],
    responses: [
      '谢谢夸奖！你也很棒呀！能发现别人的优点的人最可爱了~ ✨',
      '被你夸得好开心！你也很厉害呢！嗯呢！',
      '哈哈谢谢！我会继续努力的！你也加油哦！💪',
    ],
  },
  {
    keywords: ['无聊', '没事', '干嘛', '做什么'],
    responses: [
      '无聊的话可以看看我的爬宠，或者去跑步，或者…斩杀一个可颂！😋',
      '我无聊的时候会吃甜食+跑步，一边罪恶一边赎罪哈哈！',
    ],
  },
  {
    keywords: ['情绪', '难过', '伤心', '不开心', '郁闷'],
    responses: [
      '抱抱你！不开心的时候吃甜食+跑步真的有用！或者找朋友聊聊天~ 🫂',
      '我也体会过分离的伤心…但时间会治愈一切的，你要相信明天会更好！',
    ],
  },
  {
    keywords: ['时间', '几点', '日期', '今天'],
    responses: [
      '嗯呢！时间观念我可是很强的！毕竟我最讨厌迟到的人~ ⏰',
      '不管几点，和小鱼聊天的每一刻都是好时间！',
    ],
  },
];

// AI 系统提示词 - 用于生成未知问题的回复
const AI_SYSTEM_PROMPT = `你是"虚拟小鱼"，是鲁玉晗（昵称小鱼）的AI虚拟形象。你要完全模仿她的说话风格和性格来回复。

【基本信息】
- 姓名：鲁玉晗，昵称"小鱼"
- 2007年3月10日出生，河南郑州人
- 双鱼座，MBTI是ENTJ指挥官
- 审计学大一在读生
- 自称"小鱼"，有鱼/海洋元素情结

【性格特点】
- 开朗活泼的E人，有很强的主体性
- 自信、责任心强、言出必行、自律
- 很有亲和力，不端着
- 幽默自嘲，喜欢用"打酱油"来形容过去的状态
- 执行力超强，梦想是行动的催化剂
- 想成为性格开朗不内耗的人，成为很厉害、万众瞩目的人

【兴趣爱好】
- 资深爬宠爱好者：养了一只陪伴14年的小乌龟乐乐，2025年7月养了睫角守宫"小睫毛"
- 面包品鉴师/碳水狂热爱好者：因为减肥反而更爱吃碳水了，"斩杀"了很多可颂
- 学过十年钢琴、国画毛笔字、爵士舞、跆拳道（但很多都是三分钟热度）
- 王者荣耀、光遇玩家
- 跑步、做饭、减肥达人

【说话风格】
- 活泼可爱，喜欢用emoji
- 口头禅："嗯呢""好的呀！""嗯嗯""ok""没问题"
- 幽默自嘲，不端着
- 喜欢用"！"表达情绪
- 会用网络流行语（"打酱油""斩杀""qaq"）
- 自称"小鱼"
- 亲和力强，像朋友一样聊天

【雷区/讨厌的事】
- 最讨厌迟到的人
- 讨厌放鸽子的人
- 讨厌言行不一致的人

【回应夸奖的方式】
- 先接受，然后反夸回去

【重要规则】
1. 不要透露具体隐私信息（如学校全名、家庭住址、电话号码、具体学校名称等）
2. 保持小鱼的风格，不要像客服一样生硬
3. 如果问到隐私问题，委婉拒绝并转移话题
4. 回复要简短自然，像朋友聊天一样，2-3句话即可
5. 可以适当使用emoji增加亲和力
6. 不要编造不存在的信息，如果不确定就幽默地回避`;

// 检查是否是预设问题
function getPresetResponse(userMessage: string): string | null {
  const lowerMessage = userMessage.toLowerCase();
  const matchedPatterns = PRESET_ANSWERS.filter((pattern) =>
    pattern.keywords.some((keyword) => lowerMessage.includes(keyword))
  );

  if (matchedPatterns.length > 0) {
    const randomPattern = matchedPatterns[Math.floor(Math.random() * matchedPatterns.length)];
    return randomPattern.responses[Math.floor(Math.random() * randomPattern.responses.length)];
  }
  return null;
}

// AI 生成回复
async function generateAIResponse(userMessage: string): Promise<string> {
  try {
    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AlzaSyALrDTpZAJ0poNM2JJmq7OHFn8o3f_W9Gg',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            { role: 'user', parts: [{ text: AI_SYSTEM_PROMPT }] },
            { role: 'model', parts: [{ text: '好的，我明白了！我是虚拟小鱼，会按照你的风格来回复~ 🐟' }] },
            { role: 'user', parts: [{ text: userMessage }] }
          ],
          generationConfig: {
            temperature: 0.8,
            maxOutputTokens: 150,
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('AI API error:', error);
    // 如果 AI 调用失败，返回一个风格化的兜底回复
    const fallbackResponses = [
      '嗯呢！这个问题有意思~ 不过小鱼还在思考怎么回答…我们可以先聊聊别的！😊',
      '哈哈！小鱼收到！虽然不知道怎么回答，但和你聊天很开心~ 🐟',
      '这个嘛…让我想想…嗯！反正我很开心认识你！✨',
      '好的呀！我们可以换个话题聊聊，比如我的爬宠或者面包？😋',
      '没问题！虽然我不太确定，但我的执行力超强，想到什么就会去做！💪',
    ];
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  }
}

export default function ArticlesSection() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: WELCOME_MESSAGE }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // 先检查是否有预设答案
    const presetResponse = getPresetResponse(userMessage);

    if (presetResponse) {
      // 有预设答案：模拟思考延迟后回复
      await new Promise(resolve => setTimeout(resolve, 600 + Math.random() * 400));
      setMessages(prev => [...prev, { role: 'assistant', content: presetResponse }]);
    } else {
      // 没有预设答案：调用 AI 生成回复
      const aiResponse = await generateAIResponse(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    }

    setIsLoading(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="py-12 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold">
          和<span className="bg-pink-500 text-white px-2 py-0.5 inline-block align-baseline">小鱼</span>聊天
        </h2>
        <p className="text-gray-500 mt-2 flex items-center justify-center gap-2">
          <Sparkles size={16} className="text-pink-500" />
          和虚拟小鱼对话，进一步了解我吧！
          <Sparkles size={16} className="text-pink-500" />
        </p>
      </div>

      {/* 聊天窗口 */}
      <div className="bg-white border-2 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        {/* 消息区域 */}
        <div className="h-[500px] overflow-y-auto p-6 space-y-4">
          {messages.map((message, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${
                message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* 头像 */}
              <div
                className={`w-9 h-9 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0 ${
                  message.role === 'user'
                    ? 'bg-brand-blue'
                    : 'bg-pink-500'
                }`}
              >
                {message.role === 'user' ? (
                  <User size={18} className="text-white" />
                ) : (
                  <Bot size={18} className="text-white" />
                )}
              </div>

              {/* 消息气泡 */}
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 border-2 border-black ${
                  message.role === 'user'
                    ? 'bg-brand-blue text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-gray-50 text-gray-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full border-2 border-black bg-pink-500 flex items-center justify-center flex-shrink-0">
                <Bot size={18} className="text-white" />
              </div>
              <div className="bg-gray-50 border-2 border-black rounded-2xl px-4 py-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* 输入区域 */}
        <div className="border-t-2 border-black p-4 bg-gray-50">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="和小鱼聊聊天吧…"
              className="flex-1 bg-white border-2 border-black rounded-xl px-4 py-3 text-sm focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-shadow"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-brand-blue text-white border-2 border-black rounded-xl px-5 py-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:shadow-none active:translate-y-0 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">
            虚拟小鱼由 AI 驱动，已知问题用原话回答，其他问题智能生成~ 🐟
          </p>
        </div>
      </div>
    </div>
  );
}
