import { Outlet } from "react-router-dom";
import Image from "./Image";
import LinkWrap from "./LinkWrap";

export let allImages = getImages(17);

export default function Photos() {
    return (
        <>
            <Outlet />
            <div className="images gallery">
                {allImages.map(image => (
                    <LinkWrap to={`/photos/${image.id}`} children={<Image src={image.url} alt={image.description} key={image.id} />} />
                ))}
            </div>
        </>
    );
}
function getImages(max) {
    let images = [];
    for (let i = 1; i <= max; i++) {
        images.push({url: `/img/${i}.png`, description: ``, id: images.length});
    }
    return images;
}
