import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from "flowbite-react";
import Registro from './Registro';
import { useSelector } from 'react-redux';
import { startLogout } from '../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import LogIn from './LogIn';

let customButtonTheme = {
  color: {
    primary: "bg-red-600 text-white hover:bg-white hover:text-red-600",
  },
};

export const NavComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const closeModal = () => {
    setOpenModal(false); 
  };
  // Usar useMemo para observar el estado de autenticación y determinar si el usuario está autenticado
  const isAuthenticated = useMemo(() => status === 'authenticated', [status]);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow fixed w-full top-0 z-10">
        <div className="max-w-screen-xl flex flex-wrap w-full items-center justify-between mx-auto p-2 font-serif">
          <div className="flex items-center p-2">
            <img
              src="https://logos-world.net/wp-content/uploads/2021/09/One-Piece-Logo.png"
              className="h-20"
              alt="Logo One Piece"
            />
            <span className="ml-4 self-center text-2xl font-extrabold whitespace-nowrap dark:text-white">
              ONE PIECE
            </span>
          </div>
          
          <div className="w-full md:w-auto mx-8" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to='/todoapp'
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  To Do App
                </Link>
              </li>
              <li>
                <Link
                  to='/multiplecustomhook'
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Multiple Custom Hook
                </Link>
              </li>
              {isAuthenticated ? (
                <li>
                  <button onClick={handleLogout}>Cerrar sesión</button>
                </li>
              ) : (
                <li>
                  <Button
                    className="text-gray-900 rounded bg-transparent hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent"
                    onClick={() => setOpenModal(true)}
                    color="primary"
                    theme={customButtonTheme}>
                    Login
                  </Button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <LogIn closeModal={closeModal} />
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
};
