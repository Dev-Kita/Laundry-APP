import {ActionKind} from '../reducers/authReducer';

export const login = async (
  dispatch: React.Dispatch<any>,
  payload: {username: string; password: string},
) => {
  try {
    if (payload.username === 'test' && payload.password === 'test') {
      dispatch({type: ActionKind.Login, payload: {id: 'test', token: 'test'}});
    } else {
      console.warn('password salah');
    }
  } catch (error) {}
};

export const logout = (dispatch: React.Dispatch<any>) => {
  dispatch({type: ActionKind.Reset});
};
