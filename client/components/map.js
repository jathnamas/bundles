import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import ReactStars from 'react-star-ratings'
import {Link} from 'react-router-dom'

export const Map = props => {
  const position = [43.036358, -87.914436]
  const vendors = props.vendors

  return (
    <div className="mapContainer">
      {/* <OtherMap /> */}

      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{height: '1200px', width: '1200px'}}
        onClick={() => {
          return <Popup />
        }}
      >
        <TileLayer
          url="https://api.mapbox.com/styles/v1/jathnamas/ckh3vws1008cb19qhlbu75xsy/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamF0aG5hbWFzIiwiYSI6ImNrZndwemt5dzE1cDQzMHA5Z2NqdTF6bmoifQ.wy5dPa5sJdAIm14W3hlyZg"
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
        />

        {vendors.map(vendor => {
          const vendorPosition = [vendor.lat, vendor.lon]
          const stars = {
            starDimension: '20px',
            starSpacing: '1px',
            rating: Number(vendor.vendorRating),
            edit: false,
            starRatedColor: 'pink',
            isHalf: true
          }

          return (
            <Marker key={vendor.id} position={vendorPosition}>
              <Popup>
                <div className="vendorPopup">
                  <Link to={`/vendors/${vendor.id}`}>
                    <h1>{vendor.userName}</h1>
                  </Link>
                  <img className="popUpPic" src={vendor.profilePic} />
                  <br />
                  <ReactStars className="stars" {...stars} />
                  <br />
                </div>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  )
}

export default Map
