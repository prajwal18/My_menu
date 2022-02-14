import { Link } from "react-router-dom";

const MenuItem = ({ title, price, item }) => {
  const id = item.id;
  return (
      <article className="MenuItem">
        <div className="underline"></div>
        <Link to={`/menu/${id}`} title="See full Detail">
          <p className="title">{title}</p>
          <p className="price">{price}</p>
        </Link>
      </article>
  );
};

export default MenuItem;
