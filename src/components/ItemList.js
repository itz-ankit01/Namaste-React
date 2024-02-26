import { CDN_URL } from "../utils/constants";
const ItemLists = ({ items, dummy }) => {

  console.log(dummy);
  return (

    
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left relative flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold">{item.card.info.name} - </span>
              <span>
                ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice}
              </span>
            </div>
            <p className="text-sm text-slate-400">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4 relative">
            <img
              className="rounded-lg"
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-2 rounded bg-white text-green-500 border border-green-500">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemLists;
