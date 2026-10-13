import { useReducer } from "react";

const ReducePractice2 = () => {

    function reducers(state, action) {

        if (action.task === "increment kro") {
            return {
                ...state,
                count: state.count + 1
            };
        }

        if (action.task === "updateName") {
            return {
                ...state,
                data: {
                    ...state.data,
                    name: action.val
                }
            };
        }

        if (action.task === "updateEmail") {
            return {
                ...state,
                data: {
                    ...state.data,
                    email: action.val
                }
            };
        }

        return state;
    }

    const [state, dispatch] = useReducer(reducers, {
        data: {
            name: "john",
            email: "john@gmail.com"
        },
        count: 10
    });

    function handleIncrement() {
        dispatch({ task: "increment kro" });
    }

    return (
        <div>
            <p>userName = {state.data.name}</p>
            <p>userEmail = {state.data.email}</p>
            <p>count = {state.count}</p>

            <button onClick={handleIncrement}>
                Increment
            </button>

            <button onClick={() => dispatch({
                task: "updateName",
                val: "Dhruv",
            })}>
                Update Name
            </button>

            <button onClick={() => dispatch({
                task: "updateEmail",
                val: "Dhruv@gmail.com"
            })}>
                Update Email
            </button>
        </div>
    );
};

export default ReducePractice2;