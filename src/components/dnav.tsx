import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

function Dnav() {
  return (
    <div className="w-full bg-slate-600 p-4 text-white flex justify-between">
      <div className="text-xl font-semibold">
        <Link to="/">
          <p>
            BOOK <span className="text-yellow-300">पसल</span>
          </p>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle/>
      <ul className="flex gap-4 text-xl items-center">
        <Link to="/pannel">
          <li className="text-orange-500 font-semibold">ADMIN PANEL</li>
        </Link>
      </ul>
      </div>
    </div>
  );
}

export default Dnav;
