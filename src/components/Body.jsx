// import resList from "../utils/mockData";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

// BODY COMPONENT
const Body = () => {
  // LOcal state variable = superpowerful state variable
  const arr = useState([]);

  // it is like array destructuring
  const [listOfRestaurants, setListOfRestaurants] = arr;
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  // Whenever state variable updates, react triggers the reconcialiation cycle(re-rendered)
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6105073&lng=77.1145653&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    // Option Chaining
    setListOfRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setFilteredRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  // conditional Rendering
  // if(listOfRestaurants.length === 0){
  //   // return <h1>Loading...</h1>
  //   return <Shimmer />
  // }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus == false) return(
    <>
    <h1>Looks like, You are Offline!!! </h1>
    <h1>Plz check your Internet Connection</h1>
    </>
  )

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
      </div>
      <div className="flex flex-wrap px-12" >
        {filteredRestaurants.map((restaurant) => (
          <Link className="text-link"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

// data.cards[4].card.card.gridElements.infoWithStyle.restaurants
// data.cards[4].card.card.gridElements.infoWithStyle.restaurants
