import { useState } from "react";

const RatingForm = ({ restaurantsList, dishesList, handleFieldChange, currentRating, handleSubmitRatingForm }) => {

  if (restaurantsList.length > 0) {
    console.log(restaurantsList);
    return (
      <>
        <form onSubmit={handleSubmitRatingForm}>

          <label htmlFor="restaurant">
            Choose your restaurant:
            <select
              id="restaurant"
              name="restaurant"
              onChange={handleFieldChange}
            >
            {restaurantsList.map(restaurant => <option value={restaurant.name} key={restaurant.id}>{restaurant.name}</option>)};
            </select>
          </label>

          <label htmlFor="dish">
            What did you eat?
            <select
              id="dish"
              name="dish"
              onChange={handleFieldChange}
            >
            {dishesList.map(dish => <option value={dish} key={dish}>{dish}</option>)}
            </select>
          </label>

          <label htmlFor="rating">
            Rate it!
            <input 
              type="range"
              id="rating"
              name="rating"
              min="1"
              max="10"
              step="1"
              onChange={handleFieldChange}
            />
            <p>Your rating: {currentRating}</p>
          </label>

          <button type="submit"
          className="RatingForm-submit-button">
            Rate it!
          </button>

        </form>
      </>
    )
  } else {
    return null;
  };
};

export default RatingForm;