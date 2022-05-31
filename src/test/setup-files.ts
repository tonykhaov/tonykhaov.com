import '@testing-library/jest-dom'
import 'whatwg-fetch'
import { server } from '@test/mocks/server'

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }))

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
