import { Link } from "react-router-dom";
import Image from "./Image";
import { useParams } from "react-router-dom";
import { allImages } from "./Photos.jsx";
export default function BigImage() {
    let { id } = useParams();
    if (id > allImages.length - 1 || id < 0) {
        return <h1>Select a photo</h1>;
    }
    return (
        <div className="big-image">
            <Link to={`/photos/${+id > 1 ? +id - 1 : +id}`} className="photo-link">
                {" "}
                &lt;-- Back
            </Link>
            <Image src={allImages[id].url} />
            <Link to={`/photos/${+id < allImages.length - 1 ? +id + 1 : +id}`} className="photo-link">
                Next --&gt;
            </Link>
        </div>
    );
}