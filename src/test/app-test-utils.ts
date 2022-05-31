import { render as rtlRender } from '@testing-library/react'
import type { RenderOptions, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { UserEvent } from '@testing-library/user-event/dist/types/setup'
import type { Options as UserEventOptions } from '@testing-library/user-event/dist/types/options'

type CustomRenderOptions = {
  render: Omit<RenderOptions, 'queries'>
  userEvent: UserEventOptions
}

type CustomRenderResult = {
  user: UserEvent
} & RenderResult

function customRender(
  ui: React.ReactElement,
  options?: CustomRenderOptions,
): CustomRenderResult {
  const renderResult = rtlRender(ui, {
    // set this wrapper when I need to wrap my app with providers
    // wrapper: AppProviders,
    ...options?.render,
  })
  return {
    ...renderResult,
    user: userEvent.setup(options?.userEvent),
  }
}

export * from '@testing-library/react'
export { customRender as render }
