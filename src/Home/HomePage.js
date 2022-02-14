import { Link } from "react-router-dom";
import imgA from "../images/imageA.svg";
import imgB from "../images/imageB.svg";
import imgC from "../images/imageC.svg";
import imgD from "../images/imageD.svg";

const HomePage = () => {
    return (
        <main className="coolbg">
            <div className='container'>
                <div className="homeStuff">
                    <div className="textStuff">
                        <h2>
                            <span>Delicious gourmet meals </span>
                            of the highest quality
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Tempore nobis blanditiis et fugit inventore voluptas illum
                            quaerat, officiis saepe iusto quod laboriosam libero magni
                            natus. Eveniet dicta debitis dolorum eos.
                        </p>
                        <Link to="/menu">
                            <button>
                                Check out the menu
                            </button>
                        </Link>
                    </div>
                    <div className="imageStuff">
                        <img src={imgB}/>
                        <img src={imgA}/>
                        <img src={imgC}/>
                        <img src={imgD}/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;