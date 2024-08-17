import { TabsContent, TabsTrigger } from "@/components/primitives/pr-tabs";
import { TAB_DATA } from "@/constants";
import { CustomTabsContent, CustomTabsList } from "@/context/tabs-context";
import { UserInfo } from "@/types";
import UserDetailsSection from "./user-details-section";

const CustomTabTrigger = ({ text }: { text: string }) => {
  return (
    <TabsTrigger value={text} className='userInfoTabs__trigger'>
      {text}
    </TabsTrigger>
  );
};

export function UserInfoTabsList() {
  return (
    <CustomTabsList classNames='userInfoTabs__list'>
      {TAB_DATA.map((el, i) => (
        <CustomTabTrigger text={el} key={el + i} />
      ))}
    </CustomTabsList>
  );
}

export function UserInfoTabsContent({ userData }: { userData: UserInfo }) {
  return (
    <CustomTabsContent>
      <TabsContent value='General Details'>
        <UserDetailsSection userData={userData} />
      </TabsContent>
      <TabsContent value='Documents'>Documents</TabsContent>
      <TabsContent value='Bank Details'>Bank Details</TabsContent>
      <TabsContent value='Loans'>Loans</TabsContent>
      <TabsContent value='Savings'>Savings</TabsContent>
      <TabsContent value='App and System'>App and System</TabsContent>
    </CustomTabsContent>
  );
}
