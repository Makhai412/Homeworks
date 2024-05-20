import { Link } from 'react-router-dom';

export const NavComponent = () => {
  return (
    <>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow fixed w-full top-0 z-10">
        <div className="max-w-screen-xl flex flex-wrap w-full items-center justify-between mx-auto p-2 font-serif">
            <div className=" flex items-center p-2">
            <img src="https://logos-world.net/wp-content/uploads/2021/09/One-Piece-Logo.png" className="h-20" alt="Logo One Piece" />
            <span className="ml-4 self-center text-2xl  font-extrabold whitespace-nowrap dark:text-white">ONE PIECE</span>
            </div>
            
            <div className=" w-full md:w-auto mx-8" id="navbar-default" >
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                    <Link to='/todoapp' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">To Do App</Link>
                    </li>
                    
                    <li>
                    <Link to='/multiplecustomhook' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Multiple Custom Hook</Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
        
    </>

  )
}

