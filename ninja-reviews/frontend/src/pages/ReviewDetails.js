import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
      data {
        id,
        attributes {
          title,
          rating,
          body,
          categories {
            data {
              id,
              attributes {
                name
              }
            }
          }
        },
      }
    }
  }
`

export default function ReviewDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(REVIEW, {
    variables: { id }
  });


  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  console.log(data);

  const review = data.review.data;

  return (
    <div className="review-card">
      <div className="rating">{data.review.data.attributes?.rating}</div>
      <h2>{data.review.data.attributes?.title}</h2>
      {
        review.attributes.categories.data.map((c) => (
          <small key={c.id}>{ c.attributes.name }</small>
        ))
      }
      <p> </p>
    </div>
  );
}
