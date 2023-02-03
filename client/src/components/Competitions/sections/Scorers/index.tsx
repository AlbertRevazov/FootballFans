import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useAppSelector } from "../../../../hooks/hooks";
import { styles } from "../../styles";

export const ScorersPage: React.FC = () => {
  const { topScorers } = useAppSelector((state) => state.competitions);

  return (
    <TableContainer sx={{ margin: "40px 0 40px 0" }}>
      <Table>
        <TableHead sx={{ backgroundColor: "#202020" }}>
          <TableRow>
            <TableCell sx={styles.lightTableCell}>#</TableCell>
            <TableCell sx={styles.lightTableCell}>Игрок</TableCell>
            <TableCell sx={styles.lightTableCell}>Голы</TableCell>
            <TableCell sx={styles.lightTableCell}>Ассисты</TableCell>
            <TableCell sx={styles.lightTableCell}>Пенальти</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topScorers?.scorers.map((row, index: number) => (
            <TableRow key={row.player.id}>
              <TableCell sx={styles.darkTableCell}>{index + 1}</TableCell>
              <TableCell sx={styles.darkTableCell}>
                <img
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "5px",
                  }}
                  src={row.team.crest}
                />
                {row.player.name} ( {row.player.nationality} )
              </TableCell>
              <TableCell sx={styles.darkTableCell}>
                {row.goals === null ? 0 : row.goals}
              </TableCell>
              <TableCell sx={styles.darkTableCell}>
                {row.assists === null ? 0 : row.assists}
              </TableCell>
              <TableCell sx={styles.darkTableCell}>
                {row.penalties === null ? 0 : row.penalties}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
