import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  setCurrentCategory,
} from "../store/actions/categoryActions";

const CategoryMenu = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);
  const currentCategory = useSelector(
    (state) => state.categories.currentCategory
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (id) => {
    dispatch(setCurrentCategory(id));
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((category) => (
        <button
          key={category._id}
          onClick={() => handleCategoryClick(category._id)}
          style={{
            fontWeight: currentCategory === category._id ? "bold" : "normal",
          }}
        >
          {category.name}
        </button>
      ))}
      <button
        onClick={() => handleCategoryClick("")}
        style={{ fontWeight: currentCategory === "" ? "bold" : "normal" }}
      >
        All
      </button>
    </div>
  );
};

export default CategoryMenu;
