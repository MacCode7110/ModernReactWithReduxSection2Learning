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
    //<input style={{ border: '3px solid red' }} type={inputType} min={minValue}/>
    //Could do maxLength = {5}
    //Can also do <input spellCheck /> and <input spellCheck={false} >
    //Style props in JSX need an object unlike regular HTML: { border: '1px solid blue'}
    return <textarea style={{ border: '1px solid blue'}} autoFocus={true} maxLength={5}/>;
}

export default App;