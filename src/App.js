import { useState } from "react";
import Header from "./components/header";
import Search from "./components/search";
import Card from "./components/card";
import { data } from "./data/data";
import "./sass/app.css";

function App() {
    const [selected, setSelected] = useState("Wizard Tower");

    const clicked = (e) => {
        setSelected(e.target.value);
    };

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <Header clicked={clicked} />
            <div className="app-container">
                <div className="app-top">
                    <div className="app-img-container">
                        <img
                            className="app-img"
                            src={`images/coc-loading-current.png`}
                            alt=""
                        />
                    </div>
                </div>
                <Search />
            </div>
            <div className="app-bottom">
                {data
                    .filter((i) => i.name === selected)
                    .map((props, index) => (
                        <Card key={index} props={props} />
                    ))}
                <button className="app-btt-btn" onClick={backToTop}>
                    Back to Top
                </button>
            </div>
        </>
    );
}

export default App;
