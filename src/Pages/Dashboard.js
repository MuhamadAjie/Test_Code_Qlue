import { Layout, Menu } from "antd";
import { Image, NavDropdown, Navbar } from "react-bootstrap";
import "antd/dist/antd.css";
import TableTodos from "../Components/TableTodos";
import styles from "../Css/Dashboard.module.css";
import {
  TableOutlined,
  PieChartOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";

const { Content, Footer, Sider } = Layout;

function Dashboard() {
  return (
    <div>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className={`${styles.logo}`} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="1" icon={<TableOutlined />}>
              Table
            </Menu.Item>
            <Menu.Item key="2" icon={<PieChartOutlined />}>
              Graph
            </Menu.Item>
            <Menu.Item key="3" icon={<AreaChartOutlined />}>
              Map
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Navbar
            expand="lg"
            style={{
              top: "0",
              position: "sticky",
              zIndex: "10",
              backgroundColor: "#34BE82",
            }}
            className="d-flex flex-row-reverse"
          >
            <div className="me-5">
              <NavDropdown
                title={
                  <Image
                    width={50}
                    height={50}
                    className="text-primary my-auto"
                    src="../Assets/foto.png"
                    roundedCircle
                  />
                }
                className="me-4"
              >
                <NavDropdown.Item>
                  <Image
                    className="me-3"
                    width={20}
                    height={20}
                    src="../Assets/logout.png"
                  />
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Navbar>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className={`${styles.siteLayoutBg}`}
              style={{ padding: 24, minHeight: 360 }}
            >
              <h2>Table</h2>
              <TableTodos />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Dashboard App ©2022 Created by Muhamad Ajie Darmawan
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Dashboard;
