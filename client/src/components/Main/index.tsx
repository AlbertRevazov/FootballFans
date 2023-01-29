import { Box, Button, Container, Link, Typography } from "@mui/material";
import { styles } from "./styles";

export const MainPage = () => {
  return (
    <>
      <Box sx={styles.root}>
        <Typography sx={styles.title}>
          Football Fans - это лучшее место для футбольных болельщиков
        </Typography>
      </Box>
      <Container>
        <Box sx={styles.targetBox}>
          <Typography sx={styles.targetTitle}>
            Цель нашего проекта заключается в том, чтобы искать единомышленников
          </Typography>
          <img src="/images/fans.jpg" style={styles.img} />
        </Box>
      </Container>
      <Box sx={styles.stadiumBox}>
        <Typography sx={styles.stadiumTitle}>
          Посещайте матчи любимой команды вместе с новыми друзьями
        </Typography>
      </Box>
      <Box sx={styles.pubBox}>
        <Typography sx={styles.pubTitle}>
          Или же можете встретиться в пабе и пропустить кружку пива
        </Typography>
        <img src="/images/fans-on-pub.jpg" style={styles.img} />
      </Box>
      <Box sx={styles.mapBox}>
        <Typography sx={styles.mapTitle}>
          Посмотреть стадионы и пабы в вашем городе на карте
        </Typography>
        <Link href="/map" underline="none">
          <Button sx={styles.mapButton}>Открыть карту</Button>
        </Link>
      </Box>
    </>
  );
};
