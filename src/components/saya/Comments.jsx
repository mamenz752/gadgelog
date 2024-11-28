import React from 'react'
import { useQuery } from '@tanstack/react-query'

const Comments = ({ articleId }) => {
  const getComments = async () => {
    const res = await fetch(`http://localhost:5000/api/comments/${articleId}`);
    if (!res.ok) {
      throw new Error('Fetch failed');
    }
    return res.json();
  }

  const { data: comments, isLoading } = useQuery({
    queryKey: ['comments'],
    queryFn: getComments
  })

  return (
    <div>
      <h2>コメント</h2>
      {isLoading ? <p>Loading...</p>
        : comments.data.map((comment) => {
          return (
            <div key={comment.id}>
              <h3>{comment.name}</h3>
              <p>{comment.comment}</p>
              <p>{comment.date}</p>
            </div>
          )
      })}
    </div>
  )
}

export default Comments