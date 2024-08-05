import { lendSqrLogo, bellIcon, arrowDown, searchIcon } from "@/assets/svgs";
import { avatar } from "@/assets/pngs";
import { TopNavContainer } from "./containers";
import { Menu, X } from "lucide-react";

type TopNavProps = {
  showSidebar?: boolean;
  toggleSidebar: () => void;
};

export default function TopNav({ toggleSidebar, showSidebar }: TopNavProps) {
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
          <div className='top-nav__username'>
            <p className=''>Adedeji</p>
            <img src={arrowDown} alt='' className='arrow-down' />
          </div>
          <button className={`menu-icon `} onClick={toggleSidebar}>
            {showSidebar ? <X color='#213F7D' /> : <Menu color='#213F7D' />}
          </button>
        </div>
      </TopNavContainer>
    </div>
  );
}
