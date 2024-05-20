
import { Routes, Route } from 'react-router-dom';
import { MultipleCustomHooks } from './MultipleCustomHooks';
import { TodoApp } from './TodoApp';
import { NavComponent } from './NavComponent';

export const Rutas = () => {
  return (
    <>
      <NavComponent />
      <Routes>
        <Route path='/todoapp' element={<TodoApp />} />
        <Route path='/multiplecustomhook' element={<MultipleCustomHooks />} />
      </Routes>
    </>
  );
};

