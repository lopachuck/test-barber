import React from 'react'
import { GoogleMap, InfoWindowF, MarkerF, useLoadScript } from '@react-google-maps/api'
import { MarkerInfoWrapper } from './customGoogleMap.styles'
import {
    BARBERSHOP_DIRECTION_LINK,
    BARBERSHOP_LAT,
    BARBERSHOP_LNG,
    BARBERSHOP_NAME,
    MAP_API_KEY,
} from '../../config/config'

interface IMapMarker {
    name: string,
    position: {
        lat: number,
        lng: number
    },
    width: 50,
    height: 50
}

const customMarker: IMapMarker = {
    name: BARBERSHOP_NAME,
    position: { lat: BARBERSHOP_LAT, lng: BARBERSHOP_LNG },
    width: 50,
    height: 50,
}

let icon = {
    url: '/svg/icons/marker.svg',
}

const nightModeStyles = [
    {
        elementType: 'geometry',
        stylers: [{ color: '#212121' }],
    },
    {
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#212121' }],
    },
    {
        elementType: 'labels.text.fill',
        stylers: [{ color: '#757575' }],
    },
    {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [{ color: '#757575' }],
    },
    {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{ color: '#181818' }],
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#757575' }],
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#424242' }],
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#757575' }],
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#000000' }],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#757575' }],
    },
]
const apiKey: string = MAP_API_KEY

const CustomGoogleMap: React.FC = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apiKey,
    })

    return (
        <>
            <div style={{ height: '526px', width: '100%' }}>
                {isLoaded ? (
                    <GoogleMap
                        center={customMarker.position}
                        zoom={18}
                        options={{ styles: nightModeStyles }}
                        mapContainerStyle={{ height: '526px', width: '100%' }}
                    >

                        <MarkerF
                            position={customMarker.position}
                            icon={icon}
                        >
                            <InfoWindowF position={customMarker.position}>
                                <MarkerInfoWrapper>
                                    <p>{customMarker.name}</p>
                                    <a href={BARBERSHOP_DIRECTION_LINK} target={'_blank'}
                                       rel="noopener noreferrer">Direction</a>
                                </MarkerInfoWrapper>
                            </InfoWindowF>
                        </MarkerF>

                    </GoogleMap>
                ) : null}
            </div>
        </>
    )
}

export default CustomGoogleMap