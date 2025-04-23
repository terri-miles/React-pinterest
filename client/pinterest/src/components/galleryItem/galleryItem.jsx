import "./galleryItem.css";
import { Link } from "react-router";
import Image from "../image/image";

const GalleryItem = ({ item }) => {
  const optimizedHeight = (372 * item.height) / item.width;
  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      {/* <img src={item.media} alt="gallery-image" /> */}
      <Image
        w={372}
        h={optimizedHeight}
        path={item.media}
        alt={"gallery-image"}
      />
      <Link to={`/pins/${item._id}`} className="overlay" />
      <button className="saveButton">Save</button>
      <div className="overlayIcons">
        <button>
          <Image path="/general/share.svg" alt="share-icon-image" />
        </button>
        <button>
          <Image path="/general/more.svg" alt="more-icon-image" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
