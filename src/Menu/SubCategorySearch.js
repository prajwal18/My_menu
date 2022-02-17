import { useContext} from "react";
import DataContext from "../context/DataContext";
import SearchFilter from "./SearchFilter";

const SubCategorySearch = () => {
  const {
    subCategoryList, setSubCategory, subCategory
  } = useContext(DataContext); 



  return (
    <div className="subcatNsearch">
      {subCategoryList.length?
          <> 
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
            <SearchFilter />
          </>
          :
          <p>No sub category list to Display</p>
      }
    </div>
  );
};

export default SubCategorySearch;
