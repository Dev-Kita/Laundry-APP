import * as React from "react";
import { authReducer, initialState, initialStateType } from "../reducers/authReducer";

export const AuthContext = React.createContext<{ state: initialStateType, dispatch: React.Dispatch<any> }>({
  state: initialState,
  dispatch: () => null
});

export const AuthProvider = ({ children }: any) => {
  let [state, dispatch] = React.useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;