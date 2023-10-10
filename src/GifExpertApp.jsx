import React, { useState } from 'react'
import AddCategory from './components/addCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch"])
    console.log(categories)

    const onAddCategory = ( newCategory ) => {
        console.log(newCategory)
        if( categories.includes(newCategory) ){
            return
        }
        
        // categories.push(newCategory)

        setCategories([ newCategory, ...categories])

    }
  return (
    <>
        <h1>GifExpertApp</h1>


        <AddCategory
            onNewCategory = { event => onAddCategory(event)} 
         />


            {
                categories.map( (category) => (
                    <GifGrid 
                        key={category}
                        category={category}/>
                )) 
            }

    </>
  )
}

export default GifExpertApp