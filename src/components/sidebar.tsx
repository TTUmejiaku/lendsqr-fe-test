import {
  arrowDownLightIcon,
  dashboardIcon,
  switchOrganizationIcon,
} from "@/assets/svgs";
import { sidebarData, SidebarData } from "@/mock-data";
import { NavLink } from "./navlink";
import { FileRoute } from "@/constants";

type SidebarProps = {
  showSidebar: boolean;
  toggleSidebar: () => void;
};

export default function Sidebar({ showSidebar, toggleSidebar }: SidebarProps) {
  return (
    <div className={`sidebar ${showSidebar ? "show-nav" : ""}`}>
      <div className='sidebar__switch-org'>
        <img src={switchOrganizationIcon} alt='' />
        <p>Switch Organization</p>
        <img src={arrowDownLightIcon} alt='' className='arrow-down' />
      </div>
      <NavLink
        icon={dashboardIcon}
        name='Dashboard'
        linkClasses='mt-52'
        url={FileRoute.Dashboard}
        toggleSidebar={toggleSidebar}
      />

      {sidebarData.map((item: SidebarData) => {
        return (
          <div key={item.title} className='sidebar__link-wrapper'>
            <h3 className='sidebar__link-title'>{item.title}</h3>
            {item.links.map((link, i: number) => {
              const { icon, name, url } = link;
              return (
                <NavLink
                  key={name + i}
                  icon={icon}
                  name={name}
                  url={url}
                  toggleSidebar={toggleSidebar}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
