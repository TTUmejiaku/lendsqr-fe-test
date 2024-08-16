import { useLoaderData } from "@tanstack/react-router";
import { UserDetailsTopNav, UserInfoHeader } from "./components";

export default function UserDetailsPage() {
  const userData = useLoaderData({
    from: "/_dashboardLayout/user-details/$userId/",
  });

  return (
    <div>
      <UserDetailsTopNav />
      <UserInfoHeader userData={userData} />
    </div>
  );
}
