import React from 'react'
import {connect} from 'react-redux'
import {fetchAllVendors} from '../store/vendors'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

class AllVendors extends React.Component {
  componentDidMount() {
    this.props.fetchAllVendors()
  }

  render() {
    const vendors = this.props.vendors
    const position = [51.505, -0.09]

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
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  vendors: state.vendors
})

const mapDispatchToProps = dispatch => ({
  fetchAllVendors: () => dispatch(fetchAllVendors())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllVendors)
