export enum ActionKind {
  Login = 'LOGIN',
  Logout = 'LOGOUT',
  Reset = 'RESET',
  Loading = 'LOADING',
}

export type initialStateType = {
  isLoading: boolean;
  token: string | null;
  id: string | number | null;
};

export const initialState = {
  isLoading: true,
  token: null,
  id: null,
};

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case ActionKind.Reset:
      return initialState;
    case ActionKind.Login:
      return {...state, id: action.payload.id, token: action.payload.token};
    case ActionKind.Loading:
      return {...state, isLoading: false, token: action.payload.token};
  }
};
