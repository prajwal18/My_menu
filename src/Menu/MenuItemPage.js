import { useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import MissingPage from "../missing/MissingPage";
import bg from "../images/coolbgB.svg";
import { IoIosArrowBack } from "react-icons/io";


const MenuItemPage = () => {
  const { id } = useParams();
  const { menuList, setMenuList } = useContext(DataContext);
  const item = menuList.find(i => i.id.toString() === id);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const newLL = menuList.filter(item => item.id !== id);
    setMenuList(newLL);
    navigate('/menu');
  }

  return(
    <>
      {item?
        <main>
          <div className="container menuItemPage" style={{background: `url(${bg})`}}>
            <Link to='/menu' className="linkToMenu">
              <div className="icon">
                <IoIosArrowBack id="arrow"/>
                <span>Go To Menu</span>
              </div>
            </Link>
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