import CategorySearch from "./CategorySearch";
import SubCategorySearch from "./SubCategorySearch";

const SearchOption = () => {
  return (
      <div className="SearchOptions">
          <div className="menuTitle">
            <h2>Our Menu</h2>
            <div className="underline"></div>
          </div>
          <CategorySearch />
          <SubCategorySearch />
      </div>
  );
};

export default SearchOption;
