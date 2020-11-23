import React from 'react'
import {connect} from 'react-redux'
import {getOneVendor} from '../store/vendors'
import ReactStars from 'react-star-ratings'
import ImageCarousel from './imageCarousel'
import {BsPersonPlus, BsBookmark} from 'react-icons/bs'
import {AiFillInstagram, AiOutlineFacebook} from 'react-icons/ai'
import {Button, Card} from 'react-bootstrap'
import faker from 'faker'

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
    const reviewStars = {
      starDimension: '25px',
      starSpacing: '1px',
      rating: 4.7,
      edit: false,
      starRatedColor: 'red',
      isHalf: true
    }

    const reviewStarsTwo = {
      starDimension: '25px',
      starSpacing: '1px',
      rating: 4.6,
      edit: false,
      starRatedColor: 'red',
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
              <li>Lashes</li>
            </ul>
          </div>

          <hr />

          <div className="contactInfo">
            <h4>Contact {vendor.userName}</h4>
            <h5>{vendor.email}</h5>
            <h6>{vendor.phone}</h6>
            <Button size="lg">
              <BsPersonPlus size={32} />
            </Button>
            <Button size="lg">
              <BsBookmark size={32} />
            </Button>
            <Button size="lg">
              <AiFillInstagram size={32} />
            </Button>
            <Button size="lg">
              <AiOutlineFacebook size={32} />
            </Button>
            <div />
          </div>
        </div>

        <div className="vendorWork">
          <ImageCarousel />
          <div className="vendorReviews">
            <h1>Request an Appointment</h1>
            <p> -- Response Time: 45 minutes -- Response Rate: 100%</p>
            <Button size="lg" block>
              Schedule Today!
            </Button>
          </div>
          <div className="vendorReviews2">
            <h1>Upload a Photo</h1>
            <p>-- Show Off Your Look</p>
            <Button size="lg" block>
              Upload Photo
            </Button>
          </div>

          {/* <Button size = 'lg' block>Schedule Now</Button> */}

          {/* <Button  block>Add A Photo</Button> */}

          {/* <Button  block>
                  Leave A Review
                  </Button> */}
        </div>

        <div className="verified">
          <h1>Reviews</h1>
          <br />
          <h2>{faker.internet.userName()}</h2>
          <ReactStars {...reviewStars} />

          <p className="review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
            sed turpis tincidunt id aliquet risus. Quis viverra nibh cras
            pulvinar mattis nunc sed blandit libero. Habitasse platea dictumst
            vestibulum rhoncus est pellentesque elit ullamcorper dignissim.
          </p>
          <br />
          <h2>{faker.internet.userName()}</h2>
          <ReactStars {...reviewStarsTwo} />

          <p className="review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
            sed turpis tincidunt id aliquet risus. Quis viverra nibh cras
            pulvinar mattis nunc sed blandit libero.
          </p>
          <Button>Read More</Button>
        </div>
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
