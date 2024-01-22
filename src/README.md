# Episode 4 [ Let's get Hooked ]
 
 * HEADER
 * - Logo
 * - Navbar
 *  - Home
 *  - About
 *  - Cart
 * BODY
 * - Search
 * - RestaurantCard
 *   - Img
 *   - Name of Restaurant, cuisine, Rating, delivery time
 * FOOTER
 * - Copyright
 * - links
 * - Address


Two types of Export/ Import


- default Export/Import
export default component;
import component from "path";

- Named Export/Import
export const component;
import {component} from "path";

Onclick event takes a callback function
- ```js
   <button onclick={ () => {
    console.log("Button clicked");
    }}></button>


`Note` : JS is very fast in DOM manipulation, that's why JS is fast


# React Hooks

- Hooks are just normal JS utility functions

useState( ) : Generate superpowerful react variable in react
- it keeps the UI in sink with the variable.
- whenever a state variable update, react re-renders its component

useEffect( ): 

