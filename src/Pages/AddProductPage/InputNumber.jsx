function InputNumber({ label, value, setFunc, required = true, min }) {
  return (
    <div className="flex flex-col w-full sm:w-[30%] md:w-[20%] gap-1">
      <label className="font-semibold ml-1">{label}</label>
      <input
        className="px-2 py-1 rounded-md focus-within:outline-none"
        required={required}
        type="number"
        min={min}
        value={value}
        onChange={(e) => setFunc(e.target.value)}
      />
    </div>
  );
}

export default InputNumber;
