import React from 'react'
import {connect} from 'react-redux'
import {fetchAllVendors} from '../store/vendors'
import {MapContainer, TileLayer, Marker, Popup, Icon} from 'react-leaflet'
import Map from './map'

class AllVendors extends React.Component {
  componentDidMount() {
    this.props.fetchAllVendors()
  }

  render() {
    const vendors = this.props.vendors
    console.log(vendors)
    return (
      <div>
        <div>
          {vendors.map(vendor => {
            return (
              <div className="vendorContainer" key={vendor.id}>
                <h1>{vendor.userName}</h1>
                <h2>{vendor.vendorAveragePrice}</h2>
                <h3>{vendor.vendorRating}</h3>
              </div>
            )
          })}
        </div>
        <Map />
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
