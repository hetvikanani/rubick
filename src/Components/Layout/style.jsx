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
     height: 100vh;
  }

  .logo {
    width: 100%;
    padding: 1rem;
    margin-top:5.5rem;
  }


  .myCustomLogo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
  }


.ant-layout{
  height:100vh;
  background: linear-gradient(354.97deg, #ed3437 -4.39%, #f89c32 123.56%);


}
  .ant-layout-sider-children {
    background: linear-gradient(354.97deg, #ed3437 -4.39%, #f89c32 123.56%);
    width: 100%;
    margin-top: -51.1px;
    padding-top: 0.1px;

  }
  .ant-layout-sider-dark {
    
    width:100% !important;
    max-width:100% !important;
    min-width:100% !important;
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

@media screen and (max-width: 400px) {
  .ant-layout-sider-dark {
   margin-top:4rem;
  }
}
`;
export { LayoutStyle };
// 576px
