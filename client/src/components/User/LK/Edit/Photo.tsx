import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../../hooks/hooks";
import { useEditUserHooks } from "./hooks";
import { styles } from "./styles";

export const Photo: React.FC = () => {
  const { user } = useAppSelector((state) => state.users);
  const { handleInputChange, edit, setEdit, error, setError, sendPhoto } =
    useEditUserHooks();

  return (
    <>
      {!!edit ? (
        <Box className="form-row" sx={styles.flexColumn}>
          <Typography
            sx={[
              styles.font,
              {
                visibility: !!error.length ? "visible" : "hidden",
                color: "red",
                margin: "10px",
              },
            ]}
          >
            {error}
          </Typography>

          <TextField
            type="file"
            variant="standard"
            name="upload_file"
            onChange={handleInputChange}
          />
          <Box
            sx={{
              width: "100%",
              marginTop: "24px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Button
              sx={[
                styles.button,
                {
                  ":hover": {
                    backgroundColor: "darkseagreen",
                    color: "#FFFFFF",
                  },
                },
              ]}
              onClick={sendPhoto}
              type="submit"
            >
              Изменить
            </Button>
            <Button
              sx={[
                styles.button,
                { ":hover": { backgroundColor: "#202020", color: "#FFFFFF" } },
              ]}
              onClick={() => setEdit(!edit)}
              type="submit"
            >
              Отменить
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={user?.image} style={styles.image} />
          <Typography
            sx={[styles.font, { cursor: "pointer", marginTop: "20px" }]}
            onClick={() => setEdit(!edit)}
          >
            Редактировать
          </Typography>
        </Box>
      )}
    </>
  );
};
