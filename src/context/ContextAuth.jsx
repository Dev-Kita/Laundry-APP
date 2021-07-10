import * as React from "react";

let ContextAuth = React.createContext();

let initialState = {
  isLoading : true,
  token: null,
  id: null
};

let action = {
  login: (username,password) => async(dispatch)=>{
    try {
      dispatch({type: login,payload:{id: 'test', token: 'test'}})
    } catch (error) {
      
    }
  },
  logout: () => (dispatch)=>{
    dispatch({type: RESET})
  }
}

let reducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return initialState;
    case "LOGIN":
      return { ...state, id: action.payload.id, token: action.payload.token};
  }
};

function ContextAuthProvider(props) {
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <ContextAuth.Provider value={value}>{props.children}</ContextAuth.Provider>
  );
}

let ContextAuthConsumer = ContextAuth.Consumer;

export { ContextAuth, ContextAuthProvider, ContextAuthConsumer };