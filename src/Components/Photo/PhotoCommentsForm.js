import React from "react";
import { useState } from "react";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import { COMMENT_POST } from "../../Hooks/api";
import useFetch from "../../Hooks/UseFetch";
function PhotoCommentsForm({ id }) {
  const { request, error } = useFetch();
  const [comment, setComment] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    await request(url, options);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Comente..."
        id="comment"
        name="comment"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
    </form>
  );
}

export default PhotoCommentsForm;
