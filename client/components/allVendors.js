import React from 'react'
import {connect} from 'react-redux'
import {fetchAllVendors} from '../store/vendors'
import Map from './map'

class AllVendors extends React.Component {
  componentDidMount() {
    this.props.fetchAllVendors()
  }

  render() {
    return (
      <div>
        <Map vendors={this.props.vendors} />
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
