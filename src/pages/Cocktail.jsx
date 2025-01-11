import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";
import wrapper from "../assets/wrappers/CocktailPage"
const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async({params}) => {
    const {id} = params
    const {data} = await axios.get(`${singleCocktailUrl}${id}`)
    return {id, data};
};

const Cocktail =() => {
    const {id, data} = useLoaderData();

    const singleDrink = data.drinks[0];
    console.log(singleDrink);
    return (
        <h1>Cocktail?</h1>
    )
}

export default Cocktail;