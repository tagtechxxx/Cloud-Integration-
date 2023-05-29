import React from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'


const MapContainer = (props) => {
    const mapStyles = {
        width: '100%',
        height: '50%'
    };
    return (
            <Map
                google={props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{lat: 6.49840, lng: 3.38993 }}
            />
    );
}

export default GoogleApiWrapper({
    apiKey: ""
})(MapContainer);