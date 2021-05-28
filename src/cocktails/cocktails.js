import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import '../App.css';
import AddCocktail from "./add-cocktail";
import CocktailBigBlock from "./cocktail-big-block";
import CocktailCategory from "./cocktails-category";

const Cocktails = () => {
    return (
        <BrowserRouter>
            <div className="cocktails-wrapper">
                <div className="header">
                    <h1>Cocktails</h1>
                </div>
                <div className="menu-list">
                    <span><Link to={`/alcoholic`}>Alcoholic</Link></span>
                    <span><Link to={`/non-alcoholic`}>Non Alcoholic</Link></span>
                    <span><Link to={`/ordinary-drink`}>Ordinary Drink</Link></span>
                    <span><Link to={`/cocktail-glass`}>Cocktail glass</Link></span>
                    <span><Link to={`/champagne-flute`}>Champagne flute</Link></span>
                </div>
                <div className="search-input-wrapper">
                    <input placeholder="Search by name"></input>
                </div>
                <Switch>
                    <Route path={`/:type/:id/details`} component={CocktailCategory} ></Route>
                    <Route path={`/:type/add`} component={AddCocktail} ></Route>
                    <Route path={`/:type/:id`} component={CocktailBigBlock} ></Route>
                    <Route path={`/:type`} component={CocktailCategory} ></Route>
                    <Route path={`/`} render={() => <h3>No category selected</h3>} ></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Cocktails;