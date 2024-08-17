import { createContext, useContext, ReactNode } from "react";
import { Tabs, TabsList } from "@/components/primitives/pr-tabs";
import { TabsProps } from "@radix-ui/react-tabs";

interface CustomTabsProps extends TabsProps {
  children: ReactNode;
}

interface CustomTabsListProps {
  children: ReactNode;
  classNames: string;
}

interface CustomTabsContentProps {
  children: ReactNode;
}

const TabsContext = createContext<boolean | null>(null);

export function CustomTabsProvider({ children, ...props }: CustomTabsProps) {
  return (
    <Tabs {...props}>
      <TabsContext.Provider value={true}>{children}</TabsContext.Provider>
    </Tabs>
  );
}

function useTabsContext(): boolean {
  const context = useContext(TabsContext);
  if (context === null) {
    throw new Error("Tabs components must be used within a CustomTabsProvider");
  }
  return context;
}

export function CustomTabsList({ children, classNames }: CustomTabsListProps) {
  useTabsContext();
  return <TabsList className={classNames}>{children}</TabsList>;
}

export function CustomTabsContent({ children }: CustomTabsContentProps) {
  useTabsContext();
  return <>{children}</>;
}
