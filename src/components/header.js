import { useState, useEffect } from "react";
// import "../styles/header.css";
import "../sass/header.css";

export default function Header({ clicked }) {
    const [selected, setSelected] = useState("Wizard Tower");
    const [menu, setMenu] = useState(false);

    const handleClick = (e) => {
        setSelected(e.target.value);
        setMenu(false);
    };

    const handleMenu = () => {
        setMenu(!menu);
    };

    return (
        <>
            <div className="header-container">
                <div className="header-left">
                    <img
                        className="header-img"
                        src="/images/coc-logo.png"
                        width={450}
                        height={150}
                        alt="Town Hall"
                        onClick={handleMenu}
                    />
                    {/* <div className="header-menu-btn">
                        <img
                            className="header-menu-icon"
                            src="/images/bars-solid.svg"
                            width={45}
                            height={45}
                            alt="menu btn"
                        />
                    </div> */}
                </div>
                <div className={menu ? "header-right" : "header-hide-menu"}>
                    <div className="header-btn-container">
                        <button
                            className={
                                selected === "Wizard Tower"
                                    ? "header-btn-selected"
                                    : "header-btn"
                            }
                            value="Wizard Tower"
                            id="Wizard_Tower14.webp"
                            onClick={handleClick}
                            onClickCapture={clicked}
                        >
                            Wizard Towers
                        </button>
                        <button
                            className={
                                selected === "Inferno Tower"
                                    ? "header-btn-selected"
                                    : "header-btn"
                            }
                            value="Inferno Tower"
                            id="Inferno_Tower_Single8.webp"
                            onClick={handleClick}
                            onClickCapture={clicked}
                        >
                            Inferno Towers
                        </button>
                        <button
                            className={
                                selected === "Eagle Artillery"
                                    ? "header-btn-selected"
                                    : "header-btn"
                            }
                            value="Eagle Artillery"
                            id="Eagle_Artillery5.webp"
                            onClick={handleClick}
                            onClickCapture={clicked}
                        >
                            Eagle Artillery
                        </button>
                        <button
                            className={
                                selected === "Scattershot"
                                    ? "header-btn-selected"
                                    : "header-btn"
                            }
                            value="Scattershot"
                            id="Scattershot3.webp"
                            onClick={handleClick}
                            onClickCapture={clicked}
                        >
                            Scattershot
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
