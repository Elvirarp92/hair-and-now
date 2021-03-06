const faker = require('faker')
faker.locale = 'es'

module.exports = [
  (refs) => ({
    model: () => require('./../../models/post.model'),
    refName: 'posts',
    entities: [
      {
        refName: 'barberPost',
        data: {
          owner: refs.users.firstBarbershopOwner._id,
          title: faker.lorem.word(),
          text: faker.lorem.paragraph(),
        },
      },
    ],
  }),
]
