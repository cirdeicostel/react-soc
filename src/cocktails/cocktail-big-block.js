import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CocktailBigBlock = (props) => {
    const [drinkstate, setDrinkState] = useState({
        drink: {},
        isLoaded: false
    });

    useEffect(() => {
        axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`)
            .then(res => {
                if (res.data) {
                    setDrinkState({ drink: res.data.drinks[0] });
                }
            })
    }, [props.match.params.id]);
    
    return (<div className="cocktail-big">
        <h3>{drinkstate.drink.strDrink}</h3>
        <img src={drinkstate.drink.strDrinkThumb} alt={drinkstate.drink.strDrink} className="image" style={{ width: "300px", height: "200px"  }} />
        <Link to={`/${props.match.params.type}`}>
            <button>Back</button>
        </Link>
    </div>);
}

export default CocktailBigBlock;