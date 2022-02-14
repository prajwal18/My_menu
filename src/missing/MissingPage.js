import { Link } from 'react-router-dom';

const MissingPage= ({message}) => {
    return(
        <main>
            <div className="container">
                <h2>404 Error</h2>
                <p>Looks Like the page you are looking for is missing.</p>
                <p>{message}</p>
                <Link to="/" className='link' style={{display:"inline-block"}}>
                    <h4>Go Back to Home</h4>
                </Link>
            </div>
        </main>
    );
}

export default MissingPage;
