import OsmMap from './components/OsmMap';
import MainFooter from './components/MainFooter';
import HeaderSec from './components/Headersec';
 
import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined , TeamOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';

const {  Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <HeaderSec style={{ width: '100%' }} />
        <Content style={{ padding: '0 0' }}>
          <div style={{ background: colorBgContainer, height: 'calc(100vh - 128px)' }}>
            <OsmMap style={{ height: '100%' }} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <MainFooter />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
