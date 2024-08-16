import { useLoaderData } from "@tanstack/react-router";
import {
  UserDetailsTopNav,
  UserInfoHeader,
  UserInfoTabsContent,
} from "./components";
import { CustomTabsProvider } from "@/context/tabs-context";

export default function UserDetailsPage() {
  const userData = useLoaderData({
    from: "/_dashboardLayout/user-details/$userId/",
  });

  return (
    <div>
      <UserDetailsTopNav />
      <CustomTabsProvider defaultValue='General Details'>
        <UserInfoHeader userData={userData} />
        <UserInfoTabsContent />
      </CustomTabsProvider>
    </div>
  );
}
