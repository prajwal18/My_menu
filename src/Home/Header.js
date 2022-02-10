import { Link } from 'react-router-dom';

const Header = () =>{
    return (
        <header className='Header'>
            <div className='container'>
                <div>
                    <h1>Restaurant</h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/" className='navOpt'>Home</Link></li>
                        <li><Link to="/menu" className='navOpt'>Menu</Link></li>
                        <li><Link to="/update" className='navOpt'>Update</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;