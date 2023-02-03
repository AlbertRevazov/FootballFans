import { Box, Button, TextField, Checkbox, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthHook } from "./hooks";
import { styles } from "./styles";

export const Sign: React.FC = () => {
  // toogle for login or register
  const navigate = useNavigate();
  const [toogle, setToogle] = React.useState(false);
  const { formik, handleSubmit, status } = useAuthHook(toogle);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  useEffect(() => {
    if (status) {
      toast(status);
    }
  }, [status, navigate]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Box sx={styles.root}>
        <TextField
          sx={styles.textField}
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
          sx={styles.textField}
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
              sx={styles.textField}
              id="phone"
              name="phone"
              label="Phone"
              type="phone"
              required
              value={formik.values.phone || ""}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <TextField
              sx={styles.textField}
              id="name"
              name="name"
              label="name"
              type="name"
              required
              value={formik.values.name || ""}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </>
        )}
      </Box>
      <Box sx={styles.toogleBox}>
        <Checkbox
          {...label}
          name="checkbox"
          onClick={() => setToogle(!toogle)}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
        />
        <Typography sx={styles.font}>Зарегистрироваться</Typography>
      </Box>
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
          sx={styles.button}
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};
