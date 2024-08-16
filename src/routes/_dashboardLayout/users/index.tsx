import { fetchUsers } from "@/lib/utils";
import { UsersPage } from "@/pages";
import { createFileRoute, ErrorComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboardLayout/users/")({
  loader: () => fetchUsers(),
  component: () => <UsersPage />,
  errorComponent: ({ error }) => <ErrorComponent error={error} />,
});
