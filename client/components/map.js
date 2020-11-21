import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import L from 'leaflet'

export const Map = props => {
  const position = [43.036358, -87.914436]

  const newMarker = L.icon({iconUrl: ''})

  const vendors = props.vendors

  return (
    <div className="mapContainer">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css"
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

        {vendors.map(vendor => {
          const vendorPosition = [vendor.lat, vendor.lon]
          return (
            <Marker
              key={vendor.id}
              position={vendorPosition}
              iconUrl={newMarker}
            />
          )
        })}
        {/* <Marker   position={vendorPosition} iconUrl= {newMarker} /> */}
      </MapContainer>
    </div>
  )
}

export default Map
