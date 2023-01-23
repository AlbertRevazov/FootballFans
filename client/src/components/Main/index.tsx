import { Box, Button, Container, Link, Typography } from "@mui/material";
import React from "react";

export const MainPage = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(/images/stadion.jpg)",
          backgroundSize: "100%",
          backgroundPosition: "center",
          height: "530px",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          padding: "0 90px 0 0",
        }}
      >
        <Typography
          sx={{
            width: "800px",
            textAlign: "right",
            fontFamily: "Montserrat Alternates",
            fontSize: "47px",
            color: "#FFFFFF",
            fontWeight: "300",
            lineHeight: "60px",
          }}
        >
          Football Fans - это лучшее место для футбольных болельщиков
        </Typography>
      </Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Typography
            sx={{
              width: "800px",
              textAlign: "left",
              fontFamily: "Montserrat Alternates",
              fontSize: "37px",
              color: "#A25F4B",
              fontWeight: "300",
              lineHeight: "50px",
            }}
          >
            Цель нашего проекта заключается в том, чтобы искать единомышленников
          </Typography>
          <img
            src="/images/fans.jpg"
            style={{ width: "600px", height: "400px" }}
          />
        </Box>
      </Container>
      <Box
        sx={{
          backgroundImage: "url(/images/fans-on-stadium.jpg)",
          backgroundSize: "100%",
          backgroundPosition: "center",
          height: "530px",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          padding: "0 90px 0 0",
          marginTop: "50px",
        }}
      >
        <Typography
          sx={{
            width: "800px",
            textAlign: "right",
            fontFamily: "Montserrat Alternates",
            fontSize: "47px",
            color: "#FFFFFF",
            fontWeight: "300",
            lineHeight: "60px",
          }}
        >
          Посещайте матчи любимой команды вместе с новыми друзьями
        </Typography>
      </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Typography
            sx={{
              width: "500px",
              textAlign: "left",
              fontFamily: "Montserrat Alternates",
              fontSize: "37px",
              color: "#229542",
              fontWeight: "300",
              lineHeight: "50px",
            }}
          >
            Или же можете встретиться в пабе и пропустить кружку пива
          </Typography>
          <img
            src="/images/fans-on-pub.jpg"
            style={{ width: "600px", height: "400px", borderRadius: "24px" }}
          />
        </Box>
        <Box
          sx={{
            backgroundImage: "url(/images/pitch.jpg)",
            backgroundSize: "100%",
            backgroundPosition: "center",
            height:'530px',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Typography
            sx={{
              width: "500px",
              textAlign: "center",
              fontFamily: "Montserrat Alternates",
              fontSize: "37px",
              color: "#FFFFFF",
              fontWeight: "300",
              lineHeight: "50px",
            }}
          >
            Посмотреть стадионы и пабы в вашем городе на карте
          </Typography>
          <Link href='/map' underline="none">
          <Button
            sx={{
              color: "#FFFFFF",
              marginTop: "20px",
              width: "280px",
              border: "2px solid #00000000",
              borderRadius:'15px',
              ":hover": { border: "2px solid #FFFFFF"},
            }}
          >
            Открыть карту
          </Button>
          </Link>
        </Box>
     
    </>
  );
};
