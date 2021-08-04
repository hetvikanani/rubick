import styled from "styled-components";
const DashboardStyle = styled.div`

max-height: 100vh;
overflow-y: auto;
.displayDiv{
    border:1px solid red;
    padding: 6em;
    margin-top: 3em;

    .title{
        float:left;
    }
    .top-row-box {
        margin-top: 4em;
    border:3px solid yellow;

    .box{
        background: #ffffff;
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
        border-radius: 14px;
        border: 1px solid pink;
        margin: 10px 0 0 10px;

        // .ant-card-body {
        //     padding: 0;
        //     display: flex;
        //     height: auto;
        //     .ant-image {
        //       margin-left: auto;
        //       .topImg {
        //         padding: 1em;
        //       }
        //     }
          }
    }
   }
}

`;
export default DashboardStyle; 
