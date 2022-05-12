import { Link } from "react-router-dom";

const Products = () => {
  return (
    <ul>
      <li>
        <Link to="/products/book">book</Link>
      </li>
      <li>
        <Link to="/products/chair">chair</Link>
      </li>
      <li>
        <Link to="/products/table">table</Link>
      </li>
    </ul>
  );
};

export default Products;
