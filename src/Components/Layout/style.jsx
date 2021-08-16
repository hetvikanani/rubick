import styled from "styled-components";

const LayoutStyle = styled.div`
  .mainDiv {
    // background: linear-gradient(354.97deg, #ed3437 -4.39%, #f89c32 123.56%);
  }

  .menu {
    font-weight: bold;
    color: white;
    margin: 1px;
    padding-top: 36px;
    height: 34rem;
  }

  .logo {
    width: 100%;
    padding: 1rem;
  }


  .myCustomLogo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
  }

  .ant-layout-sider-children {
    background: linear-gradient(354.97deg, #ed3437 -4.39%, #f89c32 123.56%);
    width: 15rem;
    margin-top: -51.1px;
    padding-top: 0.1px;
  }
  ant-layout-sider-dark {
    background: white;
  }

  .ant-menu {
    background: linear-gradient(
      354.97deg,
      #ed3437 -4.39%,
      #f89c32 123.56%
    ) !important;
  }

.ant-menu-item :hover {   
  color:white;
    background-color: rgba(255,255,255,0.28); !important
}

.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color:rgba(255,255,255,0.28) ;
  color:white;

}

.ant-menu-vertical .ant-menu-item::after, .ant-menu-vertical-left .ant-menu-item::after, .ant-menu-vertical-right .ant-menu-item::after, .ant-menu-inline .ant-menu-item::after {
border-right: 0px solid #1890ff;
 }
 
//  @media screen and (max-width: 400){
//    .ant-layout-sider-children{
//     z-index: 0;
//     // width: 16rem;
//  }
// }
//  @media screen and (max-width: 400){
//   .myCustomLogo{
//    margin-top:3rem;
// }
// }
`;
export { LayoutStyle };
// 576px