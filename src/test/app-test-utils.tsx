import { render as rtlRender, RenderOptions, RenderResult } from '@testing-library/react'
import AppProviders from 'src/utils/context/AppProviders'
import NextRouterContext from './mock-next-router-context'

const TestingAppProviders: React.FC = ({ children }) => {
  return (
    <AppProviders>
      <NextRouterContext>{children}</NextRouterContext>
    </AppProviders>
  )
}

function render(ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult {
  return rtlRender(ui, { wrapper: TestingAppProviders, ...options })
}

export * from '@testing-library/react'
export { render }
