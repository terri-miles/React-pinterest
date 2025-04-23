import "./postPage.css";
import Image from "../../components/image/image";
import PostInterractions from "../../components/postInterractions/postInterractions";
import { Link, useParams } from "react-router";
import Comments from "../../components/comments/comments";
import { useQuery } from "@tanstack/react-query";
import apiRequests from "../../utils/apiRequets"
import Skeleton from "../../components/skeleton/skeleton";

const PostPage = () => {
  const { id } = useParams();  

  const { isPending, error, data } = useQuery({
    queryKey: ["pin", id],
    queryFn: () => apiRequests.get(`/pins/${id}`).then((res) => res.data),
  });

  if (isPending) return <Skeleton />;
  if (error) return "An error has occured" + error.message;
  if (!data) return "Pin not found!";

  return (
    <div className="postPage">
      <svg
        height="20"
        viewBox="0 0 24 24"
        width="20"
        style={{ cursor: "pointer" }}
      >
        <path d="M8.41 4.59a2 2 0 1 1 2.83 2.82L8.66 10H21a2 2 0 0 1 0 4H8.66l2.58 2.59a2 2 0 1 1-2.82 2.82L1 12z"></path>
      </svg>
      <div className="postContainer">
        <div className="postImg">
          <Image path={data.media} alt="post-image" w={736} />
        </div>
        <div className="postDetails ">
          <PostInterractions postId={id}/>
          <Link to={`/${data.user.username}`} className="postUser">
            <Image path={data.user.img || "/general/noAvatar.png"} />
            <span>{data.user.name}</span>
          </Link>
          <Comments id={data._id}/>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
