import { AiOutlineGithub } from 'react-icons/ai';
import{ ReactComponent as Logo} from '../images/logo.svg';

const Footer = () => {
    const today = new Date();

    return (
        <footer className='footer'>
            <div className='footerContainer'>
                <div>
                    <Logo className="f_logo" />
                    <ul className='outerList'>
                        <li>
                            <ul>
                                <li>About us</li>
                                <li>Locations</li>
                                <li>Contact</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>Products</li>
                                <li>Restaurant</li>
                                <li>lounge</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <p className='bottomWriting'>
                    Copyright &copy; {today.getFullYear()}
                    <p>
                        Prajwal 
                        <a href='https://github.com/prajwal18' target="_blank">
                            <AiOutlineGithub id='icon' />
                        </a>
                    </p>
                </p>
            </div>
        </footer>
    );
}

export default Footer;