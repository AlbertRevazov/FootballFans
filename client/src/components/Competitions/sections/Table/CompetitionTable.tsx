import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CompetitionsStandingsProps } from "../../../../Types";
import { styles } from "../../styles";
import { Link } from "react-router-dom";

export const CompetitionTable = ({ data }: any) => {
  return (
    <Box sx={{ margin: "40px 0 40px 0" }}>
      {!!data?.length && (
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: "#202020" }}>
              <TableRow>
                <TableCell sx={styles.lightTableCell}>#</TableCell>
                <TableCell sx={styles.lightTableCell}>Команда</TableCell>
                <TableCell sx={styles.lightTableCell}>Тур</TableCell>
                <TableCell sx={styles.lightTableCell}>В</TableCell>
                <TableCell sx={styles.lightTableCell}>Н</TableCell>
                <TableCell sx={styles.lightTableCell}>П</TableCell>
                <TableCell sx={styles.lightTableCell}>ЗГ</TableCell>
                <TableCell sx={styles.lightTableCell}>ПГ</TableCell>
                <TableCell sx={styles.lightTableCell}>РМ</TableCell>
                <TableCell sx={styles.lightTableCell}>О</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!!data &&
                data.map((item: any) => {
                  if (item.type === "TOTAL") {
                    return item.table.map((row: CompetitionsStandingsProps) => (
                      <TableRow key={row.team.id}>
                        <TableCell sx={styles.darkTableCell}>
                          {row.position}
                        </TableCell>
                        <TableCell sx={styles.darkTableCell}>
                          <img
                            style={{
                              width: "20px",
                              height: "20px",
                              marginRight: "5px",
                            }}
                            src={row.team.crest}
                          />
                          <Link
                            to={`/teams/${row.team.id}`}
                            style={{ textDecoration: "none", color: "#202020" }}
                          >
                            {row.team.name}
                          </Link>
                        </TableCell>
                        <TableCell sx={styles.darkTableCell}>
                          {row.playedGames}
                        </TableCell>
                        <TableCell sx={styles.darkTableCell}>
                          {row.won}
                        </TableCell>
                        <TableCell sx={styles.darkTableCell}>
                          {row.draw}
                        </TableCell>
                        <TableCell sx={styles.darkTableCell}>
                          {row.lost}
                        </TableCell>
                        <TableCell sx={styles.darkTableCell}>
                          {row.goalsFor}
                        </TableCell>
                        <TableCell sx={styles.darkTableCell}>
                          {row.goalsAgainst}
                        </TableCell>
                        <TableCell sx={styles.darkTableCell}>
                          {row.goalDifference}
                        </TableCell>
                        <TableCell sx={styles.darkTableCell}>
                          {row.points}
                        </TableCell>
                      </TableRow>
                    ));
                  }
                })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};
