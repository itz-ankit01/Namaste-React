import { CDN_URL } from "../utils/constants";

// Restaurant Card Component
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    deliveryTime,
    costForTwo,
    lastMileTravel,
    sla,
    avgRating,
    cloudinaryImageId,
  } = resData?.info || {};

  const displayRating = avgRating || 3;

  return (
    <div className="res-card" style={{ backgroundColor: "rgb(251 251 251)" }}>
      <img
        className="res-img"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4 className="cuisine">{cuisines.join(", ")}</h4>
      <div className="res-foot">
        <h4
          className="rating"
          style={
            avgRating > 4
              ? { backgroundColor: "#25BE2F" }
              : { backgroundColor: "red" }
          }
        >
          
          {displayRating}⭐
        </h4>
        <h4 className="line">•</h4>
        <h4 className="line">{costForTwo}</h4>
        <h4 className="line">•</h4>
        <h4 className="line">{sla.lastMileTravel ?? '3'} km</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
