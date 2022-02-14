import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataContext from "../context/DataContext";
import MissingPage from "../missing/MissingPage";
import bg from '../images/coolbgA.svg';

const MenuItemUpdate = () => {
    const { menuList, setMenuList } = useContext(DataContext);
    const { id } = useParams();
    const item = menuList.find(item => item.id.toString() === id);
    const itemII = item ? item: {id: 0,title:'',category:'',subCategory:'',price:0}
    const navigate = useNavigate();

    const [editTitle, setEditTitle] = useState(itemII.title);
    const [editCategory, setEditCategory] = useState(itemII.category);
    const [editSubCategory, setEditSubCategory] = useState(itemII.subCategory);
    const [editPrice, setEditPrice] = useState(itemII.price);

    const handleEditSubmit = (id) => {
        const editedItem = {
            id, title: editTitle.trim().toLowerCase(),
            category: editCategory.trim().toLowerCase(),
            subCategory: editSubCategory.trim().toLowerCase(),
            price: editPrice
        }

        const editedList = menuList.map(item => item.id === id? editedItem: item);
        setMenuList(editedList);
        navigate('/menu');
    }


  return (
    <>
    {console.log(item)}
      {item?
        <main>
          <div className="container" style={{background: `url(${bg})`}}>
            <div className="formContainer">
              <h2>{`Edit Item: ${item.title}`}</h2>
              <form className="addItemForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="title">Title:</label>
                <input
                  id="title"
                  type="text"
                  required
                  placeholder="Aalo Tarkai"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <label htmlFor="category">Category:</label>
                <input
                  id="category"
                  type="text"
                  required
                  placeholder="breakfast,lunch..."
                  value={editCategory}
                  onChange={(e) => setEditCategory(e.target.value)}
                />
                <label htmlFor="subCategory">Sub-Category:</label>
                <input
                  id="subCategory"
                  type="text"
                  required
                  placeholder="momo,chowmein..."
                  value={editSubCategory}
                  onChange={(e) => setEditSubCategory(e.target.value)}
                />
                <label htmlFor="price">Price:</label>
                <input
                  id="price"
                  type="number"
                  required
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                />
                <button 
                  type="submit"
                  onClick={() => handleEditSubmit(item.id)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </main>
        :
        <MissingPage message="Looks there is no item to update" />
      }
    </>
  );
};

export default MenuItemUpdate;
