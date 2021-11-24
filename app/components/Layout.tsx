import { Footer, Header } from '~/components'

function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div>
      <Header />
      <div>
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
