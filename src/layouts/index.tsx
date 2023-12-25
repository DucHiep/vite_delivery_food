import { Header } from '~/components'
import { Outlet } from 'react-router-dom'
import Footer from '~/components/shared/Footer.tsx'
const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout
