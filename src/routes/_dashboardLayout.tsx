import { TopNav } from "@/components";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboardLayout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <TopNav />
      <Outlet />
    </div>
  );
}
