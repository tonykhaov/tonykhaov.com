import type { MetaFunction, LoaderFunction } from 'remix'

export let loader: LoaderFunction = () => {
  return null
}

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'Homepage',
    description: 'Welcome to my homepage!',
  }
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return <h1>Hello</h1>
}
