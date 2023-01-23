import { Box, Typography } from "@mui/material";
import { Logo } from "../Logo";
import Link from "@mui/material/Link";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { checkIsAuth, logout } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface StateProps {
  users: {
    token: null;
    isLoading: boolean;
    status: null;
    user:  null
  };
}

export const Nav = () => {
  const isAuth = useAppSelector(checkIsAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandle = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    toast("Вы вышли из системы.");
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "floralwhite",
        height: "90px",
        borderRadius: "0 0 16px 16px",
      }}
    >
      <Box
        sx={{
          width: "400px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Logo />
        <Box
          sx={{
            marginLeft: "20px",
            ":hover": {
              borderBottom: "3px solid darkseagreen",
            },
          }}
        >
          <Link
            href="/"
            underline="none"
            color="#202020"
            sx={{ fontFamily: "Montserrat Alternates", fontSize: "20px" }}
          >
            Главная
          </Link>
        </Box>
        {!isAuth ? (
          <Box
            sx={{
              marginLeft: "20px",
              ":hover": {
                borderBottom: "3px solid darkseagreen",
              },
            }}
          >
            <Link
              href="/sign"
              underline="none"
              color="#202020"
              sx={{ fontFamily: "Montserrat Alternates", fontSize: "20px" }}
            >
              Войти
            </Link>
          </Box>
        ) : (
          <Box
            sx={{
              marginLeft: "20px",
              ":hover": {
                borderBottom: "3px solid darkseagreen",
              },
            }}
          >
            <Link
              href="/"
              underline="none"
              onClick={logoutHandle}
              color="#202020"
              sx={{ fontFamily: "Montserrat Alternates", fontSize: "20px" }}
            >
              Выйти
            </Link>
          </Box>
        )}

        <Box
          sx={{
            marginLeft: "20px",
            ":hover": {
              borderBottom: "3px solid darkseagreen",
            },
          }}
        >
          <Link
            href="/map"
            underline="none"
            color="#202020"
            sx={{ fontFamily: "Montserrat Alternates", fontSize: "20px" }}
          >
            Карта
          </Link>
        </Box>
      </Box>
      {isAuth && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "40px",
          }}
        >
          <Typography
            // color="#202020"
            sx={{ fontFamily: "Montserrat Alternates", fontSize: "20px" }}
          >
            Добро пожаловать -
            {/* {name} */}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
