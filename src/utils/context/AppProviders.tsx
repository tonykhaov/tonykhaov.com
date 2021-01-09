import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

const AppProviders: React.FC = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default AppProviders
