import React from "react";

const Recipe = (props) => {

    return (
        <div>
            <h3>{props.recipe.label}</h3>
            <img src={props.recipe.image} alt={props.recipe.label} />
            <h4>{props.recipe.calories}</h4>
            <p>{props.recipe.ingredientLines}</p>
        </div>
    );
};

export default Recipe;
