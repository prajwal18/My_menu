import SearchOption from "./SearchOption";
import Menu from "./Menu";
import bg from "../images/coolbgB.svg";

const MenuPage = () => {
  return (
    <main>
      <div className='container menu' style={{background: `url(${bg})`}}>
        <SearchOption />
        <Menu />
      </div>
    </main>
  );
};

export default MenuPage;
