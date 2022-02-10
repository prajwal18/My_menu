import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import MissingPage from "../missing/MissingPage";


const MenuItemPage = () => {
  const { id } = useParams();
  const { menuList, setMenuList } = useContext(DataContext);
  const item = menuList.find(i => i.id.toString() === id);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const newLL = menuList.filter(item => item.id !== id);
    setMenuList(newLL);
    navigate('/');
  }

  return(
    <>
      {item?
        <main className="MenuItemPage">
          <div className='container'>
            <article className="MenuItem">
              <table>
                <tbody>
                  <tr>
                    <th colSpan={3}>{item.title}</th>
                  </tr>
                  <tr>
                    <td className="title">Category</td>
                    <td>{item.category}</td>
                  </tr>
                  <tr>
                    <td className="title">Sub-Category</td>
                    <td>{item.subCategory}</td>
                  </tr>
                  <tr>
                    <td className="title">Price</td>
                    <td>{item.price}</td>
                  </tr>
                </tbody>
              </table>
              <div className="buttons">
                <button 
                  type="button"
                  onClick={() => {navigate(`/update/${id}`)}}
                >
                  Edit
                </button>
                <button 
                  type="button"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </article>
          </div>
        </main>
      :
      <MissingPage message="No items to be displayed" />
      }
    </>
  );
}

export default MenuItemPage;