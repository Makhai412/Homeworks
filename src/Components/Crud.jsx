import useCollection from '../firebase/firestorage';
import { useState, useEffect } from 'react';

export const Crud = () => {
    const [user, setUser] = useState({ name: '' });
    const { add, getAll, update, remove, isPending, result: results } = useCollection('users');

    const getAllDocs = async () => {
        console.log("Fetching all documents...");
        await getAll();
        console.log("Documents fetched: ", results);
    }

    const save = async () => {
        console.log("Saving user: ", user);
        if (user.id) {
            await update(user.id, { name: user.name });
        } else {
            await add(user);
        }
        setUser({ name: '' }); // Reset user state after save
        await getAllDocs();
    }

    const handleSetUser = (e) => {
        setUser(prevUser => ({ ...prevUser, name: e.target.value }));
    }

    const handleEdit = (item) => {
        console.log("Editing item: ", item);
        setUser(item);
    }

    const handleDelete = async (id) => {
        console.log("Deleting item with id: ", id);
        await remove(id);
        await getAllDocs();
    }

    useEffect(() => {
        getAllDocs();
    }, []);

    return (
        <>
            <input type="text" onChange={handleSetUser} value={user.name} className="border text-black border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <button type='button' onClick={save}>Guardar</button>
            {isPending ? <span>Cargando...</span> : ''}
            <ul>
                {results && results.map(item => (
                    <div key={item.id}>
                        <li>{JSON.stringify(item)}</li>
                        <button onClick={() => handleEdit(item)}>Editar</button>
                        <button onClick={() => handleDelete(item.id)}>Eliminar</button>
                    </div>
                ))}
            </ul>
        </>
    )
}
