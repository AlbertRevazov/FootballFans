import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Info } from "./LK/Edit/Info";
import { Photo } from "./LK/Edit/Photo";

export const UserPage: React.FC = () => {
  const { user } = useAppSelector((s) => s.users);

  useEffect(() => {}, [user?.image]);

  return (
    <Box
      sx={{
        minHeight: "650px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box>
        <Info />
      </Box>
      <Box>
        <Photo />
      </Box>
    </Box>
  );
};
