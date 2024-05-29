import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { login, logout, checkingCredentials } from '../slice/auth/AuthSlice';

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            dispatch(login({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL
            }));
        } catch (error) {
            dispatch(logout({ errorMessage: error.message }));
        }
    };
};

export const startEmailPasswordLogin = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            const user = result.user;
            dispatch(login({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL
            }));
        } catch (error) {
            dispatch(logout({ errorMessage: error.message }));
        }
    };
};

export const startLogout = () => {
    return async (dispatch) => {
        await signOut(auth);
        dispatch(logout());
    };
};
