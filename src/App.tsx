import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home";
import Login from "./authentication/login";
import Signup from "./authentication/signup";
import Navbar from "./components/navbar";
import Forgot from "./authentication/forgot";
import Products from "./products";
import FormTry from "./components/form";
import Admin from "./authentication/admin/Admin";
import Dashboard from "./dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BookProvider } from "./bookContext"; // Ensure correct import path
import AdminPannel from "./adminPannel";
import AdminOrders from "./adminOrders";
import { ThemeProvider } from "./themeContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BookProvider>
          <RouterProvider
            router={createBrowserRouter([
              { path: "/", element: <Home /> },
              { path: "/login", element: <Login /> },
              { path: "/signup", element: <Signup /> },
              { path: "/navbar", element: <Navbar /> },
              { path: "/forgot", element: <Forgot /> },
              { path: "/products", element: <Products /> },
              { path: "/form", element: <FormTry /> },
              { path: "/admin", element: <Admin /> },
              { path: "/pannel", element: <AdminPannel /> },
              { path: "/pannel/dashboard", element: <Dashboard /> },
              { path: "/pannel/orders", element: <AdminOrders /> },
            ])}
          />
        </BookProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
