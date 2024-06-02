import { useState } from "react";
import { getAll, upload, deleteFile } from "../firebase/files";
import { getDownloadURL } from "firebase/storage";

export const useUploadHook = () => {
    const [files, setFiles] = useState([]);
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleUpload = async () => {
        const uploadTask = upload(file);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setPercent(percent);
            },
            (error) => {
                console.log(error);
            },
            async () => {
                const url = await getDownloadURL(uploadTask.snapshot.ref);
                setFiles(list => [...list, { url, name: file.name }]);
            }
        );
    }

    const handleGetAll = async () => {
        const { items } = await getAll();
        const fileUrls = await Promise.all(
            items.map(async (itemRef) => {
                const url = await getDownloadURL(itemRef);
                return { url, name: itemRef.name };
            })
        );
        setFiles(fileUrls);
    }

    const handleDelete = async (fileName) => {
        try {
            await deleteFile(`files/${fileName}`);
            setFiles(files.filter(file => file.name !== fileName));
        } catch (error) {
            console.error("Error deleting file: ", error);
        }
    }

    return { files, percent, handleChange, handleUpload, handleGetAll, handleDelete };
}
