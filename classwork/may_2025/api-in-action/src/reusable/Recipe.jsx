
import React from "react";

const Recipe = (props) => {
    const {data, isLoading} = props.data;

    console.log(data);
    console.log(isLoading);

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }


    return (
        <div>
            {
                data.recipes?.map((recipe) => (
                    <div key={recipe.id}>
                        <img src={recipe.image} alt="image"/>
                        <p>{recipe.name}</p>
                        <p>{recipe.difficulty}</p>
                        <p>{recipe.cuisine}</p>
                        <p>{recipe.prepTimeMinutes}</p>
                        <p>{recipe.cookTimeMinutes}</p>
                        <p>{recipe.rating}</p>
                        <p>{recipe.reviewCount}</p>
                        <p>{recipe.tags?.map((tag) => (
                            <span key={tag}></span>
                        ))}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Recipe;