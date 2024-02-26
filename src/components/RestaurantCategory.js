import { useState } from "react";
import ItemLists from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  // console.log(data);
  const [showExpanded, setShowExpanded] = useState(false);
  const handleClick = () => {
    setShowIndex(showItems);
    setShowExpanded(!showExpanded);
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 bg-gray-50 mx-auto my-6 p-4  shadow-lg">
        <div
          className="flex justify-between cursor-pointer rounded"
          onClick={handleClick}
        >
          <span className="font-bold text-lg text-slate-800 ml-4">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="mr-4">⬇️</span>
        </div>
        <div>{showItems && <ItemLists items={data.itemCards} dummy={dummy}  />}</div>
      </div>
      {/* Accordian Body */}
    </div>
  );
};
export default RestaurantCategory;
