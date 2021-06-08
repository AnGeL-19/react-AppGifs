import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GiftExpertApp = () => {

    const [categorias, setCategory] = useState(["One push"]);

//    const handleAdd = () => {
//        setCategory(["Kimetsu",...categorias]);
//    }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <hr/>

            <h2>AddCategory</h2>
            <AddCategory setCategory={setCategory}/>

            <ol>
                {
                    categorias.map(categoria => (
                        <GifGrid    
                                key={categoria} 
                                category={categoria}/>
                    ))
                }
            </ol>
        
        
        </>
    )
}
