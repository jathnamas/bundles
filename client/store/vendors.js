import axios from 'axios'

const ALL_VENDORS = 'ALL_VENDORS'
const GET_VENDOR = 'GET_VENDOR'

export const getVendors = vendors => ({
  type: ALL_VENDORS,
  vendors
})

export const getSingleVendor = vendor => ({
  type: GET_VENDOR,
  vendor
})

export const fetchAllVendors = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/vendors')
      dispatch(getVendors(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const getOneVendor = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/vendors/${id}`)
      dispatch(getSingleVendor(data))
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState = []

const vendorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_VENDORS:
      return action.vendors
    case GET_VENDOR:
      return action.vendor
    default:
      return state
  }
}

export default vendorReducer
