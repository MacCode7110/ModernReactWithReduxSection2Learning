// 1 Import the React and ReactDOM libraries, and the App component
import React from 'react'; //Library that defines what a component is and how multiple components work together.
import ReactDOM from 'react-dom/client'; //Library that knows how to get a component to show up in the browser.
import App from './App';
// 2 Get a reference to the div with ID root
const element = document.getElementById('root');
// 3 Tell React to take control of that element
const root = ReactDOM.createRoot(element);
// 4
root.render(<App />)
