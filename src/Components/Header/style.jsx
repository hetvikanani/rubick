import styled from "styled-components";
const HeaderStyle = styled.div`
  .subDiv {
    width: 100%;
    height: 50px;
    background-color: #f89c32;
    display: flex;
    justify-content: flex-end;
  }

  .headIcon {
    display: flex;
    justify-content: flex-end;
  }
  .ant-image-img {
    margin-top: 1rem;
  }
  .header {           
    color: white;
    margin: 15px;
  }
  .avatar {
    margin-left: -1rem;
  }


  // @media screen and (max-width: 400px) {
    
  //    .subDiv{
  //     position: relative;
  //     top: 0px;
  //     z-index: 99;
  //     }      
  //   }
`;
export { HeaderStyle };
