import { useReducer } from "react";

function reducer(state, action) {
    if (action.task === "increment kro") {
        return state + 1;
    }

    if (action.task === "decrement kro") {
        return state - 1;
    }

    return state;
}

function App() {

    const [state, dispatch] = useReducer(reducer, 11);

    function handleIncrementReducer() {
        dispatch({ task: "increment kro" });
    }

    function handleDecrement() {
        dispatch({ task: "decrement kro" });
    }

    return (
        <>
            <h1>{state}</h1>

            <button onClick={handleIncrementReducer}>
                Increment
            </button>

            <button onClick={handleDecrement}>
                Decrement
            </button>
        </>
    );
}

export default App;