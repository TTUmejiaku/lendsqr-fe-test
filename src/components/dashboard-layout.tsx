import { Sidebar, TopNav } from "@/components";
import { Outlet } from "@tanstack/react-router";
import { useState } from "react";

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
        <section className='dashboard__content '>
          <Outlet />
        </section>
      </main>
    </div>
  );
}
