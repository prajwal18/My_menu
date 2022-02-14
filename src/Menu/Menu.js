import { useContext } from 'react';
import DataContext from '../context/DataContext';
import MenuItem from './MenuItem';

const Menu = () => {
  const { searchResult } = useContext(DataContext);
  return (
    <>
      { searchResult.length ?
        <div className="menuItemList">
          {
            searchResult.map((item, index) => (
              <MenuItem
                key={index}
                item={item}
                title={item.title}
                price={item.price}
              />
            ))
          }
        </div>
      : 
        <p>No Items to Display</p>
      }
    </>
  );
}

export default Menu;
