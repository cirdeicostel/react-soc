import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CocktailDetails = (props) => {
    const [drinkstate, setDrinkState] = useState({
        drink: {}
    });

    useEffect(() => {
        axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`)
            .then(res => {
                if (res.data) {
                    setDrinkState({ drink: res.data.drinks[0] });
                }
            });
    }, [props.match.params.id])

    return (<div className="cocktail-details-wrapper">
        <h2>Details</h2>
        <Link to={`/${props.match.params.type}`}>
            <button>Hide Details</button>
        </Link>
        <div className="details-container">
            <img src={drinkstate.drink.strDrinkThumb} alt={drinkstate.drink.strDrink} className="image" style={{ width: "300px", height: "300px" }} />
            <div className="info-wrapper">
                <h3>{drinkstate.drink.strDrink}</h3>
                <h4>{drinkstate.drink.idDrink}</h4>
                <h4>{drinkstate.drink.strGlass}</h4>
                <h4>{drinkstate.drink.strInstructions}</h4>
            </div>
        </div>
    </div>);
}

export default CocktailDetails;