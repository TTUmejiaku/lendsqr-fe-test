import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboardLayout/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className=''>
      <h1> Main dashboard</h1>
    </div>
  );
}
