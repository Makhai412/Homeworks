import { useEffect } from "react";
import { useUploadHook } from "../Hooks/useUpload";

export const Upload = () => {
    const {
        files, 
        percent, 
        handleChange, 
        handleUpload, 
        handleGetAll,
        handleDelete
    } = useUploadHook();

    useEffect(() => {
        handleGetAll();
    }, []);

    return (
        <div>
            <input type="file" onChange={handleChange} accept="" />
            <button onClick={handleUpload}>Subir a Firebase</button>
            <p>{percent} % done</p>

            {files && files.map((item, key) => (
                <div key={key}>
                    <img width='100px' src={item.url} alt={item.name} />
                    <button onClick={() => handleDelete(item.name)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
}
