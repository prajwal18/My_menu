import { Link } from "react-router-dom";

const MenuItem = ({ title, price, item }) => {
  const id = item.id;
  return (
      <article className="MenuItem">
        <img src={require('../images/img.jpg')} alt="Item's Image" />
        <div className="itemDesc">
          <Link to={`/menu/${id}`} title="See full Detail" className="itemLink">
            <p className="title">{title}</p>
            <p className="price">{`price: rs ${price}`}</p>
          </Link>
        </div>
      </article>
  );
};

export default MenuItem;
