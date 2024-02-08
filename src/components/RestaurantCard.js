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
    <div className="p-4 m-4 w-[250px] rounded-xl border border-solid  bg-slate-50 hover:shadow-2xl" >
      <img
        className="rounded-md shadow-2xl"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <p className="font-semibold">{cuisines.join(", ")}</p>
      <div className="flex py-4">
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
