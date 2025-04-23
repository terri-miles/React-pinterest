import "./boards.css";
import Image from "../image/image";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import apiRequests from "../../utils/apiRequets";
import Skeleton from "../skeleton/skeleton";
import { format } from "timeago.js";
import { Link } from "react-router";

const Boards = ({ userId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["boards", userId],
    queryFn: () => apiRequests.get(`/boards/${userId}`).then((res) => res.data),
  });

  if (isPending) return <Skeleton />;
  if (error) return "An error occured" + error.message;
  if (!data) return "User not found!";

   return (
    <div className="collections">
      {/* COLLECTION */}
      {data?.map((board) => (
        <Link
          to={`/search?boardId=${board._id}`}
          className="collection"
          key={board._id}
        >
          <Image src={board.firstPin.media} alt="" />
          <div className="collectionInfo">
            <h1>{board.title}</h1>
            <span>
              {board.pinCount} Pins · {format(board.createdAt)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Boards;
Boards;
