'use client';

import { useState } from 'react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: 'Hi!!\n Rice to meet you!!\n  How can I help you today?' }]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
  if (!input.trim()) return;

  const newUserMessage = { role: 'user', text: input };
  setMessages((prev) => [...prev, newUserMessage]);
  setInput('');

  try {
    const res = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: input }),
    });

    const data = await res.json();

    const newBotMessage = { role: 'bot', text: data.reply };
    setMessages((prev) => [...prev, newBotMessage]);
  } catch (error) {
    console.error('Error talking to Gemini:', error);
    setMessages((prev) => [
      ...prev,
      { role: 'bot', text: 'Oops! Gemini had a hiccup 😵' },
    ]);
  }
};


  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-gray-800"
        >
          🤖
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-xl shadow-2xl p-4 flex flex-col z-50 max-h-[500px]">
          <div className="font-bold mb-3 text-center text-lg text-gray-800">Explainer</div>
          <div className="flex-1 overflow-y-auto mb-3 space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx} className={`text-sm p-2 rounded-md ${msg.role === 'user' ? 'bg-orange-100 text-right ml-10' : 'bg-gray-100 mr-10'}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Write a message..."
              className="flex-1 border px-3 py-2 rounded-md text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage} className="bg-orange-600 text-white px-3 py-2 rounded-md text-sm hover:bg-orange-700">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
