export default function Image(props) {
    return (
        <div className="image">
            <img src={props.src} alt={props.alt} />
            {props.alt && (<p>{props.alt}</p>)}
        </div>
    );
}