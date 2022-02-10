import { useContext, useState, useEffect } from "react";
import DataContext from "../context/DataContext";

const SubCategorySearch = () => {
  const {
    subCategoryList, setSubCategory, subCategory
  } = useContext(DataContext); 




  return (
    <>
      {subCategoryList.length? 
          <select 
            className="SubCategory" 
            value={subCategory} 
            onChange={(e) => setSubCategory(e.target.value)}
          >
            {subCategoryList &&
              subCategoryList.map((subCat, index) => (
                <option key={index} value={subCat}>
                  {subCat}
                </option>
              ))
            }
          </select>
          :
          <p>No sub category list to Display</p>
      }
    </>
  );
};

export default SubCategorySearch;
