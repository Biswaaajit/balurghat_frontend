import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { productImg, productName, price, _id } = product;
  return (
    <Link
      to={`/${_id}`}
      className="w-[70%] sm:w-[80%] md:w-[70%] lg:w-[80%]  h-fit px-4 py-6  divide-y-2 divide-slate-400/50 border-2 hover:shadow-xl rounded-md transition-all"
    >
      <img
        src={productImg}
        alt="Product image"
        className="w-full pb-3 aspect-square object-cover"
      />
      <div className="pt-3 px-1">
        <p className="text-xl font-semibold capitalize">{productName}</p>
        <p className="flex justify-center items-center w-fit gap-3">
          <span className="font-bold text-lg">Price:</span>
          <span className="font-semibold text-slate-800">₹ {price}</span>
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
