import React from 'react';
import ChatWindow from './components/ChatWindow';
import FeedbackPanel from './components/FeedbackPanel';
import ConversationList from './components/ConversationList';
import FeedbackSummary from './components/FeedbackSummary';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <ConversationList />
      <div className="main">
        <ChatWindow />
        <FeedbackPanel />
      </div>
      <FeedbackSummary />
    </div>
  );
};

export default App;
