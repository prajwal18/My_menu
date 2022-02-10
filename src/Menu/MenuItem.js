import { Link } from "react-router-dom";

const MenuItem = ({ title, price, item }) => {
  const id = item.id;
  return (
      <article className="MenuItem">
        <Link to={`/menu/${id}`}>
          <p className="title">{title}</p>
          <p className="price">{price}</p>
        </Link>
      </article>
  );
};

export default MenuItem;
