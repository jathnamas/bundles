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
      userName: 'c.doll__',
      firstName: 'Natia',
      lastName: 'Monet',
      email: 'c.doll@email.com',
      phone: faker.phone.phoneNumberFormat(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.059043,
      lon: -87.947405,
      bankInfo: faker.finance.routingNumber(),
      profilePic:
        'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-0/c0.0.509.509a/s552x414/120353195_10157234552631631_5257142512412332181_n.jpg?_nc_cat=106&ccb=2&_nc_sid=da31f3&_nc_ohc=DHeXFJ-mJfYAX9fIuu6&_nc_ht=scontent-ort2-1.xx&_nc_tp=28&oh=61117ffa1ededf5fc939a038f635a125&oe=5FE04764',
      vendorAveragePrice: '$$$$',
      vendorRating: 4.5,
      vendorType: 'Makeup'
    }),
    Vendor.create({
      userName: 'samantha.Naomi',
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumberFormat(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.077899,
      lon: -87.946316,
      bankInfo: faker.finance.routingNumber(),
      profilePic:
        'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/120896487_10159083103728641_8980964537173004243_n.jpg?_nc_cat=107&ccb=2&_nc_sid=8bfeb9&_nc_ohc=c5uyEOT3zg0AX9tj95u&_nc_ht=scontent-ort2-1.xx&oh=c72b50451ca16b0a75d4de896a6047d1&oe=5FDF143D',
      vendorAveragePrice: '$$$',
      vendorRating: 4.7,
      vendorType: 'Hair Stylist'
    }),
    Vendor.create({
      userName: 'rianAshlei',
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumberFormat(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.018882,
      lon: -87.93569,
      bankInfo: faker.finance.routingNumber(),
      profilePic:
        'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/80350082_3630821696958258_4610882679154409472_o.jpg?_nc_cat=107&ccb=2&_nc_sid=84a396&_nc_ohc=5ejSQrboMDYAX-iqNnt&_nc_ht=scontent-ort2-1.xx&oh=d7aaff27842796ae69a76f3778edd622&oe=5FE1EA15',
      vendorAveragePrice: '$$$$',
      vendorRating: 4.9,
      vendorType: 'Hair Stylist'
    }),
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumberFormat(),
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
      phone: faker.phone.phoneNumberFormat(),
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
      phone: faker.phone.phoneNumberFormat(),
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
      phone: faker.phone.phoneNumberFormat(),
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
      phone: faker.phone.phoneNumberFormat(),
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
      phone: faker.phone.phoneNumberFormat(),
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
      phone: faker.phone.phoneNumberFormat(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.047138,
      lon: -87.903965,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$$$$',
      vendorRating: 4.8,
      vendorType: 'Hair Braiding'
    }),

    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumberFormat(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.0472952,
      lon: -87.950713,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$$$$',
      vendorRating: 4.8,
      vendorType: 'Hair Braiding'
    }),
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumberFormat(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.051685,
      lon: -87.915694,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$$$$',
      vendorRating: 4.8,
      vendorType: 'Hair Braiding'
    }),
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumberFormat(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.036631,
      lon: -87.903591,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$$$$',
      vendorRating: 4.8,
      vendorType: 'Hair Braiding'
    }),
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumberFormat(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.027596,
      lon: -87.91535,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$$$$',
      vendorRating: 4.8,
      vendorType: 'Hair Braiding'
    }),
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumberFormat(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.061594,
      lon: -87.889258,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$$$$',
      vendorRating: 4.8,
      vendorType: 'Hair Braiding'
    }),
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumberFormat(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.014791,
      lon: -87.912028,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$$$$',
      vendorRating: 4.8,
      vendorType: 'Hair Braiding'
    }),
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumberFormat(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.009895,
      lon: -87.936833,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$$$$',
      vendorRating: 4.8,
      vendorType: 'Hair Braiding'
    }),
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumberFormat(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.02934,
      lon: -87.961124,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$$$$',
      vendorRating: 4.8,
      vendorType: 'Hair Braiding'
    }),
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumberFormat(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.06508,
      lon: -87.95305,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$$$$',
      vendorRating: 4.8,
      vendorType: 'Hair Braiding'
    }),
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumberFormat(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.054921,
      lon: -87.948077,
      bankInfo: faker.finance.routingNumber(),
      profilePic: faker.image.avatar(),
      vendorAveragePrice: '$$$$',
      vendorRating: 4.8,
      vendorType: 'Hair Braiding'
    }),
    Vendor.create({
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumberFormat(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      lat: 43.042,
      lon: -87.953055,
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
