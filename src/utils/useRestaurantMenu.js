// useRestaurantMenu.js
import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    if (resId) {
      fetchData();
    }
  }, [resId]);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json.data);
      console.log(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error as needed
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
