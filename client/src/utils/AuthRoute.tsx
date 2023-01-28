import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sign } from "../components/Sign";

const AuthRoute = ({ children }: any) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  console.log(token, "token");

  useEffect(() => {
    if (!token) {
      navigate("/sign");
    }
  }, []);

  return token ? children : <Sign />;
};

export default AuthRoute;
