
import React, { useState, useRef, useEffect } from 'react';
import { askSigmaAI } from '../services/geminiService';
import { ChatMessage } from '../types';

const SigmaChatPreview: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Chào bạn, mình là trợ lý AI của Sigma Shop! Bạn cần hỗ trợ gì hoặc có thể chọn một trong các chủ đề dưới đây nhé. Trong quá trình tư vấn, nếu chưa hài lòng bạn vui lòng chat "Tôi muốn gặp tư vấn viên" để được hỗ trợ.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (text?: string) => {
    const userMsg = text || input.trim();
    if (!userMsg || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await askSigmaAI(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  const quickActions = [
    "Chính sách bảo hành",
    "Tra cứu đơn hàng",
    "Khuyến mãi HOT",
    "Tìm cửa hàng"
  ];

  return (
    <div className="w-full max-w-[400px] h-[600px] bg-[#FDE8E9] rounded-[32px] shadow-2xl overflow-hidden border border-white/40 flex flex-col relative font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF4D5E] to-[#FF758C] p-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
             <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Sigma&backgroundColor=transparent" alt="Mascot" className="w-6 h-6" />
          </div>
          <span className="font-semibold text-sm">Trợ lý AI - Sigma ✨</span>
        </div>
        <div className="flex gap-3">
           <button className="hover:opacity-80"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button>
           <button className="hover:opacity-80"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg></button>
           <button className="hover:opacity-80"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
        </div>
      </div>

      {/* Main Content */}
      <div 
        ref={scrollRef}
        className="flex-grow overflow-y-auto p-4 space-y-6 scroll-smooth"
      >
        {/* Intro Mascot */}
        <div className="flex flex-col items-center py-6">
          <div className="relative mb-2">
             <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-pink-100 overflow-hidden">
               <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Sigma&backgroundColor=b6e3f4" alt="Sigma mascot" />
             </div>
             <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 border-2 border-white rounded-full"></div>
          </div>
          <h3 className="text-xl font-bold text-[#333]">Sigma<span className="bg-[#FF4D5E] text-white text-[10px] px-1 rounded ml-1 align-top">AI</span></h3>
          <p className="text-center text-[13px] text-gray-600 font-medium max-w-[240px] mt-1">
            <b>Sigma - Biết tuốt</b> hỗ trợ bạn tra cứu sản phẩm và tạo đơn hàng dễ dàng
          </p>
        </div>

        {/* Messages */}
        {messages.map((msg, i) => (
          <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            {msg.role === 'assistant' && (
               <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm mb-1 overflow-hidden">
                 <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Sigma" alt="AI Avatar" />
               </div>
            )}
            <div className={`max-w-[85%] px-4 py-3 text-[14px] leading-relaxed shadow-sm ${
              msg.role === 'user' 
                ? 'bg-[#FF4D5E] text-white rounded-2xl rounded-tr-none' 
                : 'bg-white text-[#333] rounded-2xl rounded-tl-none border border-white'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex flex-col items-start">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm mb-1 overflow-hidden">
                 <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Sigma" alt="AI Avatar" />
            </div>
            <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm">
               <div className="flex gap-1">
                 <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>
                 <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                 <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
               </div>
            </div>
          </div>
        )}

        {/* Quick Action Chips */}
        <div className="flex overflow-x-auto gap-2 py-2 no-scrollbar">
          {quickActions.map((action, idx) => (
            <button 
              key={idx}
              onClick={() => handleSubmit(action)}
              className="whitespace-nowrap bg-white text-[#FF4D5E] border border-[#FF4D5E] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#FF4D5E] hover:text-white transition-colors flex-shrink-0"
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white p-4">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}
          className="relative flex items-center bg-[#F4F6F9] rounded-2xl px-4 py-2"
        >
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Bạn cần hỗ trợ gì?"
            className="flex-grow bg-transparent border-none focus:ring-0 text-sm py-2 text-[#333]"
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="ml-2 w-8 h-8 bg-[#E5E7EB] text-[#333] rounded-full flex items-center justify-center hover:bg-indigo-100 disabled:opacity-50 transition-colors"
          >
            <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
          </button>
        </form>
        <p className="text-[10px] text-center text-gray-400 mt-2">
          Thông tin được AI hỗ trợ chỉ mang tính chất tham khảo
        </p>
      </div>
    </div>
  );
};

export default SigmaChatPreview;
