import { useContext } from "react";
import DataContext from "../context/DataContext";

const CategorySearch = () => {
  const { category, categoryList, setCategory } = useContext(DataContext);

  const handleSelected = (e) => {
    const allBtns = [...document.getElementsByClassName('catBtn')];
    allBtns.map(item => {
      item === e.target ? item.classList.add('selected'): item.classList.remove('selected');
    });
  }


  return (
    <div className="CategorySearch">
      {categoryList.length ? 
      <>
        {
          categoryList.map((cat,index) => (
            <button 
              className={`catBtn ${cat.trim().toLowerCase() === category? 'selected': ''}`}
              key={index} 
              type="button" 
              onClick={(e) => {
                handleSelected(e);
                setCategory(cat);
              }}>
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
