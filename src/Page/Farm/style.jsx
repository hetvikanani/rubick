import styled from "styled-components";
const FarmStyle = styled.div`
  .RowNav {
    margin-top: 12px;
  }
  nav {
    width: 100vw;
    height: 60px;
    background-color: #183444;
    display: flex;
    justify-content: space-around;
  }
  .header {
    color: white;
   
    letter-spacing: 1px;
    font-size: 166%;
  }
  .ant-menu {
    background: #183444;
    color: white;
  }

  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border-right: none;
  }
  .ant-menu-submenu-arrow {
    padding-right: 6rem;
    padding-top: 4px;
    color: white;
  }
  .BtnTry {
    background: #f5a623;
  }
  .BtnLog {
    background: #183444;
    border: #183444;
    color: white;
    font-weight: bold;
  }

.aboutRow{
    width: 100%;
    height: 70vh;
  
}
.verticalLine{
    border-left: 1px solid red;
    height: 26rem;
}
`;

export { FarmStyle };
