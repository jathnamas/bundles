'use strict'
const db = require('../server/db')
const {User, Vendor} = require('../server/db/models')
const faker = require('faker')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      paymentInfo: faker.finance.creditCardNumber(),
      profilePic: faker.image.avatar(),
      userRating: 4.5
    }),
    User.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      paymentInfo: faker.finance.creditCardNumber(),
      profilePic: faker.image.avatar(),
      userRating: 4.7
    }),
    User.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      paymentInfo: faker.finance.creditCardNumber(),
      profilePic: faker.image.avatar(),
      userRating: 4.9
    }),
    User.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      paymentInfo: faker.finance.creditCardNumber(),
      profilePic: faker.image.avatar(),
      userRating: 3.9
    }),
    User.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      paymentInfo: faker.finance.creditCardNumber(),
      profilePic: faker.image.avatar(),
      userRating: 4.2
    }),
    User.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      paymentInfo: faker.finance.creditCardNumber(),
      profilePic: faker.image.avatar(),
      userRating: 4.9
    })
  ])

  const vendors = await Promise.all([
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.059043,
      lon: -87.947405,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$$$$',
      vendorRating: 4.5,
      vendorType: 'Makeup'
    }),
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.077899,
      lon: -87.946316,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$$$',
      vendorRating: 4.7,
      vendorType: 'Hair Stylist'
    }),
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.018882,
      lon: -87.93569,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$$$$',
      vendorRating: 4.9,
      vendorType: 'Hair Stylist'
    }),
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.049562,
      lon: -87.964513,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$$',
      vendorRating: 3.9,
      vendorType: 'Loctician'
    }),
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.038787,
      lon: -87.939143,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$$$',
      vendorRating: 4.2,
      vendorType: 'Hair Braiding'
    }),
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.019173,
      lon: -87.954551,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$$',
      vendorRating: 4.2,
      vendorType: 'Aesthetician'
    }),
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.014511,
      lon: -87.927986,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$$',
      vendorRating: 4.7,
      vendorType: 'Hair Braiding'
    }),
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 42.999504,
      lon: -87.920092,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$$$',
      vendorRating: 3.9,
      vendorType: 'Makeup'
    }),
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.068192,
      lon: -87.907405,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$',
      vendorRating: 4.0,
      vendorType: 'Hair Stylist'
    }),
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.047138,
      lon: -87.903965,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$$$$',
      vendorRating: 4.8,
      vendorType: 'Hair Braiding'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${vendors.length} vendors`)
  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed
