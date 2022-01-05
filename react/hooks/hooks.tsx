import React, {useEffect, useState, useRef, useMemo, useCallback, useContext} from 'react';

import './App.css';

// useState
// function App() {
//     const [count, setCount] = useState(0);
//     const [activity, setActivity] = useState({
//         activity: 'food',
//         currency: 'RUB'
//     });

//     function increment() {
//         setCount(prev => prev+1);
//     }
//     function decrement() { setCount(prev => prev - 1); }
    
//     function changeActivity(e: any) {
//         setActivity(prev => ({...prev, activity: e.target.value}));
//     }

//     return (
//         <div className="App">
//             <div>
//                 <h1>Accounting:</h1>
//                 <input onChange={changeActivity} />
//                 <h1 className="color">{activity.activity}: <b>{count}{ activity.currency }</b></h1>

//                 <button onClick={increment}>Increase</button>
//                 <button onClick={decrement}>Decrease</button>
//             </div>
//         </div>
//     );
// }

// useEffect
// function App() {
//     const [page, setPage] = useState('posts');
//     const [content, setContent] = useState('Loading');
    
//     useEffect(() => {
//         setContent('Loading');
//         fetch(`https://jsonplaceholder.typicode.com/${page}/1`)
//             .then(response => response.json())
//             .then(json => setContent(JSON.stringify(json, null, 2))
//             );
                    
//     }, [page]);

//     useEffect(() => {
//         console.log('componentDidMount');

//         return () => {
//             console.log('componentWillUnmount');
//         }
//     }, []);

//     return (
//         <div className="App">
//             <div>
//                 <h1>{page}</h1>
//                 <button onClick={()=>setPage('posts')}>Posts</button>
//                 <button onClick={() => setPage('photos')}>photos</button>
//                 <button onClick={() => setPage('users')}>users</button>
//                 <br />
//                 <span ><pre>{content}</pre></span>
//             </div>
//         </div>
//     );
// }

// useRef
// function App() {
//     const inputRef = useRef(null);

//     // ref doesn't call rerender components
    
//     function focus() {
//         if (!inputRef.current) return;
//         (inputRef.current as any).focus();
//     }

//     return (
//         <div className="App">
//             <div>
//                 <input type="text" ref={inputRef} />
//                 <button onClick={focus}>Focus</button>
//             </div>
//         </div>
//     );
// }


// function hardMathematic(num: number) {
//     let i = 0;

//     while (i < 1000000000) i++;

//     return num + 1;
// }

// // useMemo
// function App() {
//     const [number, setNumber] = useState(0);
//     const [color, setColor] = useState(true);

//     let style = useMemo(() => ({
//         color: color ? 'green' : 'red'
//     }), [color]);

//     useEffect(() => console.log('updated'), [style]);

//     // useMemo save the first value and update it only if this value is changed
//     const num = useMemo(()=>(hardMathematic(number)), [number]);

//     return (
//         <div className="App">
//             <div>
//                 <span style={style}>{num}</span>
//                 <button onClick={() => setNumber(prev => prev + 1)}>increase</button>
//                 <button onClick={()=>setColor(prev => !prev)}>change color</button>

//             </div>
//         </div>
//     );
// }

// useCallback
// function ItemsList({ getItems }: any) {
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//         setItems(getItems());
//     }, [getItems]);

//     return (
//         <ul>
//             {items.map(item => 
//                 <li key={item}>{item}</li>
//             )}
//         </ul>
//     );
// }

// function App() {
//     const [number, setNumber] = useState(1);
//     const [color, setColor] = useState(true);

//     let style = useMemo(() => ({
//         color: color ? 'green' : 'red'
//     }), [color]);

//     // caches function execution for deps [number]
//     // useMemo return result of func, useCallback return func
//     const getItems = useCallback(() => {
//         return new Array(number).fill('').map((item, i) => `Item ${i}`);
//     }, [number]);

//     return (
//         <div className="App">
//             <div>
//                 <h1 style={style}>Counter: {number}</h1> <br />
//                 <button onClick={() => setNumber(prev => prev + 1)}>increase</button>
//                 <button onClick={() => setColor(prev => !prev)}>change color</button>
                
//                 <ItemsList getItems={ getItems }/>
//             </div>
//         </div>
//     );
// }

// ===== useContext ===== //
// function Main({togleAlert}: {togleAlert: any}) {
//     return (
//         <main>
//             <p>You have a new message</p>
//             <button onClick={togleAlert}>Show message</button>
//         </main>
//     );
// }

// function Alert() {
//     const alert = useContext(AlertContext);

//     if (!alert) return null;
        
//     return (
//         <div id="alert" style={{ background: 'lime', padding: '10px', color: 'green' }}>
//             <p>This is a message from Stephen Hawking.</p>
//         </div>
//     );
// }

// const AlertContext = React.createContext(false);

// function App() {
//     const [alert, setAlert] = useState(false);

//     const toggleAlert = () => { setAlert(prev => !prev) };

//     return (
//         <div className="App">
//             <AlertContext.Provider value={alert}>
//                 <h1>Party for time Traveler</h1>
//                 <Alert />
//                 <Main togleAlert={toggleAlert}/>
//             </AlertContext.Provider>
//         </div>
//     );
// }
// ^^^^^^ useContext ^^^^^^ //

// === my hook === //
function useLogger(value: any) {
    useEffect(() => {
        console.log('update', value);
    }, [value]);
}

function useInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: any) => setValue(e.target.value);

    const clear = () => setValue('');

    return { 
        bind: { value, onChange },
        value,
        clear
     };
}

function App() {
    // const [text, setText] = useState('false');
    const input = useInput('');

    useLogger(input);

    return (
        <div className="App">
            <input type="text" {...input.bind} /><button onClick={input.clear}>Clear</button>
            <h3>{input.value}</h3>
            
        </div>
    );
}

export default App;
