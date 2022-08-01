import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters}) => {

    // if(alter_ego === characters) return <></>;
    // return <p className="card-text">{ alter_ego }</p>;

    return (alter_ego === characters)
    ? <></>
    : <p className="card-text">{ alter_ego }</p>
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `/assets/heroes/${ id }.jpg`;

    // const charactersByHero = <p className="card-text">{ alter_ego }</p>;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutter">

                    <div className="col-4">
                        <img src={heroImageUrl} className="card-img" alt={superhero} />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            {/* {
                                (alter_ego !== characters) && charactersByHero
                            } */}
                            <CharactersByHero characters={characters} alter_ego={alter_ego} />
                            <p>{ characters }</p>
                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>
                            <Link to={`/hero/${id}`}>
                                Read More
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
