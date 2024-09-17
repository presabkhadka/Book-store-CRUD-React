import React, { useState } from "react";
import { useBookContext } from "../bookContext";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import DeleteModal from "./deleteModal";
import Modal from "./editModal";
import { useToast } from "./ui/use-toast";

type Book = {
  id: number;
  name: string;
  stock: number;
  price: number;
  action: any;
};

const columnHelper = createColumnHelper<Book>();

function AdminTable() {
  const { books, addBook, updateBook, deleteBook } = useBookContext();
  const [newBook, setNewBook] = useState<Partial<Book>>({});
  const [editBookId, setEditBookId] = useState<number | null>(null);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (editBookId === null) {
      if (
        !newBook.name ||
        newBook.stock === undefined ||
        newBook.price === undefined
      ) {
        toast({
          title: "Empty Fields",
          description: "Please fill all the fields to proceed",
          variant: "destructive",
        });
        return;
      }
      const newId = books.length ? Math.max(...books.map((b) => b.id)) + 1 : 1;
      addBook({ id: newId, ...newBook } as Book);
      toast({
        title: "Book Added",
        description: "Book has been successfully added!",
        
      });
    } else {
      if (
        !newBook.name ||
        newBook.stock === undefined ||
        newBook.price === undefined
      ) {
        toast({
          title: "Empty Fields",
          description: "Please fill all the fields to proceed",
          variant: "destructive",
        });
        return;
      }
      updateBook({ id: editBookId, ...newBook } as Book);
      setEditBookId(null);
    }
    setNewBook({});
  };

  const handleEdit = (book: Book) => {
    setNewBook({ name: book.name, stock: book.stock, price: book.price });
    setEditBookId(book.id);
  };

  const handleDelete = (id: number) => {
    deleteBook(id);
  };

  const columns = [
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
    columnHelper.accessor("action", {
      header: () => <span>Action</span>,
      cell: ({ row }) => (
        <div className="flex gap-1">
          <div className="border border-gray-300 rounded-lg bg-violet-500 text-white py-1 px-3 flex items-center gap-2 hover:text-white hover:border hover:border-white hover:bg-black">
            <Modal onConfirm={() => handleEdit(row.original)} />
          </div>
          <div className="border border-gray-300 rounded-lg bg-red-500 text-white py-1 px-3 flex items-center gap-2 hover:text-white hover:border hover:border-white hover:bg-black">
            <DeleteModal onConfirm={() => handleDelete(row.original.id)} />
          </div>
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
      pagination: {
        pageSize: 5,
      },
    },
  });

  return (
    <div>
      <div>
        <table className="min-w-full border border-gray-300">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-green-400">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-2 text-left border-b border-gray-300"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
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
      <div className="p-4 flex flex-col gap-2 items-center border border-gray-300">
        <h2 className="text-2xl font-bold font-serif">
          {editBookId === null ? "ADD NEW BOOK" : "EDIT BOOK"}
        </h2>
        <div className="flex gap-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newBook.name || ""}
            onChange={handleInputChange}
            className="border border-black p-2 rounded-md text-black"
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={newBook.stock || ""}
            onChange={handleInputChange}
            className="border border-black p-2 rounded-md text-black"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newBook.price || ""}
            onChange={handleInputChange}
            className="border border-black p-2 rounded-md text-black"
          />
          <button
            onClick={handleSubmit}
            className="border border-gray-300 bg-blue-500 text-white p-2 rounded-md hover:text-white hover:border hover:border-white hover:bg-black"
          >
            {editBookId === null ? "Add Book" : "Update Book"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminTable;
