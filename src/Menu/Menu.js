import { useContext } from 'react';
import DataContext from '../context/DataContext';
import MissingPage from '../missing/MissingPage';
import MenuItem from './MenuItem';

const Menu = () => {
  const { searchResult } = useContext(DataContext);
  return (
    <>
      { searchResult.length ?
        <div>
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
        <MissingPage message={"No Menu to Display"} />
      }
    </>
  );
}

export default Menu;
