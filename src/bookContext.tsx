import React, { createContext, useContext, useState } from 'react';

type Book = {
  id: number;
  name: string;
  stock: number;
  price: number;
  action: any;
};

// Define the context and its type
type BookContextType = {
  books: Book[];
  addBook: (book: Book) => void;
  updateBook: (book: Book) => void;
  deleteBook: (id: number) => void;
};

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>(() => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  const addBook = (book: Book) => {
    setBooks(prevBooks => {
      const newBooks = [...prevBooks, book];
      localStorage.setItem('books', JSON.stringify(newBooks));
      return newBooks;
    });
  };

  const updateBook = (book: Book) => {
    setBooks(prevBooks => {
      const updatedBooks = prevBooks.map(b => (b.id === book.id ? book : b));
      localStorage.setItem('books', JSON.stringify(updatedBooks));
      return updatedBooks;
    });
  };

  const deleteBook = (id: number) => {
    setBooks(prevBooks => {
      const filteredBooks = prevBooks.filter(b => b.id !== id);
      localStorage.setItem('books', JSON.stringify(filteredBooks));
      return filteredBooks;
    });
  };

  return (
    <BookContext.Provider value={{ books, addBook, updateBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (context === undefined) {
    throw new Error('useBookContext must be used within a BookProvider');
  }
  return context;
};
