import { CDN_URL } from "../utils/constants";

// Restaurant Card Component
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    costForTwo,
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
      <p className="cuisine">{cuisines.join(", ")}</p>
      <div className="res-foot">
        <h4
          className="rating"
          style={
            avgRating >= 4
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
