import './App';
import { useState } from 'react';


export const ComponentApp = ()=>{
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');
    
    const handleInputChange = (event) => {
        setCategory(event.target.value);
      };
    
    const addCategory = () => {
        if (category.trim() !== '') {
        setCategories([...categories, category]);
        setCategory('');
        }
    };
    return (
        <>
            <h1>GifExpert</h1>
            <label>New Category</label> <br/> <br/>
            <input type="text" value={category} id="newCategory" onChange={handleInputChange} placeholder="Enter category"/>
            <button onClick={addCategory}>Add Category</button>
            
            <ol>
                {
                    categories.map((category,key)=>{
                            return<li key= {key}>{category}</li>
                        })
                }
            </ol>
            
        </>
    );
}

