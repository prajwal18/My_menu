import { useContext, useState, useEffect } from "react";
import DataContext from "../context/DataContext";

const SubCategorySearch = () => {
  const {
    subCategoryList, setSubCategory, subCategory,
    searchResult,setSearchResult, menuList, category
  } = useContext(DataContext); 

  const [search, setSearch] = useState('');

  useEffect(() => {
    if(search.trim().toLowerCase() === ''){
      const tempResult = menuList.filter(item => {
        if((category === 'all') || (subCategory === 'all')){
          if((category === 'all') && !(subCategory === 'all')){
            if(item.subCategory === subCategory) return item;
          }
          else if(!(category === 'all') && (subCategory === 'all')){
            if(item.category === category) return item;
          }
          else{
            return item;
          }
        }
        else if((item.category === category) && (item.subCategory === subCategory)) return item;
      });
      setSearchResult(tempResult);
    }
    else{
      const result = searchResult.filter(item => {
        const temp = search.trim().toLowerCase();
        if( item.title.trim().toLowerCase().includes(temp) ) return item;
      });
      setSearchResult(result);
    }
  }, [search]);




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
            <input
              type="text"
              placeholder="Search Menu Item"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              />
          </>
          :
          <p>No sub category list to Display</p>
      }
    </div>
  );
};

export default SubCategorySearch;
