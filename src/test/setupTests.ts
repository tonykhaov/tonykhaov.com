import '@testing-library/jest-dom'

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
})

afterEach(() => {
  spyScrollTo.mockClear()
  spyMatchMedia.mockClear()
})

export { spyScrollTo, spyMatchMedia }
