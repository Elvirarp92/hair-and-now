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
          packs: [
            {
              services: [
                refs.services.lavado._id,
                refs.services.corteTendenciaCab._id,
                refs.services.peinadoCab._id,
              ],
              price: 19.5,
            },
            {
              services: [
                refs.services.lavado._id,
                refs.services.corteClasicoCab._id,
                refs.services.peinadoCab._id,
              ],
              price: 17.5,
            },
            {
              services: [refs.services.afeitadoNavaja._id],
              price: 19,
            },
            {
              services: [refs.services.arregloBarba._id],
              price: 15.5,
            },
            {
              services: [
                refs.services.lavado._id,
                refs.services.corteClasicoCab._id,
                refs.services.peinadoCab._id,
                refs.services.arregloBarba._id,
              ],
              price: 34.5,
            },
            {
              services: [
                refs.services.lavado._id,
                refs.services.corteClasicoCab._id,
                refs.services.peinadoCab._id,
                refs.services.afeitadoNavaja._id,
              ],
              price: 39.5,
            },
          ],
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
          packs: [
            {
              services: [
                refs.services.lavado._id,
                refs.services.corteSra._id,
                refs.services.peinadoSra._id,
              ],
              price: 25,
            },
            {
              services: [
                refs.services.lavado._id,
                refs.services.corteSra._id,
                refs.services.recogido._id,
              ],
              price: 35,
            },
            {
              services: [
                refs.services.lavado._id,
                refs.services.tinteSra._id,
                refs.services.peinadoSra._id,
              ],
              price: 49,
            },
            {
              services: [
                refs.services.lavado._id,
                refs.services.corteSra._id,
                refs.services.tinteSra._id,
                refs.services.peinadoSra._id,
              ],
              price: 58,
            },
            {
              services: [
                refs.services.lavado._id,
                refs.services.mechasSra._id,
                refs.services.peinadoSra._id,
              ],
              price: 56,
            },
            {
              services: [
                refs.services.lavado._id,
                refs.services.corteSra._id,
                refs.services.mechasSra._id,
                refs.services.peinadoSra._id,
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
                refs.services.lavado._id,
                refs.services.corteSra._id,
                refs.services.peinadoSra._id,
              ],
              price: 25,
            },
            {
              services: [
                refs.services.lavado._id,
                refs.services.tinteSra._id,
                refs.services.peinadoSra._id,
              ],
              price: 49,
            },
            {
              services: [
                refs.services.lavado._id,
                refs.services.corteSra._id,
                refs.services.tinteSra._id,
                refs.services.peinadoSra._id,
              ],
              price: 58,
            },
            {
              services: [
                refs.services.lavado._id,
                refs.services.mechasSra._id,
                refs.services.peinadoSra._id,
              ],
              price: 56,
            },
            {
              services: [
                refs.services.lavado._id,
                refs.services.corteSra._id,
                refs.services.mechasSra._id,
                refs.services.peinadoSra._id,
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
