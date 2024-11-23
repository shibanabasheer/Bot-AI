import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './ConversationList.css';

const ConversationList = () => {
  const { conversations } = useContext(AppContext);

  return (
    <div className="conversation-list">
      <h3>Saved Conversations</h3>
      {conversations.map((conv, idx) => (
        <div key={idx} className="conversation">
          <h4>Conversation {idx + 1}</h4>
          <p>{conv.map((msg) => msg.message).join(' | ')}</p>
        </div>
      ))}
    </div>
  );
};

export default ConversationList;
