import React from 'react'
import {connect} from 'react-redux'
import {getOneVendor} from '../store/vendors'
import ReactStars from 'react-star-ratings'

class Vendor extends React.Component {
  componentDidMount() {
    this.props.getOneVendor(this.props.match.params.vendorId)
  }

  render() {
    const vendor = this.props.vendor
    const stars = {
      starDimension: '20px',
      starSpacing: '1px',
      rating: 4.5,
      edit: false,
      starRatedColor: 'yellow',
      isHalf: true
    }

    return (
      <div className="vendorProfileContainer">
        <div className="vendorHeader">
          <h1>{vendor.userName}</h1>
          <img src={vendor.profilePic} />
          <p>
            {vendor.firstName} {vendor.lastName}
          </p>
          <h2>{vendor.vendorRating} </h2>
          <h3>
            <ReactStars {...stars} />
          </h3>
          <hr />
          <div className="vendorInfo">
            <h1>Services Offered</h1>
            <ul>
              <li>Hair Consultation</li>
              <li>Hair Extensions</li>
              <li>Fusion Hair Extension Application</li>

              <li>Hair Extension Coloring</li>
              <li>Blow Dry/Out Services</li>
              <li>Styling</li>
            </ul>
          </div>

          <hr />

          <div className="contactInfo">
            <h4>Contact {vendor.userName}</h4>
            <h5> Email {vendor.email}</h5>
            <h6> Phone {vendor.phone}</h6>
          </div>
        </div>

        <div className="vendorWork" />
        <div className="vendorReviews" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  vendor: state.vendors
})

const mapDispatchToProps = dispatch => {
  return {
    getOneVendor: id => dispatch(getOneVendor(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vendor)
