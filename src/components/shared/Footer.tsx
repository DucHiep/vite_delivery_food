import logo from '../../assets/images/res-logo.png'
const Footer = () => {
  return (
    <footer className='pt-12 pb-7 bg-pink1'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-4 gap-4'>
          <div className='text-left'>
            <img className='w-1/5 object-contain' src={logo} alt='logo' />
            <h5 className='font-semibold text-base mb-3.5'>Tasty Treat</h5>
            <p className='text-sm leading-7'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur accusamus
            </p>
          </div>
          <div>
            <h5 className='text-lg text-black1 font-semibold mb-2'>Delivery Time</h5>
            <div className='text-left my-2 pr-4'>
              <span className='font-semibold text-base text-black1'>Sunday - Thursday</span>
              <p className='text-black1 mt-0 mb-4'>10:00am - 11:00pm</p>
            </div>
            <div className='text-left my-2 pr-4'>
              <span className='font-semibold text-base text-black1'>Friday - Saturday</span>
              <p className='text-black1 mt-0 mb-4'>Off day</p>
            </div>
          </div>
          <div>
            <h5 className='text-lg text-black1 font-semibold mb-2'>Contact</h5>
            <div className='text-left my-2 pr-4'>
              <p className='text-black1 mt-0 mb-4'>Location: ZindaBazar, Sylhet-3100, Bangladesh</p>
            </div>
            <div className='text-left my-2 pr-4'>
              <span className='font-semibold text-base text-black1'>Phone: 0171234567</span>
            </div>
            <div className='text-left my-2 pr-4'>
              <span className='font-semibold text-base text-black1'>Email: example@gmail.com</span>
            </div>
          </div>
          <div>
            <h5 className='text-base font-semibold text-black1 mb-2'>Newsletter</h5>
            <p className='mt-0 mb-4'>Subscribe our newsletter</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
