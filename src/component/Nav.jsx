import logo from '../assets/logo.png'
import Facebook from '../assets/Facebook.svg'
import Twitter from '../assets/Twitter.svg'
import Youtube from '../assets/Youtube.svg'
import Telegram from '../assets/Telegram.svg'

function Nav() {
  return (
    <nav className='flex p-2 pb-4 w-full gap-10 bg-[#0094CA] justify-between'>
      <div>
        <img loading='lazy' src={logo} alt="" />
      </div>
      <div className='flex items-center  gap-12'>
        <a href="">PORTADA</a>
        <a href="">INSTITUCION</a>
        <a href="">FORMACION</a>
        <a href="">INTERNACIONALIZACION</a>
      </div>
      <div className='flex flex-col justify-center gap-2 items-center'>
        <input type="search" placeholder='buscar...' name="" id="" />
        <div className='flex items-center gap-2'>
          <a href="">
            <img loading='lazy' src={Facebook} alt="" />
          </a>
          <a href="">
            <img loading='lazy' src={Twitter} alt="" />
          </a>
          <a href="">
            <img loading='lazy' src={Youtube} alt="" />
          </a>
          <a href="">
            <img loading='lazy' src={Telegram} alt="" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
