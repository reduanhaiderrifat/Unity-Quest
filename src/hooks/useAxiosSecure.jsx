import axios from "axios";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const auth = getAuth();
  //   const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth)
            .then(() => {
              //   navigate("/login");
              window.location.href("/login");
            })
            .catch((error) => {
              console.error(error.message);
            });
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
