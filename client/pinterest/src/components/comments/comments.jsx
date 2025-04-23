import "./comments.css";
import { useQuery } from "@tanstack/react-query";
import apiRequests from "../../utils/apiRequets";
import Comment from "./comment";
import CommentForm from "./commentForm";

const Comments = ({ id }) => {

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => apiRequests.get(`/comments/${id}`).then((res) => res.data),
  });

  if (isPending) return "loading";
  if (error) return "An error occured" + error.message;
  if (!data) return "User not found!";
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">
          {data.length === 0 ? "No comments" : data.length + " Comments"}
        </span>
        {/* COMMENT */}
        {data.map((comment) => (
          <Comment comment={comment} key={comment._id} />
        ))}
      </div>
      <CommentForm id={id}/>
    </div>
  );
};

export default Comments;
