import { useState } from "react";
import Header from "./components/header";
import Search from "./components/search";
import Card from "./components/card";
import { data } from "./data/data";
// import "./App.css";
import "./sass/global.css";

function App() {
    const [selected, setSelected] = useState("Wizard Tower");
    const [max, setMax] = useState("Wizard_Tower14.webp");

    const clicked = (e) => {
        setSelected(e.target.value);
        setMax(e.target.id);
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
                    {/* <div className="app-title">
                        <p>{selected}</p>
                    </div> */}
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
