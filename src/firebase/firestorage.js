import { collection, addDoc, getDocs, query, where, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useState } from 'react';
import { db } from './config'; 

const useCollection = (table) => {
    const [result, setResult] = useState([]);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const getAll = async (condition) => {
        setResult([]);
        let q = null;
        if (condition && condition.length === 3) {
            q = query(collection(db, table), where(condition[0], condition[1], condition[2]));
        } else {
            q = query(collection(db, table));
        }
        const resDoc = await getDocs(q);

        const newResults = [];
        resDoc.forEach(doc => {
            newResults.push({ ...doc.data(), id: doc.id });
        });
        setResult(newResults);
        console.log("Fetched results: ", newResults);
    }

    const add = async (doc) => {
        setIsPending(true);
        setError(null);

        try {
            let resDoc = await addDoc(collection(db, '1/2'), doc);
            console.log("Document written with ID: ", resDoc.id);
            setIsPending(false);
            return resDoc;

        } catch (err) {
            console.log(err.message);
            setError("No se pudo enviar el mensaje. Inténtalo de nuevo.");
            setIsPending(false);
            return null;
        }
    }

    const update = async (id, updatedDoc) => {
        setIsPending(true);
        setError(null);

        try {
            const docRef = doc(db, table, id);
            await updateDoc(docRef, updatedDoc);
            console.log("Document updated with ID: ", id);
            setIsPending(false);
        } catch (err) {
            console.log(err.message);
            setError("No se pudo actualizar el documento. Inténtalo de nuevo.");
            setIsPending(false);
        }
    }

    const remove = async (id) => {
        setIsPending(true);
        setError(null);

        try {
            const docRef = doc(db, table, id);
            await deleteDoc(docRef);
            console.log("Document deleted with ID: ", id);
            setIsPending(false);
        } catch (err) {
            console.log(err.message);
            setError("No se pudo eliminar el documento. Inténtalo de nuevo.");
            setIsPending(false);
        }
    }

    return { error, isPending, result, getAll, add, update, remove };
}

export default useCollection;
