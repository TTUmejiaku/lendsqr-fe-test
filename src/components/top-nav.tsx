import { lendSqrLogo, bellIcon, arrowDown, searchIcon } from "@/assets/svgs";
import { avatar } from "@/assets/pngs";
import { TopNavContainer } from "./containers";

export default function TopNav() {
  return (
    <div className='top-nav '>
      <TopNavContainer>
        <img src={lendSqrLogo} alt='Lendsqr logo' className='top-nav__logo' />
        <div className='top-nav__search'>
          <input type='text' placeholder='Search for anything' />
          <button className='search-btn'>
            <img src={searchIcon} alt='' />
          </button>
        </div>
        <div className='top-nav__user'>
          <a href='#'>Docs</a>
          <img src={bellIcon} alt='' className='notification' />
          <img src={avatar} alt='' className='avatar' />
          <p className='username'>Adedeji</p>
          <img src={arrowDown} alt='' className='arrow-down' />
        </div>
      </TopNavContainer>
    </div>
  );
}
