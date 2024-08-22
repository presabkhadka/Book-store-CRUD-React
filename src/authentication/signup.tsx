import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  username: string;
  password: string;
  retypepassword: string;
  email: string;
}

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const password = watch("password");

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
                  {...register("username", { required: true })}
                  placeholder={
                    errors.username
                      ? "Username is required*"
                      : "Enter your username"
                  }
                />
              </div>
              <div className="flex col-span-full items-center">
                <label htmlFor="email" className="w-1/5">
                  Email
                </label>
                <input
                  type="email"
                  className={`w-4/5 p-2 border-2 rounded-lg ${
                    errors.email
                      ? "border-red-500 placeholder:text-red-500"
                      : ""
                  }`}
                  {...register("email", { required: true })}
                  placeholder={
                    errors.username ? "Email is required*" : "Enter your email"
                  }
                />
              </div>
              <div className="flex col-span-full items-center">
                <label htmlFor="password" className="w-1/5">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: "Please follow standard password rules",
                    },
                  })}
                  className={`w-4/5 border-2 p-2 rounded-lg ${
                    errors.password
                      ? "border-red-500 placeholder:text-red-500"
                      : ""
                  }`}
                  placeholder={
                    errors.password
                      ? "Password is required*"
                      : "Enter your password"
                  }
                />
              </div>
              <div className="flex col-span-full items-center">
                <label htmlFor="retypepassword" className="w-1/5">
                  Retype Password
                </label>
                <input
                  type="password"
                  {...register("retypepassword", {
                    required: true,
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  className={`w-4/5 border-2 p-2 rounded-lg ${
                    errors.retypepassword
                      ? "border-red-500 placeholder:text-red-500"
                      : ""
                  }`}
                  placeholder={
                    errors.retypepassword
                      ? "Passwords do not match"
                      : "Please retype your password"
                  }
                />
              </div>
              <div className="grid grid-cols-3">
                <input
                  type="submit"
                  value="Register"
                  className="col-start-2 border-2 border-black text-black p-2 rounded-lg hover:cursor-pointer hover:bg-blue-500 hover:text-white"
                />
              </div>
              <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="flex gap-2">
                <p>Already have an account?</p>
                <Link to="/login">
                  <p className="text-blue-500 font-semibold">Sign In</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
