import React from "react";
// import ymaps from 'react-yandex-maps';
import { YMaps, Map, RouteButton, TypeSelector } from "@pbe/react-yandex-maps";
import { Box } from "@mui/material";
// import {  } from 'react-yandex-maps';
// import { Counter } from '../../redux/features/counter/Counter'

let myMap;

export const MapPage = () => {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "60px",
      }}
    >
      <YMaps>
        <Map
          width={"600px"}
          height={'600px'}
          defaultState={{
            center: [55.75, 37.57],
            zoom: 9,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          {/* <Placemark geometry={[55.684758, 37.738521]} /> */}
          <RouteButton options={{ float: "right" }} />
          <TypeSelector options={{ float: "right" }} />
        </Map>
      </YMaps>
    </Box>
  );
};
