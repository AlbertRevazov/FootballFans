import { YMaps, Map, RouteButton, TypeSelector } from "@pbe/react-yandex-maps";
import { Box } from "@mui/material";
import { styles } from "./styles";

export const MapPage: React.FC = () => {
  return (
    <Box style={styles.root}>
      <YMaps>
        <Map
          width={"600px"}
          height={"600px"}
          defaultState={{
            // the initial focus of the map
            center: [55.751574, 37.573856],
            zoom: 8,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          {/* buttons for routes and type layers  */}
          <RouteButton options={{ float: "right" }} />
        </Map>
      </YMaps>
    </Box>
  );
};
