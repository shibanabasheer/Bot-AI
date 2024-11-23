import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './FeedbackPanel.css'; // Add styling

const FeedbackPanel = () => {
  const { currentConversation, conversations, setConversations, feedback, setFeedback } = useContext(AppContext);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmitFeedback = () => {
    const newFeedback = {
      conversationId: conversations.length + 1,
      rating,
      comment,
      conversation: currentConversation
    };

    setFeedback([...feedback, newFeedback]);
    setConversations([...conversations, currentConversation]);
    setRating(0);
    setComment("");
  };

  return (
    <div className="feedback-panel">
      <h3>Rate this conversation:</h3>
      <div>
        {[...Array(5)].map((_, idx) => (
          <button
            key={idx}
            className={rating > idx ? 'active' : ''}
            onClick={() => setRating(idx + 1)}
          >
            ★
          </button>
        ))}
      </div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave your feedback here..."
      />
      <button onClick={handleSubmitFeedback}>Submit Feedback</button>
    </div>
  );
};

export default FeedbackPanel;
