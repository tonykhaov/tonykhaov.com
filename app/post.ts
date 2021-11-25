import path from 'path'
import fs from 'fs/promises'

type Post = {
  title: string
  description: string
  slug: string
}

async function getPosts() {
  const postPath = path.join(__dirname, '..', '..', 'app', 'routes', 'posts')
  const posts = await fs.readdir(postPath)
  const slugs = posts.map((post) => {
    const [slug] = post.split('.')
    return slug
  })
  return slugs
}

export { getPosts }
export type { Post }
