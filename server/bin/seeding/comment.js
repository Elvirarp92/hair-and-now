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
          postedIn: refs.posts.barberPost._id,
        },
      },
      {
        refName: 'barberPostComment2',
        data: {
          owner: refs.users.anotherCommenter._id,
          title: faker.lorem.word(),
          text: faker.lorem.paragraph(),
          postedIn: refs.posts.barberPost._id,
        },
      },
      {
        refName: 'barberDirectComment1',
        data: {
          owner: refs.users.serialCommenter._id,
          title: faker.lorem.word(),
          text: faker.lorem.paragraph(),
          postedIn: refs.salons.firstBarbershop._id
        },
      },
      {
        refName: 'salonComment1',
        data: {
          owner: refs.users.serialCommenter._id,
          title: faker.lorem.word(),
          text: faker.lorem.paragraph(),
          postedIn: refs.salons.firstSalon._id
        },
      },
      {
        refName: 'salonComment2',
        data: {
          owner: refs.users.serialCommenter._id,
          title: faker.lorem.word(),
          text: faker.lorem.paragraph(),
          postedIn: refs.salons.secondSalon._id
        },
      },
    ],
  }),
]
