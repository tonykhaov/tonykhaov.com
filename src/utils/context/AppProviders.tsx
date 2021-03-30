import { ThemeProvider } from 'next-themes'

const AppProviders: React.FC = ({ children }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export default AppProviders
