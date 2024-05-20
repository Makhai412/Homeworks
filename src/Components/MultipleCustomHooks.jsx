import { useFetch } from "../Hooks/useFecth";
import { useState } from "react";

export const MultipleCustomHooks = () => {
    const [counter, setCounter] = useState(1);
    const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    const incrementCounter = () => {
        setCounter(prevCounter => prevCounter + 1);
    };
    
    return(
        <>
            <h1>MultipleCustomHooks</h1>
            <hr />

            {
                isLoading ?(
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                ) : (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1">{data[0]?.quote}</p>
                        <footer className="blockquote-footer">{data[0]?.author}</footer>
                    </blockquote>
                )
            }

            <button className="btn btn-primary" onClick={()=> incrementCounter()}>Next Quote </button>
            
            
        </>
    )
}