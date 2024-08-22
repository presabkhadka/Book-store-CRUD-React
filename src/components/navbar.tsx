import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

function Navbar() {
  return (
    <div className="w-screen bg-slate-600 p-4 text-white flex justify-between">
      <div className="text-xl font-semibold">
        <Link to="/">
          <p>
            BOOK <span className="text-yellow-300">पसल</span>
          </p>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle/>
        <ul className="flex gap-4 text-base">
          <Link to={"/products"}>
            <li className="hover:cursor-pointer hover:text-red-200 hover:text-lg">
              Products
            </li>
          </Link>
          <Link to={"/login"}>
            <li className="hover:cursor-pointer hover:text-red-200  hover:text-lg">
              Login
            </li>
          </Link>
          <Link to={"/signup"}>
            <li className="hover:cursor-pointer hover:text-red-200  hover:text-lg">
              Signup
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
