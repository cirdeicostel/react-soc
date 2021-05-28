import { useState } from "react";
import { Link } from "react-router-dom";

const CocktailSmallBlock = (props) => {
    const [state] = useState({
        drink: props.drink
    })

    return (
        <div className="item-block">
            <Link to={`/${props.url.params.type}/${state.drink.idDrink}`}>
                <img src={state.drink.strDrinkThumb} alt={state.drink.strDrink} className="image" style={{ width: "100px", height: "100px" }} />
            </Link>
            <Link to={`/${props.url.params.type}/${state.drink.idDrink}/details`}>
                <span>{state.drink.strDrink}</span>
            </Link>
        </div>
    );
}

export default CocktailSmallBlock;