import AdminTable from "./components/adminTable";
import Dnav from "./components/dnav";

function Dashboard() {
  return (
    <div className="h-screen">
      <Dnav/>
      <div className="p-4">
        <div>
          <AdminTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
