import React from "react";
import Menu from "@mui/material/Menu";
import { Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { styles } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { checkIsAuth, logout } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import Divider from "@mui/material/Divider";

type Anchor = "Menu";

export const MobileNav = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(checkIsAuth);
  // const { user }: any = useAppSelector((state) => state.users);
  const navigate = useNavigate();

  const logoutHandle = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    toast("Вы вышли из системы.");
    navigate("/");
  };

  return (
    <PopupState variant="dialog" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Box sx={styles.menu} {...bindTrigger(popupState)} />
          <Menu {...bindMenu(popupState)}>
            <MenuItem
              sx={{ width: "400px", margin: "20px" }}
              onClick={popupState.close}
            >
              <Box
                sx={[styles.icon, { backgroundImage: "url(/images/user.png)" }]}
              />
              <Link to={"#"} color="#202020" style={styles.font}>
                Личный Кабинет
              </Link>
            </MenuItem>
            <MenuItem
              sx={{ width: "400px", margin: "20px" }}
              onClick={popupState.close}
            >
              <Box
                sx={[
                  styles.icon,
                  { backgroundImage: "url(/images/option.png)" },
                ]}
              />
              <Link to={"#"} color="#202020" style={styles.font}>
                Настройки
              </Link>
            </MenuItem>
            {isAuth ? (
              <MenuItem
                sx={{ width: "400px", margin: "20px" }}
                onClick={popupState.close}
              >
                <Box
                  sx={[
                    styles.icon,
                    { backgroundImage: "url(/images/logout.png)" },
                  ]}
                />
                <Box onClick={logoutHandle} color="#202020" sx={styles.font}>
                  Выйти
                </Box>
              </MenuItem>
            ) : (
              <MenuItem
                sx={{ width: "400px", margin: "20px" }}
                onClick={popupState.close}
              >
                <Box
                  sx={[
                    styles.icon,
                    { backgroundImage: "url(/images/login.png)" },
                  ]}
                />
                <Link to={"/sign"} color="#202020" style={styles.font}>
                  Войти
                </Link>
              </MenuItem>
            )}
            <Divider />
            <MenuItem
              sx={{ width: "400px", margin: "20px" }}
              onClick={popupState.close}
            >
              <Link to={"/"} color="#202020" style={styles.font}>
                Главная
              </Link>
            </MenuItem>
            <MenuItem
              sx={{ width: "400px", margin: "20px" }}
              onClick={popupState.close}
            >
              <Link to={"/map"} color="#202020" style={styles.font}>
                Карта
              </Link>
            </MenuItem>
            <MenuItem
              sx={{ width: "400px", margin: "20px" }}
              onClick={popupState.close}
            >
              <Link to={"/matches"} color="#202020" style={styles.font}>
                Матчи
              </Link>
            </MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
};
