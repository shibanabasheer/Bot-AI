import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import mockResponses from '../data/mockResponses.json';
import './ChatWindow.css'; // Add styling as needed

const ChatWindow = () => {
  const { currentConversation, setCurrentConversation } = useContext(AppContext);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const aiResponse = mockResponses.find(
      (item) => item.question.toLowerCase() === input.toLowerCase()
    )?.response || "I'm sorry, I don't have an answer for that.";

    const newConversation = [
      ...currentConversation,
      { sender: 'user', message: input },
      { sender: 'ai', message: aiResponse }
    ];

    setCurrentConversation(newConversation);
    setInput("");
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {currentConversation.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            {msg.message}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
