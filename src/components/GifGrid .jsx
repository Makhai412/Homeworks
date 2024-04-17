import { useEffect, useState } from "react";
import GifItem from './GifItem';



export const GifGrid = ({category}) =>{
    const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const gifsData = await getGifs(category);
      setGifs(gifsData);
      console.log("List of Gifs:", gifsData); 
    };
        fetchData();
        }, [category]);
    
    
    return(
        <>
            <div className="category-title">{category}</div> {/* Paso 5, 6 */}
            {gifs.map((gif) => (
            <GifItem key={gif.id} gif={gif} />
      ))}
        </>
    );
};


const getGifs = async(category)=> {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=C3LBFolKmpJ1tcyWVfVyIqdyENj9IKP6&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const resp = await fetch (url);
    const {data} = await resp.json();
    const gifs = data.map( img=> {
        return {
            id: img.id,
            title: img.title,
            url: img.images.fixed_width_small.url
        }
    })
    
    return gifs;

}




