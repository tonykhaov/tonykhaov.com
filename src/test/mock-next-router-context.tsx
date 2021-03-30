import { RouterContext } from 'next/dist/next-server/lib/router-context'

const nextRouterConfig = {
  isLocaleDomain: true,
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
  isReady: true,
  isPreview: false,
}

const NextRouterContext: React.FC = ({ children }) => {
  return <RouterContext.Provider value={nextRouterConfig}>{children}</RouterContext.Provider>
}

export { nextRouterConfig }
export default NextRouterContext
