import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";

const UpdatePage = () => {
  const[title, setTitle] = useState('');
  const[itemCat, setItemCat] = useState('');
  const[itemSubCat, setItemSubCat] = useState('');
  const[price, setPrice] = useState(0);

  const { menuList, setMenuList } = useContext(DataContext);
  const navigate = useNavigate();


  const handleFormSubmit = (e) => {
    e.preventDefault();
    try{
      if(title.trim()==='' || itemCat.trim()==='' || itemSubCat.trim()==='' || price<=0){
        throw Error('Invalid Input try again');
      } else {
        const id = menuList.length? menuList[menuList.length -1].id + 1: 1;
        const newItem = {
          id, title: title.trim().toLowerCase(),
          category: itemCat.trim().toLowerCase(),
          subCategory: itemSubCat.trim().toLowerCase(),
          price
        };
        setMenuList([newItem,...menuList]);
        navigate('/');
      }
    } catch(err){
      alert(err.message);
      setTitle('');
      setItemCat('');
      setItemSubCat('');
      setPrice(0);
    }
  }

  return (
      <main className="UpdatePage">
        <div className='container'>
          <form className="addItemForm" onSubmit={handleFormSubmit}>
            <h2>Add New Menu Item</h2>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              required
              placeholder="Aalo Tarkai"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="category">Category:</label>
            <input
              id="category"
              type="text"
              required
              placeholder="breakfast,lunch..."
              value={itemCat}
              onChange={(e) => setItemCat(e.target.value)}
            />
            <label htmlFor="subCategory">Sub-Category:</label>
            <input
              id="subCategory"
              type="text"
              required
              placeholder="momo,chowmein..."
              value={itemSubCat}
              onChange={(e) => setItemSubCat(e.target.value)}
            />
            <label htmlFor="price">Price:</label>
            <input
              id="price"
              type="number"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit">
              Submit
            </button>
          </form>
        </div>
      </main>
  );
};

export default UpdatePage;
