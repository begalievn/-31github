import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery, gql } from "@apollo/client";


const REVIEWS = gql`
  query GetReviews {
    reviews {
      data {
        id,
        attributes {
          title,
          rating
          categories {
            data {
              id,
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`

export default function Homepage() {
  const { loading, error, data } = useQuery(REVIEWS);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>

  const reviews = data.reviews.data;

  return (
    <div>
      {
        reviews.map((review, index) => (
          <div key={review.id} className="review-card">
            <div className="rating">{review.attributes?.rating}</div>
            <h2>{ review.attributes?.title }</h2>
            {
              review.attributes?.categories.data.map((c) => (
                <small key={c.id}>{ c.attributes.name }</small>
              ))
            }
            <p> </p>
            <Link to={`/details/${review.id}`}>Read more</Link>
          </div>
        ))
      }
    </div> 
  )
}
