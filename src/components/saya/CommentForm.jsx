import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import styles from"../../styles/maeda/comment.module.css";


const CommentForm = ({ articleId }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const queryClient = useQueryClient();

  const changeName = (e) => { setName(e.target.value) }
  const changeComment = (e) => { setComment(e.target.value) }

  const createComment = async (data) => {
    const res = await fetch("http://localhost:5000/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        comment: data.comment,
        article_id: data.article_id
      })
    });
    return res.json();
  }

  const mutation = useMutation({
    mutationFn: createComment,
    onSuccess: (res) => {
      setName("");
      setComment("");
      queryClient.invalidateQueries({queryKey: ["comments"]});
    },
    onError: (error) => {console.error(error)}
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      name: name,
      comment: comment,
      article_id: articleId
    });
  }

  return (
    <form className={styles.form}
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className={styles.NB}>
        <p
          for="name"
        >
          名前:
        </p>
        <input className={styles.name}
          type="text"
          name="name"
          id="name"
          placeholder=""
          value={name}
          onChange={(e) => changeName(e)}
        />

        <p
          for="comment"
        >
        コメント:
        </p>
      <input className={styles.comment}
        type="text"
        name="comment"
        id="comment"
        placeholder=""
        value={comment}
        onChange={(e) => changeComment(e)}
      />
      <button className={styles.submitButton}
        type="submit"
      >
        書き込む
      </button>
      </div>
    </form>
  )
}

export default CommentForm