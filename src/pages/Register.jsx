import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
const Register = () => {
  const [error, setError] = useState("");
  const [showPassowrd, setShowPassword] = useState(false);
  const [passwordError, setpasswordError] = useState("");
  const {
    createUser,
    googleUser,
    githubUser,
    updateUser,
    loading,
    setLoading,
  } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { username, photo, password, email } = data;
    console.log(data);
    setError("");
    setpasswordError("");

    if (password.length < 6) {
      setpasswordError("password should be at least 6 characters or longer");
      toast.error("password should be at least 6 characters or longer");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setpasswordError("Password should be at least one uppercase");
      toast.error("Password should be at least one uppercase");
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      setpasswordError("Password should be at least one lowercase");
      toast.error("Password should be at least one lowercase");
      return;
    }
    if (!/(?=.*[@$!%*?&])/.test(password)) {
      setpasswordError("Password should be at least one special character");
      toast.error("Password should be at least one special character");
      return;
    }
    createUser(email, password)
      .then(() => {
        updateUser(username, photo);
        navigate("/");
        toast.success("User create successfully");
      })
      .catch((error) => {
        setError(error?.message.split(":")[1]);
        toast.error(error?.message.split(":")[1]);
        setLoading(false);
      });
  };
  const handleGoogle = () => {
    googleUser()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("User login with google successfully");
      })
      .catch((error) => {
        toast.error(error?.message.split(":")[1]);
        setLoading(false);
      });
  };
  const handleGithub = () => {
    githubUser()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("User login with github successfully");
      })
      .catch((error) => {
        toast.error(error?.message.split(":")[1]);
        setLoading(false);
      });
  };
  return (
    <div>
      <Helmet>
        <title>UnityQuest-Singup</title>
      </Helmet>
      <div className="flex bg-[#01456A] overflow-hidden">
        <div className="hidden lg:flex xl:flex">
          <img
            className="h-full w-[1400px]"
            src="https://i.ibb.co/5YH4WrC/lohup.jpg"
            alt=""
          />
        </div>
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
                onClick={handleGoogle}
                className="btn w-full bg-transparent hover:bg-transparent"
              >
                <FcGoogle size={30} />
                Sing up with Google
              </button>
              <button
                onClick={handleGithub}
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
                  {...register("photo")}
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
                <span className=" text-red-500">{error}</span>
              </div>
              <div className="form-control">
                <span className="label-text text-lg font-semibold">
                  Password*
                </span>
                <label className="label relative">
                  <input
                    type={showPassowrd ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered w-full"
                    {...register("password", { required: true })}
                  />
                  <a
                    className="absolute right-4"
                    onClick={() => setShowPassword(!showPassowrd)}
                  >
                    {!showPassowrd ? <FaEyeSlash /> : <FaEye />}
                  </a>
                </label>
                {errors.password && (
                  <span className=" text-red-500">This field is required</span>
                )}
                <span className="text-red-600 font-bold">{passwordError}</span>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-r text-white font-semibold text-lg from-green-500 to-blue-500">
                  {loading ? (
                    <span className="loading loading-spinner loading-md"></span>
                  ) : (
                    "Register"
                  )}{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
