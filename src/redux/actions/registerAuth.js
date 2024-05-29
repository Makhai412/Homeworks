import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { register } from '../slice/auth/AuthSlice';

export const registerAuth = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            if (response) {
                await updateProfile(auth.currentUser, {
                    displayName: email,
                    photoURL: ''
                });
                const { user } = response;
                dispatch(register({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                }));
            }
        } catch (error) {
            console.error('Error creating user:', error);
        }
    }
};
