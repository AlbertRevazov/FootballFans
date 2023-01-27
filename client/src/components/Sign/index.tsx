import { Box, Button, TextField, Checkbox, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { toast } from "react-toastify";
import { loginUser, registerUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const validationSchema = yup.object({
  email: yup.string().email("Неверный email").required("Обязательное поле"),
  password: yup
    .string()
    .min(8, "Минимум 8 символов")
    .required("Обязательное поле"),
  name: yup.string().required("Обязательное поле"),
  phone: yup.string().min(11, "Минимум 11 символов").length(11),
});

export const Sign = () => {
  const [toogle, setToogle] = React.useState(false);
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const dispatch = useAppDispatch();
  const status = useAppSelector((state: any) => state?.users?.status);

  const formik = useFormik({
    initialValues:
      toogle === true
        ? {
            email: "",
            password: "",
            name: "",
            phone: "",
          }
        : {
            email: "",
            password: "",
          },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });

  useEffect(() => {
    if (status) {
      toast(status);
    }
  }, [status, navigate]);

  const handleSubmit = async () => {
    try {
      const response = await dispatch(
        toogle ? registerUser(formik.values) : loginUser(formik.values)
      );
      toast(status);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <TextField
          sx={{ width: "290px", marginBottom: "30px" }}
          id="email"
          name="email"
          label="Email"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          sx={{ width: "290px", marginBottom: "30px" }}
          id="password"
          name="password"
          label="Password"
          type="password"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        {toogle && (
          <>
            <TextField
              sx={{ width: "290px", marginBottom: "30px" }}
              id="phone"
              name="phone"
              label="Phone"
              type="phone"
              required
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <TextField
              sx={{ width: "290px", marginBottom: "30px" }}
              id="name"
              name="name"
              label="name"
              type="name"
              required
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <Checkbox
          {...label}
          name="checkbox"
          onClick={() => setToogle(!toogle)}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
        />
        <Typography
          sx={{
            fontFamily: "Montserrat Alternates",
            fontSize: "20px",
            color: "#202020",
          }}
        >
          Зарегистрироваться
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button sx={{ width: "290px" }} type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </form>
  );
};
