import React, { useState, useEffect } from 'react'

export const Counter = ({ text }) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    // [] = dependencies array: empty - function is not dependent and will work only on Mount
    useEffect(() => {
        console.log("-----------Did Mount--------");
    }, []);

    // dependencies array is not given => mount+ any Update
    useEffect(() => {
        console.log("-----------Did Mount + did Update--------");
    });

    // [variable] = dependencies array: has variable - function will work only on first render and then on the variable Change
    useEffect(() => {
        console.log("-----------Did Mount + Count Change--------");
    }, [count]);

    // useEffect(() => {
    //     console.log("-----------Did Mount + Text Change--------");
    // }, [text]);

    //[] - dependencies array is empty, nd UseEffect RETURNS a function
    useEffect(() => {
        //const interval = setInterval(() => setCount(prevCount => prevCount + 1), 2000)
        return () => {
            //clearInterval();
            console.log("-----------UnMOUNT--------");
        }
    }, []);

    return (
        <div>
            <h3>{count}</h3>
            <h2>{text}</h2>
            <button className="Message-button" onClick={handleClick}>Increase Counter</button>
        </div>
    )
}

// export class Counter extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             count: 0,
//             name: 'My counter'
//         }
//         console.log("-----constructor-------")
//     }

//     componentDidMount() {
//         console.log("-----ComponentDidMount-------")
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log("-----did UPDATE-------", prevProps, prevState)
//     }

//     componentWillUnmount() {
//         console.log("-----will unmount-------")
//     }

//     handleClick = () => {
//         this.setState({ count: this.state.count + 1 })
//         // this.setState(prevState => ({count: prevState.count+1})) - function in setState
//     }
//     render() {
//         console.log("-----render-------")
//         return (
//             <div>
//                 <h3>{this.state.count}</h3>
//                 <h2>{this.state.name}</h2>
//                 <button className="Message-button" onClick={this.handleClick}>Increase Counter</button>
//             </div>
//         )
//     }
// }


// function MessagesList() {
//     const [messages, setMessages] = useState([
//         'mess1',
//         'mess2'
//     ]);
//     return messages.map((message) => <div>{message}</div>)
// }

