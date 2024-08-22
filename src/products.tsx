import Prod from "./components/productnav";
import Table from "./components/table";

function Products() {
  return (
    <div className="min-h-screen ">
      <Prod />
      <div className="p-4">
        <div className="">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Products;
