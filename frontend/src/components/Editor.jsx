import { useState } from "react";

const Editor = (props) => {
  const [title, setTitle] = useState(props?.blogpost?.title ?? "");
  const [body, setBody] = useState(props?.blogpost?.body ?? "");
  const [author, setAuthor] = useState(props?.blogpost?.author ?? "");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title === "" || body === "" || author === "") {
      return;
    }
    const payload = { title: title, author: author, body: body };

    setTitle("");
    setAuthor("");
    setBody("");

    props.onSave(payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title of blogpost"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="author of blogpost"
        value={author}
        onChange={handleAuthorChange}
      />
      <textarea
        placeholder="body of blogpost"
        onChange={handleBodyChange}
        value={body}
      />
      <button disabled={props.loading} type="submit">
        {props.loading ? "Loading..." : "Save"}
      </button>
    </form>
  );
};

export default Editor;
