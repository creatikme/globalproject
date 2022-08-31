
import Navbar from './header'
import Footer from './footer'
import Meta from './meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  )
}                                    