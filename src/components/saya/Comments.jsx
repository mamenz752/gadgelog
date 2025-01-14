import React from 'react'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs';
import styles from"../../styles/maeda/comment.module.css";

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
    <div className={styles.commentline}>
      <h2 className={styles.h2}>コメント</h2>
      <div className={styles.wrapper}>
        {isLoading ? <p>Loading...</p>
          : comments.data.map((comment) => {
            const date = dayjs(comment.date).locale("ja").format('YYYY/MM/DD');
            return (
              <div className={styles.commentbox} key={comment.id}>
                <h3 className={styles.h3}>{comment.name}</h3>
                <p className={styles.h4}>{comment.comment}</p>
                <h5 className={styles.d}>{date}</h5>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default Comments