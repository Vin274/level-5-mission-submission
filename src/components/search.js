// import "../styles/search.css";
import "../sass/search.css";

export default function Search() {
    return (
        <>
            <div className="search-function">
                <input className="search-bar" size="50" type="text"></input>
                <input className="search-submit" type="submit"></input>
            </div>
        </>
    );
}
