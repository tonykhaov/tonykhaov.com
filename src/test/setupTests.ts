import '@testing-library/jest-dom/extend-expect'
import { server } from 'src/test/server/mock-server'

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
