import { firebaseStorage } from "./config";
import { ref, uploadBytesResumable, listAll, deleteObject } from "firebase/storage";

export const upload = (file) =>{
    if (!file){
        alert("Por favor elige un archivo primero");
    }

    const storageRef = ref(firebaseStorage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return uploadTask;
}

export const getAll = async () => {
    const listRef = ref(firebaseStorage, '/files/');
    return listAll(listRef)
}

export const deleteFile = async (filePath) => {
    const fileRef = ref(firebaseStorage, filePath);
    await deleteObject(fileRef);
}