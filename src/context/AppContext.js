import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState([]);
  const [feedback, setFeedback] = useState([]);

  return (
    <AppContext.Provider value={{
      conversations,
      setConversations,
      currentConversation,
      setCurrentConversation,
      feedback,
      setFeedback
    }}>
      {children}
    </AppContext.Provider>
  );
};
