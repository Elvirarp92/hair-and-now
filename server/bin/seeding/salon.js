const faker = require('faker')
faker.locale = 'es'

module.exports = [
  () => ({
    model: () => require('./../../models/salon.model'),
    refName: 'salons',
    entities: [
      {
        refName: 'firstBarbershop',
        data: {
          name: faker.company.companyName(),
          type: 'Barbería',
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
          packs: [],
          rating: 8.5,
          socialMediaHandles: {
            facebook: faker.internet.userName(),
            twitter: `@${faker.internet.userName()}`,
          },
          owner: refs.users.firstBarbershopOwner._id,
          posts: [
            {
              owner: refs.users.firstBarbershopOwner._id,
              title: faker.lorem.word(),
              text: faker.lorem.paragraph(),
              comments: [
                {
                  owner: refs.users.serialCommenter._id,
                  title: faker.lorem.word(),
                  text: faker.lorem.paragraph(),
                },
                {
                  owner: refs.users.anotherCommenter._id,
                  title: faker.lorem.word(),
                  text: faker.lorem.paragraph(),
                },
              ],
            },
          ],
          comments: {
            owner: refs.users.serialCommenter._id,
            title: faker.lorem.word(),
            text: faker.lorem.paragraph(),
          },
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
          type: 'Peluquería de señoras',
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
          packs: [],
          rating: 6.8,
          socialMediaHandles: {
            facebook: faker.internet.userName(),
            twitter: `@${faker.internet.userName()}`,
            instagram: `@${faker.internet.userName()}`,
          },
          owner: refs.users.firstSalonOwner._id,
          comments: {
            owner: refs.users.serialCommenter._id,
            title: faker.lorem.word(),
            text: faker.lorem.paragraph(),
          },
          appointments: [refs.appointments.salonAppt1._id],
        },
      },
      {
        refName: 'secondSalon',
        data: {
          name: faker.company.companyName(),
          type: 'Peluquería de señoras',
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
          packs: [
            {
              services: [
                { name: 'Lavado', estimatedTime: 10 },
                { name: 'Corte señora', price: 15, estimatedTime: 30 },
                { name: 'Peinado', price: 16, estimatedTime: 20 },
              ],
              price: 25,
            },
            {
              services: [
                { name: 'Lavado', estimatedTime: 10 },
                { name: 'Tinte', price: 49, estimatedTime: 90 },
                { name: 'Peinado', price: 16, estimatedTime: 20 },
              ],
              price: 49,
            },
            {
              services: [
                { name: 'Lavado', estimatedTime: 10 },
                { name: 'Corte señora', price: 15, estimatedTime: 30 },
                { name: 'Tinte', price: 49, estimatedTime: 90 },
                { name: 'Peinado', price: 16, estimatedTime: 20 },
              ],
              price: 58,
            },
            {
              services: [
                { name: 'Lavado', estimatedTime: 10 },
                { name: 'Mechas', price: 56, estimatedTime: 60 },
                { name: 'Peinado', price: 16, estimatedTime: 20 },
              ],
              price: 56,
            },
            {
              services: [
                { name: 'Lavado', estimatedTime: 10 },
                { name: 'Corte señora', price: 15, estimatedTime: 30 },
                { name: 'Mechas', price: 56, estimatedTime: 60 },
                { name: 'Peinado', price: 16, estimatedTime: 20 },
              ],
              price: 65,
            },
          ],
          rating: 6.8,
          socialMediaHandles: {
            facebook: faker.internet.userName(),
            twitter: `@${faker.internet.userName()}`,
            instagram: `@${faker.internet.userName()}`,
          },
          owner: refs.users.secondSalonOwner._id,
          comments: {
            owner: refs.users.serialCommenter._id,
            title: faker.lorem.word(),
            text: faker.lorem.paragraph(),
          },
          appointments: [refs.appointments.salonAppt2._id],
        },
      },
    ],
  }),
]
