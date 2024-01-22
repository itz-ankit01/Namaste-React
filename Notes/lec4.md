# Episode 4 [ Talk is cheap, show me the code ]

#### Before doing any Project, draw general design of the Website


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


## Props
- It is the property of the component.
- Passing props is like passing an argument to the function
- passing props to the component is like
- `<RestaurantCard name="KFC", cuisine="Burger"/>`


## Config Driven UI
- controlling your website UI using data(which came from Backend)
- Eg. Swiggy website has different UI for different location, Banglore, kolkata, delhi
- `Note` : whenever u apply map for traversing the list, always give a unique key
- `{key = restaurant.data.id}` 
- do not use index as key (Bad Practice)
- cuz, when u add a new item, react will get confused about which properties belong to which mapped component

- `not using key(not acceptable) <<<< use index as key(bad practice) <<<<< use id as key (best practice)`


