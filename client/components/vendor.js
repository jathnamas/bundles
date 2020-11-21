import React from 'react'
import {connect} from 'react-redux'
import {getOneVendor} from '../store/vendors'

class Vendor extends React.Component {
  componentDidMount() {
    this.props.getVendor(this.props.match.params.id)
  }

  render() {
    return <div />
  }
}

const mapStateToProps = state => ({
  vendor: state.vendor
})

const mapDispatchToProps = dispatch => ({
  getVendor: id => dispatch(getOneVendor(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Vendor)
