import { useDispatch, useSelector } from 'react-redux';
import useForm from '../Hooks/useForm';
import { registerAuth } from '../redux/actions/registerAuth';
import { startGoogleSignIn } from '../redux/actions/authActions';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';
import { register, logout } from '../redux/slice/auth/AuthSlice';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Modal } from "flowbite-react";
import LogIn from './LogIn';

const Registro = () => {
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.auth);
    const { email, password, onInputChange, formState } = useForm({
        email: '',
        password: '',
    });

    const [openModal, setOpenModal] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        await dispatch(registerAuth(email, password));
        // Redirigir al usuario a la ruta deseada después del registro
        window.location.href = '/multiplecustomhook';
    };

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (!user) return dispatch(logout());
            dispatch(register({ email: user.email }));
        });
    }, [dispatch]);

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    };

    const closeModal = () => {
        setOpenModal(false); 
    };

    return (
        <form className='flex flex-col items-center p-8' onSubmit={onSubmit}>
            <label className="text-3xl font-bold mb-4">Registro</label>
            <div className="w-full">
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Correo Electrónico</label>
                <input
                    type="email"
                    name="email"
                    className="input-field"
                    placeholder="juan.rodriguez@company.com"
                    onChange={onInputChange}
                    value={email}
                    required
                />
            </div>
            <div className="w-full mt-4">
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    className="input-field"
                    placeholder="•••••••••"
                    onChange={onInputChange}
                    value={password}
                    required
                />
            </div>
            <button
                type="submit"
                className="btn-primary mt-8"
                disabled={status === 'checking'}
            >
                Registrar
            </button>
            <button
                type="button"
                onClick={onGoogleSignIn}
                className="btn-google mt-4"
                disabled={status === 'checking'}
            >
                Ingresar con Google
            </button>
            <p className='text-black mt-4'>¿Ya tienes cuenta? <Link to='#' className="text-blue-600 hover:underline" onClick={() => setOpenModal(true)}>Inicia sesión aquí</Link></p>
            <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
                <Modal.Header />
                <Modal.Body>
                    <LogIn closeModal={closeModal} />
                </Modal.Body>
                <Modal.Footer />
            </Modal>
        </form>
    );
};

export default Registro;
