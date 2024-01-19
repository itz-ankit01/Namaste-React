/**
 * <div id='parent'>
 *      <div id='child'>
 *          <h1> i'm h1 tag </h1>
 *          <h2> i'm h2 tag </h2>
 *      </div>
 *      <div id='child2'>
 *          <h1> i'm h1 tag </h1>
 *          <h2> i'm h2 tag </h2>
 *      </div>
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser understands) 
 * 
 */


const parent = React.createElement(
    'div',
    {id:'parent'}, [       // {} = contains attributes to tag
    React.createElement('div', {id: 'child'},[ 
    React.createElement('h1', {}, "I'm h1 tag"),
    React.createElement('h2', {}, "I'm h2 tag")
    ]),
    React.createElement('div', {id: 'child2'},[ 
    React.createElement('h1', {}, "I'm h1 tag"),
    React.createElement('h2', {}, "I'm h2 tag")
    ])
]);

console.log(parent);       // here Heading is an Object not a h1 tag still, This object represents the virtual DOM structure of the h1 element you've created using ReactElement

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)        //  how react works with virtual DOM elements and renders them into the real DOM