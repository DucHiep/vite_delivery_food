import { Header } from '~/components'
import { Outlet } from 'react-router-dom'
const RootLayout = () => {
  return (
    <>
      <Header />
      <h2>Đây là trang layout</h2>
      <Outlet />
    </>
  )
}

export default RootLayout
