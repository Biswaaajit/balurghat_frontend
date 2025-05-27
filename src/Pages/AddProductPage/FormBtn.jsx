import { CgSpinner } from "react-icons/cg";

function FormBtn({ loading, loadingMsg, btnName }) {
  return (
    <button
      disabled={loading}
      type="submit"
      className={`self-center flex justify-center items-center gap-1 mt-4 w-fit border-2  hover:bg-black hover:text-white transition-all px-6 py-1 rounded-md ${
        loading
          ? "bg-black text-white cursor-not-allowed"
          : "bg-white border-black cursor-pointer"
      }`}
    >
      {loading && (
        <span className="animate-spin text-lg">
          <CgSpinner />
        </span>
      )}
      {loading ? <span>{loadingMsg}</span> : <span>{btnName}</span>}
    </button>
  );
}

export default FormBtn;
