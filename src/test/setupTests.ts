import '@testing-library/jest-dom'
import { server } from 'src/test/server/mock-server'

const spyScrollTo = jest.fn()
const spyMatchMedia = jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}))

beforeAll(() => {
  Object.defineProperty(window, 'scrollTo', { value: spyScrollTo })
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: spyMatchMedia,
  })
  server.listen()
})

afterEach(() => {
  spyScrollTo.mockClear()
  spyMatchMedia.mockClear()
  server.resetHandlers()
})

afterAll(() => server.close())

export { spyScrollTo, spyMatchMedia }
