import { Sidebar, TopNav } from "@/components";
import { Outlet } from "@tanstack/react-router";
import { useState } from "react";

declare module "@tanstack/react-table" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TableMeta<TData> {
    isDropdownOpen?: boolean;
    setIsDropdownOpen?: (isOpen: boolean) => void;
    closeDropdown?: () => void;
    openDropdown?: () => void;
    toggleDropdown?: () => void;
    isRerender?: boolean;
    handleRerender?: () => void;
    hasViewPermission?: boolean;
    hasUpdatePermission?: boolean;
  }
}

export default function DashboardLayout() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='dashboard'>
      <TopNav showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <main className='dashboard__container '>
        <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        <section className='dashboard__content'>
          <Outlet />
        </section>
      </main>
    </div>
  );
}
