import { Sidebar, TopNav } from "@/components";
import { Outlet } from "@tanstack/react-router";
import { ColumnFiltersState } from "@tanstack/react-table";
import { useState } from "react";

declare module "@tanstack/react-table" {
  interface TableMeta<TData> {
    setGlobalFilterValue?: React.Dispatch<React.SetStateAction<string>>;
    rerender: React.DispatchWithoutAction;
    usersData: TData[];
    setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>;
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
        <section className='dashboard__content '>
          <Outlet />
        </section>
      </main>
    </div>
  );
}
