import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { singInUser, googleUser, githubUser, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [step, setStep] = useState(1);
  const [emailValid, setEmailValid] = useState(false);

  const onSubmit = (data) => {
    const { email, password } = data;

    singInUser(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("User login successfully");
      })
      .catch((error) => {
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

  const validateEmail = (email) => {
    const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    return regex.test(email);
  };

  const handleChangeEmail = (e) => {
    const email = e.target.value;
    setEmailValid(validateEmail(email));
  };

  return (
    <div>
      <Helmet>
        <title>UnityQuest-Login</title>
      </Helmet>
      <div className="bg-[#00684A]">
        <div className="hero-content flex-col md:flex-row-reverse lg:flex-row-reverse">
          <div className="w-2/3 hidden  lg:flex xl:flex relative">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/X4sY8KS/image.png"
              alt=""
            />
            <div className="w-[35%] h-[60%] bg-[#00684A] absolute left-10 text-white">
              <p className="lg:mt-6 xl:mt-16 xl:leading-8 text-md font-semibold">
                Volunteering offers individuals a profound sense of purpose and
                fulfillment by allowing them to contribute their skills to
                causes they care about. Additionally, it plays a vital role in
                creating positive social change by amplifying the impact of
                organizations and fostering empathy and understanding within
                communities.
              </p>
            </div>
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
                onClick={handleGoogle}
                className="btn w-full bg-transparent hover:bg-transparent"
              >
                <FcGoogle size={30} /> Google
              </button>
              <button
                onClick={handleGithub}
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
                    onChange={handleChangeEmail}
                  />
                </div>
              )}
              {step === 2 && (
                <div className="form-control">
                  <span className="label-text">Password</span>
                  <label className="label relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      name="password"
                      className="input input-bordered w-full"
                      {...register("password", {
                        required: "This field is required",
                      })}
                    />{" "}
                    <a
                      className="absolute right-4"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {!showPassword ? <FaEyeSlash /> : <FaEye />}
                    </a>
                  </label>
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
                    disabled={!emailValid}
                    className={`btn text-white text-lg font-semibold bg-gradient-to-r from-green-500 to-green-800 ${
                      !emailValid ? "opacity-50 cursor-not-allowed" : ""
                    }`}
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
                    <button
                      type="submit"
                      className="btn text-white text-lg font-semibold bg-gradient-to-r from-green-500 to-green-800"
                    >
                      {loading ? (
                        <span className="loading loading-spinner loading-md"></span>
                      ) : (
                        "Login"
                      )}
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
