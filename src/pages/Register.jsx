import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
const Register = () => {
  const { createUser, googleUser, githubUser } = useAuth();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { username, photo, password, email } = data;
    console.log(data);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message.split(":")[1]);
      });
  };

  return (
    <div>
      <div className="hero bg-[#00684A] ">
        <div className="hero-content w-full">
          <div className="card w-[500px] bg-base-100">
            <div className="card-body">
              <h1 className="text-4xl font-bold text-[#00684A]">Sign up</h1>
              <p className="font-semibold">
                Alraedy have an account?{" "}
                <Link to="/login" className=" text-[#016BF9]">
                  Sign in
                </Link>
              </p>
            </div>
            <div className="flex  flex-col gap-3 mx-8">
              <button
                onClick={googleUser}
                className="btn w-full bg-transparent hover:bg-transparent"
              >
                <FcGoogle size={30} />
                Sing up with Google
              </button>
              <button
                onClick={githubUser}
                className="btn w-full bg-transparent hover:bg-transparent"
              >
                <FaGithub size={30} />
                Sing up with GitHub
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="divider">or</div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Name*
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="UserName"
                  name="username"
                  className="input input-bordered"
                  {...register("username", { required: true })}
                />{" "}
                {errors.username && (
                  <span className=" text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    PhotoURL*
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoURL"
                  name="photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Email*
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />{" "}
                {errors.email && (
                  <span className=" text-red-500">This field is required</span>
                )}{" "}
                {/* <span className=" text-red-500">{emailError}</span> */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Password*
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />{" "}
                {errors.password && (
                  <span className=" text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
