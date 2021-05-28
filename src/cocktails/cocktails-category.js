import axios from "axios";
import { useEffect, useState } from "react";
import CocktailDetails from "./cocktail-details";
import CocktailSmallBlock from "./cocktail-small-block";

const CocktailCategory = (props) => {
    const [state, setState] = useState({
        cocktails: [],
        selectedDrink: undefined,
        isLoaded: false,
    });

    useEffect(() => {
        loadWithAxios(props.match.params.type)
    }, [props.match.params.type]);

    function loadWithAxios(type) {
        let apiFilter;
        switch (type) {
            case 'alcoholic':
                apiFilter = 'a=Alcoholic'
                break;
            case 'non-alcoholic':
                apiFilter = 'a=Non_Alcoholic'
                break;
            case 'ordinary-drink':
                apiFilter = 'c=Ordinary_Drink'
                break;
            case 'cocktail-glass':
                apiFilter = 'g=Cocktail_glass'
                break;
            default:
                apiFilter = 'g=Champagne_flute'
                break;
        }
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${apiFilter}`)
            .then(res => {
                if (res.data) {
                    setState({ isLoaded: true, cocktails: res.data.drinks });
                }
            })
    }

    function getCategoryTitle(type) {
        switch (type) {
            case 'alcoholic':
                return 'Alcoholic'
            case 'non-alcoholic':
                return 'Non Alcoholic'
            case 'ordinary-drink':
                return 'Ordinary Drink'
            case 'cocktail-glass':
                return 'Cocktail glass'
            default:
                return 'Champagne flute'
        }
    }

    function renderCategory() {
        const categoryDrinks = state.cocktails.map(drink => (
            <CocktailSmallBlock key={drink.idDrink} drink={drink} url={props.match} />
        ));

        return (<div className="category-wrapper">
            { props.match.params.id && <CocktailDetails match={props.match} drinkID={props.match.params.id} />}

            <h2>{getCategoryTitle(props.match.params.type)}</h2>
            <div className="items-list">
                {categoryDrinks}
            </div>
        </div>);
    }


    return renderCategory();
}

export default CocktailCategory;