import "./profilePage.css";
import Image from "../../components/image/image";
import { useState } from "react";
import Gallery from "../../components/gallery/gallery";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import Skeleton from "../../components/skeleton/skeleton";
import apiRequests from "../../utils/apiRequets";
import Boards from "../../components/boards/boards";
import FollowButton from "./followButton";

const ProfilePage = () => {
  const [type, setType] = useState("saved");

  const { username } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["profile", username],
    queryFn: () =>
      apiRequests.get(`/users/${username}`).then((res) => res.data),
  });

  if (isPending) return <Skeleton />;
  if (error) return "An error occured" + error.message;
  if (!data) return "User not found!";  

  return (
    <div className="profilePage">
      <Image
        className="profileImage"
        w={100}
        h={100}
        src={data.img || "/general/noAvatar.png"}
        alt="user-image"
      />
      <h1 className="profileName">{data.name}</h1>
      <span className="profileUsername">@{data.username}</span>
      <div className="followCounts">
        {data.followerCount} followers · {data.followingCount} followings
      </div>
      <div className="profileInterractions">
        <Image path="/general/share.svg" alt="icon" />
        <div className="profileButtons ">
          <button>Message</button>
          <FollowButton
            isFollowing={data.isFollowing}
            username={data.username}
          />
        </div>
        <Image path="/general/more.svg" alt="icon" />
      </div>
      <div className="profileOptions">
        <span
          onClick={() => setType("created")}
          className={type === "created" ? "active" : ""}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={type === "saved" ? "active" : ""}
        >
          Saved
        </span>
      </div>
      {type === "created" ? (
        <Gallery userId={data._id} />
      ) : (
        <Boards userId={data._id} />
      )}
    </div>
  );
};
export default ProfilePage;
