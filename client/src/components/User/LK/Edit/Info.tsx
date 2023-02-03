import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { useAppSelector } from "../../../../hooks/hooks";

export const Info: React.FC = () => {
  const [edit, setEdit] = React.useState(false);
  const { user } = useAppSelector((state) => state.users);

  const validationSchema = yup.object({
    name: yup.string().required("Обязательное поле"),
    phone: yup.string().min(11, "Минимум 11 символов").length(11),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });

  return (
    <>
      {!!edit ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <TextField
              id="name"
              name="name"
              label="name"
              required
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              id="phone"
              name="phone"
              label="phone"
              type="phone"
              required
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                color="inherit"
                variant="outlined"
                onClick={() => setEdit(!edit)}
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </Box>
        </form>
      ) : (
        <>
          <Typography>{user?.name}</Typography>
          <Typography>{user?.phone}</Typography>
          <Typography>{user?.email}</Typography>
          <Typography sx={{ cursor: "pointer" }} onClick={() => setEdit(!edit)}>
            Редактировать
          </Typography>
        </>
      )}
    </>
  );
};
