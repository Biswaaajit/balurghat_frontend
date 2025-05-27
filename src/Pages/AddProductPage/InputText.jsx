function InputText({ label, value, setFunc, required = true }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold ml-1">{label}</label>
      <input
        className="px-2 py-1 rounded-md focus-within:outline-none"
        required={required}
        type="text"
        value={value}
        onChange={(e) => setFunc(e.target.value)}
      />
    </div>
  );
}

export default InputText;
