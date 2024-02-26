import { CDN_URL } from "../utils/constants";

// Restaurant Card Component
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, sla, avgRating, cloudinaryImageId } =
    resData?.info || {};

  const displayRating = avgRating || 3;

  return (
    <div className="p-4 m-4 w-[300px] h-[400px] rounded-xl border border-solid hover:shadow-2xl space-y-2 shadow-lg transition-effect hover-effect">
      <img
        className="rounded-md shadow-2xl"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <div className="flex items-center py-2">
        <h4
          className="rating inline-block rounded-md px-2 py-1 text-white"
          style={
            avgRating >= 4
              ? { backgroundColor: "#25BE2F" }
              : { backgroundColor: "red" }
          }
        >
          {displayRating}⭐
        </h4>
        <span className="mx-2">•</span>
        <h4 className="line">{costForTwo}</h4>
        <span className="mx-2">•</span>
        <h4 className="line">{sla.lastMileTravel ?? "3"} km</h4>
      </div>
      <p className="font-semibold">{cuisines.join(", ")}</p>
    </div>
  );
};

// Hogher Order Component

// input - RestaurantCard -> output: RestaurantCardPromoted

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <div className="absolute top-0 left-0 bg-black text-white mx-3 my-2 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Promoted
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
