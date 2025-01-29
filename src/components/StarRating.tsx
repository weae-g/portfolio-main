import React from "react";

interface StarRatingProps {
  rating: number;
  setRating?: (rating: number) => void;
  readonly?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  setRating,
  readonly = false,
}) => {
  const handleStarClick = (index: number) => {
    if (!readonly && setRating) {
      setRating(index + 1);
    }
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`star-rating__star ${index < rating ? "filled" : ""}`}
          onClick={() => handleStarClick(index)}>
          &#9733;
        </div>
      ))}
    </div>
  );
};

export default StarRating;
