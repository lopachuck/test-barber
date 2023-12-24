import React from 'react';
import {GoogleMap, InfoWindowF, MarkerF, useLoadScript} from "@react-google-maps/api";
import {MarkerInfoWrapper} from "./customGoogleMap.styles";


const customMarker = {
    name: 'Barbershop "Uncle VE"' ,
    position: { lat: 59.436553, lng: 24.769528 },
    width: 50,
    height: 50
}

let icon = {
    url: "/svg/icons/marker.svg",
    // scaledSize: new this.props.google.maps.Size(100, 100) //@TODO fix size of marker
    // scaledSize: {hetigh: 100, width: 100}
};

const nightModeStyles = [
    {
        elementType: 'geometry',
        stylers: [{ color: '#212121' }]
    },
    {
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#212121' }]
    },
    {
        elementType: 'labels.text.fill',
        stylers: [{ color: '#757575' }]
    },
    {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [{ color: '#757575' }]
    },
    {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{ color: '#181818' }]
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#757575' }]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#424242' }]
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#757575' }]
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#000000' }]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#757575' }]
    }
    // Add more styles as needed
];

const CustomGoogleMap: React.FC =() => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyB5PzIu2_AoRZfqHjkNC3Fmz6B5BrrDWT0', //@TODO remove to env file
    });
    return (
        <>
            <div style={{height: "526px", width: "100%"}}>
                {isLoaded ? (
                    <GoogleMap
                        center={customMarker.position}
                        zoom={18}
                        options={{ styles: nightModeStyles }}
                        // onClick={() => setActiveMarker(null)}
                        mapContainerStyle={{height: "526px", width: "100%"}}
                    >
                        
                            <MarkerF
                                position={customMarker.position}
                                icon={icon}
                            >
                                <InfoWindowF position={customMarker.position}>
                                    <MarkerInfoWrapper>
                                        <p>{customMarker.name}</p>
                                        <a href={"#"}>Direction</a>
                                    </MarkerInfoWrapper>
                                </InfoWindowF>
                            </MarkerF>
                        
                    </GoogleMap>
                ) : null}
            </div>
        </>
    )
};

export default CustomGoogleMap;