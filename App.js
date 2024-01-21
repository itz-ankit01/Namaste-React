import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement a JS Object => HTMLElement( render package convert it into HTML)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React ❤️"
);
console.log(heading);

// JSX -  HTML like or XML like syntax
// JSX (transpiled (JSX is converted so that it can be readable by JS engine) before it reaches to JS engine) - PARCEL -> Babel(a JS Compiler, it transpiled the JSX code before it reaches to browser)

// Behind the Scene
// JSX Code => Babel transpiles it to React.createElement => ReactElement a JS Object => HTMLElement( render package convert it into HTML)



// 2 Types of React Component
// Class Based Component - OLD
// Functional component - NEW

// React Functional Component : A function Whose name start with Capital Letter , which returns a React Element

const HeadingComponent = () => {
  return <h1>Namaste React Functional Component</h1>;
};



// React component
const Title = () => (
    <h1 className="heading" tabIndex="5">
        Namaste React Using JSX
    </h1>
  );

// Component Composition
const HeadingComponent2 = () => (
    <div id="container">
        <Title/>
        {Title()}
        <Title></Title>
        <h1 className="head">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2/>);
