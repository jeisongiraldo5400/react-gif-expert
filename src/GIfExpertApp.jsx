import { useState } from "react";

//Components
import { AddCategory, GifGrid } from "./components";

export const GIfExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    const verifyCategory = categories.map((data) => {
      let categories = data.toLowerCase();
      return categories;
    });

    if (verifyCategory.includes(newCategory.toLowerCase())) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GIfExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
