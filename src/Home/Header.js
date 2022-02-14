import { Link } from 'react-router-dom';
import{ ReactComponent as Logo} from '../images/logo.svg';

const Header = () =>{

    return (
        <header className='header'>
            <div className='headerContainer'>
                <div>
                    <Logo className="logo" />
                    <h1>Best Foods</h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className='navOpt'>Home</Link>
                        </li>
                        <li>
                            <Link to="/menu" className='navOpt'>Menu</Link>
                        </li>
                        <li>
                            <Link to="/update" className='navOpt'>Update</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;