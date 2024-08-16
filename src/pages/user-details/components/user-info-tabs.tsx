import { TabsContent, TabsTrigger } from "@/components/primitives/pr-tabs";
import { TAB_DATA } from "@/constants";
import { CustomTabsContent, CustomTabsList } from "@/context/tabs-context";

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
      <div className='userInfoTabs__listWrapper'>
        {TAB_DATA.map((el, i) => (
          <CustomTabTrigger text={el} key={el + i} />
        ))}
      </div>
    </CustomTabsList>
  );
}

export function UserInfoTabsContent() {
  return (
    <CustomTabsContent>
      <TabsContent value='General Details'>General Info</TabsContent>
      <TabsContent value='Documents'>Documents</TabsContent>
      <TabsContent value='Bank Details'>Bank Details</TabsContent>
      <TabsContent value='Loans'>Loans</TabsContent>
      <TabsContent value='Savings'>Savings</TabsContent>
      <TabsContent value='App and System'>App and System</TabsContent>
    </CustomTabsContent>
  );
}
