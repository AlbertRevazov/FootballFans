import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sign } from "../components/Sign";

const AuthRoute = ({ children }: any) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/sign");
    }
  }, []);

  // in the absence of a token, it does not push to the pages
  return token ? children : <Sign />;
};

export default AuthRoute;
