import { Link, NavLink } from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5'
import { FiUser } from 'react-icons/fi'
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
    <header className='w-full h-25 leading-25'>
      <div className='container mx-auto'>
        <div className='flex-center'>
          <div className='flex-center flex-col'>
            <img className='w-2/5 object-contain' src={logo} alt='logo' />
            <h5 className='font-semibold text-base text-black1'>Tasty Treat</h5>
          </div>

          {/* ======= menu ======= */}
          <div className='navigation'>
            <div className='flex items-center gap-5'>
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    `font-semibold hover:text-red1 text-base ${navClass.isActive ? 'text-red1' : ''}`
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className='flex flex-row gap-4 items-center'>
            <span className='flex items-center flex-row relative text-2xl'>
              <IoCartOutline />
              <span className='absolute -top-[5px] -right-[10px] text-white bg-red1 w-[15px] h-[15px] rounded-full text-sm flex items-center justify-center'>
                0
              </span>
            </span>

            <span className='text-2xl'>
              <Link to='/login'>
                <FiUser />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
