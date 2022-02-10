import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import MenuPage from './Menu/MenuPage';
import UpdatePage from './Update/UpdatePage';
import MenuItemPage from './Menu/MenuItemPage';
import MenuItemUpdate from './Update/MenuItemUpdate';
import MissingPage from './missing/MissingPage';
import Header from './Home/Header';
import Footer from './Home/Footer';
import HomePage from './Home/HomePage';


function App(){

  return(
    <div className="App">
      <Header/>
      <DataProvider>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="menu" element={<MenuPage />}/>
          <Route path="/menu/:id" element={<MenuItemPage/>} />
          <Route path="update" element={<UpdatePage />} />
          <Route path="update/:id" element={<MenuItemUpdate />} />
          <Route path='*' element={<MissingPage message="No page found" />}/>
        </Routes>
      </DataProvider>
      <Footer/>
    </div>
  );
}

export default App;