import { fetchReviews } from 'components/fetchApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const [review, setReview] = useState(null);

  const showReview = async id => {
    const reviews = await fetchReviews(id);
    setReview(reviews);
  };

  useEffect(() => {
    showReview(id);
  }, []);

  if (!review) {
    return 'Loading';
  }

  return (
    <div>
      {review.results.map(el => (
        <li key={el.id}>
          {el.author}
          <p>{el.content}</p>
        </li>
      ))}
    </div>
  );
};

export default Reviews;
