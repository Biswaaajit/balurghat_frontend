import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../Components/Spinner";
import ErrorPage from "../../Components/ErrorPage";
import ProductInfo from "./ProductInfo";

function ProductPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://balurghat-backend.onrender.com/product/${id}`
        );
        const resData = await res.json();
        if (!res.ok) {
          console.log(resData);
          setError(resData);
        } else {
          console.log(resData.product);
          setProduct(resData.product);
        }
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <ErrorPage error={error} />;

  return <ProductInfo product={product} />;
}

export default ProductPage;
