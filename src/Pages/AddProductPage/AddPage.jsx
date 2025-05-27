import { useState } from "react";
import InputText from "./InputText";
import InputNumber from "./InputNumber";
import FormBtn from "./FormBtn";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AddPage() {
  const [productName, setProductName] = useState("");
  const [productImg, setProductImg] = useState("");
  const [stock, setStock] = useState(5);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // form handler
  async function handleSubmit(e) {
    e.preventDefault();
    const newData = {
      productName,
      stock,
      price,
      description: description.trim() || undefined,
      productImg: productImg.trim() || undefined,
    };
    try {
      setLoading(true);
      const res = await fetch(
        "https://balurghat-backend.onrender.com/product/add",
        {
          method: "POST",
          body: JSON.stringify(newData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resData = await res.json();
      if (!res.ok) {
        console.log(resData);
        toast.error(resData.message);
      } else {
        console.log(resData);
        toast.success(resData.message);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="grow flex justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-[95%] sm:w-[90vw] md:w-[80vw] lg:w-[60vw] xl:w-[45%] h-fit bg-slate-100 px-6 py-8 rounded-lg"
      >
        <InputText
          label="Product Name"
          value={productName}
          setFunc={setProductName}
        />
        <InputText
          label="Product Image URL(Optional)"
          value={productImg}
          setFunc={setProductImg}
          required={false}
        />
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-start sm:justify-between items-center">
          <InputNumber
            label="Product price"
            value={price}
            setFunc={setPrice}
            min={0}
          />
          <InputNumber label="Stock" value={stock} setFunc={setStock} min={5} />
        </div>
        <textarea
          className="w-full h-[15vh] px-2 py-1.5 rounded-md placeholder:font-semibold focus-within:outline-none"
          placeholder="Product description(Optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <FormBtn
          loading={loading}
          loadingMsg="Submitting..."
          btnName="Submit"
        />
      </form>
    </div>
  );
}

export default AddPage;
