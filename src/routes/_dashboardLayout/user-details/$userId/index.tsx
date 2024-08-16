import { NotFound } from "@/components";
import { FileRoute } from "@/constants";
import { getUser } from "@/lib/utils";
import { UserDetailsPage } from "@/pages";
import {
  createFileRoute,
  ErrorComponent,
  notFound,
} from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboardLayout/user-details/$userId/")(
  {
    loader: async ({ params }) => {
      const userData = await getUser(params.userId);
      if (!userData) throw notFound();
      return userData;
    },
    component: () => <UserDetailsPage />,
    errorComponent: ({ error }) => <ErrorComponent error={error} />,
    notFoundComponent: () => {
      return (
        <NotFound
          buttonLabel='Back to users'
          href={FileRoute.Users}
          label='User not found!'
        />
      );
    },
  }
);
