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
          packs: [
            refs.packs.barber1tendencia._id,
            refs.packs.barber1clasico._id,
            refs.packs.barber1afeitado._id,
            refs.packs.barber1barba._id,
            refs.packs.barber1clasicoybarba._id,
            refs.packs.barber1clasicoyafeitado._id,
          ],
          rating: 8.5,
          socialMediaHandles: {
            facebook: faker.internet.userName(),
            twitter: `@${faker.internet.userName()}`,
          },
          owner: refs.users.firstBarbershopOwner._id,
          posts: [refs.posts.barberPost._id],
          comments: [refs.comments.barberDirectComment1._id],
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
          packs: [
            refs.packs.salon1corteypeinado._id,
            refs.packs.salon1recogido._id,
            refs.packs.salon1tinte._id,
            refs.packs.salon1corteytinte._id,
            refs.packs.salon1mechas._id,
            refs.packs.salon1corteymechas._id,
          ],
          rating: 6.8,
          socialMediaHandles: {
            facebook: faker.internet.userName(),
            twitter: `@${faker.internet.userName()}`,
            instagram: `@${faker.internet.userName()}`,
          },
          owner: refs.users.firstSalonOwner._id,
          comments: [refs.comments.salonComment1._id],
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
          packs: [
            refs.packs.salon2corteypeinado._id,
            refs.packs.salon2recogido._id,
            refs.packs.salon2tinte._id,
            refs.packs.salon2corteytinte._id,
            refs.packs.salon2mechas._id,
            refs.packs.salon2corteymechas._id,
          ],
          rating: 6.8,
          socialMediaHandles: {
            facebook: faker.internet.userName(),
            twitter: `@${faker.internet.userName()}`,
            instagram: `@${faker.internet.userName()}`,
          },
          owner: refs.users.secondSalonOwner._id,
          comments: [refs.comments.salonComment2._id],
          appointments: [refs.appointments.salonAppt2._id],
        },
      },
    ],
  }),
]
