import React from 'react'
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const { loading, error, data } = useFetch('http://localhost:1337/api/reviews');

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>

  const reviews = data.data;

  return (
    <div>
      {
        reviews.map((review, index) => (
          <div key={review.id} className="review-card">
            <div className="rating">{review.attributes?.rating}</div>
            <h2>{ review.attributes?.title }</h2>

            <small>console list</small>
            <p> </p>
            <Link to={`/details/${review.id}`}>Read more</Link>
          </div>
        ))
      }
    </div> 
  )
}
