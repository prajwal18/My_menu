import { useState, useEffect, createContext } from "react";
import data from '../data/data'

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [menuList, setMenuList] = useState(data);
  const [categoryList, setCategoryList] = useState(['all', ...new Set(menuList.map(item => item.category))]);
  const [allSubCategoryList, setAllSubCategoryList] = useState(['all', ...new Set(menuList.map(item => item.subCategory))]);
  const [subCategoryList, setSubCategoryList] = useState(allSubCategoryList);
  const [searchResult, setSearchResult] = useState(menuList);
  const [category, setCategory] = useState('all');
  const [subCategory, setSubCategory] = useState('all');


  useEffect(() => {
    JSON.parse(localStorage.getItem('menuListItem'))&&
    setMenuList(JSON.parse(localStorage.getItem('menuListItem')));
  }, []);


  useEffect(()=>{
    resetFunctions();
    localStorage.setItem('menuListItem', JSON.stringify(menuList));
  }, [menuList]);

  useEffect(() => {
    categorySearch();
    setSubCategory('all');
  }, [category]);

  useEffect(() => {
    subCatSearch();
  }, [subCategory]);


  const resetFunctions = () => {
    const categoryLL = menuList.map(item => item.category);
    const subCatLL = menuList.map(item => item.subCategory);
    setCategoryList(['all', ...new Set(categoryLL)]);
    setAllSubCategoryList(['all',...new Set(subCatLL)]);
    setSubCategoryList(['all',...new Set(subCatLL)]);
    setCategory('all');
    setSubCategory('all');
    setSearchResult(menuList);
  }

  const categorySearch = () => {
    if(category === 'all'){
      setSearchResult(menuList);
      setSubCategoryList(allSubCategoryList);
    } else {
      const resultLL = menuList.filter(item => item.category === category);
      setSearchResult(resultLL);
      setSubCategoryList(['all',...new Set(resultLL.map(item => item.subCategory))]);
    }
  }

  const subCatSearch = () => {
    if(subCategory === 'all'){
      categorySearch();
    } else {
      const resultLL = menuList.filter(item => item.subCategory === subCategory);
      setSearchResult(resultLL);
    }
  }


  return(
    <DataContext.Provider value={{
      menuList, setMenuList,
      categoryList, setCategoryList,
      allSubCategoryList, setAllSubCategoryList,
      subCategoryList, setSubCategoryList,
      searchResult, setSearchResult,
      category, setCategory,
      subCategory, setSubCategory
    }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;