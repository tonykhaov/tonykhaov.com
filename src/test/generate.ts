import faker from 'faker'
import { Post } from 'src/models/post'

function buildPost(): Post {
  return {
    title: faker.lorem.words(),
    content: faker.lorem.paragraph(),
    id: String(faker.random.uuid()),
  }
}

export { buildPost }
