import '@testing-library/jest-dom/extend-expect'
import { server } from 'src/test/server/mock-server'

const spyScrollTo = jest.fn()

beforeAll(() => {
  Object.defineProperty(global.window, 'scrollTo', { value: spyScrollTo })
  server.listen()
})

afterEach(() => {
  spyScrollTo.mockClear()
  server.resetHandlers()
})

afterAll(() => server.close())
