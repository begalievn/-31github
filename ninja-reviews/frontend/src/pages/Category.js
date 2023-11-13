import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useParams, Link } from 'react-router-dom'

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      data {
        id,
        attributes {
          name,
          reviews {
            data {
              id,
              attributes {
                title,
                rating,
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
      }
    }
  }
`

export default function Category() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data);

  const category = data.category.data;

  return (
    <div>
      <h2>{ category.attributes?.name }</h2>
      {
        category.attributes.reviews.data.map((review, index) => (
          <div key={review.id} className="review-card">
            <div className="rating">{review.attributes?.rating}</div>
            <h2>{ review.attributes?.title }</h2>
            {
              review.attributes.categories.data.map((c) => (
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
