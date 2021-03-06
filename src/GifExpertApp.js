import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    /*  const handleAdd = () => {
         // setCategories([...categories,'HunterXHunter']);
         // setCategories(['HunterXHunter', ...categories]); // add 'HunterXHunter' at the beginning of the array
         setCategories(catgs => [...catgs, 'HunterXHunter']);
     };
  */
    return (
        <>
            <h2>GifExpertApp</h2>
            < AddCategory setCategories={setCategories} />
            <hr />
            {/* <button onClick={handleAdd}>Add</button> */}
            <ol>
                {
                    categories.map(category => (
                        // <li key={category}>{category}</li>
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    );
};

