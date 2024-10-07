import React from "react";

function CategoryFilter({ categories, onCategoryClick, selectedCategory }) {

  const buttonElements = categories.map(category=>{
    return <button key={category} onClick={(e)=>{
      onCategoryClick(category)
      
    }} className={selectedCategory === category ? "selected" : null}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonElements}
    </div>
  );
}

export default CategoryFilter;
