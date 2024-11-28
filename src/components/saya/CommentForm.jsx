import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const CommentForm = ({ articleId }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

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
    <form
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        name="name"
        id=""
        placeholder="名前"
        value={name}
        onChange={(e) => changeName(e)}
      />
      <input
        type="text"
        name="comment"
        id=""
        placeholder="コメント"
        value={comment}
        onChange={(e) => changeComment(e)}
      />
      <button
        type="submit"
      >
        送信
      </button>
    </form>
  )
}

export default CommentForm