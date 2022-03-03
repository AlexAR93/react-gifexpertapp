import React,{useState} from "react";
import AddCategory from "./component/AddCategory";
import GifGrid from "./component/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon ball'])

    return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr/>
        <ol>
            { categories.map(category => <GifGrid key={category} category={category} /> )}
        </ol>

    </>
  )
}


export default GifExpertApp