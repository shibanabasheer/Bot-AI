import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './FeedbackSummary.css';

const FeedbackSummary = () => {
  const { feedback } = useContext(AppContext);

  return (
    <div className="feedback-summary">
      <h3>Feedback Summary</h3>
      <table>
        <thead>
          <tr>
            <th>Conversation</th>
            <th>Rating</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {feedback.map((item, idx) => (
            <tr key={idx}>
              <td>Conversation {item.conversationId}</td>
              <td>{item.rating}</td>
              <td>{item.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackSummary;
