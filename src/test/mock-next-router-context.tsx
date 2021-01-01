import { RouterContext } from 'next/dist/next-server/lib/router-context'

const routerMock = {
  basePath: '',
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  push: jest.fn().mockResolvedValue(true),
  replace: jest.fn().mockResolvedValue(true),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
}

const NextRouterContext: React.FC = ({ children }) => {
  return <RouterContext.Provider value={routerMock}>{children}</RouterContext.Provider>
}

export default NextRouterContext
