import { DashboardPage } from "@/pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboardLayout/dashboard/")({
  component: DashboardPage,
});
