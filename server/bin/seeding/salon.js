const faker = require('faker')
faker.locale = 'es'

module.exports = [
  (refs) => ({
    model: () => require('./../../models/salon.model'),
    refName: 'salons',
    entities: [
      {
        refName: 'firstBarbershop',
        data: {
          name: faker.company.companyName(),
          type: 'barbería',
          address: {
            street: 'Avenida José Laguillo',
            number: 27,
            zipcode: 41003,
            town: 'Sevilla',
            province: 'Sevilla',
          },
          schedule: {
            monday: {
              openingDay: true,
              openingTime: '09:00',
              closingTime: '21:00',
            },
            tuesday: {
              openingDay: true,
              openingTime: '09:00',
              closingTime: '21:00',
            },
            wednesday: {
              openingDay: true,
              openingTime: '09:00',
              closingTime: '21:00',
            },
            thursday: {
              openingDay: true,
              openingTime: '09:00',
              closingTime: '21:00',
            },
            friday: {
              openingDay: true,
              openingTime: '09:00',
              closingTime: '18:00',
            },
            saturday: {
              openingDay: false,
            },
            sunday: {
              openingDay: false,
            },
          },
          rating: 8.5,
          socialMediaHandles: {
            facebook: faker.internet.userName(),
            twitter: `@${faker.internet.userName()}`,
          },
          owner: refs.users.firstBarbershopOwner._id,
          posts: [refs.posts.barberPost._id],
          appointments: [
            refs.appointments.barberAppt1._id,
            refs.appointments.barberAppt2._id,
          ],
        },
      },
      {
        refName: 'firstSalon',
        data: {
          name: faker.company.companyName(),
          type: 'peluquería de señoras',
          address: {
            street: 'Calle Urquiza',
            number: 3,
            zipcode: 41003,
            town: 'Sevilla',
            province: 'Sevilla',
            complements: 'Local 1',
          },
          schedule: {
            monday: {
              openingDay: true,
              openingTime: '09:00',
              closingTime: '21:00',
            },
            tuesday: {
              openingDay: true,
              openingTime: '09:00',
              closingTime: '21:00',
            },
            wednesday: {
              openingDay: true,
              openingTime: '09:00',
              closingTime: '21:00',
            },
            thursday: {
              openingDay: true,
              openingTime: '09:00',
              closingTime: '21:00',
            },
            friday: {
              openingDay: true,
              openingTime: '09:00',
              closingTime: '21:00',
            },
            saturday: {
              openingDay: true,
              openingTime: '09:00',
              closingTime: '12:00',
            },
            sunday: {
              openingDay: false,
            },
          },
          rating: 6.8,
          socialMediaHandles: {
            facebook: faker.internet.userName(),
            twitter: `@${faker.internet.userName()}`,
            instagram: `@${faker.internet.userName()}`,
          },
          owner: refs.users.firstSalonOwner._id,
          appointments: [refs.appointments.salonAppt1._id],
        },
      },
      {
        refName: 'secondSalon',
        data: {
          name: faker.company.companyName(),
          type: 'peluquería de señoras',
          address: {
            street: 'Calle Pérez Hervás',
            number: 7,
            zipcode: 41003,
            town: 'Sevilla',
            province: 'Sevilla',
          },
          schedule: {
            monday: {
              openingDay: true,
              openingTime: '09:00',
              closingTime: '21:00',
            },
            tuesday: {
              openingDay: true,
              openingTime: '09:00',
              closingTime: '21:00',
            },
            wednesday: {
              openingDay: true,
              openingTime: '09:00',
              closingTime: '21:00',
            },
            thursday: {
              openingDay: true,
              openingTime: '09:00',
              closingTime: '21:00',
            },
            friday: {
              openingDay: true,
              openingTime: '09:00',
              closingTime: '21:00',
            },
            saturday: {
              openingDay: false,
            },
            sunday: {
              openingDay: false,
            },
          },
          rating: 6.8,
          socialMediaHandles: {
            facebook: faker.internet.userName(),
            twitter: `@${faker.internet.userName()}`,
            instagram: `@${faker.internet.userName()}`,
          },
          owner: refs.users.secondSalonOwner._id,
          appointments: [refs.appointments.salonAppt2._id],
        },
      },
    ],
  }),
]
