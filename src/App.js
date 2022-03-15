import "./App.css";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { Routes, Route } from "react-router-dom";
import MainHeader from "./component/Header";
import MainSider from "./component/Sidebar";
import Countries from "./container/Countries/index";
import "antd/dist/antd.min.css";
import Wrapper from "./styles";
import { Layout } from "antd";

function App() {
  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/graphql",
  });
  const { Header, Content, Sider } = Layout;

  return (
    <ApolloProvider client={client}>
      <Wrapper>
        <Layout>
          <Header className="header">
            <MainHeader />
          </Header>
          <Layout className="content">
            <Sider className="sider">
              <MainSider />
            </Sider>
            <Content className="content-layout">
              <Routes>
                <Route path="/" exact element={<Countries />}  />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Wrapper>
    </ApolloProvider>
  );
}

export default App;
