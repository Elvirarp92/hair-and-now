const faker = require('faker')
faker.locale = 'es'

module.exports = [
  (refs) => ({
    model: () => require('./../../models/appointment.model'),
    refName: 'appointments',
    entities: [
      {
        refName: 'barberAppt1',
        data: {
          services: [
            refs.services.lavado._id,
            refs.services.corteClasicoCab._id,
            refs.services.arregloBarba._id,
          ],
          date: [faker.date.recent()],
          validated: false,
        },
      },
      {
        refName: 'barberAppt2',
        data: {
          services: [
            refs.services.lavado._id,
            refs.services.corteTendenciaCab._id,
          ],
          date: [faker.date.recent(), faker.date.recent(), faker.date.recent()],
          validated: false,
        },
      },
      {
        refName: 'salonAppt1',
        data: {
          services: [
            refs.services.lavado._id,
            refs.services.corteSra._id,
            refs.services.mechasSra._id,
          ],
          date: [faker.date.recent(), faker.date.recent()],
          validated: false,
        },
      },
      {
        refName: 'salonAppt2',
        data: {
          services: [
            refs.services.lavado._id,
            refs.services.recogido._id,
            refs.services.tinteSra._id,
          ],
          date: [faker.date.recent()],
          validated: false,
        },
      },
    ],
  }),
]
