import React, { useState, ChangeEvent, FormEvent } from "react";
import StarRating from "@/components/StarRating";

interface Comment {
  name: string;
  rating: number;
  message: string;
  date: string;
}

const FeedbackPage: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newComment: Comment = {
      name,
      rating,
      message,
      date: new Date().toLocaleString(),
    };
    setComments([...comments, newComment]);
    setName("");
    setRating(0);
    setMessage("");
  };

  return (
    <div className="page feedback-page">
      <div className="page__header">
        <h1 className="page__title">// Feedback</h1>
      </div>
      <div className="page__content">
        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="feedback-form__group">
            <label htmlFor="name" className="feedback-form__label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="feedback-form__input effect"
              placeholder="Your name"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              required
            />
            <span className="focus-border" />
          </div>
          <div className="feedback-form__group">
            <label htmlFor="rating" className="feedback-form__label">
              Rating:
            </label>
            <StarRating rating={rating} setRating={setRating} />
          </div>
          <div className="feedback-form__group">
            <label htmlFor="message" className="feedback-form__label">
              Feedback:
            </label>
            <textarea
              id="message"
              placeholder="Your feedback"
              name="message"
              className="feedback-form__textarea effect"
              value={message}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.target.value)
              }
              required
            />
            <span className="focus-border" />
          </div>
          <button type="submit" className="btn feedback-form__button">
            Submit
          </button>
        </form>
        <div className="comments-section">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <div className="comment__header">
                <p className="comment__name">{comment.name}</p>
                <p className="comment__date">{comment.date}</p>
              </div>
              <div className="comment__body">
                <p className="comment__message">{comment.message}</p>
              </div>
              <div className="comment__footer">
                <div className="comment__rating">
                  <StarRating rating={comment.rating} readonly />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
