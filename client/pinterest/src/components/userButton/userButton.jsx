import { useState } from "react";
import "./userButton.css";
import Image from "../image/image";
import { Link, useNavigate } from "react-router";
import apiRequests from "../../utils/apiRequets";
import useAuthStore from "../../utils/authStore";

const UserButton = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // TEMP
  // const currentUser = true;

  const { currentUser, removeCurrentUser } = useAuthStore();

  const handleLogout = async () => {
    try {
      await apiRequests.post("/users/auth/logout", {});
      removeCurrentUser()
      navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  };

  return currentUser ? (
    <div className="userButton">
      <Image
        path={currentUser.img || "/general/noAvatar.png"}
        alt="user-icon"
      />
      <div onClick={() => setOpen((prev) => !prev)}>
        <Image path="/general/arrow.svg" alt="arrow-icon" className="arrow" />
      </div>
      {open && (
        <div className="userOptions">
          <Link to={`/${currentUser.username}`} className="userOption">
            Profile
          </Link>
          <div className="userOption">Setting</div>
          <div onClick={handleLogout} className="userOption">
            Logout
          </div>
        </div>
      )}
    </div>
  ) : (
    <Link to="/auth" className="loginLink">
      Login | Sign up
    </Link>
  );
};

export default UserButton;
