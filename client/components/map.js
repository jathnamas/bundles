import React from 'react'
import L from 'leaflet'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

export const Map = () => {
  const position = [43.036358, -87.914436]

  return (
    <div className="mapContainer">
      <link
        rel="stylesheet"
        href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css"
      />
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{height: '800px', width: '900px'}}
      >
        <TileLayer
          url="https://api.mapbox.com/styles/v1/jathnamas/ckh3vws1008cb19qhlbu75xsy/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamF0aG5hbWFzIiwiYSI6ImNrZndwemt5dzE1cDQzMHA5Z2NqdTF6bmoifQ.wy5dPa5sJdAIm14W3hlyZg"
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
        />
      </MapContainer>
    </div>
  )
}

export default Map
