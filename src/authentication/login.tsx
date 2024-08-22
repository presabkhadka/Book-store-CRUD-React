import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character"
    ),
});

type Inputs = {
  username: string;
  password: string;
};

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = () => {
    let UserRole = 'user';
    localStorage.setItem('userRole', UserRole);
    navigate("/products");
  };
  

  return (
    <div className="grid grid-cols-12 gap-x-4 bg-slate-200 min-h-screen">
      <div className="col-span-5 flex justify-center items-center">
        <h1 className="font-extrabold text-6xl">
          BOOK <span className="text-yellow-300">पसल</span>
        </h1>
      </div>
      <div className="col-span-5 flex justify-center items-center p-6">
        <div className="bg-slate-100 p-4 rounded-lg shadow-xl flex flex-col w-full gap-4">
          <h1 className="text-xl font-bold text-center">Login</h1>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid col-span-3 gap-y-4"
            >
              <div className="flex col-span-full items-center">
                <label htmlFor="username" className="w-1/5">
                  Username
                </label>
                <input
                  className={`w-4/5 p-2 border-2 rounded-lg ${
                    errors.username
                      ? "border-red-500 placeholder:text-red-500"
                      : ""
                  }`}
                  {...register("username")}
                  placeholder={
                    errors.username
                      ? errors.username.message
                      : "Enter your username"
                  }
                />
              </div>
              <div className="flex col-span-full items-center">
                <label htmlFor="password" className="w-1/5">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password")}
                  className={`w-4/5 border-2 p-2 rounded-lg ${
                    errors.password
                      ? "border-red-500 placeholder:text-red-500"
                      : ""
                  }`}
                  placeholder={
                    errors.password
                      ? errors.password.message
                      : "Enter your password"
                  }
                />
              </div>
              <div className="flex col-span-full items-center justify-between gap-2 text-slate-700">
                <div className="flex gap-2">
                  <input type="checkbox" name="cbox" />
                  <label htmlFor="cbox">Remember Me</label>
                </div>
                <div>
                  <Link to="/forgot">
                    <p className="text-red-400 font-normal  hover:text-red-500">
                      Forgot Password
                    </p>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-3">
                <input
                  type="submit"
                  className="col-start-2 border-2 border-black text-black p-2 rounded-lg hover:cursor-pointer hover:bg-blue-500 hover:text-white"
                  value="Login"
                />
              </div>
              <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <p>Don't have an account?</p>
                  <Link to="/signup">
                    <p className="text-blue-500 font-semibold">Register</p>
                  </Link>
                </div>
                <div>
                  <Link to="/admin">
                    <p className="text-white font-semibold border-2 p-1 rounded-md border-black bg-black ">Admin Login</p>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
