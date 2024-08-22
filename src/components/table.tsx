import { useBookContext } from "../bookContext";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  getPaginationRowModel,
} from "@tanstack/react-table";

type Book = {
  id: number;
  name: string;
  stock: number;
  price: number;
};

const columnHelper = createColumnHelper<Book>();

function Tables() {
  const { books } = useBookContext();

  const handleAddToCart = (book: Book) => {
    console.log(`Book added to cart: ${book.name}`);
  };

  const columns: ColumnDef<Book, any>[] = [
    columnHelper.accessor("name", {
      header: () => <span>Name</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("stock", {
      header: () => <span>Stock</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("price", {
      header: () => <span>Price</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "action",
      header: () => <span>Action</span>,
      cell: ({ row }) => (
        <div className="flex gap-1">
          <button
            className="border border-gray-300 rounded-lg bg-pink-500 hover:bg-black text-white py-2 px-3 flex items-center gap-2 "
            onClick={() => handleAddToCart(row.original)}
          >
            Add to cart
          </button>
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data: books,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination:{
        pageSize: 5,
      }
    }
  });

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full  border border-gray-300">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-green-400">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-2 text-left border-b border-gray-300"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-4 py-2 border-b border-gray-300"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center py-4">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Previous
        </button>
        <span>
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Tables;
