import { useState } from "react";
import {GifGrid} from "./components/GifGrid ";
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () =>{
    const [categories, setCategories] = useState(['Saludo']);

    const onAddCategory = (category) => {
        setCategories(list => [...list, category])
    }

    return(
        <>
        <h1>GifExpert</h1>

        <AddCategory onAddCategory={onAddCategory}/>
        {
            categories.map(
                (category,key)=>
                {
                    return <GifGrid category = { category} key= {key}/> 
                }
            )
        }
        </>
    )
}