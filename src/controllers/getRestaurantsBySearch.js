<<<<<<< HEAD
=======
const axios = require("axios");

const getRestaurantsBySearch = (location) => {
  return axios
    .get(`https://dishymcr.herokuapp.com/restaurants/search/${location}`)
    .then((response) => {
      return {
        status: response.status,
        restaurants: response.data.businesses,
      };
    });
};

/* TODO: Create error handling. */

export default getRestaurantsBySearch;
>>>>>>> c2e5e08b1b42e8b3ddc48abb027b38140190c83f
