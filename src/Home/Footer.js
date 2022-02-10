import { AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
    const today = new Date();

    return (
        <footer className='Footer'>
            <div className='container'>
                <p>Copyright {today.getFullYear()} &copy;</p>
                <p>
                    Prajwal
                    <a href='https://github.com/prajwal18' target="_blank">
                        <AiOutlineGithub id='icon' />
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;