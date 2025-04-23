import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiRequests from "../../utils/apiRequets";

const followUser = async (username) => {
  const res = await apiRequests.post(`/users/follow/${username}`);
  return res.data;
};

const FollowButton = ({ isFollowing, username }) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
      mutationFn: followUser,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["profile", username] });
      },
    });

  return (
    <button
    onClick={() => mutation.mutate(username)}
    disabled={mutation.isPending}
  >
    {isFollowing ? "Unfollow" : "Follow"}
  </button>
  );
};

export default FollowButton;
