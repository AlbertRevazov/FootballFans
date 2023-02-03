import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sign } from "../components/Sign";

// typed children

const AuthRoute: React.FC<any> = (children) => {
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
