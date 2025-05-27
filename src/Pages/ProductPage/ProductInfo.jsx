import { AiOutlineStock } from "react-icons/ai";

function ProductInfo({ product }) {
  const { productName, productImg, stock, price, description } = product;
  return (
    <div className="grow w-full flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center">
      <div className="w-[70%] md:w-fit overflow-hidden ">
        <img
          src={productImg}
          alt="product image"
          className="w-full object-cover md:w-[18rem] lg:w-[22rem]"
        />
      </div>
      <div className="w-[90%] md:w-[30%] px-4 space-y-2">
        <p className="text-4xl capitalize font-semibold">{productName}</p>
        <p className="flex justify-center items-center w-fit gap-4">
          <span className="font-semibold text-xl">Price:</span>
          <span>${price}</span>
        </p>
        <p className="flex justify-center items-center w-fit gap-4">
          <span className="font-semibold text-xl">Stock:</span>
          <span>{stock}</span>
        </p>
        <p className="text-lg italic">{description}</p>
      </div>
    </div>
  );
}

export default ProductInfo;
