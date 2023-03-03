import { Link } from "react-router-dom";

export default function LinkWrap(props) {
    return (
        <Link to={props.to}>
            {props.children}
        </Link>
    );
}