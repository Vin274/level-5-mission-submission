import "../sass/card.css";

export default function Card({ props }) {
    const { cost, value, image } = props;
    return (
        <>
            <div className="card-container">
                <div className="card-main">
                    <figure className="card-fig">
                        <img
                            className="card-img"
                            src={`images/${image}`}
                            alt={`images/${image}`}
                            width={150}
                            height={150}
                        />
                        <p className="card-p">
                            Cost to build: {value} is {cost} Gold
                        </p>
                    </figure>
                </div>
            </div>
        </>
    );
}
