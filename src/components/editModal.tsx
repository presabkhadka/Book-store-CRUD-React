import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";

type EditModal = {
  onConfirm: () => void;
};

const Modal: React.FC<EditModal> = ({ onConfirm }) => {
  return (
    <Dialog>
      <DialogTrigger className="h-full w-full">Edit</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-xl mb-5">
            Are you sure you want to edit the record?
          </DialogTitle>
          <DialogDescription className="flex justify-center gap-2">
            <button
              onClick={() => {
                onConfirm();
              }}
              className="border border-gray-300 bg-blue-500 text-white px-4 py-2 rounded-lg hover:border-white hover:bg-black"
            >
              Yes
            </button>
            <DialogClose asChild>
              <button className="border border-gray-300 bg-red-500 text-white px-4 py-2 rounded-lg hover:border-white hover:bg-black">
                No
              </button>
            </DialogClose>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
