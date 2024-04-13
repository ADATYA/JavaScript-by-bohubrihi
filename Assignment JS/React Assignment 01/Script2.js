import React, { useState } from 'react';

const PhotoCard = ({ photo }) => 
{
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');

  const submitFeedback = async () => {
    if (feedback && name) {
      const newFeedback = {
        name,
        feedback,
      };

      // Update photo data with new feedback on server-side (implement logic)
      photo.feedback.push(newFeedback);
      setFeedback('');
      setName('');
    } else {
      alert('Please enter your name and feedback');
    }
  };

  // return (
  //   <div className="photo-card">
  //     <img src={photo.imageUrl} alt={photo.category} />
  //     <p>Category: {photo.category}</p>
  //     <div className="feedback-form">
  //       <input
  //         type="text"
  //         placeholder="Your Name"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //       />
  //       <textarea
  //         value={feedback}
  //         onChange={(e) => setFeedback(e.target.value)}
  //         placeholder="Leave your feedback"
  //       />
  //       <button onClick={submitFeedback}>Submit Feedback</button>
  //   </div>
}
