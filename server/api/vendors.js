const router = require('express').Router()
const {Vendor} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const vendors = await Vendor.findAll({
      attributes: {exclude: ['bankInfo', 'googleId', 'createdAt', 'updatedAt']}
    })
    res.json(vendors)
  } catch (err) {
    next(err)
  }
})

router.get('/:vendorId', async (req, res, next) => {
  try {
    const vendor = await Vendor.findOne({
      where: {
        id: req.params.vendorId
      },
      attributes: {exclude: ['bankInfo', 'googleId', 'createdAt', 'updatedAt']}
    })

    res.json(vendor)
  } catch (err) {
    next(err)
  }
})
