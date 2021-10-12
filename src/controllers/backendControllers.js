const axios = require("axios");

const getFilteredRating = async (search) => {
  return axios
    .post(`http://localhost:4000/rating/search`, { query: search })
    .then((response) => {
      console.log(response.data);
      return {
        status: response.status,
        ratings: response.data,
      };
    });
};

const getDishes = async () => {
  return axios.get(`https://dishymcr.herokuapp.com/dish/`).then((response) => {
    return {
      status: response.status,
      dishes: response.data,
    };
  });
};

const getRatings = async () => {
  return axios
    .get(`https://dishymcr.herokuapp.com/rating/all`)
    .then((response) => {
      return {
        status: response.status,
        dishes: response.data,
      };
    });
};

const getRestaurants = async () => {
  return axios
    .get(`https://dishymcr.herokuapp.com/restaurant`)
    .then((response) => {
      return {
        status: response.status,
        dishes: response.data,
      };
    });
};

const saveRestaurant = async (review, targetRestaurant) => {
  const { coordinates, name, location } = targetRestaurant;
  return axios
    .post(`https://dishymcr.herokuapp.com/restaurant`, {
      yelp_id: review.restaurant,
      longitude: coordinates.longitude,
      latitude: coordinates.latitude,
      name,
      address1: location.address1,
      address2: location.address2,
      city: location.city,
      zip_code: location.zip_code,
    })
    .then((response) => {
      return {
        status: response.status,
        restaurant: response.data,
      };
    });
};

const saveDish = async (review) => {
  return axios
    .post(`https://dishymcr.herokuapp.com/dish`, {
      name: review.dish,
    })
    .then((response) => {
      return {
        status: response.status,
        dish: response.data,
      };
    });
};

const saveRating = async (review, restaurantId, dishId, userId) => {
  return axios
    .post(`https://dishymcr.herokuapp.com/rating`, {
      rating: review.rating,
      comment: "placeholder comment",
      RestaurantId: restaurantId,
      DishId: dishId,
      UserId: userId,
    })
    .then((response) => {
      return {
        status: response.status,
        rating: response.data,
      };
    });
};

const getRestaurantsByGeolocation = (latitude, longitude) => {
  return axios
    .get(
      `http://localhost:4000/restaurants/geolocation/${latitude}/${longitude}`
    )
    .then((response) => {
      return {
        status: response.status,
        restaurants: response.data.businesses,
      };
    });
};

const getRestaurantsBySearch = (location) => {
  return axios
    .get(`http://localhost:4000/restaurants/search/${location}`)
    .then((response) => {
      return {
        status: response.status,
        restaurants: response.data.businesses,
      };
    });
};

/* TODO: Create error handling. */

module.exports = {
  saveRestaurant,
  saveDish,
  saveRating,
  getDishes,
  getRestaurants,
  getRatings,
  getFilteredRating,
  getRestaurantsByGeolocation,
  getRestaurantsBySearch,
};
