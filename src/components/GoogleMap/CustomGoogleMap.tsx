import React from 'react'
import { GoogleMap, InfoWindowF, MarkerF, useLoadScript } from '@react-google-maps/api'
import {MarkerInfoWrapper, LinkWrapper, LinkDirectionWaze, LinkDirectionGoogle} from './customGoogleMap.styles'
import {
    BARBERSHOP_DIRECTION_LINK_GOOGLE,
    BARBERSHOP_DIRECTION_LINK_WAZE,
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
    width: number,
    height: number
}

const customMarker: IMapMarker = {
    name: BARBERSHOP_NAME,
    position: { lat: BARBERSHOP_LAT, lng: BARBERSHOP_LNG },
    width: 800,
    height: 800,
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
                                    <LinkWrapper>
                                        <LinkDirectionWaze
                                            to={BARBERSHOP_DIRECTION_LINK_WAZE} target={'_blank'}
                                            rel="noopener noreferrer">Google Maps</LinkDirectionWaze>
                                        <LinkDirectionGoogle
                                            to={BARBERSHOP_DIRECTION_LINK_GOOGLE} target={'_blank'}
                                            rel="noopener noreferrer">Waze</LinkDirectionGoogle>
                                    </LinkWrapper>
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