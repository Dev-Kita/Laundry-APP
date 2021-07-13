import * as React from "react";


let initialState = {
  isLoading: true,
  token: null,
  id: null
};

let ContextAuth = React.createContext(initialState);

enum ActionKind {
  Login = 'LOGIN',
  Logout = 'LOGOUT',
  Reset = 'RESET'
}

let action = {
  login: (username: string, password: string) => async (dispatch: any) => {
    try {
      dispatch({ type: ActionKind.Login, payload: { id: 'test', token: 'test' } })
    } catch (error) {

    }
  },
  logout: () => (dispatch: any) => {
    dispatch({ type: ActionKind.Reset })
  }
}

let reducer = (state: any, action: any) => {
  switch (action.type) {
    case ActionKind.Reset:
      return initialState;
    case ActionKind.Login:
      return { ...state, id: action.payload.id, token: action.payload.token };
  }
};

function ContextAuthProvider({ children }: any) {
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <ContextAuth.Provider value={value}>{children}</ContextAuth.Provider>
  );
}

let ContextAuthConsumer = ContextAuth.Consumer;

export { ContextAuth, ContextAuthProvider, ContextAuthConsumer };