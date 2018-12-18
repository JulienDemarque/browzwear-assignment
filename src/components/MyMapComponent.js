/* eslint-disable no-undef */

import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const {
  MarkerWithLabel
} = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const MyMapComponent = withScriptjs(
  withGoogleMap(props => {
    return (
      <GoogleMap defaultZoom={15} center={props.location}>
        {props.isMarkerShown && (
          <MarkerWithLabel
            position={props.location}
            labelAnchor={new google.maps.Point(0, 60)}
            labelStyle={{
              color: "rgb(239, 64, 60)",
              fontWeight: "500",
              fontSize: "15px",
              padding: "16px",
              width: "140px"
            }}
          >
            <div>{props.currentCompanyAddress}</div>
          </MarkerWithLabel>
        )}
      </GoogleMap>
    );
  })
);

export default MyMapComponent;
