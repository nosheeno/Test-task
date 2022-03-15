import styled from "styled-components";

const Wrapper = styled.div`
  .header {
    position: fixed;
    background: #b7a2a238 !important;
    padding: 0 3px;
    opacity: 111;
    z-index: 111;
    width: 100%;
  }
  .content {
    position: relative;
    margin-top: 64px;
  }
  .sider {
    background-color: #b7a2a238;
  }
  .content-layout {
    padding: 24px;
  }
  .ant-menu-root {
    height: 100vh;
  }
`;
export default Wrapper;
