// 1 Import the React and ReactDOM libraries
import React from 'react'; //Library that defines what a component is and how multiple components work together.
import ReactDOM from 'react-dom/client' //Library that knows how to get a component to show up in the browser.
// 2 Get a reference to the div with ID root
const element = document.getElementById('root');
// 3 Tell React to take control of that element
const root = ReactDOM.createRoot(element);
// 4 Create a component
function App() {
    const inputType ="number";
    const minValue = 5;
    //const name = "Matthew"
    //const age = 23;
    //let message = 'Bye there!'
    // if (Math.random() > 0.5) {
    //     message = 'Hello there!';
    // }
    //We do not always need to declare variables before returning values displayed in JSX in React: Could place the following in the h1 tag: new Date().toLocaleTimeString()
    //We can place multiple variables in a return statement: <h1>Hi, my name is {name} and my age is {age}</h1>
    return <input style={{ border: '3px solid red' }} type={inputType} min={minValue}/>
}
// 5
root.render(<App />)
