import * as React from "react";
import { authReducer, initialState, initialStateType } from "../reducers/authReducer";

export const ContextAuth = React.createContext<{ state: initialStateType, dispatch: React.Dispatch<any> }>({
  state: initialState,
  dispatch: () => null
});

export const AuthProvider = ({ children }: any) => {
  let [state, dispatch] = React.useReducer(authReducer, initialState);

  return (
    <ContextAuth.Provider value={{ state, dispatch }}>{children}</ContextAuth.Provider>
  );
}

export const AuthConsumer = ContextAuth.Consumer;