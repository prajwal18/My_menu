import { useContext } from "react";
import DataContext from "../context/DataContext";

const CategorySearch = () => {
  const { categoryList, setCategory } = useContext(DataContext);

  return (
    <div className="CategorySearch">
      {categoryList.length ? 
      <>
        {
          categoryList.map((cat,index) => (
            <button 
              key={index} 
              type="button" 
              onClick={() => setCategory(cat)}>
              {cat}
            </button>
          ))
        }
      </>
      :
      <p>No categories to Display</p>
      }
    </div>
  );
};

export default CategorySearch;
