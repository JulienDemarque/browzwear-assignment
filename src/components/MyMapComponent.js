import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => {
    console.log("thereeeeee", props.location);
    return (
      <GoogleMap defaultZoom={11} center={props.location}>
        {props.isMarkerShown && <Marker position={props.location} />}
      </GoogleMap>
    );
  })
);

export default MyMapComponent;
