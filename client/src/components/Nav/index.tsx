import { Box, Typography } from "@mui/material";
import { Logo } from "../Logo";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { checkIsAuth, logout } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "./styles";
import { link } from "../../Types";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MobileNav } from "./MobileNav";

// adding for user image and view this on navBar

export const Nav = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const isAuth = useAppSelector(checkIsAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const links = [
    { id: 1, title: "Главная", to: "/", hide: false },
    { id: 2, title: "Войти", to: "/sign", hide: isAuth },
    { id: 3, title: "Выйти", to: "/", hide: !isAuth, onclick: true },
    { id: 4, title: "Карта", to: "/map", hide: false },
    { id: 5, title: "Матчи", to: "/matches", hide: false },
  ];

  const logoutHandle = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    toast("Вы вышли из системы.");
    navigate("/");
  };

  return (
    <>
      {!isMobile ? (
        <Box sx={styles.root}>
          <Box sx={styles.navBar}>
            <Logo />
            {links.map((item: link) => (
              <Box
                key={item.id}
                onClick={item.onclick ? logoutHandle : () => {}}
                hidden={item.hide}
                sx={styles.link}
              >
                <Link to={item.to} color="#202020" style={styles.font}>
                  {item.title}
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      ) : (
        <>
          <Box sx={styles.root}>
            <Box sx={styles.navBar}>
              <Logo />
              <MobileNav />
            </Box>
          </Box>
        </>
      )}
    </>
  );
};
