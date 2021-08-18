import styled from "styled-components";
import {size} from "../../Components/Responsible";
const LayoutStyle = styled.div`
 

  .menu {
    font-weight: bold;
    color: white;
    margin: 1px;
    padding-top: 36px;
     height: 115vh;
  }

  .logo {
    width: 88%;
    padding: 1rem;
    padding-top:8rem;
  }

  .ant-layout-sider{
    background:linear-gradient(354.97deg, #ed3437 -4.39%, #f89c32 123.56%);

  }

  .myCustomLogo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
  }

.ant-menu ant-menu-root ant-menu-inline ant-menu-light menu{
  margin-top: 16%;
    padding-top: 15px;
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
 
 @media ${size["desktop-sm-max"]} {
 
    .menu{
       height: 131vh;
    }
  }

@media ${size["tablet-sm-max"]} {
  .myCustomLogo{
    padding-top: 100px;
  }

  .menu{
    padding-top: 116px;
    height: 50vh; 
  }
}


 @media ${size["mobile-sm-max"]} {
  .logo {
    width:90%;
   padding-top:6rem;
   }
   .ant-layout {
     width:146%;
   }
  
}

 










`;
export { LayoutStyle };


// @media screen and (min-width: 575px) {
//   .logo {
//    width:100%;
//   padding-top:1rem;
//   }
//   .ant-layout-sider-dark {
//     margin-top:4rem;
//    }
//    .menu{
//     height: 105vh;
//   }
// }