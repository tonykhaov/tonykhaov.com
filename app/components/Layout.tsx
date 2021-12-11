import { Footer, Header } from '~/components'
import { Container } from '~/components/ui'

function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}

export default Layout
