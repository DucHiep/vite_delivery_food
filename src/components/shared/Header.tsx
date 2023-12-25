import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/res-logo.png'

const nav__links = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Foods',
    path: '/foods'
  },
  {
    display: 'Cart',
    path: '/cart'
  },
  {
    display: 'Contact',
    path: '/contact'
  }
]
const Header = () => {
  return (
    <header className='w-full h-[100px] leading-[100px]'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='text-center'>
            <img className='w-2/5 object-contain' src={logo} alt='logo' />
            <h5>Tasty Treat</h5>
          </div>

          {/* ======= menu ======= */}
          <div className='navigation'>
            <div className='header_menu'>
              {nav__links.map((item, index) => (
                <NavLink to={item.path} key={index} className={(navClass) => (navClass.isActive ? 'active__menu' : '')}>
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className='header_right'>
            <span className='cart__icon'>
              <i className='ri-shopping-basket-line'></i>
              <span className='cart__badge'>0</span>
            </span>

            <span className='user'>
              <Link to='/login'>
                <i className='ri-user-line'></i>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
