import SearchOption from "./SearchOption";
import Menu from "./Menu";


const MenuPage = () => {
  return (
    <main className="MenuPage">
      <div className='container'>
        <SearchOption />
        <Menu />
      </div>
    </main>
  );
};

export default MenuPage;
