const faker = require('faker')
faker.locale = 'es'

module.exports = [
  (refs) => ({
    model: () => require('./../../models/comment.model'),
    refName: 'comments',
    entities: [
      {
        refName: 'barberPostComment1',
        data: {
          owner: refs.users.serialCommenter._id,
          title: faker.lorem.word(),
          text: faker.lorem.paragraph(),
        },
      },
      {
        refName: 'barberPostComment2',
        data: {
          owner: refs.users.anotherCommenter._id,
          title: faker.lorem.word(),
          text: faker.lorem.paragraph(),
        },
      },
      {
        refName: 'barberDirectComment1',
        data: {
          owner: refs.users.serialCommenter._id,
          title: faker.lorem.word(),
          text: faker.lorem.paragraph(),
        },
      },
      {
        refName: 'salonComment1',
        data: {
          owner: refs.users.serialCommenter._id,
          title: faker.lorem.word(),
          text: faker.lorem.paragraph(),
        },
      },
      {
        refName: 'salonComment2',
        data: {
          owner: refs.users.serialCommenter._id,
          title: faker.lorem.word(),
          text: faker.lorem.paragraph(),
        },
      },
    ],
  }),
]
