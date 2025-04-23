import EmojiPicker from "emoji-picker-react";
import "./comments.css";
import { useState } from "react";
import apiRequests from "../../utils/apiRequets";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CommentForm = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState("");

  const addComment = async (comments) => {
    const res = await apiRequests.post("/comments", {
      description: desc,
      pin: id,
    });
  };

  const handleEmojiClick = (emoji) => {
    setDesc((prev) => prev + " " + emoji.emoji);
    setOpen(false);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", id] });
      setDesc("");
      setOpen(false);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    mutation.mutate({
      description: desc,
      pin: id,
    });
  };

  return (
    <form className="commentForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a comment"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
      />
      <div className="emoji">
        <div onClick={() => setOpen((prev) => !prev)}>😊</div>
        {open && (
          <div className="emojiPicker">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </form>
  );
};

export default CommentForm;
