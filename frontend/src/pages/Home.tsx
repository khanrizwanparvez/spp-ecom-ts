import { Link } from "react-router-dom";

import ProductCard from "../components/productCard";

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="adjfasd"
          name="Macbook"
          price={45000}
          stock={435}
          handler={addToCartHandler}
          photo="https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/space-gray/13-inch/macbook-air-13-3-inch-500x500.webp"
        />
      </main>
    </div>
  );
};

export default Home;
