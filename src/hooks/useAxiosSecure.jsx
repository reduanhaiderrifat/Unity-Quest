import axios from "axios";
import { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";

const axiosSecure = axios.create({
  baseURL: "https://volunteer-management-server-lemon.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const auth = getAuth();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth)
            .then(() => {
              window.location.assign("/login");
            })
            .catch((error) => {
              console.error(error.message);
            });
        }
      }
    );
  }, [auth]);
  return axiosSecure;
};

export default useAxiosSecure;
