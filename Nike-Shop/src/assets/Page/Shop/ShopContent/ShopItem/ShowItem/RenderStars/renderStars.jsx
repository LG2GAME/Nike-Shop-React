import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.25 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="stars">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} />
      ))}
      {[...Array(halfStars)].map((_, index) => (
        <FaStarHalfAlt key={index + fullStars} />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index + fullStars + halfStars} />
      ))}
    </div>
  );
};

const getRatingText = (rating) => {
  if (rating === 1) {
    return <p>{rating} Gwiazdka</p>;
  } else if (rating > 1 && rating < 5) {
    return <p>{rating} Gwiazdki</p>;
  } else if (rating === 5) {
    return <p>{rating} Gwiazdek</p>;
  } else {
    return <p>{rating} Gwiazdek</p>;
  }
};

export { renderStars, getRatingText };
