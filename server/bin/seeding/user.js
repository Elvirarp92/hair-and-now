const faker = require('faker')
faker.locale = 'es'

module.exports = [
  (refs) => ({
    model: () => require('./../../models/user.model'),
    refName: 'users',
    entities: [
      {
        refName: 'firstBarbershopOwner',
        data: {
          username: faker.internet.userName(),
          email: faker.internet.email(),
          status: 'active',
          role: 'professional',
        },
      },
      {
        refName: 'firstSalonOwner',
        data: {
          username: faker.internet.userName(),
          email: faker.internet.email(),
          status: 'active',
          role: 'professional',
        },
      },
      {
        refName: 'serialCommenter',
        data: {
          username: faker.internet.userName(),
          email: faker.internet.email(),
          status: 'active',
          role: 'client',
          appointments: [refs.appointments.barberAppt1._id],
        },
      },
      {
        refName: 'anotherCommenter',
        data: {
          username: faker.internet.userName(),
          email: faker.internet.email(),
          status: 'active',
          role: 'client',
          appointments: [refs.appointments.salonAppt1._id],
        },
      },
      {
        refName: 'appointmentHaver',
        data: {
          username: faker.internet.userName(),
          email: faker.internet.email(),
          status: 'active',
          role: 'client',
          appointments: [
            refs.appointments.salonAppt2._id,
            refs.appointments.barberAppt2._id,
          ],
        },
      },
      {
        refName: 'secondSalonOwner',
        data: {
          username: faker.internet.userName(),
          email: faker.internet.email(),
          status: 'active',
          role: 'professional',
        },
      },
    ],
  }),
]
