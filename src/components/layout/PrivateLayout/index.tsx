import DashboardNavbar from "@/components/shared/DashboardNavbar";
import Sidebar from "@/components/shared/Sidebar";
import { Layout } from "antd";
import { ReactNode, useState } from "react";

const { Content } = Layout;

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Layout className="h-screen main-page-layout">
      <Sidebar collapsed={collapsed} />
      <Layout>
        <DashboardNavbar collapsed={collapsed} setCollapsed={setCollapsed} />

        <Content className="overflow-y-auto content-inner-layout scrollbar">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;
