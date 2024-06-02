
import { Routes, Route } from 'react-router-dom';
import { MultipleCustomHooks } from './MultipleCustomHooks';
import { TodoApp } from './TodoApp';
import { NavComponent } from './NavComponent';
import LogIn from './LogIn';
import Registro from './Registro';
import { Upload } from './Upload';


export const Rutas = () => {
  return (
    <>
      <NavComponent />
      <Routes>
        <Route path='/todoapp' element={<TodoApp />} />
        <Route path='/multiplecustomhook' element={<MultipleCustomHooks />} />
        <Route path='/upload' element={<Upload/>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/registro' element={<Registro/>} />
      </Routes>
    </>
  );
};

