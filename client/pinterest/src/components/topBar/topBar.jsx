import { useNavigate } from "react-router";
import Image from "../image/image";
import UserButton from "../userButton/userButton";
import "./topBar.css";

const TopBar = () => {
  const navigate = useNavigate();

  const handleSunmit = (e) => {
    e.preventDefault();

    navigate(`/search?search=${e.target[0].value}`);
  };
  return (
    <div className="topBar">
      {/* SEARCH */}
      <form onSubmit={handleSunmit} className="search">
        {/* <img src="/general/search.svg" alt="search-icon" /> */}
        <Image path={"/general/search.svg"} alt="search-icon" />
        <input type="text" placeholder="Search" />
      </form>
      {/* USER */}
      <UserButton />
    </div>
  );
};

export default TopBar;
