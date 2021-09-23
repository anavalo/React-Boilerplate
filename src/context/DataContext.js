import { createContext, useReducer } from 'react';

const StateContext = createContext({});
const DispatchContext = createContext({});

function reducer(state, action) {
  switch (action.type) {
    case 'data':
      return { ...state, data: action.payload };
    default:
      throw new Error();
  }
}

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
  });

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export { StateContext };
export { DispatchContext };
export { DataProvider };
