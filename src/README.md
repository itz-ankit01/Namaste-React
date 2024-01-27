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

#### Reconcialiation Algorithm
- React uses reconcialiation (whenever something chnages on UI, known as reconcialiation) algo. (also known as React Fiber).

- let's say restaurant container has a 7 res-card, on clicking the button, it filters and update to 3 res-card

#### Virtual DOM
- it is a representation of Actual DOM

```HTML
Actual DOM
<div>
    <div>
        <img>
    </div>    
</div>
```

Virtual DOM is just a Normal JS Object

### Diff Algorithm
- it finds difference b/w updated virtual DOM and previous DOM, then, actually updates the DOM on every render cycle.

- like the ex. of Reconcialiation Algo.
- As soon as clicked on the button, a new object is formed and React find the difference b/w prev obj and the new obj like there was 7 res-card and now, it's 3 res-card, then it actually updates the DOM

###### Why React is fast?
- It is fast and efficient at DOM Manipulation
- It has a diff Algo, which is very efficient.

## [React Fiber documentaion](https://github.com/acdlite/react-fiber-architecture)


# Episode-06

### Monolith Architecture
- All the code are in the same service
- If u hv to change a little in he project, u hv to re-compile the whole project and hv to re-deploy it
- u hv to code in one lang like JS for all the services (like- API COde, UI code, Auth Code, DB code, SMS etc)

### MicroService Architecture
- All hv the separate project, code of each are in separate service, all has it's own service.
- This is known as separation of Concern.
- All these service talk to echother.

- All the service runs on their own port.
- /     :1234 --> UI
- /Api  :1000 --> Backend service
- /SMS  :3000 --> SMS
- all call eachother to communicate with eachother

- [Architecture_documentation](https://medium.com/koderlabs/introduction-to-monolithic-architecture-and-microservices-architecture-b211a5955c63)

## Fetching
- There are 2 ways how web Apps and UI Application, fetch data.

- (1) `Page Loads` -> `API` -> `Render`

- (2) As Soon as the Page Loads
-  It happens `Load` -> `Render` -> `API Call` -> `Re-render`
- Provides Better UX

-  React has BEST RENDER mechanism

### useEffect ( )
```
const Body = () => {
    useEffect( ()=>{
        log('Ankit');
    }, [])
}
```
- Here callback fn which we have passed as argument in useEffect, will be called after rendering UX or, after loading the page of the Body

- when u give input in input Box i.e, `cafe`
- 4 times Body component has been re-rendered