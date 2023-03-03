import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <div className="navbar">
            <Link to="/">Головна</Link>
            <Link to="/olexandria">Олександрія</Link>
            <Link to="/sights">Визначні місця</Link>
            <Link to="/photos/1">Галерея</Link>
            <Link to="/add-photo">Додати фото</Link>
        </div>
    );
}