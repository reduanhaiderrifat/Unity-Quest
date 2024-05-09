import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { singInUser, googleUser, githubUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [step, setStep] = useState(1);

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(data);
    singInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User login successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="bg-[#00684A]">
        <div className="hero-content flex-col md:flex-row-reverse lg:flex-row-reverse">
          <div className="w-2/3 hidden md:flex lg:flex xl:flex">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/X4sY8KS/image.png"
              alt=""
            />
          </div>
          <div className="card shrink-0 w-full  max-w-sm  bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl font-bold text-[#00684A]">
                Log in to your account
              </h1>
              <p className="font-semibold">
                Don't have an account?{" "}
                <Link to="/register" className=" text-[#016BF9]">
                  Sign Up
                </Link>
              </p>
            </div>
            <div className="flex  flex-col gap-3 mx-8">
              <button
                onClick={googleUser}
                className="btn w-full bg-transparent hover:bg-transparent"
              >
                <FcGoogle size={30} /> Google
              </button>
              <button
                onClick={githubUser}
                className="btn w-full bg-transparent hover:bg-transparent"
              >
                <FaGithub size={30} /> GitHub
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {step === 1 && (
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    {...register("email", {
                      required: "This field is required",
                    })}
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </div>
              )}
              {step === 2 && (
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    {...register("password", {
                      required: "This field is required",
                    })}
                  />
                  {errors.password && (
                    <span className="text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  <label className="label">
                    <p className="label-text-alt link link-hover">
                      Forgot password?
                    </p>
                  </label>
                </div>
              )}
              <div className="form-control mt-6 relative">
                {step === 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn btn-primary"
                  >
                    Next
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className=" rounded-full border p-2 absolute right-0 bottom-16"
                    >
                      <IoMdArrowRoundBack size={25} />
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
