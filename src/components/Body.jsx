// import resList from "../utils/mockData";
import { Link } from "react-router-dom";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// BODY COMPONENT
const Body = () => {
  // LOcal state variable = superpowerful state variable
  const arr = useState([]);

  // it is like array destructuring
  const [listOfRestaurants, setListOfRestaurants] = arr;
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  // Whenever state variable updates, react triggers the reconcialiation cycle(re-rendered)
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const json = await response.json();
      console.log(json);

      // Option Chaining
      setListOfRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      setFilteredRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error here, e.g., display an error message to the user
    }
  };

  // conditional Rendering
  // if(listOfRestaurants.length === 0){
  //   // return <h1>Loading...</h1>
  //   return <Shimmer />
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false)
    return (
      <>
        <h1>Looks like, You are Offline!!! </h1>
        <h1>Plz check your Internet Connection</h1>
      </>
    );

    const {loggedInUser, setUserName} = useContext(UserContext);

  // using ternary operator to return component
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center items-center mt-5">
        <div className="p-4 m-4">
          <input
            type="text"
            className="px-10 py-2 border border-solid border-orange-300 p-2 rounded-l-md outline-none hover:border-orange-400"
            placeholder="Search the restaurant you want...."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="py-2 px-4 border border-solid border-orange-300 bg-orange-300 rounded-r-md text-black hover:bg-orange-400 hover:border-orange-400 "
            onClick={() => {
              // filter the restaurant and update the UI
              // SearchText
              console.log(searchText);

              const filteredRestaurants = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(filteredRestaurants);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>

        <div className="p-4 m-4">
          <button
            className="py-2 px-4 border border-solid border-orange-300 bg-orange-300 rounded-md text-black hover:bg-orange-400 hover:border-orange-400"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4
              );
              console.log("btn clicked");
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>

        <div className="p-4 m-4">
          <label className="py-[9px] px-4 border border-solid border-orange-300 bg-orange-300 rounded-l-md text-black ">
            UserName:{" "}
          </label>
          <input
            placeholder="Enter Your UserName"
            className="px-10 py-2 border border-solid border-orange-300 p-2 rounded-r-md outline-none hover:border-orange-400"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value) }
          />
        </div>
      </div>
      <div className="mx-5">
        <div className="flex flex-wrap px-12 justify-center mx-5">
          {filteredRestaurants.map((restaurant) => (
            <Link
              className="text-link"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.avgRating >= 4 ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;

// data.cards[2].card.card.gridElements.infoWithStyle.restaurants
