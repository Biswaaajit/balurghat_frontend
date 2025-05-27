import { useState, useEffect } from "react";
import Spinner from "../../Components/Spinner";
import ErrorPage from "../../Components/ErrorPage";
import MessageBox from "../../Components/MessageBox";
import ProductCard from "./ProductCard";
function HomePage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await fetch(
          "https://balurghat-backend.onrender.com/product"
        );
        const resData = await res.json();
        if (!res.ok) {
          console.log(resData);
          setError(resData);
        } else {
          console.log(resData.products);
          setProductData(resData.products);
        }
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <ErrorPage error={error} />;
  if (productData.length === 0) {
    return <MessageBox message="No product available" />;
  }
  return (
    <div className="h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center sm:place-content-start gap-6 p-6 mt-6">
      {productData.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default HomePage;
