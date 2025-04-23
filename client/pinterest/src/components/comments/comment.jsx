import "./comments.css";
import Image from "../image/image";
import { format } from "timeago.js";

const Comment = ({ comment }) => {

  return (
    <div className="comment" key={comment._id}>
      <Image
        path={comment.user.img || "/general/noAvatar.png"}
        alt="user-image"
      />
      <div className="commentContent">
        <span className="commentUsername">{comment.user.name}</span>
        <p className="commentText">{comment.description}</p>
        <span className="commentTime ">{format(comment.createdAt)}</span>
      </div>
    </div>
  );
};

export default Comment;
