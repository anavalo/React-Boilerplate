import { createContext, useReducer } from "react";

const ThemeContext = createContext({});
const ThemeDispatchContext = createContext({});

function reducer(state, action) {
    switch (action.type) {
        case 'theme':
            return {...state,theme: action.payload};
        default:
            throw new Error();
    }
}

const ThemeProvider = ({ children, theme }) => {

    const [state, dispatch] = useReducer(reducer, {
        data: theme
    });

    return (
        <ThemeContext.Provider value={state}>
            <ThemeDispatchContext.Provider value={dispatch}>
                {children}
            </ThemeDispatchContext.Provider>
        </ThemeContext.Provider>
    );
};

export { ThemeContext };
export { ThemeDispatchContext };
export { ThemeProvider };
