import { CgSpinner } from "react-icons/cg";

function Spinner() {
  return (
    <div className="grow flex justify-center items-center gap-0.5">
      <p className="text-4xl md:text-5xl animate-spin">
        <CgSpinner />
      </p>
      <p className="text-3xl md:text-4xl font-semibold">Loading...</p>
    </div>
  );
}

export default Spinner;
