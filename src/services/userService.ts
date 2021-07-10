import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login as loginAction} from '../redux/authSlice';

// export async function login(username: string, password: string) {
//   const dispatch = useDispatch();
//   const dummyData = {
//     id: 1,
//     username: 'admin',
//     token: '123',
//   };
//   const jsonValue = JSON.stringify(dummyData);
//   await AsyncStorage.setItem('auth', jsonValue);
//   dispatch(loginAction(dummyData));
// }

// export function logout() {
//   console.warn('halo');
// }

const dispatch = useDispatch();
export function useAuth() {
  try {
    return async () => {
      const auth = await AsyncStorage.getItem('auth');
      console.warn('e');
      if (auth != null) {
        const data = JSON.parse(auth);
        // dispatch(authCheck(data));
      }
    };
  } catch (e) {
    console.error(e);
  }
}
