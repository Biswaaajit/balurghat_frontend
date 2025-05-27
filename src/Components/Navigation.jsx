import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className=" sticky top-0 z-50 bg-white shadow-md w-full flex items-center justify-between py-3 px-6">
      <Link to="/">
        <img src="/logo.png" className="w-[10rem]" />
      </Link>
      <Link
        className="w-fit bg-slate-100/50 border text-black hover:bg-slate-950 hover:text-white flex justify-center items-center gap-0.5 px-4 py-1 rounded-lg font-semibold"
        to="/add"
      >
        <IoMdAdd className="text-lg" />
        <span>Add</span>
      </Link>
    </div>
  );
}

export default Navigation;
