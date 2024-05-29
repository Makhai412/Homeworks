import { useDispatch, useSelector } from 'react-redux';
import { startEmailPasswordLogin } from '../redux/actions/authActions';
import { Link } from 'react-router-dom';
import { registerAuth } from '../redux/actions/registerAuth';
import Registro from './Registro'; // Importa el componente de registro
import useForm from '../Hooks/useForm';

const LogIn = ({closeModal}) => {
    const dispatch = useDispatch();
    
    const { status } = useSelector(state => state.auth);
    const { email, password, onInputChange } = useForm({
        email: '',
        password: '',
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        // Intenta iniciar sesión primero
        await dispatch(startEmailPasswordLogin(email, password));
        // Si el inicio de sesión falla (el usuario no está registrado), redirige al usuario al formulario de registro
        if (status === 'error') {
            history.push('/registro');
        }
    };

    return (
        <form className='flex justify-center p-8' onSubmit={onSubmit}>
            <div className="max-w-md w-full">
                <label className="block mb-4 text-4xl font-black text-gray-900 dark:text-white">Iniciar Sesión</label>
                <div className="mb-6">
                    <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Correo Electrónico</label>
                    <input type="email" name="email" className="bg-red-50 border border-red-300 text-gray-900 text-base rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                        placeholder="juan.rodriguez@company.com" onChange={onInputChange} value={email}required/>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Contraseña</label>
                    <input
                        type="password"name="password" className="bg-red-50 border border-red-300 text-gray-900 text-base rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                        placeholder="•••••••••" onChange={onInputChange} value={password} required/>
                </div>
                <button
                    type="submit"
                    className="text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 w-full"
                    disabled={status === 'checking'}>
                    Ingresar
                </button>
                <p className='text-black'>¿No tienes cuenta? Registrate <strong> <Link to='/registro' onClick={closeModal}>Aquí</Link></strong></p>
            </div>
        </form>
    );
};

export default LogIn;
