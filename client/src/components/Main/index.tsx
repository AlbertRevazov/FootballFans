import { Box, Button, Container, Link, Typography } from "@mui/material";
import { styles } from "./styles";

export const MainPage: React.FC = () => {
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
          <Box
            sx={[
              styles.img,
              { margin: "20px", backgroundImage: "url(/images/fans.jpg)" },
            ]}
          />
        </Box>
      </Container>
      <Box sx={styles.stadiumBox}>
        <Typography sx={styles.stadiumTitle}>
          Посещайте матчи любимой команды вместе с новыми друзьями
        </Typography>
      </Box>
      <Box sx={styles.pubBox}>
        <Typography sx={styles.pubTitle}>
          Или же можете встретиться в пабе и пропустить по кружке пива
        </Typography>
        <Box sx={styles.imgpub} />
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
