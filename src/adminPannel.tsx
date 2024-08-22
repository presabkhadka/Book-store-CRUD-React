import { Link } from "react-router-dom";
import Dnav from "./components/dnav";

function AdminPannel() {
  return (
    <div className="grid grid-cols-12 gap-x-4 h-screen">
      <div className="col-span-full h-full flex flex-col">
        <Dnav />
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-full flex flex-col items-center justify-center gap-2">
            <img src="../src/assets/admin.png" alt="admin" />
            <div className="flex gap-2">
              <Link to="/pannel/dashboard">
                <button className="py-2 px-3 rounded-xl font-mono border-2 border-gray-500 bg-pink-500 hover:text-white hover:bg-black hover:border hover:border-white">
                  Edit Tables
                </button>
              </Link>
              <Link to="/pannel/orders">
                <button className="py-2 px-3 rounded-xl font-mono border-2 border-gray-500 bg-violet-500 hover:text-white hover:bg-black hover:border hover:border-white">
                  Edit Status
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminPannel;
